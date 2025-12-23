import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router'
import {
  SUPPORTED_LOCALES,
  LOCALE_LABELS,
  getPathWithoutLocale,
  isValidLocale,
  DEFAULT_LOCALE,
  type Locale,
} from '~/lib/locale'
import * as styles from './Header.css'
import toloLogo from '~/assets/tolo.png'

const TRANSLATIONS = {
  es: {
    beans: 'Granos',
    beansPath: 'granos',
    blog: 'Blog',
    about: 'Nosotros',
    aboutPath: 'nosotros',
    visit: 'Visítanos',
    contact: 'Contacto',
    ctaApp: 'Descargar app',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuTitle: 'Menú',
  },
  en: {
    beans: 'Beans',
    beansPath: 'beans',
    blog: 'Blog',
    about: 'About',
    aboutPath: 'about',
    visit: 'Visit',
    contact: 'Contact',
    ctaApp: 'Get the app',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuTitle: 'Menu',
  },
  de: {
    beans: 'Bohnen',
    beansPath: 'beans',
    blog: 'Blog',
    about: 'Über uns',
    aboutPath: 'ueber-uns',
    visit: 'Besuchen',
    contact: 'Kontakt',
    ctaApp: 'App herunterladen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    menuTitle: 'Menü',
  },
  fr: {
    beans: 'Grains',
    beansPath: 'beans',
    blog: 'Blog',
    about: 'À propos',
    aboutPath: 'a-propos',
    visit: 'Nous trouver',
    contact: 'Contact',
    ctaApp: "Télécharger l’app",
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menuTitle: 'Menu',
  },
  ja: {
    beans: '豆',
    beansPath: 'beans',
    blog: 'ブログ',
    about: '私たちについて',
    aboutPath: 'about',
    visit: '店舗情報',
    contact: 'お問い合わせ',
    ctaApp: 'アプリを入手',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    menuTitle: 'メニュー',
  },
} as const

export function Header() {
  const { locale: localeParam } = useParams<{ locale: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const currentLocale: Locale = isValidLocale(localeParam)
    ? localeParam
    : DEFAULT_LOCALE
  const pathWithoutLocale = getPathWithoutLocale(location.pathname)
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.es

  const beansTo = `/${currentLocale}/${t.beansPath}`
  const blogTo = `/${currentLocale}/blog`
  const aboutTo = `/${currentLocale}/${t.aboutPath}`
  const visitTo = `/${currentLocale}#visit`
  const contactTo = `/${currentLocale}/contact`
  const appTo = `/${currentLocale}#app`

  const navItems = [
    { label: t.beans, to: beansTo, matchPath: beansTo },
    { label: t.blog, to: blogTo, matchPath: blogTo },
    { label: t.about, to: aboutTo, matchPath: aboutTo },
    { label: t.visit, to: visitTo, matchPath: `/${currentLocale}`, matchHash: '#visit' },
    {
      label: t.contact,
      to: contactTo,
      matchPath: contactTo,
    },
  ] as const

  function isActive(item: (typeof navItems)[number]) {
    if (!location.pathname.startsWith(item.matchPath)) return false
    if ('matchHash' in item && item.matchHash && location.hash !== item.matchHash)
      return false
    return true
  }

  function handleLocaleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as Locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    navigate(newPath)
  }

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash, currentLocale])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <nav className={styles.nav} aria-label="Primary">
            <Link to={`/${currentLocale}`} className={styles.logo}>
              <img src={toloLogo} alt="TOLO" className={styles.logoImg} />
            </Link>
          </nav>

          <nav className={styles.links} aria-label="Site">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${styles.link} ${isActive(item) ? styles.linkActive : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          <Link to={appTo} className={styles.cta}>
            {t.ctaApp}
          </Link>

          <nav className={styles.localeNav} aria-label="Language selection">
            <select
              className={styles.localeSelect}
              value={currentLocale}
              onChange={handleLocaleChange}
              aria-label="Select language"
            >
              {SUPPORTED_LOCALES.map((locale) => (
                <option key={locale} value={locale}>
                  {LOCALE_LABELS[locale]}
                </option>
              ))}
            </select>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label={t.openMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className={styles.mobileOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label={t.menuTitle}
          >
            <div className={styles.mobileHeader}>
              <span className={styles.mobileTitle}>TOLO</span>
              <button
                type="button"
                className={styles.mobileClose}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={t.closeMenu}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className={styles.mobileLinks} aria-label="Site">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className={styles.mobileLink}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link to={appTo} className={styles.mobileCta}>
              {t.ctaApp}
            </Link>
          </div>
        </>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
