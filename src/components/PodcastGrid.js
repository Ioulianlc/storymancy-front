"use client";

import { useState } from "react";

export default function PodcastGrid({ episodes }) {
  // L'état qui mémorise la catégorie cliquée (par défaut "Tous")
  const [activeCategory, setActiveCategory] = useState("Tous");

  // La liste de tes catégories exactes
  const categories = [
    "Tous",
    "Storytelling",
    "Design",
    "Cognition",
    "Éducation",
  ];

  // On filtre la liste des épisodes en fonction du bouton cliqué
  const filteredEpisodes =
    activeCategory === "Tous"
      ? episodes
      : episodes.filter((ep) => ep.category === activeCategory);

  return (
    <div className="w-full flex flex-col items-start">
      {/* --- BARRE DE FILTRES --- */}
      {/* py-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 */}
      <div className="w-full border-y border-white/20 py-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
        
        {/* 🎯 LE CARROUSEL MOBILE : 
            - w-full : prend toute la largeur
            - flex-nowrap : interdit de passer à la ligne
            - overflow-x-auto : active le glissement au doigt sur mobile
            - scrollbar-none : (optionnel selon ta config) masque la barre de défilement brute
            - md:overflow-visible / md:flex-wrap : redevient normal sur ordinateur
        */}
        
        <div className="w-full md:w-auto flex flex-nowrap md:flex-wrap gap-8 md:gap-12 font-sans text-white text-base md:text-lg overflow-x-auto md:overflow-visible scrollbar-none pb-4 md:pb-0 snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-2 transition-colors duration-300 flex-shrink-0 snap-start ${
                activeCategory === cat
                  ? "border-b-2 border-honey-bronze text-white" // Style actif (Souligné doré)
                  : "text-lavender-grey hover:text-white" // Style inactif
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Le compteur d'épisodes dynamique (Reste bien calé à droite sur desktop) */}
        <div className="text-sm text-lavender-grey font-sans flex-shrink-0 self-end md:self-center">
          {filteredEpisodes.length} épisode(s)
        </div>
      </div>

      {/* --- GRILLE DYNAMIQUE DES ÉPISODES --- */}
      <div className="w-full flex flex-col gap-8">
        {filteredEpisodes.length === 0 ? (
          <p className="text-lavender-grey text-lg italic border border-white/10 p-8 rounded-2xl text-center w-full">
            Aucun épisode dans cette catégorie pour le moment.
          </p>
        ) : (
          filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="w-full bg-ink-black-light rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-honey-bronze/30 transition-colors duration-300"
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
                <span className="text-honey-bronze font-serif italic mb-2">
                  Épisode {ep.episode_number || ep.id} • {ep.category || "Général"}
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-sans mb-4">
                  {ep.name}
                </h3>
                <p className="text-lavender-grey mb-6 line-clamp-3">
                  {ep.description}
                </p>

                {/* Badges d'information */}
                <div className="flex flex-wrap gap-4 text-sm text-lavender-grey">
                  
                  {/* Badge de Date Dynamique */}
                  {ep.date && (
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      {new Date(ep.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}
                    </span>
                  )}

                  {/* Badge de Durée */}
                  {ep.duration && (
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      ⏱ {ep.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}