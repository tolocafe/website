import * as styles from './welcome.css'
import type { Locale } from '~/lib/locale'

const TRANSLATIONS = {
  es: {
    heroTitle: 'Buen Café, Así Nomás',
    heroSubtitle:
      'Café de especialidad en Toluca: micro-lotes tostados con precisión, granos mexicanos de altura, servidos con dedicación por baristas expertos',
    aboutTitle: 'Café de Especialidad en el Corazón de Toluca',
    aboutText:
      'En TOLO creemos que un buen café debe ser directo, fresco y sin vueltas. Somos una cafetería de especialidad en Toluca dedicada a preparar bebidas excepcionales con granos mexicanos seleccionados y tostados cada semana en micro-lotes pequeños. Trabajamos directamente con productores de café de altura en Chiapas, Oaxaca y Veracruz, garantizando trazabilidad completa y compensación justa. Nuestro compromiso es simple: servir café de especialidad que hable por sí mismo, con perfiles de taza únicos que resaltan las características de cada origen.',
    brewingTitle: 'Métodos de Preparación Artesanales',
    brewingText:
      'Ofrecemos diversos métodos de extracción para resaltar las mejores características de cada café: espresso calibrado con precisión para bebidas intensas y cremosas, pour-over V60 para perfiles brillantes y limpios, Chemex para tazas delicadas y aromáticas, y AeroPress para extracciones concentradas. Nuestros baristas certificados dominan cada técnica, ajustando variables como temperatura del agua (92-94°C), tiempo de extracción y ratio de preparación para lograr el equilibrio perfecto entre acidez, dulzura y cuerpo.',
    quickServiceTitle: 'Experiencia Rápida sin Comprometer la Calidad',
    quickServiceText:
      'Diseñamos nuestra barra de café para que el proceso sea rápido y eficiente, pero sin sacrificar un ápice de calidad. Cada bebida se muele al momento con molinos de muelas de precisión, se calibra la extracción según el perfil del grano y se sirve lista en menos de dos minutos. Utilizamos equipamiento profesional de última generación: máquinas de espresso con control PID de temperatura, molinos con ajuste micrométrico y básculas digitales para garantizar consistencia en cada preparación.',
    roastingTitle: 'Tueste Fresco y Controlado',
    roastingText:
      'Tostamos nuestros granos en lotes pequeños cada semana en nuestra tostadora de tambor, con control preciso de temperatura y perfil de tueste. Esto nos permite desarrollar perfiles de sabor específicos para cada origen: tuestes claros para resaltar notas frutales y florales en cafés africanos, tuestes medios para equilibrar dulzura y acidez en cafés centroamericanos, y desarrollo cuidadoso para maximizar la complejidad en cafés mexicanos de altura. Cada lote se registra y se cata para asegurar estándares de calidad consistentes.',
    locationTitle: 'Encuéntranos en el Centro de Toluca',
    locationText:
      'Estamos ubicados en el corazón del centro histórico de Toluca, Estado de México. Nuestro espacio está diseñado para ofrecer un ambiente acogedor donde puedas disfrutar de tu café, trabajar con WiFi de alta velocidad, o simplemente relajarte mientras observas el proceso de preparación detrás de nuestra barra. El aroma del café recién tostado te recibe cada día. Abrimos todos los días para servir a la comunidad cafetera de Toluca.',
    sustainabilityTitle: 'Sostenibilidad y Comercio Directo',
    sustainabilityText:
      'Creemos en construir relaciones directas y sostenibles con productores de café mexicano. Pagamos precios justos por encima del mercado, garantizando que los caficultores reciban compensación adecuada por su trabajo. Trabajamos con fincas que practican agricultura sostenible, conservación de suelos y manejo responsable del agua. Toda nuestra cadena de suministro es trazable: conocemos el nombre del productor, la finca, la altitud de cultivo, la variedad botánica y el método de procesamiento de cada café que servimos.',
    featuresTitle: 'Por Qué Elegir TOLO Coffee',
    feature1Title: 'Tueste en Micro-lotes Semanales',
    feature1Text:
      'Cada semana tostamos lotes pequeños de 5-10kg para asegurar máxima frescura y sabor en cada taza. Nunca servimos café tostado hace más de dos semanas.',
    feature2Title: 'Baristas Certificados y Equipamiento Profesional',
    feature2Text:
      'Nuestro equipo está certificado en preparación de café de especialidad. Cada bebida se prepara con atención al detalle, desde la selección del grano hasta la presentación final, usando equipamiento profesional calibrado diariamente.',
    feature3Title: 'Comunidad y Pasión Local',
    feature3Text:
      'Somos parte activa de la comunidad de Toluca, comprometidos con educar y compartir la cultura del café de especialidad. Organizamos catas, talleres de preparación y eventos para conectar a los amantes del buen café.',
    menuTitle: 'Nuestro Menú de Café',
    menuText:
      'Ofrecemos espresso, americano, cappuccino, latte, flat white, cortado, pour-over, Chemex, AeroPress, y métodos de filtro. También contamos con bebidas frías como cold brew y café helado. Todos nuestros cafés están disponibles con leche entera, deslactosada o bebidas vegetales (avena, almendra). Pregunta por nuestros cafés de origen único disponibles cada semana.',
    connectTitle: 'Conecta con TOLO Coffee',
  },
  en: {
    heroTitle: 'Good Coffee, Just That',
    heroSubtitle:
      'Specialty coffee in Toluca: precision-roasted micro-lots, high-altitude Mexican beans, served with dedication by expert baristas',
    aboutTitle: 'Specialty Coffee in the Heart of Toluca',
    aboutText:
      'At TOLO we believe that good coffee should be direct, fresh and straightforward. We are a specialty coffee shop in Toluca dedicated to preparing exceptional drinks with selected Mexican beans roasted weekly in small micro-lots. We work directly with high-altitude coffee producers in Chiapas, Oaxaca and Veracruz, guaranteeing complete traceability and fair compensation. Our commitment is simple: serve specialty coffee that speaks for itself, with unique cup profiles that highlight the characteristics of each origin.',
    brewingTitle: 'Artisan Brewing Methods',
    brewingText:
      'We offer various extraction methods to bring out the best characteristics of each coffee: precision-calibrated espresso for intense and creamy drinks, V60 pour-over for bright and clean profiles, Chemex for delicate and aromatic cups, and AeroPress for concentrated extractions. Our certified baristas master each technique, adjusting variables like water temperature (92-94°C), extraction time and brew ratio to achieve the perfect balance between acidity, sweetness and body.',
    quickServiceTitle: 'Fast Experience Without Compromising Quality',
    quickServiceText:
      'We designed our coffee bar so the process is fast and efficient, but without sacrificing an ounce of quality. Every drink is ground on the spot with precision burr grinders, extraction is calibrated according to the bean profile and served ready in under two minutes. We use state-of-the-art professional equipment: espresso machines with PID temperature control, grinders with micrometric adjustment and digital scales to guarantee consistency in every preparation.',
    roastingTitle: 'Fresh and Controlled Roasting',
    roastingText:
      'We roast our beans in small batches every week in our drum roaster, with precise control of temperature and roast profile. This allows us to develop specific flavor profiles for each origin: light roasts to highlight fruity and floral notes in African coffees, medium roasts to balance sweetness and acidity in Central American coffees, and careful development to maximize complexity in high-altitude Mexican coffees. Each batch is logged and cupped to ensure consistent quality standards.',
    locationTitle: 'Find Us in Downtown Toluca',
    locationText:
      "We're located in the heart of Toluca's historic downtown, Estado de México. Our space is designed to offer a welcoming atmosphere where you can enjoy your coffee, work with high-speed WiFi, or simply relax while watching the brewing process behind our bar. The aroma of freshly roasted coffee welcomes you every day. We're open daily to serve Toluca's coffee community.",
    sustainabilityTitle: 'Sustainability and Direct Trade',
    sustainabilityText:
      'We believe in building direct and sustainable relationships with Mexican coffee producers. We pay fair prices above the market, ensuring that coffee farmers receive adequate compensation for their work. We work with farms that practice sustainable agriculture, soil conservation and responsible water management. Our entire supply chain is traceable: we know the name of the producer, the farm, the growing altitude, the botanical variety and the processing method of every coffee we serve.',
    featuresTitle: 'Why Choose TOLO Coffee',
    feature1Title: 'Weekly Micro-lot Roasting',
    feature1Text:
      'Every week we roast small batches of 5-10kg to ensure maximum freshness and flavor in every cup. We never serve coffee roasted more than two weeks ago.',
    feature2Title: 'Certified Baristas and Professional Equipment',
    feature2Text:
      'Our team is certified in specialty coffee preparation. Each drink is prepared with attention to detail, from bean selection to final presentation, using professional equipment calibrated daily.',
    feature3Title: 'Community and Local Passion',
    feature3Text:
      'We are an active part of the Toluca community, committed to educating and sharing specialty coffee culture. We organize cuppings, brewing workshops and events to connect coffee lovers.',
    menuTitle: 'Our Coffee Menu',
    menuText:
      'We offer espresso, americano, cappuccino, latte, flat white, cortado, pour-over, Chemex, AeroPress, and filter methods. We also have cold drinks like cold brew and iced coffee. All our coffees are available with whole milk, lactose-free or plant-based drinks (oat, almond). Ask about our single-origin coffees available each week.',
    connectTitle: 'Connect with TOLO Coffee',
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
      "Nous avons conçu notre bar pour que le processus soit rapide, sans sacrifier la qualité. Chaque boisson est moulue sur place, calibrée pour l'extraction et servie en moins de deux minutes.",
    locationTitle: 'Nous Sommes au Cœur de Toluca',
    locationText:
      "Retrouvez-nous au centre de Toluca, où l'arôme du café fraîchement torréfié vous accueille chaque jour.",
    featuresTitle: "Plus Qu'une Tasse",
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

      {/* Brewing Methods Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.brewingTitle}</h2>
          <p className={styles.sectionText}>{t.brewingText}</p>
        </div>
      </section>

      {/* Quick Service Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.quickServiceTitle}</h2>
          <p className={styles.sectionText}>{t.quickServiceText}</p>
        </div>
      </section>

      {/* Roasting Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.roastingTitle}</h2>
          <p className={styles.sectionText}>{t.roastingText}</p>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.locationTitle}</h2>
          <p className={styles.sectionText}>{t.locationText}</p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.sustainabilityTitle}</h2>
          <p className={styles.sectionText}>{t.sustainabilityText}</p>
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

      {/* Menu Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t.menuTitle}</h2>
          <p className={styles.sectionText}>{t.menuText}</p>
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
