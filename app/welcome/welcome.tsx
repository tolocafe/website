import * as styles from './welcome.css'
import type { Locale } from '~/lib/locale'

const TRANSLATIONS = {
  es: {
    heroTitle: 'Buen Café, Así Nomás',
    heroSubtitle:
      'Café de especialidad en Toluca: micro-lotes tostados con precisión, servidos con dedicación',
    aboutTitle: 'Café de Especialidad en Toluca',
    aboutText:
      'En TOLO creemos que un buen café debe ser directo, fresco y sin vueltas. Somos una cafetería de especialidad en Toluca dedicada a preparar bebidas excepcionales con granos mexicanos seleccionados y tostados cada semana en micro-lotes. Trabajamos directamente con productores de café de altura en Chiapas, Oaxaca y Veracruz, garantizando trazabilidad completa y compensación justa.',
    brewingTitle: 'Métodos de Preparación Artesanales',
    brewingText:
      'Ofrecemos diversos métodos de extracción: espresso calibrado con precisión, pour-over V60 para perfiles brillantes, Chemex para tazas delicadas, y AeroPress para extracciones concentradas. Nuestros baristas certificados ajustan variables como temperatura (92-94°C), tiempo de extracción y ratio de preparación para lograr el balance perfecto.',
    quickServiceTitle: 'Rápido Sin Comprometer la Calidad',
    quickServiceText:
      'Diseñamos nuestra barra para un proceso rápido pero sin sacrificar calidad. Cada bebida se muele al momento con molinos de precisión, se calibra la extracción y se sirve en menos de dos minutos. Equipamiento profesional con control PID de temperatura y básculas digitales garantizan consistencia.',
    roastingTitle: 'Tueste Fresco Cada Semana',
    roastingText:
      'Tostamos nuestros granos en lotes pequeños semanalmente con control preciso de temperatura y perfil. Desarrollamos perfiles específicos para cada origen: tuestes claros para notas frutales, medios para equilibrar dulzura y acidez. Cada lote se registra y cata para asegurar calidad consistente.',
    locationTitle: 'Encuéntranos en el Centro de Toluca',
    locationText:
      'Estamos en el corazón del centro histórico de Toluca. Nuestro espacio ofrece un ambiente acogedor donde disfrutar tu café, trabajar con WiFi rápido, o relajarte mientras observas el proceso de preparación. El aroma del café recién tostado te recibe cada día.',
    sustainabilityTitle: 'Sostenibilidad y Comercio Directo',
    sustainabilityText:
      'Construimos relaciones directas con productores mexicanos, pagando precios justos por encima del mercado. Trabajamos con fincas que practican agricultura sostenible y manejo responsable. Toda nuestra cadena es trazable: conocemos el productor, finca, altitud, variedad y procesamiento de cada café que servimos.',
    featuresTitle: 'Por Qué Elegir TOLO',
    feature1Title: 'Tueste en Micro-lotes Semanales',
    feature1Text:
      'Cada semana tostamos lotes de 5-10kg para máxima frescura. Nunca servimos café tostado hace más de dos semanas.',
    feature2Title: 'Baristas Certificados',
    feature2Text:
      'Equipo certificado en café de especialidad. Cada bebida preparada con atención al detalle usando equipamiento profesional calibrado diariamente.',
    feature3Title: 'Comunidad Local',
    feature3Text:
      'Parte activa de la comunidad de Toluca. Organizamos catas, talleres y eventos para conectar amantes del café.',
    menuTitle: 'Nuestro Menú',
    menuText:
      'Espresso, americano, cappuccino, latte, flat white, cortado, pour-over, Chemex, AeroPress. También cold brew y café helado. Disponibles con leche entera, deslactosada, avena o almendra. Pregunta por nuestros cafés de origen único.',
    connectTitle: 'Conecta con TOLO Coffee',
  },
  en: {
    heroTitle: 'Good Coffee, Just That',
    heroSubtitle:
      'Specialty coffee in Toluca: precision-roasted micro-lots, served with dedication',
    aboutTitle: 'Specialty Coffee in Toluca',
    aboutText:
      'At TOLO we believe that good coffee should be direct, fresh and straightforward. We are a specialty coffee shop in Toluca dedicated to preparing exceptional drinks with selected Mexican beans roasted weekly in small micro-lots. We work directly with high-altitude coffee producers in Chiapas, Oaxaca and Veracruz, guaranteeing complete traceability and fair compensation.',
    brewingTitle: 'Artisan Brewing Methods',
    brewingText:
      'We offer various extraction methods: precision-calibrated espresso, V60 pour-over for bright profiles, Chemex for delicate cups, and AeroPress for concentrated extractions. Our certified baristas adjust variables like temperature (92-94°C), extraction time and brew ratio to achieve perfect balance.',
    quickServiceTitle: 'Fast Without Compromising Quality',
    quickServiceText:
      'We designed our bar for a fast process without sacrificing quality. Every drink is ground on the spot with precision grinders, extraction is calibrated and served in under two minutes. Professional equipment with PID temperature control and digital scales guarantee consistency.',
    roastingTitle: 'Fresh Roasting Every Week',
    roastingText:
      'We roast our beans in small batches weekly with precise temperature and profile control. We develop specific profiles for each origin: light roasts for fruity notes, medium to balance sweetness and acidity. Each batch is logged and cupped to ensure consistent quality.',
    locationTitle: 'Find Us in Downtown Toluca',
    locationText:
      "We're in the heart of Toluca's historic downtown. Our space offers a welcoming atmosphere where you can enjoy your coffee, work with fast WiFi, or relax while watching the brewing process. The aroma of freshly roasted coffee welcomes you every day.",
    sustainabilityTitle: 'Sustainability and Direct Trade',
    sustainabilityText:
      'We build direct relationships with Mexican producers, paying fair prices above market. We work with farms that practice sustainable agriculture and responsible management. Our entire chain is traceable: we know the producer, farm, altitude, variety and processing of every coffee we serve.',
    featuresTitle: 'Why Choose TOLO',
    feature1Title: 'Weekly Micro-lot Roasting',
    feature1Text:
      'Every week we roast 5-10kg batches for maximum freshness. We never serve coffee roasted more than two weeks ago.',
    feature2Title: 'Certified Baristas',
    feature2Text:
      'Team certified in specialty coffee. Each drink prepared with attention to detail using professional equipment calibrated daily.',
    feature3Title: 'Local Community',
    feature3Text:
      'Active part of the Toluca community. We organize cuppings, workshops and events to connect coffee lovers.',
    menuTitle: 'Our Menu',
    menuText:
      'Espresso, americano, cappuccino, latte, flat white, cortado, pour-over, Chemex, AeroPress. Also cold brew and iced coffee. Available with whole milk, lactose-free, oat or almond. Ask about our single-origin coffees.',
    connectTitle: 'Connect with TOLO Coffee',
  },
  de: {
    heroTitle: 'Guter Kaffee, Einfach So',
    heroSubtitle:
      'Spezialitätenkaffee in Toluca: präzise geröstete Micro-Lots, mit Hingabe serviert',
    aboutTitle: 'Spezialitätenkaffee in Toluca',
    aboutText:
      'Bei TOLO glauben wir, dass guter Kaffee direkt, frisch und unkompliziert sein sollte. Wir sind ein Spezialitätencafé in Toluca, das sich der Zubereitung außergewöhnlicher Getränke mit ausgewählten mexikanischen Bohnen widmet, die wöchentlich in kleinen Micro-Lots geröstet werden. Wir arbeiten direkt mit Kaffeeproduzenten aus höheren Lagen in Chiapas, Oaxaca und Veracruz zusammen und garantieren vollständige Rückverfolgbarkeit und faire Vergütung.',
    brewingTitle: 'Handwerkliche Zubereitungsmethoden',
    brewingText:
      'Wir bieten verschiedene Extraktionsmethoden: präzise kalibrierter Espresso, V60 Pour-Over für helle Profile, Chemex für delikate Tassen und AeroPress für konzentrierte Extraktionen. Unsere zertifizierten Baristas passen Variablen wie Temperatur (92-94°C), Extraktionszeit und Brühverhältnis an, um die perfekte Balance zu erreichen.',
    quickServiceTitle: 'Schnell Ohne Qualitätseinbußen',
    quickServiceText:
      'Wir haben unsere Bar für einen schnellen Prozess ohne Qualitätseinbußen konzipiert. Jedes Getränk wird vor Ort mit Präzisionsmühlen gemahlen, die Extraktion kalibriert und in weniger als zwei Minuten serviert. Professionelle Ausrüstung mit PID-Temperaturkontrolle und Digitalwaagen garantieren Konsistenz.',
    roastingTitle: 'Frische Röstung Jede Woche',
    roastingText:
      'Wir rösten unsere Bohnen wöchentlich in kleinen Chargen mit präziser Temperatur- und Profilkontrolle. Wir entwickeln spezifische Profile für jede Herkunft: helle Röstungen für fruchtige Noten, mittlere für Balance von Süße und Säure. Jede Charge wird protokolliert und verkostet, um konsistente Qualität zu gewährleisten.',
    locationTitle: 'Besuchen Sie Uns in der Innenstadt von Toluca',
    locationText:
      'Wir befinden uns im Herzen der historischen Altstadt von Toluca. Unser Raum bietet eine einladende Atmosphäre, in der Sie Ihren Kaffee genießen, mit schnellem WLAN arbeiten oder sich entspannen können, während Sie den Zubereitungsprozess beobachten. Der Duft von frisch geröstetem Kaffee empfängt Sie jeden Tag.',
    sustainabilityTitle: 'Nachhaltigkeit und Direkthandel',
    sustainabilityText:
      'Wir bauen direkte Beziehungen mit mexikanischen Produzenten auf und zahlen faire Preise über dem Marktpreis. Wir arbeiten mit Farmen zusammen, die nachhaltige Landwirtschaft und verantwortungsvolles Management praktizieren. Unsere gesamte Kette ist rückverfolgbar: Wir kennen Produzent, Farm, Höhenlage, Sorte und Verarbeitung jedes Kaffees, den wir servieren.',
    featuresTitle: 'Warum TOLO Wählen',
    feature1Title: 'Wöchentliche Micro-Lot Röstung',
    feature1Text:
      'Jede Woche rösten wir 5-10kg Chargen für maximale Frische. Wir servieren nie Kaffee, der vor mehr als zwei Wochen geröstet wurde.',
    feature2Title: 'Zertifizierte Baristas',
    feature2Text:
      'Team zertifiziert in Spezialitätenkaffee. Jedes Getränk mit Liebe zum Detail zubereitet, mit täglich kalibrierter Profiausrüstung.',
    feature3Title: 'Lokale Gemeinschaft',
    feature3Text:
      'Aktiver Teil der Toluca-Gemeinschaft. Wir organisieren Cuppings, Workshops und Events für Kaffeeliebhaber.',
    menuTitle: 'Unser Menü',
    menuText:
      'Espresso, Americano, Cappuccino, Latte, Flat White, Cortado, Pour-Over, Chemex, AeroPress. Auch Cold Brew und Eiskaffee. Verfügbar mit Vollmilch, laktosefrei, Hafer oder Mandel. Fragen Sie nach unseren Single-Origin-Kaffees.',
    connectTitle: 'Verbinden Sie sich mit TOLO Coffee',
  },
  fr: {
    heroTitle: 'Du Bon Café, Simplement',
    heroSubtitle:
      'Café de spécialité à Toluca: micro-lots torréfiés avec précision, servis avec dévouement',
    aboutTitle: 'Café de Spécialité à Toluca',
    aboutText:
      "Chez TOLO, nous croyons que le bon café doit être direct, frais et sans détour. Nous sommes un café de spécialité à Toluca dédié à la préparation de boissons exceptionnelles avec des grains mexicains sélectionnés et torréfiés chaque semaine en petits micro-lots. Nous travaillons directement avec des producteurs de café d'altitude au Chiapas, Oaxaca et Veracruz, garantissant une traçabilité complète et une compensation équitable.",
    brewingTitle: "Méthodes d'Infusion Artisanales",
    brewingText:
      "Nous proposons diverses méthodes d'extraction: espresso calibré avec précision, pour-over V60 pour des profils lumineux, Chemex pour des tasses délicates, et AeroPress pour des extractions concentrées. Nos baristas certifiés ajustent les variables comme la température (92-94°C), le temps d'extraction et le ratio d'infusion pour obtenir l'équilibre parfait.",
    quickServiceTitle: 'Rapide Sans Compromettre la Qualité',
    quickServiceText:
      "Nous avons conçu notre bar pour un processus rapide sans sacrifier la qualité. Chaque boisson est moulue sur place avec des moulins de précision, l'extraction est calibrée et servie en moins de deux minutes. Équipement professionnel avec contrôle de température PID et balances numériques garantissent la cohérence.",
    roastingTitle: 'Torréfaction Fraîche Chaque Semaine',
    roastingText:
      'Nous torréfions nos grains en petits lots chaque semaine avec un contrôle précis de la température et du profil. Nous développons des profils spécifiques pour chaque origine: torréfactions légères pour les notes fruitées, moyennes pour équilibrer douceur et acidité. Chaque lot est enregistré et dégusté pour assurer une qualité constante.',
    locationTitle: 'Retrouvez-Nous au Centre de Toluca',
    locationText:
      "Nous sommes au cœur du centre historique de Toluca. Notre espace offre une atmosphère accueillante où vous pouvez savourer votre café, travailler avec WiFi rapide, ou vous détendre en observant le processus d'infusion. L'arôme du café fraîchement torréfié vous accueille chaque jour.",
    sustainabilityTitle: 'Durabilité et Commerce Direct',
    sustainabilityText:
      "Nous construisons des relations directes avec les producteurs mexicains, payant des prix équitables au-dessus du marché. Nous travaillons avec des fermes qui pratiquent l'agriculture durable et la gestion responsable. Toute notre chaîne est traçable: nous connaissons le producteur, la ferme, l'altitude, la variété et le traitement de chaque café que nous servons.",
    featuresTitle: 'Pourquoi Choisir TOLO',
    feature1Title: 'Torréfaction Micro-lots Hebdomadaire',
    feature1Text:
      'Chaque semaine nous torréfions des lots de 5-10kg pour une fraîcheur maximale. Nous ne servons jamais de café torréfié il y a plus de deux semaines.',
    feature2Title: 'Baristas Certifiés',
    feature2Text:
      'Équipe certifiée en café de spécialité. Chaque boisson préparée avec attention aux détails utilisant un équipement professionnel calibré quotidiennement.',
    feature3Title: 'Communauté Locale',
    feature3Text:
      'Partie active de la communauté de Toluca. Nous organisons des dégustations, ateliers et événements pour connecter les amateurs de café.',
    menuTitle: 'Notre Menu',
    menuText:
      "Espresso, americano, cappuccino, latte, flat white, cortado, pour-over, Chemex, AeroPress. Aussi cold brew et café glacé. Disponibles avec lait entier, sans lactose, avoine ou amande. Demandez nos cafés d'origine unique.",
    connectTitle: 'Connectez-vous avec TOLO Coffee',
  },
  ja: {
    heroTitle: 'おいしいコーヒー、シンプルに',
    heroSubtitle:
      'トルーカのスペシャルティコーヒー：精密に焙煎されたマイクロロット、心を込めて提供',
    aboutTitle: 'トルーカのスペシャルティコーヒー',
    aboutText:
      'TOLOでは、良いコーヒーは直接的で、新鮮で、シンプルであるべきだと信じています。私たちはトルーカにあるスペシャルティコーヒーショップで、毎週小さなマイクロロットで焙煎された厳選メキシコ豆で特別なドリンクを作ることに専念しています。チアパス、オアハカ、ベラクルスの高地産コーヒー生産者と直接協力し、完全なトレーサビリティと公正な報酬を保証しています。',
    brewingTitle: '職人的な抽出方法',
    brewingText:
      '様々な抽出方法を提供：精密に調整されたエスプレッソ、明るいプロファイルのV60プアオーバー、繊細なカップのChemex、濃縮抽出のAeroPress。認定バリスタが温度（92-94°C）、抽出時間、抽出比などの変数を調整し、完璧なバランスを実現します。',
    quickServiceTitle: '品質を犠牲にせず迅速に',
    quickServiceText:
      '品質を犠牲にすることなく迅速なプロセスのためにバーを設計しました。すべてのドリンクは精密グラインダーでその場で挽かれ、抽出が調整され、2分以内に提供されます。PID温度制御とデジタルスケールを備えたプロ仕様の機器が一貫性を保証します。',
    roastingTitle: '毎週新鮮な焙煎',
    roastingText:
      '毎週、精密な温度とプロファイル制御で小ロットの豆を焙煎しています。各産地に特化したプロファイルを開発：フルーティーなノートのライトロースト、甘さと酸味のバランスのミディアムロースト。各ロットは記録され、カッピングされて一貫した品質を確保します。',
    locationTitle: 'トルーカのダウンタウンでお待ちしています',
    locationText:
      'トルーカの歴史的中心部にあります。コーヒーを楽しんだり、高速WiFiで仕事をしたり、抽出プロセスを見ながらリラックスできる居心地の良い雰囲気を提供しています。焙煎したてのコーヒーの香りが毎日お迎えします。',
    sustainabilityTitle: '持続可能性と直接取引',
    sustainabilityText:
      'メキシコの生産者との直接関係を構築し、市場価格を上回る公正な価格を支払います。持続可能な農業と責任ある管理を実践する農園と協力しています。私たちのチェーン全体はトレース可能：提供するすべてのコーヒーの生産者、農園、標高、品種、処理方法を知っています。',
    featuresTitle: 'TOLOを選ぶ理由',
    feature1Title: '毎週のマイクロロット焙煎',
    feature1Text:
      '毎週5-10kgのロットを焙煎し、最大の鮮度を確保します。2週間以上前に焙煎したコーヒーは決して提供しません。',
    feature2Title: '認定バリスタ',
    feature2Text:
      'スペシャルティコーヒー認定チーム。毎日キャリブレーションされたプロ仕様の機器を使用し、細部に注意を払って各ドリンクを準備します。',
    feature3Title: '地元コミュニティ',
    feature3Text:
      'トルーカコミュニティの積極的な一員。コーヒー愛好家をつなぐカッピング、ワークショップ、イベントを開催しています。',
    menuTitle: '私たちのメニュー',
    menuText:
      'エスプレッソ、アメリカーノ、カプチーノ、ラテ、フラットホワイト、コルタード、プアオーバー、Chemex、AeroPress。コールドブリューとアイスコーヒーもあります。全乳、ラクトースフリー、オーツ、アーモンドで利用可能。シングルオリジンコーヒーについてお尋ねください。',
    connectTitle: 'TOLO Coffeeとつながる',
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
