import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Dit schema controleert de frontmatter van src/content/pages/*.md bij elke
// build. Vergeet je een sleutel of typ je hem verkeerd, dan noemt de
// foutmelding de sleutel — in plaats van dat de build later omvalt op een
// regel in index.astro.

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      image: z.string(),
      h1: z.string(),
      lead: z.string(),
      cta_primary: z.string(),
      cta_secondary: z.string(),
    }),

    problem: z.object({
      heading: z.string(),
      body: z.array(z.string()).nonempty(),
      signal_line: z.string(),
      signal_emphasis: z.string(),
      quotes: z.array(z.string()).nonempty(),
    }),

    method: z.object({
      heading: z.string(),
      intro: z.string(),
      steps: z
        .array(
          z.object({
            number: z.string(),
            title: z.string(),
            body: z.string(),
          })
        )
        .nonempty(),
    }),

    offer: z.object({
      heading: z.string(),
      cards: z
        .array(
          z.object({
            title: z.string(),
            duration: z.string(),
            description: z.string(),
            deliverables: z.array(z.string()).nonempty(),
            price: z.string(),
          })
        )
        .nonempty(),
    }),

    why: z.object({
      label: z.string(),
      image: z.string(),
      linkedin: z.string().url(),
      heading: z.string(),
      body: z.array(z.string()).nonempty(),
    }),

    contact: z.object({
      heading: z.string(),
      lead: z.string(),
      email: z.string().email(),
    }),
  }),
});

export const collections = { pages };
