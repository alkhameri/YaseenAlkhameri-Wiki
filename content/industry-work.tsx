import React from "react";
import { ImagePosition, JSONContent } from "@/lib/json-content";

export const industryWorkContent: JSONContent = {
  title: "Industry Work",
  subtitle: "Professional Experience",
  description: "Professional experience and career highlights",
  url: "/industry-work",
  disambiguation:
    "This article covers the professional work experience of Yaseen Alkhameri. For personal projects, see the Projects page.",
  sections: [
    {
      title: "Product Development Engineering Intern - Solidigm",
      date: "June 2026 - September 2026",
      websiteUrl: "https://www.solidigm.com/",
      description: (
        <>
          On <a href="https://www.solidigm.com/" target="_blank" rel="noopener noreferrer">Solidigm</a>&apos;s
          data-center SSD Systems Integration team, Yaseen developed Python
          tooling to reconcile firmware-release evidence across more than 600
          tracked issues, flagging ambiguous cases for engineering review. He
          also built analysis tools to identify obsolete and redundant firmware
          configuration rules across product variants, and extended internal
          release-tracking workflows. His work supported engineers coordinating
          dependencies across SoC, firmware, hardware, NAND, and validation.
        </>
      ),
      technologies: "Python, REST APIs, SSD Firmware Releases, Configuration Management, Systems Integration",
      image: {
        src: "/solidigm.jpg",
        alt: "Solidigm logo",
        caption: "Solidigm",
        position: ImagePosition.LEFT,
      },
    },
    {
      title: "Firmware Engineering Intern - AIVision Food",
      date: "June 2025 - May 2026",
      websiteUrl: "https://www.aivisionfood.com/",
      description: (
        <>
          At AIVision Food in Davis, Yaseen contributed C firmware to an IoT
          environmental monitoring system using <a href="https://zephyrproject.org/" target="_blank" rel="noopener noreferrer">Zephyr RTOS</a>,
          Nordic nRF52, and ESP32 platforms. He implemented event-driven
          Bluetooth Low Energy communication, optimized memory-constrained data
          paths, and used the
          <a href="https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2" target="_blank" rel="noopener noreferrer"> Nordic PPK2</a>,
          profiling current to identify leakage and validate reduced standby
          power. He also assisted with hardware bring-up, debugging, and
          validation of embedded platforms.
        </>
      ),
      technologies: "C, Zephyr RTOS, Bluetooth Low Energy, Nordic nRF52, ESP32, Nordic PPK2",
      image: {
        src: "/aivisionfood.png",
        alt: "AIVision Food SmartProbe",
        caption: "AIVision Food - SmartProbe",
        position: ImagePosition.RIGHT,
      },
    },
  ],
};
