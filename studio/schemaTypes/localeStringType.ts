import {defineType} from 'sanity'

/**
 * Supported languages for field-level translations
 * Matches the app's SUPPORTED_LOCALES
 */
const supportedLanguages = [
  {id: 'es', title: 'Español', isDefault: true},
  {id: 'en', title: 'English'},
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

/**
 * Localized string type for field-level translations
 * Creates an object with a field for each supported language
 */
export const localeStringType = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})

/**
 * Localized text type for longer content (textarea)
 */
export const localeTextType = defineType({
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    rows: 3,
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})

/**
 * Localized block content type for rich text
 */
export const localeBlockContentType = defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{type: 'block'}],
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})

/**
 * Localized slug type for SEO-friendly URLs in each language
 * Each language gets its own slug derived from its title
 */
export const localeSlugType = defineType({
  title: 'Localized slug',
  name: 'localeSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'slug',
    options: {
      source: (doc: Record<string, unknown>) => {
        const title = doc.title as Record<string, string> | undefined
        return title?.[lang.id] || ''
      },
    },
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})
