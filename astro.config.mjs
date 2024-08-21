import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import netlify from "@astrojs/netlify"
import mdx from "@astrojs/mdx"
import { remarkReadingTime } from "./remark-reading-time.mjs"

import db from "@astrojs/db"

// https://astro.build/config
export default defineConfig({
	site: "https://henrifournier.dev",
	output: "hybrid",
	experimental: {
		contentLayer: true,
		contentIntellisense: true,
		actions: true,
		serverIslands: true
	},
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
					"arrow-up-thin",
					"book-clock-outline",
					"chevron-down",
					"close",
					"close-circle",
					"comment-minus",
					"comment-plus",
					"email",
					"facebook",
					"file-document",
					"file-document-arrow-right",
					"filter-menu-outline",
					"github",
					"linkedin",
					"phone",
					"search",
					"send",
					"timelapse",
					"twitter"
				]
			}
		}),
		mdx(),
		db()
	],
	adapter: netlify(),
	markdown: {
		remarkPlugins: [remarkReadingTime]
	}
})
