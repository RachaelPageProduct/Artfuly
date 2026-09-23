# To Do — Artfuly & Folio Site

## Portfolio case studies needing work

### 2026-09-22

Still need an animation (MP4, 16:10, see spec below) for the card thumbnail + project header, and more general work (images, write-up), same treatment as Ticklists/Love2Learn/Terra Native Apps/McDonald's/Sydney Uni/Amcor:

- **KPMG User Research** (`kpmg-user-research`)
- **PWC Knowledge Sharing Intranet** (`pwc-knowledge-sharing-intranet`)

### Hidden for now — bring back once there's time for animation + writeup + images

Archived out of `src/content/projects/` into `src/content/_archived-projects/` on 22 Sep (moved, not deleted — content is intact, `nextProject` chain relinked around them so nothing dangles):

- **ING Banking App** (`ing-banking-app`) — also needs real images from scratch; checked the Wix source page directly and confirmed none exist there (text-only page), so this needs old-drive material or new material, not a re-scrape.
- **QIC Futuristic Mall App & Site** (`futuristic-mall`)
- **VEDA Big Data SaaS** (`veda-big-data-saas`)

To bring one back: move its `.md` file from `_archived-projects/` back to `projects/`, give it a `featuredOrder` slot in the sequence, and relink `nextProject` on both sides (the project before it in the chain, and this project's own `nextProject`) to weave it back in.

### Lottie → MP4 replacement — done

All folio animations are now MP4, not Lottie (Ticklists, Love2Learn, McDonald's, Sydney Uni, Terra Native Apps, Cuts By Luke, GMO). Current spec: one file, 1152×720 (16:10, this project's tested free-tier ceiling on Jitter — 1600×1000 needs a paid plan), 15fps, used for both `cardVideo`/`heroVideo`. Re-encode whatever comes in with `libx264 -preset slow -crf 24 -pix_fmt yuv420p -movflags faststart`, and always extract a static end-frame (a moment fully in frame, not blank) for the `halfWidthImage` poster.

Not a folio project, but same issue: **artfuly.com's own homepage hero** still uses `/lotties/ticklists-animation-artfuly.json` (6MB Lottie) — worth replacing too if this becomes a general sweep.

## Bunny.net video hosting — GMO 403s — fixed 2026-09-23

Both video embeds on the **GMO** project page (`gmo.md`, "Viral WhatsApp GMO Animation") were rendering a literal "403" inside the player — confirmed on localhost AND live production.

**Root cause found and fixed:** it was never a Bunny.net account/library problem (library `411197` is healthy — confirmed by loading `terra-website.md`'s and `terra-app.md`'s videos from the same library directly, both fine). The 2 GMO videos were the only ones routed through a `cdn.embedly.com` oEmbed proxy wrapper (leftover from the original Webflow rich-text paste), and embedly's proxy itself was returning the 403 — the underlying Bunny.net video played perfectly when hit directly. Fixed by swapping both GMO iframes from the embedly wrapper to a direct `iframe.mediadelivery.net/embed/...` src (same pattern already used on Terra Website/Terra App), keeping the existing Webflow padding-bottom aspect-ratio wrapper. Verified working on localhost — no more 403, real player loads. Not yet pushed/deployed (see next Netlify batch).

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
