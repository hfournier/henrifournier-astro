/**
 * Convert a string of Markdown into a string of HTML.
 *
 * @param {string | null} markdown The Markdown string to convert.
 * @return {string} An HTML string representing the input Markdown, or an empty string
 *    if `markdown` is `null` or `undefined`.
 *
 * Supported Markdown syntax includes:
 *  - Blockquotes: `*{text}`
 *  - Bold text: `**{text}**`
 *  - Italic text: `*{text}*`
 *  - Strikethrough text: `~{text}~`
 *  - Code blocks: 
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
 * Escape a string of HTML into a string of safe HTML.
 *
 * @param {string | null} html The HTML string to escape.
 * @return {string} A string of safe HTML, or an empty string
 *    if `html` is `null` or `undefined`.
 *
 * Supported HTML syntax includes:
 *  - Ampersand (& -> &amp;)
 *  - Less than (< -> &lt;)
 *  - Greater than (>) -> &gt;)
 *  - Left brace ({ -> &lbrace;)
 *  - Right brace (} -> &rbrace;)
 *  - Apostrophe (') -> &#39;)
 *  - Double quote (" -> &quot;)
 *
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
