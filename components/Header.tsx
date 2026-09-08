"use client";

import Link from "next/link";
import ArticleOfTheDay from "./ArticleOfTheDay";
import SearchNavigation from "./SearchNavigation";

export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" aria-label="Yaseen Alkhameri home" className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 font-serif text-lg text-gray-700">
            W
          </Link>
          <ArticleOfTheDay />
        </div>
        <div className="w-full md:w-96 md:shrink-0 lg:w-[28rem]"><SearchNavigation /></div>
      </div>
    </header>
  );
}
