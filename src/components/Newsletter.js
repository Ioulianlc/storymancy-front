"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourras plus tard relier à ton API (Brevo, Mailchimp, etc.)
    console.log("Email inscrit :", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-8 py-16 md:py-24">
      <div className="w-full bg-ink-black-light border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Petit effet visuel en fond */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-honey-bronze/5 blur-[100px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl text-white font-sans mb-4 relative z-10">
          Ne manquez aucun <span className="text-honey-bronze italic font-serif">épisode</span>
        </h2>
        
        <p className="text-lavender-grey mb-8 max-w-xl relative z-10">
          Inscrivez-vous à la lettre Storymancy pour recevoir les nouveaux épisodes, des analyses exclusives et des ressources sur l'art de la narration.
        </p>

        {isSubmitted ? (
          <div className="bg-white/5 border border-honey-bronze/30 text-white px-8 py-4 rounded-full font-sans relative z-10">
            Merci pour votre inscription !
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4 relative z-10"
          >
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-ink-black border border-white/20 rounded-full px-6 py-3 text-white placeholder-lavender-grey focus:outline-none focus:border-honey-bronze transition-colors duration-300"
            />
            <button 
              type="submit"
              className="bg-honey-bronze text-ink-black font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors duration-300 whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}