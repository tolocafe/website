import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'
import {baseLanguage} from './localeStringType'

/**
 * Bean document type for TOLO's coffee beans
 * with field-level translations for name, origin, region,
 * varietal, process, and tasting notes
 */
export const beanType = defineType({
  name: 'bean',
  title: 'Bean',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      description: 'URL-friendly identifier for each language',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'localeString',
      description: 'Country or area of origin (e.g., Ethiopia, Colombia)',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'localeString',
      description: 'Specific region within the origin (e.g., Yirgacheffe, Huila)',
    }),
    defineField({
      name: 'varietal',
      title: 'Varietal',
      type: 'localeString',
      description: 'Coffee variety (e.g., Bourbon, Gesha, Typica)',
    }),
    defineField({
      name: 'altitude',
      title: 'Altitude',
      type: 'number',
      description: 'Growing altitude in meters above sea level (MASL)',
      validation: (rule) => rule.min(0).max(3000),
    }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'localeString',
      description: 'Processing method (e.g., Washed, Natural, Honey)',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localeText',
      description: 'A short summary of the bean for previews',
    }),
    defineField({
      name: 'tastingNotes',
      title: 'Tasting Notes',
      type: 'localeText',
      description: 'Flavor profile and tasting notes',
    }),
    defineField({
      name: 'agtron',
      title: 'Agtron',
      type: 'number',
      description: 'Roast color measurement (0-100, lower = darker)',
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: 'regionImage',
      title: 'Region Image',
      type: 'image',
      description: 'Photo of the coffee growing region',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'localeString',
          description: 'Important for accessibility and SEO',
        }),
      ],
    }),
    defineField({
      name: 'varietalImage',
      title: 'Varietal Image',
      type: 'image',
      description: 'Photo of the coffee varietal/cherries',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'localeString',
          description: 'Important for accessibility and SEO',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: `name.${baseLanguage?.id || 'es'}`,
      origin: `origin.${baseLanguage?.id || 'es'}`,
      media: 'regionImage',
    },
    prepare({title, origin, media}) {
      return {
        title: title || 'Untitled Bean',
        subtitle: origin || 'No origin',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{field: `name.${baseLanguage?.id || 'es'}`, direction: 'asc'}],
    },
    {
      title: 'Name Z-A',
      name: 'nameDesc',
      by: [{field: `name.${baseLanguage?.id || 'es'}`, direction: 'desc'}],
    },
    {
      title: 'Altitude (High to Low)',
      name: 'altitudeDesc',
      by: [{field: 'altitude', direction: 'desc'}],
    },
  ],
})



