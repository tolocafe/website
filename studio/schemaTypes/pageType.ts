import {defineField, defineType} from 'sanity'
import {baseLanguage} from './localeStringType'

/**
 * Page document type for template pages (contact, about, legal, etc.)
 * Reusable structure with localized title, description, and body
 */
export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      description: 'Localized URL paths for SEO (e.g., "contacto" / "contact")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
      description: 'Brief description for SEO and page previews',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'showInNavigation',
      title: 'Show in Navigation',
      type: 'boolean',
      description: 'Display this page in the site navigation',
      initialValue: false,
    }),
    defineField({
      name: 'navigationOrder',
      title: 'Navigation Order',
      type: 'number',
      description: 'Order in navigation menu (lower = first)',
      hidden: ({document}) => !document?.showInNavigation,
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id || 'es'}`,
      slugEs: 'slug.es.current',
      slugEn: 'slug.en.current',
    },
    prepare({title, slugEs, slugEn}) {
      const slug = slugEs || slugEn
      return {
        title: title || 'Untitled',
        subtitle: slug ? `/${slug}` : 'No slug',
      }
    },
  },
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{field: `title.${baseLanguage?.id || 'es'}`, direction: 'asc'}],
    },
    {
      title: 'Navigation Order',
      name: 'navOrder',
      by: [{field: 'navigationOrder', direction: 'asc'}],
    },
  ],
})


