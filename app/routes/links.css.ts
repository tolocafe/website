import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const main = style({
	minHeight: 'calc(100vh - 200px)',
	padding: `${vars.space[12]} ${vars.space[6]}`,
	backgroundColor: vars.color.background,
})

export const container = style({
	maxWidth: '500px',
	margin: '0 auto',
})

export const header = style({
	textAlign: 'center',
	marginBottom: vars.space[8],
})

export const logo = style({
	width: '80px',
	height: '80px',
	borderRadius: vars.radius.full,
	marginBottom: vars.space[4],
	objectFit: 'cover',
})

export const heading = style({
	fontSize: vars.fontSize['2xl'],
	fontWeight: vars.fontWeight.bold,
	marginBottom: vars.space[2],
})

export const subtitle = style({
	fontSize: vars.fontSize.base,
	color: vars.color.text,
	opacity: 0.8,
})

export const linksContainer = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.space[4],
})

export const linkCard = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: vars.space[3],
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.xl,
	padding: `${vars.space[4]} ${vars.space[6]}`,
	border: `1px solid ${vars.color.border}`,
	textDecoration: 'none',
	color: vars.color.text,
	fontWeight: vars.fontWeight.medium,
	fontSize: vars.fontSize.lg,
	transition: 'transform 0.2s ease, box-shadow 0.2s ease',
	':hover': {
		transform: 'translateY(-2px)',
		boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
	},
})

export const linkIcon = style({
	fontSize: vars.fontSize['2xl'],
	flexShrink: 0,
})

export const sectionTitle = style({
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.text,
	opacity: 0.6,
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	marginTop: vars.space[6],
	marginBottom: vars.space[2],
	textAlign: 'center',
})

export const appLinksGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: vars.space[4],
})
