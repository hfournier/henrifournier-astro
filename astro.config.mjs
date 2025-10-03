import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import netlify from "@astrojs/netlify"
import mdx from "@astrojs/mdx"
import { remarkReadingTime } from "./remark-reading-time.mjs"

// https://astro.build/config
export default defineConfig({
	site: "https://henrifournier.dev",
	output: "static",
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		icon({
			include: {
				devicon: [
					"alpinejs",
					"angular",
					"astro",
					"bootstrap",
					"css3",
					"github",
					"html5",
					"javascript",
					"mongodb",
					"nestjs",
					"netlify",
					"nodejs",
					"svelte",
					"tailwindcss",
					"typescript"
				],
				logos: ["stripe"],
				mdi: [
					"add-circle-outline",
					"arrow-up-thin",
					"book-clock-outline",
					"chevron-down",
					"circle-outline",
					"close",
					"close-circle",
					"code-tags",
					"code-block-tags",
					"comment",
					"comment-minus",
					"comment-plus",
					"dots-vertical",
					"email",
					"emoji-outline",
					"facebook",
					"file-document",
					"file-document-arrow-right",
					"filter-menu-outline",
					"format-bold",
					"format-italic",
					"format-quote-open",
					"format-strikethrough-variant",
					"github",
					"linkedin",
					"phone",
					"rss",
					"search",
					"send",
					"timelapse",
					"twitter"
				]
			}
		}),
		mdx()
	],
	adapter: netlify(),
	markdown: {
		remarkPlugins: [remarkReadingTime]
	}
})
