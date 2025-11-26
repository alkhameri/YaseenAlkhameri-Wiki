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
      title: "Embedded Systems Engineering Intern - AIVision Food",
      date: "June 2025 - Present",
      description: (
        <>
          Contributing to the development of an IoT environmental monitoring
          system built on Zephyr RTOS at AIVision Food in Davis, CA.
          <br />
          <br />
          Designed and optimized firmware for Bluetooth Low Energy (BLE) data
          transmission, ensuring low-power operation and reliable
          sensor-to-gateway connectivity. Worked with Nordic nRF52 and ESP32
          devices, focusing on baremetal C programming, RTOS task management,
          and hardware bring-up workflows.
          <br />
          <br />
          Collaborated with international team members, including partners in
          China, to support manufacturing, firmware certification, and
          deployment logistics. Assisted with hardware debugging, validation,
          and integration of camera and sensor subsystems for production
          deployment.
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
