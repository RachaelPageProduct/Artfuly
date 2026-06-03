/**
 * Webflow Asset Downloader
 * Crawls artfuly.com, extracts all Webflow CDN images, downloads them
 * to the correct public/images/ subfolder, and reports any failures.
 *
 * Run with: node scripts/download-assets.mjs
 */

import { createWriteStream, mkdirSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const PUBLIC_IMAGES = join(PROJECT_ROOT, 'public', 'images');

// ─── Folder mapping ───────────────────────────────────────────────────────────
// Maps page URL patterns to local image subfolder
function getFolderForPage(pageUrl) {
  const path = pageUrl.replace('https://www.artfuly.com', '').replace('https://artfuly.com', '');

  if (path.match(/^\/project\/(.+)/)) {
    const slug = path.match(/^\/project\/(.+)/)[1].replace(/\/$/, '');
    // Normalise known slug differences between Webflow and our folders
    const slugMap = {
      'mcdonalds-monopoly-mobile-site': 'mcdonalds-monopoly-web-app',
      'ticklists':                      'ticklists-app',
      'terra-listens-native-apps':      'terra-app',
      'terra-listens-conversion-site':  'terra-conversion-site',
    };
    return join('projects', slugMap[slug] || slug);
  }
  if (path.match(/^\/(design-resources|blog|articles)\//)) return 'articles';
  if (path.match(/^\/resources/))                           return 'resources';
  if (path.match(/^\/(travel|germany|sicily|intrepid|nomad|expat)/)) return 'travel';
  if (path.match(/^\/cuts-by-luke/))                        return 'cuts-by-luke';
  if (path.match(/^\/rachael-page/))                        return 'site';
  return 'site'; // fallback
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function cleanFilename(url) {
  const raw = url.split('/').pop().split('?')[0];
  // Decode URI encoding, replace spaces/special chars
  return decodeURIComponent(raw).replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-');
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AssetDownloader/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = createWriteStream(destPath);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      file.close();
      reject(err);
    });
  });
}

// ─── Extract Webflow CDN image URLs from HTML ─────────────────────────────────
function extractImageUrls(html) {
  const urls = new Set();
  const patterns = [
    /https:\/\/cdn\.prod\.website-files\.com\/[a-f0-9]+\/[^\s"'<>)]+\.(?:png|jpg|jpeg|gif|svg|webp)/gi,
  ];
  for (const pattern of patterns) {
    const matches = html.matchAll(pattern);
    for (const m of matches) {
      // Strip any query strings or trailing chars
      const clean = m[0].split('"')[0].split("'")[0].split(')')[0].split('\\')[0];
      urls.add(clean);
    }
  }
  return [...urls];
}

// ─── Get all page URLs from sitemap ──────────────────────────────────────────
async function getSitemapUrls() {
  console.log('📋 Fetching sitemap...');
  const xml = await fetchText('https://www.artfuly.com/sitemap.xml');
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  const urls = [];
  for (const m of matches) {
    const url = m[1].trim();
    // Skip non-content pages
    if (url.match(/\/(log-in|sign-up|reset-password|user-account|unsubscribe|confirmation)/)) continue;
    urls.push(url);
  }
  console.log(`   Found ${urls.length} pages\n`);
  return urls;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const log = { downloaded: [], skipped: [], failed: [], manual: [] };
  const seenUrls = new Set(); // avoid downloading duplicates

  console.log('🚀 Webflow Asset Downloader\n');

  // Ensure all image subdirs exist
  for (const dir of ['site', 'articles', 'resources', 'travel', 'cuts-by-luke']) {
    mkdirSync(join(PUBLIC_IMAGES, dir), { recursive: true });
  }

  // Get all sitemap URLs
  let pageUrls;
  try {
    pageUrls = await getSitemapUrls();
  } catch (e) {
    console.error('❌ Failed to fetch sitemap:', e.message);
    process.exit(1);
  }

  let pageCount = 0;
  for (const pageUrl of pageUrls) {
    pageCount++;
    process.stdout.write(`[${pageCount}/${pageUrls.length}] ${pageUrl.replace('https://www.artfuly.com', '')} ... `);

    let html;
    try {
      html = await fetchText(pageUrl);
    } catch (e) {
      console.log(`⚠️  skipped (${e.message})`);
      log.manual.push({ url: pageUrl, reason: `Page fetch failed: ${e.message}` });
      await sleep(300);
      continue;
    }

    const imageUrls = extractImageUrls(html);
    const folder = getFolderForPage(pageUrl);
    const folderPath = join(PUBLIC_IMAGES, folder);
    mkdirSync(folderPath, { recursive: true });

    let downloaded = 0;
    let skipped = 0;

    for (const imgUrl of imageUrls) {
      if (seenUrls.has(imgUrl)) { skipped++; continue; }
      seenUrls.add(imgUrl);

      const filename = cleanFilename(imgUrl);
      const destPath = join(folderPath, filename);

      if (existsSync(destPath)) {
        skipped++;
        log.skipped.push(destPath);
        continue;
      }

      try {
        await downloadFile(imgUrl, destPath);
        downloaded++;
        log.downloaded.push({ imgUrl, destPath: destPath.replace(PROJECT_ROOT, '') });
      } catch (e) {
        log.failed.push({ imgUrl, reason: e.message, page: pageUrl });
      }
    }

    console.log(`✓  ${downloaded} downloaded, ${skipped} skipped, ${imageUrls.length - downloaded - skipped} failed`);
    await sleep(400); // polite delay between pages
  }

  // ─── Report ───────────────────────────────────────────────────────────────
  console.log('\n' + '─'.repeat(60));
  console.log(`✅ Done!\n`);
  console.log(`   Downloaded: ${log.downloaded.length} files`);
  console.log(`   Skipped (already existed): ${log.skipped.length} files`);
  console.log(`   Failed: ${log.failed.length} files`);
  console.log(`   Pages needing manual check: ${log.manual.length}`);

  if (log.failed.length > 0) {
    console.log('\n⚠️  FAILED DOWNLOADS (may need manual download):');
    for (const f of log.failed) {
      console.log(`   ${f.imgUrl}`);
      console.log(`   → from: ${f.page}`);
      console.log(`   → error: ${f.reason}\n`);
    }
  }

  if (log.manual.length > 0) {
    console.log('\n⚠️  PAGES THAT COULD NOT BE SCRAPED:');
    for (const m of log.manual) {
      console.log(`   ${m.url} — ${m.reason}`);
    }
  }

  // Save full log to file
  const logPath = join(PROJECT_ROOT, 'scripts', 'download-log.json');
  writeFileSync(logPath, JSON.stringify(log, null, 2));
  console.log(`\n📄 Full log saved to scripts/download-log.json`);
}

main().catch(console.error);
