import { Link, useLocation, useParams, useNavigate } from 'react-router'
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

export function Header() {
  const { locale: localeParam } = useParams<{ locale: string }>()
  const location = useLocation()
  const navigate = useNavigate()

  const currentLocale: Locale = isValidLocale(localeParam)
    ? localeParam
    : DEFAULT_LOCALE
  const pathWithoutLocale = getPathWithoutLocale(location.pathname)

  function handleLocaleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as Locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    navigate(newPath)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to={`/${currentLocale}`} className={styles.logo}>
          <img src={toloLogo} alt="TOLO" className={styles.logoImg} />
        </Link>
      </nav>

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
    </header>
  )
}
