"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ArticleOfTheDay from "./ArticleOfTheDay";
import SearchNavigation from "./SearchNavigation";
import LanguageSelector from "./LanguageSelector";
import { useMobileSidebar } from "./MobileSidebarProvider";

export default function Header() {
  const { isSidebarOpen, toggleSidebar } = useMobileSidebar();
  const isAdmin = usePathname().startsWith("/admin");
  const ToggleIcon = isSidebarOpen ? X : Menu;
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-gray-200 bg-white text-[#202122]">
      <div className="grid h-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 md:grid-cols-[minmax(0,1fr)_minmax(16rem,34rem)_minmax(0,1fr)] md:gap-5 md:px-4">
        <div className="flex min-w-0 items-center gap-2">
          {!isAdmin && <button type="button" onClick={toggleSidebar} className="inline-flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 md:hidden" aria-label={isSidebarOpen ? "Close navigation" : "Open navigation"} aria-expanded={isSidebarOpen} aria-controls="site-sidebar">
            <ToggleIcon className="h-5 w-5" aria-hidden="true" />
          </button>}
          <Link href="/" aria-label="Yaseen Alkhameri home" className="hidden h-8 w-8 shrink-0 border border-gray-300 md:block">
            <Image src="/computer-cat.png" alt="Computer cat wearing glasses at a laptop" width={32} height={32} className="h-full w-full object-cover" />
          </Link>
          <div className="hidden min-w-0 md:block"><ArticleOfTheDay /></div>
        </div>
        <SearchNavigation
          className="flex min-w-0 justify-center md:w-full md:max-w-md"
          buttonClassName="flex h-9 w-full min-w-0 items-center gap-2 border border-gray-300 bg-white px-3 text-left text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50"
          labelClassName="truncate"
          shortcutClassName="ml-auto hidden shrink-0 sm:inline-flex"
        />
        <div className="flex justify-end"><LanguageSelector /></div>
      </div>
    </header>
  );
}
