import { Link, useOutletContext } from 'react-router'
import type { Route } from './+types/blog'
import type { Locale } from '~/lib/locale'
import { client, urlFor } from '~/lib/sanity'
import * as styles from './blog.css'

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
  image?: {
    asset: { _ref: string }
    alt?: string
  }
}

const TRANSLATIONS = {
  en: {
    title: 'Blog - TOLO',
    description: 'Coffee stories, tips, and news from TOLO in Toluca',
    heading: 'Blog',
    subtitle: 'Stories from the coffee world',
    comingSoon: 'Coming Soon',
    message:
      "We're brewing up some great content for you. Our blog will feature coffee tips, brewing guides, origin stories, and news from our coffee shop in Toluca.",
    previewTitle: 'What to Expect',
    topics: [
      {
        title: 'Brewing Guides',
        description: 'Step-by-step instructions for the perfect cup at home.',
      },
      {
        title: 'Coffee Origins',
        description:
          'Stories about the farms and regions where our beans come from.',
      },
      {
        title: 'Shop Updates',
        description:
          "News about new offerings, events, and what's happening at TOLO.",
      },
    ],
  },
  es: {
    title: 'Blog - TOLO',
    description: 'Historias de café, consejos y noticias de TOLO en Toluca',
    heading: 'Blog',
    subtitle: 'Historias del mundo del café',
    comingSoon: 'Próximamente',
    message:
      'Estamos preparando contenido increíble para ti. Nuestro blog incluirá consejos de café, guías de preparación, historias de origen y noticias de nuestra cafetería en Toluca.',
    previewTitle: 'Qué Esperar',
    topics: [
      {
        title: 'Guías de Preparación',
        description: 'Instrucciones paso a paso para la taza perfecta en casa.',
      },
      {
        title: 'Orígenes del Café',
        description:
          'Historias sobre las fincas y regiones de donde provienen nuestros granos.',
      },
      {
        title: 'Novedades de la Tienda',
        description:
          'Noticias sobre nuevas ofertas, eventos y lo que pasa en TOLO.',
      },
    ],
  },
} as const

const POSTS_QUERY = `*[
  _type == "post"
  && (defined(slug.es.current) || defined(slug.en.current))
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  image
}`

export async function loader() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)
  return { posts }
}

export function meta({ params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es

  return [{ title: t.title }, { name: 'description', content: t.description }]
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<LocaleContext>()
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  const { posts } = loaderData

  const hasPosts = posts && posts.length > 0

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{t.heading}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </header>

        <div className={styles.content}>
          {hasPosts ? (
            <div className={styles.postsList}>
              {posts.map((post) => {
                const postTitle =
                  post.title[locale] || post.title.es || 'Untitled'
                const postExcerpt = post.excerpt?.[locale] || post.excerpt?.es
                const postSlug =
                  post.slug[locale]?.current || post.slug.es?.current
                const imageUrl = post.image
                  ? urlFor(post.image)?.width(400).height(280).url()
                  : null

                // Skip posts without a valid slug for current locale
                if (!postSlug) return null

                return (
                  <Link
                    key={post._id}
                    to={`/${locale}/blog/${postSlug}`}
                    className={styles.postCard}
                  >
                    {imageUrl && (
                      <div className={styles.postImageWrapper}>
                        <img
                          src={imageUrl}
                          alt={post.image?.alt || postTitle}
                          className={styles.postImage}
                        />
                      </div>
                    )}
                    <div className={styles.postContent}>
                      <h2 className={styles.postTitle}>{postTitle}</h2>
                      {postExcerpt && (
                        <p className={styles.postExcerpt}>{postExcerpt}</p>
                      )}
                      <time className={styles.postDate}>
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
                  </Link>
                )
              })}
            </div>
          ) : (
            <>
              <div className={styles.comingSoonCard}>
                <span className={styles.badge}>{t.comingSoon}</span>
                <p className={styles.message}>{t.message}</p>
              </div>

              <section className={styles.previewSection}>
                <h2 className={styles.previewTitle}>{t.previewTitle}</h2>
                <div className={styles.topicsGrid}>
                  {t.topics.map((topic) => (
                    <div key={topic.title} className={styles.topicCard}>
                      <h3 className={styles.topicTitle}>{topic.title}</h3>
                      <p className={styles.topicDescription}>
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
