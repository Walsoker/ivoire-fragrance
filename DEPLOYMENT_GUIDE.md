# GUIDE DE DÉPLOIEMENT COMPLET — IVOIRE.FRAGRANCE

> Ce document résume l'architecture, la configuration technique, les paramètres de build et le guide pas-à-pas pour déployer le site **Ivoire.Fragrance** sur **Cloudflare Pages** avec un domaine personnalisé acheté chez **OVHcloud**.

---

## 1. Fiche d'Identité du Projet

- **Nom du projet :** Ivoire.Fragrance
- **Type de site :** Vitrine e-commerce de haute parfumerie (Frontend SPA)
- **Stack technique :** React 19 + Vite 8 + Tailwind CSS 4 + React Router 7 + Lucide React
- **Système de commande :** Redirection directe WhatsApp (+225 07 49 41 88 73)
- **Hébergeur recommandé :** Cloudflare Pages (Gratuit, CDN mondial ultra-rapide, protection DDoS automatique, SSL HTTPS gratuit)
- **Registrar du domaine :** OVHcloud
- **Domaine envisagé :** `ivoire-fragrance.com` (ou votre domaine OVH choisi)

---

## 2. Structure et Organisation des Fichiers

```text
Ivoire-fragrance/
├── public/
│   ├── _headers               # En-têtes HTTP de sécurité (CSP, X-Frame-Options, etc.)
│   ├── _redirects             # Redirection SPA (/* /index.html 200) pour Cloudflare Pages
│   ├── robots.txt             # Directives pour moteurs de recherche
│   ├── favicon.svg            # Favicon du site
│   └── images/
│       ├── logo/              # Logo officiel Ivoire.Fragrance
│       ├── brands/            # Visuels des marques (Oud Nuclear, Iris Oud, Imaginari)
│       ├── maison/            # Visuels des maisons partenaires (Fragrance World, Born in France)
│       ├── carousselles/      # Visuels haute résolution du Hero carrousel
│       └── products/          # Photos officielles des flacons
├── src/
│   ├── components/
│   │   ├── layout/            # Header, Footer, HeroCarousel, PageTransitionLoader, ScrollToTop
│   │   ├── brand/             # BrandCard
│   │   ├── product/           # ProductCard, WhatsAppOrderButton
│   │   └── ui/                # PrimaryButton, SecondaryButton, EditorialLink
│   ├── data/
│   │   ├── brands.js          # Données des 3 maisons/marques
│   │   ├── products.js        # Données des 3 parfums avec prix et labels
│   │   └── index.js
│   ├── pages/
│   │   ├── HomePage.jsx       # Accueil complet
│   │   ├── BrandsPage.jsx     # Liste des maisons & marques
│   │   ├── BrandDetailPage.jsx# Page dynamique par marque
│   │   ├── ProductDetailPage.jsx # Fiche détaillée avec commande WhatsApp
│   │   └── HistoryPage.jsx    # Démarche et philosophie
│   ├── styles/
│   │   └── index.css          # Variables design system, polices & animations
│   ├── utils/
│   │   └── whatsapp.js        # Générateur de liens wa.me préremplis
│   ├── App.jsx                # Configuration des routes
│   └── main.jsx
├── index.html                 # Point d'entrée HTML avec Google Fonts (Cormorant Garamond, DM Sans)
├── package.json               # Scripts et dépendances
├── vite.config.js             # Configuration Vite + Tailwind plugin
└── tailwind.config.js         # Tokens de design system
```

---

## 3. Paramètres de Build pour Cloudflare Pages

Lors de la connexion de votre dépôt GitHub à **Cloudflare Pages**, utilisez exactement ces paramètres :

