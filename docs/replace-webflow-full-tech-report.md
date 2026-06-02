# Replace Webflow — Full Tech Stack Report
*Generated June 2026*

---

## What We're Replacing

| Currently in Webflow | Volume |
|---|---|
| artfuly.com — static pages | ~8 pages |
| artfuly.com — /resources CMS collection | 47 items |
| artfuly.com — portfolio case studies | 27 projects |
| artfuly.com — blog/design articles | ~50 articles |
| artfuly.com — travel/lifestyle articles | ~10 articles |
| rachaelpage.com | Redirects to artfuly.com/rachael-page — same site |

**Annual saving if replaced: $328**

---

## The Tech Stack Components

You need four things: a **build framework**, a **CMS** (for adding content via form), **hosting**, and **forms**.

---

## 1. Build Framework

### Astro ✅ Recommended
- **Cost: Free, open source (MIT licence)**
- What it is: generates fast, static HTML pages from your content + templates. Industry standard for portfolio/content sites.
- You define a page template once (e.g. "Portfolio Project") and it generates all 27 pages automatically from your CMS content.
- No server needed — output is just HTML/CSS/JS files, hosted anywhere for free.
- You never need to touch this directly; Claude sets it up.

---

## 2. CMS — The "Add New Project" Form

This is the most important decision. Three options compared:

---

### Option A: Decap CMS (formerly Netlify CMS)
**Cost: Completely free. Open source. No third-party dependency.**

**How it works:**
- Two small config files live inside your website's GitHub repository
- You go to `artfuly.com/admin` in your browser
- You see a list of your content collections: "Portfolio Projects", "Resources", "Articles"
- Click "New Portfolio Project" → a form appears with every field you defined: Title, Client, Year, Tags, Description, images (drag-and-drop upload), body text (rich text editor)
- Hit Save → Decap commits a text file to your GitHub repo automatically (you never see this)
- GitHub rebuilds the site → live in about 60 seconds

**What the admin UI looks like:**
Clean, functional form interface. Not as polished as Webflow's CMS but entirely usable. Left panel = list of entries. Right panel = edit form. Image uploader built in. Rich text editor for long content. Preview pane available.

