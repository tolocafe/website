import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const footer = style({
  backgroundColor: vars.color.primary,
  borderTop: 'none',
  padding: `${vars.space[12]} ${vars.space[6]}`,
  marginTop: 'auto',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space[8],
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
})

export const copyright = style({
  marginTop: vars.space[8],
  paddingTop: vars.space[6],
  borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
  textAlign: 'center',
  fontSize: vars.fontSize.sm,
  color: 'rgba(255, 255, 255, 0.7)',
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
