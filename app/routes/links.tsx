import { useOutletContext } from 'react-router'
import type { Route } from './+types/links'
import type { Locale } from '~/lib/locale'
import * as styles from './links.css'

interface LocaleContext {
	locale: Locale
}

interface LinkItem {
	id: string
	icon: string
	labelKey: 'menu' | 'googleReviews' | 'tripadvisor' | 'appStore' | 'googlePlay'
	url: string
	section: 'main' | 'apps'
}

const LINKS: LinkItem[] = [
	{
		id: 'menu',
		icon: '📋',
		labelKey: 'menu',
		url: 'https://app.tolo.cafe',
		section: 'main',
	},
	{
		id: 'google-reviews',
		icon: '⭐',
		labelKey: 'googleReviews',
		url: 'https://g.page/r/Cfpoz19Mu8nWEBM/review',
		section: 'main',
	},
	{
		id: 'tripadvisor',
		icon: '🦉',
		labelKey: 'tripadvisor',
		url: 'https://www.tripadvisor.com.mx/Restaurant_Review-g644384-d33287081-Reviews-TOLO_Buen_Cafe-Toluca_Central_Mexico_and_Gulf_Coast.html?m=69573',
		section: 'main',
	},
	{
		id: 'app-store',
		icon: '🍎',
		labelKey: 'appStore',
		url: 'https://apps.apple.com/app/tolo-cafe',
		section: 'apps',
	},
	{
		id: 'google-play',
		icon: '🤖',
		labelKey: 'googlePlay',
		url: 'https://play.google.com/store/apps/details?id=cafe.tolo',
		section: 'apps',
	},
]

const TRANSLATIONS = {
	es: {
		title: 'Enlaces - TOLO',
		description: 'Enlaces útiles de TOLO Café',
		heading: 'TOLO Café',
		subtitle: 'Buen café, buena vida',
		menu: 'Ver Menú',
		googleReviews: 'Déjanos una Reseña en Google',
		tripadvisor: 'Visítanos en TripAdvisor',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		appsSection: 'Nuestras Apps',
	},
	en: {
		title: 'Links - TOLO',
		description: 'Useful links for TOLO Café',
		heading: 'TOLO Café',
		subtitle: 'Good coffee, good life',
		menu: 'View Menu',
		googleReviews: 'Leave us a Google Review',
		tripadvisor: 'Visit us on TripAdvisor',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		appsSection: 'Our Apps',
	},
	de: {
		title: 'Links - TOLO',
		description: 'Nützliche Links für TOLO Café',
		heading: 'TOLO Café',
		subtitle: 'Guter Kaffee, gutes Leben',
		menu: 'Menü ansehen',
		googleReviews: 'Bewerten Sie uns auf Google',
		tripadvisor: 'Besuchen Sie uns auf TripAdvisor',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		appsSection: 'Unsere Apps',
	},
	fr: {
		title: 'Liens - TOLO',
		description: 'Liens utiles pour TOLO Café',
		heading: 'TOLO Café',
		subtitle: 'Bon café, bonne vie',
		menu: 'Voir le Menu',
		googleReviews: 'Laissez-nous un avis Google',
		tripadvisor: 'Visitez-nous sur TripAdvisor',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		appsSection: 'Nos Applications',
	},
	ja: {
		title: 'リンク - TOLO',
		description: 'TOLO Caféの便利なリンク',
		heading: 'TOLO Café',
		subtitle: '良いコーヒー、良い人生',
		menu: 'メニューを見る',
		googleReviews: 'Googleレビューを書く',
		tripadvisor: 'TripAdvisorで見る',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		appsSection: 'アプリ',
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
				'@type': 'WebPage',
				name: t.heading,
				description: t.description,
				url: `https://tolo.cafe/${locale}/links`,
				mainEntity: {
					'@type': 'Organization',
					name: 'TOLO Coffee',
					url: 'https://tolo.cafe',
				},
			},
		},
	]
}

export default function Links() {
	const { locale } = useOutletContext<LocaleContext>()
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es

	const mainLinks = LINKS.filter((link) => link.section === 'main')
	const appLinks = LINKS.filter((link) => link.section === 'apps')

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<header className={styles.header}>
					<img src="/assets/tolo.png" alt="TOLO Café" className={styles.logo} />
					<h1 className={styles.heading}>{t.heading}</h1>
					<p className={styles.subtitle}>{t.subtitle}</p>
				</header>

				<div className={styles.linksContainer}>
					{mainLinks.map((link) => (
						<a
							key={link.id}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.linkCard}
						>
							<span className={styles.linkIcon}>{link.icon}</span>
							{t[link.labelKey]}
						</a>
					))}

					<h2 className={styles.sectionTitle}>{t.appsSection}</h2>

					<div className={styles.appLinksGrid}>
						{appLinks.map((link) => (
							<a
								key={link.id}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.linkCard}
							>
								<span className={styles.linkIcon}>{link.icon}</span>
								{t[link.labelKey]}
							</a>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
