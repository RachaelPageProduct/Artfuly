export interface ResourceCategory {
  slug: string;
  label: string;
}

// Shared category list for the Design Resources article filter pills.
// `label` must match the `category:` value in each article's frontmatter.
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  { slug: 'careers-hiring', label: 'Careers & Hiring' },
  { slug: 'portfolios', label: 'Portfolios' },
  { slug: 'tools-software', label: 'Tools & Software' },
  { slug: 'design-craft', label: 'Design Craft' },
  { slug: 'ai', label: 'AI' },
  { slug: 'seo-marketing', label: 'SEO & Marketing' },
];
