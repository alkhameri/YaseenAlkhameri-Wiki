import React from "react";
import { ImagePosition, JSONContent } from "@/lib/json-content";

export const researchContent: JSONContent = {
  title: "Research Work",
  subtitle: "Academic Research and Publications",
  description: "Research contributions and academic work",
  url: "/research",
  disambiguation:
    "This article covers the research work of [Aneesh Kumar](/). For his industry experience, see [Aneesh Kumar (Industry Work)](/industry-work).",
  sections: [
    {
      title: "Predicting Emergent Capabilities Using Sparse Features",
      description: (
        <>
          Aneesh Kumar is currently leading research on predicting the emergence
          of novel capabilities in <strong>large language models (LLMs)</strong>
          . This ongoing work investigates how abrupt, non-linear improvements
          in task performance—often termed <em>emergent behaviors</em>—can be
          anticipated rather than only observed post hoc. The project explores
          the role of <strong>sparse features</strong> and their coactivation
          patterns, constructing graphs from model checkpoints to identify
          structural signals that may precede emergent performance jumps.
          <br />
          <br />
          Still in development, this research aims to establish a
          mechanistically grounded, pre-hoc framework for studying emergence.
          The approach builds on prior work in sparse attention and{" "}
          <em>grokking</em>, but emphasizes predictive indicators rather than
          retrospective analysis. Kumar and collaborators are preparing a
          [NeurIPS](https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems)-style
          proposal that positions sparse feature coactivation as a promising
          direction for understanding and forecasting emergent phenomena in
          large-scale neural networks.
        </>
      ),
      image: {
        src: "/Algoverse-paper.png",
        alt: "Sparse feature visualization",
        caption: "Emergence in LLMs from Neural Scaling Laws",
        position: ImagePosition.RIGHT,
      },
    },
    {
      title:
        "Biological Timescale Synaptic Plasticity (BTSP) Independent Research",
      description: (
        <>
          Aneesh Kumar authored a comprehensive analysis of{" "}
          <strong>Behavioral Time-Scale Synaptic Plasticity (BTSP)</strong>, a
          neural mechanism that enables memory formation over multi-second
          intervals. His work provides a clear overview of BTSP’s biological
          foundations in the
          [hippocampus](https://en.wikipedia.org/wiki/Hippocampus), explaining
          how plateau potentials in [CA1 pyramidal
          neurons](https://en.wikipedia.org/wiki/Pyramidal_cell) gate windows of
          plasticity that allow temporally scattered activity to be linked. The
          writeup details how this mechanism differs from conventional learning
          rules such as [Hebbian
          learning](https://en.wikipedia.org/wiki/Hebbian_theory) and
          [STDP](https://en.wikipedia.org/wiki/Spike-timing-dependent_plasticity),
          highlighting its role in addressing the problem of temporal credit
          assignment.
          <br />
          <br />
          Beyond biological mechanisms, Kumar extends the discussion into
          computational and applied domains. He reproduces a computational model
          of BTSP using binary weights and stochastic update rules,
          demonstrating how the system achieves one-shot, content-addressable
          memory formation. The analysis further explores how BTSP could inform
          the design of [foundation
          models](https://en.wikipedia.org/wiki/Foundation_model) and
          [memory-augmented AI
          systems](https://en.wikipedia.org/wiki/Memory-augmented_neural_networks),
          proposing that BTSP-inspired architectures could enable more
          biologically plausible, context-sensitive forms of rapid learning.
          This dual perspective—bridging neuroscience and artificial
          intelligence—positions the work as both an explanatory resource and a
          forward-looking exploration of BTSP’s implications for computational
          models of learning.
        </>
      ),
      image: {
        src: "/btsp-preview.png",
        alt: "BTSP writeup preview",
        caption: "BTSP Writeup",
        position: ImagePosition.LEFT,
        link: "https://drive.google.com/file/d/1dOQOKhdXwFE195OMDPaQB8ppldkzHcSZ/view",
      },
    },
  ],
};
