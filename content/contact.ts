import { ContentType, JSONContent } from '@/lib/json-content'

export const contactContent: JSONContent = {
  title: "Contact",
  subtitle: "Get in Touch",
  description: "Contact information and ways to connect",
  url: "/contact",
  sections: [
    {
      title: "",
      content: [
        {
          type: ContentType.CONTACT_INFO,
          email: "aneesh.kumar6214@gmail.com",
          socialLinks: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/in/aneesh6214",
              username: "aneesh6214"
            },
            {
              platform: "GitHub",
              url: "https://github.com/aneesh6214",
              username: "aneesh6214"
            },
            {
              platform: "Twitter",
              url: "https://twitter.com/aneesh6214",
              username: "@aneesh6214"
            },
            {
              platform: "Youtube",
              url: "https://www.youtube.com/@Aneesh6214",
              username: "@Aneesh6214"
            }
          ]
        }
      ]
    }
  ]
}