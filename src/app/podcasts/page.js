import React from "react";
import Link from "next/link";
import PodcastGrid from "@/components/PodcastGrid"; // On importe le nouveau composant interactif

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
        <div className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-8 gap-8 md:gap-16 text-white font-sans mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-6 border-l border-y border-honey-bronze rounded-l-2xl opacity-80 pointer-events-none"></div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-lavender-grey">Épisode</span>
            <span className="text-lg tracking-widest">{totalEpisodes}</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-honey-bronze/40"></div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-lavender-grey">Fréquence</span>
            <span className="text-lg">Bi-mensuel</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-honey-bronze/40"></div>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-lavender-grey">Statut</span>
            <span className="text-lg">En production</span>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-4 md:w-6 border-r border-y border-honey-bronze rounded-r-2xl opacity-80 pointer-events-none"></div>
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

        {/* 🎯 C'EST ICI QUE LA MAGIE OPÈRE : On passe les données au composant interactif */}
        <PodcastGrid episodes={episodes} />
      </div>
    </div>
  );
}
