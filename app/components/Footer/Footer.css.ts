import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const footer = style({
	backgroundColor: vars.color.primary,
	borderTop: 'none',
	padding: `${vars.space[12]} ${vars.space[6]} ${vars.space[6]}`,
	marginTop: 'auto',
})

export const container = style({
	maxWidth: '1200px',
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[12],
})

export const brandSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[2],
	maxWidth: '400px',
})

export const linksGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
	gap: vars.space[8],
	'@media': {
		'(max-width: 640px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
	},
})

export const section = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[3],
})

export const sectionTitle = style({
	fontSize: vars.fontSize.lg,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.white,
	marginBottom: vars.space[2],
})

export const link = style({
	fontSize: vars.fontSize.base,
	color: 'rgba(255, 255, 255, 0.7)',
	textDecoration: 'none',
	':hover': {
		color: vars.color.white,
	},
})

export const bottomBar = style({
	maxWidth: '1200px',
	margin: '0 auto',
	marginTop: vars.space[8],
	paddingTop: vars.space[6],
	borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: vars.space[4],
	'@media': {
		'(max-width: 640px)': {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
})

export const copyright = style({
	fontSize: vars.fontSize.sm,
	color: 'rgba(255, 255, 255, 0.7)',
	margin: 0,
})

export const legalLinks = style({
	display: 'flex',
	gap: vars.space[4],
})

export const legalLink = style({
	fontSize: vars.fontSize.sm,
	color: 'rgba(255, 255, 255, 0.7)',
	textDecoration: 'none',
	':hover': {
		color: vars.color.white,
	},
})

export const brand = style({
	fontSize: vars.fontSize['2xl'],
	fontWeight: vars.fontWeight.bold,
	color: vars.color.white,
	marginBottom: vars.space[2],
})

export const tagline = style({
	fontSize: vars.fontSize.sm,
	color: 'rgba(255, 255, 255, 0.7)',
	lineHeight: vars.lineHeight.relaxed,
})
