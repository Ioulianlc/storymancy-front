import React from "react";
import Link from "next/link";
import PodcastGrid from "@/components/PodcastGrid"; // On importe le nouveau composant interactif
import Newsletter from "@/components/Newsletter";

// Fonction de récupération des données (Côté Serveur)
async function getEpisodes() {
  try {
    const res = await fetch("http://localhost:5000/api/podcasts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la récupération");
    }

    return res.json();
  } catch (error) {
    console.error("Impossible de joindre l'API :", error);
    return [];
  }
}

export default async function PodcastsPage() {
  // On récupère les données
  const episodes = await getEpisodes();
  const totalEpisodes = episodes.length > 0 ? episodes.length : "---";
  const platforms = ["SPOTIFY", "APPLE PODCAST", "YOUTUBE", "DEEZER", "RSS"];

  return (
    <div className="w-full flex flex-col items-center pt-32 pb-24 px-8 min-h-screen">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-20">
          Tous les épisodes
        </h1>

        {/* --- BLOC STATISTIQUES --- */}
        <div className="relative w-full flex flex-row items-center justify-between px-4 md:px-12 py-6 md:py-8 text-white font-sans mb-24">
          {/* Crochet gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-3 md:w-6 border-l border-y border-honey-bronze rounded-l-2xl opacity-80 pointer-events-none"></div>

          {/* Colonne 1 : Épisode */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-[10px] md:text-sm text-lavender-grey uppercase tracking-wider">
              Épisode
            </span>
            <span className="text-sm md:text-lg tracking-widest">
              {totalEpisodes}
            </span>
          </div>

          {/* Ligne séparatrice 1 */}
          <div className="w-px h-8 md:h-16 bg-honey-bronze/40"></div>

          {/* Colonne 2 : Fréquence */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-[10px] md:text-sm text-lavender-grey uppercase tracking-wider">
              Fréquence
            </span>
            <span className="text-sm md:text-lg">Bi-mensuel</span>
          </div>

          {/* Ligne séparatrice 2 */}
          <div className="w-px h-8 md:h-16 bg-honey-bronze/40"></div>

          {/* Colonne 3 : Statut */}
          <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
            <span className="text-[10px] md:text-sm text-lavender-grey uppercase tracking-wider">
              Statut
            </span>
            <span className="text-sm md:text-lg">En production</span>
          </div>

          {/* Crochet droit */}
          <div className="absolute right-0 top-0 bottom-0 w-3 md:w-6 border-r border-y border-honey-bronze rounded-r-2xl opacity-80 pointer-events-none"></div>
        </div>
        {/* --- BLOC RETROUVEZ NOUS --- */}
        <div className="flex flex-col items-start mb-24">
          <h2 className="text-3xl font-serif italic text-honey-bronze mb-8">
            Retrouvez nous
          </h2>
          <div className="flex flex-wrap gap-4">
            {platforms.map((platform) => (
              <Link
                key={platform}
                href="#"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-xl text-sm font-sans tracking-wide text-white transition-all duration-300"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
        {/* --- SECTION NEWSLETTER --- */}
        <div className="w-full mt-auto">
          <Newsletter />
        </div>
        {/* 🎯 C'EST ICI QUE LA MAGIE OPÈRE : On passe les données au composant interactif */}
        <PodcastGrid episodes={episodes} />
      </div>
    </div>
  );
}
