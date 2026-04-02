import { defineConfig, fontProviders } from "astro/config"
import icon from "astro-icon"
import netlify from "@astrojs/netlify"
import mdx from "@astrojs/mdx"
import { remarkReadingTime } from "./remark-reading-time.mjs"

import tailwindcss from "@tailwindcss/vite"

import expressiveCode from "astro-expressive-code"

// https://astro.build/config
export default defineConfig({
  site: "https://henrifournier.dev",

  adapter: netlify(),

  devToolbar: {
    enabled: false
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Baloo 2",
      cssVariable: "--font-fs-baloo2",
      fallbacks: ["system-ui", "sans-serif"],
      weights: [400, 500, 600, 700, 800]
    }
  ],

  integrations: [
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
    expressiveCode(),
    mdx()
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime]
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
