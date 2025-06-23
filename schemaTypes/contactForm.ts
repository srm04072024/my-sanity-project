import { Rule } from "sanity";

export default {
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().email().error("A valid email address is required"),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.optional()
          .min(1)
          .max(1000)
          .error("Message must be between 10 and 1000 characters"),
    },
  ],
};