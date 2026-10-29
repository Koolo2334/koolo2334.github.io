import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.string(),
      summary: z.string(),
      goal: z.string().optional(),
      tier: z.enum(['main', 'sub']),
      order: z.number(),
      period: z.string(),
      team: z.string(),
      role: z.string().optional(),
      tech: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      award: z.string().optional(),
      ai: z.string().optional(),
      status: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = { works };
