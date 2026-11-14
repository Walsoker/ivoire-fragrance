import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Carte de Marque Éditoriale
 * 
 * Présente la marque et sa maison parente avec la couverture visuelle correspondante.
 */
export default function BrandCard({ brand }) {
  const imageMap = {
    'oud-nuclear': '/images/maison/fragrance_world.jpg',
    'iris-oud': '/images/maison/Born_in_france.jpeg',
    'imaginari': '/images/brands/imaginari-brand.png',
  };

  const coverImage = imageMap[brand.id] || brand.imageCover;

  return (
    <Link
      to={`/marques/${brand.slug}`}
      className="group relative flex flex-col bg-[#FDFBF7] border border-[#E7DED0] overflow-hidden transition-all duration-500 hover:border-[#B88635] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635]"
      aria-label={`Découvrir la marque ${brand.name}`}
    >
      {/* Conteneur d'image proportionnel */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E7DED0]/30">
        <img
          src={coverImage}
          alt={`Univers ${brand.name} - Maison ${brand.houseName}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171512]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"
          aria-hidden="true"
        />
        <div className="absolute top-4 left-4 bg-[#191714]/85 backdrop-blur-xs px-3 py-1 text-[9.5px] uppercase tracking-[0.2em] text-[#FDFBF7] border border-[#E7DED0]/20">
          Maison {brand.houseName}
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88635] font-semibold block mb-1">
            Fragrance Signature
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#191714] font-medium group-hover:text-[#B88635] transition-colors">
            {brand.name}
          </h3>
          <p className="text-xs text-[#746B60] font-light mt-2 line-clamp-2">
            {brand.presentation}
          </p>
        </div>

        <div className="pt-3 flex items-center justify-between border-t border-[#E7DED0]">
          <span className="text-xs uppercase tracking-[0.15em] text-[#746B60] group-hover:text-[#191714] transition-colors">
            Explorer la fragrance
          </span>
          <ArrowUpRight
            size={16}
            className="text-[#B88635] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </Link>
  );
}
