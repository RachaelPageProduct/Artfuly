import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    featured: z.boolean().default(false),
    nextProject: z.string().optional(),
    halfWidthImage: z.string().optional(),
    summaryText: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    date: z.string().optional(),
    tools: z.string().optional(),
    headerImage: z.string().optional(),
    lottieFile: z.string().optional(),
    skills: z.array(z.string()).default([]),
    impact: z.string().optional(),
    designTalkthroughUrl: z.string().optional(),
    prototypeEmbed: z.string().optional(),
    videoWalkthroughUrl: z.string().optional(),
    videoEmbed: z.string().optional(),
    designHighlights: z.array(z.object({
      title: z.string(),
      image: z.string().optional(),
      caption: z.string().optional(),
    })).default([]),
    resultsGallery: z.array(z.string()).default([]),
    buttons: z.array(z.object({
      label: z.string(),
      url: z.string(),
      style: z.enum(['black', 'white']).default('black'),
    })).default([]),
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

export const collections = { projects, resources };
