import {
  localeStringType,
  localeTextType,
  localeBlockContentType,
  localeSlugType,
} from './localeStringType'
import {beanType} from './beanType'
import {pageType} from './pageType'
import {postType} from './postType'
import {productType} from './productType'

export const schemaTypes = [
  // Locale types
  localeStringType,
  localeTextType,
  localeBlockContentType,
  localeSlugType,
  // Document types
  beanType,
  pageType,
  postType,
  productType,
]
