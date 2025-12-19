import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const main = style({
  minHeight: 'calc(100vh - 200px)',
  padding: `${vars.space[12]} ${vars.space[6]}`,
  backgroundColor: vars.color.background,
})

export const container = style({
  maxWidth: '900px',
  margin: '0 auto',
})

export const header = style({
  textAlign: 'center',
  marginBottom: vars.space[12],
})

export const heading = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.foreground,
  marginBottom: vars.space[4],
})

export const subtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.mutedForeground,
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[12],
})

export const comingSoonCard = style({
  backgroundColor: vars.color.secondary,
  borderRadius: vars.radius['2xl'],
  padding: vars.space[8],
  textAlign: 'center',
  border: `1px solid ${vars.color.border}`,
})

export const badge = style({
  display: 'inline-block',
  backgroundColor: vars.color.accent,
  color: vars.color.accentForeground,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space[4],
})

export const message = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.foreground,
  lineHeight: vars.lineHeight.relaxed,
  maxWidth: '600px',
  margin: '0 auto',
})

export const previewSection = style({
  textAlign: 'center',
})

export const previewTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginBottom: vars.space[8],
})

export const topicsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.space[6],
})

export const topicCard = style({
  backgroundColor: vars.color.background,
  borderRadius: vars.radius.xl,
  padding: vars.space[6],
  border: `1px solid ${vars.color.border}`,
  textAlign: 'left',
})

export const topicTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.accent,
  marginBottom: vars.space[2],
})

export const topicDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.mutedForeground,
  lineHeight: vars.lineHeight.relaxed,
})

// Post list styles
export const postsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[6],
})

export const postCard = style({
  display: 'flex',
  gap: vars.space[6],
  backgroundColor: vars.color.background,
  borderRadius: vars.radius['2xl'],
  padding: vars.space[6],
  border: `1px solid ${vars.color.border}`,
  textDecoration: 'none',
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
    },
  },
})

export const postImageWrapper = style({
  flexShrink: 0,
  width: '200px',
  height: '140px',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  '@media': {
    '(max-width: 640px)': {
      width: '100%',
      height: '180px',
    },
  },
})

export const postImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const postContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})

export const postTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  lineHeight: vars.lineHeight.tight,
})

export const postExcerpt = style({
  fontSize: vars.fontSize.base,
  color: vars.color.mutedForeground,
  lineHeight: vars.lineHeight.relaxed,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

export const postDate = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.mutedForeground,
  marginTop: 'auto',
})
