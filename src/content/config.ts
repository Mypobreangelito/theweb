import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    cover: z.string().optional()
  }),
});

export const collections = { projects };
