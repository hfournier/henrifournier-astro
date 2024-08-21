import { transform } from "typescript"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: [
		"col-start-1",
		"col-start-3",
		"col-start-5",
		"col-start-7",
		"col-start-9",
		"col-start-11",
		"col-start-13",
		"col-start-15",
		"col-start-17",
		"col-start-19",
		"col-start-21",
		"col-start-23",
		"col-start-25",
		"col-start-27",
		"col-start-29",
		"col-start-31",
		"col-start-33",
		"row-start-1",
		"row-start-2",
		"row-start-3",
		"row-start-4",
		"row-start-5",
		"row-start-6",
		"row-start-7",
		"row-start-8"
	],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			aspectRatio: {
				hexagon: "1 / cos(30deg)"
			},
			keyframes: {
				fadeIn: {
					to: {
						opacity: 1
					}
				},
				fadeOut: {
					to: {
						opacity: 0
					}
				},
				openGateLeft: {
					to: {
						transform: "translateX(-60px)"
					}
				},
				openGateRight: {
					to: {
						transform: "translateX(60px)"
					}
				},
				closeGate: {
					to: {
						transform: "translateX(0)"
					}
				},
				expandTL: {
					"100%": {
						transform: "translate(-128px, -128px)",
						opacity: 0
					}
				},
				expandTR: {
					"100%": {
						transform: "translate(128px, -128px)",
						opacity: 0
					}
				},
				expandL: {
					"100%": {
						transform: "translateX(calc(-50% + 16px))"
					}
				},
				expandR: {
					"100%": {
						transform: "translateX(calc(50% - 16px))"
					}
				},
				expandBL: {
					"100%": {
						transform: "translate(-128px, 128px)",
						opacity: 0
					}
				},
				expandBR: {
					"100%": {
						transform: "translate(128px, 128px)",
						opacity: 0
					}
				}
			},
			colors: {
				primary: {
					50: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*4.5) / <alpha-value>)",
					100: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*4) / <alpha-value>)",
					200: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*3) / <alpha-value>)",
					300: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)*2) / <alpha-value>)",
					400: "hsl(from var(--color-primary) h s calc(50% + var(--color-light-step)) / <alpha-value>)",
					500: "hsl(from var(--color-primary) h s 50% / <alpha-value>)",
					600: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)) / <alpha-value>)",
					700: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*2) / <alpha-value>)",
					800: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*3) / <alpha-value>)",
					900: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*4) / <alpha-value>)",
					950: "hsl(from var(--color-primary) h s calc(50% - var(--color-dark-step)*4.5) / <alpha-value>)"
				},
				secondary: {
					50: "hsl(from var(--color-primary) calc(h - 180) s calc(50% + var(--color-light-step)*4.5) / <alpha-value>)",
					100: "hsl(from var(--color-primary) calc(h - 180) s calc(50% + var(--color-light-step)*4) / <alpha-value>)",
					200: "hsl(from var(--color-primary) calc(h - 180) s calc(50% + var(--color-light-step)*3) / <alpha-value>)",
					300: "hsl(from var(--color-primary) calc(h - 180) s calc(50% + var(--color-light-step)*2) / <alpha-value>)",
					400: "hsl(from var(--color-primary) calc(h - 180) s calc(50% + var(--color-light-step)) / <alpha-value>)",
					500: "hsl(from var(--color-primary) calc(h - 180) s 50% / <alpha-value>)",
					600: "hsl(from var(--color-primary) calc(h - 180) s calc(50% - var(--color-dark-step)) / <alpha-value>)",
					700: "hsl(from var(--color-primary) calc(h - 180) s calc(50% - var(--color-dark-step)*2) / <alpha-value>)",
					800: "hsl(from var(--color-primary) calc(h - 180) s calc(50% - var(--color-dark-step)*3) / <alpha-value>)",
					900: "hsl(from var(--color-primary) calc(h - 180) s calc(50% - var(--color-dark-step)*4) / <alpha-value>)",
					950: "hsl(from var(--color-primary) calc(h - 180) s calc(50% - var(--color-dark-step)*4.5) / <alpha-value>)"
				},
				grayish: {
					50: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% + var(--color-light-step)*4.5) / <alpha-value>)",
					100: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% + var(--color-light-step)*4) / <alpha-value>)",
					200: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% + var(--color-light-step)*3) / <alpha-value>)",
					300: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% + var(--color-light-step)*2) / <alpha-value>)",
					400: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% + var(--color-light-step)) / <alpha-value>)",
					500: "hsl(from var(--color-primary) h var(--color-grayish-sat) 50% / <alpha-value>)",
					600: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% - var(--color-dark-step)) / <alpha-value>)",
					700: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% - var(--color-dark-step)*2) / <alpha-value>)",
					800: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% - var(--color-dark-step)*3) / <alpha-value>)",
					900: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% - var(--color-dark-step)*4) / <alpha-value>)",
					950: "hsl(from var(--color-primary) h var(--color-grayish-sat) calc(50% - var(--color-dark-step)*4.5) / <alpha-value>)"
				}
			},
			fontFamily: {
				baloo2: ['"Baloo 2"'],
				bubblegum: ['"Bubblegum Sans"']
			},
			gridColumnStart: {
				15: "15",
				17: "17",
				19: "19",
				21: "21",
				23: "23",
				25: "25",
				27: "27",
				29: "29",
				31: "31",
				33: "33"
			},
			content: {
				colon: '":"',
				comma: '"\\002C"',
				"left-angle": '"\\003C"',
				"left-curly": '"\\007B"',
				"left-square": '"\\005B"',
				"right-angle": '"\\232A"',
				"right-slash-angle": '"\\002F\\003E"',
				"right-curly": '"\\007D"',
				"right-square": '"\\005D"',
				"right-square-comma": '"\\005D\\002C"',
				hexagon: 'url("/images/hexagon.svg")'
			}
		}
	},

	plugins: [require("@tailwindcss/typography")]
}
