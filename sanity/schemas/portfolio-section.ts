// schemas/contentSection.js
export default {
  name: "portfolioSection",
  title: "Portfolio Section",
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
      type: "string",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }], // 'project' should match the name of your Project schema
        },
      ],
    },
    // You can add more fields specific to the content section as needed
  ],
};
