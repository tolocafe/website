import {
	createGlobalTheme,
	createThemeContract,
	globalStyle,
	assignVars,
} from '@vanilla-extract/css'

/**
 * Design Tokens using vanilla-extract
 *
 * This file defines the design system tokens for colors, spacing, typography, etc.
 * Uses createGlobalTheme on :root for automatic system-preference-based theming.
 */

// Theme contract defines the structure of our theme tokens
export const vars = createThemeContract({
	color: {
		primary: null,
		secondary: null,
		background: null,
		border: null,
		white: null,
		text: null,
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
		'2xl': null,
		'3xl': null,
		'4xl': null,
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
		'2xl': null,
		'3xl': null,
		full: null,
	},
})

// Shared non-color tokens (same for light and dark)
const sharedTokens = {
	font: {
		body: '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		heading:
			'"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
	},
	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
	},
	fontWeight: {
		normal: '500',
		medium: '600',
		semibold: '700',
		bold: '900',
	},
	lineHeight: {
		none: '1',
		tight: '1.25',
		normal: '1.5',
		relaxed: '1.75',
	},
	space: {
		0: '0',
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		8: '2rem',
		10: '2.5rem',
		12: '3rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
	},
	radius: {
		none: '0',
		sm: '0.125rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
}

// TOLO Brand Colors - Light theme
const lightColors = {
	primary: '#3D6039', // forest green
	secondary: '#C44536', // terracotta
	background: '#F5F0E8', // cream
	border: '#D4CFC5', // cream border
	white: '#FFFFFF',
	text: '#333333',
}

// TOLO Brand Colors - Dark theme
const darkColors = {
	...lightColors,
	text: '#FFFFFF',
}

// Apply light theme to :root (default)
createGlobalTheme(':root', vars, {
	color: lightColors,
	...sharedTokens,
})

// Apply dark theme when system prefers dark mode
globalStyle(':root', {
	'@media': {
		'(prefers-color-scheme: dark)': {
			vars: assignVars(vars, {
				color: darkColors,
				...sharedTokens,
			}),
		},
	},
})

// Set color-scheme for proper browser UI (scrollbars, form controls, etc.)
globalStyle(':root', {
	colorScheme: 'light dark',
})
