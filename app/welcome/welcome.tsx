import * as styles from './welcome.css'
import type { Locale } from '~/lib/locale'

const TRANSLATIONS = {
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
  de: {
    heroTitle: 'Guter Kaffee, Einfach So',
    heroSubtitle:
      'Kaffee in Toluca, eine ehrliche Tasse: Micro-Lots präzise geröstet, mit Hingabe serviert',
    aboutTitle: 'Wir Lieben Kaffee',
    aboutText:
      'Bei TOLO glauben wir, dass guter Kaffee direkt, frisch und unkompliziert sein sollte. Wir sind ein Café in Toluca, das sich der Zubereitung von Getränken mit ausgewählten, wöchentlich in kleinen Micro-Lots gerösteten Bohnen widmet. Unser Versprechen ist einfach: Kaffee servieren, der für sich selbst spricht.',
    quickServiceTitle: 'Ihr Kaffee in Minuten',
    quickServiceText:
      'Wir haben unsere Bar so gestaltet, dass der Prozess schnell ist, ohne Qualität zu opfern. Jedes Getränk wird frisch gemahlen, für die Extraktion kalibriert und in unter zwei Minuten serviert.',
    locationTitle: 'Wir Sind im Herzen von Toluca',
    locationText:
      'Finden Sie uns im Zentrum von Toluca, wo der Duft von frisch geröstetem Kaffee Sie jeden Tag begrüßt.',
    featuresTitle: 'Mehr Als Eine Tasse',
    feature1Title: 'Micro-Lot Röstung',
    feature1Text:
      'Jede Woche rösten wir kleine Chargen, um maximale Frische und Geschmack in jeder Tasse zu gewährleisten.',
    feature2Title: 'Präzision & Sorgfalt',
    feature2Text:
      'Jedes Getränk wird mit Liebe zum Detail zubereitet, von der Bohnenauswahl bis zur finalen Präsentation.',
    feature3Title: 'Lokale Leidenschaft',
    feature3Text:
      'Wir sind Teil der Toluca-Gemeinschaft und verpflichtet, außergewöhnliche Kaffeeerlebnisse zu teilen.',
    connectTitle: 'Verbinden Sie sich mit TOLO',
  },
  fr: {
    heroTitle: 'Du Bon Café, Simplement',
    heroSubtitle:
      'Café à Toluca, une tasse honnête: micro-lots torréfiés avec précision, servis avec dévouement',
    aboutTitle: 'Nous Sommes Passionnés de Café',
    aboutText:
      'Chez TOLO, nous croyons que le bon café doit être direct, frais et sans détour. Nous sommes un café à Toluca dédié à la préparation de boissons avec des grains sélectionnés et torréfiés chaque semaine en petits micro-lots. Notre engagement est simple: servir un café qui parle de lui-même.',
    quickServiceTitle: 'Votre Café en Minutes',
    quickServiceText:
      'Nous avons conçu notre bar pour que le processus soit rapide, sans sacrifier la qualité. Chaque boisson est moulue sur place, calibrée pour l\'extraction et servie en moins de deux minutes.',
    locationTitle: 'Nous Sommes au Cœur de Toluca',
    locationText:
      'Retrouvez-nous au centre de Toluca, où l\'arôme du café fraîchement torréfié vous accueille chaque jour.',
    featuresTitle: 'Plus Qu\'une Tasse',
    feature1Title: 'Torréfaction Micro-lots',
    feature1Text:
      'Chaque semaine, nous torréfions de petits lots pour assurer une fraîcheur et une saveur maximales dans chaque tasse.',
    feature2Title: 'Précision & Soin',
    feature2Text:
      'Chaque boisson est préparée avec attention aux détails, de la sélection du grain à la présentation finale.',
    feature3Title: 'Passion Locale',
    feature3Text:
      'Nous faisons partie de la communauté de Toluca, engagés à partager des expériences café exceptionnelles.',
    connectTitle: 'Connectez-vous avec TOLO',
  },
  ja: {
    heroTitle: 'おいしいコーヒー、シンプルに',
    heroSubtitle:
      'トルーカのコーヒー、正直な一杯：精密に焙煎されたマイクロロット、心を込めて提供',
    aboutTitle: 'コーヒーへの情熱',
    aboutText:
      'TOLOでは、良いコーヒーは直接的で、新鮮で、シンプルであるべきだと信じています。私たちはトルーカにあるカフェで、毎週小さなマイクロロットで焙煎された厳選豆でドリンクを作ることに専念しています。私たちの約束はシンプル：自ら語るコーヒーを提供すること。',
    quickServiceTitle: '数分であなたのコーヒーを',
    quickServiceText:
      '私たちは品質を犠牲にすることなく、プロセスが迅速になるようバーを設計しました。すべてのドリンクはその場で挽かれ、抽出のために調整され、2分以内に提供されます。',
    locationTitle: 'トルーカの中心にいます',
    locationText:
      '毎日焙煎したてのコーヒーの香りがお迎えするトルーカの中心でお待ちしています。',
    featuresTitle: '一杯以上のもの',
    feature1Title: 'マイクロロット焙煎',
    feature1Text:
      '毎週小さなバッチを焙煎し、すべてのカップで最大限の鮮度と風味を確保します。',
    feature2Title: '精密さと心遣い',
    feature2Text:
      '豆の選択から最終的なプレゼンテーションまで、細部に注意を払って各ドリンクを準備します。',
    feature3Title: '地元への情熱',
    feature3Text:
      '私たちはトルーカコミュニティの一員として、特別なコーヒー体験を共有することに専念しています。',
    connectTitle: 'TOLOとつながる',
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
