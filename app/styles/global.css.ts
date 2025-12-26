import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from './tokens.css'

/**
 * CSS Reset + Global styles using vanilla-extract
 *
 * These styles apply globally to elements based on the current theme.
 * The theme class (lightTheme or darkTheme) should be applied to a parent element.
 */

/* 1. Use a more-intuitive box-sizing model */
globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
})

/* 2. Remove default margin (except dialog) */
globalStyle('*:not(dialog)', {
	margin: 0,
})

/* 3. Enable keyword animations */
globalStyle('html', {
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			interpolateSize: 'allow-keywords',
		},
	},
})

/* 4-5. Body base styles */
globalStyle('body', {
	lineHeight: 1.5,
	WebkitFontSmoothing: 'antialiased',
	fontFamily: vars.font.body,
	fontSize: vars.fontSize.base,
	backgroundColor: vars.color.background,
	color: vars.color.text,
})

/* 6. Improve media defaults */
globalStyle('img, picture, video, canvas, svg', {
	display: 'block',
	maxWidth: '100%',
})

/* 7. Inherit fonts for form controls */
globalStyle('input, button, textarea, select', {
	font: 'inherit',
})

/* 8. Avoid text overflows */
globalStyle('p, h1, h2, h3, h4, h5, h6', {
	overflowWrap: 'break-word',
})

/* 9. Improve line wrapping */
globalStyle('p', {
	textWrap: 'pretty',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
	textWrap: 'balance',
	fontFamily: vars.font.heading,
	fontWeight: vars.fontWeight.bold,
	lineHeight: vars.lineHeight.tight,
})

// H1 needs a tighter leading than the rest for cleaner hero + page titles.
globalStyle('h1', {
	lineHeight: vars.lineHeight.none,
})

globalStyle('h1, h2, h3', {
	color: vars.color.secondary,
	fontWeight: vars.fontWeight.bold,
	textTransform: 'uppercase',
})

/* 10. Create a root stacking context */
globalStyle('#root, #__next', {
	isolation: 'isolate',
})

/* Additional theme-aware styles */
globalStyle('a', {
	color: vars.color.primary,
	textDecoration: 'none',
})

globalStyle('code, pre', {
	fontFamily: vars.font.mono,
})

/**
 * Reusable Component Styles
 *
 * Common patterns for buttons, cards, and sections that can be composed throughout the app.
 */

// Base button style - can be extended with specific variants
export const buttonBase = style({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: vars.fontSize.base,
	fontWeight: vars.fontWeight.semibold,
	padding: `${vars.space[3]} ${vars.space[5]}`,
	borderRadius: vars.radius.full,
	textDecoration: 'none',
	cursor: 'pointer',
	border: 'none',
	':focus-visible': {
		outline: `2px solid ${vars.color.primary}`,
		outlineOffset: '2px',
	},
})

export const buttonPrimary = style([
	buttonBase,
	{
		backgroundColor: vars.color.primary,
		color: vars.color.white,
		':hover': {
			filter: 'brightness(1.05)',
		},
	},
])

export const buttonSecondary = style([
	buttonBase,
	{
		backgroundColor: vars.color.secondary,
		color: vars.color.white,
		':hover': {
			filter: 'brightness(1.05)',
		},
	},
])

export const buttonOutline = style([
	buttonBase,
	{
		backgroundColor: 'transparent',
		border: `1px solid ${vars.color.border}`,
		color: vars.color.text,
		':hover': {
			backgroundColor: vars.color.white,
		},
	},
])

export const buttonGhost = style([
	buttonBase,
	{
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		border: '1px solid rgba(255, 255, 255, 0.35)',
		color: vars.color.white,
		':hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.16)',
		},
	},
])

export const buttonLight = style([
	buttonBase,
	{
		backgroundColor: vars.color.white,
		color: vars.color.primary,
		':hover': {
			filter: 'brightness(0.98)',
		},
	},
])

// Cards
export const card = style({
	backgroundColor: vars.color.white,
	borderRadius: vars.radius['2xl'],
	padding: vars.space[6],
})

export const cardCompact = style([
	card,
	{
		padding: vars.space[4],
	},
])

export const cardHover = style([
	card,
	{
		':hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
		},
	},
])

// Sections
export const section = style({
	padding: `${vars.space[16]} ${vars.space[6]}`,
})

export const sectionCompact = style([
	section,
	{
		padding: `${vars.space[10]} ${vars.space[6]}`,
	},
])

export const container = style({
	maxWidth: '1200px',
	margin: '0 auto',
})

export const containerWide = style({
	maxWidth: '1100px',
	margin: '0 auto',
})

export const containerNarrow = style({
	maxWidth: '900px',
	margin: '0 auto',
})

// Typography helpers
export const textLarge = style({
	fontSize: vars.fontSize.lg,
	lineHeight: vars.lineHeight.relaxed,
})

export const textCenter = style({
	textAlign: 'center',
})

export const textCentered = style({
	textAlign: 'center',
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left',
		},
	},
})

// Layout helpers
export const grid2 = style({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[6],
	'@media': {
		'(min-width: 768px)': {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		},
	},
})

export const grid3 = style({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[6],
	'@media': {
		'(min-width: 768px)': {
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
		},
	},
})

export const flexRow = style({
	display: 'flex',
	gap: vars.space[3],
	flexWrap: 'wrap',
})

export const flexColumn = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[4],
})

// Image placeholder
export const imagePlaceholder = style({
	backgroundColor: '#e5e5e5',
	borderRadius: vars.radius['2xl'],
	overflow: 'hidden',
})
