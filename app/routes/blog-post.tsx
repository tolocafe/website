import { Link, useOutletContext } from 'react-router'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Route } from './+types/blog-post'
import type { Locale } from '~/lib/locale'
import { client, urlFor, getLocalizedString, formatDate, type Post } from '~/lib/sanity'
import * as styles from './blog-post.css'

const TRANSLATIONS = {
	es: {
		backToBlogs: '← Volver al Blog',
		notFoundTitle: 'Publicación No Encontrada',
		notFoundText: 'La publicación que buscas no existe o ha sido eliminada.',
	},
	en: {
		backToBlogs: '← Back to Blog',
		notFoundTitle: 'Post Not Found',
		notFoundText: "The post you're looking for doesn't exist or has been removed.",
	},
	de: {
		backToBlogs: '← Zurück zum Blog',
		notFoundTitle: 'Beitrag Nicht Gefunden',
		notFoundText: 'Der Beitrag, den Sie suchen, existiert nicht oder wurde entfernt.',
	},
	fr: {
		backToBlogs: '← Retour au Blog',
		notFoundTitle: 'Article Non Trouvé',
		notFoundText: "L'article que vous recherchez n'existe pas ou a été supprimé.",
	},
	ja: {
		backToBlogs: '← ブログに戻る',
		notFoundTitle: '記事が見つかりません',
		notFoundText: 'お探しの記事は存在しないか、削除されました。',
	},
} as const

const POST_QUERY = `*[
  _type == "post"
  && (slug.es.current == $slug || slug.en.current == $slug)
][0]{
  _id, name, slug, publishedAt, excerpt, body, image
}`

export async function loader({ params }: Route.LoaderArgs) {
	return { post: await client.fetch<Post | null>(POST_QUERY, params) }
}

export function meta({ data, params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || 'es'
	const post = data?.post
	if (!post) return [{ title: 'Post Not Found - TOLO' }]

	const title = getLocalizedString(post.name, locale, 'Untitled')
	const excerpt = getLocalizedString(post.excerpt, locale)
	const imageUrl = post.image ? urlFor(post.image)?.width(1200).url() : null

	return [
		{ title: `${title} - TOLO Blog` },
		{ name: 'description', content: excerpt },
		{
			'script:ld+json': {
				'@context': 'https://schema.org',
				'@type': 'BlogPosting',
				headline: title,
				description: excerpt,
				image: imageUrl,
				datePublished: post.publishedAt,
				dateModified: post._updatedAt || post.publishedAt,
				author: {
					'@type': 'Organization',
					name: 'TOLO Coffee',
				},
				publisher: {
					'@type': 'Organization',
					name: 'TOLO Coffee',
					logo: {
						'@type': 'ImageObject',
						url: 'https://tolo.cafe/favicon.png',
					},
				},
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': `https://tolo.cafe/${locale}/blog/${params.slug}`,
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

export default function BlogPost({ loaderData }: Route.ComponentProps) {
	const { locale } = useOutletContext<{ locale: Locale }>()
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es
	const { post } = loaderData

	if (!post) {
		return (
			<main className={styles.main}>
				<div className={styles.container}>
					<Link to={`/${locale}/blog`} className={styles.backLink}>
						{t.backToBlogs}
					</Link>
					<div className={styles.notFound}>
						<h1 className={styles.notFoundTitle}>{t.notFoundTitle}</h1>
						<p className={styles.notFoundText}>{t.notFoundText}</p>
					</div>
				</div>
			</main>
		)
	}

	const title = getLocalizedString(post.name, locale, 'Untitled')
	const body = post.body?.[locale] || post.body?.es
	const imageUrl = post.image ? urlFor(post.image)?.width(1200).height(675).url() : null

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Link to={`/${locale}/blog`} className={styles.backLink}>
					{t.backToBlogs}
				</Link>

				<article className={styles.article}>
					<header className={styles.header}>
						<h1 className={styles.title}>{title}</h1>
						<div className={styles.meta}>
							<time className={styles.date}>{formatDate(post.publishedAt, locale)}</time>
						</div>
					</header>

					{imageUrl && (
						<div className={styles.imageWrapper}>
							<img src={imageUrl} alt={post.image?.alt || title} className={styles.image} />
						</div>
					)}

					{body && Array.isArray(body) && (
						<div className={styles.body}>
							<PortableText value={body} components={portableTextComponents} />
						</div>
					)}
				</article>
			</div>
		</main>
	)
}
