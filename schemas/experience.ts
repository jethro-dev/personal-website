// schemas/experience.ts
export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of the experience",
    },
    {
      name: "description",
      type: "string",
      title: "Short description of the experience",
    },
    {
      name: "organisation",
      type: "string",
      title: "Organisation",
    },
    {
      name: "startDate",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "endDate",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
    {
      name: "is_present",
      title: "Is present?",
      type: "boolean",
      description: "Check this if the experience is currently ongoing.",
      defaultValue: false,
    },
  ],
};
