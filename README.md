# Artfuly.com — Astro Rebuild Notes

## Project overview
Rebuilding artfuly.com from Webflow to an Astro static site. The Webflow site remains live during the rebuild. This Astro build is tested locally before any deployment.

## Dev server
```
cd "CLAUDE ACCESS FILES/Artfuly & Folio Site"
npm run dev
# → http://localhost:4321
```

## Key file locations
| What | Path |
|------|------|
| Layout (nav + prefooter + footer, all pages) | `src/layouts/ArtfulyLayout.astro` |
| Homepage | `src/pages/index.astro` |
| Design Resources listing page | `src/pages/design-resources/index.astro` |
| Article template | `src/pages/design-resources/[slug].astro` |
| Article content (MD files, 47 articles) | `src/content/articles/*.md` |
| Supplemental CSS (overrides webflow.css) | `public/styles/artfuly.css` |
| Webflow base CSS (do not edit) | `public/styles/webflow.css` |

## CSS architecture
`webflow.css` is the original Webflow export — never edit it. All overrides and new styles go in `artfuly.css`, loaded after webflow.css. Use `!important` sparingly where webflow rules would win otherwise.

## Layout structure (ArtfulyLayout.astro)
1. **Nav** — `.navbar-3.w-nav` — desktop links + hamburger for mobile
2. **Mobile overlay** — `#artfuly-nav-overlay` — direct child of `.w-nav` (not inside `.container-navbar`) — right-panel drawer, `width: min(360px, 60vw)`
3. `<slot />` — page content injected here
4. **Prefooter** — `.homecontactsection` — teal background with contact form (Formspree) + "Book a time" button (Typeform)
5. **Wave SVG** — `.section-11` — overlaps prefooter via `margin-top: -362px` from webflow.css; `min-height: 350px` in artfuly.css
6. **Footer links** — `.section-12` — teal strip; uses `margin-top: -120px` in artfuly.css to close the gap after the wave
7. **Copyright** — `.section-14`

## Article MD frontmatter fields
```yaml
title:
slug:
date:
description:          # shown as card subtitle on listing page
introHeading:         # teal intro summary shown at top of article body
heroImage:            # full-width header image URL
thumbnailImage:       # card thumbnail URL (used in "More design resources" cards)
published:            # true/false
featured:
featuredPortfolio:
ctaText:              # button label at bottom of article
ctaLink:              # button URL at bottom of article (affiliate or course link)
titleTag:
metaDescription:
```

## What's done
- [x] Layout: nav, hamburger overlay (right-panel drawer), prefooter (form + book button), wave, footer links, copyright
- [x] Homepage (`/`) — full content migrated
- [x] Design Resources listing page (`/design-resources/`)
- [x] Article template (`/design-resources/[slug]/`) — hero, author, intro heading, body, CTA button, share, related cards, email CTA, lead magnets
- [x] 47 article MD files with `introHeading` batch-added from CSV
- [x] `thumbnailImage` used for "More design resources" cards (falls back to heroImage)
- [x] Author image fallback = Rachael's CDN headshot URL
- [x] Contact form: Formspree fetch-submit, inline success message (no redirect)
- [x] `tutor-btn` button styles global in artfuly.css (coral and teal variants)
- [x] Footer gap fixed: `margin-top: -120px` on `.section-12`
- [x] Wave white-strip fix: `min-height: 350px` on `.section-11`
- [x] Email CTA text: right-aligned on desktop (`.white.right` in artfuly.css)
- [x] "Send Video Tutorial" button text on lead magnets section
- [x] Design Resources pills — 6-category filter (Careers & Hiring · Portfolios · Tools & Software · Design Craft · AI · SEO & Marketing). `category` frontmatter on all 54 articles; page-based routes at `/design-resources/category/[slug]/`; shared `ResourcePills.astro` + `ArticleGrid.astro`; category list in `src/data/resourceCategories.ts`

## Surface Pattern Design Playbook — book page (added Jun 2026)

**Strategy context:** income plan = market the products Rachael already has (books, patterns, app) through the sites; NO courses, video, live teaching, paid ads, or contracting (see memory `feedback-no-video-no-courses`). Sites are the SEO + persuasion hub; transactions happen on external platforms (Amazon/Spoonflower/etc.).

**Shop URL structure** (future-proof; `/shop` NOT added to nav until 3+ products):
```
/shop/books/[slug]      → links out to Amazon
/shop/patterns/[slug]   → Spoonflower / Patternbank
/shop/guides/[slug]     → Payhip/Gumroad (if ever)
```

**Book retitle:** old = "How to create Wallpaper, Mural & Fabric designs for Spoonflower"; NEW = **"The Surface Pattern Design Playbook: Create & Sell Patterns for Fabric, Wallpaper & Murals on Spoonflower & Beyond"**. Amazon ASIN **B0FB9GGD4V** (unchanged on retitle, so reviews + branded link survive).

