export interface Resource {
  name: string;
  description: string;
  url: string; // TODO: replace placeholders with real artfuly.click links
}

export interface Chapter {
  id: string;
  title: string;
  resources: Resource[];
}

export const playbookResources: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Chapter 1 — The Opportunity',
    resources: [
      {
        name: 'Spoonflower marketplace overview',
        description: 'Key stats and context on the Spoonflower seller opportunity — useful background before you start designing.',
        url: 'link-coming-soon',
      },
      {
        name: 'Patternbank licensing overview',
        description: 'Introduction to Patternbank as a higher-margin licensing route alongside Spoonflower.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-2',
    title: 'Chapter 2 — Vector & Pixel Software',
    resources: [
      {
        name: 'Adobe Illustrator free trial',
        description: 'Start your Illustrator trial — the primary vector software covered in the book.',
        url: 'link-coming-soon',
      },
      {
        name: 'Affinity Designer (one-time purchase alternative)',
        description: 'A budget-friendly Illustrator alternative — one-time payment, no subscription.',
        url: 'link-coming-soon',
      },
      {
        name: 'Photoshop vs Illustrator — when to use each',
        description: 'Quick reference guide to which software to reach for at each stage of the pattern design process.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-3',
    title: 'Chapter 3 — Upload Your First Pattern',
    resources: [
      {
        name: 'Spoonflower file spec quick reference',
        description: "DPI, colour mode, file format and size requirements for Spoonflower uploads — at a glance.",
        url: 'link-coming-soon',
      },
      {
        name: 'Spoonflower test swatch ordering guide',
        description: 'How to order a test print before committing to a full listing — step by step.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-4',
    title: 'Chapter 4 — Creating Patterns',
    resources: [
      {
        name: 'Repeat tile template (Illustrator)',
        description: 'A ready-made Illustrator artboard set up at the correct size and colour mode for Spoonflower patterns.',
        url: 'link-coming-soon',
      },
      {
        name: 'Pattern repeat types — visual reference',
        description: 'Visual guide to basic, half-drop, brick and mirror repeats — with examples of each.',
        url: 'link-coming-soon',
      },
      {
        name: 'Spoonflower design scale calculator',
        description: "Tool to check how your pattern will scale across Spoonflower's different fabric and wallpaper widths.",
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-5',
    title: 'Chapter 5 — Colourways & Upscaling',
    resources: [
      {
        name: 'Topaz Gigapixel AI (upscaling tool)',
        description: 'The AI upscaling tool referenced in the book for taking low-res designs to Spoonflower print resolution.',
        url: 'link-coming-soon',
      },
      {
        name: 'Colourway variation workflow guide',
        description: 'Step-by-step process for creating multiple colourways from a single design in Illustrator.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-6',
    title: 'Chapter 6 — Creating Murals',
    resources: [
      {
        name: 'Spoonflower mural tutorial',
        description: "How to set up, size and upload a wall mural on Spoonflower — including panel layout and bleed.",
        url: 'link-coming-soon', // TODO: add Spoonflower mural tutorial link
      },
      {
        name: 'Wallpaper sizing guide',
        description: "Standard wallpaper panel dimensions, repeat heights and sizing conventions for Spoonflower's wallpaper products.",
        url: 'link-coming-soon', // TODO: add wallpaper sizing guide link
      },
      {
        name: 'Wallpaper install guide',
        description: 'Installation instructions for Spoonflower wallpaper — useful to link to from your product listings.',
        url: 'link-coming-soon', // TODO: add wallpaper install guide link
      },
    ],
  },
  {
    id: 'chapter-7',
    title: 'Chapter 7 — Prepare, Proof & Upload',
    resources: [
      {
        name: 'Pre-upload checklist',
        description: 'Final checks before uploading a design to Spoonflower — colour mode, resolution, bleed and file format.',
        url: 'link-coming-soon',
      },
      {
        name: 'Spoonflower colour profile download',
        description: 'The ICC colour profile for soft-proofing your designs in Illustrator or Photoshop before upload.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-8',
    title: 'Chapter 8 — Selling & Marketing',
    resources: [
      {
        name: 'Monthly Pattern Trend Report',
        description: 'Auto-generate a monthly surface design trend report personalised to your Spoonflower portfolio — using a single Claude prompt. Covers interior pattern directions, colour forecasts and SS27 trade show intelligence.',
        url: 'https://artfuly.click/trend-report',
      },
      {
        name: 'Spoonflower SEO keyword guide',
        description: 'How to write titles, tags and descriptions that get your designs found in Spoonflower search.',
        url: 'link-coming-soon',
      },
      {
        name: 'Pinterest strategy for Spoonflower sellers',
        description: 'How to use Pinterest to drive traffic to your Spoonflower shop — board structure, pin frequency and what converts.',
        url: 'link-coming-soon',
      },
    ],
  },
  {
    id: 'chapter-9',
    title: 'Chapter 9 — Beyond Spoonflower',
    resources: [
      {
        name: 'Patternbank submission guide',
        description: 'How to submit designs to Patternbank for licensing — file specs, curation standards and what sells.',
        url: 'link-coming-soon',
      },
      {
        name: 'Print-on-demand platform comparison',
        description: 'Side-by-side comparison of Spoonflower, Patternbank, Society6 and other platforms — margins, audience and effort.',
        url: 'link-coming-soon',
      },
    ],
  },
];

export const freeDownloads: Resource[] = [
  {
    name: 'Supplementary design file (Figma)',
    description: 'The Figma file referenced in the book — open it alongside the relevant chapter.',
    url: 'link-coming-soon',
  },
  {
    name: 'Sample pattern file (for the tutorial)',
    description: 'The sample Illustrator pattern file used in the step-by-step tutorial chapters.',
    url: 'link-coming-soon',
  },
  {
    name: '.ase colour swatches',
    description: 'Adobe colour swatch file with the palettes referenced in the colourways chapter.',
    url: 'link-coming-soon',
  },
];
