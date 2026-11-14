import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnnouncementTicker from '../components/layout/AnnouncementTicker';
import BrandCard from '../components/brand/BrandCard';
import { BRANDS } from '../data/brands';
import { EditorialLink } from '../components/ui';

/**
 * Page des Marques / Maisons — /marques
 */
export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#191714] flex flex-col selection:bg-[#B88635] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 pb-24">
        {/* Bandeau d'annonce défilant */}
        <AnnouncementTicker />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12">
          
          {/* En-tête de page éditorial */}
          <div className="max-w-3xl space-y-6 pb-16 border-b border-[#E7DED0]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B88635]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#746B60] font-medium">
                Maisons Partenaires
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#191714] font-normal leading-tight">
              Nos Maisons de Haute Parfumerie
            </h1>
            <p className="text-[#746B60] text-base sm:text-lg font-light leading-relaxed">
              Trois signatures de renom réunies sous l’égide d’Ivoire.Fragrance : <strong>Fragrance World</strong> avec <em>Oud Nuclear</em>, <strong>Born in France</strong> avec <em>Iris Oud</em>, et <strong>Jacques Yves</strong> avec <em>Imaginari</em>.
            </p>
          </div>

          {/* Grille des 3 marques avec leurs univers */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {BRANDS.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
              />
            ))}
          </div>

          {/* Note éditoriale d'évolution du catalogue */}
          <div className="mt-8 p-8 sm:p-12 bg-[#FDFBF7] border border-[#E7DED0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88635] font-semibold block">
                Catalogue en expansion
              </span>
              <h3 className="font-serif text-2xl text-[#191714]">
                Nouvelles marques en approche
              </h3>
              <p className="text-sm text-[#746B60] font-light leading-relaxed">
                Notre catalogue s’enrichira progressivement de nouvelles marques et créations au fur et à mesure de leur disponibilité. Nos conseillers sont à votre écoute sur WhatsApp pour vous orienter.
              </p>
            </div>
            <EditorialLink
              href="https://wa.me/2250749418873"
              className="text-[#B88635]"
            >
              Échanger avec nos conseillers
            </EditorialLink>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
