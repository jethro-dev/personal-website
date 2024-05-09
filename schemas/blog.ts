// schemas/blog.ts
export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of the blog article",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of the your blog article",
      options: {
        source: "title",
      },
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "code",
          options: {
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "Python", value: "python" },
              { title: "C++", value: "cpp" },
              // add other languages here
            ],
          },
        },
      ],
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description: "Category under which the blog post falls",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for internal use to calculate related readings",
    },
  ],
};
