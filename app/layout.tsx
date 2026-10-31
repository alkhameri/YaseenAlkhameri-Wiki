import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BeaconProvider from "@/components/BeaconProvider";
import { MobileSidebarProvider } from "@/components/MobileSidebarProvider";
import SearchHighlight from "@/components/SearchHighlight";
import { currentRole } from "@/content/current-role";

export const metadata: Metadata = {
  title: "Yaseen Alkhameri - Hardware & Embedded Systems",
  description:
    `Yaseen Alkhameri, ${currentRole.title} at ${currentRole.company} — MMIO microarchitecture, SystemVerilog RTL, block-level verification, and FPGA systems`,
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
        <MobileSidebarProvider>
          <div className="min-h-screen bg-white pt-14 font-sans">
            <Header />
            {children}
          </div>
          <SearchHighlight />
        </MobileSidebarProvider>
        <BeaconProvider />
      </body>
    </html>
  );
}
