import { Link, useParams } from "react-router";
import { isValidLocale, DEFAULT_LOCALE, type Locale } from "~/lib/locale";
import * as styles from "./Footer.css";

const currentYear = new Date().getFullYear();

const TRANSLATIONS = {
	en: {
		brand: "TOLO",
		tagline: "Good coffee, nothing more.",
		navigation: "Navigation",
		home: "Home",
		blog: "Blog",
		contact: "Contact Us",
		connect: "Connect",
		copyright: `© ${currentYear} TOLO. All rights reserved.`,
	},
	es: {
		brand: "TOLO",
		tagline: "Buen café, así nomás.",
		navigation: "Navegación",
		home: "Inicio",
		blog: "Blog",
		contact: "Contacto",
		connect: "Conectar",
		copyright: `© ${currentYear} TOLO. Todos los derechos reservados.`,
	},
};

export function Footer() {
	const { locale: localeParam } = useParams<{ locale: string }>();
	const locale: Locale = isValidLocale(localeParam)
		? localeParam
		: DEFAULT_LOCALE;
	const t = TRANSLATIONS[locale];

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
					<Link to={`/${locale}/blog`} className={styles.link}>
						{t.blog}
					</Link>
					<Link to={`/${locale}/contact`} className={styles.link}>
						{t.contact}
					</Link>
				</div>

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
	);
}
