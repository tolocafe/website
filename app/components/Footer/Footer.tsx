import { Link, useParams } from 'react-router'
import { isValidLocale, DEFAULT_LOCALE, type Locale } from '~/lib/locale'
import {
  type Location,
  getLocalizedString,
} from '~/lib/sanity'
import * as styles from './Footer.css'

const currentYear = new Date().getFullYear()

const TRANSLATIONS = {
  es: {
    brand: 'TOLO',
    tagline: 'Buen café, así nomás.',
    navigation: 'Navegación',
    home: 'Inicio',
    beans: 'Nuestros Granos',
    beansPath: 'granos',
    blog: 'Blog',
    contact: 'Contacto',
    connect: 'Conectar',
    locations: 'Ubicaciones',
    copyright: `© ${currentYear} TOLO. Todos los derechos reservados.`,
  },
  en: {
    brand: 'TOLO',
    tagline: 'Good coffee, nothing more.',
    navigation: 'Navigation',
    home: 'Home',
    beans: 'Our Beans',
    beansPath: 'beans',
    blog: 'Blog',
    contact: 'Contact Us',
    connect: 'Connect',
    locations: 'Locations',
    copyright: `© ${currentYear} TOLO. All rights reserved.`,
  },
  de: {
    brand: 'TOLO',
    tagline: 'Guter Kaffee, nichts weiter.',
    navigation: 'Navigation',
    home: 'Startseite',
    beans: 'Unsere Bohnen',
    beansPath: 'beans',
    blog: 'Blog',
    contact: 'Kontakt',
    connect: 'Verbinden',
    locations: 'Standorte',
    copyright: `© ${currentYear} TOLO. Alle Rechte vorbehalten.`,
  },
  fr: {
    brand: 'TOLO',
    tagline: 'Du bon café, rien de plus.',
    navigation: 'Navigation',
    home: 'Accueil',
    beans: 'Nos Grains',
    beansPath: 'beans',
    blog: 'Blog',
    contact: 'Contact',
    connect: 'Suivez-nous',
    locations: 'Emplacements',
    copyright: `© ${currentYear} TOLO. Tous droits réservés.`,
  },
  ja: {
    brand: 'TOLO',
    tagline: 'シンプルに、おいしいコーヒー。',
    navigation: 'ナビゲーション',
    home: 'ホーム',
    beans: 'コーヒー豆',
    beansPath: 'beans',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    connect: 'フォロー',
    locations: '店舗',
    copyright: `© ${currentYear} TOLO. 全著作権所有。`,
  },
} as const

interface FooterProps {
  locations?: Location[]
}

export function Footer({ locations = [] }: FooterProps) {
  const { locale: localeParam } = useParams<{ locale: string }>()
  const locale: Locale = isValidLocale(localeParam)
    ? localeParam
    : DEFAULT_LOCALE
  const t = TRANSLATIONS[locale]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.brand}>{t.brand}</span>
          <p className={styles.tagline}>{t.tagline}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.navigation}</h3>
          <Link to={`/${locale}`} className={styles.link}>
            {t.home}
          </Link>
          <Link to={`/${locale}/${t.beansPath}`} className={styles.link}>
            {t.beans}
          </Link>
          <Link to={`/${locale}/blog`} className={styles.link}>
            {t.blog}
          </Link>
          <Link to={`/${locale}/contact`} className={styles.link}>
            {t.contact}
          </Link>
        </div>

        {locations.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.locations}</h3>
            {locations.map((location) => (
              <div key={location._id} className={styles.locationItem}>
                <span className={styles.locationName}>
                  {getLocalizedString(location.name, locale)}
                </span>
                <span className={styles.locationCity}>
                  {location.city}, {location.country}
                </span>
                {location.hours && (
                  <span className={styles.locationHours}>
                    {getLocalizedString(location.hours, locale)}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.connect}</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Facebook
          </a>
        </div>
      </div>
      <p className={styles.copyright}>{t.copyright}</p>
    </footer>
  )
}
