[![Netlify Status](https://api.netlify.com/api/v1/badges/3eda98f4-9690-46fb-8b49-84eb45249235/deploy-status)](https://app.netlify.com/projects/henri-fournier-dev-astro/deploys)

# henrifournier-astro

Personal website built with Astro and Tailwind CSS. This repo contains the source for Henri Fournier's site — a small, performance-focused portfolio with custom theming, utilities and a few UI helpers.

## Key tech

- Astro (static site generator)
- Tailwind CSS (utility-first styling)
- Custom CSS variables + utilities in src/styles/global.css
- Tailwind Typography plugin

## What’s in this repo:

/  
├── public/ Static assets served as-is  
├── src/ Project source  
│ ├── pages/ Astro pages (routes)  
│ ├── components/ Reusable UI components  
│ └── styles/global.css Project-wide styles, theme tokens, utilities (tilting-card, hexagon, scrollbar tweaks, etc.)  
├── package.json  
└── README.md

## Notable implementation details

- Theme toggling uses a data-theme attribute (data-theme="dark") and CSS custom properties defined in global.css.
- global.css includes Tailwind @apply utilities and a number of custom @utility rules (hexagon, tilt, tilting-card) and accessible scrollbar styling.
- The site is built as a static site — content lives in src/pages and components for reuse.

## Development

All commands run from the project root.

Install

```sh
pnpm install
```

Start dev server

```sh
pnpm dev
```

Build for production

```sh
pnpm build
```

Preview production build locally

```sh
pnpm preview
```

## Deployment

Deployed to Netlify
