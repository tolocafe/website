import { useOutletContext } from "react-router";
import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import type { Locale } from "~/lib/locale";

interface LocaleContext {
	locale: Locale;
}

const SITE_URL = "https://tolo.cafe";

const TRANSLATIONS = {
	en: {
		title: "Tolo - Good coffee, nothing more",
		description:
			"Discover specialty coffee at Tolo in Toluca, Mexico. Carefully sourced beans, expertly crafted drinks, and a welcoming atmosphere.",
		keywords:
			"tolo, coffee, cafe, specialty coffee, toluca, mexico, espresso, brewing",
	},
	es: {
		title: "Tolo - Buen café, así nomás",
		description:
			"Descubre café de especialidad en Tolo, Toluca, México. Granos cuidadosamente seleccionados, bebidas preparadas con maestría y un ambiente acogedor.",
		keywords:
			"tolo, café, cafetería, café de especialidad, toluca, méxico, espresso, preparación",
	},
} as const;

export function meta({ params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || "es";
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;
	const canonicalUrl = `${SITE_URL}/${locale}`;

	return [
		{ title: t.title },
		{ name: "description", content: t.description },
		{ name: "keywords", content: t.keywords },
		{ name: "robots", content: "index, follow" },
		{ name: "author", content: "Tolo" },
		// Canonical URL
		{ tagName: "link", rel: "canonical", href: canonicalUrl },
		// Open Graph
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Tolo" },
		{ property: "og:title", content: t.title },
		{ property: "og:description", content: t.description },
		{ property: "og:url", content: canonicalUrl },
		{ property: "og:locale", content: locale === "es" ? "es_MX" : "en_US" },
		// Twitter Card
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:site", content: "@tolo.cafe" },
		{ name: "twitter:creator", content: "@tolo.cafe" },
		{ name: "twitter:title", content: t.title },
		{ name: "twitter:description", content: t.description },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { locale } = useOutletContext<LocaleContext>();

	return <Welcome message={loaderData.message} locale={locale} />;
}
