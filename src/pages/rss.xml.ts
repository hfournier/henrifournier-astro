import type { APIRoute } from "astro"
import rss from "@astrojs/rss"
import { getCollection, getEntries, getEntry, z } from "astro:content"
import { rssSchema } from "@astrojs/rss"
import { SITE_DESCRIPTION, SITE_TITLE } from "src/consts"

type rssSchemaType = z.infer<typeof rssSchema>
const rssItems: rssSchemaType[] = []

const blogs = (await getCollection("blogs", (entry) => entry.data.draft !== true)).sort(
	(a, b) => new Date(b.data.createdAt).valueOf() - new Date(a.data.createdAt).valueOf()
)
for (const blog of blogs) {
	const author = blog.data.author ? await getEntry(blog.data.author) : undefined
	const categories = blog.data.categories ? await getEntries(blog.data.categories) : undefined
	rssItems.push({
		title: blog.data.title,
		pubDate: blog.data.createdAt,
		description: blog.data.description,
		author: author?.data.name,
		categories: categories?.map((category) => category.data.name),
		link: `/blog/${blog.slug}/`
	})
}

export const GET: APIRoute = ({ site }) => {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: site ? site : "",
		items: rssItems,
		stylesheet: "/rss/styles.xsl"
	})
}
