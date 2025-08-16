import { ContentType, ImagePosition, JSONContent } from '@/lib/json-content'

export const industryWorkContent: JSONContent = {
  title: "Industry Work",
  subtitle: "Professional Experience",
  description: "Professional experience and career highlights",
  url: "/industry-work",
  disambiguation: "This article covers the professional work experience of [Aneesh Kumar](/). For his personal projects, see [Aneesh Kumar (Projects)](/projects).",
  sections: [
    {
      title: "Platform Engineering Intern @ Quantifind",
      date: "May 2022-Ongoing",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "Working as a Platform Engineering Intern at Quantifind, a leading provider of risk analytics and consumer insights solutions for financial services and retail industries."
        }
      ],
      image: {
        src: "/quantifind-logo.png",
        alt: "Quantifind logo",
        caption: "Quantifind - Risk Analytics and Consumer Insights",
        position: ImagePosition.LEFT
      }
    },
    {
      title: "Software Engineering Intern @ Oracle",
      date: "May 2021-August 2021",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "Worked as a Software Engineering Intern at Oracle, contributing to enterprise software solutions and database technologies."
        },
        {
          type: ContentType.PARAGRAPH,
          text: "Worked as a Software Engineering Intern at Oracle, contributing to enterprise software solutions and database technologies."
        }
      ],
      image: {
        src: "/oracle-logo.png",
        alt: "Oracle software development",
        caption: "Enterprise software development environment",
        position: ImagePosition.RIGHT
      }
    }
  ]
}