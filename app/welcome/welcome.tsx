import * as styles from './welcome.css'
import type { Locale } from '~/lib/locale'

const TRANSLATIONS = {
  en: {
    heroTitle: 'Good Coffee, Just That',
    heroSubtitle:
      'Coffee in Toluca, an honest cup: micro-lots roasted with precision, served with dedication',
    aboutTitle: "We're Passionate About Coffee",
    aboutText:
      'At TOLO we believe that good coffee should be direct, fresh and straightforward. We are a coffee shop in Toluca dedicated to preparing drinks with selected beans roasted weekly in small micro-lots. Our commitment is simple: serve coffee that speaks for itself.',
    quickServiceTitle: 'Your Coffee in Minutes',
    quickServiceText:
      'We designed our bar so the process is fast, but without sacrificing quality. Every drink is ground on the spot, calibrated for extraction and served in under two minutes.',
    locationTitle: "We're in the Heart of Toluca",
    locationText:
      'Find us in the center of Toluca, where the aroma of freshly roasted coffee welcomes you every day.',
    featuresTitle: 'More Than a Cup',
    feature1Title: 'Micro-lot Roasting',
    feature1Text:
      'Every week we roast small batches to ensure maximum freshness and flavor in every cup.',
    feature2Title: 'Precision & Care',
    feature2Text:
      'Each drink is prepared with attention to detail, from bean selection to final presentation.',
    feature3Title: 'Local Passion',
    feature3Text:
      'We are part of the Toluca community, committed to sharing exceptional coffee experiences.',
    connectTitle: 'Connect with TOLO',
  },
  es: {
    heroTitle: 'Buen Café, Así Nomás',
    heroSubtitle:
      'Café en Toluca, una taza honesta: micro-lotes tostados con precisión, servidos con dedicación',
    aboutTitle: 'Nos Apasiona el Café',
    aboutText:
      'En TOLO creemos que un buen café debe ser directo, fresco y sin vueltas. Somos una cafetería en Toluca dedicada a preparar bebidas con granos seleccionados y tostados cada semana en micro-lotes pequeños. Nuestro compromiso es simple: servir café que hable por sí mismo.',
    quickServiceTitle: 'Tu Café en Minutos',
    quickServiceText:
      'Diseñamos nuestra barra para que el proceso sea rápido, pero sin sacrificar calidad. Cada bebida se muele al momento, se calibra la extracción y se sirve lista en menos de dos minutos.',
    locationTitle: 'Estamos en el Corazón de Toluca',
    locationText:
      'Encuéntranos en el centro de Toluca, donde el aroma del café recién tostado te recibe cada día.',
    featuresTitle: 'Más Que una Taza',
    feature1Title: 'Tueste en Micro-lotes',
    feature1Text:
      'Cada semana tostamos lotes pequeños para asegurar máxima frescura y sabor en cada taza.',
    feature2Title: 'Precisión y Cuidado',
    feature2Text:
      'Cada bebida se prepara con atención al detalle, desde la selección del grano hasta la presentación final.',
    feature3Title: 'Pasión Local',
    feature3Text:
      'Somos parte de la comunidad de Toluca, comprometidos con compartir experiencias excepcionales de café.',
    connectTitle: 'Conecta con TOLO',
  },
} as const

interface WelcomeProps {
  message: string
  locale: Locale
}

export function Welcome({ locale }: WelcomeProps) {
  const t = TRANSLATIONS[locale] || TRANSLATIONS.es

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroVideo}>
          <iframe
            className={styles.heroVideoIframe}
            src="https://customer-jwnlj2lnbxh5it88.cloudflarestream.com/80c3111543efaccaf6f1d2d3120f4a77/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-jwnlj2lnbxh5it88.cloudflarestream.com%2F80c3111543efaccaf6f1d2d3120f4a77%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            title="TOLO Coffee Hero Video"
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{t.heroSubtitle}</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.aboutTitle}</h2>
          <p className={styles.sectionText}>{t.aboutText}</p>
        </div>
      </section>

      {/* Quick Service Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.quickServiceTitle}</h2>
          <p className={styles.sectionText}>{t.quickServiceText}</p>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.locationTitle}</h2>
          <p className={styles.sectionText}>{t.locationText}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresSectionTitle}>{t.featuresTitle}</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CoffeeIcon />
            </div>
            <h3 className={styles.featureTitle}>{t.feature1Title}</h3>
            <p className={styles.featureText}>{t.feature1Text}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <PrecisionIcon />
            </div>
            <h3 className={styles.featureTitle}>{t.feature2Title}</h3>
            <p className={styles.featureText}>{t.feature2Text}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <HeartIcon />
            </div>
            <h3 className={styles.featureTitle}>{t.feature3Title}</h3>
            <p className={styles.featureText}>{t.feature3Text}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function CoffeeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  )
}

function PrecisionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
