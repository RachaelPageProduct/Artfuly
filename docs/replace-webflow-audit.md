# Replace Webflow — Feasibility Audit
*Generated June 2026*

---

## Current Webflow Cost
**$328/year** → target: $0/year (or near zero)

---

## What's Actually on These Sites

### artfuly.com
| Section | Type | Volume |
|---|---|---|
| Static pages (home, about, privacy, impressum, tutoring, courses) | Static | ~8 pages |
| /resources | CMS collection | 47 items |
| Portfolio projects (/project/…) | CMS collection | 27 case studies |
| Work category filters (/work/product-design etc.) | Filter views | 15 categories |
| Blog/article pages | CMS | ~50+ articles |
| User account pages (login, signup, reset password) | Webflow Memberships | 5 pages |
| Travel section (Sicily, Germany, etc.) | CMS or static | ~10 pages |
| Cuts By Luke | Static or CMS | ~5 pages |
| Course/booking pages | Static + Thinkific embed | ~5 pages |

### rachaelpage.com
Redirects entirely to artfuly.com/rachael-page — it's just one page plus 27 project subpages, already part of artfuly.com. No separate hosting needed.

---

## What You Specifically Need Rebuilt

### 1. /resources (artfuly.com)
- 47 items, each with: title, category (1 of 8), description, tags (from a ~50-tag list), image thumbnail, 1–2 URLs
- Filterable by category AND by multiple tags simultaneously
- **Equivalent:** JSON/markdown data file + JavaScript filtering. No database needed.

### 2. Portfolio projects (rachaelpage.com)
- 27 case studies, each rich: multiple image sections, narrative text, embedded content (maps, prototypes), skills metadata, client/timeline/tools info
- Homepage shows 3 featured projects; /work/all shows all 27 with category filters
- **"Form upload" requirement:** You want to add new projects via a form, not by editing code files
- This is the most complex requirement — see options below.

---

## Complexity Rating by Section

| Section | Complexity | Notes |
|---|---|---|
| Static pages (home, about, impressum, privacy) | Very easy | Plain HTML/CSS |
| /resources with filters | Easy–Medium | JSON data file + ~50 lines of JS |
| Portfolio grid + filters | Medium | Same pattern as resources |
| Individual case study pages | Medium | Rich content but templated structure |
| **Admin form to add portfolio projects** | **Medium–Hard** | Main complexity driver — see below |
| Blog/articles (~50+) | Medium | Content migration is time, not complexity |
| User accounts (login/signup) | Hard — skip | Only needed if you're selling memberships |
| Contact forms | Easy | Free form services available |
| rachaelpage.com redirect | Trivial | One DNS redirect |

---

## The CMS Replacement — Your Options

You need to be able to add portfolio projects via a form, not via code. Three realistic options:

### Option A: Decap CMS (formerly Netlify CMS) — Recommended
- **What it is:** Open-source, file-based CMS. Runs as a web interface in your browser. Saves content as markdown/JSON files to GitHub.
- **How it works:** You go to yoursite.com/admin, log in with GitHub, fill in a form for a new project (title, description, images, tags, etc.), hit save. It commits the file to GitHub and the site rebuilds automatically.
- **Cost:** Free. GitHub Pages hosting = free. Build tool (Astro or 11ty) = free.
- **Downside:** Images still need uploading to a folder (it handles this in the UI). Slightly technical to set up initially.

### Option B: Contentful (Headless CMS) — Easiest to use
- **What it is:** Cloud CMS with a polished editor UI. You define content types (Portfolio Project, Resource), fill in forms, publish. Site fetches data at build time.
- **Cost:** Free tier covers 25,000 records and 2 users — more than enough. 
- **How it works:** Edit content on contentful.com → push "Publish" → GitHub Action rebuilds and deploys the site.
- **Downside:** You depend on a third-party service (though free tier is very stable). If they change pricing, you'd need to migrate again.

### Option C: Firebase with custom admin panel
- **What it is:** Store content in Firestore, build a simple /admin page with forms.
- **Cost:** Free on Firebase Spark plan (you already use this for Ticklists).
- **Downside:** More build work upfront. You'd be building a mini-CMS from scratch.

**Recommendation: Option B (Contentful) for ease of use, or Option A (Decap CMS) if you want zero external dependencies.**

---

## Hosting

| Option | Cost | Notes |
|---|---|---|
| GitHub Pages | **Free** | Static sites only, custom domain supported, SSL free |
| Firebase Hosting | **Free** (Spark plan) | You already have this set up for Ticklists |
| Netlify | **Free** (starter) | 100GB bandwidth/month, auto-deploy from GitHub |

**Recommendation: Firebase Hosting** — you already have the account, deploy workflow, and custom domain setup experience. Keeps everything in one place.

---

## Migration Effort Estimate

| Task | Estimated Time |
|---|---|
| Set up new site (Astro + chosen CMS + Firebase deploy) | 2–4 hours (Claude does this) |
| Migrate /resources (47 items → content entries) | 2–3 hours |
| Migrate 27 portfolio case studies | 8–15 hours (content-heavy, image-heavy) |
| Migrate static pages | 1–2 hours |
| Migrate blog articles (~50) | 5–10 hours |
| DNS switchover + testing | 1–2 hours |
| **Total** | **~20–35 hours** |

The time is almost entirely content migration (copying text, re-uploading images), not development. Claude can do the development; you'd review and approve. The portfolio case studies are the biggest chunk — they each have multiple image sections and rich narrative content.

**Scope decision for you:** Do you want to migrate everything, or just the core (resources + portfolio) and leave the blog/travel/Cuts by Luke pages? Scoping down to just what matters could halve the migration time.

---

## What You'd Lose from Webflow

- Visual drag-and-drop editor (replaced by form-based CMS)
- Webflow's built-in CMS (replaced by Contentful/Decap)
- Webflow hosting (replaced by Firebase/GitHub Pages)
- Webflow's built-in form handling (replaced by free tier of Formspree or EmailJS)
- **Webflow Memberships** — if you're using login/signup for Artfuly students, this needs a separate solution (or just remove it if unused)

---

## Ongoing Costs After Migration

| Service | Cost |
|---|---|
| Firebase Hosting | Free |
| GitHub | Free |
| Contentful (if chosen) | Free |
| Formspree (contact form) | Free (50 submissions/month) |
| Custom domains (you already own these) | $0 (already paid) |
| **Total** | **$0/year** |

**Annual saving: $328**

---

## Recommendation

**Yes, replace Webflow — it's worth it.**

The development complexity is low. The effort is mainly content migration. Once built, the system will be simpler and cheaper than Webflow, and you'll have full control.

**Suggested approach:**
1. Build the new site structure first (Astro + Contentful + Firebase)
2. Migrate /resources and the portfolio — these are the two things you specifically need
3. Redirect rachaelpage.com → the new portfolio URL
4. Cancel Webflow

**Defer or drop:** Blog articles, travel section, Cuts By Luke — migrate only if actively used. These are likely low-traffic and can be rebuilt on demand.

**Questions to answer before starting:**
- Are the Webflow Memberships (login/signup pages) actively used by paying students? If yes, that needs a separate solution (e.g. Memberstack ~$29/month, or just use Thinkific for all course access).
- Do you want to keep the blog/articles section or let it go?
- Preferred CMS approach: Contentful (easier to use) or Decap CMS (fully free, no third party)?
