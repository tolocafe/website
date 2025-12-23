import { useOutletContext } from 'react-router'
import type { Route } from './+types/home'
import { Welcome } from '~/welcome/welcome'
import type { Locale } from '~/lib/locale'

interface LocaleContext {
  locale: Locale
}

const TRANSLATIONS = {
  es: {
    title: 'TOLO - Buen Café',
    description: 'Ofrecemos buen café',
  },
  en: {
    title: 'TOLO - Good Coffee',
    description: 'We offer good coffee',
  },
  de: {
    title: 'TOLO - Guter Kaffee',
    description: 'Wir bieten guten Kaffee',
  },
  fr: {
    title: 'TOLO - Bon Café',
    description: 'Nous offrons du bon café',
  },
  ja: {
    title: 'TOLO - おいしいコーヒー',
    description: 'おいしいコーヒーを提供します',
  },
} as const

export function meta({ params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es

  return [
    { title: t.title },
    { name: 'description', content: t.description },
    {
      tagName: 'script',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TOLO Coffee',
        url: 'https://tolo.cafe',
        logo: 'https://tolo.cafe/favicon.png',
        description: t.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toluca',
          addressRegion: 'Estado de México',
          addressCountry: 'MX',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hola@tolo.cafe',
          contactType: 'customer service',
        },
        sameAs: [
          'https://instagram.com',
          'https://facebook.com',
        ],
      }),
    },
  ]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { locale } = useOutletContext<LocaleContext>()

  return <Welcome message={loaderData.message} locale={locale} />
}
