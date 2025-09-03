import React from "react";
import { JSONContent } from "@/lib/json-content";

export const blogContent: JSONContent = {
  title: "Blog",
  subtitle: "Technical Writing and Thoughts",
  description: "Personal blog and technical articles",
  url: "/blog",
  sections: [
    {
      title: "",
      description: (
        <>
          This blog is currently under development. It will feature technical
          articles, project insights, and thoughts on software engineering and
          technology trends.
          <br />
          <br />
          Planned content includes tutorials, architecture discussions, and
          lessons learned from various projects.
        </>
      ),
    },
  ],
};
