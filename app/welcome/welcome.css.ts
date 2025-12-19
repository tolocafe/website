import { style } from '@vanilla-extract/css'
import { vars } from '~/styles/tokens.css'

/**
 * Welcome component styles using vanilla-extract
 *
 * Coffee shop landing page styles with hero, about, and features sections.
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
  backgroundImage:
    "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const heroOverlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const heroContent = style({
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
  padding: vars.space[6],
  maxWidth: '800px',
})

export const heroTitle = style({
  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  marginBottom: vars.space[6],
  lineHeight: vars.lineHeight.tight,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

export const heroSubtitle = style({
  fontSize: vars.fontSize.xl,
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: vars.lineHeight.relaxed,
  maxWidth: '600px',
  margin: '0 auto',
  '@media': {
    '(max-width: 640px)': {
      fontSize: vars.fontSize.lg,
    },
  },
})

// Content Sections
export const section = style({
  padding: `${vars.space[20]} ${vars.space[6]}`,
  backgroundColor: vars.color.background,
})

export const sectionContent = style({
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
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
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
  '@media': {
    '(max-width: 640px)': {
      fontSize: vars.fontSize.base,
    },
  },
})

// Features Section
export const featuresSection = style({
  padding: `${vars.space[20]} ${vars.space[6]}`,
  backgroundColor: vars.color.primary,
})

export const featuresSectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
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

export const featureCard = style({
  backgroundColor: vars.color.background,
  padding: vars.space[8],
  borderRadius: vars.radius['2xl'],
  textAlign: 'center',
})

export const featureIcon = style({
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: vars.space[4],
  backgroundColor: vars.color.secondary,
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
