import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import WhatsAppOrderButton from '../components/product/WhatsAppOrderButton';
import { PrimaryButton, SecondaryButton, EditorialLink } from '../components/ui';
import { BRANDS } from '../data/brands';
import { PRODUCTS } from '../data/products';
import { buildWhatsAppOrderLink } from '../utils/whatsapp';
import { ChevronRight, MessageCircle, Minus, Plus, ShieldCheck, Sparkles, Droplets } from 'lucide-react';

/**
 * Page Fiche Parfum — /parfums/:slug (ou /parfums/:id)
 * 
 * Conforme au cahier des charges (Section 4.4 & Section 5) :
 * - Galerie / visuel du parfum
 * - Nom commercial, marque associée, prix en FCFA si disponible
 * - Contenance, description, notes olfactives (si vérifiées)
 * - Sélecteur de quantité tactile
 * - Bouton « Commander sur WhatsApp » générant le message prérempli complet
 * - Suggestions d'autres fragrances de la même maison
 * - Aucune donnée inventée
 */
export default function ProductDetailPage() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Recherche du produit par slug ou par id
  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return <Navigate to="/marques" replace />;
  }

  const brand = BRANDS.find((b) => b.id === product.brandId);
  const brandName = brand ? brand.name : 'Ivoire.Fragrance';
  const displayName = product.name || `Fragrance N°${product.id.split('-').pop()}`;

  // Image de présentation réelle du flacon selon la marque
  const productImageMap = {
    'oud-nuclear': '/images/products/Oud-nuclear-product.PNG',
    'iris-oud': '/images/products/iris-oud-product.PNG',
    'imaginari': '/images/products/imaginari.PNG',
  };

  const mainImage = productImageMap[product.brandId] || product.imageMain;

  // Génération du lien de commande WhatsApp prérempli
  const whatsappOrderUrl = buildWhatsAppOrderLink({
    productName: displayName,
    brandName: brandName,
    quantity: quantity,
    price: product.price,
    productUrl: typeof window !== 'undefined' ? window.location.href : '',
  });

  // Suggestions : les autres parfums de la même marque
  const relatedProducts = PRODUCTS.filter(
    (p) => p.brandId === product.brandId && p.id !== product.id
  ).slice(0, 3);

  const incrementQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrementQty = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#191714] flex flex-col selection:bg-[#B88635] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 pb-24">
        {/* Fil d'Ariane */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
          <nav aria-label="Fil d'ariane" className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-[#746B60] flex-wrap gap-y-2">
            <Link to="/" className="hover:text-[#191714] transition-colors">Accueil</Link>
            <ChevronRight size={13} className="text-[#B88635]" />
            <Link to="/marques" className="hover:text-[#191714] transition-colors">Marques</Link>
            <ChevronRight size={13} className="text-[#B88635]" />
            {brand && (
              <>
                <Link to={`/marques/${brand.slug}`} className="hover:text-[#191714] transition-colors">
                  {brand.name}
                </Link>
                <ChevronRight size={13} className="text-[#B88635]" />
              </>
            )}
            <span className="text-[#191714] font-medium">{displayName}</span>
          </nav>
        </div>

        {/* Détail du produit en 2 colonnes */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Colonne Gauche : Image du flacon */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#E7DED0] bg-[#FDFBF7]">
                <img
                  src={mainImage}
                  alt={displayName}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-[#191714]/85 backdrop-blur-sm px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]">
                  {brandName}
                </div>
              </div>
              <p className="text-[11px] text-[#746B60] italic text-center">
                Flacon authentique d’origine — Visuel représentatif de la maison
              </p>
            </div>

            {/* Colonne Droite : Informations, sélecteur & bouton WhatsApp */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* En-tête produit */}
              <div className="space-y-3 pb-6 border-b border-[#E7DED0]">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#B88635]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#B88635] font-semibold">
                    {brandName}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191714] font-normal leading-tight">
                  {displayName}
                </h1>
                
                {/* Contenance, Prix & Mention Quantité limitée */}
                <div className="pt-2 flex flex-wrap items-baseline gap-3 sm:gap-4">
                  {product.price ? (
                    <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#191714]">
                      {product.price.toLocaleString('fr-FR')}{' '}
                      <span className="text-sm font-sans font-normal text-[#746B60]">FCFA</span>
                    </span>
                  ) : (
                    <span className="text-sm text-[#746B60] italic bg-[#FDFBF7] px-3 py-1.5 border border-[#E7DED0]">
                      Tarif & disponibilité confirmés sur WhatsApp
                    </span>
                  )}
                  {product.volume && (
                    <span className="text-xs uppercase tracking-wider text-[#746B60]">
                      &bull; {product.volume}
                    </span>
                  )}
                  {product.stockLabel && (
                    <span className="bg-[#B88635]/15 border border-[#B88635]/40 text-[#B88635] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium">
                      {product.stockLabel}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[#746B60] font-medium block">
                  Description de la fragrance
                </span>
                <p className="text-sm text-[#746B60] leading-relaxed font-light">
                  {product.description ||
                    `Une création olfactive raffinée issue des ateliers de la maison ${brandName}. Chaque vaporisation libère des accords intenses et enveloppants, conçus pour sublimer votre sillage du matin au soir.`}
                </p>
              </div>

              {/* Pyramide Olfactive (si notes renseignées) */}
              {(product.notes.top.length > 0 ||
                product.notes.heart.length > 0 ||
                product.notes.base.length > 0) && (
                <div className="space-y-4 pt-4 border-t border-[#E7DED0]">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#191714] font-medium block">
                    Pyramide Olfactive
                  </span>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    {product.notes.top.length > 0 && (
                      <div className="bg-[#FDFBF7] p-3 border border-[#E7DED0]">
                        <span className="text-[10px] uppercase text-[#B88635] block mb-1">Notes de Tête</span>
                        <p className="text-[#191714]">{product.notes.top.join(', ')}</p>
                      </div>
                    )}
                    {product.notes.heart.length > 0 && (
                      <div className="bg-[#FDFBF7] p-3 border border-[#E7DED0]">
                        <span className="text-[10px] uppercase text-[#B88635] block mb-1">Notes de Cœur</span>
                        <p className="text-[#191714]">{product.notes.heart.join(', ')}</p>
                      </div>
                    )}
                    {product.notes.base.length > 0 && (
                      <div className="bg-[#FDFBF7] p-3 border border-[#E7DED0]">
                        <span className="text-[10px] uppercase text-[#B88635] block mb-1">Notes de Fond</span>
                        <p className="text-[#191714]">{product.notes.base.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Sélecteur de Quantité & Bouton WhatsApp */}
              <div className="pt-6 border-t border-[#E7DED0] space-y-5">
                <div className="flex items-center gap-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#746B60] font-medium">
                    Quantité
                  </span>
                  <div className="inline-flex items-center border border-[#E7DED0] bg-[#FDFBF7]">
                    <button
                      type="button"
                      onClick={decrementQty}
                      aria-label="Diminuer la quantité"
                      className="p-3 text-[#191714] hover:bg-[#E7DED0]/50 transition-colors focus-visible:outline-none"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-5 text-sm font-medium text-[#191714] min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={incrementQty}
                      aria-label="Augmenter la quantité"
                      className="p-3 text-[#191714] hover:bg-[#E7DED0]/50 transition-colors focus-visible:outline-none"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Bouton de Commande WhatsApp avec désactivation si pas de prix */}
                <WhatsAppOrderButton
                  productName={displayName}
                  brandName={brandName}
                  quantity={quantity}
                  price={product.price}
                />
              </div>

              {/* Garanties */}
              <div className="bg-[#FDFBF7] p-5 border border-[#E7DED0] space-y-3 text-xs text-[#746B60]">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-[#B88635] shrink-0" />
                  <span>Flacon authentique d’origine sous emballage scellé</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="text-[#B88635] shrink-0" />
                  <span>Livraison soignée et sécurisée à Abidjan & intérieur</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Suggestions d'autres créations */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 mt-16 border-t border-[#E7DED0]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88635] font-semibold block mb-1">
                  Découvrir également
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#191714]">
                  Autres créations {brandName}
                </h3>
              </div>
              <EditorialLink to={`/marques/${brand?.slug || ''}`}>
                Toute la collection
              </EditorialLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  brandName={brandName}
                />
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}

