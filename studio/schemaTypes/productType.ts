import { defineField, defineType } from 'sanity'
import { BasketIcon } from '@sanity/icons'
import { baseLanguage } from './localeStringType'

/**
 * Product document type for menu items/drinks
 * with field-level translations for name, excerpt, body, and recipe
 */
export const productType = defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	icon: BasketIcon,
	fields: [
		defineField({
			name: 'posterId',
			title: 'Poster ID',
			type: 'string',
			description: 'ID in Poster',
			validation: (rule) =>
				rule.required().custom(async (value, context) => {
					if (!value) return true
					const { document, getClient } = context
					const client = getClient({ apiVersion: '2024-01-01' })
					const id = document?._id?.replace(/^drafts\./, '')
					const params = { posterId: value, id }
					const query = `count(*[_type == "product" && posterId == $posterId && !(_id in [$id, "drafts." + $id])])`
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
			name: 'tag',
			title: 'Tag',
			type: 'string',
			description: 'Optional label for menu items',
			options: {
				list: [
					{ title: 'Seasonal', value: 'SEASONAL' },
					{ title: 'Favorite', value: 'FAVORITE' },
					{ title: 'New', value: 'NEW' },
					{ title: 'Special', value: 'SPECIAL' },
				],
			},
		}),
		defineField({
			name: 'excerpt',
			title: 'Small Description',
			type: 'localeText',
			description: 'A short summary for previews and cards',
		}),
		defineField({
			name: 'body',
			title: 'Description',
			type: 'localeBlockContent',
			description: 'Full product description',
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
		defineField({
			name: 'intensity',
			title: 'Intensity',
			type: 'number',
			description: 'Intensity level (1-5)',
			validation: (rule) => rule.min(1).max(5).integer(),
		}),
		defineField({
			name: 'caffeine',
			title: 'Caffeine',
			type: 'number',
			description: 'Caffeine level (1-5)',
			validation: (rule) => rule.min(1).max(5).integer(),
		}),
		defineField({
			name: 'volume',
			title: 'Volume',
			type: 'number',
			description: 'Volume in milliliters (ml)',
			validation: (rule) => rule.min(0),
		}),
		defineField({
			name: 'calories',
			title: 'Calories',
			type: 'number',
			description: 'Calories per serving',
			validation: (rule) => rule.min(0),
		}),
		defineField({
			name: 'recipe',
			title: 'Recipe',
			type: 'localeBlockContent',
			description: 'Ingredients and preparation instructions',
		}),
	],
	preview: {
		select: {
			title: `name.${baseLanguage?.id || 'es'}`,
			subtitle: `excerpt.${baseLanguage?.id || 'es'}`,
			images: 'images',
		},
		prepare({ title, subtitle, images }) {
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
			by: [{ field: `name.${baseLanguage?.id || 'es'}`, direction: 'asc' }],
		},
		{
			title: 'Name Z-A',
			name: 'nameDesc',
			by: [{ field: `name.${baseLanguage?.id || 'es'}`, direction: 'desc' }],
		},
	],
})
