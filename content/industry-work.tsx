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
      title: "Embedded Systems Engineering Intern — SmartProbe Hardware Team",
      date: "2025",
      description: (
        <>
          Joined AIVision Food in Davis, CA as an <strong>Embedded Systems
          Engineering Intern</strong> on the SmartProbe hardware team.
          <br />
          <br />
          Yaseen worked on embedded systems programming for Nordic nRF52 and
          ESP32 devices, focusing on low-power firmware design and BLE
          connectivity. Tasks included updating SDK versions, debugging and
          fixing camera and sensor issues, and implementing over-the-air
          update features to support reliable field deployment.
          <br />
          <br />
          Responsibilities included firmware development in C/C++, integration
          of Bluetooth Low Energy stacks, and collaboration with international
          partners in China to coordinate manufacturing, firmware
          certification, and deployment logistics. The internship emphasized
          production-ready embedded design, wireless communication, and
          hands-on problem solving across hardware and software boundaries.
        </>
      ),
      image: {
        src: "/aivisionfood.png",
        alt: "AIVision Food SmartProbe",
        caption: "AIVision Food — SmartProbe",
        position: ImagePosition.LEFT,
      },
    },
  ],
};
