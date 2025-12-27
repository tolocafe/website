import * as styles from './welcome.css'
import type { Locale } from '~/lib/locale'
import { Link } from 'react-router'
import { vars } from '~/styles/tokens.css'

const APP_STORE_URL = 'https://apps.apple.com/app/tolo-buen-café/id6749597635' as const
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=cafe.tolo.app' as const

const ADDRESS = 'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx.' as const
const MAPS_QUERY = encodeURIComponent(ADDRESS)
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}` as const
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed` as const

const TRANSLATIONS = {
	es: {
		heroTitle: 'Buen café. Así nomás.',
		heroSubtitle:
			'Café de especialidad en Toluca, tostado cada semana y hecho con cariño. Pásate por un espresso, quédate a trabajar un rato, o simplemente ven a platicar.',
		aboutTitle: 'Hola, somos TOLO',
		aboutText:
			'En TOLO hacemos buen café — eso es todo. Tostamos cada semana y preparamos espresso, pour overs, matcha, cold brew, chai, cacao, té y pan dulce. ¿Quieres llevarte café a casa? Tenemos bolsas de grano en tienda. Para nuestros cafés de México trabajamos directo con fincas que conocemos, y rotamos orígenes como Colombia, Etiopía y Panamá.',
		brewingTitle: 'Tu café, a tu gusto',
		brewingText:
			'¿Algo intenso o algo más suave? Cuéntanos qué te late y te ayudamos a elegir. Sin complicaciones.',
		quickServiceTitle: '¿Con prisa?',
		quickServiceText: 'Te atendemos rápido. O pide por adelantado en la app y solo pasa a recoger.',
		roastingTitle: 'Siempre fresquito',
		roastingText:
			'Tostamos cada semana, así que siempre hay algo recién salido. Pregunta qué hay nuevo o llévate una bolsa.',
		locationTitle: 'Pásate a vernos',
		locationText:
			'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx. Ven a platicar, a trabajar, o nomás a tomar algo rico. Tenemos Wi‑Fi rápido, espacio para sentarte, mascotas bienvenidas y estacionamiento.',
		sustainabilityTitle: 'Directo de la finca',
		sustainabilityText:
			'Nuestros cafés de México vienen directo de fincas que conocemos. También rotamos orígenes de Colombia, Etiopía, Panamá y más.',
		featuresTitle: 'Un poco más sobre nosotros',
		feature1Title: 'Tostado cada semana',
		feature1Text: 'Café fresquito siempre. También vendemos bolsas de grano en tienda.',
		feature2Title: 'Gente que sabe de café',
		feature2Text:
			'Nuestro equipo está certificado por la SCA y siempre listo para ayudarte a encontrar tu café.',
		feature3Title: 'Una comunidad chida',
		feature3Text:
			'4.9★ con +100 reseñas (¡gracias!). Finalistas en competencias locales. Un espacio para convivir o trabajar.',
		menuTitle: '¿Qué hay?',
		menuText:
			'Espresso, pour overs, matcha, cold brew, chai, pan dulce, cacao y té. Café en grano también.',
		connectTitle: 'Conecta con TOLO',
	},
	en: {
		heroTitle: 'Good coffee. Simple as that.',
		heroSubtitle:
			'Specialty coffee in Toluca — roasted weekly and made with care. Swing by for an espresso, stay to get some work done, or just hang out.',
		aboutTitle: 'Hey, we\u2019re TOLO',
		aboutText:
			'At TOLO we make good coffee — that\u2019s it. We roast weekly and serve espresso, pour overs, matcha, cold brew, chai, cacao, tea, and pastries. Want beans to take home? We\u2019ve got bags in-store. Our Mexico coffees are direct trade with farms we know, and we rotate origins like Colombia, Ethiopia, and Panama.',
		brewingTitle: 'Your coffee, your way',
		brewingText:
			'Something bold or something lighter? Just tell us what you\u2019re into and we\u2019ll help you find it. No fuss.',
		quickServiceTitle: 'In a hurry?',
		quickServiceText: 'We\u2019ll get you moving. Or order ahead in the app and just pick up.',
		roastingTitle: 'Always fresh',
		roastingText:
			'We roast weekly, so there\u2019s always something new. Ask what\u2019s fresh or grab a bag to go.',
		locationTitle: 'Come say hi',
		locationText:
			'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx. Stop by to hang, work, or just grab something good. We\u2019ve got fast Wi‑Fi, comfy seating, pets welcome, and parking.',
		sustainabilityTitle: 'Straight from the farm',
		sustainabilityText:
			'Our Mexico coffees come direct from farms we know. We also rotate origins from Colombia, Ethiopia, Panama, and more.',
		featuresTitle: 'A bit more about us',
		feature1Title: 'Roasted every week',
		feature1Text: 'Fresh coffee, always. We also sell bags of whole beans in-store.',
		feature2Title: 'Coffee people',
		feature2Text: 'Our team is SCA-certified and always happy to help you find your cup.',
		feature3Title: 'A community thing',
		feature3Text:
			'4.9★ with 100+ reviews (thank you!). Local competition finalists. A space to hang or get stuff done.',
		menuTitle: 'What\u2019s here',
		menuText:
			'Espresso, pour overs, matcha, cold brew, chai, pastries, cacao, and tea. Whole beans too.',
		connectTitle: 'Connect with TOLO',
	},
	de: {
		heroTitle: 'Guter Kaffee. Ganz einfach.',
		heroSubtitle:
			'Spezialitätenkaffee in Toluca — jede Woche frisch geröstet und mit Liebe zubereitet. Komm auf einen Espresso vorbei, bleib zum Arbeiten, oder mach\u2019s dir einfach gemütlich.',
		aboutTitle: 'Hey, wir sind TOLO',
		aboutText:
			'Bei TOLO machen wir guten Kaffee — mehr nicht. Wir rösten jede Woche und servieren Espresso, Pour Overs, Matcha, Cold Brew, Chai, Kakao, Tee und Gebäck. Bohnen für zu Hause? Gibt\u2019s bei uns im Laden. Unsere Kaffees aus Mexiko sind Direkthandel mit Farmen, die wir kennen, und wir wechseln zwischen Kolumbien, Äthiopien und Panama.',
		brewingTitle: 'Dein Kaffee, wie du ihn magst',
		brewingText:
			'Kräftig oder eher mild? Sag uns, was dir schmeckt, und wir finden was Passendes. Ganz entspannt.',
		quickServiceTitle: 'Wenig Zeit?',
		quickServiceText: 'Wir sind fix. Oder bestell per App vor und hol einfach ab.',
		roastingTitle: 'Immer frisch',
		roastingText:
			'Wir rösten jede Woche, also gibt\u2019s immer was Neues. Frag nach oder nimm eine Packung mit.',
		locationTitle: 'Komm vorbei',
		locationText:
			'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx. Zum Quatschen, Arbeiten, oder einfach was Leckeres trinken. Schnelles WLAN, gemütliche Plätze, Hunde willkommen, Parkplätze da.',
		sustainabilityTitle: 'Direkt von der Farm',
		sustainabilityText:
			'Unsere Kaffees aus Mexiko kommen direkt von Farmen, die wir kennen. Dazu wechseln wir zwischen Kolumbien, Äthiopien, Panama und mehr.',
		featuresTitle: 'Noch ein bisschen mehr über uns',
		feature1Title: 'Jede Woche geröstet',
		feature1Text: 'Immer frischer Kaffee. Ganze Bohnen gibt\u2019s auch im Laden.',
		feature2Title: 'Kaffee-Menschen',
		feature2Text: 'Unser Team ist SCA-zertifiziert und hilft dir gern, deinen Kaffee zu finden.',
		feature3Title: 'Community-Sache',
		feature3Text:
			'4,9★ mit 100+ Bewertungen (danke!). Finalisten bei lokalen Wettbewerben. Ein Ort zum Abhängen oder Arbeiten.',
		menuTitle: 'Was gibt\u2019s',
		menuText: 'Espresso, Pour Overs, Matcha, Cold Brew, Chai, Gebäck, Kakao und Tee. Bohnen auch.',
		connectTitle: 'Verbinde dich mit TOLO',
	},
	fr: {
		heroTitle: 'Du bon café. C\u2019est tout.',
		heroSubtitle:
			'Café de spécialité à Toluca — torréfié chaque semaine et préparé avec soin. Passe pour un espresso, reste bosser un peu, ou viens juste traîner.',
		aboutTitle: 'Salut, on est TOLO',
		aboutText:
			'Chez TOLO, on fait du bon café — point. On torréfie chaque semaine et on sert espresso, pour overs, matcha, cold brew, chai, cacao, thé et pâtisseries. Tu veux du café pour chez toi ? On a des sachets en boutique. Nos cafés du Mexique viennent en direct de fermes qu\u2019on connaît, et on fait tourner des origines comme la Colombie, l\u2019Éthiopie et le Panama.',
		brewingTitle: 'Ton café, comme tu l\u2019aimes',
		brewingText:
			'Plutôt corsé ou plus léger ? Dis-nous ce que tu aimes et on trouve ensemble. Tranquille.',
		quickServiceTitle: 'Pressé·e ?',
		quickServiceText:
			'On te sert vite. Ou commande à l\u2019avance via l\u2019app et passe récupérer.',
		roastingTitle: 'Toujours frais',
		roastingText:
			'On torréfie chaque semaine, donc y\u2019a toujours du nouveau. Demande ce qu\u2019il y a ou repars avec un sachet.',
		locationTitle: 'Passe nous voir',
		locationText:
			'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx. Pour discuter, bosser, ou juste boire un truc sympa. Wi‑Fi rapide, places assises, animaux bienvenus, parking dispo.',
		sustainabilityTitle: 'Direct de la ferme',
		sustainabilityText:
			'Nos cafés du Mexique viennent en direct de fermes qu\u2019on connaît. On fait aussi tourner des origines de Colombie, d\u2019Éthiopie, du Panama et plus.',
		featuresTitle: 'Un peu plus sur nous',
		feature1Title: 'Torréfié chaque semaine',
		feature1Text: 'Café frais, toujours. On vend aussi des sachets de grains en boutique.',
		feature2Title: 'Des gens du café',
		feature2Text:
			'Notre équipe est certifiée SCA et toujours là pour t\u2019aider à trouver ton café.',
		feature3Title: 'Un truc de communauté',
		feature3Text:
			'4,9★ avec 100+ avis (merci !). Finalistes de compétitions locales. Un endroit pour traîner ou bosser.',
		menuTitle: 'Qu\u2019est-ce qu\u2019il y a',
		menuText:
			'Espresso, pour overs, matcha, cold brew, chai, pâtisseries, cacao et thé. Grains aussi.',
		connectTitle: 'Connecte-toi avec TOLO',
	},
	ja: {
		heroTitle: 'おいしいコーヒー、それだけ。',
		heroSubtitle:
			'トルーカのスペシャルティコーヒー。毎週焙煎、丁寧にお作りします。エスプレッソをさっと、作業しながらゆっくり、ふらっと立ち寄るだけでも。',
		aboutTitle: 'こんにちは、TOLOです',
		aboutText:
			'TOLOはおいしいコーヒーをつくるお店です。それだけ。毎週焙煎し、エスプレッソ、プアオーバー、抹茶、コールドブリュー、チャイ、カカオ、紅茶、焼き菓子をご用意。豆を持ち帰りたい方には店頭で販売しています。メキシコのコーヒーは知っている農園からダイレクトトレードで。コロンビア、エチオピア、パナマなども入れ替わりで。',
		brewingTitle: 'あなた好みの一杯',
		brewingText: '濃いめ？すっきりめ？好みを教えてください。ぴったりの一杯を一緒に探しましょう。',
		quickServiceTitle: '急いでる？',
		quickServiceText: 'スムーズにお出しします。アプリで事前注文して受け取りも。',
		roastingTitle: 'いつも新鮮',
		roastingText:
			'毎週焙煎しているので、いつも新しいものがあります。何が新しいか聞いてみて、または豆をお持ち帰りで。',
		locationTitle: '遊びに来てね',
		locationText:
			'Blvr. José María Pino Suárez 800, Cuauhtémoc, 50130 Toluca de Lerdo, Méx. おしゃべり、作業、おいしいものを飲みに。高速Wi‑Fi、座席あり、ペットOK、駐車場あり。',
		sustainabilityTitle: '農園から直接',
		sustainabilityText:
			'メキシコのコーヒーは知っている農園からダイレクトトレード。コロンビア、エチオピア、パナマなども入れ替わりで。',
		featuresTitle: 'もうちょっとだけ',
		feature1Title: '毎週焙煎',
		feature1Text: 'いつも新鮮なコーヒー。店頭で豆も販売しています。',
		feature2Title: 'コーヒー好きなスタッフ',
		feature2Text: 'SCA認定チームが、あなたの一杯探しをお手伝い。',
		feature3Title: 'みんなの場所',
		feature3Text:
			'4.9★、100件以上のレビュー（ありがとう！）。地元大会のファイナリスト。集まる場所、作業する場所。',
		menuTitle: '何がある？',
		menuText:
			'エスプレッソ、プアオーバー、抹茶、コールドブリュー、チャイ、焼き菓子、カカオ、紅茶。豆も。',
		connectTitle: 'TOLOとつながる',
	},
} as const

