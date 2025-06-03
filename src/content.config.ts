import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    client: z.string(),
    src: image(),
    srcSet: z.string().optional(),
    tags: z.string().array(),
    role: z.string(),
    link: z.string(),
    slug: z.string(),
    color: z.string(),
    index: z.number(),
  }),
});

export const collections = { blog, work };
