import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const main = style({
  minHeight: 'calc(100vh - 200px)',
  padding: `${vars.space[12]} ${vars.space[6]}`,
  backgroundColor: vars.color.background,
})

export const container = style({
  maxWidth: '1100px',
  margin: '0 auto',
})

export const header = style({
  textAlign: 'center',
  marginBottom: vars.space[12],
})

export const heading = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.space[4],
})

export const subtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text,
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[12],
})

export const beansGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: vars.space[6],
})

export const beanCard = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.background,
  borderRadius: vars.radius['2xl'],
  border: `1px solid ${vars.color.border}`,
  overflow: 'hidden',
  textDecoration: 'none',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.1)`,
  },
})

export const beanImageWrapper = style({
  width: '100%',
  aspectRatio: '4 / 3',
  overflow: 'hidden',
})

export const beanImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const beanContent = style({
  padding: vars.space[6],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})

export const beanName = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text,
  lineHeight: vars.lineHeight.tight,
})

export const beanOrigin = style({
  fontSize: vars.fontSize.base,
  color: vars.color.secondary,
  fontWeight: vars.fontWeight.medium,
})

export const beanExcerpt = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

export const beanMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space[3],
  marginTop: vars.space[2],
})

export const beanDetail = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  padding: `${vars.space[1]} ${vars.space[3]}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
})

export const emptyState = style({
  textAlign: 'center',
  padding: vars.space[12],
  backgroundColor: vars.color.secondary,
  borderRadius: vars.radius['2xl'],
  border: `1px solid ${vars.color.border}`,
})

export const emptyTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.space[4],
})

export const emptyMessage = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
  maxWidth: '500px',
  margin: '0 auto',
})


