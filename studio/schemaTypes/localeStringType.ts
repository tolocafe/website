import {defineType} from 'sanity'

const supportedLanguages = [
  {id: 'es', title: 'Español', isDefault: true},
  {id: 'en', title: 'English'},
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)

const translationsFieldset = {
  title: 'Translations',
  name: 'translations',
  options: {collapsible: true},
}

/**
 * Creates a localized type with fields for each language
 */
function createLocaleType(
  name: string,
  title: string,
  fieldType: string,
  fieldOptions?: Record<string, unknown>,
) {
  return defineType({
    name,
    title,
    type: 'object',
    fieldsets: [translationsFieldset],
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: fieldType,
      ...fieldOptions,
      fieldset: lang.isDefault ? undefined : 'translations',
    })),
  })
}

export const localeStringType = createLocaleType('localeString', 'Localized string', 'string')

export const localeTextType = createLocaleType('localeText', 'Localized text', 'text', {rows: 3})

export const localeBlockContentType = createLocaleType(
  'localeBlockContent',
  'Localized block content',
  'array',
  {of: [{type: 'block'}]},
)

export const localeSlugType = defineType({
  name: 'localeSlug',
  title: 'Localized slug',
  type: 'object',
  fieldsets: [translationsFieldset],
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
