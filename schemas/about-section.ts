// schemas/contentSection.js
export default {
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tldr",
      title: "TLDR",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "text",
              title: "Text",
              type: "text",
            },
            // Add more fields as needed
          ],
        },
      ],
    },
    // You can add more fields specific to the content section as needed
  ],
};
