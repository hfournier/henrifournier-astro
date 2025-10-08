import { getCollection } from "astro:content"

export async function GET() {
	const emojis = await getCollection("emojis")

	if (!emojis) {
		return new Response(null, {
			status: 404,
			statusText: "Not found"
		})
	}

	return new Response(JSON.stringify(emojis.map((emoji) => emoji.data)), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}
