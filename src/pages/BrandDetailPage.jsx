import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import AnnouncementTicker from '../components/layout/AnnouncementTicker';
import { EditorialLink } from '../components/ui';
import { BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { ChevronRight } from 'lucide-react';

/**
 * Page Dynamique d'une Marque — /marques/:slug
 */
export default function BrandDetailPage() {
  const { slug } = useParams();

  // Recherche de la marque correspondante
  const brand = BRANDS.find((b) => b.slug === slug || b.id === slug);

  if (!brand) {
    return <Navigate to="/marques" replace />;
  }

  // Filtrer les parfums rattachés à cette marque
  const brandProducts = PRODUCTS.filter((p) => p.brandId === brand.id);

  const imageMap = {
    'oud-nuclear': '/images/maison/fragrance_world.jpg',
    'iris-oud': '/images/maison/Born_in_france.jpeg',
    'imaginari': '/images/brands/imaginari-brand.png',
  };

  const coverImage = imageMap[brand.id] || brand.imageCover;

  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#191714] flex flex-col selection:bg-[#B88635] selection:text-white">
      <Header />

      <main className="flex-1 pt-24 pb-24">
        {/* Bandeau d'annonce */}
        <AnnouncementTicker />

        {/* Fil d'Ariane (Breadcrumbs) */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
          <nav aria-label="Fil d'ariane" className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-[#746B60]">
            <Link to="/" className="hover:text-[#191714] transition-colors">Accueil</Link>
            <ChevronRight size={13} className="text-[#B88635]" />
            <Link to="/marques" className="hover:text-[#191714] transition-colors">Maisons & Marques</Link>
            <ChevronRight size={13} className="text-[#B88635]" />
            <span className="text-[#191714] font-medium">{brand.name}</span>
          </nav>
        </div>

        {/* Hero éditorial de la Marque */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-[#E7DED0] bg-[#171512]">
            <img
              src={coverImage}
              alt={`${brand.name} - Maison ${brand.houseName}`}
              className="w-full h-full object-cover object-center filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/95 via-[#171512]/40 to-transparent flex items-end p-6 sm:p-12">
              <div className="space-y-3 max-w-xl">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D7B879] font-medium block">
                  Maison {brand.houseName} &bull; Édition Disponible
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#FDFBF7] font-normal leading-tight">
                  {brand.name}
                </h1>
                <p className="text-xs sm:text-sm text-[#E7DED0] font-light leading-relaxed">
                  {brand.presentation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des créations de la marque */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-[#E7DED0] gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B88635] font-semibold block mb-1">
                Fragrance Disponible
              </span>
              <h2 className="text-3xl font-serif text-[#191714]">
                {brand.name} par {brand.houseName}
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.15em] text-[#746B60]">
              {brandProducts.length} référence disponible actuellement
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                brandName={brand.name}
              />
            ))}
          </div>

          {/* Message de disponibilité progressive */}
          <div className="mt-16 p-6 sm:p-8 bg-[#FDFBF7] border border-[#E7DED0] text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B88635] font-medium">
              Information Collection
            </p>
            <p className="text-sm text-[#746B60] font-light max-w-xl mx-auto">
              D’autres créations de la maison <strong>{brand.houseName}</strong> seront dévoilées au fil des arrivages et ajoutées au catalogue.
            </p>
          </div>

          {/* Retour aux marques */}
          <div className="mt-12 pt-8 border-t border-[#E7DED0] flex items-center justify-between">
            <EditorialLink to="/marques">
              Explorer les autres maisons
            </EditorialLink>
            <EditorialLink href="https://wa.me/2250749418873" className="text-[#B88635]">
              Conseil WhatsApp pour {brand.name}
            </EditorialLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
