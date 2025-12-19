import { useOutletContext } from "react-router";
import type { Route } from "./+types/blog";
import type { Locale } from "~/lib/locale";
import * as styles from "./blog.css";

interface LocaleContext {
	locale: Locale;
}

const TRANSLATIONS = {
	en: {
		title: "Blog - Tolo",
		description: "Coffee stories, tips, and news from Tolo in Toluca",
		heading: "Blog",
		subtitle: "Stories from the coffee world",
		comingSoon: "Coming Soon",
		message:
			"We're brewing up some great content for you. Our blog will feature coffee tips, brewing guides, origin stories, and news from our coffee shop in Toluca.",
		previewTitle: "What to Expect",
		topics: [
			{
				title: "Brewing Guides",
				description:
					"Step-by-step instructions for the perfect cup at home.",
			},
			{
				title: "Coffee Origins",
				description:
					"Stories about the farms and regions where our beans come from.",
			},
			{
				title: "Shop Updates",
				description:
					"News about new offerings, events, and what's happening at Tolo.",
			},
		],
	},
	es: {
		title: "Blog - Tolo",
		description: "Historias de café, consejos y noticias de Tolo en Toluca",
		heading: "Blog",
		subtitle: "Historias del mundo del café",
		comingSoon: "Próximamente",
		message:
			"Estamos preparando contenido increíble para ti. Nuestro blog incluirá consejos de café, guías de preparación, historias de origen y noticias de nuestra cafetería en Toluca.",
		previewTitle: "Qué Esperar",
		topics: [
			{
				title: "Guías de Preparación",
				description:
					"Instrucciones paso a paso para la taza perfecta en casa.",
			},
			{
				title: "Orígenes del Café",
				description:
					"Historias sobre las fincas y regiones de donde provienen nuestros granos.",
			},
			{
				title: "Novedades de la Tienda",
				description:
					"Noticias sobre nuevas ofertas, eventos y lo que pasa en Tolo.",
			},
		],
	},
} as const;

export function meta({ params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || "es";
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;

	return [{ title: t.title }, { name: "description", content: t.description }];
}

export default function Blog() {
	const { locale } = useOutletContext<LocaleContext>();
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.heading}>{t.heading}</h1>
					<p className={styles.subtitle}>{t.subtitle}</p>
				</header>

				<div className={styles.content}>
					<div className={styles.comingSoonCard}>
						<span className={styles.badge}>{t.comingSoon}</span>
						<p className={styles.message}>{t.message}</p>
					</div>

					<section className={styles.previewSection}>
						<h2 className={styles.previewTitle}>{t.previewTitle}</h2>
						<div className={styles.topicsGrid}>
							{t.topics.map((topic) => (
								<div key={topic.title} className={styles.topicCard}>
									<h3 className={styles.topicTitle}>{topic.title}</h3>
									<p className={styles.topicDescription}>{topic.description}</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
