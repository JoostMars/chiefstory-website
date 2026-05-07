import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      h1: z.string(),
      lead: z.string(),
      cta_primary: z.string(),
      cta_secondary: z.string(),
    }),
    problem: z.object({
      heading: z.string(),
      body: z.array(z.string()),
      signal_line: z.string(),
      signal_emphasis: z.string(),
      quotes: z.array(z.string()),
    }),
    method: z.object({
      label: z.string(),
      heading: z.string(),
      cta: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        tagline: z.string(),
        body: z.string(),
      })),
    }),
    offer: z.object({
      label: z.string(),
      heading: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        duration: z.string(),
        description: z.string(),
        deliverables: z.array(z.string()),
        price: z.string(),
        featured: z.boolean(),
        badge: z.string().optional(),
      })),
    }),
    audience: z.object({
      label: z.string(),
      heading: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })),
    }),
    why: z.object({
      label: z.string(),
      heading: z.string(),
      body: z.array(z.string()),
      cta: z.string(),
      proof: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })),
    }),
    cta: z.object({
      heading: z.string(),
      body: z.string(),
      button: z.string(),
    }),
  }),
});

export const collections = { pages };
