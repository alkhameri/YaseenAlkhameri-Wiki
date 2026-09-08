import React from "react";
import { JSONContent, ImagePosition } from "@/lib/json-content";

export const projectsContent: JSONContent = {
  title: "Projects",
  subtitle: "Portfolio and Work",
  description: "Collection of personal and professional projects",
  url: "/projects",
  sections: [
    {
      title: "Real-Time FPGA Matched-Filter Object Detector",
      githubUrl: "https://github.com/EEC193-DigitalDesign/matched-filter",
      image: {
        src: "/matched-filter-overlay.png",
        alt: "Matched-filter object detector debug overlay",
        caption: "Template overlay generated for matched-filter hardware weights",
        position: ImagePosition.RIGHT,
      },
      description: (
        <>
          Yaseen built a real-time <a href="https://en.wikipedia.org/wiki/Matched_filter" target="_blank" rel="noopener noreferrer">matched-filter</a>
          <span> </span>object detector on the Terasic DE1-SoC using a D8M
          camera input and <a href="https://en.wikipedia.org/wiki/Video_Graphics_Array" target="_blank" rel="noopener noreferrer">VGA</a>
          <span> </span>output. Its Verilog pipeline combines streaming line
          buffers, matched-filter cores, and hardware cross-correlation against
          custom template weights generated in Python. VGA debug modes show
          heatmaps, threshold masks, bounding boxes, and confidence scores;
          testbenches verify feature extraction, stream delays, scoring, and
          detection logic.
        </>
      ),
      technologies:
        "Verilog, SystemVerilog, Python, Quartus, ModelSim, DE1-SoC, D8M Camera, VGA, FPGA Video Pipelines",
    },
    {
      title: "Compact RISC-V Core (Verilog)",
      githubUrl: "https://github.com/alkhameri/riscv-core-verilog",
      image: {
        src: "/GDSLayout.png",
        alt: "RISC-V core GDS layout",
        caption: "RV32I-style core: RTL to FPGA to OpenLane GDS",
        position: ImagePosition.LEFT,
      },
      description: (
        <>
          Yaseen designed a compact, synthesizable RV32I-style
          <span> </span><a href="https://en.wikipedia.org/wiki/RISC-V" target="_blank" rel="noopener noreferrer">RISC-V</a>
          <span> </span>core implemented in <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">Verilog</a>.
          It includes a program counter, register file, ALU, control unit, and
          synchronous instruction/data memories targeting Intel M9K BRAMs.
          He verified functionality with Verilog and C/C++ testbenches in
          ModelSim and Verilator, then used
          <a href="https://openlane.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"> OpenLane</a>
          <span> </span>for ASIC synthesis, floorplanning, placement, clock-tree
          synthesis, routing, and timing closure through GDS II generation.
        </>
      ),
      technologies: "Verilog, RISC-V, ModelSim, Verilator, Quartus, OpenLane",
    },
    {
      title: "RV32 Microkernel",
      githubUrl: "https://github.com/alkhameri/rv32-microkernel",
      image: {
        src: "/kernel.png",
        alt: "RV32 Microkernel architecture",
        caption: "RV32 Microkernel: machine-mode boot, scheduler, and virtual memory",
        position: ImagePosition.RIGHT,
      },
      description: (
        <>
          Yaseen implemented a minimal but functional RISC-V RV32 microkernel
          that boots in machine mode on <a href="https://www.qemu.org/" target="_blank" rel="noopener noreferrer">QEMU</a>'s
          virt platform. The kernel includes hand-written entry and trap
          assembly, timer interrupts, context switching, kernel threads with
          dedicated stacks, and semaphore-based synchronization.
          Written in
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer"> C</a>{" "}
          and RISC-V assembly, it uses a preemptive round-robin scheduler and
          was booted and debugged with a cross-compiled RV32 toolchain.
        </>
      ),
      technologies:
        "RISC-V Assembly, C, QEMU, Machine-mode, Trap Handling, Scheduling",
    },
    {
      title: "Hardware FIFO Design",
      image: {
        src: "/fifo.png",
        alt: "Hardware FIFO Design",
        caption: "Parameterized FIFO with dual-port M9K memory and clock-domain crossing",
        position: ImagePosition.LEFT,
      },
      description: (
        <>
          Yaseen designed a parameterized FIFO in <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">Verilog</a>
          <span> </span>using dual-port M9K memory blocks on the DE10-Lite
          FPGA. Read and write modules operated at different clock
          frequencies to demonstrate <a href="https://en.wikipedia.org/wiki/Clock_domain_crossing" target="_blank" rel="noopener noreferrer">clock-domain crossing</a>
          <span> </span>data transfer.
          The implementation uses a circular FIFO architecture with full and
          empty condition detection and was verified through
          <a href="https://www.mentor.com/products/fv/modelsim/" target="_blank" rel="noopener noreferrer"> ModelSim</a>
          <span> </span>simulations and Quartus synthesis results.
        </>
      ),
      technologies:
        "Verilog, ModelSim, Quartus, DE10-Lite, M9K Memory, Clock Domain Crossing",
    },
    {
      title: "Planck ZMK Keyboard Firmware",
      githubUrl: "https://github.com/alkhameri/zmk-config",
      description: (
        <>
          Yaseen maintains a <a href="https://zmk.dev/" target="_blank" rel="noopener noreferrer">ZMK</a>
          <span> </span>configuration for a Planck Rev6 keyboard. The keymap
          defines default, lower, raise, and mouse layers with media controls,
          bootloader/reset bindings, scroll controls, and pointer movement.
          The repository includes a GitHub Actions build matrix for the
          <a href="https://olkb.com/products/planck" target="_blank" rel="noopener noreferrer"> Planck</a>
          <span> </span>target and is mostly a fun side project for personal
          keyboard bindings.
        </>
      ),
      technologies: "ZMK, Zephyr, Device Tree, Keyboard Firmware, GitHub Actions",
    },
    {
      title: "FPGA Dice Game",
      image: {
        src: "/dice.png",
        alt: "FPGA Dice Game",
        caption: "Schematic of Score Processing and Display Circuit",
        position: ImagePosition.RIGHT,
      },
      description: (
        <>
          Yaseen implemented Moore and Mealy finite-state-machine
          representations of a dice game using RTL and block schematics. He
          applied sequential network design through counters and memory,
          verified the design with <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">Verilog</a>
          <span> </span>testbenches and <a href="https://www.mentor.com/products/fv/modelsim/" target="_blank" rel="noopener noreferrer">ModelSim</a>,
          and demonstrated the design on the DE10-Lite FPGA.
        </>
      ),
      technologies: "Verilog, ModelSim, Quartus, DE10-Lite, FSM Design",
    },
    {
      title: "dExtra Tools - Dex Browser Agent Extensions",
      githubUrl: "https://github.com/aneesh6214/Browser-MCP-Automation",
      description: (
        <>
          Built during AgentHacks with teammates, dExtra Tools extends the
          Dex browser agent by adding a Working Memory system, a Planning
          Agent, and a Frontend-WebSocket bridge for selected-text context.
          The system integrates with an MCP backend and enables deeper,
          real-time browser interaction for agent workflows. The project won
          Dex Best Browser Agent at AgentHacks.
        </>
      ),
      technologies: "Browser Agents, MCP, WebSocket, TypeScript, AgentHacks",
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
