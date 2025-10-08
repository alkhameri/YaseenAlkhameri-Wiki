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
      githubUrl: "https://github.com/alkhameri/riscv-core",
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
      title: "dExtra Tools — Dex Browser Agent Extensions",
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
      title: "AggieShare — HackDavis 2025",
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
