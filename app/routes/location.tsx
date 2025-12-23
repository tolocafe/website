import { Link, useOutletContext } from 'react-router'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Route } from './+types/location'
import type { Locale } from '~/lib/locale'
import {
  client,
  urlFor,
  getLocalizedString,
  type Location,
} from '~/lib/sanity'
import * as styles from './location.css'

const TRANSLATIONS = {
  es: {
    backToLocations: '← Volver a Ubicaciones',
    notFoundTitle: 'Ubicación No Encontrada',
    notFoundText: 'La ubicación que buscas no existe o ha sido eliminada.',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario',
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo',
  },
  en: {
    backToLocations: '← Back to Locations',
    notFoundTitle: 'Location Not Found',
    notFoundText:
      "The location you're looking for doesn't exist or has been removed.",
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
  },
  de: {
    backToLocations: '← Zurück zu Standorten',
    notFoundTitle: 'Standort Nicht Gefunden',
    notFoundText:
      'Der Standort, den Sie suchen, existiert nicht oder wurde entfernt.',
    addressLabel: 'Adresse',
    hoursLabel: 'Öffnungszeiten',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
  },
  fr: {
    backToLocations: '← Retour aux Emplacements',
    notFoundTitle: 'Emplacement Non Trouvé',
    notFoundText:
      "L'emplacement que vous recherchez n'existe pas ou a été supprimé.",
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
  },
  ja: {
    backToLocations: '← 店舗一覧に戻る',
    notFoundTitle: '店舗が見つかりません',
    notFoundText: 'お探しの店舗は存在しないか、削除されました。',
    addressLabel: '住所',
    hoursLabel: '営業時間',
    phoneLabel: '電話',
    emailLabel: 'メール',
  },
} as const

const LOCATION_QUERY = `*[
  _type == "location"
  && (slug.es.current == $slug || slug.en.current == $slug || slug.de.current == $slug || slug.fr.current == $slug || slug.ja.current == $slug)
][0]{
  _id, name, slug, description, address, city, state, country, postalCode, coordinates, phone, email, hours, image, isMainLocation
}`

export async function loader({ params }: Route.LoaderArgs) {
  return { location: await client.fetch<Location | null>(LOCATION_QUERY, params) }
}

export function meta({ data, params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const location = data?.location
  if (!location) return [{ title: 'Location Not Found - TOLO' }]

  const name = getLocalizedString(location.name, locale, 'Untitled')
  const address = getLocalizedString(location.address, locale)
  const hours = getLocalizedString(location.hours, locale)
  const imageUrl = location.image
    ? urlFor(location.image)?.width(1200).url()
    : null

  return [
    { title: `${name} - TOLO Locations` },
    {
      name: 'description',
      content: `${name} in ${location.city}, ${location.country}`,
    },
    {
      tagName: 'script',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CoffeShop',
        name,
        image: imageUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address,
          addressLocality: location.city,
          addressRegion: location.state,
          postalCode: location.postalCode,
          addressCountry: location.country,
        },
        geo: location.coordinates && {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
        },
        telephone: location.phone,
        email: location.email,
        openingHours: hours,
        priceRange: '$$',
        servesCuisine: 'Coffee',
      }),
    },
  ]
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
    number: ({ children }) => <ol className={styles.list}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
    number: ({ children }) => <li className={styles.listItem}>{children}</li>,
  },
}

export default function LocationDetail({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es
  const { location } = loaderData

  if (!location) {
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

  const name = getLocalizedString(location.name, locale, 'Untitled')
  const address = getLocalizedString(location.address, locale)
  const hours = getLocalizedString(location.hours, locale)
  const description = location.description?.[locale] || location.description?.es
  const imageUrl = location.image
    ? urlFor(location.image)?.width(1200).height(675).url()
    : null

  const fullAddress = [
    address,
    location.city,
    location.state,
    location.country,
    location.postalCode,
  ]
    .filter(Boolean)
    .join(', ')

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.location}>
              {location.city}, {location.country}
            </p>
          </header>

          {imageUrl && (
            <div className={styles.imageWrapper}>
              <img
                src={imageUrl}
                alt={location.image?.alt || name}
                className={styles.image}
              />
            </div>
          )}

          {description && Array.isArray(description) && (
            <div className={styles.body}>
              <PortableText
                value={description}
                components={portableTextComponents}
              />
            </div>
          )}

          <div className={styles.detailsGrid}>
            {fullAddress && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>{t.addressLabel}</span>
                <span className={styles.detailValue}>{fullAddress}</span>
              </div>
            )}
            {hours && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>{t.hoursLabel}</span>
                <span className={styles.detailValue}>{hours}</span>
              </div>
            )}
            {location.phone && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>{t.phoneLabel}</span>
                <a
                  href={`tel:${location.phone}`}
                  className={styles.detailLink}
                >
                  {location.phone}
                </a>
              </div>
            )}
            {location.email && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>{t.emailLabel}</span>
                <a
                  href={`mailto:${location.email}`}
                  className={styles.detailLink}
                >
                  {location.email}
                </a>
              </div>
            )}
          </div>

          {location.coordinates && (
            <div className={styles.mapWrapper}>
              <iframe
                src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=15&output=embed`}
                className={styles.map}
                loading="lazy"
                title={`Map of ${name}`}
              />
            </div>
          )}
        </article>
      </div>
    </main>
  )
}

