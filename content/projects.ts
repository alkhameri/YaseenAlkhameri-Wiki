import { ContentType, JSONContent } from '@/lib/json-content'

export const projectsContent: JSONContent = {
  title: "Projects",
  subtitle: "Portfolio and Work",
  description: "Collection of personal and professional projects",
  url: "/projects",
  sections: [
    {
      title: "Project 1",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "A comprehensive web application showcasing modern development practices and user experience design."
        }
      ]
    },
    {
      title: "Project 2",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "An innovative tool for data visualization and analysis with real-time processing capabilities."
        }
      ]
    },
    {
      title: "Project 3",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "A mobile-first application focused on productivity and collaboration features."
        }
      ]
    },
    {
      title: "Project 4",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "An experimental implementation exploring machine learning algorithms and their practical applications."
        }
      ]
    },
    {
      title: "Project 5",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "A full-stack solution integrating multiple APIs and services for seamless user workflow."
        }
      ]
    }
  ]
}