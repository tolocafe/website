import { Link, useOutletContext } from 'react-router'
import type { Route } from './+types/bean'
import type { Locale } from '~/lib/locale'
import { client, urlFor, getLocalizedString, type Bean } from '~/lib/sanity'
import * as styles from './bean.css'

const TRANSLATIONS = {
  es: {
    backToBeans: '← Volver a Nuestros Granos',
    notFoundTitle: 'Grano No Encontrado',
    notFoundText: 'El grano de café que buscas no existe o ha sido eliminado.',
    originLabel: 'Origen',
    regionLabel: 'Región',
    producerLabel: 'Productor',
    varietalLabel: 'Variedad',
    altitudeLabel: 'Altitud',
    processLabel: 'Proceso',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Notas de Cata',
  },
  en: {
    backToBeans: '← Back to Our Beans',
    notFoundTitle: 'Bean Not Found',
    notFoundText:
      "The coffee bean you're looking for doesn't exist or has been removed.",
    originLabel: 'Origin',
    regionLabel: 'Region',
    producerLabel: 'Producer',
    varietalLabel: 'Varietal',
    altitudeLabel: 'Altitude',
    processLabel: 'Process',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Tasting Notes',
  },
  de: {
    backToBeans: '← Zurück zu Unseren Bohnen',
    notFoundTitle: 'Bohne Nicht Gefunden',
    notFoundText:
      'Die Kaffeebohne, die Sie suchen, existiert nicht oder wurde entfernt.',
    originLabel: 'Herkunft',
    regionLabel: 'Region',
    producerLabel: 'Produzent',
    varietalLabel: 'Sorte',
    altitudeLabel: 'Höhe',
    processLabel: 'Verarbeitung',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Verkostungsnotizen',
  },
  fr: {
    backToBeans: '← Retour à Nos Grains',
    notFoundTitle: 'Grain Non Trouvé',
    notFoundText:
      'Le grain de café que vous recherchez n\'existe pas ou a été supprimé.',
    originLabel: 'Origine',
    regionLabel: 'Région',
    producerLabel: 'Producteur',
    varietalLabel: 'Variété',
    altitudeLabel: 'Altitude',
    processLabel: 'Procédé',
    agtronLabel: 'Agtron',
    tastingNotesLabel: 'Notes de Dégustation',
  },
  ja: {
    backToBeans: '← コーヒー豆一覧に戻る',
    notFoundTitle: 'コーヒー豆が見つかりません',
    notFoundText:
      'お探しのコーヒー豆は存在しないか、削除されました。',
    originLabel: '産地',
    regionLabel: '地域',
    producerLabel: '生産者',
    varietalLabel: '品種',
    altitudeLabel: '標高',
    processLabel: '精製方法',
    agtronLabel: 'アグトロン',
    tastingNotesLabel: 'テイスティングノート',
  },
} as const

const BEAN_QUERY = `*[
  _type == "bean"
  && (slug.es.current == $slug || slug.en.current == $slug)
][0]{
  _id, name, slug, origin, region, producer, varietal, altitude, process, excerpt, tastingNotes, agtron, regionImage, varietalImage
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
  const tastingNotes = getLocalizedString(bean.tastingNotes, locale)
  const imageUrl = bean.regionImage
    ? urlFor(bean.regionImage)?.width(800).url()
    : null

  return [
    { title: `${name} - TOLO Beans` },
    {
      name: 'description',
      content: `${name} from ${origin}. ${tastingNotes}`,
    },
    {
      tagName: 'script',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description: tastingNotes || getLocalizedString(bean.excerpt, locale),
        brand: {
          '@type': 'Brand',
          name: 'TOLO Coffee',
        },
        image: imageUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'MXN',
        },
        additionalProperty: [
          origin && {
            '@type': 'PropertyValue',
            name: 'Origin',
            value: origin,
          },
          bean.altitude && {
            '@type': 'PropertyValue',
            name: 'Altitude',
            value: `${bean.altitude}m`,
          },
          getLocalizedString(bean.process, locale) && {
            '@type': 'PropertyValue',
            name: 'Process',
            value: getLocalizedString(bean.process, locale),
          },
        ].filter(Boolean),
      }),
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
  const producer = getLocalizedString(bean.producer, locale)
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
    { label: t.producerLabel, value: producer },
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



