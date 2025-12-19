import { Link, useLocation, useParams } from "react-router";
import {
	SUPPORTED_LOCALES,
	LOCALE_LABELS,
	getPathWithoutLocale,
	isValidLocale,
	DEFAULT_LOCALE,
	type Locale,
} from "~/lib/locale";
import * as styles from "./Header.css";

export function Header() {
	const { locale: localeParam } = useParams<{ locale: string }>();
	const location = useLocation();

	const currentLocale: Locale = isValidLocale(localeParam)
		? localeParam
		: DEFAULT_LOCALE;
	const pathWithoutLocale = getPathWithoutLocale(location.pathname);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link to={`/${currentLocale}`} className={styles.logo}>
					MyApp
				</Link>
			</nav>

			<nav className={styles.localeNav} aria-label="Language selection">
				{SUPPORTED_LOCALES.map((locale, index) => (
					<span key={locale} className={styles.localeItem}>
						{index > 0 && <span className={styles.separator} aria-hidden />}
						<Link
							to={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
							className={
								locale === currentLocale
									? styles.localeLinkActive
									: styles.localeLink
							}
							aria-current={locale === currentLocale ? "page" : undefined}
							hrefLang={locale}
						>
							{LOCALE_LABELS[locale]}
						</Link>
					</span>
				))}
			</nav>
		</header>
	);
}
