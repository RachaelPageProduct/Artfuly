# To Do — Artfuly & Folio Site

## Portfolio case studies needing work

### 2026-09-22

Still need a Lottie animation for the card thumbnail + project header, and more general work (images, write-up), same treatment as Ticklists/Love2Learn/Terra Native Apps/McDonald's/Sydney Uni:

- **KPMG User Research** (`kpmg-user-research`)
- **PWC Knowledge Sharing Intranet** (`pwc-knowledge-sharing-intranet`)
- **Amcor Products** (`amcor-products`)
- **ING Banking App** (`ing-banking-app`) — also still needs real images; checked the Wix source page directly and confirmed none exist there (text-only page), so this needs old-drive material or new material, not a re-scrape.
- **QIC Futuristic Mall App & Site** (`futuristic-mall`)
- **VEDA Big Data SaaS** (`veda-big-data-saas`)

## Broken links / redirect loops

Picked up by the monthly broken-link check (`monthly-broken-link-check` scheduled task). Terse, actionable, grouped by URL.

### 2026-09-05

- **`rachaelpage.com/about/` → 404** — linked from the shared footer/nav on `rachaelpage.com/design-resources/creative-careers-in-tech-an-experts-advice/`, `.../the-part-of-product-design-ai-still-cant-do/`, `.../elevenlabs-for-designers/`. Page exists fine at `artfuly.com/about/` (200) — footer component is rendering an Artfuly-only relative link on the rachaelpage.com domain.
- **`rachaelpage.com/impressum/` → 404** — same three pages, same cause. Exists at `artfuly.com/impressum/`.
- **`rachaelpage.com/privacy/` → 404** — same three pages, same cause. Exists at `artfuly.com/privacy/`.
- **`rachaelpage.com/tools/` → 404** — same three pages, same cause. Exists at `artfuly.com/tools/`.
- **`rachaelpage.com/top-ux-resources/` → 404** — same three pages, same cause. Exists at `artfuly.com/top-ux-resources/`.
- **`rachaelpage.com/shop/books/surface-pattern-design-playbook/` → 404** — same three pages, same cause. Exists at `artfuly.com/shop/books/surface-pattern-design-playbook/`.

**Likely root cause:** the three `/design-resources/*` article pages are rendered on the `rachaelpage.com` domain (linked from the RP homepage) but share a footer/nav component whose links assume it's on `artfuly.com` — check whether these design-resources articles are supposed to render on rachaelpage.com at all (per the canonical domain split, design-resources belongs on artfuly.com), or whether the shared footer needs to be domain-aware.

No other 404s, 5xx errors, or redirect loops found on either domain this run — crawled homepage + one level deeper (~130 unique internal URLs across both sites). The 3 legacy no-prefix URLs on rachaelpage.com (`/project/terra-app`, `/project/artfuly-original-art-marketplace`, `/work/native-apps-pwas`) still redirect cleanly to their `/rachael-page/...` equivalents in a single hop — not a loop.
