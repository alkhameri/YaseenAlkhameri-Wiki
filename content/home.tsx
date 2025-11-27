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
    imageCaption: "Yaseen Alkhameri",
    fields: [
      {
        label: "Born",
        value: "Yaseen Alkhameri\nMay 25, 2004 (age 21)\nOakland, California, U.S.",
      },
      { label: "Location", value: "San Francisco Bay Area" },
      {
        label: "Position",
        value:
          "Firmware Engineering Intern @ AIVision Food, Davis, CA",
      },
      { label: "Focus", value: "RTL / Firmware / Verification" },
    ],
  },
  sections: [
    {
      title: "Overview",
      description: (
        <>
          <strong>Yaseen Alkhameri</strong> is a hardware engineer with a focus
          on <a href="https://en.wikipedia.org/wiki/Register-transfer_level" target="_blank" rel="noopener noreferrer">RTL</a> design,
          baremetal <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a> programming, and embedded systems
          development. His interests span <a href="https://en.wikipedia.org/wiki/Register-transfer_level" target="_blank" rel="noopener noreferrer">register-transfer level</a> design,
          <span> </span><a href="https://en.wikipedia.org/wiki/Field-programmable_gate_array" target="_blank" rel="noopener noreferrer">FPGA</a> prototyping, and low-level systems programming, with particular
          attention to real-time operating systems and the <a href="https://en.wikipedia.org/wiki/Linux_kernel" target="_blank" rel="noopener noreferrer">Linux kernel</a>.
          <br />
          <br />
          His work emphasizes the practical aspects of digital design: writing
          synthesizable Verilog for <span> </span><a href="https://en.wikipedia.org/wiki/Field-programmable_gate_array" target="_blank" rel="noopener noreferrer">FPGA</a> and ASIC targets, developing <a href="https://en.wikipedia.org/wiki/Firmware" target="_blank" rel="noopener noreferrer">firmware</a><span> </span>
          in baremetal C for resource-constrained embedded platforms, and
          exploring the intersection of hardware and operating systems. He
          currently serves as president of the Mechanical Keyboards Club at <a href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer">UC Davis</a> and enjoys cataloging records, sorting Pokémon cards, and
          tinkering with mechanical keyboards in his spare time.
        </>
      ),
    },
    {
      title: "",
      description: (
        <>
          <div className="space-y-4">
            <SpotifyNowPlaying />
            <div className="p-4 border rounded-md">
              <h4 className="text-lg font-semibold">Working on…</h4>
              <p className="text-sm text-gray-600 mt-1">
                Real-time hardware video processing system on Terasic DE1-SoC
                with Verilog, baremetal C on HPS, and comprehensive verification
                workflows.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ],
};
