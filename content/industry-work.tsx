import React from "react";
import { ImagePosition, JSONContent } from "@/lib/json-content";
import { Quote } from "@/components/WikiContent";

export const industryWorkContent: JSONContent = {
  title: "Industry Work",
  subtitle: "Professional Experience",
  description: "Professional experience and career highlights",
  url: "/industry-work",
  disambiguation:
    "This article covers the professional work experience of [Aneesh Kumar](/). For his personal projects, see [Aneesh Kumar (Projects)](/projects).",
  sections: [
    {
      title: "Platform Engineering Intern @ Quantifind",
      date: "May 2025-Ongoing",
      description: (
        <>
          As a <strong>Platform Engineering Intern at Quantifind</strong>,
          Aneesh Kumar contributes to building and maintaining the core
          infrastructure that underpins [Quantifind](https://en.wikipedia.org/wiki/Quantifind)'s AI systems. His work focuses on
          integrating APIs, managing data processing pipelines, and ensuring
          that large-scale AI services run efficiently and reliably. This role
          combines practical engineering with a deep curiosity about how systems
          operate at scale.
          <br />
          <Quote>
            "It taught me how much impact the 'invisible' parts of a system
            have." —Aneesh Kumar
          </Quote>
          Aneesh began his internship in Summer 2025 and was invited to continue
          through the Fall semester alongside his academic commitments. The
          experience has provided him with both technical depth in scalable
          infrastructure and insight into how platform engineering shapes the
          performance and impact of AI applications.
        </>
      ),
      image: {
        src: "/quantifind-logo.png",
        alt: "Quantifind logo",
        caption: "Quantifind - Risk Analytics and Consumer Insights",
        position: ImagePosition.LEFT,
      },
    },
    {
      title: "Software Engineering Intern @ Oracle",
      date: "May 2024-August 2024",
      description: (
        <>
          Oracle was Aneesh's first software engineering internship. He came on
          as a <strong>back-end software engineering intern</strong> but quickly
          transitioned to a <em>full-stack role</em>, working with databases and
          cloud services. Over the course of the internship, he learned how to
          manage projects and software on a large scale, with a great emphasis
          on communication and collaboration.
          <br />
          <br />
          One project he is particularly proud of is a full-stack module with a
          chatbot to fetch and analyze user data from natural language. He was
          the
          <strong> lead developer</strong> with his two teammates. They'd spend
          days scribbling on the whiteboards, iterating on the design. They
          developed an efficient AI inference pipeline to achieve their project
          objective with their limited compute resources.
          <br />
          <br />
          To conclude the internship, they pitched the idea to the team of
          <strong> 50+ engineers from 8+ time zones</strong>. During the course
          of the internship, he also earned a certification as an
          <em>
            {" "}
            [OCI Gen AI
            Professional](https://www.linkedin.com/in/aneesh6214/overlay/1718754842103/single-media-viewer/?profileId=ACoAAEAq4kQBGCRNPnthzAkHVfXIZHHy40dMA8Y)
          </em>{" "}
          (and a few more on cloud infrastructure), expanding on his technical
          knowledge. Despite the skills, the most invaluable thing he gained was
          the friendships and connections he made during his time at Oracle. The
          people he met and the experiences he had will stay with him for the
          rest of his life.
        </>
      ),
      technologies:
        "Python, GraphQL, FastAPI, TypeScript/JavaScript, React, OCI, Docker, Oracle Database",
      image: {
        src: "/oracle-logo.png",
        alt: "Oracle software development",
        caption: "Enterprise software development environment",
        position: ImagePosition.RIGHT,
      },
    },
  ],
};
