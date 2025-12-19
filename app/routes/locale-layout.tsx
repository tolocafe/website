import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/locale-layout";
import {
	isValidLocale,
	detectLocaleFromHeader,
	SUPPORTED_LOCALES,
} from "~/lib/locale";

/**
 * Locale Layout Route
 *
 * Validates the locale parameter and provides locale context to child routes.
 */
export function loader({ params, request }: Route.LoaderArgs) {
	const { locale } = params;

	if (!isValidLocale(locale)) {
		const acceptLanguage = request.headers.get("Accept-Language");
		const preferredLocale = detectLocaleFromHeader(acceptLanguage);
		const url = new URL(request.url);
		const pathWithoutLocale = url.pathname.replace(/^\/[^/]*/, "");
		throw redirect(`/${preferredLocale}${pathWithoutLocale || ""}`);
	}

	return { locale };
}

export function meta({ data }: Route.MetaArgs) {
	if (!data) return [];

	return SUPPORTED_LOCALES.map((loc) => ({
		tagName: "link",
		rel: "alternate",
		hrefLang: loc,
		href: `/${loc}`,
	}));
}

export default function LocaleLayout({ loaderData }: Route.ComponentProps) {
	return <Outlet context={{ locale: loaderData.locale }} />;
}
