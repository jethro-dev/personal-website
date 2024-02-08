// schemas/blog.ts
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'smallDescription',
      type: 'string',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
