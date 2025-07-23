import { defineCollection, z } from 'astro:content';

const raidsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.string(),
    filename: z.string(),
    players: z.array(z.object({
      name: z.string(),
      allycode: z.string(),
      estimatedScore: z.number(),
      lastActualScore: z.number(),
      diff: z.number(),
      diffPercent: z.number(),
      participated: z.boolean()
    }))
  })
});

export const collections = {
  'raids': raidsCollection,
};
