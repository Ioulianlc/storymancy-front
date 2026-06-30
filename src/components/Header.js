"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. L'outil pour lire l'URL

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 2. On stocke l'URL actuelle dans une variable
  const pathname = usePathname(); 

  return (
    <header className="w-full relative z-50">
      <div className="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto relative">
        
        {/* BOUTON BURGER */}
        <button 
          className="md:hidden flex flex-col gap-[6px] z-20 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="w-8 h-[2px] bg-white"></span>
          <span className="w-8 h-[2px] bg-white"></span>
          <span className="w-8 h-[2px] bg-white"></span>
        </button>

        {/* LOGO STORYMANCY */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-10 flex-shrink-0">
          <Link href="/">
             <Image 
               src="/logo.svg" 
               alt="Storymancy" 
               width={250} 
               height={60} 
               className="w-auto h-12 md:h-16 object-contain" 
               unoptimized 
             />
          </Link>
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-white font-sans text-lg">
           <Link href="/" className={`transition-colors duration-300 ${pathname === "/" ? "text-honey-bronze" : "hover:text-honey-bronze"}`}>Accueil</Link>
           <Link href="/podcasts" className={`transition-colors duration-300 ${pathname === "/podcasts" ? "text-honey-bronze" : "hover:text-honey-bronze"}`}>Podcast</Link>
           <Link href="/essai" className={`transition-colors duration-300 ${pathname === "/essai" ? "text-honey-bronze" : "hover:text-honey-bronze"}`}>Livre</Link>
           <Link href="/#a-propos" className="hover:text-honey-bronze transition-colors duration-300">À propos</Link>
        </nav>
      </div>

      {/* MENU MOBILE PLEIN ÉCRAN */}
      <div 
        className={`fixed inset-0 bg-ink-black z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-start px-8 py-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* 3. NAVIGATION MOBILE DYNAMIQUE */}
        <nav className="flex flex-col items-start gap-8 px-12 mt-8 text-3xl font-sans text-white">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`pb-1 w-max ${pathname === "/" ? "border-b-2 border-honey-bronze" : "hover:text-honey-bronze"}`}
          >
            Accueil
          </Link>
          <Link 
            href="/podcasts" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`pb-1 w-max ${pathname === "/podcasts" ? "border-b-2 border-honey-bronze" : "hover:text-honey-bronze"}`}
          >
            Podcast
          </Link>
          <Link 
            href="/essai" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`pb-1 w-max ${pathname === "/essai" ? "border-b-2 border-honey-bronze" : "hover:text-honey-bronze"}`}
          >
            Livre
          </Link>
          <Link 
            href="/#a-propos" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="hover:text-honey-bronze pb-1 w-max"
          >
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}