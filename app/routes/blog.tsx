import { Link, useOutletContext } from 'react-router'
import type { Route } from './+types/blog'
import type { Locale } from '~/lib/locale'
import {
  client,
  urlFor,
  getLocalizedString,
  getLocalizedSlug,
  formatDate,
  type Post,
} from '~/lib/sanity'
import * as styles from './blog.css'

const TRANSLATIONS = {
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
  de: {
    title: 'Blog - TOLO',
    description: 'Kaffeegeschichten, Tipps und Neuigkeiten von TOLO in Toluca',
    heading: 'Blog',
    subtitle: 'Geschichten aus der Kaffeewelt',
    comingSoon: 'Demnächst',
    message:
      'Wir bereiten großartige Inhalte für Sie vor. Unser Blog wird Kaffeetipps, Brühanleitungen, Herkunftsgeschichten und Neuigkeiten aus unserem Café in Toluca enthalten.',
    previewTitle: 'Was Sie Erwartet',
    topics: [
      {
        title: 'Brühanleitungen',
        description: 'Schritt-für-Schritt-Anleitungen für die perfekte Tasse zu Hause.',
      },
      {
        title: 'Kaffee-Herkunft',
        description:
          'Geschichten über die Farmen und Regionen, aus denen unsere Bohnen stammen.',
      },
      {
        title: 'Shop-Neuigkeiten',
        description:
          'Neuigkeiten über neue Angebote, Veranstaltungen und was bei TOLO passiert.',
      },
    ],
  },
  fr: {
    title: 'Blog - TOLO',
    description: 'Histoires de café, conseils et actualités de TOLO à Toluca',
    heading: 'Blog',
    subtitle: 'Histoires du monde du café',
    comingSoon: 'Bientôt Disponible',
    message:
      'Nous préparons du contenu génial pour vous. Notre blog proposera des conseils café, des guides de préparation, des histoires d\'origine et des actualités de notre café à Toluca.',
    previewTitle: 'À Quoi S\'Attendre',
    topics: [
      {
        title: 'Guides de Préparation',
        description: 'Instructions étape par étape pour la tasse parfaite à la maison.',
      },
      {
        title: 'Origines du Café',
        description:
          'Histoires sur les fermes et les régions d\'où proviennent nos grains.',
      },
      {
        title: 'Actualités de la Boutique',
        description:
          'Nouvelles sur les nouvelles offres, événements et ce qui se passe chez TOLO.',
      },
    ],
  },
  ja: {
    title: 'ブログ - TOLO',
    description: 'トルーカのTOLOからのコーヒーストーリー、ヒント、ニュース',
    heading: 'ブログ',
    subtitle: 'コーヒーの世界からのストーリー',
    comingSoon: '近日公開',
    message:
      '素晴らしいコンテンツを準備中です。ブログではコーヒーのヒント、抽出ガイド、産地ストーリー、トルーカの店舗からのニュースをお届けします。',
    previewTitle: '予定コンテンツ',
    topics: [
      {
        title: '抽出ガイド',
        description: '自宅で完璧な一杯を淹れるためのステップバイステップガイド。',
      },
      {
        title: 'コーヒーの産地',
        description:
          '私たちの豆がどこの農園や地域から来ているかのストーリー。',
      },
      {
        title: 'ショップニュース',
        description:
          '新商品、イベント、TOLOで起きていることについてのニュース。',
      },
    ],
  },
} as const

const POSTS_QUERY = `*[
  _type == "post"
  && (defined(slug.es.current) || defined(slug.en.current))
]|order(publishedAt desc)[0...12]{
  _id, title, slug, publishedAt, excerpt, image
}`

export async function loader() {
  return { posts: await client.fetch<Post[]>(POSTS_QUERY) }
}

export function meta({ params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  return [{ title: t.title }, { name: 'description', content: t.description }]
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  const { posts } = loaderData

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{t.heading}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </header>

        <div className={styles.content}>
          {posts.length > 0 ? (
            <div className={styles.postsList}>
              {posts.map((post) => {
                const slug = getLocalizedSlug(post.slug, locale)
                if (!slug) return null

                const title = getLocalizedString(post.title, locale, 'Untitled')
                const imageUrl = post.image
                  ? urlFor(post.image)?.width(400).height(280).url()
                  : null

                return (
                  <Link
                    key={post._id}
                    to={`/${locale}/blog/${slug}`}
                    className={styles.postCard}
                  >
                    {imageUrl && (
                      <div className={styles.postImageWrapper}>
                        <img
                          src={imageUrl}
                          alt={post.image?.alt || title}
                          className={styles.postImage}
                        />
                      </div>
                    )}
                    <div className={styles.postContent}>
                      <h2 className={styles.postTitle}>{title}</h2>
                      {post.excerpt && (
                        <p className={styles.postExcerpt}>
                          {getLocalizedString(post.excerpt, locale)}
                        </p>
                      )}
                      <time className={styles.postDate}>
                        {formatDate(post.publishedAt, locale)}
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
