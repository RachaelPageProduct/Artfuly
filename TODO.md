# To Do — Artfuly & Folio Site

Picked up by the monthly broken-link check (`monthly-broken-link-check` scheduled task). Terse, actionable, grouped by URL.

## Broken links / redirect loops

### 2026-09-05

- **`rachaelpage.com/about/` → 404** — linked from the shared footer/nav on `rachaelpage.com/design-resources/creative-careers-in-tech-an-experts-advice/`, `.../the-part-of-product-design-ai-still-cant-do/`, `.../elevenlabs-for-designers/`. Page exists fine at `artfuly.com/about/` (200) — footer component is rendering an Artfuly-only relative link on the rachaelpage.com domain.
- **`rachaelpage.com/impressum/` → 404** — same three pages, same cause. Exists at `artfuly.com/impressum/`.
- **`rachaelpage.com/privacy/` → 404** — same three pages, same cause. Exists at `artfuly.com/privacy/`.
- **`rachaelpage.com/tools/` → 404** — same three pages, same cause. Exists at `artfuly.com/tools/`.
- **`rachaelpage.com/top-ux-resources/` → 404** — same three pages, same cause. Exists at `artfuly.com/top-ux-resources/`.
- **`rachaelpage.com/shop/books/surface-pattern-design-playbook/` → 404** — same three pages, same cause. Exists at `artfuly.com/shop/books/surface-pattern-design-playbook/`.

**Likely root cause:** the three `/design-resources/*` article pages are rendered on the `rachaelpage.com` domain (linked from the RP homepage) but share a footer/nav component whose links assume it's on `artfuly.com` — check whether these design-resources articles are supposed to render on rachaelpage.com at all (per the canonical domain split, design-resources belongs on artfuly.com), or whether the shared footer needs to be domain-aware.

No other 404s, 5xx errors, or redirect loops found on either domain this run — crawled homepage + one level deeper (~130 unique internal URLs across both sites). The 3 legacy no-prefix URLs on rachaelpage.com (`/project/terra-app`, `/project/artfuly-original-art-marketplace`, `/work/native-apps-pwas`) still redirect cleanly to their `/rachael-page/...` equivalents in a single hop — not a loop.