**Pros:**
- Zero cost forever, no pricing risk
- All your content lives as files in your own GitHub repo — you own it completely
- Works with Firebase hosting (doesn't require Netlify despite the old name)
- If you stop using it, your content is still there as plain text files

**Cons:**
- Slightly less polished UI than Contentful
- Initial setup is more technical (Claude handles this)
- Each save triggers a GitHub commit + rebuild cycle (~60 seconds before you see it live)

---

### Option B: Contentful
**Cost: Free tier — 10,000 records, 100k API calls/month, 50GB bandwidth. Paid tier jumps to €300/month (not needed).**

**How it works:**
- You log into app.contentful.com (separate website, not your own domain)
- Polished editor interface — most similar to Webflow's CMS in feel
- Fill in forms for each content type, upload images, hit "Publish"
- Webhook tells your site to rebuild → live in ~60 seconds

**What the admin UI looks like:**
Very clean, professional. Feels like a proper SaaS product. Fields laid out clearly, image uploads with crop/resize tools, content preview. The nicest editing experience of all three options.

**Pros:**
- Best editing UI — most pleasant to use day-to-day
- Handles image CDN and optimisation itself
- 10,000 records is more than enough (you have ~150 total CMS items)

**Cons:**
- Your content lives on Contentful's servers, not yours
- If they ever retire the free tier or change pricing, you'd need to migrate content
- You depend on their uptime for the admin panel (the live site itself is still static and unaffected)
- Requires internet to edit content (same as Webflow)

---

### Option C: TinaCMS
**Cost: Free tier — 2 users, community support. Paid from $24/month (not needed for solo use).**

**How it works:**
- The most visual of the three — you can edit content *inline on your actual website* (click a heading to edit it in place)
- Also has a standard form-based admin at `yoursite.com/admin`
- Content stored in your GitHub repo (like Decap)

**What the admin UI looks like:**
The most innovative interface — you browse your live site and click to edit directly on the page. Alternatively, use the sidebar form editor. Visual and intuitive.

**Pros:**
- Inline visual editing is genuinely impressive
- Content stored in your repo (same advantage as Decap)
- Free for solo use

**Cons:**
- Newer product, less mature than Contentful
- Slightly more complex integration with Astro
- Visual editing works best for simple text; complex portfolio layouts need the form view anyway

---

### CMS Recommendation

**For you: Decap CMS. ✅**

The deciding factor is embed support. Your portfolio case studies use Figma prototype embeds, Bunny video players, and Lottie animations. Decap uses markdown, which accepts raw HTML — so you paste an embed code and it just works. **Contentful's rich text deliberately blocks arbitrary HTML**, meaning every embed would require a custom workaround. That alone rules it out for your use case.

Additional reasons: you're the only user, all content stays in your own GitHub repo with zero pricing risk, and it connects cleanly to Firebase hosting which you already use.

| Feature needed | Decap CMS | Contentful |
|---|---|---|
| HTML embeds (Figma, Bunny video iframes) | ✅ Paste raw HTML in markdown | ❌ Blocked — needs custom workaround |
| Code blocks | ✅ Native markdown | ✅ Supported |
| Lottie animations | ✅ Upload .json + reference via HTML tag | ⚠️ Awkward — needs custom entry type |
| Rich text / long content | ✅ Markdown editor | ✅ Structured editor |
| All Webflow field types (gallery, relation, toggle, multi-select) | ✅ All supported | ✅ All supported |

**You can try Decap CMS's demo yourself here:** https://cms-demo.netlify.com
*(No login needed — just click around to see what the editor feels like.)*

---

## 3. Hosting

### Firebase Hosting ✅ Recommended
**Cost: Free (Spark plan)**

- You already have a Firebase account and deploy workflow (for Ticklists)
- Supports custom domains (artfuly.com, rachaelpage.com)
- Free SSL certificates
- Global CDN
- 10 GB storage, 360 MB/day transfer on free plan — more than enough for a portfolio site
- Deploy command: `firebase deploy --only hosting` (same as Ticklists)

### Alternative: GitHub Pages
**Cost: Free**
- Slightly simpler setup
- 1 GB storage, 100 GB/month bandwidth — plenty
- Custom domains + SSL supported
- Con: takes slightly longer to set up custom domains vs Firebase

### Alternative: Netlify
**Cost: Free tier**
- 100 GB bandwidth/month
- Integrates natively with Decap CMS (they made it originally)
- Auto-deploys on every GitHub commit — no manual deploy command needed
- Con: another account/service to manage

**Firebase is the right call** — you already have it set up and know how it works.

---

## 4. Contact Forms

Webflow handles your contact form. You need a replacement.

### Formspree
**Cost: Free — 50 submissions/month**
- Add a one-line form action URL to your HTML
- Submissions arrive in your email
- Simple, reliable, no backend needed
- 50/month is plenty for a portfolio contact form

### Alternative: Web3Forms
**Cost: Free — 250 submissions/month**
- Same concept, more generous free tier
- No account dashboard (submissions by email only)

**Recommendation: Formspree free tier** — more than sufficient.

---

## 5. Image Hosting

Portfolio sites have lots of images. Options:

### Store in GitHub repo (simplest)
**Cost: Free**
- Images live alongside your code in the repository
- Fine for a portfolio — typical project images are small
- GitHub has a 1 GB soft limit for repos but this is rarely an issue for image portfolios
- Decap CMS uploads images directly to your repo

### Cloudinary
**Cost: Free — 25 credits/month (~25,000 image transformations)**
- Cloud image CDN with auto-optimisation (WebP conversion, responsive sizes)
- Slightly faster load times than repo images
- Overkill for a portfolio but a nice option

**Recommendation: GitHub repo storage** — simplest, free, no extra account.

---

## Full Cost Summary

| Component | Tool | Annual Cost |
|---|---|---|
| Build framework | Astro | **Free** |
| CMS admin | Decap CMS | **Free** |
| Hosting | Firebase Hosting | **Free** |
| Contact forms | Formspree | **Free** |
| Image storage | GitHub repo | **Free** |
| Domains (artfuly.com, rachaelpage.com) | Already owned | **$0 (already paid)** |
| **Total** | | **$0/year** |
| **Webflow current cost** | | **$328/year** |
| **Annual saving** | | **$328** |

---

## Full Tech Stack Diagram

```
You (in browser)
    ↓
artfuly.com/admin  ← Decap CMS admin panel
    ↓ (saves content files)
GitHub repository  ← all content + code stored here
    ↓ (triggers auto-rebuild)
Astro build        ← generates HTML from templates + content
    ↓ (deploy)
Firebase Hosting   ← serves artfuly.com + rachaelpage.com
    ↑
Visitors
```

---

## Migration Scope

Everything migrated:

| Content | Items | Effort |
|---|---|---|
| Static pages (home, about, courses, tutoring, privacy, impressum) | ~8 | Low |
| /resources items | 47 | Medium |
| Portfolio case studies | 27 | High (image-heavy) |
| Blog/design articles | ~50 | Medium |
| Travel/lifestyle articles | ~10 | Low–Medium |
| Category filter pages | 15 | Low (auto-generated) |

**Total content items to migrate: ~155**

The development (templates, CMS config, deploy pipeline) Claude handles. The migration of actual content (copying text, re-uploading images from the existing Webflow site) is the time-consuming part — either Claude does it systematically or you do it in batches.

---

## Project Plan & Your Time Commitment

### Task 1 — Proof of concept: recreate artfuly.com/project/terra-app
Claude builds: Astro project, Decap CMS config, Firebase deploy pipeline, one full case study page matching the terra-app design and all field types.
- **Your time: ~30–45 min** — review the page, test the admin form, give feedback
- **Claude's time: 1 session**
- Goal: confirm the approach works before committing to full migration

### Task 2 — Recreate rachaelpage.com homepage
Claude builds: the full /rachael-page layout with featured projects, category filters, skills section, experience timeline, testimonials, photography gallery, contact section.
- **Your time: ~30–45 min** — review and feedback
- **Claude's time: 1 session**

### Task 3 — Migrate all content from Webflow
Claude systematically scrapes every live page and creates content files. This covers: 27 portfolio case studies, 47 resources, ~50 blog articles, ~10 travel articles, all static pages.
- **Your time: ~3–4 hours total** — spread across multiple sessions, reviewing batches of migrated content (not all at once)
- **Claude's time: 3–5 sessions**
- Images: Claude pulls images from the live Webflow URLs. Any images behind login or not publicly accessible would need you to export them from Webflow manually.

### Task 4 — DNS switchover and Webflow cancellation
- **Your time: ~30 min** — update DNS records, test both domains, confirm all live, cancel Webflow subscription
- **Claude's time: minimal** — provide exact DNS instructions

---

### Total time from you: approximately 5–6 hours across multiple sessions
Claude does all the code, all the scraping, all the content migration. You review, approve, and test.

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Site looks different after migration | Claude matches current design; you review before DNS switch |
| SEO impact from moving off Webflow | All URLs preserved; 301 redirects for any that change; no ranking drop expected |
| Something breaks post-launch | Webflow stays live until you manually cancel; instant rollback possible |
| Decap CMS feels clunky | Try the demo first; easy to switch to Contentful if preferred |
