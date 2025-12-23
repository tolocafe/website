import { useOutletContext } from "react-router";
import type { Route } from "./+types/contact";
import type { Locale } from "~/lib/locale";
import * as styles from "./contact.css";

interface LocaleContext {
	locale: Locale;
}

const TRANSLATIONS = {
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
	de: {
		title: "Kontakt - TOLO",
		description: "Kontaktieren Sie das TOLO Café in Toluca",
		heading: "Kontakt",
		subtitle: "Wir freuen uns von Ihnen zu hören",
		comingSoon: "Demnächst",
		message:
			"Unser Kontaktformular wird vorbereitet. In der Zwischenzeit finden Sie uns in unserem Café in Toluca oder kontaktieren Sie uns über unsere Social-Media-Kanäle.",
		addressTitle: "Besuchen Sie Uns",
		addressPlaceholder: "Toluca, Estado de México, Mexiko",
		hoursTitle: "Öffnungszeiten",
		hoursPlaceholder: "Mo-Fr: 8-20 Uhr\nSa-So: 9-18 Uhr",
		emailTitle: "E-Mail",
		emailPlaceholder: "hola@tolo.cafe",
	},
	fr: {
		title: "Contact - TOLO",
		description: "Contactez le café TOLO à Toluca",
		heading: "Contact",
		subtitle: "Nous serions ravis d'avoir de vos nouvelles",
		comingSoon: "Bientôt Disponible",
		message:
			"Notre formulaire de contact est en préparation. En attendant, vous pouvez nous trouver dans notre café à Toluca ou nous contacter via nos réseaux sociaux.",
		addressTitle: "Visitez-Nous",
		addressPlaceholder: "Toluca, Estado de México, Mexique",
		hoursTitle: "Horaires",
		hoursPlaceholder: "Lun-Ven: 8h - 20h\nSam-Dim: 9h - 18h",
		emailTitle: "E-mail",
		emailPlaceholder: "hola@tolo.cafe",
	},
	ja: {
		title: "お問い合わせ - TOLO",
		description: "トルーカのTOLOコーヒーショップへのお問い合わせ",
		heading: "お問い合わせ",
		subtitle: "お気軽にご連絡ください",
		comingSoon: "近日公開",
		message:
			"お問い合わせフォームは準備中です。それまでの間、トルーカの店舗にお越しいただくか、SNSでご連絡ください。",
		addressTitle: "店舗情報",
		addressPlaceholder: "トルーカ、メキシコ州、メキシコ",
		hoursTitle: "営業時間",
		hoursPlaceholder: "月-金: 8時 - 20時\n土-日: 9時 - 18時",
		emailTitle: "メール",
		emailPlaceholder: "hola@tolo.cafe",
	},
} as const;

export function meta({ params }: Route.MetaArgs) {
	const locale = (params.locale as Locale) || "es";
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es;

	return [
		{ title: t.title },
		{ name: "description", content: t.description },
		{
			tagName: "script",
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: t.heading,
				description: t.description,
				url: `https://tolo.cafe/${locale}/contact`,
				mainEntity: {
					"@type": "Organization",
					name: "TOLO Coffee",
					email: "hola@tolo.cafe",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Toluca",
						addressRegion: "Estado de México",
						addressCountry: "MX",
					},
				},
			}),
		},
	];
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
