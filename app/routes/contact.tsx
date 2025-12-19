import { useOutletContext } from "react-router";
import type { Route } from "./+types/contact";
import type { Locale } from "~/lib/locale";
import * as styles from "./contact.css";

interface LocaleContext {
	locale: Locale;
}

const TRANSLATIONS = {
	en: {
		title: "Contact Us - TOLO",
		description: "Get in touch with TOLO coffee shop in Toluca",
		heading: "Contact Us",
		subtitle: "We'd love to hear from you",
		comingSoon: "Coming Soon",
		message:
			"Our contact form is being prepared. In the meantime, you can find us at our coffee shop in Toluca or reach out through our social media channels.",
		addressTitle: "Visit Us",
		addressPlaceholder: "Toluca, Estado de México, Mexico",
		hoursTitle: "Hours",
		hoursPlaceholder: "Mon-Fri: 8am - 8pm\nSat-Sun: 9am - 6pm",
		emailTitle: "Email",
		emailPlaceholder: "hola@tolo.cafe",
	},
	es: {
		title: "Contacto - TOLO",
		description: "Ponte en contacto con la cafetería TOLO en Toluca",
		heading: "Contacto",
		subtitle: "Nos encantaría saber de ti",
		comingSoon: "Próximamente",
		message:
			"Nuestro formulario de contacto está en preparación. Mientras tanto, puedes encontrarnos en nuestra cafetería en Toluca o comunicarte a través de nuestras redes sociales.",
		addressTitle: "Visítanos",
		addressPlaceholder: "Toluca, Estado de México, México",
		hoursTitle: "Horario",
		hoursPlaceholder: "Lun-Vie: 8am - 8pm\nSáb-Dom: 9am - 6pm",
		emailTitle: "Correo",
		emailPlaceholder: "hola@tolo.cafe",
	},
} as const;

export function meta({ params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || "es";
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;

	return [{ title: t.title }, { name: "description", content: t.description }];
}

export default function Contact() {
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

					<div className={styles.infoGrid}>
						<div className={styles.infoCard}>
							<h3 className={styles.infoTitle}>{t.addressTitle}</h3>
							<p className={styles.infoText}>{t.addressPlaceholder}</p>
						</div>
						<div className={styles.infoCard}>
							<h3 className={styles.infoTitle}>{t.hoursTitle}</h3>
							<p className={styles.infoText}>{t.hoursPlaceholder}</p>
						</div>
						<div className={styles.infoCard}>
							<h3 className={styles.infoTitle}>{t.emailTitle}</h3>
							<p className={styles.infoText}>{t.emailPlaceholder}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
