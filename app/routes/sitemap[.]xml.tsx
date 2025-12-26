import { client, type Post, type Page } from '~/lib/sanity'
import { SUPPORTED_LOCALES } from '~/lib/locale'

const SITE_URL = 'https://tolo.cafe'

const POSTS_QUERY = `*[_type == "post" && (defined(slug.es.current) || defined(slug.en.current))]{
  slug, publishedAt, _updatedAt
}`

const PAGES_QUERY = `*[_type == "page" && (defined(slug.es.current) || defined(slug.en.current))]{
  slug, _updatedAt
}`

interface SitemapEntry {
	loc: string
	lastmod?: string
	changefreq?: string
	priority?: string
}

function generateSitemapXml(entries: SitemapEntry[]): string {
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		(entry) => `  <url>
    <loc>${entry.loc}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`,
	)
	.join('\n')}
</urlset>`
}

export async function loader() {
	const [posts, pages] = await Promise.all([
		client.fetch<Pick<Post, 'slug' | 'publishedAt' | '_updatedAt'>[]>(POSTS_QUERY),
		client.fetch<Pick<Page, 'slug' | '_updatedAt'>[]>(PAGES_QUERY),
	])

	const entries: SitemapEntry[] = []

	// Static pages for each locale
	for (const locale of SUPPORTED_LOCALES) {
		// Home
		entries.push({
			loc: `${SITE_URL}/${locale}`,
			changefreq: 'daily',
			priority: '1.0',
		})

		// Blog index
		entries.push({
			loc: `${SITE_URL}/${locale}/blog`,
			changefreq: 'daily',
			priority: '0.8',
		})

		// Contact
		entries.push({
			loc: `${SITE_URL}/${locale}/contact`,
			changefreq: 'monthly',
			priority: '0.6',
		})
	}

	// Dynamic blog posts
	for (const post of posts) {
		for (const locale of SUPPORTED_LOCALES) {
			const slug = post.slug?.[locale]?.current || post.slug?.es?.current
			if (slug) {
				entries.push({
					loc: `${SITE_URL}/${locale}/blog/${slug}`,
					lastmod: post._updatedAt?.split('T')[0] || post.publishedAt?.split('T')[0],
					changefreq: 'weekly',
					priority: '0.7',
				})
			}
		}
	}

	// Dynamic pages
	for (const page of pages) {
		for (const locale of SUPPORTED_LOCALES) {
			const slug = page.slug?.[locale]?.current || page.slug?.es?.current
			if (slug) {
				entries.push({
					loc: `${SITE_URL}/${locale}/${slug}`,
					lastmod: page._updatedAt?.split('T')[0],
					changefreq: 'monthly',
					priority: '0.6',
				})
			}
		}
	}

	return new Response(generateSitemapXml(entries), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600',
		},
	})
}
