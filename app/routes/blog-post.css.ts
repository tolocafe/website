import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const main = style({
	minHeight: 'calc(100vh - 200px)',
	padding: `${vars.space[12]} ${vars.space[6]}`,
	backgroundColor: vars.color.background,
})

export const container = style({
	maxWidth: '800px',
	margin: '0 auto',
})

export const backLink = style({
	display: 'inline-flex',
	alignItems: 'center',
	gap: vars.space[2],
	color: vars.color.secondary,
	textDecoration: 'none',
	fontSize: vars.fontSize.base,
	fontWeight: vars.fontWeight.medium,
	marginBottom: vars.space[8],
})

export const article = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[6],
})

export const header = style({
	marginBottom: vars.space[4],
})

export const title = style({
	fontSize: vars.fontSize['4xl'],
	fontWeight: vars.fontWeight.bold,
	lineHeight: vars.lineHeight.tight,
	marginBottom: vars.space[4],
	'@media': {
		'(max-width: 640px)': {
			fontSize: vars.fontSize['3xl'],
		},
	},
})

export const meta = style({
	display: 'flex',
	alignItems: 'center',
	gap: vars.space[4],
	color: vars.color.text,
	fontSize: vars.fontSize.base,
})

export const date = style({
	display: 'flex',
	alignItems: 'center',
	gap: vars.space[2],
})

export const imageWrapper = style({
	width: '100%',
	aspectRatio: '16 / 9',
	borderRadius: vars.radius['2xl'],
	overflow: 'hidden',
	marginBottom: vars.space[4],
})

export const image = style({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
})

export const body = style({
	fontSize: vars.fontSize.lg,
	color: vars.color.text,
	lineHeight: vars.lineHeight.relaxed,
})

// Portable Text block styles
export const paragraph = style({
	marginBottom: vars.space[6],
})

export const heading2 = style({
	fontSize: vars.fontSize['2xl'],
	fontWeight: vars.fontWeight.bold,
	marginTop: vars.space[8],
	marginBottom: vars.space[4],
})

export const heading3 = style({
	fontSize: vars.fontSize.xl,
	fontWeight: vars.fontWeight.semibold,
	marginTop: vars.space[6],
	marginBottom: vars.space[3],
})

export const blockquote = style({
	borderLeft: `4px solid ${vars.color.secondary}`,
	paddingLeft: vars.space[6],
	marginLeft: 0,
	marginRight: 0,
	marginTop: vars.space[6],
	marginBottom: vars.space[6],
	fontStyle: 'italic',
	color: vars.color.text,
})

export const list = style({
	marginBottom: vars.space[6],
	paddingLeft: vars.space[6],
})

export const listItem = style({
	marginBottom: vars.space[2],
})

export const link = style({
	color: vars.color.secondary,
	textDecoration: 'underline',
})

export const notFound = style({
	textAlign: 'center',
	padding: vars.space[12],
})

export const notFoundTitle = style({
	fontSize: vars.fontSize['3xl'],
	fontWeight: vars.fontWeight.bold,
	marginBottom: vars.space[4],
})

export const notFoundText = style({
	fontSize: vars.fontSize.lg,
	color: vars.color.text,
	marginBottom: vars.space[8],
})
