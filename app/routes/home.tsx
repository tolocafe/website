import { useOutletContext } from "react-router";
import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import type { Locale } from "~/lib/locale";

interface LocaleContext {
	locale: Locale;
}

const TRANSLATIONS = {
	en: {
		title: "New React Router App",
		description: "Welcome to React Router!",
	},
	es: {
		title: "Nueva Aplicación React Router",
		description: "¡Bienvenido a React Router!",
	},
} as const;

export function meta({ params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || "es";
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;

	return [{ title: t.title }, { name: "description", content: t.description }];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { locale } = useOutletContext<LocaleContext>();

	return <Welcome message={loaderData.message} locale={locale} />;
}
