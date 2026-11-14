import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../ui';
import { Link } from 'react-router-dom';

/**
 * 3 Slides éditoriales (1 par marque : Oud Nuclear, Iris Oud, Imaginari)
 * Respect strict du cahier des charges :
 * - Composition photographique luxueuse & éditoriale
 * - Navigation flèches + indicateurs de pagination interactifs
 * - Glissement tactile mobile (swipe)
 * - Pause automatique au survol et lors de l'interaction
 * - Respect du préférence système (prefers-reduced-motion)
 */
const SLIDES = [
  {
    id: 'oud-nuclear',
    brandName: 'Oud Nuclear',
    tagline: 'Un parfum, une présence.',
    subtitle: 'L’intensité du bois d’Oud sublimée dans une composition d’ambre et d’or.',
    actionLabel: 'Explorer Oud Nuclear',
    actionLink: '/marques/oud-nuclear',
    image: '/images/carousselles/oud-nuclear-hero.PNG',
    // L'image Oud Nuclear contient déjà une composition visuelle riche
    hasEmbeddedText: true,
    accentColor: '#B88635',
  },
  {
    id: 'iris-oud',
    brandName: 'Iris Oud',
    tagline: 'La noblesse poudrée de l’Iris.',
    subtitle: 'L’union rare et envoûtante entre la délicatesse florale et la profondeur boisée.',
    actionLabel: 'Découvrir Iris Oud',
    actionLink: '/marques/iris-oud',
    image: '/images/carousselles/IMG_1620.PNG',
    hasEmbeddedText: false,
    accentColor: '#D7B879',
  },
  {
    id: 'imaginari',
    brandName: 'Imaginari',
    tagline: 'L’imaginaire sans frontières.',
    subtitle: 'Des accords contemporains et audacieux conçus pour marquer les esprits.',
    actionLabel: 'Découvrir Imaginari',
    actionLink: '/marques/imaginari',
    image: '/images/carousselles/imaginari-hero.png',
    hasEmbeddedText: false,
    accentColor: '#B88635',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const timerRef = useRef(null);

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Défilement automatique lent (6.5 secondes), pause au survol et si l'utilisateur préfère réduire les animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Gestion du glissement tactile (swipe) sur mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) {
      setIsPaused(false);
      return;
    }
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setIsPaused(false);
  };

  return (
    <section
      className="relative w-full bg-[#F7F1E7] overflow-hidden border-b border-[#E7DED0]"
      aria-roledescription="carousel"
      aria-label="Campagnes parfumées Ivoire.Fragrance"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container : Hauteur adaptative fluide */}
      <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[680px] flex items-center">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${totalSlides} : ${slide.brandName}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Fond photographique avec superposition éditoriale douce */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={`${slide.brandName} - Campagne de haute parfumerie`}
                  className="w-full h-full object-cover object-center filter brightness-[0.96] transition-transform duration-[6000ms] ease-out scale-100"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Dégradé doux ivoire sur mobile (en bas et à gauche) et sur desktop pour assurer une lisibilité parfaite sans masquer l'image */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#F7F1E7]/95 via-[#F7F1E7]/70 to-transparent sm:hidden"
                  aria-hidden="true"
                />
                <div
                  className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#F7F1E7]/95 via-[#F7F1E7]/80 to-transparent lg:w-3/5"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#F7F1E7] via-transparent to-transparent h-16 sm:h-24 bottom-0"
                  aria-hidden="true"
                />
              </div>

              {/* Contenu textuel éditorial */}
              <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-20 pb-20 sm:py-28 lg:py-32 flex flex-col justify-end sm:justify-center min-h-[500px] sm:min-h-0">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  {/* Sur-titre Maison */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 sm:w-8 h-[1px] bg-[#B88635]" />
                  </div>

                  {/* Accroche & Titre */}
                  <div className="space-y-2 sm:space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#191714] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight">
                      {slide.tagline}
                    </h2>
                    <p className="text-[#746B60] text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-md pt-1 sm:pt-2 line-clamp-3 sm:line-clamp-none">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Boutons d'Action */}
                  <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4">
                    <Link to={slide.actionLink} className="flex-1 sm:flex-initial">
                      <PrimaryButton variant="black" className="w-full sm:w-auto">
                        {slide.actionLabel}
                      </PrimaryButton>
                    </Link>
                    <Link to="/marques" className="flex-1 sm:flex-initial">
                      <SecondaryButton variant="gold" className="w-full sm:w-auto">
                        Les Maisons
                      </SecondaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Flèches & Indicateurs */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Indicateurs de pagination (dots / barres éditoriales) */}
        <div className="flex items-center space-x-2 sm:space-x-3" role="tablist" aria-label="Choisir une diapositive">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-label={`Aller à la diapositive ${index + 1} : ${slide.brandName}`}
                onClick={() => goToSlide(index)}
                className="group py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
              >
                <span
                  className={`block h-[2px] transition-all duration-500 rounded-full ${
                    isActive
                      ? 'w-8 sm:w-14 bg-[#B88635]'
                      : 'w-3 sm:w-6 bg-[#E7DED0] group-hover:bg-[#746B60]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Flèches Précédent / Suivant */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Campagne précédente"
            className="w-8 h-8 sm:w-11 sm:h-11 border border-[#E7DED0] bg-[#FDFBF7]/90 hover:bg-[#191714] hover:text-white hover:border-[#191714] text-[#191714] flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635] shadow-xs active:scale-95"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Campagne suivante"
            className="w-8 h-8 sm:w-11 sm:h-11 border border-[#E7DED0] bg-[#FDFBF7]/90 hover:bg-[#191714] hover:text-white hover:border-[#191714] text-[#191714] flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635] shadow-xs active:scale-95"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