### Done
- [x] Book sales page: `src/pages/shop/books/surface-pattern-design-playbook.astro` — full-width header banner, centred text hero, value props (Create / Sell / **Optimise with AI**), "who it's for", "what's inside", proof images, differentiator, final CTA; Book JSON-LD schema; responsive.
- [x] Header banner image: `/images/site/3d book on table.png` (Gemini lifestyle render), `object-position: center 22%` so full title shows. NOTE: image is 881px → soft when full-width; Rachael to upscale later.
- [x] Flat cover saved: `/images/site/spd-playbook-flat-cover.png` (used as og:image + schema image). Duplicate `SPD Playbook flat cover.png` (spaces) can be deleted.
- [x] Proof image: `/images/patterns/pebble/mockups/Bathroom mockup 1.jpeg` (Pebble wallpaper in situ) + flamingo.
- [x] All CTAs → `https://artfuly.click/book-spoonflower` (existing branded link; **out of Rebrandly quota this month** so reused it instead of making `/spd-playbook`).
- [x] `BookPromo.astro` rewired: new title, new cover (`spd-playbook-flat-cover.png`), button → `/shop/books/surface-pattern-design-playbook`. Now renders on: `/design-resources` listing, `/tools`, AND every article page (`[slug].astro`, placed after Share / before "More design resources").

### Still to do (this book)
- [ ] **KDP (Rachael's login):** retitle the Title + Subtitle fields; upload the flat cover (already shows new title); then apply the keywords/categories below.
- [ ] **Draft NOT yet done:** 7 backend keywords + 2 categories + refreshed Amazon description (next task).
- [x] Old book article repurposed (not retired) for SEO/AEO: renamed `src/content/articles/how-to-sell-your-designs-on-spoonflower.md` (new slug `/design-resources/how-to-sell-your-designs-on-spoonflower`). Informational intent (avoids cannibalising the `/shop` buy-intent page), question H2s + answer-first copy, FAQPage JSON-LD, hero/thumb = Pebble bathroom mockup, CTA + inline link → `/shop` page. Old slug now 404 (no redirect — little SEO built up).
- [ ] Replace placeholder Gemini 3D mockups — spine text is garbled (AI artifact); redo cleanly. Optional: standalone 3D mockup image for Pinterest/social (Canva/Smartmockups).
- [ ] Upscale the header banner image (currently soft at full width).
- [ ] Nothing deployed yet — batch with other changes (Netlify deploy limit).

## What's still to do
- [ ] Change Thinkific to https://payhip.com/


- [ ] Rebrandly — brand the remaining Top Resources links next month (free plan = 25 new links/mo; quota used up this period, resets ~20 Jun): **Claude Design**, OBS Studio, Blobbb, Convert Case, Ultimate Google Font Pairings, Colour Theory article, Patagonia Action Works, Catchafire, + 5 books (Design of Everyday Things, Don't Make Me Think, Sprint, Lean UX, Field Guide to HCD). Then repoint those URLs in `src/data/topResources.ts`.
- [x] Top Resources tool — rebuild the old Webflow "Top UX Resources" natively as a filterable directory at root `/top-ux-resources` (preserve URL for SEO), featured as a card in `/tools`. Uses the scaffolded `resources` content collection. Curate the 62 live entries (prune 4× Adobe XD, Sketch, dead links, pirated free-PDF book links → ~45) and swap in affiliate links (see memory `reference-affiliate-links`)
- [x] Spoonflower book promo section — on `/design-resources` + `/tools`: book cover + "client-free, commute-free, work-from-anywhere" angle, linking to **`https://artfuly.click/book-spoonflower`** (branded short link → Amazon Kindle / KDP) — NOT the Kit epub (KDP chosen to protect distribution / DRM)
- [ ] Verify footer gap / wave overlap looks correct on live browser (last change: section-12 margin-top: -120px — user hadn't confirmed yet)
- [ ] `/private-tutor-mentor` — redirect to artfuly.com (same content, SEO redirect only, no page needed)
- [ ] `/booking` and `/booking-mentorship` pages (Stripe payment links needed)
- [ ] `/rachael-page/` author page
- [ ] About, Privacy, Impressum pages
- [ ] Portfolio project pages (26 items not yet migrated)
- [ ] Onboarding / explainer content pages (if any)
- [ ] Final deployment (host TBD — Netlify or Firebase static)

## Known CSS gotchas
- `.nav-menu-3` has `justify-content: space-between` from webflow.css → override with `justify-content: flex-start !important` inside the overlay
- `.w-nav` is `position: fixed; width: 0` → overlay must use `width: 100vw` not `width: 100%`
- `section-11` has `margin-top: -362px` from webflow.css (breakpoint-dependent) — never add `margin-top` to section-11 in artfuly.css or it will win at some breakpoints
- `tutor-btn` was originally scoped to index.astro `<style>` block — it now lives globally in artfuly.css
- Webflow overrides `.right` to `text-align: center` at some breakpoints — override with `.white.right { text-align: right }` in artfuly.css
