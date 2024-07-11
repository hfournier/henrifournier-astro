import { seoSchema } from "@components/seo/seo"
import { z, defineCollection, type SchemaContext, reference } from "astro:content"

const authorSchema = ({ image }: SchemaContext) =>
	z.object({
		name: z.string(),
		url: z.string().optional(),
		description: z.string(),
		link: z.string().url().optional(),
		avatar_urls: z
			.object({
				24: z.string().url(),
				48: z.string().url(),
				96: z.string().url()
			})
			.optional(),
		seo: seoSchema({ image }).optional()
	})

const blogSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string(),
		draft: z.boolean().optional().default(false),
		createdAt: z.date(),
		modifiedAt: z.date().optional(),
		author: reference("authors").optional(),
		featuredMedia: z
			.object({
				id: z.number(),
				src: image(),
				alt: z.string(),
				caption: z.string().optional()
			})
			.optional(),
		categories: z.array(reference("categories")).optional(),
		tags: z.array(reference("tags")).optional(),
		seo: seoSchema({ image }).optional()
	})

const categorySchema = ({ image }: SchemaContext) =>
	z.object({
		name: z.string(),
		description: z.string(),
		slug: z.string().optional(),
		seo: seoSchema({ image }).optional()
	})

const tagSchema = ({ image }: SchemaContext) =>
	z.object({
		name: z.string(),
		description: z.string().optional(),
		slug: z.string().optional(),
		seo: seoSchema({ image }).optional()
	})

const workSchema = ({ image }: SchemaContext) =>
	z.object({
		name: z.string(),
		description: z.string(),
		link: z.string().url(),
		image: image(),
		imageAlt: z.string(),
		services: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional()
	})

const authorsCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: authorSchema
})

const blogsCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: blogSchema
})

const categoriesCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: categorySchema
})

const tagsCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: tagSchema
})

const workCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: workSchema
})

export const collections = {
	authors: authorsCollection,
	blogs: blogsCollection,
	categories: categoriesCollection,
	tags: tagsCollection,
	work: workCollection
}
