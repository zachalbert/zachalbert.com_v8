import { defineField, type Rule } from "sanity";

const project = {
  name: "writing",
  title: "Writings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "pinned",
      title: "Pinned",
      type: "boolean",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      validation: (Rule: Rule) => Rule.max(512),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        defineField({
          type: "code",
          name: "myCodeField",
          title: "My code field",
        }),
      ],
    },
  ],
};

export default project;
