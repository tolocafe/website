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
    description:
      'Descubre el mejor café de especialidad en Toluca. Micro-lotes tostados semanalmente, granos seleccionados de alta calidad, baristas expertos y ambiente acogedor. Espresso, pour-over, y métodos de preparación artesanales. Visítanos en el centro de Toluca.',
  },
  en: {
    title: 'TOLO - Good Coffee',
    description:
      'Discover the best specialty coffee in Toluca. Weekly roasted micro-lots, high-quality selected beans, expert baristas and welcoming atmosphere. Espresso, pour-over, and artisan brewing methods. Visit us in downtown Toluca.',
  },
  de: {
    title: 'TOLO - Guter Kaffee',
    description:
      'Entdecken Sie den besten Spezialitätenkaffee in Toluca. Wöchentlich geröstete Micro-Lots, hochwertige ausgewählte Bohnen, erfahrene Baristas und einladende Atmosphäre. Espresso, Pour-Over und handwerkliche Zubereitungsmethoden. Besuchen Sie uns in der Innenstadt von Toluca.',
  },
  fr: {
    title: 'TOLO - Bon Café',
    description:
      'Découvrez le meilleur café de spécialité à Toluca. Micro-lots torréfiés chaque semaine, grains sélectionnés de haute qualité, baristas experts et atmosphère accueillante. Espresso, pour-over et méthodes de préparation artisanales. Visitez-nous au centre-ville de Toluca.',
  },
  ja: {
    title: 'TOLO - おいしいコーヒー',
    description:
      'トルーカで最高のスペシャルティコーヒーを発見してください。毎週焙煎されるマイクロロット、高品質な厳選豆、熟練バリスタ、居心地の良い雰囲気。エスプレッソ、プアオーバー、職人的な抽出方法。トルーカのダウンタウンでお待ちしています。',
  },
} as const

export function meta({ params }: Route.MetaArgs) {
  const locale = (params.locale as Locale) || 'es'
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es

  return [
    { title: t.title },
    { name: 'description', content: t.description },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'CafeOrRestaurant'],
        name: 'TOLO Coffee',
        url: 'https://tolo.cafe',
        logo: 'https://tolo.cafe/favicon.png',
        description: t.description,
        servesCuisine: 'Coffee',
        priceRange: '$$',
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
          'https://instagram.com/tolo.cafe',
          'https://facebook.com/tolo.cafe',
          'https://tiktok.com/@tolo.cafe',
        ],
        mobileApplication: {
          '@type': 'MobileApplication',
          name: 'TOLO - Buen Café',
          operatingSystem: 'iOS, Android',
          applicationCategory: 'LifestyleApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          downloadUrl: [
            'https://apps.apple.com/app/tolo-buen-café/id6749597635',
            'https://play.google.com/store/apps/details?id=cafe.tolo.app',
          ],
        },
      },
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
