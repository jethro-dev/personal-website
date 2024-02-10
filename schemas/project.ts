// schemas/blog.ts
export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the project",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of the your project",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "is_public",
      title: "Is this project public",
      type: "boolean",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
};
