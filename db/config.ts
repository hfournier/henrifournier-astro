import { column, defineDb, defineTable, NOW } from "astro:db"

const Comment = defineTable({
	columns: {
		id: column.number({
			primaryKey: true
		}),
		name: column.text({ optional: true }),
		email: column.text({ optional: true }),
		text: column.text(),
		postSlug: column.text(),
		createdAt: column.date({ default: NOW }),
		status: column.text({ default: "pending" })
	},
	indexes: [{ on: ["postSlug"] }]
})

export default defineDb({
	tables: { Comment }
})
