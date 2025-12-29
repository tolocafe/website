import { vars } from '~/styles/tokens.css'
import { style } from '@vanilla-extract/css'
import {
	buttonBase,
	buttonSecondary,
	buttonLight,
	buttonGhost,
	card,
	imagePlaceholder,
	section,
	container,
} from '~/styles/global.css'

/**
 * Welcome component styles
 *
 * Specific styles for the homepage that extend global patterns.
 */

export const main = style({
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
})

// Hero Section
export const hero = style({
	position: 'relative',
	minHeight: '70vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',
})

export const heroVideo = style({
	position: 'absolute',
	inset: 0,
	width: '100%',
	height: '100%',
})

export const heroVideoIframe = style({
	border: 'none',
	position: 'absolute',
	top: '50%',
	left: '50%',
	width: '177.78vh',
	height: '100vh',
	minWidth: '100%',
	minHeight: '56.25vw',
	transform: 'translate(-50%, -50%)',
	pointerEvents: 'none',
})

export const heroOverlay = style({
	position: 'absolute',
	inset: 0,
	background:
		'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.75) 100%)',
})

export const heroContent = style({
	position: 'relative',
	zIndex: 10,
	textAlign: 'center',
	padding: `${vars.space[10]} ${vars.space[6]}`,
	maxWidth: '1100px',
	margin: '0 auto',
	'@media': {
		'(min-width: 768px)': {
			textAlign: 'left',
			padding: `${vars.space[16]} ${vars.space[6]}`,
		},
	},
})

export const heroTitle = style({
	fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
	fontWeight: vars.fontWeight.bold,
	color: vars.color.white,
	marginBottom: vars.space[4],
	lineHeight: vars.lineHeight.none,
	letterSpacing: '-0.02em',
	textTransform: 'none',
})

export const heroSubtitle = style({
	fontSize: vars.fontSize.xl,
	color: 'rgba(255, 255, 255, 0.9)',
	lineHeight: vars.lineHeight.relaxed,
	maxWidth: '600px',
	margin: 0,
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize.lg,
		},
	},
})

export const heroActions = style({
	marginTop: vars.space[8],
	display: 'flex',
	flexWrap: 'wrap',
	gap: vars.space[3],
	justifyContent: 'center',
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start',
		},
	},
})

export const heroPrimaryButton = style([
	buttonBase,
	{
		backgroundColor: vars.color.secondary,
		color: vars.color.white,
		':hover': {
			filter: 'brightness(1.05)',
		},
	},
])

export const heroSecondaryButton = buttonGhost
export const heroTertiaryButton = buttonLight

// Trust Bar
export const quickLinksSection = style({
	padding: `${vars.space[10]} ${vars.space[6]} ${vars.space[16]}`,
})

export const trustBar = style({
	marginBottom: vars.space[10],
	display: 'grid',
	gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	gap: vars.space[4],
	padding: vars.space[5],
	borderRadius: vars.radius['2xl'],
	backgroundColor: vars.color.surface,
	'@media': {
		'(max-width: 640px)': {
			gap: vars.space[3],
			padding: vars.space[4],
		},
		'(min-width: 768px)': {
			gap: vars.space[6],
		},
	},
})

export const trustItem = style({
	textAlign: 'center',
})

export const trustValue = style({
	color: vars.color.secondary,
	fontWeight: vars.fontWeight.bold,
	fontSize: vars.fontSize.xl,
	lineHeight: vars.lineHeight.none,
})

export const trustLabel = style({
	marginTop: vars.space[2],
	color: vars.color.text,
	fontSize: vars.fontSize.sm,
	lineHeight: vars.lineHeight.normal,
})

// Quick Cards
export const quickLinksGrid = style({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[6],
	'@media': {
		'(min-width: 768px)': {
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
		},
	},
})

export const quickCard = style([
	card,
	{
		display: 'flex',
		flexDirection: 'column',
		textDecoration: 'none',
		padding: vars.space[5],
		':focus-visible': {
			outline: `2px solid ${vars.color.primary}`,
			outlineOffset: '3px',
		},
	},
])

export const quickCardImage = style([
	imagePlaceholder,
	{
		width: '100%',
		aspectRatio: '16 / 10',
		marginBottom: vars.space[4],
		borderRadius: vars.radius.xl,
	},
])

export const quickCardBody = style({
	minWidth: 0,
})

export const quickCardTitle = style({
	fontSize: vars.fontSize.xl,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.text,
	marginBottom: vars.space[2],
})

export const quickCardText = style({
	fontSize: vars.fontSize.base,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
	marginBottom: vars.space[3],
})

export const quickCardCta = style({
	display: 'inline-block',
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.secondary,
})

// Content Sections
export const sectionAnchor = style([
	section,
	{
		scrollMarginTop: '96px',
	},
])

export const sectionContent = style({
	maxWidth: '1100px',
	margin: '0 auto',
	textAlign: 'left',
	'@media': {
		'(max-width: 768px)': {
			textAlign: 'center',
		},
	},
})

export const sectionTitle = style({
	fontSize: vars.fontSize['3xl'],
	fontWeight: vars.fontWeight.bold,
	marginBottom: vars.space[6],
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize['2xl'],
		},
	},
})

export const sectionText = style({
	fontSize: vars.fontSize.xl,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize.lg,
		},
	},
})

// About Section
export const aboutGrid = style({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[10],
	alignItems: 'center',
	'@media': {
		'(min-width: 900px)': {
			gridTemplateColumns: '1fr 1fr',
		},
	},
})

