export const emojiCategories = [
	{ id: "smileys", title: "Smileys" },
	{ id: "people", title: "People" },
	{ id: "nature", title: "Animals & Nature" },
	{ id: "food", title: "Food & Drink" },
	{ id: "activity", title: "Activity & Sports" },
	{ id: "travel", title: "Travel & Places" },
	{ id: "objects", title: "Objects" },
	{ id: "symbols", title: "Symbols" },
	{ id: "flags", title: "Flags" }
]

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
