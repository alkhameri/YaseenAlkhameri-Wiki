import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Yaseen Alkhameri - Hardware & Embedded Systems",
  description:
    "Personal website of Yaseen Alkhameri — RTL, FPGA, ASIC, and embedded systems",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white font-sans">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
