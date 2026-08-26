import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    project: z.string().default('Digimon Odyssey'),
    category: z.enum(['Development Blog', 'Announcement', 'Patch Notes', 'Event']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const database = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/database' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Digimon', 'Locations', 'Items', 'Systems', 'Quests', 'NPCs', 'Guides']),
    project: z.string().default('Digimon Odyssey'),
    order: z.number().default(999),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog, database };
