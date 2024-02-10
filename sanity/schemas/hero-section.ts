// schemas/hero-section.js
export default {
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    },
    // You can add more fields specific to the hero section as needed
  ],
};
