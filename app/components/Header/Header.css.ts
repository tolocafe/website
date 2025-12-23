import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: vars.color.primary,
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
})

export const inner = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `${vars.space[3]} ${vars.space[6]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space[4],
})

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[6],
  minWidth: 0,
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[4],
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
})

export const logoImg = style({
  height: '40px',
  width: 'auto',
})

export const links = style({
  display: 'none',
  alignItems: 'center',
  gap: vars.space[2],
  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255, 255, 255, 0.92)',
  textDecoration: 'none',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.full,
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    color: vars.color.white,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.white}`,
    outlineOffset: '2px',
  },
})

export const linkActive = style({
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  color: vars.color.white,
})

export const cta = style({
  display: 'none',
  '@media': {
    '(min-width: 768px)': {
      display: 'inline-flex',
    },
  },
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.secondary,
  color: vars.color.white,
  textDecoration: 'none',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  borderRadius: vars.radius.full,
  ':hover': {
    filter: 'brightness(1.05)',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.white}`,
    outlineOffset: '2px',
  },
})

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[3],
})

export const localeNav = style({
  display: 'flex',
  alignItems: 'center',
})

export const localeSelect = style({
  appearance: 'none',
  backgroundColor: vars.color.background,
  color: vars.color.primary,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  paddingRight: vars.space[8],
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  borderRadius: vars.radius.md,
  border: 'none',
  cursor: 'pointer',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%233D6039' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: `right ${vars.space[2]} center`,
  ':focus': {
    outline: `2px solid ${vars.color.background}`,
    outlineOffset: '2px',
  },
})

export const menuButton = style({
  display: 'inline-flex',
  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: vars.radius.full,
  border: '1px solid rgba(255, 255, 255, 0.25)',
  backgroundColor: 'transparent',
  color: vars.color.white,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.white}`,
    outlineOffset: '2px',
  },
})

export const mobileOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.55)',
  zIndex: 60,
})

export const mobilePanel = style({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: 'min(380px, 92vw)',
  backgroundColor: vars.color.primary,
  zIndex: 61,
  padding: vars.space[6],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[6],
})

export const mobileHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space[4],
})

export const mobileTitle = style({
  color: vars.color.white,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: '0.06em',
})

export const mobileClose = style({
  width: '40px',
  height: '40px',
  borderRadius: vars.radius.full,
  border: '1px solid rgba(255, 255, 255, 0.25)',
  backgroundColor: 'transparent',
  color: vars.color.white,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.color.white}`,
    outlineOffset: '2px',
  },
})

export const mobileLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
})

export const mobileLink = style([
  link,
  {
    fontSize: vars.fontSize.lg,
    padding: `${vars.space[3]} ${vars.space[4]}`,
    justifyContent: 'flex-start',
  },
])

export const mobileCta = style([
  cta,
  {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'center',
    padding: `${vars.space[3]} ${vars.space[4]}`,
    fontSize: vars.fontSize.base,
  },
])
