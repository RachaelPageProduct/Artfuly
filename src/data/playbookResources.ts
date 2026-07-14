// Companion resources for The Surface Pattern Design Playbook
// Rebuilt 260709 from the final PHASE3 EDIT manuscript.
// Every "companion resources page" mention in the book maps to an entry here.
// Source of truth: 0. CLAUDE/Book Spoonflower Edit/companion-resources-and-link-register.md

export interface Resource {
  name: string;
  description: string;
  url: string;
}

export interface Chapter {
  id: string;
  title: string;
  resources: Resource[];
}

export const playbookResources: Chapter[] = [
  {
    id: 'part-1',
    title: 'Part 1 — The Opportunity',
    resources: [
      {
        name: 'Platform comparison spreadsheet',
        description: 'Spoonflower vs other platforms — product types, fees, commissions and whether artists are accepted.',
        url: 'https://docs.google.com/spreadsheets/d/1OOtC7xqfYbSnCGBuQMZkFIzkR4L5KGq5L2_bHBUcXUM/edit?usp=sharing',
      },
      {
        name: 'Spoonflower design challenges (current)',
        description: 'The live design challenges with themed briefs and public voting.',
        url: 'https://www.spoonflower.com/design-challenge',
      },
      {
        name: 'Spoonflower design challenges (past)',
        description: 'Browse past challenges and winners for trend and theme signals.',
        url: 'https://www.spoonflower.com/design-challenge/past',
      },
      {
        name: 'Artfuly Pattern Trend Report',
        description: 'My automated, regularly updated surface pattern trend report.',
        url: 'https://artfuly.click/trend-report',
      },
    ],
  },
  {
    id: 'part-2',
    title: 'Part 2 — Vector & Pixel Software',
    resources: [
      {
        name: 'Photoshop alternatives',
        description: 'A live list of Photoshop alternatives across platforms and budgets.',
        url: 'https://alternativeto.net/software/adobe-photoshop',
      },
      {
        name: 'Illustrator alternatives',
        description: 'A live list of Illustrator alternatives across platforms and budgets.',
        url: 'https://alternativeto.net/software/adobe-illustrator/',
      },
      {
        name: 'Infinite Painter Patterns tutorial (video)',
        description: 'Walks through Pattern Project mode — the canvas repeats seamlessly as you draw.',
        url: 'https://www.youtube.com/watch?v=sl2WbBaCiHw',
      },
    ],
  },
  {
    id: 'part-3',
    title: 'Part 3 — Upload Your First Pattern',
    resources: [
      {
        name: 'Sizing your design (Spoonflower)',
        description: 'Official sizing guide, including downloadable PSD templates.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204444610-Sizing-Your-Design',
      },
      {
        name: 'Repeat options (Spoonflower)',
        description: 'Basic, half-brick, half-drop and mirror repeats explained.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204444650-Repeat-Options',
      },
      {
        name: 'Uploading images (Spoonflower)',
        description: 'File types and the upload process, step by step.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204600314-Uploading-Images#basics',
      },
      {
        name: 'Colour accuracy + .ase swatch download',
        description: 'Make sure your design prints the colour you want — includes the Adobe Swatch Exchange file and white-background setup.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204444620-How-Can-I-Make-Sure-My-Design-is-the-Color-I-Want',
      },
      {
        name: 'Complete guide to .ase files',
        description: 'How to import .ase swatches via the Swatches panel in Photoshop and Illustrator.',
        url: 'https://colorslurp.com/blog/a-complete-guide-to-ase-files',
      },
      {
        name: 'sRGB colour profile guide',
        description: 'Saving image files as sRGB to match Spoonflower’s printing process.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204756494-Saving-Image-Files-as-sRGB',
      },
      {
        name: 'Selling on Spoonflower',
        description: 'Spoonflower’s official seller pages — how selling, commissions and promotion work.',
        url: 'https://www.spoonflower.com/en/sell',
      },
      {
        name: 'Seamless pattern checker',
        description: 'Quick seamless check of your tile before uploading.',
        url: 'https://www.pycheung.com/checker/',
      },
      {
        name: 'Versatile — compose tool',
        description: 'Another quick way to preview how your tile repeats.',
        url: 'https://versa.tile.graphics/app/compose/',
      },
      {
        name: 'Versatile — draw tool',
        description: 'Draw on a tile and watch the pattern develop everywhere else — great for layout problems.',
        url: 'https://versa.tile.graphics/app/draw2/',
      },
    ],
  },
  {
    id: 'part-4',
    title: 'Part 4 — Creating Patterns',
    resources: [
      {
        name: 'Adobe Text-to-Vector guide',
        description: 'Generate vector artwork with Text to Vector Graphic in Illustrator.',
        url: 'https://www.adobe.com/learn/illustrator/web/generate-artwork-with-text-to-vector-graphic',
      },
      {
        name: 'Spoonflower seamless repeat tutorial',
        description: 'Create a seamless repeat for Spoonflower using Illustrator and Photoshop.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204482270-Tutorial-Create-A-Seamless-Repeat-For-Spoonflower-Using-Adobe-Illustrator-Photoshop',
      },
      {
        name: 'Photoshop: create a new pattern (Adobe)',
        description: 'Adobe’s step-by-step guide to creating and filling with patterns.',
        url: 'https://helpx.adobe.com/photoshop/desktop/apply-painting-techniques/create-fill-with-patterns/create-a-new-pattern.html',
      },
      {
        name: 'Photoshop seamless repeat (Spoonflower blog)',
        description: 'Design a seamless repeat with Photoshop — Spoonflower’s own tutorial.',
        url: 'https://blog.spoonflower.com/2018/07/25/how-to-design-a-seamless-repeat-with-photoshop',
      },
      {
        name: 'Creating & modifying brushes (Adobe)',
        description: 'Adobe’s guide to creating and modifying Photoshop brushes.',
        url: 'https://helpx.adobe.com/au/photoshop/using/creating-modifying-brushes.html',
      },
      {
        name: 'Midjourney explore feed',
        description: 'Browse AI-generated imagery for inspiration.',
        url: 'https://www.midjourney.com/explore?tab=random',
      },
      {
        name: 'Tylify — seamless patterns in Figma',
        description: 'Figma plugin that generates seamless patterns from vector or raster elements.',
        url: 'https://www.figma.com/community/plugin/1160939259102989594/tylify-seamless-patterns-in-seconds',
      },
      {
        name: 'LightX AI Pattern Generator',
        description: 'Simple AI prompt pattern design, good for quick concepts. Free tier: up to 5 images a day.',
        url: 'https://www.lightxeditor.com/',
      },
      {
        name: "Spoonflower 'Creating' help section",
        description: 'The full set of Spoonflower design and file-prep guides.',
        url: 'https://support.spoonflower.com/hc/en-us/sections/200793490-Creating',
      },
      {
        name: 'Adobe Firefly — Generative Recolor',
        description: 'Upload an SVG and recolour it with text prompts (successor to the old Adobe Labs recolour tool).',
        url: 'https://firefly.adobe.com/',
      },
    ],
  },
  {
    id: 'part-5',
    title: 'Part 5 — Colourways & Upscaling',
    resources: [
      {
        name: 'chaiNNer (open-source upscaler)',
        description: 'Free, node-based AI image upscaling with a choice of models.',
        url: 'https://github.com/chaiNNer-org/chaiNNer',
      },
      {
        name: 'Topaz Gigapixel AI',
        description: 'Advanced AI upscaling up to 6x — one-time purchase with free trial.',
        url: 'https://www.topazlabs.com/gigapixel-ai',
      },
    ],
  },
  {
    id: 'part-6',
    title: 'Part 6 — Creating Murals',
    resources: [
      {
        name: 'Designing a Mural (Spoonflower tutorial)',
        description: 'The full official mural tutorial the chapter is built around.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/360062069651-Tutorial-Designing-a-Mural',
      },
      {
        name: 'Wallpaper sizing & overlap reference',
        description: 'Spoonflower’s wallpaper sizing reference, including the panel overlap behaviour.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/204444610-Sizing-Your-Design#wallpaper',
      },
      {
        name: 'Faux mural tutorial (Spoonflower blog)',
        description: 'An alternative large-scale mural effect approach.',
        url: 'https://blog.spoonflower.com/2022/06/28/faux-mural-tutorial/',
      },
    ],
  },
  {
    id: 'part-8',
    title: 'Part 8 — Selling & Marketing',
    resources: [
      {
        name: 'Artfuly Pattern Trend Report',
        description: 'My automated, personalised trend report for pattern designers.',
        url: 'https://artfuly.click/trend-report',
      },
      {
        name: 'Spoonflower Best Sellers',
        description: 'What is actually selling right now.',
        url: 'https://www.spoonflower.com/en/shop/best-sellers',
      },
      {
        name: 'Spoonflower Top Sellers',
        description: 'Top-selling designs on the platform.',
        url: 'https://www.spoonflower.com/en/shop/top-sellers',
      },
      {
        name: 'Spoonflower Trending',
        description: 'Currently trending designs.',
        url: 'https://www.spoonflower.com/en/shop/trending',
      },
      {
        name: 'Spoonflower Top Trending Design',
        description: 'The top trending design pages, updated regularly.',
        url: 'https://www.spoonflower.com/en/shop/top-trending-design',
      },
      {
        name: 'Spoonflower Top Trends (curated)',
        description: 'Spoonflower’s curated trend collections.',
        url: 'https://www.spoonflower.com/en/shop/top-trends',
      },
      {
        name: 'Seasonal trend report (Spoonflower blog)',
        description: 'Spoonflower’s seasonal trend report — check for the latest edition.',
        url: 'https://blog.spoonflower.com/2024/06/28/autumn-winter-2024-trend-report/',
      },
      {
        name: 'Spoonflower Seller Handbook',
        description: 'Official resources for selling on Spoonflower.',
        url: 'https://blog.spoonflower.com/category/resources/spoonflower-seller-handbook/',
      },
      {
        name: 'Spoonflower Small Business Handbook',
        description: 'Official resources for building a small design business.',
        url: 'https://blog.spoonflower.com/category/resources/small-business-handbook/',
      },
      {
        name: 'Wallpaper inspiration styles',
        description: 'Spoonflower’s style showcases — browse wallpaper styles for positioning ideas.',
        url: 'https://www.spoonflower.com/en/inspiration/styles',
      },
      {
        name: 'Behance folio example — Flora',
        description: 'An example of using Behance as a pattern design portfolio.',
        url: 'https://www.behance.net/gallery/130331049/Flora',
      },
      {
        name: 'How to Find Your Art Niche — the Ultimate Guide',
        description: 'Serena Archetti’s in-depth guide to finding your niche as an artist.',
        url: 'https://www.serenaarchetti.com/blog/how-to-find-your-art-niche-the-ultimate-guide',
      },
      {
        name: 'Trend-combining source article',
        description: 'Source for the trend-combining insight (frogs + art nouveau, swords + florals).',
        url: 'https://share.google/XvZbzqKa4gjHFEkSu',
      },
      {
        name: 'Tea-towel design guidelines',
        description: 'Artwork specs for Spoonflower tea towels.',
        url: 'https://support.spoonflower.com/hc/en-us/articles/360061371292-Design-Guidelines-Tea-Towels',
      },
      {
        name: 'Fill-A-Yard',
        description: 'Spoonflower’s Fill-A-Yard tool — combine collection designs on one yard.',
        url: 'https://www.spoonflower.com/fill-a-yard',
      },
    ],
  },
  {
    id: 'part-9',
    title: 'Part 9 — Beyond Spoonflower',
    resources: [
      {
        name: 'Platform comparison spreadsheet',
        description: 'The full comparison of platforms, fees and commissions (same as Part 1).',
        url: 'https://docs.google.com/spreadsheets/d/1OOtC7xqfYbSnCGBuQMZkFIzkR4L5KGq5L2_bHBUcXUM/edit?usp=sharing',
      },
      {
        name: 'Redbubble Best Sellers search',
        description: 'What sells on Redbubble right now.',
        url: 'https://www.redbubble.com/shop/top+sellers',
      },
      {
        name: 'TopBubbleIndex',
        description: 'Redbubble trend tracking tool.',
        url: 'https://www.topbubbleindex.com/redbubble/redbubble-trends',
      },
      {
        name: 'Insightfactory',
        description: 'Redbubble trend data tool.',
        url: 'https://insightfactory.app/redbubble-trends/',
      },
      {
        name: 'BubbleSpider',
        description: 'Keyword research and best-sellers for Redbubble.',
        url: 'https://bubblespider.com/keyword-research/best-sellers',
      },
      {
        name: 'Merch Dominator',
        description: 'Redbubble trends finder.',
        url: 'https://merchdominator.com/redbubble-trends-finder',
      },
      {
        name: 'PodCS Redbubble trend tools',
        description: 'A collection of Redbubble research tools.',
        url: 'https://www.podcs.com/tools/redbubbletrendstools.html',
      },
      {
        name: 'Society6 Best Sellers',
        description: 'Overall best sellers on Society6.',
        url: 'https://society6.com/collections/best-sellers',
      },
      {
        name: 'Society6 Best Sellers — Art Prints',
        description: 'Best-selling art prints.',
        url: 'https://society6.com/prints/best-sellers',
      },
      {
        name: 'Society6 Best Sellers — T-Shirts',
        description: 'Best-selling t-shirt designs.',
        url: 'https://society6.com/tshirts/best-sellers',
      },
      {
        name: 'Etsy mural search',
        description: 'See what wall murals sell on Etsy and how they’re presented.',
        url: 'https://www.etsy.com/search?q=wallpaper%20wall%20murals',
      },
      {
        name: 'Spoonflower design tutorials',
        description: 'The full design tutorials category on the Spoonflower blog.',
        url: 'https://blog.spoonflower.com/category/tutorials/design-tutorials',
      },
    ],
  },
];

export const freeDownloads: Resource[] = [
  {
    name: 'Supplementary design file (Figma)',
    description: 'The Figma file referenced in the book — open it alongside the relevant chapter.',
    url: 'https://artfuly.click/pattern-figma',
  },
  {
    name: 'Sample pattern file (for the tutorial)',
    description: 'The sample Illustrator pattern file used in the step-by-step tutorial chapters.',
    url: 'link-coming-soon', // TODO RACHAEL: upload the .ai motif file and replace
  },
  {
    name: '.ase colour swatches',
    description: 'Adobe colour swatch file with the palettes referenced in the colourways chapter.',
    url: 'link-coming-soon', // TODO RACHAEL: upload the .ase file and replace
  },
];
