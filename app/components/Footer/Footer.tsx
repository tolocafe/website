import { Link, useParams } from 'react-router'
import { isValidLocale, DEFAULT_LOCALE, type Locale } from '~/lib/locale'
import { type Location, getLocalizedString, getLocalizedSlug } from '~/lib/sanity'
import * as styles from './Footer.css'

const currentYear = new Date().getFullYear()

const TRANSLATIONS = {
	es: {
		brand: 'TOLO',
		tagline: 'Buen café, así nomás.',
		explore: 'Explorar',
		home: 'Inicio',
		beans: 'Nuestros Granos',
		beansPath: 'granos',
		blog: 'Blog',
		company: 'Empresa',
		about: 'Nosotros',
		aboutPath: 'nosotros',
		wholesale: 'Mayoreo',
		wholesalePath: 'mayoreo',
		contact: 'Contacto',
		legal: 'Legal',
		privacy: 'Privacidad',
		privacyPath: 'privacidad',
		connect: 'Síguenos',
		locations: 'Ubicaciones',
		copyright: `© ${currentYear} TOLO. Todos los derechos reservados.`,
	},
	en: {
		brand: 'TOLO',
		tagline: 'Good coffee, nothing more.',
		explore: 'Explore',
		home: 'Home',
		beans: 'Our Beans',
		beansPath: 'beans',
		blog: 'Blog',
		company: 'Company',
		about: 'About Us',
		aboutPath: 'about',
		wholesale: 'Wholesale',
		wholesalePath: 'wholesale',
		contact: 'Contact',
		legal: 'Legal',
		privacy: 'Privacy',
		privacyPath: 'privacy',
		connect: 'Follow Us',
		locations: 'Locations',
		copyright: `© ${currentYear} TOLO. All rights reserved.`,
	},
	de: {
		brand: 'TOLO',
		tagline: 'Guter Kaffee, nichts weiter.',
		explore: 'Erkunden',
		home: 'Startseite',
		beans: 'Unsere Bohnen',
		beansPath: 'beans',
		blog: 'Blog',
		company: 'Unternehmen',
		about: 'Über uns',
		aboutPath: 'ueber-uns',
		wholesale: 'Großhandel',
		wholesalePath: 'grosshandel',
		contact: 'Kontakt',
		legal: 'Rechtliches',
		privacy: 'Datenschutz',
		privacyPath: 'datenschutz',
		connect: 'Folgen Sie uns',
		locations: 'Standorte',
		copyright: `© ${currentYear} TOLO. Alle Rechte vorbehalten.`,
	},
	fr: {
		brand: 'TOLO',
		tagline: 'Du bon café, rien de plus.',
		explore: 'Explorer',
		home: 'Accueil',
		beans: 'Nos Grains',
		beansPath: 'beans',
		blog: 'Blog',
		company: 'Entreprise',
		about: 'À propos',
		aboutPath: 'a-propos',
		wholesale: 'Vente en gros',
		wholesalePath: 'vente-en-gros',
		contact: 'Contact',
		legal: 'Légal',
		privacy: 'Confidentialité',
		privacyPath: 'confidentialite',
		connect: 'Suivez-nous',
		locations: 'Emplacements',
		copyright: `© ${currentYear} TOLO. Tous droits réservés.`,
	},
	ja: {
		brand: 'TOLO',
		tagline: 'シンプルに、おいしいコーヒー。',
		explore: '探索',
		home: 'ホーム',
		beans: 'コーヒー豆',
		beansPath: 'beans',
		blog: 'ブログ',
		company: '会社情報',
		about: '私たちについて',
		aboutPath: 'about',
		wholesale: '卸売',
		wholesalePath: 'wholesale',
		contact: 'お問い合わせ',
		legal: '法的情報',
		privacy: 'プライバシー',
		privacyPath: 'privacy',
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
	const locale: Locale = isValidLocale(localeParam) ? localeParam : DEFAULT_LOCALE
	const t = TRANSLATIONS[locale]

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.brandSection}>
					<span className={styles.brand}>{t.brand}</span>
					<p className={styles.tagline}>{t.tagline}</p>
				</div>

				<div className={styles.linksGrid}>
					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>{t.explore}</h3>
						<Link to={`/${locale}`} className={styles.link}>
							{t.home}
						</Link>
						<Link to={`/${locale}/${t.beansPath}`} className={styles.link}>
							{t.beans}
						</Link>
						<Link to={`/${locale}/blog`} className={styles.link}>
							{t.blog}
						</Link>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>{t.company}</h3>
						<Link to={`/${locale}/${t.aboutPath}`} className={styles.link}>
							{t.about}
						</Link>
						<Link to={`/${locale}/${t.wholesalePath}`} className={styles.link}>
							{t.wholesale}
						</Link>
						<Link to={`/${locale}/contact`} className={styles.link}>
							{t.contact}
						</Link>
					</div>

					{locations.length > 0 && (
						<div className={styles.section}>
							<h3 className={styles.sectionTitle}>{t.locations}</h3>
							{locations.map((location) => {
								const slug = getLocalizedSlug(location.slug, locale)
								return slug ? (
									<Link
										key={location._id}
										to={`/${locale}/locations/${slug}`}
										className={styles.link}
									>
										{getLocalizedString(location.name, locale)}
									</Link>
								) : null
							})}
						</div>
					)}

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>{t.connect}</h3>
						<a
							href="https://instagram.com/tolo.cafe"
							target="_blank"
							rel="noreferrer"
							className={styles.link}
						>
							Instagram
						</a>
						<a
							href="https://facebook.com/tolo.cafe"
							target="_blank"
							rel="noreferrer"
							className={styles.link}
						>
							Facebook
						</a>
						<a
							href="https://tiktok.com/@tolo.cafe"
							target="_blank"
							rel="noreferrer"
							className={styles.link}
						>
							TikTok
						</a>
					</div>
				</div>
			</div>

			<div className={styles.bottomBar}>
				<p className={styles.copyright}>{t.copyright}</p>
				<div className={styles.legalLinks}>
					<Link to={`/${locale}/${t.privacyPath}`} className={styles.legalLink}>
						{t.privacy}
					</Link>
				</div>
			</div>
		</footer>
	)
}
