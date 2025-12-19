import { Link, useOutletContext } from 'react-router'
import type { Route } from './+types/bean'
import type { Locale } from '~/lib/locale'
import { client, urlFor, getLocalizedString, type Bean } from '~/lib/sanity'
import * as styles from './bean.css'

const TRANSLATIONS = {
  en: {
    backToBeans: '← Back to Our Beans',
    notFoundTitle: 'Bean Not Found',
    notFoundText:
      "The coffee bean you're looking for doesn't exist or has been removed.",
    originLabel: 'Origin',
    regionLabel: 'Region',
    varietalLabel: 'Varietal',
    altitudeLabel: 'Altitude',
    processLabel: 'Process',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Tasting Notes',
  },
  es: {
    backToBeans: '← Volver a Nuestros Granos',
    notFoundTitle: 'Grano No Encontrado',
    notFoundText: 'El grano de café que buscas no existe o ha sido eliminado.',
    originLabel: 'Origen',
    regionLabel: 'Región',
    varietalLabel: 'Variedad',
    altitudeLabel: 'Altitud',
    processLabel: 'Proceso',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Notas de Cata',
  },
} as const

const BEAN_QUERY = `*[
  _type == "bean"
  && (slug.es.current == $slug || slug.en.current == $slug)
][0]{
  _id, name, slug, origin, region, varietal, altitude, process, excerpt, tastingNotes, agtron, regionImage, varietalImage
}`

export async function loader({ params }: Route.LoaderArgs) {
  return { bean: await client.fetch<Bean | null>(BEAN_QUERY, params) }
}

export function meta({ data, params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const bean = data?.bean
  if (!bean) return [{ title: 'Bean Not Found - TOLO' }]

  const name = getLocalizedString(bean.name, locale, 'Untitled')
  const origin = getLocalizedString(bean.origin, locale)
  return [
    { title: `${name} - TOLO Beans` },
    {
      name: 'description',
      content: `${name} from ${origin}. ${getLocalizedString(bean.tastingNotes, locale)}`,
    },
  ]
}

export default function BeanDetail({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  const { bean } = loaderData
  const beansPath = locale === 'en' ? 'beans' : 'granos'

  if (!bean) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Link to={`/${locale}/${beansPath}`} className={styles.backLink}>
            {t.backToBeans}
          </Link>
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>{t.notFoundTitle}</h1>
            <p className={styles.notFoundText}>{t.notFoundText}</p>
          </div>
        </div>
      </main>
    )
  }

  const name = getLocalizedString(bean.name, locale, 'Untitled')
  const origin = getLocalizedString(bean.origin, locale)
  const region = getLocalizedString(bean.region, locale)
  const varietal = getLocalizedString(bean.varietal, locale)
  const process = getLocalizedString(bean.process, locale)
  const excerpt = getLocalizedString(bean.excerpt, locale)
  const tastingNotes = getLocalizedString(bean.tastingNotes, locale)

  const regionImageUrl = bean.regionImage
    ? urlFor(bean.regionImage)?.width(800).height(500).url()
    : null
  const varietalImageUrl = bean.varietalImage
    ? urlFor(bean.varietalImage)?.width(800).height(500).url()
    : null

  const details = [
    { label: t.originLabel, value: origin },
    { label: t.regionLabel, value: region },
    { label: t.varietalLabel, value: varietal },
    {
      label: t.altitudeLabel,
      value: bean.altitude ? `${bean.altitude}m` : null,
    },
    { label: t.processLabel, value: process },
    { label: t.agtronLabel, value: bean.agtron?.toString() },
  ].filter((d) => d.value)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to={`/${locale}/${beansPath}`} className={styles.backLink}>
          {t.backToBeans}
        </Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{name}</h1>
            {(origin || region) && (
              <p className={styles.origin}>
                {[origin, region].filter(Boolean).join(', ')}
              </p>
            )}
            {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          </header>

          {regionImageUrl && (
            <div className={styles.imageWrapper}>
              <img
                src={regionImageUrl}
                alt={bean.regionImage?.alt || `${name} region`}
                className={styles.image}
              />
            </div>
          )}

          <div className={styles.detailsGrid}>
            {details.map(({ label, value }) => (
              <div key={label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{label}</span>
                <span className={styles.detailValue}>{value}</span>
              </div>
            ))}
          </div>

          {tastingNotes && (
            <section className={styles.tastingSection}>
              <h2 className={styles.sectionTitle}>{t.tastingNotesLabel}</h2>
              <p className={styles.tastingNotes}>{tastingNotes}</p>
            </section>
          )}

          {varietalImageUrl && (
            <div className={styles.imageWrapper}>
              <img
                src={varietalImageUrl}
                alt={bean.varietalImage?.alt || `${name} varietal`}
                className={styles.image}
              />
            </div>
          )}
        </article>
      </div>
    </main>
  )
}
