/**
 * Convert a string of Markdown into an equivalent string of HTML.
 *
 * @param {string | null} markdown The Markdown string to convert.
 * @returns {string} The HTML string equivalent to the input Markdown.
 */
export const convertMarkdown = (markdown: string | null) => {
	if (!markdown) return ""
	return markdown
		.replace(/^>\s*(.*?)$/gm, "<blockquote>$1</blockquote>")
		.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
		.replace(/\*(.*?)\*/g, "<em>$1</em>")
		.replace(/~(.*?)~/g, "<del>$1</del>")
		.replace(/\n```(.*?)```\n/gm, "\n<pre><code>$1</code></pre>\n")
		.replace(/```(.*?)```/gm, "\n<pre><code>$1</code></pre>\n")
		.replace(/`(.*?)`/g, "<code>$1</code>")
}

/**
 * Escape a string of HTML so that it can be displayed as a text string instead
 * of being interpreted by a browser as HTML.
 *
 * @param {string | null} html The HTML string to escape.
 * @return {string} An escaped version of the input string, or an empty string
 *    if `html` is `null` or `undefined`.
 */
export const escapeHTML = (html: string | null) => {
	if (!html) return ""
	return html
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(/(?<!^)>/gm, "&gt;")
		.replaceAll("{", "&lbrace;")
		.replaceAll("}", "&rbrace;")
		.replaceAll("'", "&#39;")
		.replaceAll('"', "&quot;")
}
