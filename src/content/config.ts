// src/content/config.ts
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
    cover: z.string().optional(),
  }),
});

const escritos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),              // ← fecha segura ("YYYY-MM-DD")
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, escritos };