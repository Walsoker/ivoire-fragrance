/**
 * Utilitaires pour le site Ivoire.Fragrance
 */

export const WHATSAPP_PHONE_NUMBER = "2250749418873";

/**
 * Génère le lien WhatsApp prérempli pour une commande de parfum
 *
 * @param {Object} params
 * @param {string} params.productName - Nom du parfum
 * @param {string} params.brandName - Nom de la marque
 * @param {number} params.quantity - Quantité choisie
 * @param {number|null} [params.price] - Prix unitaire en FCFA (optionnel)
 * @param {string} [params.productUrl] - Lien vers la fiche produit
 * @returns {string} URL WhatsApp encodée
 */
export function buildWhatsAppOrderLink({
  productName,
  brandName,
  quantity = 1,
  price = null,
  productUrl = "",
}) {
  const lines = [
    "Bonjour Ivoire.Fragrance,",
    "",
    "Je souhaite passer commande pour :",
    `- Produit : ${productName || "Parfum"}`,
    brandName ? `- Marque : ${brandName}` : null,
    `- Quantité : ${quantity}`,
    price ? `- Prix unitaire : ${price.toLocaleString("fr-FR")} FCFA` : null,
    price ? `- Total estimé : ${(price * quantity).toLocaleString("fr-FR")} FCFA` : null,
    productUrl ? `\nLien fiche produit : ${productUrl}` : null,
    "",
    "Merci de me confirmer la disponibilité et les modalités de livraison.",
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`;
}

