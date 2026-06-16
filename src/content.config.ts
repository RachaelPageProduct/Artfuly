import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
    nextProject: z.string().optional(),
    halfWidthImage: z.string().optional(),
    summary: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    date: z.string().optional(),
    tools: z.string().optional(),
    headerImage: z.string().optional(),
    lottieUrl: z.string().optional(),
    workCategories: z.array(z.string()).default([]),
    introduction: z.string().optional(),
    impact: z.string().optional(),
    designTalkthrough: z.string().optional(),
    prototypeEmbed: z.string().optional(),
    projectInDetail: z.string().optional(),
    designHighlights: z.string().optional(),
    videoWalkthrough: z.string().optional(),
    toolVideoEmbed: z.string().optional(),
    button1: z.string().optional(),
    link1: z.string().optional(),
    button2: z.string().optional(),
    link2: z.string().optional(),
    button3: z.string().optional(),
    link3: z.string().optional(),
    button4: z.string().optional(),
    link4: z.string().optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    thumbnailImage: z.string().optional(),
    authorName: z.string().optional(),
    authorImage: z.string().optional(),
    introHeading: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
    featuredPortfolio: z.boolean().default(false),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    titleTag: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const studentSuccesses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/student-successes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    authorName: z.string().optional(),
    authorImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    thumbnailImage: z.string().optional(),
    introHeading: z.string().optional(),
    published: z.boolean().default(false),
    titleTag: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = { projects, resources, articles, studentSuccesses, travel };
