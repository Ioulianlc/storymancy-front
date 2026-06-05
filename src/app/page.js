import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* --- SECTION 1 : HERO (Conteneur Pleine Largeur pour le Dégradé) --- */}
      <section className="relative w-full overflow-hidden mt-32 md:mt-40 py-24 px-8 bg-[radial-gradient(circle_at_center,var(--color-ink-black-light)_40%,var(--color-ink-black)_100%)]">
        {/* --- LE GIMMICK (Flotte au milieu de l'écran, chargé en priorité absolue) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[800px] max-w-full opacity-40 pointer-events-none">
          <Image
            src="/gimmick-1.svg"
            alt=""
            width={800}
            height={800}
            className="w-full h-auto object-contain"
            priority
            unoptimized // Désactive le traitement serveur inutile pour les vecteurs
          />
        </div>

        {/* --- LE CONTENEUR DE CONTENU (Centré avec marges et max-width) --- */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
          {/* Le grand Titre */}
          <h1 className="text-5xl md:text-7xl font-sans text-white leading-tight mb-8">
            Imaginez que quelqu'un <br className="hidden md:block" />
            puisse vous faire croire <br className="hidden md:block" />
            n'importe quoi <br className="hidden md:block" />
            <span className="text-honey-bronze font-serif italic">
              — sans que vous vous en rendiez compte.
            </span>
          </h1>

          {/* L'explication */}
          <div className="space-y-6 text-lavender-grey text-lg md:text-xl max-w-3xl leading-relaxed">
            <p>
              Ce que vous venez de vivre est une démonstration. La phrase
              ci-dessus a utilisé une technique rhétorique précise : l'amorçage
              par le danger, suivi d'un pivot vers l'identification. Vous n'êtes
              pas vulnérable — mais vous venez de ressentir quelque chose.
            </p>
            <p>
              <strong className="text-white font-medium">
                C'est ça, Storymancy : nommer ce qui vient de se passer.
              </strong>
            </p>
            <p>
              Un podcast et un livre pour décoder les mécanismes invisibles qui
              façonnent vos croyances, vos décisions et vos comportements.
            </p>
            <p className="text-white font-bold tracking-wide uppercase text-sm mt-4">
              Pas de magie — de la technique.
            </p>
          </div>

          {/* Bouton */}
          <div className="mt-12">
            <Link
              href="#mecanismes"
              className="inline-block border border-honey-bronze text-honey-bronze hover:bg-honey-bronze hover:text-ink-black transition-colors duration-300 px-10 py-4 text-lg rounded-full"
            >
              Découvrir
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : LES MÉCANISMES (Cartes empilables) --- */}
      <section
        id="mecanismes"
        className="w-full max-w-4xl mx-auto px-8 py-32 relative"
      >
        {/* Titre de la section */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-sans text-white leading-tight">
            Pas de magie.
            <br />
            Des{" "}
            <span className="font-serif italic text-honey-bronze">
              mécanismes.
            </span>
          </h2>
        </div>

        {/* Conteneur des cartes (flex vertical avec grand espacement pour scroller) */}
        <div className="flex flex-col gap-24 relative pb-24">
          {/* CARTE 1 : Transport narratif */}
          {/* top-24 permet à la carte de s'arrêter en haut de l'écran pendant qu'on scrolle la suite */}
          <div className="sticky top-24 z-10 w-full p-10 md:p-14 rounded-[2rem] bg-lavender-grey shadow-2xl transition-all">
            <h3 className="text-3xl font-sans text-white mb-6">
              Le transport narratif
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              Quand une histoire "absorbe" le lecteur, ses défenses critiques
              s'abaissent. Les croyances véhiculées par le récit s'installent
              plus facilement — même factuellement incorrectes.
            </p>
            {/* Boîte Exemple Observable */}
            <div className="p-6 rounded-xl border border-honey-bronze bg-[#E8C070]/32">
              <span className="text-sm font-bold text-honey-bronze mb-2 block">
                Exemple observable
              </span>
              <p className="text-white text-sm md:text-base">
                Pourquoi les campagnes humanitaires montrent un visage plutôt
                que des statistiques.
              </p>
            </div>
          </div>

          {/* CARTE 2 : Architecture de choix */}
          {/* top-32 (un peu plus bas) pour laisser dépasser le haut de la carte 1 */}
          <div className="sticky top-32 z-20 w-full p-10 md:p-14 rounded-[2rem] bg-ink-black-light shadow-2xl transition-all">
            <h3 className="text-3xl font-sans text-white mb-6">
              L'architecture de choix
            </h3>
            <p className="text-lavender-grey text-lg leading-relaxed mb-10">
              La façon dont les options sont présentées — ordre, mise en forme,
              valeur par défaut — détermine souvent le choix plus que la volonté
              réelle du décideur.
            </p>
            <div className="p-6 rounded-xl border border-honey-bronze bg-[#E8C070]/32">
              <span className="text-sm font-bold text-honey-bronze mb-2 block">
                Exemple observable
              </span>
              <p className="text-white text-sm md:text-base">
                Le formulaire qui pré-coche la case don d'organes augmente le
                taux de 40%.
              </p>
            </div>
          </div>

          {/* CARTE 3 : Dette pédagogique */}
          {/* top-40 pour laisser dépasser les cartes 1 et 2 */}
          <div className="sticky top-40 z-30 w-full p-10 md:p-14 rounded-[2rem] bg-ink-black shadow-2xl border border-white/5 transition-all">
            <h3 className="text-3xl font-sans text-white mb-6">
              La dette pédagogique
            </h3>
            <p className="text-lavender-grey text-lg leading-relaxed mb-10">
              L'éducation ne transmet pas seulement des savoirs : elle installe
              des cadres cognitifs qui déterminent ce qu'il est possible de
              penser ensuite.
            </p>
            <div className="p-6 rounded-xl border border-honey-bronze bg-[#E8C070]/32">
              <span className="text-sm font-bold text-honey-bronze mb-2 block">
                Exemple observable
              </span>
              <p className="text-white text-sm md:text-base">
                Comment la structure d'un cours peut orienter des convictions
                politiques pendant des décennies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : STATISTIQUES (Grille 2x2 persistante) --- */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-12 md:pb-24">
        {/* grid-cols-2 force le maintien des 2 colonnes sur mobile */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* CARTE 1 : 95% */}
          <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-ink-black-light shadow-2xl flex flex-col justify-start">
            <h4 className="text-4xl md:text-6xl font-serif mb-3 md:mb-5">
              <span className="text-honey-bronze">95</span>
              <span className="text-white">%</span>
            </h4>
            <p className="text-[11px] md:text-base text-lavender-grey leading-snug md:leading-relaxed font-sans">
              de nos décisions sont prises avant que nous en soyons conscients,
              selon les neurosciences
            </p>
          </div>

          {/* CARTE 2 : 3X */}
          <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-ink-black-light shadow-2xl flex flex-col justify-start">
            <h4 className="text-4xl md:text-6xl font-serif mb-3 md:mb-5">
              <span className="text-honey-bronze">3X</span>
            </h4>
            <p className="text-[11px] md:text-base text-lavender-grey leading-snug md:leading-relaxed font-sans">
              plus mémorables : les informations transmises via un récit vs des
              faits
            </p>
          </div>

          {/* CARTE 3 : 40S */}
          <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-ink-black-light shadow-2xl flex flex-col justify-start">
            <h4 className="text-4xl md:text-6xl font-serif mb-3 md:mb-5">
              <span className="text-honey-bronze">40</span>
              <span className="text-white">S</span>
            </h4>
            <p className="text-[11px] md:text-base text-lavender-grey leading-snug md:leading-relaxed font-sans">
              suffisent à une mise en scène pour orienter durablement un
              jugement
            </p>
          </div>

          {/* CARTE 4 : 0 */}
          <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-ink-black-light shadow-2xl flex flex-col justify-start">
            <h4 className="text-4xl md:text-6xl font-serif mb-3 md:mb-5 text-honey-bronze">
              0
            </h4>
            <p className="text-[11px] md:text-base text-lavender-grey leading-snug md:leading-relaxed font-sans">
              personne sur Terre n'y échappe y compris ceux qui pensent le
              contraire
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4 : PODCAST --- */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="relative w-full bg-ink-black-light rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl flex flex-col items-start overflow-hidden">
          {/*
          <div className="absolute inset-0 z-0">
            <Image src="/ton-image-podcast.jpg" alt="Fond Podcast" fill className="object-cover opacity-40" />
          </div>
          */}
          <div className="relative z-10 w-full flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-tight mb-8">
              Les histoires
              <br />
              qu'on vous
              <br />
              <span className="font-serif italic text-honey-bronze">
                raconte sur vous
              </span>
            </h2>
            <p className="text-lavender-grey text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-sans">
              Chaque épisode décortique un mécanisme d'influence — rhétorique,
              design, biais cognitif, construction narrative. Rigoureux et
              accessible. Avec des invités, des exemples concrets, et toujours :
              la démonstration en direct de la technique analysée.
            </p>
            <Link
              href="/podcasts"
              className="inline-block border border-honey-bronze text-honey-bronze hover:bg-honey-bronze hover:text-ink-black transition-colors duration-300 px-8 py-3 text-sm md:text-base rounded-full font-sans"
            >
              Découvrir nos podcasts
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 5 : LIVRE (Essai) --- */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24">
        {/* Conteneur Flex : Colonne sur mobile, Ligne sur Desktop (md) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 w-full">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-tight mb-8">
              Les architectes
              <br />
              de votre
              <br />
              <span className="font-serif italic text-honey-bronze">
                consentement
              </span>
            </h2>
            <p className="text-lavender-grey text-base md:text-lg leading-relaxed mb-10 font-sans max-w-md">
              Un essai sur les systèmes narratifs, visuels et pédagogiques qui
              conditionnent nos croyances à notre insu. Comment les reconnaître.
              Comment reprendre la main.
            </p>
            <Link
              href="#"
              className="inline-block border border-honey-bronze text-honey-bronze hover:bg-honey-bronze hover:text-ink-black transition-colors duration-300 px-8 py-3 text-sm md:text-base rounded-full font-sans"
            >
              Découvrir l'essai
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-square bg-[#D9D9D9] rounded-[2rem] relative overflow-hidden flex-shrink-0 shadow-2xl">
            {/*
             <Image src="/ton-image-livre.jpg" alt="Couverture du livre" fill className="object-cover" />
             */}
          </div>
        </div>
      </section>

      {/* --- SECTION 6 : À PROPOS --- */}
      <section
        id="a-propos"
        className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 w-full">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-[#D9D9D9] rounded-[2rem] relative overflow-hidden flex-shrink-0 shadow-2xl">
            {/*
             <Image src="/ta-photo-profil.jpg" alt="Portrait de l'auteur" fill className="object-cover" />
             */}
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-tight mb-8">
              Qui se cache
              <br />
              derrière
              <br />
              <span className="font-serif italic text-honey-bronze">
                Storymancy ?
              </span>
            </h2>
            <div className="text-lavender-grey text-sm md:text-base leading-relaxed font-sans space-y-4 max-w-md">
              <p>
                [Ton Nom] est développeur web et créateur d'identités visuelles.
                Depuis [X] ans, il explore les mécanismes qui influencent nos
                perceptions, nos décisions et nos comportements.
              </p>
              <p>
                Formé en développement web et passionné par le branding, il
                s'intéresse à la façon dont le storytelling, le design et
                l'éducation construisent des réalités cognitives — et à ce que
                cela implique pour nos libertés individuelles.
              </p>
              <p>
                Storymancy rassemble ses recherches, ses entretiens et ses
                analyses dans un format accessible à toutes et tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7 : NEWSLETTER --- */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24 mb-12">
        <div className="w-full bg-ink-black-light rounded-[2rem] p-10 md:p-16 lg:p-24 shadow-2xl flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-honey-bronze mb-6">
            Restez dans la boucle
          </h2>
          <p className="text-lavender-grey text-base md:text-lg leading-relaxed max-w-lg mb-10 font-sans">
            Analyses, ressources et coulisses du projet directement dans votre
            boîte mail. Pas de magie, pas de spam.
          </p>
          {/* Formulaire (Visuel uniquement, pur HTML) */}
          <form className="w-full max-w-md flex flex-col sm:flex-row items-stretch border border-white/20 rounded-2xl sm:rounded-full overflow-hidden focus-within:border-honey-bronze transition-colors duration-300">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-lavender-grey/50 focus:outline-none font-sans text-center sm:text-left"
            />
            <button
              type="button"
              className="px-8 py-4 bg-transparent border-t sm:border-t-0 sm:border-l border-white/20 text-honey-bronze font-sans hover:bg-honey-bronze hover:text-ink-black transition-colors duration-300"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
