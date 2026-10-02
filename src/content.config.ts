import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Artículos del blog: un archivo Markdown por artículo en src/content/blog.
// El nombre del archivo es la URL: guia-x.md → /blog/guia-x
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Sale en Google y al compartir: 120–160 caracteres. */
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Pose de Gisi para la tarjeta del artículo (archivo en src/assets/mascot). */
    mascot: z.enum(['waving', 'scanning', 'inLove', 'inviting', 'celebrating', 'sleeping', 'waiting']).default('waving'),
    tags: z.array(z.string()).default([]),
    /** El destacado sale en grande al inicio de /blog (si hay varios, el más reciente). */
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
