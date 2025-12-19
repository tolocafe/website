import { Outlet, redirect, data } from "react-router";
import type { Route } from "./+types/locale-layout";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import {
	isValidLocale,
	detectLocaleFromHeader,
	DEFAULT_LOCALE,
	SUPPORTED_LOCALES,
	type Locale,
} from "~/lib/locale";

/**
 * Locale Layout Route
 *
 * This layout handles:
 * 1. Validating the locale parameter
 * 2. Providing locale context to child routes
 * 3. Rendering the Header with locale navigation
 * 4. Rendering the Footer with navigation links
 * 5. Adding hreflang meta tags for SEO
 */

export function loader({ params, request }: Route.LoaderArgs) {
	const { locale } = params;

	// Validate the locale parameter
	if (!isValidLocale(locale)) {
		// Detect preferred locale from Accept-Language header
		const acceptLanguage = request.headers.get("Accept-Language");
		const preferredLocale = detectLocaleFromHeader(acceptLanguage);

		// Redirect to the preferred locale
		const url = new URL(request.url);
		const pathWithoutLocale = url.pathname.replace(/^\/[^/]*/, "");
		throw redirect(`/${preferredLocale}${pathWithoutLocale || ""}`);
	}

	return { locale };
}

export function meta({ data }: Route.MetaArgs) {
	if (!data) return [];

	const { locale } = data;

	// Generate hreflang link tags for SEO
	return SUPPORTED_LOCALES.map((loc) => ({
		tagName: "link",
		rel: "alternate",
		hrefLang: loc,
		href: `/${loc}`,
	}));
}

export default function LocaleLayout({ loaderData }: Route.ComponentProps) {
	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Header />
			<Outlet context={{ locale: loaderData.locale }} />
			<Footer />
		</div>
	);
}

/**
 * Handle for nested routes to access locale
 */
export function useLocale(): Locale {
	// This would be used with useOutletContext in child routes
	return DEFAULT_LOCALE;
}
