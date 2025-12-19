import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useMatches,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "~/styles/global.css";
import {
	DEFAULT_LOCALE,
	isValidLocale,
	SUPPORTED_LOCALES,
	type Locale,
} from "~/lib/locale";

const SITE_URL = "https://tolo.cafe";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{ rel: "icon", href: "/favicon.ico", sizes: "any" },
];

export function meta(): Route.MetaDescriptors {
	return [
		// Default site-wide meta (can be overridden by child routes)
		{ name: "theme-color", content: "#1a1a1a" },
		{ name: "format-detection", content: "telephone=no" },
		// Geographic targeting for local SEO
		{ name: "geo.region", content: "MX-MEX" },
		{ name: "geo.placename", content: "Toluca" },
		// Open Graph defaults
		{ property: "og:site_name", content: "Tolo" },
		{ property: "og:type", content: "website" },
	];
}

/**
 * Layout component that sets the HTML lang attribute dynamically
 * based on the current locale from URL params.
 */
export function Layout({ children }: { children: React.ReactNode }) {
	// Extract locale from URL matches
	const matches = useMatches();
	const localeMatch = matches.find(
		(match) => (match.params as { locale?: string }).locale,
	);
	const localeParam = (localeMatch?.params as { locale?: string })?.locale;
	const locale: Locale = isValidLocale(localeParam)
		? localeParam
		: DEFAULT_LOCALE;

	return (
		<html lang={locale}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Add hreflang tags for SEO with full URLs */}
				{SUPPORTED_LOCALES.map((loc) => (
					<link
						key={loc}
						rel="alternate"
						hrefLang={loc}
						href={`${SITE_URL}/${loc}`}
					/>
				))}
				{/* x-default for users without a preferred language */}
				<link
					rel="alternate"
					hrefLang="x-default"
					href={`${SITE_URL}/${DEFAULT_LOCALE}`}
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
