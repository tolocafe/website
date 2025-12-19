import { globalStyle } from "@vanilla-extract/css";
import { vars, darkColors } from "./tokens.css";

/**
 * Global styles using vanilla-extract
 *
 * Light theme is the default, dark theme is applied via prefers-color-scheme.
 */

globalStyle("html", {
	colorScheme: "light dark",
});

globalStyle("html, body", {
	margin: 0,
	padding: 0,
	fontFamily: vars.font.body,
	fontSize: vars.fontSize.base,
	lineHeight: vars.lineHeight.normal,
	backgroundColor: vars.color.background,
	color: vars.color.foreground,
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	"@media": {
		"(prefers-color-scheme: dark)": {
			backgroundColor: darkColors.color.background,
			color: darkColors.color.foreground,
		},
	},
});

globalStyle("*", {
	boxSizing: "border-box",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	fontFamily: vars.font.heading,
	fontWeight: vars.fontWeight.bold,
	lineHeight: vars.lineHeight.tight,
	margin: 0,
});

globalStyle("a", {
	color: vars.color.primary,
	textDecoration: "none",
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: darkColors.color.primary,
		},
	},
});

globalStyle("a:hover", {
	textDecoration: "underline",
});

globalStyle("code, pre", {
	fontFamily: vars.font.mono,
});
