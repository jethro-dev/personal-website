// schemas/contentSection.js
export default {
  name: "experienceSection",
  title: "Experience Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "experience" }], // 'experience' should match the name of your Experience schema
        },
      ],
    },

    // You can add more fields specific to the content section as needed
  ],
};
