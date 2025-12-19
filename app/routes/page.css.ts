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

export const header = style({
  marginBottom: vars.space[8],
  textAlign: 'center',
})

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.foreground,
  lineHeight: vars.lineHeight.tight,
  '@media': {
    '(max-width: 640px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
})

export const body = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.foreground,
  lineHeight: vars.lineHeight.relaxed,
})

// Portable Text styles
export const paragraph = style({
  marginBottom: vars.space[6],
})

export const heading2 = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.foreground,
  marginTop: vars.space[8],
  marginBottom: vars.space[4],
})

export const heading3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginTop: vars.space[6],
  marginBottom: vars.space[3],
})

export const blockquote = style({
  borderLeft: `4px solid ${vars.color.accent}`,
  paddingLeft: vars.space[6],
  marginLeft: 0,
  marginRight: 0,
  marginTop: vars.space[6],
  marginBottom: vars.space[6],
  fontStyle: 'italic',
  color: vars.color.mutedForeground,
})

export const list = style({
  marginBottom: vars.space[6],
  paddingLeft: vars.space[6],
})

export const listItem = style({
  marginBottom: vars.space[2],
})

export const link = style({
  color: vars.color.accent,
  textDecoration: 'underline',
})

export const notFound = style({
  textAlign: 'center',
  padding: vars.space[12],
})

export const notFoundTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.foreground,
  marginBottom: vars.space[4],
})

export const notFoundText = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.mutedForeground,
})
