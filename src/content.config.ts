import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const atlas = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/atlas' }),
    schema: z.object({
        title: z.string(),
        group: z.string().optional(),
        order: z.number().default(0),
        description: z.string().optional(),
    }),
})

export const collections = { atlas }