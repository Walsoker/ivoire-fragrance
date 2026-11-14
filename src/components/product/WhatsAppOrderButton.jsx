import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppOrderLink } from '../../utils/whatsapp';

/**
 * Composant WhatsAppOrderButton
 * 
 * Conforme au cahier des charges :
 * - Ouvre wa.me/2250749418873 avec le message prérempli (parfum, marque, quantité, prix).
 * - Le bouton doit être DÉSACTIVÉ si le prix n'est pas renseigné (price === null ou undefined).
 * - Affiche une mention explicite lorsque le tarif est en attente.
 */
export default function WhatsAppOrderButton({
  productName,
  brandName,
  quantity = 1,
  price = null,
  productUrl = '',
  className = '',
}) {
  const isPriceAvailable = price !== null && price !== undefined && Number(price) > 0;

  const whatsappUrl = isPriceAvailable
    ? buildWhatsAppOrderLink({
        productName,
        brandName,
        quantity,
        price,
        productUrl: productUrl || (typeof window !== 'undefined' ? window.location.href : ''),
      })
    : '#';

  if (!isPriceAvailable) {
    return (
      <div className={`space-y-2 ${className}`}>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full inline-flex items-center justify-center gap-3 bg-[#E7DED0] text-[#746B60] py-4 px-8 text-xs uppercase tracking-[0.2em] font-medium cursor-not-allowed select-none opacity-60 border border-[#E7DED0]"
        >
          <MessageCircle size={18} className="text-[#746B60]" />
          <span>Commande WhatsApp indisponible</span>
        </button>
        <p className="text-[11px] text-[#746B60] text-center italic">
          Bouton de commande désactivé : prix en attente de confirmation officielle.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-3 bg-[#191714] text-[#FDFBF7] border border-[#191714] hover:bg-[#B88635] hover:border-[#B88635] py-4 px-8 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635] active:scale-[0.98] active:duration-75"
      >
        <MessageCircle size={18} className="text-[#25D366]" />
        <span>Commander sur WhatsApp ({quantity})</span>
      </a>
      <p className="text-[11px] text-[#746B60] text-center leading-relaxed">
        En cliquant, une conversation s’ouvre sur WhatsApp avec votre commande préremplie.
      </p>
    </div>
  );
}

