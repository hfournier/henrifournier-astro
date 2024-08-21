import { defineAction, z } from "astro:actions"
import { Comment, db } from "astro:db"

export const server = {
	comment: defineAction({
		accept: "form",
		input: z.object({
			postSlug: z.string(),
			text: z.string(),
			name: z.string().optional(),
			email: z.string().email().optional()
		}),
		handler: async (newComment) => {
			const comment = await db.insert(Comment).values(newComment)
			return comment.toJSON()
		}
	})
}
