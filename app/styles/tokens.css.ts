import {
	createGlobalTheme,
	createThemeContract,
	createTheme,
} from "@vanilla-extract/css";

/**
 * Design Tokens using vanilla-extract
 *
 * This file defines the design system tokens for colors, spacing, typography, etc.
 * Use createThemeContract for type-safe theme switching (light/dark mode).
 * Use createGlobalTheme for simpler, single-theme setups.
 */

// Theme contract defines the structure of our theme tokens
export const vars = createThemeContract({
	color: {
		background: null,
		foreground: null,
		primary: null,
		primaryForeground: null,
		secondary: null,
		secondaryForeground: null,
		muted: null,
		mutedForeground: null,
		border: null,
		accent: null,
		accentForeground: null,
	},
	font: {
		body: null,
		heading: null,
		mono: null,
	},
	fontSize: {
		xs: null,
		sm: null,
		base: null,
		lg: null,
		xl: null,
		"2xl": null,
		"3xl": null,
		"4xl": null,
	},
	fontWeight: {
		normal: null,
		medium: null,
		semibold: null,
		bold: null,
	},
	lineHeight: {
		none: null,
		tight: null,
		normal: null,
		relaxed: null,
	},
	space: {
		0: null,
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		8: null,
		10: null,
		12: null,
		16: null,
		20: null,
		24: null,
	},
	radius: {
		none: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
		"2xl": null,
		"3xl": null,
		full: null,
	},
	shadow: {
		sm: null,
		md: null,
		lg: null,
		xl: null,
	},
});

// Light theme values
export const lightTheme = createTheme(vars, {
	color: {
		background: "#ffffff",
		foreground: "#0f172a",
		primary: "#2563eb",
		primaryForeground: "#ffffff",
		secondary: "#f1f5f9",
		secondaryForeground: "#0f172a",
		muted: "#f8fafc",
		mutedForeground: "#64748b",
		border: "#e2e8f0",
		accent: "#3b82f6",
		accentForeground: "#ffffff",
	},
	font: {
		body: '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		heading:
			'"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
	},
	fontSize: {
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
	},
	fontWeight: {
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
	},
	lineHeight: {
		none: "1",
		tight: "1.25",
		normal: "1.5",
		relaxed: "1.75",
	},
	space: {
		0: "0",
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		8: "2rem",
		10: "2.5rem",
		12: "3rem",
		16: "4rem",
		20: "5rem",
		24: "6rem",
	},
	radius: {
		none: "0",
		sm: "0.125rem",
		md: "0.375rem",
		lg: "0.5rem",
		xl: "0.75rem",
		"2xl": "1rem",
		"3xl": "1.5rem",
		full: "9999px",
	},
	shadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
	},
});

// Dark theme values
export const darkTheme = createTheme(vars, {
	color: {
		background: "#0f172a",
		foreground: "#f8fafc",
		primary: "#3b82f6",
		primaryForeground: "#ffffff",
		secondary: "#1e293b",
		secondaryForeground: "#f8fafc",
		muted: "#1e293b",
		mutedForeground: "#94a3b8",
		border: "#334155",
		accent: "#60a5fa",
		accentForeground: "#0f172a",
	},
	font: {
		body: '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		heading:
			'"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
	},
	fontSize: {
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
	},
	fontWeight: {
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
	},
	lineHeight: {
		none: "1",
		tight: "1.25",
		normal: "1.5",
		relaxed: "1.75",
	},
	space: {
		0: "0",
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		8: "2rem",
		10: "2.5rem",
		12: "3rem",
		16: "4rem",
		20: "5rem",
		24: "6rem",
	},
	radius: {
		none: "0",
		sm: "0.125rem",
		md: "0.375rem",
		lg: "0.5rem",
		xl: "0.75rem",
		"2xl": "1rem",
		"3xl": "1.5rem",
		full: "9999px",
	},
	shadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
	},
});
