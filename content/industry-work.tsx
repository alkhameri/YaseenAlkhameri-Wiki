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
      title: "Firmware Engineering Intern - AIVision Food",
      date: "June 2025 - Present",
      description: (
        <>
          Yaseen contributes to the development of an IoT environmental
          monitoring system built on the <a href="https://zephyrproject.org/" target="_blank" rel="noopener noreferrer">Zephyr RTOS</a> at AIVision Food in Davis, CA.
          <br />
          <br />
          Yaseen designed and optimized firmware for <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy" target="_blank" rel="noopener noreferrer">Bluetooth Low Energy (BLE)</a> data
          transmission, ensuring low-power operation and reliable
          sensor-to-gateway connectivity. He worked with Nordic <a href="https://www.nordicsemi.com/Products/nRF52840" target="_blank" rel="noopener noreferrer">nRF52840</a> devices and <a href="https://en.wikipedia.org/wiki/ESP32" target="_blank" rel="noopener noreferrer">ESP32</a> modules, focusing on baremetal <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C </a>
          programming, RTOS task management,
          and hardware bring-up workflows. The work included BLE connection
          management, low-power tuning for BLE advertising and connection
          intervals, and device firmware updates.
          <br />
          <br />
          Yaseen collaborated with international team members, including
          manufacturing partners in <a href="https://en.wikipedia.org/wiki/China" target="_blank" rel="noopener noreferrer">China</a>, to support production, firmware
          certification, and global deployment logistics. He assisted with hardware
          debugging, validation, and integration of camera and sensor
          subsystems for production deployment.
        </>
      ),
      image: {
        src: "/aivisionfood.png",
        alt: "AIVision Food SmartProbe",
        caption: "AIVision Food - SmartProbe",
        position: ImagePosition.LEFT,
      },
    },
  ],
};
