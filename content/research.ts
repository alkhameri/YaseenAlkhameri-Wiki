import { ContentType, ImagePosition, JSONContent } from '@/lib/json-content'

export const researchContent: JSONContent = {
  title: "Research Work",
  subtitle: "Academic Research and Publications",
  description: "Research contributions and academic work",
  url: "/research",
  disambiguation: "This article covers the research work of [Aneesh Kumar](/). For his industry experience, see [Aneesh Kumar (Industry Work)](/industry-work).",
  sections: [
    {
      title: "Predicting Emergent Capabilities Using Sparse Features",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "Research on understanding and predicting emergent capabilities in machine learning models through sparse feature analysis and interpretability techniques."
        }
      ],
      image: {
        src: "/placeholder.jpg",
        alt: "Sparse feature visualization",
        caption: "Feature analysis and model interpretation",
        position: ImagePosition.RIGHT
      }
    },
    {
      title: "Biological Timescale Synaptic Plasticity (BTSP) Independent Research",
      content: [
        {
          type: ContentType.PARAGRAPH,
          text: "Comprehensive analysis of biological timescale synaptic plasticity mechanisms and their implications for neural computation and learning."
        }
      ],
      image: {
        src: "/btsp-preview.png",
        alt: "BTSP writeup preview",
        caption: "BTSP Writeup",
        position: ImagePosition.LEFT,
        link: "https://drive.google.com/file/d/1dOQOKhdXwFE195OMDPaQB8ppldkzHcSZ/view"
      }
    }
  ]
}