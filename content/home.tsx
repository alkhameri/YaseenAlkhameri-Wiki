import React from "react";
import { JSONContent } from "@/lib/json-content";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";

export const homeContent: JSONContent = {
  title: "Yaseen Alkhameri",
  subtitle: "Hardware Engineer",
  description: "Personal project dump/portfolio",
  url: "/",
  disambiguation:
    "This article is about the hardware engineer. For his technical blog, see [Yaseen Alkhameri (blog)](/blog).",
  infobox: {
    image: "/profile-photo.png",
    imageCaption: "Yaseen Alkhameri in 2025",
    fields: [
      {
        label: "Born",
        value: "Yaseen Alkhameri\nMay 25, 2004 (age 21)\nOakland, California, U.S.",
      },
      { label: "Location", value: "San Francisco Bay Area" },
      {
        label: "Position",
        value:
          "Incoming Product Development Engineering Intern @ [Solidigm](https://www.solidigm.com/)",
      },
      {
        label: "University",
        value:
          "[University of California, Davis](https://www.ucdavis.edu/)",
      },
    ],
  },
  sections: [
    {
      title: "Overview",
      description: (
        <>
          <strong>Yaseen Alkhameri</strong> is a computer engineering student
          at <a href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer">UC Davis</a> focused on
          <span> </span><a href="https://en.wikipedia.org/wiki/Register-transfer_level" target="_blank" rel="noopener noreferrer">RTL</a> design,
          embedded firmware, and digital verification. His work spans
          <span> </span><a href="https://en.wikipedia.org/wiki/Field-programmable_gate_array" target="_blank" rel="noopener noreferrer">FPGA</a> prototyping,
          synthesizable <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">Verilog</a>,
          bare-metal <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a>, and
          <span> </span><a href="https://en.wikipedia.org/wiki/RISC-V" target="_blank" rel="noopener noreferrer">RISC-V</a> systems.
          <br />
          <br />
          He previously worked as a Firmware Engineering Intern at AIVision
          Food and will join <a href="https://www.solidigm.com/" target="_blank" rel="noopener noreferrer">Solidigm</a>
          <span> </span>as a Product Development Engineering Intern in June
          2026. His projects include a real-time FPGA matched-filter object
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
      description: (
        <>
          <SpotifyNowPlaying />
        </>
      ),
    },
  ],
};
