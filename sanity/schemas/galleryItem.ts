import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Theater', value: 'Theater' },
          { title: 'Film', value: 'Film' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order in gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
    },
  },
})