| Paramètre | Valeur à renseigner |
| :--- | :--- |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (ou le chemin du sous-dossier si dans un monorepo) |
| **Node.js version** | `20` ou supérieure (définir la variable d'environnement `NODE_VERSION = 20`) |

---

## 4. Fichiers Critiques pour Cloudflare Pages (Déjà inclus dans `public/`)

### A. Redirection SPA (`public/_redirects`)
Indispensable pour que les routes comme `/marques`, `/marques/oud-nuclear` ou `/notre-histoire` ne renvoient pas une erreur 404 lors du rechargement de la page :
```text
/*    /index.html   200
```

### B. En-têtes de Sécurité (`public/_headers`)
Applique automatiquement les protections contre les attaques XSS, Clickjacking et MIME-sniffing :
```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://connect.facebook.net https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://wa.me https://www.facebook.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; frame-ancestors 'none';
```

---

## 5. Procédure Pas-à-Pas : Déploiement Cloudflare Pages

### Étape 1 : Pousser le code sur GitHub
1. Créez un dépôt privé ou public sur [GitHub](https://github.com).
2. Depuis le terminal de votre projet :
   ```bash
   git init
   git add .
   git commit -m "feat: site officiel Ivoire.Fragrance prêt pour production"
   git branch -M main
   git remote add origin https://github.com/<votre-nom-utilisateur>/<nom-du-repo>.git
   git push -u origin main
   ```

### Étape 2 : Connecter Cloudflare Pages
1. Rendez-vous sur le tableau de bord [Cloudflare Dashboard](https://dash.cloudflare.com/) (inscription gratuite).
2. Dans le menu de gauche, cliquez sur **Workers & Pages** > **Create application** > onglet **Pages** > **Connect to Git**.
3. Autorisez l'accès à votre compte GitHub et sélectionnez le dépôt du projet.
4. Renseignez les configurations :
   - **Project name :** `ivoire-fragrance`
   - **Production branch :** `main`
   - **Framework preset :** `Vite`
   - **Build command :** `npm run build`
   - **Build output directory :** `dist`
5. Cliquez sur **Save and Deploy**.
6. Cloudflare compile et déploie le site en moins d'une minute sur une URL type `https://ivoire-fragrance.pages.dev`.

---

## 6. Connexion du Nom de Domaine OVHcloud à Cloudflare Pages

Deux méthodes sont possibles. La **Méthode 1 (Délégation DNS Cloudflare)** est fortement recommandée car elle active automatiquement le CDN Cloudflare mondial, la protection anti-DDoS et le certificat SSL gratuit.

### Méthode 1 : Avec les serveurs DNS Cloudflare (Recommandée & Automatique)

1. **Dans Cloudflare Pages :**
   - Allez dans votre projet Pages > Onglet **Custom domains** > Cliquez sur **Set up a custom domain**.
   - Saisissez votre domaine (ex: `ivoire-fragrance.com`).
   - Cloudflare va vous proposer d'ajouter le domaine à votre compte Cloudflare et vous donner **deux serveurs de noms (Nameservers)** (ex: `aria.ns.cloudflare.com` et `bob.ns.cloudflare.com`).

2. **Dans votre espace client OVHcloud :**
   - Connectez-vous sur [OVHcloud Web Cloud](https://www.ovh.com/manager/).
   - Dans la colonne de gauche, cliquez sur **Noms de domaine** > sélectionnez votre domaine.
   - Cliquez sur l'onglet **Serveurs DNS**.
   - Cliquez sur **Modifier les serveurs DNS**.
   - Remplacez les serveurs DNS actuels d'OVH par les deux serveurs fournis par Cloudflare.
   - Validez. La propagation DNS prend généralement entre 15 minutes et 2 heures.
   - Dès que la propagation est terminée, votre site est en ligne en HTTPS sur votre nom de domaine !

---

### Méthode 2 : En conservant la zone DNS chez OVHcloud (Alternative CNAME)

Si vous souhaitez laisser la gestion DNS chez OVH :
1. Dans Cloudflare Pages > **Custom domains** > Ajouter `ivoire-fragrance.com` et `www.ivoire-fragrance.com`.
2. Cloudflare vous indiquera la cible CNAME (ex: `ivoire-fragrance.pages.dev`).
3. Dans l'espace client OVHcloud > **Zone DNS** de votre domaine :
   - Ajoutez ou modifiez l'enregistrement pour le sous-domaine `www` :
     - **Type :** `CNAME`
     - **Cible :** `ivoire-fragrance.pages.dev.` *(avec un point final chez OVH)*
   - Pour le domaine racine (`@` / `ivoire-fragrance.com`), redirigez vers `www.ivoire-fragrance.com` ou utilisez un alias selon les options OVH.

---

## 7. Checklist Finale Avant Diffusion Publique

- [x] Compilation sans erreur (`npm run build`).
- [x] Zéro vulnérabilité de dépendances (`npm audit`).
- [x] Redirections SPA actives (`public/_redirects`).
- [x] En-têtes de sécurité HTTP configurés (`public/_headers`).
- [x] Numéro WhatsApp officiel configuré (`+225 07 49 41 88 73`).
- [x] Liens des réseaux sociaux officiels vérifiés (TikTok, Instagram, Facebook).
- [x] Prix réels en FCFA et labels « Quantité limitée » affichés.
- [x] Certificat SSL / HTTPS actif sur Cloudflare (gratuit et renouvelé automatiquement).

