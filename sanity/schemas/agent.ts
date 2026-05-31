import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Agency Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'building',
      title: 'Building',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'fax',
      title: 'Fax',
      type: 'string',
    }),
  ],
})
