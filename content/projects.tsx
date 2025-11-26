import React from "react";
import { JSONContent, ImagePosition } from "@/lib/json-content";

export const projectsContent: JSONContent = {
  title: "Projects",
  subtitle: "Portfolio and Work",
  description: "Collection of personal and professional projects",
  url: "/projects",
  sections: [
    {
      title: "Compact RISC-V Core (Verilog)",
      githubUrl: "https://github.com/alkhameri/riscv-core-verilog",
      image: {
        src: "/GDSLayout.png",
        alt: "RISC-V core block diagram",
        caption: "RV32I-style core: RTL → FPGA → OpenLane GDS",
        position: ImagePosition.RIGHT,
      },
      description: (
        <>
          A compact, synthesizable RV32I-style RISC‑V core implemented in
          Verilog. The design contains a simple program counter, register
          file, ALU, control unit, and synchronous instruction/data memories
          designed to infer Intel M9K BRAMs. The repository includes
          reusable RTL components (muxes, adders), a small testbench suite
          compatible with ModelSim and Verilator, and documentation for
          Quartus-based FPGA builds.
          <br />
          <br />
          Verification used directed testbenches and waveform inspection to
          validate instruction execution. An OpenLane flow was used to
          generate a GDS II layout, demonstrating an end-to-end path from
          RTL to a fabrication-ready layout.
        </>
      ),
    },
    {
      title: "Real-Time Hardware Video Processing System",
      date: "In Progress",
      image: {
        src: "/altera.png",
        alt: "Real-time hardware video processing system",
        caption: "Real-time hardware video processing system on Terasic DE1-SoC",
        position: ImagePosition.RIGHT,
      },
      description: (
        <>
          A real-time hardware video processing system implemented on the
          Terasic DE1-SoC board using a D8M-GPIO camera and VGA video
          interface. The project includes multiple video processing functions
          implemented in Verilog, with a focus on pipelined architectures,
          memory management, and hardware optimization.
          <br />
          <br />
          The system implements an "old film" effect processor using
          grayscale conversion, random vertical black lines, random black
          splotches, and original effects implemented with LFSR-based random
          number generation. It also includes convolutional
          2-dimensional blurring filters with 3×3 and 11×11 kernel sizes,
          designed to process video at real-time frame rates.
          <br />
          <br />
          The project emphasizes baremetal C programming on the embedded HPS
          processor for bit-accurate software implementations, alongside
          comprehensive Verilog testbenches and golden reference models. Design
          work includes detailed pipelined block diagrams, timing analysis,
          arithmetic optimization, and performance characterization through
          maximum clock rate, throughput, and latency measurements.
        </>
      ),
      technologies: "Verilog, Quartus, ModelSim, DE1-SoC, VGA, D8M-GPIO, Baremetal C, HPS",
    },
    {
      title: "dExtra Tools - Dex Browser Agent Extensions",
      githubUrl: "https://github.com/aneesh6214/Browser-MCP-Automation",
      description: (
        <>
          Built during AgentHacks with teammates, dExtra Tools extends the
          Dex browser agent by adding a Working Memory system, a Planning
          Agent, and a Frontend-WebSocket bridge (get_selected_text). The
          system integrates with an MCP backend and enables deeper, real-time
          browser interaction for agent workflows. Won Dex Best Browser Agent
          at AgentHacks.
        </>
      ),
    },
    {
      title: "AggieShare - HackDavis 2025",
      githubUrl: "https://lnkd.in/gGjssVrv",
      description: (
        <>
          AggieShare is a community-driven app to reduce waste during student
          move-out by connecting donors with students in need. Built with
          React, MongoDB, Cloudinary, and large-model assisted features, the
          project won Hacker's Choice at HackDavis 2025.
        </>
      ),
    },
  ],
};
