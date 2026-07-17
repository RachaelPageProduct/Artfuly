---
title: "Scaling a Design System Across 8+ Brands"
category: "Design Craft"
slug: "scaling-design-system-across-8-brands"
date: "2026-07-09"
description: "Most multi-brand design system advice quietly stops working around brand five or six. Here's the token architecture, component pattern, and governance structure that holds up at 8+ brands."
introHeading: "Most multi-brand design system advice quietly stops working around brand five or six. Here's the token architecture, component pattern, and governance structure that holds up at 8+ brands."
heroImage: "/images/articles/scaling-design-system-across-8-brands-header.png"
thumbnailImage: "/images/articles/scaling-design-system-across-8-brands-thumb.png"
published: true
featured: false
featuredPortfolio: false
ctaText: "Learn Digital Product Design"
ctaLink: "https://artfuly.thinkific.com/courses/Digital-Product-Design"
titleTag: "Scaling a design system across 8+ brands"
metaDescription: "The token architecture, component pattern, and governance structure that actually holds up when scaling a design system past 5-6 brands — Figma extended collections, a core/semantic/brand token model, and base + recipe components."
---

Most "multi-brand design system" advice is written by someone managing two or three brands, maybe with a light/dark mode thrown in. That advice quietly stops working somewhere around brand five or six — and if you're the one holding together eight brands under one company, you've probably already found the cracks.

Here's what actually changes at that scale, and the architecture that holds up.

### The mode trap

The obvious approach — one Figma variable mode per brand — is where most teams start, and where most teams get stuck. Figma's variable modes are capped by plan: 10 on Pro, 20 on Organisation. Eight brands with light/dark on top burns through that fast, and you're suddenly blocked mid-project waiting on a plan upgrade nobody budgeted for.

Figma's answer for this exact problem is **extended collections** (Enterprise only): you build one parent collection with your core and semantic tokens, then extend it into a separate instance per brand. Each brand instance can override only what's actually different — not duplicate the whole token set. It's a meaningfully different structure from "just add another mode," and it's worth checking your plan tier before you architect anything, because moving from a flat mode-per-brand setup to extended collections later means rebuilding your variable structure from scratch.

If you're not on Enterprise, the workaround is to keep brand-specific tokens in separate, smaller collections rather than one giant collection with 8+ modes — it's more files to manage, but it won't hit a wall.

### Three layers, not two

A two-layer token system (primitives → semantics) is fine for one or two brands. At eight, you need a third layer, because "semantic" starts doing two jobs at once: describing intent (primary action, error state) *and* carrying brand identity. Split those apart:

1. **Core primitives** — raw values with no meaning attached. Not owned by any brand.
2. **Semantic tokens** — intent-based names (`color-action-primary`, `space-card-padding`) that every brand shares. This is the contract between design and engineering, and it should not change per brand.
3. **Brand tokens** — the actual values each brand plugs into the semantic layer. This is the *only* layer a brand team should ever touch.

The test for whether this is set up correctly: someone on Brand 6's team should never need to open a component and change a hardcoded colour. They should only ever be filling in their brand's row in the token table.

<!-- Optional: add a primitives → semantic → brand tokens diagram here if you create one later.
![Token architecture diagram: core primitives feed semantic tokens, which each brand plugs its own brand tokens into](/images/articles/260709-token-architecture-diagram.svg)
-->

### Components: base + recipe, not eight separate kits

The other place multi-brand systems quietly die is component duplication — a Button_BrandA, Button_BrandB, Button_BrandC pattern that multiplies your maintenance burden by eight every time you fix a bug.

The pattern that scales (borrowed from how teams like Harry's structure multi-brand libraries) is base + recipe:

- **Base components** are structural and unopinionated — a button with no fixed colour, radius, or type style, built entirely from semantic token references.
- **Brand recipes** are just the token values swapped in per brand at the collection level. The component itself never gets touched or duplicated.

One button, eight looks, zero duplicated components. When you fix a padding bug, you fix it once.

### Governance is the actual bottleneck

Past four or five brands, the technical architecture usually isn't what breaks first — the decision-making process is. Without clear ownership, you get "brand debt": one-off overrides bolted directly onto components because a brand team couldn't wait for a token to be added properly, or didn't know how.

A structure that works in practice:

- A central design system team owns the core and semantic layers, and the base components. Nothing here changes without a proper review — this is the shared contract.
- Each brand team owns only their brand token values, and can update those independently without waiting on the central team.
- New tokens (a new semantic role, a new component variant) go through a lightweight request process to the central team, so "just this once" additions don't quietly become permanent one-offs.

### Getting design and code to actually match

At two brands, a bit of manual syncing between Figma and the codebase is survivable. At eight, it isn't — drift between design tokens and shipped code compounds fast, and nobody notices until brand 7's app looks subtly wrong in production.

This is where a token pipeline earns its keep: tools like Style Dictionary (or Tokens Studio for a Figma-native workflow) take your token source of truth and generate platform-ready output — CSS custom properties, iOS, Android — for every brand from the same source. The token structure above (core/semantic/brand) maps directly onto this: semantic tokens become your shared design system package, brand tokens become per-brand theme files that get swapped in at build time.

### Launching brand 9

The real test of whether this architecture works is how painful it is to onboard a new brand. If it takes weeks of new component builds, the system has failed. If it's "fill in a token sheet, extend the collection, generate the theme file," it's working.

---

*Sources consulted for accuracy: [Figma Help — Modes for variables](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables), [Figma Blog — Creating multi-brand design systems](https://www.figma.com/blog/creating-multi-brand-design-systems/), [zeroheight — Opinionated vs. global design tokens](https://zeroheight.com/blog/opinionated-vs-global-design-tokens-simplifying-multi-brand-design-systems/), [Master.dev — Exploring multi-brand systems with tokens and composability](https://master.dev/blog/exploring-multi-brand-systems-with-tokens-and-composability/).*
