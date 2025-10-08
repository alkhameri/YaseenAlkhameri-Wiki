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
          "Embedded Systems Intern, Hardware Team - Dr. Zhongli Pan's Lab, UC Davis",
      },
      { label: "Focus", value: "ASIC / FPGA / RTL / Verilog / Verification" },
    ],
  },
  sections: [
    {
      title: "Overview",
      description: (
        <>
          <strong>Yaseen Alkhameri</strong> blends a practical love of hardware
          with everyday curiosities. By day he designs and verifies RTL — most
          recently a compact RV32I RISC‑V core in Verilog that was exercised
          through ModelSim and Verilator and taken through an OpenLane flow to
          GDS II. By night you’ll often find him cataloging records, sorting
          Pokémon cards, or tinkering with mechanical keyboards. He currently
          serves as president of the Mechanical Keyboards Club at UC Davis.
          <br />
          <br />
          His work sits at the intersection of pragmatic engineering and
          systems thinking: FPGA prototyping (Intel M9K BRAM inference), RTL
          verification, and the full-stack hand-off to physical design. He’s
          also active in hands-on competitions and collaborations; from
          building browser-agent tools that won at AgentHacks to community
          projects like AggieShare (HackDavis Hacker's Choice).
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
                Pipelining a compact RV32I RISC‑V core (Verilog). Docs,
                simulation, and FPGA notes are on GitHub:
              </p>
              <a
                href="https://github.com/alkhameri/riscv-core-verilog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                github.com/alkhameri/riscv-core-verilog
              </a>
            </div>
          </div>
        </>
      ),
    },
  ],
};
