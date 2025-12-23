import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'
import {baseLanguage} from './localeStringType'

/**
 * Promotion document type for special offers and campaigns
 * with field-level translations for name, excerpt, and body
 */
export const promotionType = defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'posterId',
      title: 'Poster ID',
      type: 'string',
      description: 'ID in Poster',
      validation: (rule) =>
        rule.required().custom(async (value, context) => {
          if (!value) return true
          const {document, getClient} = context
          const client = getClient({apiVersion: '2024-01-01'})
          const id = document?._id?.replace(/^drafts\./, '')
          const params = {posterId: value, id}
          const query = `count(*[_type == "promotion" && posterId == $posterId && !(_id in [$id, "drafts." + $id])])`
          const count = await client.fetch(query, params)
          return count === 0 || 'This Poster ID is already in use'
        }),
    }),
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localeText',
      description: 'A short summary of the promotion for previews',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
      description: 'Full promotion details',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
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
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `name.${baseLanguage?.id || 'es'}`,
      subtitle: `excerpt.${baseLanguage?.id || 'es'}`,
      images: 'images',
    },
    prepare({title, subtitle, images}) {
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        media: images?.[0],
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
  ],
})
