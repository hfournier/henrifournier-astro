import { ActionError, defineAction } from "astro:actions"
import { z } from "astro:schema"
import { getEntry } from "astro:content"
import { Comment, db } from "astro:db"

export const server = {
	addComment: defineAction({
		accept: "form",
		input: z.object({
			postSlug: z.string({
				required_error: "postSlug is required",
				invalid_type_error: "postSlug must be a string matching an existing post slug"
			}),
			text: z.string({
				required_error: "Comment is required",
				invalid_type_error: "Comment must be a non-empty string"
			}),
			name: z
				.string()
				.max(30, { message: "Name should be 30 or fewer characters long" })
				.optional(),
			email: z.string().email("Please enter a valid email address").optional()
		}),
		handler: async (newComment) => {
			if (newComment.postSlug && newComment.text) {
				// TODO: sanitize inputs
				const post = await getEntry("blogs", newComment.postSlug)
				if (!post) {
					throw new ActionError({
						code: "NOT_FOUND",
						message: `Post not found matching "${newComment.postSlug}"`
					})
				}

				const result = await db.insert(Comment).values(newComment)
				if (result) {
					return result.lastInsertRowid
				} else {
					throw new ActionError({
						code: "CONFLICT",
						message: "Error adding comment"
					})
				}
			} else {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: `Invalid comment: "${newComment.text}" for "${newComment.postSlug}"`
				})
			}
		}
	})
}
