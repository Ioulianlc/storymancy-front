"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      // 🎯 MODIF 1 : Le px-8 est placé ici sur le header global (comme sur ta section Hero)
      className={`w-full fixed top-0 left-0 z-50 px-8 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-ink-black/95 backdrop-blur-sm py-4 shadow-2xl border-b border-white/5"
          : "bg-transparent py-8 md:py-10"
      }`}
    >
      {/* 🎯 MODIF 2 : Plus de px-8 ici. Ce conteneur a maintenant la taille EXACTE de ton bloc de texte en dessous */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
        {/* 🎯 MODIF 3 : flex-shrink-0 empêche la Flexbox de ratatiner ton logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo Storymancy"
              width={280}
              height={80}
              className="h-12 md:h-16 lg:h-[65px] w-auto object-contain hover:opacity-80 transition-opacity"
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Menu de Navigation */}
        <nav className="flex items-center gap-8 md:gap-10 font-sans text-base md:text-lg">
          <Link
            href="/podcasts"
            className="text-white hover:text-honey-bronze transition-colors duration-300"
          >
            Podcast
          </Link>
          <Link
            href="/livre"
            className="text-white hover:text-honey-bronze transition-colors duration-300"
          >
            Livre
          </Link>
          <Link
            href="#a-propos"
            className="text-white hover:text-honey-bronze transition-colors duration-300"
          >
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
