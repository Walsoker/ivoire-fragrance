import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * AnnouncementTicker — Bandeau défilant élégant et luxueux
 * Informant les visiteurs que les créations et marques de parfum
 * seront ajoutées au fur et à mesure de leur disponibilité.
 */
export default function AnnouncementTicker() {
  const message = "Maison de Haute Parfumerie • Nouvelles marques et fragrances ajoutées au fur et à mesure de leur disponibilité • Commandes exclusives & conseils personnalisés sur WhatsApp • Livraison soignée";

  return (
    <div
      className="bg-[#171512] text-[#D7B879] py-2.5 overflow-hidden border-y border-[#B88635]/30 select-none"
      role="region"
      aria-label="Annonces exclusives"
    >
      <div className="flex w-max items-center animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-8 px-4 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-light">
            <span className="text-[#FDFBF7]">{message}</span>
            <Sparkles size={12} className="text-[#B88635] inline shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

