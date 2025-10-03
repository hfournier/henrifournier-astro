import type { EmojiType } from "src/content/config"

export const getEmoji = (codePoint: number | number[] | string | string[]) => {
	switch (typeof codePoint) {
		case "number":
			return String.fromCodePoint(codePoint)

		case "string":
			if (codePoint.startsWith("U+")) {
				return String.fromCodePoint(Number.parseInt(codePoint.substring(2), 16))
			} else {
				return ""
			}

		default:
			const isNumberArray =
				codePoint.length > 0 && codePoint.every((value) => typeof value === "number")
			if (isNumberArray) {
				return String.fromCodePoint(...codePoint)
			} else {
				const isStringArray =
					codePoint.length > 0 && codePoint.every((value) => typeof value === "string")
				if (isStringArray) {
					const codePoints = codePoint.map((value) => {
						if (value.startsWith("U+")) {
							return Number.parseInt(value.substring(2), 16)
						} else {
							return 0
						}
					})
					return String.fromCodePoint(...codePoints)
				} else {
					return ""
				}
			}
	}
}

export const storeRecentEmoji = (emoji: EmojiType) => {
	if (emoji) {
		const recentEmojis = localStorage.getItem("recent-emojis")
		if (recentEmojis) {
			let recentEmojisArray = JSON.parse(recentEmojis) as EmojiType[]
			recentEmojisArray = recentEmojisArray.filter((value) => value.id !== emoji.id)
			recentEmojisArray.unshift(emoji)
			localStorage.setItem("recent-emojis", JSON.stringify(recentEmojisArray.slice(0, 9)))
		} else {
			localStorage.setItem("recent-emojis", JSON.stringify([emoji]))
		}
	}
}

export const restoreRecentEmojis = () => {
	const recentEmojis = localStorage.getItem("recent-emojis")
	if (recentEmojis) {
		return JSON.parse(recentEmojis) as EmojiType[]
	} else {
		return []
	}
}

// const rocket = "🚀"
// const rocketCode = 0x0001f680

// <Emoji class="text-3xl" codePoint={["U+1F468", "U+200D", "U+1F9b2"]} />
// <Emoji class="text-3xl" codePoint={["U+1F468", "U+200D", "U+1F9b2"]} label="Testing" />

// <div class="text-3xl">{rocket}</div>
// <Emoji class="text-3xl" codePoint={["U+1F468", "U+1F3FD", "U+200D", "U+1F9b2"]} />
// <Emoji class="text-3xl" codePoint={"U+1F44B"} />
// <Emoji class="text-3xl" codePoint={["U+1F44B", "U+1F3FB"]} />
// <Emoji class="text-3xl" codePoint={["U+1F44B", "U+1F3FE"]} />
// <Emoji class="text-3xl" codePoint={["U+1F44B", "test", "U+1F3Ff"]} />
// <Emoji class="text-3xl" codePoint={0x0001f4a9} />
// <Emoji class="text-3xl" codePoint={[0x0001f4a9, 0x000200d, 0x0001f525]} />
// <Emoji class="text-3xl" codePoint={[0x0001f601, 0x0001f3fd]} />
// <Emoji class="text-3xl" codePoint={[0x0001f601, 0, 0x0001f3fd]} />
// <Emoji class="text-3xl" codePoint={rocketCode} />
// <Emoji class="text-3xl" codePoint={"test"} />
// <Emoji class="text-3xl" codePoint={["U+1F49C", "U+FE0F", "U+200D", "U+1FA79"]} />
// <Emoji
// 	class="text-3xl"
// 	codePoint={[
// 		"U+1F468",
// 		"U+1F3FB",
// 		"U+200D",
// 		"U+1F469",
// 		"U+1F3FD",
// 		"U+200D",
// 		"U+1F467",
// 		"U+1F3FB",
// 		"U+200D",
// 		"U+1F466",
// 		"U+1F3FD"
// 	]}
// />
