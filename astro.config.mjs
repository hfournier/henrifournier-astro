import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	site: "https://henrifournier.dev",
	output: "hybrid",
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		icon({
			include: {
				devicon: [
					"javascript",
					"netlify",
					"alpinejs",
					"angular",
					"svelte",
					"astro",
					"typescript",
					"bootstrap",
					"nodejs",
					"tailwindcss",
					"github",
					"mongodb",
					"nestjs"
				],
				logos: ["stripe"],
				mdi: [
					"close",
					"email",
					"phone",
					"linkedin",
					"twitter",
					"facebook",
					"github",
					"filter-menu-outline",
					"close-circle",
					"arrow-up-thin"
				]
			}
		})
	]
})
