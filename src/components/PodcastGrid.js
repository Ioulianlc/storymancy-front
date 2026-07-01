"use client";

import { useState } from "react";

export default function PodcastGrid({ episodes }) {
  const [activeSeason, setActiveSeason] = useState("Tout");
  // 1. Nouvel état pour gérer l'épisode sélectionné dans la pop-up
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const filters = ["Tout", 1, 2, 3];

  const filteredEpisodes = episodes.filter((ep) => {
    if (activeSeason === "Tout") return true;
    return ep.season === activeSeason;
  });

  return (
    <div className="w-full flex flex-col items-start">
      {/* --- BARRE DE FILTRES --- */}
      <div className="w-full border-y border-white/20 py-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveSeason(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-sans text-sm ${
                activeSeason === filter
                  ? "bg-honey-bronze text-ink-black border-honey-bronze font-semibold"
                  : "bg-transparent text-lavender-grey border-white/20 hover:border-honey-bronze hover:text-white"
              }`}
            >
              {filter === "Tout" ? "Tout" : `Saison ${filter}`}
            </button>
          ))}
        </div>

        <div className="text-sm text-lavender-grey font-sans flex-shrink-0 self-end md:self-center">
          {filteredEpisodes.length}{" "}
          {filteredEpisodes.length > 1 ? "épisodes" : "épisode"}
        </div>
      </div>

      {/* --- GRILLE DES ÉPISODES --- */}
      <div className="w-full flex flex-col gap-8">
        {filteredEpisodes.length === 0 ? (
          <p className="text-lavender-grey text-lg italic border border-white/10 p-8 rounded-2xl text-center w-full">
            Aucun épisode dans cette saison pour le moment.
          </p>
        ) : (
          filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              // 2. On ajoute le clic sur la carte pour ouvrir la Pop-up
              onClick={() => setSelectedEpisode(ep)}
              className="w-full bg-ink-black-light rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-honey-bronze/30 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image de l'épisode */}
              <div className="w-full md:w-48 aspect-square bg-ink-black rounded-xl flex-shrink-0 relative overflow-hidden">
                {ep.image_url && (
                  <img
                    src={ep.image_url}
                    alt={`Couverture de l'épisode : ${ep.name}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Contenu de l'épisode */}
              <div className="flex flex-col flex-grow">
                <span className="text-honey-bronze font-serif italic text-sm md:text-base">
                  Épisode {ep.episode_number} • Saison {ep.season}
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-sans mb-4">
                  {ep.name}
                </h3>
                <p className="text-lavender-grey mb-6 line-clamp-2">
                  {ep.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-4 text-sm text-lavender-grey">
                  {ep.date && (
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      {new Date(ep.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  )}
                  {ep.duration && (
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      ⏱ {ep.duration}
                    </span>
                  )}
                  {/* Petit indicateur d'invité si présent */}
                  {ep.guest_name && (
                    <span className="px-4 py-2 bg-honey-bronze/10 text-honey-bronze rounded-full border border-honey-bronze/20 text-xs font-semibold">
                      👤 Avec {ep.guest_name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* --- 3. LE COMPOSANT POP-UP (MODAL) --- */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          {/* Conteneur de la boîte */}
          <div
            className="bg-ink-black border border-white/10 rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative text-white"
            onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique au milieu de la pop-up
          >
            {/* Bouton Fermer (La Croix) */}
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-6 right-6 p-2 text-lavender-grey hover:text-white transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* En-tête Pop-up */}
            <span className="text-honey-bronze font-serif italic text-base block mb-2">
              Épisode {selectedEpisode.episode_number} • Saison{" "}
              {selectedEpisode.season}
            </span>
            <h2 className="text-3xl md:text-4xl font-sans text-white mb-6 pr-8">
              {selectedEpisode.name}
            </h2>

            {/* Infos rapides */}
            <div className="flex gap-4 text-sm text-lavender-grey mb-8 border-b border-white/10 pb-6">
              <span>
                📅{" "}
                {new Date(selectedEpisode.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>⏱ Durée : {selectedEpisode.duration}</span>
            </div>

            {/* Description complète de l'épisode */}
            <div className="mb-10">
              <h4 className="text-honey-bronze uppercase tracking-wider text-xs font-bold font-sans mb-3">
                À propos de l'épisode
              </h4>
              <p className="text-base leading-relaxed text-slate-300 whitespace-pre-line">
                {selectedEpisode.description}
              </p>
            </div>

            {/* CARD INVITÉ (Affichez uniquement si l'épisode a un invité) */}
            {selectedEpisode.guest_name && (
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                {/* Avatar Invité */}
                <div className="w-20 h-20 bg-ink-black border border-honey-bronze/30 rounded-full flex-shrink-0 overflow-hidden relative">
                  {selectedEpisode.guest_image_url ? (
                    <img
                      src={selectedEpisode.guest_image_url}
                      alt={selectedEpisode.guest_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                  )}
                </div>

                {/* Détails Invité */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-honey-bronze font-bold mb-1">
                    L'invité de l'épisode
                  </span>
                  <h5 className="text-xl font-sans text-white font-semibold mb-1">
                    {selectedEpisode.guest_name}
                  </h5>
                  <p className="text-sm text-lavender-grey italic mb-3">
                    {selectedEpisode.guest_profession}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {selectedEpisode.guest_bio}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
