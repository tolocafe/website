import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'
import { baseLanguage } from './localeStringType'

/**
 * Event document type for community events, workshops, and special occasions
 * with field-level translations for name, excerpt, and body
 */
export const eventType = defineType({
	name: 'event',
	title: 'Event',
	type: 'document',
	icon: CalendarIcon,
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
			name: 'excerpt',
			title: 'Excerpt',
			type: 'localeText',
			description: 'A short summary of the event for previews and cards',
			validation: (rule) => rule.max(200),
		}),
		defineField({
			name: 'body',
			title: 'Description',
			type: 'localeBlockContent',
			description: 'Full event description with details',
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
			name: 'startDate',
			title: 'Start Date',
			type: 'datetime',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'endDate',
			title: 'End Date',
			type: 'datetime',
			description: 'Optional end date for multi-day events',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'reference',
			to: [{ type: 'location' }],
			description: 'Reference to a location document',
		}),
		defineField({
			name: 'maxAttendees',
			title: 'Maximum Attendees',
			type: 'number',
			description: 'Optional maximum number of attendees',
			validation: (rule) => rule.min(1).integer(),
		}),
		defineField({
			name: 'registrationUrl',
			title: 'Registration URL',
			type: 'url',
			description: 'External link for event registration',
		}),
		defineField({
			name: 'isFeatured',
			title: 'Featured Event',
			type: 'boolean',
			description: 'Display this event prominently',
			initialValue: false,
		}),
		defineField({
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: [
					{ title: 'Upcoming', value: 'upcoming' },
					{ title: 'Ongoing', value: 'ongoing' },
					{ title: 'Completed', value: 'completed' },
					{ title: 'Cancelled', value: 'cancelled' },
				],
			},
			initialValue: 'upcoming',
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: `name.${baseLanguage?.id || 'es'}`,
			subtitle: 'startDate',
			media: 'images.0',
			status: 'status',
		},
		prepare({ title, subtitle, media, status }) {
			const date = subtitle ? new Date(subtitle).toLocaleDateString('es-MX') : 'No date'
			const statusEmoji = {
				upcoming: '📅',
				ongoing: '🔴',
				completed: '✅',
				cancelled: '❌',
			}[status || 'upcoming']

			return {
				title: title || 'Untitled Event',
				subtitle: `${statusEmoji} ${date}`,
				media,
			}
		},
	},
	orderings: [
		{
			title: 'Start Date (Newest)',
			name: 'startDateDesc',
			by: [{ field: 'startDate', direction: 'desc' }],
		},
		{
			title: 'Start Date (Oldest)',
			name: 'startDateAsc',
			by: [{ field: 'startDate', direction: 'asc' }],
		},
		{
			title: 'Name A-Z',
			name: 'nameAsc',
			by: [{ field: `name.${baseLanguage?.id || 'es'}`, direction: 'asc' }],
		},
	],
})
