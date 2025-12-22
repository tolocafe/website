import { style } from '@vanilla-extract/css'
import { vars } from '~/styles'

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space[3]} ${vars.space[6]}`,
  backgroundColor: vars.color.primary,
  borderBottom: 'none',
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
