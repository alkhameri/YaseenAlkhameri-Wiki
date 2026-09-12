import type { ContentSection, JSONContent } from "@/lib/json-content";
import { yaseenInfobox } from "./profile-infobox";

export const papers: ContentSection[] = [
  {
    id: "cache-coherence-gem5",
    title: "Cache Coherence Protocols on Sparse-Matrix Vector Multiplication (SpMV) and Graphs in GEM5",
    date: "2026",
    authors: ["Kevin Le", "Kilho Chang", "Vivian Ly Nguyen", "Yaseen Alkhameri"],
    status: "Unpublished",
    featured: true,
    description:
      "Compares MI, MESI, and MOESI directory-based cache-coherence protocols in gem5 Ruby using sparse matrix–vector multiplication and breadth-first search across 2, 4, and 8 cores. The study examines ownership requests, invalidation-related activity, and cache-to-cache forwarding under irregular memory access. It also proposes a conceptual ‘Delegated’ state for highly contended cache lines; this remains future work, not an implemented or validated protocol.",
    technologies: "Cache coherence, gem5, Computer architecture, SpMV, Graph workloads",
    websiteUrl: "/papers/cache-coherence-spmv-graphs-gem5.pdf",
  },
  {
    id: "real-time-object-detection-fpga",
    title: "Real-Time Object Detection on FPGA using Matched Filtering",
    date: "2026",
    authors: ["Yaseen Alkhameri", "Ricardo Gonzales", "Justin Hsu", "Max Madrigal", "Isidro Pulido"],
    status: "Unpublished",
    description:
      "Documents a streaming object detector on the DE1-SoC FPGA, combining D8M camera input, Gaussian smoothing, Sobel edge extraction, sparse matched filtering, and VGA visualization. The report covers hardware tradeoffs, module-level verification, and on-board evaluation, reporting 59.5 FPS. Yaseen contributed to the final matched-filter score tree, Sobel-based edge detection, and thresholding logic.",
    technologies: "FPGA, Verilog, Matched filtering, Computer vision, Verification",
    websiteUrl: "/papers/real-time-object-detection-fpga.pdf",
    githubUrl: "https://github.com/EEC193-DigitalDesign/matched-filter",
  },
];

export const papersSection: ContentSection = {
  id: "papers",
  title: "Papers",
  group: "papers",
  description:
    "Unpublished academic papers and project reports coauthored at UC Davis. These works are shared for reading and are not journal or conference publications.",
  subsections: papers,
};

export const papersContent: JSONContent = {
  title: "Papers",
  description: "Unpublished papers on cache coherence, computer architecture, and FPGA object detection by Yaseen Alkhameri and collaborators",
  url: "/papers",
  disambiguation: "This article lists unpublished work coauthored by [Yaseen Alkhameri](/). For implementations, see [Projects](/projects); for professional experience, see [Career](/career).",
  infobox: yaseenInfobox,
  infoboxTitle: "Yaseen Alkhameri",
  sections: [papersSection],
};