const UI_TRANSLATIONS = {
	es: {
		heroCtas: {
			app: 'Descargar app',
			directions: 'Cómo llegar',
			beans: 'Café en grano',
		},
		trustItems: [
			{ value: '4.9★', label: '100+ reseñas' },
			{ value: 'Semanal', label: 'Tostado cada semana' },
			{ value: 'App', label: 'Pide por adelantado' },
		],
		quickCards: {
			beans: {
				title: 'Café en grano',
				text: 'Explora nuestros cafés en grano y llévate una bolsa (en tienda).',
				cta: 'Ver granos',
			},
			visit: {
				title: 'Visítanos',
				text: 'Un lugar para convivir o trabajar: Wi‑Fi rápido, pet‑friendly y buen ambiente.',
				cta: 'Ver ubicación',
			},
			app: {
				title: 'Ordena con la app',
				text: 'Pide por adelantado y pasa a recoger, sin filas.',
				cta: 'Descargar app',
			},
		},
		menuItems: [
			'Bebidas espresso',
			'Pour overs',
			'Matcha',
			'Cold brew',
			'Chai',
			'Pan dulce',
			'Cacao',
			'Té',
		],
		menuNote: 'Y si quieres llevarte café: café en grano en tienda.',
		appTitle: 'Nuestra app',
		appText:
			'Pide tu café favorito por adelantado y recógelo cuando llegues, sin esperar. Guarda tus favoritos, repite pedidos anteriores y recibe ofertas exclusivas. La app es gratis y está disponible para iOS y Android.',
		appBulletsTitle: 'Con la app',
		appBullets: ['Ordena por adelantado', 'Recoge en tienda', 'iOS y Android'],
		appStore: 'App Store',
		googlePlay: 'Google Play',
		visitTitle: 'Visítanos en Toluca',
		visitDescription:
			'Un lugar para convivir, trabajar o pasar por algo rico — con servicio rápido y buena vibra.',
		visitAmenitiesTitle: 'Lo que encontrarás',
		visitAmenities: [
			'Wi‑Fi de alta velocidad',
			'Asientos y espacio para trabajar',
			'Pet‑friendly',
			'Estacionamiento disponible',
			'Order ahead en la app',
		],
		directionsCta: 'Abrir en Google Maps',
	},
	en: {
		heroCtas: {
			app: 'Get the app',
			directions: 'Get directions',
			beans: 'Whole beans',
		},
		trustItems: [
			{ value: '4.9★', label: '100+ reviews' },
			{ value: 'Weekly', label: 'Roasted every week' },
			{ value: 'App', label: 'Order ahead' },
		],
		quickCards: {
			beans: {
				title: 'Whole bean coffee',
				text: 'Browse our coffees and grab a bag in-store.',
				cta: 'See beans',
			},
			visit: {
				title: 'Visit',
				text: 'Community hang + work-friendly: fast Wi‑Fi, pet-friendly, and good vibes.',
				cta: 'See location',
			},
			app: {
				title: 'Order with the app',
				text: 'Order ahead and pick up—no waiting around.',
				cta: 'Download the app',
			},
		},
		menuItems: [
			'Espresso drinks',
			'Pour overs',
			'Matcha',
			'Cold brew',
			'Chai',
			'Pastries',
			'Cacao',
			'Tea',
		],
		menuNote: 'Whole bean coffee available in-store, too.',
		appTitle: 'Our app',
		appText:
			'Order your favorite coffee ahead of time and pick it up when you arrive—no waiting. Save your favorites, reorder past drinks, and get exclusive offers. The app is free and available on iOS and Android.',
		appBulletsTitle: 'With the app',
		appBullets: ['Order ahead', 'Pick up in-store', 'Available on iOS and Android'],
		appStore: 'App Store',
		googlePlay: 'Google Play',
		visitTitle: 'Visit us in Toluca',
		visitDescription: 'Fast service, welcoming vibes, and a perfect place to work.',
		visitAmenitiesTitle: 'What you’ll find',
		visitAmenities: [
			'High-speed Wi‑Fi',
			'Seating + work-friendly space',
			'Pet-friendly',
			'Parking available',
			'Order ahead in the app',
		],
		directionsCta: 'Open in Google Maps',
	},
	de: {
		heroCtas: {
			app: 'App holen',
			directions: 'Route',
			beans: 'Bohnen',
		},
		trustItems: [
			{ value: '4.9★', label: '100+ Bewertungen' },
			{ value: 'Wöchentlich', label: 'Jede Woche geröstet' },
			{ value: 'App', label: 'Vorbestellen' },
		],
		quickCards: {
			beans: {
				title: 'Ganze Bohnen',
				text: 'Unsere Kaffees entdecken und im Laden eine Packung mitnehmen.',
				cta: 'Bohnen ansehen',
			},
			visit: {
				title: 'Besuchen',
				text: 'Treffpunkt + Arbeitsplatz: schnelles WLAN und hundefreundlich.',
				cta: 'Zur Adresse',
			},
			app: {
				title: 'Mit der App bestellen',
				text: 'Vorbestellen und entspannt abholen.',
				cta: 'App herunterladen',
			},
		},
		menuItems: [
			'Espresso-Getränke',
			'Pour Overs',
			'Matcha',
			'Cold Brew',
			'Chai',
			'Gebäck',
			'Kakao',
			'Tee',
		],
		menuNote: 'Ganze Bohnen im Laden erhältlich.',
		appTitle: 'Unsere App',
		appText:
			'Bestell deinen Lieblingskaffee im Voraus und hol ihn ab, sobald du ankommst — kein Warten. Speichere deine Favoriten, bestell frühere Drinks erneut und erhalte exklusive Angebote. Die App ist kostenlos und verfügbar für iOS und Android.',
		appBulletsTitle: 'Mit der App',
		appBullets: ['Vorbestellen', 'Im Laden abholen', 'iOS & Android'],
		appStore: 'App Store',
		googlePlay: 'Google Play',
		visitTitle: 'Besuche uns in Toluca',
		visitDescription:
			'Schneller Service, entspannte Atmosphäre und ein perfekter Ort zum Arbeiten.',
		visitAmenitiesTitle: 'Was dich erwartet',
		visitAmenities: [
			'Schnelles WLAN',
			'Sitzplätze + zum Arbeiten',
			'Hundefreundlich',
			'Parkplätze verfügbar',
			'Vorbestellung per App',
		],
		directionsCta: 'In Google Maps öffnen',
	},
	fr: {
		heroCtas: {
			app: 'Télécharger l’app',
			directions: 'Itinéraire',
			beans: 'Café en grains',
		},
		trustItems: [
			{ value: '4.9★', label: '100+ avis' },
			{ value: 'Hebdo', label: 'Torréfié chaque semaine' },
			{ value: 'App', label: 'Commande à l\u2019avance' },
		],
		quickCards: {
			beans: {
				title: 'Café en grains',
				text: 'Découvrir nos cafés et repartir avec un sachet en boutique.',
				cta: 'Voir les grains',
			},
			visit: {
				title: 'Nous trouver',
				text: 'Lieu convivial + parfait pour travailler : Wi‑Fi rapide, animaux bienvenus.',
				cta: 'Voir la localisation',
			},
			app: {
				title: 'Commander via l’app',
				text: 'Commande à l’avance et retrait facile.',
				cta: 'Télécharger l’app',
			},
		},
		menuItems: [
			'Boissons espresso',
			'Pour overs',
			'Matcha',
			'Cold brew',
			'Chai',
			'Pâtisseries',
			'Cacao',
			'Thé',
		],
		menuNote: 'Café en grains disponible en boutique.',
		appTitle: 'Notre app',
		appText:
			'Commande ton café préféré à l\u2019avance et récupère-le en arrivant — pas d\u2019attente. Sauvegarde tes favoris, recommande tes boissons et reçois des offres exclusives. L\u2019app est gratuite et disponible sur iOS et Android.',
		appBulletsTitle: 'Avec l’app',
		appBullets: ['Commande à l’avance', 'Retrait en boutique', 'iOS et Android'],
		appStore: 'App Store',
		googlePlay: 'Google Play',
		visitTitle: 'Retrouve‑nous à Toluca',
		visitDescription: 'Service rapide, ambiance chaleureuse, et un endroit idéal pour travailler.',
		visitAmenitiesTitle: 'Ce que tu trouveras',
		visitAmenities: [
			'Wi‑Fi haut débit',
			'Assises + espace pour travailler',
			'Animaux bienvenus',
			'Parking disponible',
			'Commande à l’avance via l’app',
		],
		directionsCta: 'Ouvrir dans Google Maps',
	},
	ja: {
		heroCtas: {
			app: 'アプリを入手',
			directions: '行き方',
			beans: '豆',
		},
		trustItems: [
			{ value: '4.9★', label: 'レビュー100件+' },
			{ value: '毎週', label: '毎週焙煎' },
			{ value: 'App', label: '事前注文' },
		],
		quickCards: {
			beans: {
				title: 'コーヒー豆',
				text: '豆をチェックして、店頭で持ち帰りもできます。',
				cta: '豆を見る',
			},
			visit: {
				title: '店舗情報',
				text: '集まれる場所＋作業にも。高速Wi‑Fi、ペットOK。',
				cta: '場所を見る',
			},
			app: {
				title: 'アプリで注文',
				text: '事前注文してスムーズに受け取り。',
				cta: 'アプリを入手',
			},
		},
		menuItems: [
			'エスプレッソ',
			'プアオーバー',
			'抹茶',
			'コールドブリュー',
			'チャイ',
			'焼き菓子',
			'カカオ',
			'紅茶',
		],
		menuNote: 'コーヒー豆は店頭で販売しています。',
		appTitle: 'TOLOアプリ',
		appText:
			'お気に入りのコーヒーを事前注文して、到着時にすぐ受け取り。お気に入りを保存したり、過去の注文を再オーダーしたり、限定オファーを受け取ったり。無料アプリ、iOS / Android 対応。',
		appBulletsTitle: 'アプリでできること',
		appBullets: ['事前注文', '店頭で受け取り', 'iOS / Android 対応'],
		appStore: 'App Store',
		googlePlay: 'Google Play',
		visitTitle: 'トルーカでお待ちしています',
		visitDescription: '早いサービス、居心地のよさ、作業にもぴったり。',
		visitAmenitiesTitle: 'ポイント',
		visitAmenities: [
			'高速Wi‑Fi',
			'席あり／作業しやすい',
			'ペットOK',
			'駐車スペースあり',
			'アプリで事前注文',
		],
		directionsCta: 'Google Mapsで開く',
	},
} as const

