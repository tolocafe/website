import { createClient } from '@sanity/client'
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'
import type { Locale } from './locale'

/**
 * Sanity client configuration
 */
export const client = createClient({
  projectId: 'm1zo6pvi',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const { projectId, dataset } = client.config()

/**
 * Generate image URLs from Sanity image assets
 */
export function urlFor(source: SanityImageSource) {
  if (!projectId || !dataset) return null
  return createImageUrlBuilder({ projectId, dataset }).image(source)
}

// Shared types for localized content
export interface LocaleString {
  es?: string
  en?: string
  de?: string
  fr?: string
  ja?: string
}

export interface LocaleSlug {
  es?: { current: string }
  en?: { current: string }
  de?: { current: string }
  fr?: { current: string }
  ja?: { current: string }
}

export interface LocaleBlockContent {
  es?: unknown[]
  en?: unknown[]
  de?: unknown[]
  fr?: unknown[]
  ja?: unknown[]
}

export interface SanityImage {
  asset: { _ref: string }
  alt?: string
}

export interface Post {
  _id: string
  _updatedAt?: string
  name: LocaleString
  slug: LocaleSlug
  publishedAt: string
  excerpt?: LocaleString
  body?: LocaleBlockContent
  image?: SanityImage
}

export interface Page {
  _id: string
  _updatedAt?: string
  name: LocaleString
  slug: LocaleSlug
  description?: LocaleString
  body?: LocaleBlockContent
  showInNavigation?: boolean
  navigationOrder?: number
}

export interface Bean {
  _id: string
  _updatedAt?: string
  name: LocaleString
  slug: LocaleSlug
  origin?: LocaleString
  region?: LocaleString
  producer?: LocaleString
  varietal?: LocaleString
  altitude?: number
  process?: LocaleString
  excerpt?: LocaleString
  tastingNotes?: LocaleString
  agtron?: number
  regionImage?: SanityImage
  varietalImage?: SanityImage
}

export interface Location {
  _id: string
  _updatedAt?: string
  name: LocaleString
  slug: LocaleSlug
  description?: LocaleBlockContent
  address?: LocaleString
  city: string
  state?: string
  country: string
  postalCode?: string
  coordinates?: { lat: number; lng: number }
  phone?: string
  email?: string
  hours?: LocaleString
  image?: SanityImage
  isMainLocation?: boolean
}

/**
 * Get localized string value with fallback to Spanish
 */
export function getLocalizedString(
  field: LocaleString | undefined,
  locale: Locale,
  fallback = '',
): string {
  return field?.[locale] || field?.es || fallback
}

/**
 * Get localized slug with fallback to Spanish
 */
export function getLocalizedSlug(
  slug: LocaleSlug | undefined,
  locale: Locale,
): string | undefined {
  return slug?.[locale]?.current || slug?.es?.current
}

/**
 * Format date for display based on locale
 */
export function formatDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(
    locale === 'es' ? 'es-MX' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  )
}
