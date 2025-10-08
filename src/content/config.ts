import { seoSchema } from "@components/seo/seo"
import { file } from "astro/loaders"
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
				src: image(),
				alt: z.string(),
				id: z.number().optional(),
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

export type EmojiType = z.infer<typeof emojiSchema>
const emojiSchema = z.object({
	id: z.string(),
	codePoint: z.string().or(z.array(z.string())),
	name: z.string(),
	category: reference("emoji-categories"),
	subCategory: z.union([z.string(), z.array(z.string())]).optional(),
	aka: z.array(z.string()).optional(),
	shortCodes: z.array(z.string()).optional(),
	allowSkinTone: z.boolean().optional(),
	allowHairStyle: z.boolean().optional(),
	allowGender: z.boolean().optional()
})

const emojiCategorySchema = z.object({
	id: z.string(),
	title: z.string()
})

const emojiExtraSchema = z.object({
	id: z.string(),
	codePoint: z.string(),
	name: z.string()
})

const hexagonSchema = z.object({
	id: z.string(),
	cells: z.array(
		z.object({
			type: z.union([z.literal("none"), z.literal("fill"), z.literal("stroke"), z.literal("icon")]),
			alt: z.string().optional(),
			link: z.string().url().optional(),
			svg: z.string().optional()
		})
	)
})

const emojiCollection = defineCollection({
	type: "content_layer",
	loader: file("src/emojis/emojis.json"),
	schema: emojiSchema
})

const emojiCategoryCollection = defineCollection({
	type: "content_layer",
	loader: file("src/emojis/categories.json"),
	schema: emojiCategorySchema
})

const emojiHairStyleCollection = defineCollection({
	type: "content_layer",
	loader: file("src/emojis/hair-styles.json"),
	schema: emojiExtraSchema
})

const emojiGenderCollection = defineCollection({
	type: "content_layer",
	loader: file("src/emojis/genders.json"),
	schema: emojiExtraSchema
})

const emojiSkinTonesCollection = defineCollection({
	type: "content_layer",
	loader: file("src/emojis/skin-tones.json"),
	schema: emojiExtraSchema
})

const hexagonsCollection = defineCollection({
	type: "content_layer",
	// The file loader loads a single file which contains multiple entries. The path is relative to the project root, or an absolute path.
	// The data must be an array of objects, each with a unique `id` property, or an object with IDs as keys and entries as values.
	loader: file("src/data/hexagons.json"),
	schema: hexagonSchema
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
	work: workCollection,
	emojis: emojiCollection,
	"emoji-categories": emojiCategoryCollection,
	genders: emojiGenderCollection,
	"hair-styles": emojiHairStyleCollection,
	"skin-tones": emojiSkinTonesCollection,
	hexagons: hexagonsCollection
}
