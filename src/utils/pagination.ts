import type { Page } from "astro"

const ITEMS_PER_PAGE = 12
/**
 * Generate the url for the previous or next page
 * @param url this should be Astro.url
 * @param page number of the page to go to
 * @returns relative url with added/replaced page search param
 */
const generateUrl = (url: URL, page: string | undefined) => {
	const newUrl = new URL(url)
	if (page) {
		newUrl.searchParams.set("page", page)
	} else {
		newUrl.searchParams.delete("page")
	}

	return newUrl.pathname + newUrl.search
}

/**
 * Get the page number from the search params
 * @returns current page number
 */
const getPageNum = (url: URL) => {
	if (url.searchParams.has("page")) {
		return +url.searchParams.get("page")!
	} else {
		return 1
	}
}

/**
 * This function is mostly copied from the getStaticPaths pagination function with changes for SSR
 * @param data an array of CollectionEntry<ContentCollectionKey> to be paginated
 * @returns Astro Page object representing a single page of data in a paginated collection
 */
export const paginate = async <T>(data: T[], url: URL) => {
	const pageNum = getPageNum(url)
	const lastPage = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE))
	const start = ITEMS_PER_PAGE === Infinity ? 0 : (pageNum - 1) * ITEMS_PER_PAGE // currentPage is 1-indexed
	const end = Math.min(start + ITEMS_PER_PAGE, data.length)
	const current = url.pathname + url.search
	const next = pageNum === lastPage ? undefined : generateUrl(url, String(pageNum + 1))
	const prev =
		pageNum === 1
			? undefined
			: generateUrl(url, pageNum - 1 === 1 ? undefined : String(pageNum - 1))
	return {
		data: data.slice(start, end),
		start,
		end: end - 1,
		size: ITEMS_PER_PAGE,
		total: data.length,
		currentPage: pageNum,
		lastPage: lastPage,
		url: { current, next, prev }
	} as Page<T>
}
