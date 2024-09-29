import { db, Comment } from "astro:db"

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
		{
			text: "This article was very informative and helpful. I learned a lot about how to build a modal dialog component in Astro. Thank you for sharing!",
			postSlug: "build-astro-modal-dialog-component",
			createdAt: new Date("2024-08-03T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "Bob Johnson",
			email: "bobjohnson@example.com",
			text: "I was struggling to get the &lt;b&gt;modal&lt;/b&gt; to work with my **Astro** project, but this article helped me figure it out. `&lt;script&gt;alert(&#39;test&#39;)&lt;/script&gt;` Thanks for the clear instructions!\n> Thanks for the clear instructions!\n```&lt;script&gt;alert(&#39;test&#39;)&lt;/script&gt;```",
			postSlug: "build-astro-modal-dialog-component",
			createdAt: new Date("2024-08-02T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "Sarah Lee",
			email: "sarahlee@example.com",
			text: "I loved the example code in this article. It made it so easy to follow along and implement the modal in my own project. Great job!",
			postSlug: "build-astro-modal-dialog-component",
			createdAt: new Date("2024-08-06T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "David Kim",
			email: "davidkim@example.com",
			text: "I'm new to Astro and this article was a great resource for me. I learned a lot about how to build a modal dialog component and I'm excited to try it out in my next project.",
			postSlug: "build-astro-modal-dialog-component",
			createdAt: new Date("2024-08-08T00:00:00.000Z"),
			status: "pending"
		},
		{
			name: "John Doe",
			email: "johndoe@example.com",
			text: "I really liked the article about using relative color syntax to generate a color scheme. It was very helpful.",
			postSlug: "auto-generate-tailwindcss-color-scheme-from-one-color",
			createdAt: new Date("2024-07-07T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "Jane Smith",
			email: "janesmith@example.com",
			text: "I found the article to be very informative and easy to follow. I'm excited to try out the new relative color syntax in my own projects.",
			postSlug: "auto-generate-tailwindcss-color-scheme-from-one-color",
			createdAt: new Date("2024-08-01T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "Bob Johnson",
			email: "bobjohnson@example.com",
			text: "I appreciate the article on using **Astro SEO Max Component**. It was a great resource for adding SEO metadata to my Astro project.",
			postSlug: "astro-seo-max-component",
			createdAt: new Date("2024-06-27T00:00:00.000Z"),
			status: "approved"
		},
		{
			name: "Sarah Williams",
			email: "sarahwilliams@example.com",
			text: "I found the article to be very helpful in understanding how to add SEO metadata to my Astro project. Thank you!",
			postSlug: "astro-seo-max-component",
			createdAt: new Date("2024-07-17T00:00:00.000Z"),
			status: "approved"
		}
	])
}
