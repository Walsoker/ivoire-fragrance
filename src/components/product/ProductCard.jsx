import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppOrderLink } from '../../utils/whatsapp';

/**
 * Carte Produit / Parfum
 * 
 * Conforme au cahier des charges :
 * - Photographie mise au premier plan
 * - Marque et nom du parfum
 * - Aucun prix fictif inventé : si le prix est null, affichage « Prix sur demande » ou masqué
 * - Action WhatsApp ou consultation de la fiche
 */
export default function ProductCard({ product, brandName }) {
  // Mapping des visuels réels de produits par marque
  const productImageMap = {
    'oud-nuclear': '/images/products/Oud-nuclear-product.PNG',
    'iris-oud': '/images/products/iris-oud-product.PNG',
    'imaginari': '/images/products/imaginari.PNG',
  };

  const productImage = productImageMap[product.brandId] || product.imageMain;

  const displayName = product.name || `Fragrance N°${product.id.split('-').pop()}`;

  const whatsappLink = buildWhatsAppOrderLink({
    productName: displayName,
    brandName: brandName || 'Ivoire.Fragrance',
    quantity: 1,
    price: product.price,
  });

  return (
    <div className="group flex flex-col bg-[#FDFBF7] border border-[#E7DED0] overflow-hidden transition-all duration-300 hover:border-[#B88635] hover:shadow-md">
      {/* Conteneur d'image du flacon */}
      <Link
        to={product.slug ? `/parfums/${product.slug}` : `/marques/${product.brandId}`}
        className="relative aspect-[3/4] overflow-hidden bg-[#F7F1E7] block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
      >
        <img
          src={productImage}
          alt={displayName}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Liseré discret d'état & badge quantité limitée */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <div className="bg-[#191714]/85 backdrop-blur-xs px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7] border border-[#E7DED0]/20">
            {brandName || 'Haute Parfumerie'}
          </div>
          {product.stockLabel && (
            <div className="bg-[#B88635]/90 backdrop-blur-xs px-2 py-0.5 text-[8.5px] uppercase tracking-[0.18em] text-white font-medium">
              {product.stockLabel}
            </div>
          )}
        </div>
      </Link>

      {/* Informations Parfum */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#746B60] block mb-1">
            {product.volume || 'Flacon Signature'}
          </span>
          <h4 className="font-serif text-xl text-[#191714] font-medium group-hover:text-[#B88635] transition-colors">
            {displayName}
          </h4>
        </div>

        {/* Prix réel ou mention conforme */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E7DED0]">
          <div>
            {product.price ? (
              <span className="font-serif text-lg font-semibold text-[#191714]">
                {product.price.toLocaleString('fr-FR')} <span className="text-xs font-sans text-[#746B60]">FCFA</span>
              </span>
            ) : (
              <span className="text-xs text-[#746B60] italic font-light">
                Prix & disponibilité sur demande
              </span>
            )}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 text-[#746B60] hover:text-[#25D366] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
            title="Se renseigner ou commander sur WhatsApp"
            aria-label={`Commander ${displayName} sur WhatsApp`}
          >
            <MessageCircle size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}

