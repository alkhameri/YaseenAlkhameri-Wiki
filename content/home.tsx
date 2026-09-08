import React from "react";
import { JSONContent } from "@/lib/json-content";
import { yaseenInfobox } from "./profile-infobox";

export const homeContent: JSONContent = {
  title: "Yaseen Alkhameri",
  subtitle: "Hardware Engineer",
  description: "Personal project dump/portfolio",
  url: "/",
  disambiguation:
    "This article is about the hardware engineer. For his technical blog, see [Yaseen Alkhameri (blog)](/blog).",
  infobox: yaseenInfobox,
  sections: [
    {
      title: "Overview",
      description: (
        <>
          Yaseen Alkhameri is a computer engineering student
          at <a href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer">UC Davis</a> focused on
          <span> </span><a href="https://en.wikipedia.org/wiki/Register-transfer_level" target="_blank" rel="noopener noreferrer">RTL</a> design,
          embedded firmware, and digital verification. His work spans
          <span> </span><a href="https://en.wikipedia.org/wiki/Field-programmable_gate_array" target="_blank" rel="noopener noreferrer">FPGA</a> prototyping,
          synthesizable <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">Verilog</a>,
          bare-metal <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a>, and
          <span> </span><a href="https://en.wikipedia.org/wiki/RISC-V" target="_blank" rel="noopener noreferrer">RISC-V</a> systems.
          His experience includes embedded firmware at AIVision Food and
          data-center SSD systems integration at <a href="https://www.solidigm.com/" target="_blank" rel="noopener noreferrer">Solidigm</a>,
          where he developed tooling for firmware-release analysis and
          configuration management. His projects include a real-time FPGA matched-filter object
          detector, a synthesizable RISC-V CPU, and a preemptive RISC-V
          microkernel.
          <br />
          <br />
          Outside of coursework and hardware projects, he is president of the
          Mechanical Keyboards Club at UC Davis. He also keeps a
          <span> </span><a href="https://www.discogs.com/user/shugerun/collection" target="_blank" rel="noopener noreferrer">vinyl record collection</a>,
          experiments with custom keyboard firmware and layouts, and tracks
          his <a href="https://www.pkmn.gg/u/shugerun?tab=collection" target="_blank" rel="noopener noreferrer">Pokemon card collection</a>.
        </>
      ),
    },
    {
      title: "",
      variant: "home-role-focus",
      hideFromArticleNav: true,
      roleFocusItems: [
        { role: "Hardware", statement: "RTL design, FPGA prototyping, and digital verification.", seeAlso: { href: "/projects", label: "Projects" } },
        { role: "Firmware", statement: "Embedded C, Zephyr RTOS, and RISC-V systems.", seeAlso: { href: "/career", label: "Career" } },
        { role: "Systems", statement: "Computer architecture, memory, and hardware–software integration.", seeAlso: { href: "/#education", label: "Education" } },
      ],
    },
    { title: "", variant: "home-activity-grid", hideFromArticleNav: true },
    {
      title: "Education",
      date: "Expected December 2026",
      description: (
        <>
          Yaseen is pursuing a Bachelor of Science in Computer Engineering at
          <a href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer"> UC Davis</a>,
          where he is an IEEE member and AvenueE Scholar. His coursework includes
          Circuits 1 &amp; 2, Digital Systems 1 &amp; 2, Digital Electronic Circuits,
          Computer Architecture, Advanced Computer Architecture, VLSI Design,
          Digital Signals &amp; Systems, Embedded Systems, and Operating Systems.
        </>
      ),
    },
    {
      title: "Skills",
      description: (
        <dl className="space-y-3">
          <div>
            <dt className="font-semibold">Programming</dt>
            <dd>C, C++, Python, RISC-V assembly, Linux, Git</dd>
          </div>
          <div>
            <dt className="font-semibold">Hardware &amp; verification</dt>
            <dd>Verilog, SystemVerilog, ModelSim, Verilator, Intel Quartus Prime,
              FPGAs, Cadence OrCAD, LTSpice, OpenLane, AMD Vivado</dd>
          </div>
          <div>
            <dt className="font-semibold">Embedded platforms</dt>
            <dd>Zephyr RTOS, ARM Cortex-M0+, Nordic nRF52, ESP32, STM32</dd>
          </div>
          <div>
            <dt className="font-semibold">Languages</dt>
            <dd>English, Mandarin Chinese, Arabic</dd>
          </div>
        </dl>
      ),
    },
  ],
};
