import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// rachaelpage.com serves /rachael-page/* content at its root (see netlify.toml rewrite rules),
// and that content is canonical on rachaelpage.com (see project-artfuly-canonical-domain memory).
// @astrojs/sitemap only supports one site per build (artfuly.com), so this is a hand-built
// equivalent for rachaelpage.com's own URL structure.

const workSlugs = [
  'all', 'product-design', 'ux-design', 'user-research-testing',
  'ui-design', 'strategy', 'ia-database-design', 'native-apps-pwas',
  'marketing-seo', 'conversion-funnels', 'development',
  'motion-design', 'graphic-design',
];

const creativeSlugs = [
  'alhambra-haven', 'bloomsbury-hounds', 'good-dogs', 'labyrinth',
  'pebble', 'shoreline-drift', 'verdant',
];

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');

  const paths = [
    '/',
    '/creative/photography/',
    '/creative/surface-pattern-design/',
    ...creativeSlugs.map((s) => `/creative/surface-pattern-design/${s}/`),
    ...workSlugs.map((s) => `/work/${s}/`),
    ...projects.map((p) => `/project/${p.data.slug}/`),
  ];

  const urls = paths
    .map((p) => `<url><loc>https://rachaelpage.com${p}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
