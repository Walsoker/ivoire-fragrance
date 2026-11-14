/**
 * Données des 3 maisons et de leurs marques de parfums pour Ivoire.Fragrance
 *
 * Précisions :
 * - Oud Nuclear : Maison Fragrance World (/images/maison/fragrance_world.jpg)
 * - Iris Oud : Maison Born in France (/images/maison/Born_in_france.jpeg)
 * - Imaginari : Maison Jacques Yves (/images/brands/imaginari-brand.png)
 *
 * Actuellement 1 marque / fragrance phare disponible par maison.
 * De futures références seront ajoutées au fur et à mesure.
 */

export const BRANDS = [
  {
    id: "oud-nuclear",
    name: "Oud Nuclear",
    houseName: "Fragrance World",
    slug: "oud-nuclear",
    presentation: "Une création envoûtante de la maison Fragrance World. L’intensité boisée du Oud sublimée dans un équilibre parfait.",
    imageCover: "/images/maison/fragrance_world.jpg",
    imageCampaign: "/images/carousselles/oud-nuclear-hero.PNG",
  },
  {
    id: "iris-oud",
    name: "Iris Oud",
    houseName: "Born in France",
    slug: "iris-oud",
    presentation: "Signée par la maison Born in France, une alliance rare et noble entre la délicatesse poudrée de l'iris et la chaleur du oud.",
    imageCover: "/images/maison/Born_in_france.jpeg",
    imageCampaign: "/images/carousselles/IMG_1620.PNG",
  },
  {
    id: "imaginari",
    name: "Imaginari",
    houseName: "Jacques Yves",
    slug: "imaginari",
    presentation: "Issu de la maison Jacques Yves, Imaginari offre des accords audacieux et aériens qui laissent un sillage inoubliable.",
    imageCover: "/images/brands/imaginari-brand.png",
    imageCampaign: "/images/carousselles/imaginari-hero.png",
  },
];
