import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-ink-black pt-32 pb-8 px-4 md:px-8">
      {/* 1. LE FILIGRANE GÉANT (Background) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full h-[80%] flex items-end justify-center pointer-events-none z-0">
        <Image
          src="/logofooter.svg"
          alt=""
          fill
          className="object-contain object-bottom opacity-200"
          unoptimized // Crucial pour les SVG en fond !
        />
      </div>

      {/* 2. LE CONTENU DU FOOTER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-8">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 text-white font-sans text-sm md:text-base">
            <Link
              href="#mecanismes"
              className="hover:text-honey-bronze transition-colors duration-300"
            >
              Mécaniques
            </Link>
            <Link
              href="/podcasts"
              className="hover:text-honey-bronze transition-colors duration-300"
            >
              Podcast
            </Link>
            <Link
              href="/essai"
              className="hover:text-honey-bronze transition-colors duration-300"
            >
              Livre
            </Link>
            <Link
              href="#a-propos"
              className="hover:text-honey-bronze transition-colors duration-300"
            >
              À propos
            </Link>
            <Link
              href="#newsletter"
              className="hover:text-honey-bronze transition-colors duration-300"
            >
              Newsletter
            </Link>
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex gap-6 items-center">
            <Link
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src="/insta.svg"
                alt="Instagram"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </Link>
            <Link
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src="/apple.svg"
                alt="Apple Podcasts"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </Link>
            <Link
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src="/youtube.svg"
                alt="YouTube"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </Link>
            <Link
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src="/spotify.svg"
                alt="Spotify"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </Link>
          </div>
        </div>

        <hr className="border-t border-white/20 w-full mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-lavender-grey text-xs md:text-sm font-sans">
          <p>copyright 2026-2027</p>
          <Link
            href="/mentions-legales"
            className="hover:text-white transition-colors duration-300"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
