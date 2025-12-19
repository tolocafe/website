import { createClient } from '@sanity/client'
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'

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
