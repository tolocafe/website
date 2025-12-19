import { Link, useOutletContext } from 'react-router'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Route } from './+types/blog-post'
import type { Locale } from '~/lib/locale'
import { client, urlFor } from '~/lib/sanity'
import * as styles from './blog-post.css'

interface LocaleContext {
  locale: Locale
}

interface Post {
  _id: string
  title: {
    en?: string
    es?: string
  }
  slug: {
    en?: { current: string }
    es?: { current: string }
  }
  publishedAt: string
  excerpt?: {
    en?: string
    es?: string
  }
  body?: {
    en?: unknown[]
    es?: unknown[]
  }
  image?: {
    asset: { _ref: string }
    alt?: string
  }
}

const TRANSLATIONS = {
  en: {
    backToBlogs: '← Back to Blog',
    notFoundTitle: 'Post Not Found',
    notFoundText:
      "The post you're looking for doesn't exist or has been removed.",
  },
  es: {
    backToBlogs: '← Volver al Blog',
    notFoundTitle: 'Publicación No Encontrada',
    notFoundText: 'La publicación que buscas no existe o ha sido eliminada.',
  },
} as const

const POST_QUERY = `*[
  _type == "post"
  && (slug.es.current == $slug || slug.en.current == $slug)
][0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  image
}`

export async function loader({ params }: Route.LoaderArgs) {
  const post = await client.fetch<Post | null>(POST_QUERY, {
    slug: params.slug,
  })
  return { post }
}

export function meta({ data, params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const post = data?.post

  if (!post) {
    return [{ title: 'Post Not Found - TOLO' }]
  }

  const title = post.title[locale] || post.title.es || 'Untitled'
  const description = post.excerpt?.[locale] || post.excerpt?.es || ''

  return [
    { title: `${title} - TOLO Blog` },
    { name: 'description', content: description },
  ]
}

// Portable Text components for rendering rich text
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
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
      <a
        href={value?.href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<LocaleContext>()
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

  const postTitle = post.title[locale] || post.title.es || 'Untitled'
  const postBody = post.body?.[locale] || post.body?.es
  const imageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(675).url()
    : null

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to={`/${locale}/blog`} className={styles.backLink}>
          {t.backToBlogs}
        </Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{postTitle}</h1>
            <div className={styles.meta}>
              <time className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString(
                  locale === 'es' ? 'es-MX' : 'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  },
                )}
              </time>
            </div>
          </header>

          {imageUrl && (
            <div className={styles.imageWrapper}>
              <img
                src={imageUrl}
                alt={post.image?.alt || postTitle}
                className={styles.image}
              />
            </div>
          )}

          {postBody && Array.isArray(postBody) && (
            <div className={styles.body}>
              <PortableText
                value={postBody}
                components={portableTextComponents}
              />
            </div>
          )}
        </article>
      </div>
    </main>
  )
}
