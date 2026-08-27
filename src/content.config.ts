import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const statsSchema = z.object({
  hp: z.number().optional(), attack: z.number().optional(), defense: z.number().optional(), speed: z.number().optional(),
  additional: z.record(z.string(), z.union([z.number(), z.string()])).default({}),
});
const attackSchema = z.object({
  name: z.string(), description: z.string(), power: z.union([z.number(), z.string()]).optional(),
  followUpDamage: z.union([z.number(), z.string()]).optional(), key: z.string().optional(), requiredLevel: z.number().optional(),
  element: z.string().optional(), effect: z.string().optional(), cooldown: z.string().optional(),
});
const relatedSchema = z.object({ title: z.string(), slug: z.string(), collection: z.enum(['playable-digimon','enemies','database']) });
const evolutionRefSchema = z.object({ title:z.string(), slug:z.string() });

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({ title:z.string(), description:z.string(), pubDate:z.coerce.date(), project:z.string().default('Digimon Odyssey'), category:z.enum(['Development Blog','Announcement','Patch Notes','Event']), featured:z.boolean().default(false), draft:z.boolean().default(false), image:z.string().optional() }),
});
const database = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/database' }),
  schema: z.object({ title:z.string(), description:z.string(), category:z.enum(['Digimon','Locations','Items','Systems','Quests','NPCs','Guides']), project:z.string().default('Digimon Odyssey'), order:z.number().default(999), draft:z.boolean().default(false), image:z.string().optional() }),
});
const playableDigimon = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/playable-digimon' }),
  schema: z.object({
    title:z.string(), slug:z.string(), image:z.string().optional(), robloxAssetId:z.string().optional(), stage:z.string(), attribute:z.string(), species:z.string().optional(), description:z.string(), acquisition:z.string(),
    dataStatus:z.string().default('Official'), placeholder:z.boolean().default(false), stats:statsSchema, attacks:z.array(attackSchema).default([]),
    digivolution:z.object({ from:z.array(evolutionRefSchema).default([]), to:z.array(evolutionRefSchema).default([]) }),
    requirements:z.object({ level:z.number().optional(), stats:z.array(z.string()).default([]), items:z.array(z.string()).default([]), quests:z.array(z.string()).default([]), bond:z.string().optional(), notes:z.array(z.string()).default([]) }),
    related:z.array(relatedSchema).default([]), draft:z.boolean().default(false),
  }),
});
const enemies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/enemies' }),
  schema: z.object({
    title:z.string(), slug:z.string(), image:z.string().optional(), robloxAssetId:z.string().optional(), type:z.enum(['Enemy','Boss']), attribute:z.string().optional(), description:z.string(), level:z.number(), location:z.string(), locationSlug:z.string().optional(),
    dataStatus:z.string().default('Official'), placeholder:z.boolean().default(false), stats:statsSchema, attacks:z.array(attackSchema).default([]),
    access:z.object({ minimumLevel:z.number().optional(), quests:z.array(z.string()).default([]), items:z.array(z.string()).default([]), party:z.string().optional(), notes:z.array(z.string()).default([]) }),
    rewards:z.object({
      exp:z.union([z.number(),z.string()]).optional(), currency:z.union([z.number(),z.string()]).optional(),
      drops:z.array(z.object({ item:z.string(), chance:z.string(), amount:z.string(), category:z.string().optional() })).default([]),
      guaranteedDrops:z.array(z.string()).default([]), normalDrops:z.array(z.string()).default([]), rareDrops:z.array(z.string()).default([]), firstClear:z.array(z.string()).default([]), questRewards:z.array(z.string()).default([]),
    }),
    encounter:z.object({ respawn:z.string().optional(), rules:z.array(z.string()).default([]), phases:z.array(z.string()).default([]), partySize:z.string().optional(), mechanics:z.array(z.string()).default([]) }),
    related:z.array(relatedSchema).default([]), draft:z.boolean().default(false),
  }),
});
export const collections = { blog, database, playableDigimon, enemies };


