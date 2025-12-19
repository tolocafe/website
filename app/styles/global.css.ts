import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

/**
 * Global styles using vanilla-extract
 *
 * These styles apply globally to elements based on the current theme.
 * The theme class (lightTheme or darkTheme) should be applied to a parent element.
 */

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
});

globalStyle("*", {
	boxSizing: "border-box",
});

globalStyle("*::before, *::after", {
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
});

globalStyle("a:hover", {
	textDecoration: "underline",
});

globalStyle("code, pre", {
	fontFamily: vars.font.mono,
});
