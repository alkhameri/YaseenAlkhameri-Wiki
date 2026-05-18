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
      title: "Incoming Product Development Engineering Intern - Solidigm",
      date: "June 2026 - September 2026",
      websiteUrl: "https://www.solidigm.com/",
      description: (
        <>
          Yaseen will join <a href="https://www.solidigm.com/" target="_blank" rel="noopener noreferrer">Solidigm</a>
          <span> </span>as a Product Development Engineering Intern during
          summer 2026. The role aligns with his interests in hardware
          validation, product development, memory systems, and the bridge
          between silicon, firmware, and system-level reliability.
          <br />
          <br />
          Solidigm is a storage company focused on <a href="https://en.wikipedia.org/wiki/Solid-state_drive" target="_blank" rel="noopener noreferrer">solid-state drives</a>
          <span> </span>and <a href="https://en.wikipedia.org/wiki/Flash_memory" target="_blank" rel="noopener noreferrer">NAND flash memory</a> products for client,
          data-center, and enterprise systems.
        </>
      ),
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
          Yaseen contributed to the development of an IoT environmental
          monitoring system built on the <a href="https://zephyrproject.org/" target="_blank" rel="noopener noreferrer">Zephyr RTOS</a>
          <span> </span>at AIVision Food in Davis, CA.
          <br />
          <br />
          He implemented event-driven <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy" target="_blank" rel="noopener noreferrer">Bluetooth Low Energy</a>
          <span> </span>communication and optimized memory-constrained data
          paths for low-power operation. The work used Nordic
          <span> </span><a href="https://www.nordicsemi.com/Products/nRF52840" target="_blank" rel="noopener noreferrer">nRF52</a>
          <span> </span>devices, <a href="https://en.wikipedia.org/wiki/ESP32" target="_blank" rel="noopener noreferrer">ESP32</a>
          <span> </span>modules, and bare-metal/RTOS-oriented
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer"> C</a> firmware.
          <br />
          <br />
          He debugged low-power firmware behavior with the
          <a href="https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2" target="_blank" rel="noopener noreferrer"> Nordic PPK2</a>,
          using current profiling to identify leakage-current issues and
          validate reduced standby power. He also assisted with hardware
          bring-up, debugging, and validation workflows for embedded
          production platforms.
        </>
      ),
      image: {
        src: "/aivisionfood.png",
        alt: "AIVision Food SmartProbe",
        caption: "AIVision Food - SmartProbe",
        position: ImagePosition.RIGHT,
      },
    },
  ],
};
