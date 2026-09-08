import type { JSONContent } from "@/lib/json-content";
import { yaseenInfobox } from "./profile-infobox";

export const amaPageCopy = {
  questionPlaceholder: "Ask a question",
  submitLabel: "Ask a question",
  anonymousNotice: "Questions are submitted anonymously. Only questions that receive a response are published here.",
  submittedMessage: "Question submitted.",
  errors: {
    empty: "Please enter a question before submitting.",
    tooLong: "Please keep the question under 1000 characters.",
    unavailable: "Question submission is temporarily unavailable.",
  },
  archiveUnavailable: "The answered question archive is temporarily unavailable.",
  emptyArchive: "No answered questions have been published yet.",
  answeredFallbackTitle: "Answered Questions",
};

export const amaContent: JSONContent = {
  title: "Ask Me Anything",
  description: "Anonymous questions and published answers from Yaseen Alkhameri",
  url: "/ama",
  disambiguation: "This article is for anonymous questions and published answers. For general information about Yaseen Alkhameri, see [Yaseen Alkhameri](/).",
  infobox: yaseenInfobox,
  infoboxTitle: "Yaseen Alkhameri",
  sections: [
    { id: "ask-a-question", title: "Ask a Question", description: "Anonymous questions about hardware, firmware, projects, and more." },
    { id: "answered-questions", title: "Answered Questions", description: "Published questions and answers, newest first." },
  ],
};
