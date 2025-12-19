import { createGlobalTheme } from "@vanilla-extract/css";

/**
 * Design Tokens using vanilla-extract
 *
 * Uses createGlobalTheme for static tokens and color values.
 * Dark mode is handled via CSS custom properties and prefers-color-scheme.
 */

// System font stacks - no external fonts needed
const fonts = {
	body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	heading:
		'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
} as const;

// All design tokens
const tokens = {
	font: fonts,
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
	// Light theme colors (default)
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
	shadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
	},
} as const;

// Dark theme color overrides
export const darkColors = {
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
	shadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
	},
} as const;

// Create global theme on :root
createGlobalTheme(":root", tokens);

// Export vars for use in styles
export const vars = tokens;
