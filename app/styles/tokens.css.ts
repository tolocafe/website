import {
  createGlobalTheme,
  createThemeContract,
  globalStyle,
  assignVars,
} from '@vanilla-extract/css'

/**
 * Design Tokens using vanilla-extract
 *
 * This file defines the design system tokens for colors, spacing, typography, etc.
 * Uses createGlobalTheme on :root for automatic system-preference-based theming.
 */

// Theme contract defines the structure of our theme tokens
export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    primary: null,
    primaryForeground: null,
    secondary: null,
    secondaryForeground: null,
    muted: null,
    mutedForeground: null,
    border: null,
    accent: null,
    accentForeground: null,
    // Overlay colors
    overlay: null,
    overlayText: null,
    overlayTextMuted: null,
    // Header/Footer specific
    headerBg: null,
    headerText: null,
    headerTextMuted: null,
    headerBorder: null,
  },
  font: {
    body: null,
    heading: null,
    mono: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
  },
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  lineHeight: {
    none: null,
    tight: null,
    normal: null,
    relaxed: null,
  },
  space: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    8: null,
    10: null,
    12: null,
    16: null,
    20: null,
    24: null,
  },
  radius: {
    none: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
})

// Shared non-color tokens (same for light and dark)
const sharedTokens = {
  font: {
    body: '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading:
      '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  radius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

// TOLO Brand Colors - Light theme (cream background)
const lightColors = {
  background: '#F5F0E8', // warm cream
  foreground: '#3D6039', // forest green
  primary: '#3D6039', // forest green
  primaryForeground: '#F5F0E8',
  secondary: '#1B4332', // forest green for contrast sections
  secondaryForeground: '#F5F0E8',
  muted: '#EDE8E0',
  mutedForeground: '#4A6B5D', // muted green
  border: '#D4CFC5',
  accent: '#C44536', // terracotta/burnt orange
  accentForeground: '#FFFFFF',
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayText: '#FFFFFF',
  overlayTextMuted: 'rgba(255, 255, 255, 0.9)',
  // Header/Footer - always forest green with white text
  headerBg: '#1B4332',
  headerText: '#FFFFFF',
  headerTextMuted: 'rgba(255, 255, 255, 0.7)',
  headerBorder: 'rgba(255, 255, 255, 0.2)',
}

// TOLO Brand Colors - Dark theme (same as light, TOLO brand is consistent)
const darkColors = {
  background: '#F5F0E8', // warm cream (same as light)
  foreground: '#1B4332', // forest green
  primary: '#1B4332', // forest green
  primaryForeground: '#F5F0E8',
  secondary: '#1B4332', // forest green for contrast sections
  secondaryForeground: '#F5F0E8',
  muted: '#EDE8E0',
  mutedForeground: '#4A6B5D', // muted green
  border: '#D4CFC5',
  accent: '#C44536', // terracotta/burnt orange
  accentForeground: '#FFFFFF',
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayText: '#FFFFFF',
  overlayTextMuted: 'rgba(255, 255, 255, 0.9)',
  // Header/Footer - always forest green with white text
  headerBg: '#1B4332',
  headerText: '#FFFFFF',
  headerTextMuted: 'rgba(255, 255, 255, 0.7)',
  headerBorder: 'rgba(255, 255, 255, 0.2)',
}

// Light theme shadows
const lightShadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
}

// Dark theme shadows (stronger for visibility on dark backgrounds)
const darkShadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
}

// Apply light theme to :root (default)
createGlobalTheme(':root', vars, {
  color: lightColors,
  shadow: lightShadows,
  ...sharedTokens,
})

// Apply dark theme when system prefers dark mode
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(vars, {
        color: darkColors,
        shadow: darkShadows,
        ...sharedTokens,
      }),
    },
  },
})

// Set color-scheme for proper browser UI (scrollbars, form controls, etc.)
globalStyle(':root', {
  colorScheme: 'light dark',
})
