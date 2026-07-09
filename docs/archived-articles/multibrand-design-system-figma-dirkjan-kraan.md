# Essential Guide for Building a Multibrand Design System in Figma

**Author:** Dirkjan Kraan
**Original publish date:** 13 Jan 2025
**Source:** [Design Systems Collective](https://www.designsystemscollective.com/essential-tips-for-building-a-multibrand-design-system-in-figma-04f1e9150d41)
**Archived:** 9 July 2026

---

## Who is this for?

This article is for designers looking to set up a multibrand design system, whether for multiple brands or light and dark modes. The author didn't use light/dark modes in his case, but covers it briefly.

## The basics of Variables

Figma's variable feature introduced a powerful way to manage styles, replacing the heavy reliance on colour styles. Variables let you assign nearly any value.

### Variables & Collections

Variables are entities that hold specific values, organised into collections. A collection is simply a logical grouping of variables.

### Modes

With modes you can easily toggle between brands or colour modes like dark & light.

### Primitives vs Semantics

Figma strongly emphasises the use of Primitives and Semantics.

- **Primitives** — raw foundational values like colours (#FFFFFF), font sizes (16px), or spacing (8px).
- **Semantics** — labels that reference primitives and are intentional, such as Primary Colour, Body Text, or Small Padding. Semantics bridge the gap between design and development by describing how and where a value is used, rather than just what it is.

Primitives and Semantics should be kept in separate collections for clarity, though they can be combined if necessary. The author uses one Primitive collection and four Semantic collections.

### Collection structure

You can also add a third collection called Component Semantics. The author skipped this level as it adds complexity and he found no use case for it — recommends postponing this for as long as possible.

### Referencing Primitives

With Primitives in a collection you can reference them from the Semantics collection. Example: 11 colour styles created for a brand ("Witty") as primitives, then referenced for a specific use case (e.g. background) as semantics — in this case the primary background is a green 700.

The purpose of this setup is to give a colour a *purpose*. When you have multiple brands the colour can change, but the purpose remains the same.

### Variable modes

Modes are a feature used at the semantic level. Different setups you can use:

- **Per brand** — create a mode for each brand (e.g., Brand X, Brand Y).
- **Per colour mode** — create separate modes for light and dark colour schemes.
- **Per brand & colour mode** — combine the above (e.g., Brand X Dark, Brand X Light, Brand Y Dark).

## Colour roles & naming convention

Google's approach to colour roles worked well for the author. There are really only 3 colour roles:

- **Background** — the surface colour of the component.
- **On** — any element placed on a surface/background (e.g., text, icons).
- **Outline** — borders or other elements with a defined edge.

**Example:** an outlined button — background is white (`neutral-white`), outline is grey (`outline-soft-300`), and the "On" (text/icon) is also grey (`very-dark-800`).

This layering system can be applied to all components and helps decide what colour to pick for each component at every atomic level.

## Generic variables

A key takeaway: the value of generic variables. While clients often see their brands as unique (and they are), many design elements overlap across brands and can be merged into a generic variable.

### Corner radius

Different brands vary in corner radii (big, small, medium, or none). The author created a separate Semantic collection for this, following Tailwind CSS as a guideline for the Primitives.

For Semantics, he created 3 modes: No radius, Small radius, and Big radius — applied per component so one variable can give a different look and feel across brands (e.g. three different buttons for three different brands using one radius variable).

### Functional colours

Every brand has its own brand colours, but also uses functional colours: Success, Warning, Error (and in this case, Grey as a functional colour too).

- Success, Warning, and Error were kept the same across all brands (reusable, no need for uniqueness).
- For Greys, he created a Grey Cold and Grey Warm group — some brands use warm, some use cold.

## Typography

Since typography plays a crucial role in brand identity, the setup provides 2 font combinations:

- **Roboto Slab / Roboto** — Roboto Slab for titles, Roboto for body copy.
- **Lexend / Atkinson** — Lexend for titles, Atkinson for body copy.

Note: this specific pairing likely won't apply to other projects since fonts are usually unique per brand — in that case, create a typography collection with a mode per brand. For Typography, you still need to create Text Styles that refer to these Semantics.

## How it comes together in feature pages

When putting all components together, brand experiences can differ quite a bit using this variable system.

## Tips & Tricks

- **Limitations with Figma Pro** — Figma Pro supports only four modes. For additional modes, you need to upgrade to the Organisational License (significantly more expensive).
- **Hide Primitives** — ensure Primitives are hidden from publishing. In components, only select Semantics. Go to Primitives → settings button per variable → check "Hide from publishing".
- **Opacities** — avoid creating specific opacity colours. Instead, set up opacity variables applied in the Appearance section. Set up all Primitives first, then create Semantics in the colours collection.
- **Spacings** — create a separate collection specifically for Spacings. Set up all Primitives first, then create Semantics for it, so you always select the correct space size.
- **Group variables** — use forward slashes ("/") to group variables within collections for better organisation (e.g. `Functional/Error`).

---

*Archived copy for reference — original article may go offline. Full credit to Dirkjan Kraan and Design Systems Collective.*
