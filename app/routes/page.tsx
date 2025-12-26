import { useOutletContext } from 'react-router'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Route } from './+types/page'
import type { Locale } from '~/lib/locale'
import { client, getLocalizedString, type Page } from '~/lib/sanity'
import * as styles from './page.css'

const TRANSLATIONS = {
	es: {
		notFoundTitle: 'Página No Encontrada',
		notFoundText: 'La página que buscas no existe.',
	},
	en: {
		notFoundTitle: 'Page Not Found',
		notFoundText: "The page you're looking for doesn't exist.",
	},
	de: {
		notFoundTitle: 'Seite Nicht Gefunden',
		notFoundText: 'Die Seite, die Sie suchen, existiert nicht.',
	},
	fr: {
		notFoundTitle: 'Page Non Trouvée',
		notFoundText: "La page que vous recherchez n'existe pas.",
	},
	ja: {
		notFoundTitle: 'ページが見つかりません',
		notFoundText: 'お探しのページは存在しません。',
	},
} as const

const PAGE_QUERY = `*[
  _type == "page"
  && (slug.es.current == $slug || slug.en.current == $slug)
][0]{
  _id, name, slug, excerpt, body
}`

export async function loader({ params }: Route.LoaderArgs) {
	return { page: await client.fetch<Page | null>(PAGE_QUERY, params) }
}

export function meta({ data, params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || 'es'
	const page = data?.page
	if (!page) return [{ title: 'Page Not Found - TOLO' }]

	const title = getLocalizedString(page.name, locale, 'Untitled')
	const excerpt = getLocalizedString(page.excerpt, locale)
	const slug = params.slug || ''

	// Determine if this is an about page or generic page
	const isAboutPage = slug.includes('about') || slug.includes('acerca') || slug.includes('sobre')

	return [
		{ title: `${title} - TOLO` },
		{
			name: 'description',
			content: excerpt,
		},
		{
			'script:ld+json': {
				'@context': 'https://schema.org',
				'@type': isAboutPage ? 'AboutPage' : 'WebPage',
				name: title,
				description: excerpt,
				url: `https://tolo.cafe/${locale}/${slug}`,
				publisher: {
					'@type': 'Organization',
					name: 'TOLO Coffee',
				},
			},
		},
	]
}

const portableTextComponents: PortableTextComponents = {
	block: {
		h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
		h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
		normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
		blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
	},
	list: {
		bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
		number: ({ children }) => <ol className={styles.list}>{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
		number: ({ children }) => <li className={styles.listItem}>{children}</li>,
	},
	marks: {
		link: ({ children, value }) => (
			<a href={value?.href} className={styles.link} target="_blank" rel="noopener noreferrer">
				{children}
			</a>
		),
	},
}

export default function PageRoute({ loaderData }: Route.ComponentProps) {
	const { locale } = useOutletContext<{ locale: Locale }>()
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es
	const { page } = loaderData

	if (!page) {
		return (
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.notFound}>
						<h1 className={styles.notFoundTitle}>{t.notFoundTitle}</h1>
						<p className={styles.notFoundText}>{t.notFoundText}</p>
					</div>
				</div>
			</main>
		)
	}

	const title = getLocalizedString(page.name, locale, 'Untitled')
	const body = page.body?.[locale] || page.body?.es

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>{title}</h1>
				</header>

				{body && Array.isArray(body) && (
					<div className={styles.body}>
						<PortableText value={body} components={portableTextComponents} />
					</div>
				)}
			</div>
		</main>
	)
}
