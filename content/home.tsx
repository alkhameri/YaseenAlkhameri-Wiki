import React from "react";
import { JSONContent } from "@/lib/json-content";
import { yaseenInfobox } from "./profile-infobox";
import { currentRole } from "./current-role";

export const homeContent: JSONContent = {
  title: "Yaseen Alkhameri",
  subtitle: currentRole.title,
  description: "Yaseen Alkhameri's portfolio: SoC design, MMIO microarchitecture, SystemVerilog RTL, block-level verification, and computer architecture research",
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
          <a href="https://en.wikipedia.org/wiki/SystemVerilog" target="_blank" rel="noopener noreferrer">SystemVerilog</a> RTL,
          bare-metal <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a>, and
          <span> </span><a href="https://en.wikipedia.org/wiki/RISC-V" target="_blank" rel="noopener noreferrer">RISC-V</a> systems.
          {" "}He is a {currentRole.title} at <a href={currentRole.websiteUrl} target="_blank" rel="noopener noreferrer">{currentRole.company}</a>,
          owning MMIO microarchitecture, SystemVerilog RTL, and block-level verification for a pre-silicon SSD controller ASIC.
          His previous experience includes embedded firmware at AIVision Food and
          SSD systems integration at Solidigm, where he developed tooling for firmware-release analysis and
          configuration management. His projects include a real-time FPGA matched-filter object
          detector, a <a href="/projects#compact-risc-v-core-verilog">five-stage RISC-V CPU</a>
          {" "}with forwarding and tournament branch prediction implemented as a
          SKY130 ASIC macro, and a preemptive RISC-V microkernel.
          {" "}He also coauthored the <a href="/career#moesi-d">MOESI-D working paper</a> on
          delegated atomic updates in gem5, building on an earlier
          {" "}<a href="/career#cache-coherence-gem5">cache-coherence study of sparse-matrix and graph workloads</a>.
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
        { role: "Hardware", statement: "MMIO microarchitecture, SystemVerilog RTL, and block-level verification.", seeAlso: { href: "/career", label: "Career" } },
        { role: "Firmware", statement: "Embedded C, Zephyr RTOS, and RISC-V systems.", seeAlso: { href: "/career", label: "Career" } },
        { role: "Systems", statement: "Computer architecture, memory, and hardware–software integration.", seeAlso: { href: "/career#papers", label: "Papers" } },
      ],
    },
    { title: "", variant: "home-activity-grid", hideFromArticleNav: true },
  ],
};
