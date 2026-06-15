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

## What's still to do
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
