import {
  localeStringType,
  localeTextType,
  localeBlockContentType,
  localeSlugType,
} from './localeStringType'
import {postType} from './postType'

export const schemaTypes = [
  // Locale types
  localeStringType,
  localeTextType,
  localeBlockContentType,
  localeSlugType,
  // Document types
  postType,
]