export const aboutTextBlock = style({
	order: 2,
	'@media': {
		'(min-width: 900px)': {
			order: 1,
		},
	},
})

export const aboutImageBlock = style({
	order: 1,
	'@media': {
		'(min-width: 900px)': {
			order: 2,
		},
	},
})

export const aboutImage = style([
	imagePlaceholder,
	{
		width: '100%',
		aspectRatio: '4 / 3',
		'@media': {
			'(min-width: 768px)': {
				aspectRatio: '1 / 1',
			},
		},
	},
])

export const highlightsGrid = style({
	marginTop: vars.space[10],
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[6],
	'@media': {
		'(min-width: 768px)': {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		},
	},
})

export const highlightCard = card

export const highlightTitle = style({
	fontSize: vars.fontSize.xl,
	fontWeight: vars.fontWeight.semibold,
	marginBottom: vars.space[3],
})

export const highlightText = style({
	fontSize: vars.fontSize.base,
	lineHeight: vars.lineHeight.relaxed,
	color: vars.color.text,
})

// Menu Section
export const chipGrid = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: vars.space[3],
	justifyContent: 'center',
	marginBottom: vars.space[6],
	'@media': {
		'(min-width: 768px)': {
			justifyContent: 'flex-start',
		},
	},
})

export const chip = style([
	card,
	{
		padding: `${vars.space[2]} ${vars.space[4]}`,
		fontSize: vars.fontSize.sm,
		fontWeight: vars.fontWeight.medium,
		color: vars.color.text,
	},
])

// App Section
export const splitSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[10],
	'@media': {
		'(min-width: 900px)': {
			alignItems: 'center',
			flexDirection: 'row',
		},
	},
})

export const storeButtons = style({
	marginTop: vars.space[6],
	display: 'flex',
	flexWrap: 'wrap',
	gap: vars.space[3],
})

export const storeButtonPrimary = style([
	buttonBase,
	{
		backgroundColor: vars.color.primary,
		color: vars.color.white,
		':hover': {
			filter: 'brightness(1.05)',
		},
	},
])

export const storeButtonSecondary = buttonLight

export const infoCard = style({
	backgroundColor: 'rgba(255, 255, 255, 0.35)',
	borderRadius: vars.radius['2xl'],
	padding: vars.space[6],
})

export const appInfoCard = style([
	infoCard,
	{
		marginTop: vars.space[8],
	},
])

export const subTitle = style({
	fontSize: vars.fontSize.lg,
	fontWeight: vars.fontWeight.semibold,
	marginBottom: vars.space[4],
})

export const bullets = style({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'grid',
	gap: vars.space[3],
})

export const bullet = style({
	display: 'flex',
	alignItems: 'flex-start',
	gap: vars.space[3],
	fontSize: vars.fontSize.base,
	lineHeight: vars.lineHeight.relaxed,
	color: vars.color.text,
	selectors: {
		'&::before': {
			content: '"•"',
			color: vars.color.secondary,
			fontWeight: vars.fontWeight.bold,
			lineHeight: vars.lineHeight.none,
		},
	},
})

export const appImage = style([
	imagePlaceholder,
	{
		width: '100%',
		maxWidth: '280px',
		aspectRatio: '9 / 16',
		margin: '0 auto',
	},
])

export const appText = style({
	fontSize: vars.fontSize.xl,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
	marginBottom: vars.space[2],
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize.lg,
		},
	},
})

// Visit Section
export const visitGrid = style({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: vars.space[10],
	alignItems: 'start',
	'@media': {
		'(min-width: 900px)': {
			gridTemplateColumns: '0.9fr 1.1fr',
		},
	},
})

export const visitCard = style({
	backgroundColor: vars.color.background,
})

export const visitImage = style([
	imagePlaceholder,
	{
		width: '100%',
		aspectRatio: '21 / 9',
		marginBottom: vars.space[8],
	},
])

export const addressCard = style([
	card,
	{
		marginTop: vars.space[6],
		display: 'flex',
		flexDirection: 'column',
		gap: vars.space[4],
	},
])

export const address = style({
	fontSize: vars.fontSize.base,
	fontWeight: vars.fontWeight.medium,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
})

export const directionsLink = buttonSecondary

export const mapWrapper = style({
	borderRadius: vars.radius['2xl'],
	overflow: 'hidden',
	backgroundColor: vars.color.surface,
	minHeight: '360px',
})

export const map = style({
	width: '100%',
	height: '100%',
	border: 'none',
	minHeight: '360px',
})

// Features Section
export const featuresSection = style([
	section,
	{
		backgroundColor: vars.color.background,
	},
])

export const featuresSectionTitle = style({
	fontSize: vars.fontSize['3xl'],
	fontWeight: vars.fontWeight.bold,
	color: vars.color.secondary,
	textAlign: 'center',
	marginBottom: vars.space[12],
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize['2xl'],
		},
	},
})

export const featuresGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
	gap: vars.space[8],
	maxWidth: '1200px',
	margin: '0 auto',
})

export const featureCard = style([
	card,
	{
		padding: vars.space[8],
		textAlign: 'center',
	},
])

export const featureIcon = style({
	width: '64px',
	height: '64px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '0 auto',
	marginBottom: vars.space[4],
	backgroundColor: vars.color.primary,
	color: vars.color.white,
	borderRadius: vars.radius.full,
})

export const featureTitle = style({
	fontSize: vars.fontSize.xl,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.text,
	marginBottom: vars.space[3],
})

export const featureText = style({
	fontSize: vars.fontSize.base,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
})

// Re-export container for convenience
export { container }
