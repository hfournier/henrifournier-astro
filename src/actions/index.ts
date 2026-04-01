import { ActionError, defineAction } from "astro:actions"
import { getEntry } from "astro:content"
import { z } from "astro/zod"
// import { Comment, db } from "astro:db"
import { escapeHTML } from "@utils/converters"

export const server = {
  addComment: defineAction({
    accept: "form",
    input: z.object({
      postSlug: z.string({
        error: (issue) =>
          issue.input === undefined
            ? "postSlug is required"
            : "postSlug must be a string matching an existing post slug"
      }),
      text: z.string({
        error: (issue) =>
          issue.input === undefined ? "Comment is required" : "Comment must be a non-empty string"
      }),
      name: z
        .string()
        .max(30, { message: "Name should be 30 or fewer characters long" })
        .optional(),
      email: z.email("Please enter a valid email address").optional()
    }),
    handler: async (newComment) => {
      if (newComment.postSlug && newComment.text) {
        newComment.text = escapeHTML(newComment.text)
        if (newComment.name) {
          newComment.name = escapeHTML(newComment.name)
        }
        const post = await getEntry("blogs", newComment.postSlug)
        if (!post) {
          throw new ActionError({
            code: "NOT_FOUND",
            message: `Post not found matching "${newComment.postSlug}"`
          })
        }

        // const result = await db.insert(Comment).values(newComment)
        // if (result) {
        // 	return result.lastInsertRowid
        // } else {
        // 	throw new ActionError({
        // 		code: "CONFLICT",
        // 		message: "Error adding comment"
        // 	})
        // }
      } else {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: `Invalid comment: "${newComment.text}" for "${newComment.postSlug}"`
        })
      }
    }
  })
}
