import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

/**
 * CSS Reset + Global styles using vanilla-extract
 *
 * These styles apply globally to elements based on the current theme.
 * The theme class (lightTheme or darkTheme) should be applied to a parent element.
 */

/* 1. Use a more-intuitive box-sizing model */
globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});

/* 2. Remove default margin (except dialog) */
globalStyle("*:not(dialog)", {
	margin: 0,
});

/* 3. Enable keyword animations */
globalStyle("html", {
	"@media": {
		"(prefers-reduced-motion: no-preference)": {
			// @ts-expect-error - interpolate-size is a valid CSS property
			interpolateSize: "allow-keywords",
		},
	},
});

/* 4-5. Body base styles */
globalStyle("body", {
	lineHeight: 1.5,
	WebkitFontSmoothing: "antialiased",
	fontFamily: vars.font.body,
	fontSize: vars.fontSize.base,
	backgroundColor: vars.color.background,
	color: vars.color.foreground,
});

/* 6. Improve media defaults */
globalStyle("img, picture, video, canvas, svg", {
	display: "block",
	maxWidth: "100%",
});

/* 7. Inherit fonts for form controls */
globalStyle("input, button, textarea, select", {
	font: "inherit",
});

/* 8. Avoid text overflows */
globalStyle("p, h1, h2, h3, h4, h5, h6", {
	overflowWrap: "break-word",
});

/* 9. Improve line wrapping */
globalStyle("p", {
	// @ts-expect-error - text-wrap: pretty is valid CSS
	textWrap: "pretty",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	// @ts-expect-error - text-wrap: balance is valid CSS
	textWrap: "balance",
	fontFamily: vars.font.heading,
	fontWeight: vars.fontWeight.bold,
	lineHeight: vars.lineHeight.tight,
});

/* 10. Create a root stacking context */
globalStyle("#root, #__next", {
	isolation: "isolate",
});

/* Additional theme-aware styles */
globalStyle("a", {
	color: vars.color.primary,
	textDecoration: "none",
});

globalStyle("a:hover", {
	textDecoration: "underline",
});

globalStyle("code, pre", {
	fontFamily: vars.font.mono,
});
