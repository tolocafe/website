import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'
import {baseLanguage} from './localeStringType'

/**
 * Location document type for TOLO's physical locations
 * with field-level translations for name, description, and address
 */
export const locationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
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
      name: 'description',
      title: 'Description',
      type: 'localeBlockContent',
      description: 'Full description of the location',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'localeText',
      description: 'Full street address',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State/Province',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
      description: 'Geographic coordinates for map display',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'localeText',
      description: 'Operating hours (e.g., Mon-Fri: 8am-8pm)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Photo of the location',
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
      name: 'isMainLocation',
      title: 'Main Location',
      type: 'boolean',
      description: 'Mark this as the primary/flagship location',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: `name.${baseLanguage?.id || 'es'}`,
      city: 'city',
      media: 'image',
    },
    prepare({title, city, media}) {
      return {
        title: title || 'Untitled Location',
        subtitle: city || 'No city',
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
      title: 'City',
      name: 'cityAsc',
      by: [{field: 'city', direction: 'asc'}],
    },
  ],
})
