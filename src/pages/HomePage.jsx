import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroCarousel from '../components/layout/HeroCarousel';
import AnnouncementTicker from '../components/layout/AnnouncementTicker';
import BrandCard from '../components/brand/BrandCard';
import ProductCard from '../components/product/ProductCard';
import { BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { MessageCircle } from 'lucide-react';

/**
 * Page d'Accueil Principale — Ivoire.Fragrance
 * 
 * Mis à jour selon vos consignes :
 * - Logo officiel intégré dans le Header
 * - Bandeau défilant élégant annonçant l'ajout progressif des nouvelles créations
 * - 3 cartes éditoriales pour les 3 marques de parfums
 * - Section « Sélection Exclusive » avec exactement les 3 créations disponibles (1 par maison)
 * - Suppression du lien « Voir tout le catalogue (12 parfums) »
 */
export default function HomePage() {
  // Exactement les 3 parfums disponibles
  const availableProducts = PRODUCTS;

  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#191714] flex flex-col selection:bg-[#B88635] selection:text-white">
      {/* 1. Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Carrousel Éditorial */}
        <HeroCarousel />

        {/* Bandeau d'annonce défilant (Marquee) */}
        <AnnouncementTicker />

        {/* 3. Section « Nos Maisons & Marques d'exception » */}
        <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E7DED0]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* En-tête de section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 sm:w-8 h-[1px] bg-[#B88635]" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#746B60] font-medium">
                    Maisons & Créations
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191714] font-normal leading-tight">
                  Trois univers olfactifs singuliers
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#746B60] font-light max-w-sm leading-relaxed">
                Découvrez les fragrances phares de Fragrance World, Born in France et Jacques Yves. De nouvelles marques seront ajoutées au catalogue au fur et à mesure.
              </p>
            </div>

            {/* Grille des 3 Cartes de Marques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {BRANDS.map((brand) => (
                <BrandCard
                  key={brand.id}
                  brand={brand}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Section « Sélection Exclusive » (Exactement 3 produits) */}
        <section className="py-16 sm:py-24 lg:py-32 bg-[#FDFBF7] border-b border-[#E7DED0]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-3 sm:gap-6">
              <div className="space-y-2 sm:space-y-3 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 sm:w-8 h-[1px] bg-[#B88635]" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#746B60] font-medium">
                    Sélection Exclusive
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191714] font-normal leading-tight">
                  Fragrances disponibles
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#B88635] font-medium">
                3 créations signatures prêtes pour commande
              </p>
            </div>

            {/* Grille de 3 parfums */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {availableProducts.map((product) => {
                const brand = BRANDS.find((b) => b.id === product.brandId);
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    brandName={brand ? brand.name : ''}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section « L'expérience Ivoire.Fragrance » (3 étapes / piliers) */}
        <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E7DED0]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20 space-y-2.5 sm:space-y-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88635] font-semibold block">
                Notre Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191714] font-normal">
                L’Art du Parfum selon Ivoire.Fragrance
              </h2>
              <p className="text-xs sm:text-sm text-[#746B60] font-light leading-relaxed pt-1 sm:pt-2">
                Une approche intimiste et personnalisée pour vous guider vers la signature qui vous correspond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* Étape 1 */}
              <div className="space-y-3 sm:space-y-5 border-t border-[#E7DED0] pt-6 sm:pt-8">
                <span className="font-serif text-2xl sm:text-3xl text-[#B88635] block">01</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#191714] font-medium">
                  Sélection Rigoureuse
                </h3>
                <p className="text-xs sm:text-sm text-[#746B60] leading-relaxed font-light">
                  Seules des compositions d’exception trouvent leur place dans notre catalogue. Des accords travaillés avec finesse pour un sillage durable.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="space-y-3 sm:space-y-5 border-t border-[#E7DED0] pt-6 sm:pt-8">
                <span className="font-serif text-2xl sm:text-3xl text-[#B88635] block">02</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#191714] font-medium">
                  Conseil Personnalisé
                </h3>
                <p className="text-xs sm:text-sm text-[#746B60] leading-relaxed font-light">
                  Chaque client bénéficie d’un échange direct sur WhatsApp pour affiner son choix selon ses préférences olfactives et la saison.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="space-y-3 sm:space-y-5 border-t border-[#E7DED0] pt-6 sm:pt-8">
                <span className="font-serif text-2xl sm:text-3xl text-[#B88635] block">03</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#191714] font-medium">
                  Authenticité Garantie
                </h3>
                <p className="text-xs sm:text-sm text-[#746B60] leading-relaxed font-light">
                  Des flacons scellés d’origine, préservés dans des conditions idéales et livrés avec le plus grand soin à Abidjan et en région.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section « Commande WhatsApp en 3 étapes » */}
        <section className="py-16 sm:py-24 lg:py-32 bg-[#171512] text-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Colonne gauche : Titre & Explication */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D7B879] font-medium block">
                  Simplicité & Sécurité
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight text-[#FDFBF7]">
                  Comment se déroule votre commande ?
                </h2>
                <p className="text-xs sm:text-sm text-[#A8A096] leading-relaxed font-light">
                  Aucun paiement en ligne au lancement. Votre commande s’effectue en toute transparence via une conversation humaine sur WhatsApp.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/2250749418873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B88635] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D7B879] hover:text-[#191714] transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Démarrer sur WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Colonne droite : Les 3 étapes pas à pas */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="flex gap-4 sm:gap-6 items-start bg-[#1F1C18] p-5 sm:p-6 border border-[#746B60]/20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#B88635] text-[#D7B879] flex items-center justify-center font-serif text-base sm:text-lg shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg sm:text-xl text-[#FDFBF7]">
                      Découvrir et choisir
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A8A096] font-light leading-relaxed">
                      Parcourez les créations d’Oud Nuclear, Iris Oud et Imaginari et sélectionnez la fragrance qui vous séduit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start bg-[#1F1C18] p-5 sm:p-6 border border-[#746B60]/20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#B88635] text-[#D7B879] flex items-center justify-center font-serif text-base sm:text-lg shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg sm:text-xl text-[#FDFBF7]">
                      Ouvrir WhatsApp en un clic
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A8A096] font-light leading-relaxed">
                      Un message prérempli contenant le nom du parfum est automatiquement préparé. Vous gardez la main pour l’envoyer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start bg-[#1F1C18] p-5 sm:p-6 border border-[#746B60]/20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#B88635] text-[#D7B879] flex items-center justify-center font-serif text-base sm:text-lg shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg sm:text-xl text-[#FDFBF7]">
                      Validation & Livraison
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A8A096] font-light leading-relaxed">
                      Notre équipe confirme la disponibilité, les détails du règlement et organise la livraison de votre flacon avec soin.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