interface WelcomeProps {
	message: string
	locale: Locale
}

export function Welcome({ locale }: WelcomeProps) {
	const t = TRANSLATIONS[locale] || TRANSLATIONS.es
	const ui = UI_TRANSLATIONS[locale] || UI_TRANSLATIONS.es
	const basePath = `/${locale}`
	const beansPath = locale === 'es' ? 'granos' : 'beans'
	const beansTo = `/${locale}/${beansPath}`
	const appTo = `${basePath}#app`
	const visitTo = `${basePath}#visit`

	const highlights = [
		{ title: t.brewingTitle, text: t.brewingText },
		{ title: t.quickServiceTitle, text: t.quickServiceText },
		{ title: t.roastingTitle, text: t.roastingText },
		{ title: t.sustainabilityTitle, text: t.sustainabilityText },
	] as const

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

					<div className={styles.heroActions}>
						<Link to={appTo} className={styles.heroPrimaryButton}>
							{ui.heroCtas.app}
						</Link>
						<a
							href={MAPS_URL}
							target="_blank"
							rel="noreferrer"
							className={styles.heroSecondaryButton}
						>
							{ui.heroCtas.directions}
						</a>
					</div>
				</div>
			</section>

			{/* Quick Links */}
			<section className={styles.quickLinksSection}>
				<div className={styles.container}>
					<dl className={styles.trustBar}>
						{ui.trustItems.map((item) => (
							<div key={item.label} className={styles.trustItem}>
								<dt className={styles.trustValue}>{item.value}</dt>
								<dd className={styles.trustLabel}>{item.label}</dd>
							</div>
						))}
					</dl>

					<div className={styles.quickLinksGrid}>
						<Link to={beansTo} className={styles.quickCard}>
							<div className={styles.quickCardImage} />
							<div className={styles.quickCardBody}>
								<h3 className={styles.quickCardTitle}>{ui.quickCards.beans.title}</h3>
								<p className={styles.quickCardText}>{ui.quickCards.beans.text}</p>
								<span className={styles.quickCardCta}>{ui.quickCards.beans.cta} →</span>
							</div>
						</Link>
						<Link to={visitTo} className={styles.quickCard}>
							<div className={styles.quickCardImage} />
							<div className={styles.quickCardBody}>
								<h3 className={styles.quickCardTitle}>{ui.quickCards.visit.title}</h3>
								<p className={styles.quickCardText}>{ui.quickCards.visit.text}</p>
								<span className={styles.quickCardCta}>{ui.quickCards.visit.cta} →</span>
							</div>
						</Link>
						<Link to={appTo} className={styles.quickCard}>
							<div className={styles.quickCardImage} />
							<div className={styles.quickCardBody}>
								<h3 className={styles.quickCardTitle}>{ui.quickCards.app.title}</h3>
								<p className={styles.quickCardText}>{ui.quickCards.app.text}</p>
								<span className={styles.quickCardCta}>{ui.quickCards.app.cta} →</span>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className={styles.sectionAnchor}>
				<div className={styles.container}>
					<div className={styles.aboutGrid}>
						<div className={styles.aboutTextBlock}>
							<h2 className={styles.sectionTitle}>{t.aboutTitle}</h2>
							<p className={styles.sectionText}>{t.aboutText}</p>
						</div>
						<div className={styles.aboutImageBlock}>
							<div className={styles.aboutImage} />
						</div>
					</div>

					<div className={styles.highlightsGrid}>
						{highlights.map((item) => (
							<div key={item.title} className={styles.highlightCard}>
								<h3 className={styles.highlightTitle}>{item.title}</h3>
								<p className={styles.highlightText}>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Menu Section */}
			<section id="menu" className={styles.sectionAnchor}>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>{t.menuTitle}</h2>
					<div className={styles.chipGrid}>
						{ui.menuItems.map((item) => (
							<span key={item} className={styles.chip}>
								{item}
							</span>
						))}
					</div>
					<p className={styles.sectionText}>{ui.menuNote}</p>
				</div>
			</section>

			{/* App Section */}
			<section id="app" className={styles.sectionAnchor}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>{ui.appTitle}</h2>
					<div className={styles.splitSection}>
						<div>
							<p className={styles.appText}>{ui.appText}</p>
							<div className={styles.storeButtons}>
								<a
									href={APP_STORE_URL}
									target="_blank"
									rel="noreferrer"
									className={styles.storeButtonPrimary}
								>
									{ui.appStore}
								</a>
								<a
									href={GOOGLE_PLAY_URL}
									target="_blank"
									rel="noreferrer"
									className={styles.storeButtonSecondary}
								>
									{ui.googlePlay}
								</a>
							</div>
						</div>
						<div className={styles.appImage} />
					</div>
				</div>
			</section>

			{/* Visit Section */}
			<section id="visit" className={styles.sectionAnchor}>
				<div className={styles.container}>
					<div className={styles.visitImage} />
					<div className={styles.visitGrid}>
						<div className={styles.visitCard}>
							<h2 className={styles.sectionTitle}>{ui.visitTitle}</h2>
							<p className={styles.sectionText}>{ui.visitDescription}</p>

							<div className={styles.infoCard}>
								<h3 className={styles.subTitle}>{ui.visitAmenitiesTitle}</h3>
								<ul className={styles.bullets}>
									{ui.visitAmenities.map((amenity) => (
										<li key={amenity} className={styles.bullet}>
											{amenity}
										</li>
									))}
								</ul>
								<a
									href={MAPS_URL}
									target="_blank"
									rel="noreferrer"
									className={styles.directionsLink}
									style={{ marginTop: vars.space[4] }}
								>
									{ui.directionsCta}
								</a>
							</div>
						</div>

						<div className={styles.mapWrapper}>
							<iframe
								title="TOLO Coffee map"
								src={MAPS_EMBED_URL}
								className={styles.map}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
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
