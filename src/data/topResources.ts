// Curated "Top Design Resources" directory — rebuilt natively from the old Webflow
// "Top UX Resources" tool (62 entries → curated ~40; pruned Adobe XD, Sketch, dead
// links and pirated PDFs). Links use branded artfuly.click links where they exist +
// affiliate links; raw URLs are placeholders for a future Rebrandly branding pass.

export interface ToolCategory {
  slug: string;
  label: string;
}

export interface ToolResource {
  name: string;
  desc: string;
  url: string;
  cat: string;        // matches a ToolCategory slug
  tag?: string;       // small badge, e.g. "Free", "Rachael's pick"
  affiliate?: boolean; // shows an affiliate/branded marker
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  { slug: 'tools', label: 'Design Tools' },
  { slug: 'fonts', label: 'Fonts & Type' },
  { slug: 'images', label: 'Images & Icons' },
  { slug: 'colour', label: 'Colour' },
  { slug: 'inspiration', label: 'Inspiration' },
  { slug: 'learning', label: 'Learning & Books' },
  { slug: 'web', label: 'Build a Website' },
];

export const TOOL_RESOURCES: ToolResource[] = [
  // ── Design Tools ──
  { name: 'Figma', desc: 'Collaborative interface design & prototyping.', url: 'https://artfuly.click/figma', cat: 'tools', affiliate: true },
  { name: 'Miro', desc: 'Online whiteboard for sprints & mapping.', url: 'https://artfuly.click/miro', cat: 'tools' },
  { name: 'Affinity Designer', desc: 'One-off-purchase vector design suite.', url: 'https://artfuly.click/affinity-designer', cat: 'tools' },
  { name: 'FramesX', desc: 'Pro UI design system & components for Figma.', url: 'https://artfuly.click/framesx', cat: 'tools', affiliate: true },
  { name: 'Flourish', desc: 'Turn data into interactive charts & stories.', url: 'https://artfuly.click/flourish', cat: 'tools' },
  { name: 'Blobbb', desc: 'Generate & export organic SVG blob shapes.', url: 'https://www.blobbb.fun/', cat: 'tools', tag: 'Free' },
  { name: 'OBS Studio', desc: 'Free screen recording for tutorials & demos.', url: 'https://obsproject.com/', cat: 'tools', tag: 'Free' },
  { name: 'Convert Case', desc: 'Quick online text case converter.', url: 'https://convertcase.net/', cat: 'tools', tag: 'Free' },
  { name: 'Claude Design', desc: "Anthropic's AI assistant — ideate, draft UX copy & generate UI.", url: 'https://claude.ai', cat: 'tools' },

  // ── Fonts & Type ──
  { name: 'Google Fonts', desc: 'Huge free, open-source type library.', url: 'https://artfuly.click/google-fonts', cat: 'fonts', tag: 'Free' },
  { name: 'Fontjoy', desc: 'AI-assisted font pairing generator.', url: 'https://artfuly.click/fontjoy', cat: 'fonts', tag: 'Free' },
  { name: 'Ultimate Google Font Pairings', desc: 'Curated, ready-to-use type pairings.', url: 'https://www.reliablepsd.com/ultimate-google-font-pairings/', cat: 'fonts' },
  { name: "Rachael's Top 10 Fonts", desc: 'My 10 go-to fonts in a ready Figma file.', url: 'https://artfuly.click/top-10-fonts', cat: 'fonts', tag: "Rachael's pick" },

  // ── Images & Icons ──
  { name: 'Unsplash', desc: 'Free high-resolution stock photography.', url: 'https://artfuly.click/unsplash', cat: 'images', tag: 'Free' },
  { name: 'Freepik', desc: 'Vectors, mockups & images (free + paid).', url: 'https://artfuly.click/freepik', cat: 'images' },
  { name: 'Creative Market Free Goods', desc: 'Free design assets every week.', url: 'https://artfuly.click/creative-market', cat: 'images', tag: 'Free' },
  { name: 'freeicons.io', desc: 'Free vector & PNG icons.', url: 'https://artfuly.click/freeicons', cat: 'images', tag: 'Free' },
  { name: 'Blush', desc: 'Customisable illustrations for your designs.', url: 'https://artfuly.click/blush', cat: 'images' },

  // ── Colour ──
  { name: 'Coolors', desc: 'Fast colour palette generator.', url: 'https://artfuly.click/coolors', cat: 'colour', tag: 'Free' },
  { name: 'Colour Theory for Web Designers', desc: 'A solid intro to colour in design.', url: 'https://elementor.com/blog/color-theory-web-design/', cat: 'colour' },

  // ── Inspiration ──
  { name: 'Behance', desc: "Adobe's design portfolio network.", url: 'https://artfuly.click/behance', cat: 'inspiration' },
  { name: 'Dribbble', desc: 'Design inspiration & portfolios.', url: 'https://artfuly.click/dribbble', cat: 'inspiration' },
  { name: 'Daily UI', desc: 'Daily UI challenges to sharpen skills.', url: 'https://artfuly.click/daily-ui', cat: 'inspiration', tag: 'Free' },
  { name: 'Catchafire', desc: 'Real volunteer projects for your portfolio.', url: 'https://www.catchafire.org/', cat: 'inspiration' },
  { name: 'Patagonia Action Works', desc: 'Volunteer design for environmental causes.', url: 'https://www.patagonia.com/actionworks/', cat: 'inspiration' },

  // ── Learning & Books ──
  { name: 'Nielsen Norman Group', desc: 'Evidence-based UX research & articles.', url: 'https://artfuly.click/nng', cat: 'learning' },
  { name: 'UX Mastery', desc: 'Community & guides for new UX designers.', url: 'https://artfuly.click/ux-mastery', cat: 'learning' },
  { name: 'UX Myths', desc: 'Common UX misconceptions, debunked.', url: 'https://artfuly.click/ux-myths', cat: 'learning', tag: 'Free' },
  { name: 'CareerFoundry — 10% off', desc: 'Mentored UX/UI course (reader discount).', url: 'https://artfuly.click/5-off', cat: 'learning', affiliate: true },
  { name: 'The Design of Everyday Things', desc: 'Don Norman — the design classic.', url: 'https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things', cat: 'learning' },
  { name: "Don't Make Me Think", desc: 'Steve Krug — web usability essentials.', url: 'https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited', cat: 'learning' },
  { name: 'Sprint', desc: 'Jake Knapp — solve big problems in 5 days.', url: 'https://www.goodreads.com/book/show/25814544-sprint', cat: 'learning' },
  { name: 'Lean UX', desc: 'Gothelf & Seiden — lean product design.', url: 'https://www.goodreads.com/book/show/13436116-lean-ux', cat: 'learning' },
  { name: 'The Field Guide to Human-Centered Design', desc: 'IDEO.org — free HCD methods.', url: 'https://www.designkit.org/resources/1', cat: 'learning', tag: 'Free' },

  // ── Build a Website ──
  { name: 'Webflow', desc: 'Design-led, no-code website builder.', url: 'https://artfuly.click/webflow', cat: 'web', affiliate: true },
  { name: 'Squarespace', desc: 'Polished all-in-one website builder.', url: 'https://artfuly.click/squarespace', cat: 'web' },
  { name: 'Wix', desc: 'Beginner-friendly website builder.', url: 'https://artfuly.click/wix', cat: 'web' },
  { name: 'Claude Code', desc: "Build websites & apps fast with Anthropic's AI coding agent.", url: 'https://artfuly.click/claude-code', cat: 'web' },
  { name: 'Bubble', desc: 'Build full web apps with no code.', url: 'https://artfuly.click/bubble', cat: 'web' },
  { name: 'Adobe Portfolio', desc: 'Quick portfolio site with Creative Cloud.', url: 'https://artfuly.click/adobe-portfolio', cat: 'web' },
];
