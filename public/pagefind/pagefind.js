/**
 * This is a mock implementation of Pagefind's debouncedSearch function to provide useable data at dev time.
 * At build time, it will be replaced with the real implementation.
 *
 * Returns an object with a `results` property containing an array of objects with `id` and `data` properties.
 *
 * @return {Object} An object with a `results` property containing an array of objects with `id` and `data` properties.
 */
export const debouncedSearch = () => {
	return {
		results: [
			{
				id: "6fceec9",
				data
			},
			{
				id: "6fceeca",
				data
			},
			{
				id: "6fceecb",
				data
			},
			{
				id: "6fceecc",
				data
			},
			{
				id: "6fceecd",
				data
			},
			{
				id: "6fceece",
				data
			}
		]
	}
}

const data = async () => {
	const result = `{
      "url": "/url-of-the-page/",
      "excerpt": "A small snippet of the <mark>static</mark> content, with the search term(s) highlighted in &lt;mark&gt; elements.",
      "meta": {
        "title": "The title from the first h1 element on the page",
        "image": "/weka.png"
      },
      "sub_results": [
        {
            "title": "Inner text of some heading",
            "url": "/url-of-the-page/",
            "excerpt": "A small snippet of the <mark>static</mark> content, with the search term(s) highlighted in &lt;mark&gt; elements"
        },
        {
            "title": "Inner text of some heading",
            "url": "/url-of-the-page/#id-of-the-h2",
            "excerpt": "A snippet of the <mark>static</mark> content, scoped between this anchor and the next one"
        }
      ]
    }`
	return JSON.parse(result)
}
