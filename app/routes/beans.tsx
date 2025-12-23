import { Link, useOutletContext } from 'react-router'
import type { Route } from './+types/beans'
import type { Locale } from '~/lib/locale'
import {
  client,
  urlFor,
  getLocalizedString,
  getLocalizedSlug,
  type Bean,
} from '~/lib/sanity'
import * as styles from './beans.css'

const TRANSLATIONS = {
  es: {
    title: 'Nuestros Granos - TOLO',
    description:
      'Descubre nuestros granos de café cuidadosamente seleccionados de todo el mundo',
    heading: 'Nuestros Granos',
    subtitle: 'Orígenes únicos y mezclas cuidadosamente seleccionados',
    altitudeLabel: 'Altitud',
    processLabel: 'Proceso',
    emptyTitle: 'Próximamente',
    emptyMessage:
      'Estamos preparando nuestro catálogo de granos. Vuelve pronto para descubrir nuestros cafés cuidadosamente seleccionados.',
  },
  en: {
    title: 'Our Beans - TOLO',
    description:
      'Discover our carefully selected coffee beans from around the world',
    heading: 'Our Beans',
    subtitle: 'Carefully selected single origins and blends',
    altitudeLabel: 'Altitude',
    processLabel: 'Process',
    emptyTitle: 'Coming Soon',
    emptyMessage:
      'We are preparing our bean catalog. Check back soon to discover our carefully selected coffees.',
  },
  de: {
    title: 'Unsere Bohnen - TOLO',
    description:
      'Entdecken Sie unsere sorgfältig ausgewählten Kaffeebohnen aus aller Welt',
    heading: 'Unsere Bohnen',
    subtitle: 'Sorgfältig ausgewählte Single Origins und Blends',
    altitudeLabel: 'Höhe',
    processLabel: 'Verarbeitung',
    emptyTitle: 'Demnächst',
    emptyMessage:
      'Wir bereiten unseren Bohnenkatalog vor. Schauen Sie bald wieder vorbei, um unsere sorgfältig ausgewählten Kaffees zu entdecken.',
  },
  fr: {
    title: 'Nos Grains - TOLO',
    description:
      'Découvrez nos grains de café soigneusement sélectionnés du monde entier',
    heading: 'Nos Grains',
    subtitle: 'Origines uniques et mélanges soigneusement sélectionnés',
    altitudeLabel: 'Altitude',
    processLabel: 'Procédé',
    emptyTitle: 'Bientôt Disponible',
    emptyMessage:
      'Nous préparons notre catalogue de grains. Revenez bientôt pour découvrir nos cafés soigneusement sélectionnés.',
  },
  ja: {
    title: 'コーヒー豆 - TOLO',
    description: '世界中から厳選されたコーヒー豆をご紹介します',
    heading: 'コーヒー豆',
    subtitle: '厳選されたシングルオリジンとブレンド',
    altitudeLabel: '標高',
    processLabel: '精製方法',
    emptyTitle: '近日公開',
    emptyMessage:
      'コーヒー豆カタログを準備中です。厳選されたコーヒーをお届けするため、もうしばらくお待ちください。',
  },
} as const

const BEANS_QUERY = `*[
  _type == "bean"
  && (defined(slug.es.current) || defined(slug.en.current))
]|order(name.es asc)[0...50]{
  _id, name, slug, origin, region, altitude, process, excerpt, regionImage
}`

export async function loader() {
  return { beans: await client.fetch<Bean[]>(BEANS_QUERY) }
}

export function meta({ params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es

  return [
    { title: t.title },
    { name: 'description', content: t.description },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t.heading,
        description: t.subtitle,
        url: `https://tolo.cafe/${locale}/beans`,
        publisher: {
          '@type': 'Organization',
          name: 'TOLO Coffee',
        },
      },
    },
  ]
}

export default function Beans({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  const { beans } = loaderData

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{t.heading}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </header>

        <div className={styles.content}>
          {beans.length > 0 ? (
            <div className={styles.beansGrid}>
              {beans.map((bean) => {
                const slug = getLocalizedSlug(bean.slug, locale)
                if (!slug) return null

                const name = getLocalizedString(bean.name, locale, 'Untitled')
                const origin = getLocalizedString(bean.origin, locale)
                const region = getLocalizedString(bean.region, locale)
                const process = getLocalizedString(bean.process, locale)
                const excerpt = getLocalizedString(bean.excerpt, locale)
                const imageUrl = bean.regionImage
                  ? urlFor(bean.regionImage)?.width(400).height(300).url()
                  : null

                const beansPath = locale === 'en' ? 'beans' : 'granos'

                return (
                  <Link
                    key={bean._id}
                    to={`/${locale}/${beansPath}/${slug}`}
                    className={styles.beanCard}
                  >
                    {imageUrl && (
                      <div className={styles.beanImageWrapper}>
                        <img
                          src={imageUrl}
                          alt={bean.regionImage?.alt || name}
                          className={styles.beanImage}
                        />
                      </div>
                    )}
                    <div className={styles.beanContent}>
                      <h2 className={styles.beanName}>{name}</h2>
                      {(origin || region) && (
                        <p className={styles.beanOrigin}>
                          {[origin, region].filter(Boolean).join(', ')}
                        </p>
                      )}
                      {excerpt && (
                        <p className={styles.beanExcerpt}>{excerpt}</p>
                      )}
                      <div className={styles.beanMeta}>
                        {bean.altitude && (
                          <span className={styles.beanDetail}>
                            {t.altitudeLabel}: {bean.altitude}m
                          </span>
                        )}
                        {process && (
                          <span className={styles.beanDetail}>
                            {t.processLabel}: {process}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2 className={styles.emptyTitle}>{t.emptyTitle}</h2>
              <p className={styles.emptyMessage}>{t.emptyMessage}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
