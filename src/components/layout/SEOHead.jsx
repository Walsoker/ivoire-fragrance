import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEOHead — Mise à jour dynamique du titre et de la meta description selon la page active
 */
const ROUTE_SEO = {
  '/': {
    title: 'Ivoire.Fragrance — Maison de Haute Parfumerie',
    description: 'Découvrez les collections exclusives de parfums Oud Nuclear, Iris Oud et Imaginari. Commandes WhatsApp directes et conseils sur mesure.',
  },
  '/marques': {
    title: 'Nos Maisons & Marques — Ivoire.Fragrance',
    description: 'Explorez nos maisons partenaires : Fragrance World, Born in France et Jacques Yves. Des univers olfactifs singuliers et raffinés.',
  },
  '/marques/oud-nuclear': {
    title: 'Oud Nuclear par Fragrance World — Ivoire.Fragrance',
    description: 'L’intensité envoûtante du bois de oud sublimée par la maison Fragrance World. 20 000 FCFA, quantité limitée.',
  },
  '/marques/iris-oud': {
    title: 'Iris Oud par Born in France — Ivoire.Fragrance',
    description: 'La rencontre noble entre la délicatesse poudrée de l’iris et la chaleur du oud par Born in France. 15 000 FCFA.',
  },
  '/marques/imaginari': {
    title: 'Imaginari par Jacques Yves — Ivoire.Fragrance',
    description: 'Une fragrance aérienne et contemporaine signée par la maison Jacques Yves. 15 000 FCFA, disponible sur WhatsApp.',
  },
  '/notre-histoire': {
    title: 'Notre Démarche & Histoire — Ivoire.Fragrance',
    description: 'Découvrez la philosophie d’Ivoire.Fragrance : une sélection resserrée de haute parfumerie, un échange privilégié et une authenticité garantie.',
  },
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] || {
      title: 'Ivoire.Fragrance — Haute Parfumerie',
      description: 'Maison de haute parfumerie présentant Oud Nuclear, Iris Oud et Imaginari.',
    };

    document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
  }, [pathname]);

  return null;
}
