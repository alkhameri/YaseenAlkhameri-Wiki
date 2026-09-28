import type { ContentSection } from "@/lib/json-content";

export const papers: ContentSection[] = [
  {
    id: "moesi-d",
    title: "MOESI-D: A Persistent Sole-Writer Cache-Coherence State for Commutative No-Return Atomics",
    date: "2026",
    authors: ["Manav Sharma", "Yaseen Alkhameri"],
    status: "Working paper",
    featured: true,
    description:
      "Implements and evaluates a Delegated (D) cache-coherence state in gem5 for commutative, no-return atomic updates. The simulation study compares controller-side delegation with conventional atomics, flat combining, and privatization, examining cache-line migration, execution time, and interconnect traffic. Builds on the earlier SpMV and graph coherence study.",
    technologies: "Cache coherence, gem5, Computer architecture, Atomic operations, Memory systems",
    websiteUrl: "/papers/moesi-d-cache-coherence.pdf",
    githubUrl: "https://github.com/msharma2026/MOESI-D-Architecture",
  },
  {
    id: "cache-coherence-gem5",
    title: "Cache Coherence Protocols on Sparse-Matrix Vector Multiplication (SpMV) and Graphs in GEM5",
    date: "2026",
    authors: ["Kevin Le", "Kilho Chang", "Vivian Ly Nguyen", "Yaseen Alkhameri"],
    status: "Unpublished",
    featured: true,
    description:
      "Compares MI, MESI, and MOESI directory-based cache-coherence protocols in gem5 Ruby using sparse matrix–vector multiplication and breadth-first search across 2, 4, and 8 cores. The study examines ownership requests, invalidation-related activity, and cache-to-cache forwarding under irregular memory access. In this report, the ‘Delegated’ state is a conceptual proposal, not an implemented or validated protocol; the later MOESI-D working paper explores its implementation.",
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
    "Working papers and academic project reports coauthored by Yaseen Alkhameri. These works are shared for reading and are not peer-reviewed journal or conference publications.",
  subsections: papers,
};
