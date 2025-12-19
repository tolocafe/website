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

export const origin = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.secondary,
  fontWeight: vars.fontWeight.medium,
})

export const excerpt = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
  marginTop: vars.space[4],
})

export const imageWrapper = style({
  width: '100%',
  aspectRatio: '16 / 10',
  borderRadius: vars.radius['2xl'],
  overflow: 'hidden',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const detailsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
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
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  fontWeight: vars.fontWeight.semibold,
})

export const tastingSection = style({
  padding: vars.space[6],
  backgroundColor: vars.color.background,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border}`,
})

export const sectionTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space[3],
  color: vars.color.secondary,
})

export const tastingNotes = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
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
