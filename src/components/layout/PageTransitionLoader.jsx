import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageTransitionLoader
 * Écran de transition luxueux avec le logo animé d'Ivoire.Fragrance
 * Déclenché subtilement lors des changements de page (350ms)
 * pour une sensation fluide, prestigieuse et sans à-coups.
 */
export default function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Activer l'écran de chargement à chaque changement d'URL
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F1E7]/90 backdrop-blur-xs transition-opacity duration-200 select-none"
      aria-live="polite"
      aria-label="Chargement de la page"
    >
      <div className="flex flex-col items-center space-y-3 scale-95 animate-in fade-in zoom-in-95 duration-200">
        {/* Logo animé avec halo délicat */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#B88635]/15 to-[#D7B879]/20 blur-sm" />
          <img
            src="/images/logo/logo_ivoirefragrance.jpeg"
            alt="Ivoire.Fragrance"
            className="relative h-14 w-auto object-contain rounded-sm border border-[#E7DED0] shadow-xs"
          />
        </div>

        {/* Typographie de marque */}
        <div className="text-center">
          <span className="font-serif text-xl tracking-[0.08em] font-medium text-[#191714] block">
            Ivoire<span className="text-[#B88635]">.</span>Fragrance
          </span>
          <span className="font-sans text-[8.5px] uppercase tracking-[0.35em] text-[#746B60] block mt-0.5">
            Haute Parfumerie
          </span>
        </div>

        {/* Ligne dorée animée de progression rapide */}
        <div className="w-20 h-[1.5px] bg-[#E7DED0] overflow-hidden rounded-full mt-1.5">
          <div className="w-full h-full bg-[#B88635] origin-left animate-[loaderLine_0.28s_cubic-bezier(0.23,1,0.32,1)_infinite]" />
        </div>
      </div>
    </div>
  );
}

