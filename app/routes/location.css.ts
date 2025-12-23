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

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[8],
})

export const header = style({
  marginBottom: vars.space[4],
})

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  marginBottom: vars.space[2],
  '@media': {
    '(max-width: 640px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
})

export const location = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.secondary,
  fontWeight: vars.fontWeight.medium,
})

export const imageWrapper = style({
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: vars.radius['2xl'],
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const body = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text,
})

export const heading2 = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.space[8],
  marginBottom: vars.space[4],
})

export const heading3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.space[6],
  marginBottom: vars.space[3],
})

export const paragraph = style({
  marginBottom: vars.space[4],
})

export const list = style({
  marginLeft: vars.space[6],
  marginBottom: vars.space[4],
})

export const listItem = style({
  marginBottom: vars.space[2],
})

export const detailsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.space[4],
  padding: vars.space[6],
  backgroundColor: vars.color.secondary,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
})

export const detailItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
})

export const detailLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  fontWeight: vars.fontWeight.medium,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

export const detailValue = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text,
  fontWeight: vars.fontWeight.normal,
  whiteSpace: 'pre-line',
})

export const detailLink = style({
  fontSize: vars.fontSize.base,
  color: vars.color.primary,
  fontWeight: vars.fontWeight.medium,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const mapWrapper = style({
  width: '100%',
  height: '400px',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  border: `1px solid ${vars.color.border}`,
})

export const map = style({
  width: '100%',
  height: '100%',
  border: 'none',
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

