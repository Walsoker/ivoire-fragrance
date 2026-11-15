/**
 * Catalogue des parfums disponibles actuellement chez Ivoire.Fragrance
 * 
 * Actuellement 3 marques de parfum phares disponibles (1 par maison) :
 * - Oud Nuclear (Maison Fragrance World) : 20 000 FCFA - Quantité limitée
 * - Iris Oud (Maison Born in France) : 15 000 FCFA - Quantité limitée
 * - Imaginari (Maison Jacques Yves) : 15 000 FCFA - Quantité limitée
 * 
 * D'autres marques et créations seront ajoutées au fur et à mesure de leur disponibilité.
 */

export const PRODUCTS = [
  {
    id: "oud-nuclear-01",
    brandId: "oud-nuclear",
    name: "Oud Nuclear",
    slug: "oud-nuclear",
    houseName: "Fragrance World",
    price: 20000,
    volume: "Eau de Parfum",
    stockLabel: "Quantité limitée",
    description: "Une fragrance orientale boisée intense, signature de la maison Fragrance World. Un sillage puissant et raffiné aux notes ambrées et chaleureuses.",
    olfactiveFamily: "Oriental Boisé",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    imageMain: "/images/products/Oud-nuclear-product.PNG",
    gallery: [],
    isAvailable: true,
  },
  {
    id: "iris-oud-01",
    brandId: "iris-oud",
    name: "Iris Oud",
    slug: "iris-oud",
    houseName: "Born in France",
    price: 20000,
    volume: "Eau de Parfum",
    stockLabel: "Quantité limitée",
    description: "Une interprétation magistrale de la maison Born in France, mariant la grâce poudrée et florale de l’iris à la profondeur sensuelle du bois de oud.",
    olfactiveFamily: "Floral Boisé Ambré",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    imageMain: "/images/products/iris-oud-product.PNG",
    gallery: [],
    isAvailable: true,
  },
  {
    id: "imaginari-01",
    brandId: "imaginari",
    name: "Imaginari",
    slug: "imaginari",
    houseName: "Jacques Yves",
    price: 15000,
    volume: "Eau de Parfum",
    stockLabel: "Quantité limitée",
    description: "Création emblématique de la maison Jacques Yves, Imaginari explore des horizons olfactifs contemporains avec une fraîcheur élégante et un fond mystérieux.",
    olfactiveFamily: "Aromatique Boisé",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    imageMain: "/images/products/imaginari.PNG",
    gallery: [],
    isAvailable: true,
  },
];
