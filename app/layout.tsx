import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BeaconProvider from "@/components/BeaconProvider";
import { MobileSidebarProvider } from "@/components/MobileSidebarProvider";
import SearchHighlight from "@/components/SearchHighlight";

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
