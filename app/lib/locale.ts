export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export function isValidLocale(locale: string | undefined): locale is Locale {
	return SUPPORTED_LOCALES.includes(locale as Locale);
}

export function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
	if (!acceptLanguage) return DEFAULT_LOCALE;

	const languages = acceptLanguage
		.split(",")
		.map((lang) => {
			const [code, q = "q=1"] = lang.trim().split(";");
			const quality = parseFloat(q.replace("q=", "")) || 1;
			const baseCode = code.split("-")[0].toLowerCase();
			return { code: baseCode, quality };
		})
		.sort((a, b) => b.quality - a.quality);

	for (const { code } of languages) {
		if (isValidLocale(code)) {
			return code;
		}
	}

	return DEFAULT_LOCALE;
}
