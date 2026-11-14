# Ivoire.Fragrance — Design System Master Specification

> **Source of Truth** pour l'interface utilisateur, la direction artistique et l'expérience digitale d'Ivoire.Fragrance.  
> Conforme au cahier des charges officiel (Version 1.0 - 9 novembre 2026) et enrichi par la méthodologie **UI/UX Pro Max**.

---

## 1. Vision & Principes Fondamentaux

- **Positionnement :** Maison de haute parfumerie contemporaine, vitrine digitale prestigieuse (pas un catalogue e-commerce générique).
- **Mots-clés :** Ivoire, or champagne, noir profond, composition éditoriale, minimalisme raffiné, asymétrie maîtrisée, espace négatif généreux.
- **Règles d'or :**
  1. **Photographie au premier plan :** Les flacons et univers de marque dominent la hiérarchie visuelle.
  2. **Or mesuré :** L'or champagne est une touche de lumière (liserés fins, accents subtils, boutons clés) ; il ne doit jamais submerger la composition.
  3. **Typographie contrastée :** Duo Serif éditorial (Cormorant Garamond) et Sans-serif fonctionnelle (DM Sans / Inter).
  4. **Accessibilité & Lisibilité :** Aucun texte or clair sur fond crème ; contraste minimal de 4.5:1 garanti.
  5. **Zéro fake data :** Ne jamais inventer de données ni de faux prix.

---

## 2. Palette Chromatique Complète

### 2.1 Teintes Fondamentales (Design Tokens)

| Token CSS | Nom | Hex | Rôle & Usage |
| :--- | :--- | :--- | :--- |
| `--color-ivory-warm` | Ivoire Chaud | `#F7F1E7` | **Arrière-plan principal** du site (grandes surfaces lumineuses) |
| `--color-cream-light` | Crème Clair | `#FDFBF7` | **Arrière-plan secondaire**, cartes de parfums et conteneurs |
| `--color-gold-primary` | Or Champagne | `#B88635` | **Accents primaires**, liserés actifs, détails d'orfèvrerie |
| `--color-gold-soft` | Or Clair / Doux | `#D7B879` | **Survols dorés**, séparateurs discrets, reflets |
| `--color-text-primary` | Noir Profond | `#191714` | **Titres majeurs**, typographie éditoriale, boutons pleins |
| `--color-text-secondary`| Brun Chaud Muted| `#746B60` | **Textes courants**, notes olfactives, métadonnées |
| `--color-border-soft` | Beige Doux | `#E7DED0` | **Bordures ultra-fines (1px)**, délimitations sobres |
| `--color-dark-accent` | Noir Chaud | `#171512` | **Fonds sombres contrastés** (sections éditoriales nocturnes) |
| `--color-white` | Blanc Pur | `#FFFFFF` | Fond de popups, reflets, cartes flottantes |
| `--color-whatsapp` | WhatsApp Emerald| `#25D366` | Accents de conversion commande |
| `--color-whatsapp-dark`| WhatsApp Hover | `#128C7E` | Survol WhatsApp |

---

## 3. Typographie

### 3.1 Polices de Caractères
- **Serif (Titres éditoriaux) :** `Cormorant Garamond` (alternatives : `Playfair Display`, serif)
  - Poids : `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`
  - Caractère : majestueux, raffiné, aéré
- **Sans-serif (Interface & Texte courant) :** `DM Sans` (alternatives : `Inter`, sans-serif)
  - Poids : `300 (Light)`, `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`
  - Caractère : neutre, net, très lisible sur smartphone

### 3.2 Échelle Typographique & Hiérarchie

| Niveau | Taille Desktop | Taille Mobile | Police | Style & Espacement |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | 72–88px (`text-7xl` - `text-8xl`) | 40–48px (`text-4xl` - `text-5xl`) | Serif | `leading-[1.05] tracking-tight` |
| **Section Title** | 42–52px (`text-4xl` - `text-5xl`) | 32–36px (`text-3xl`) | Serif | `leading-tight tracking-normal` |
| **Brand / Page** | 32–40px (`text-3xl` - `text-4xl`) | 26–30px (`text-2xl`) | Serif | `leading-snug` |
| **Product Title** | 22–26px (`text-xl` - `text-2xl`) | 20–22px (`text-lg`) | Serif / Sans | `font-medium tracking-wide` |
| **Body Large** | 18px (`text-lg`) | 16px (`text-base`) | Sans | `leading-relaxed text-[#746B60]` |
| **Body Normal** | 15–16px (`text-base`) | 14–15px (`text-sm`) | Sans | `leading-normal` |
| **Overline / Tag** | 11–12px (`text-xs`) | 10–11px (`text-[10px]`) | Sans | `uppercase tracking-[0.25em] font-semibold` |
| **Price / Meta** | 16–18px (`text-base` - `text-lg`)| 15–16px (`text-sm`)| Sans / Serif | `tracking-wider font-medium` |

---

## 4. Système d'Espacement, Grille & Conteneurs

- **Conteneur Maximal :** `max-w-7xl` (1280px) pour le contenu courant ; `max-w-[1440px]` pour les galeries éditoriales.
- **Marges Latérales :**
  - Mobile : `px-5` (20px)
  - Tablette : `px-8` (32px)
  - Desktop : `px-12` à `px-16` (48px - 64px)
- **Rythme Vertical :**
  - Entre sections desktop : `py-24` à `py-32` (96px - 128px)
  - Entre sections mobile : `py-14` à `py-18` (56px - 72px)
  - Entre blocs internes : `space-y-6` à `space-y-10`

---

## 5. Composants UI & Micro-Interactions

### 5.1 Boutons
1. **Bouton Primaire (Noir Luxe) :**
   - Fond `#191714`, texte `#FDFBF7`, liseré transparent.
   - Survol : fond `#B88635`, transition douce 300ms.
   - Typographie : `text-xs uppercase tracking-[0.2em] px-8 py-4`.
2. **Bouton Éditorial / Découverte (Liseré Or) :**
   - Fond transparent, bordure 1px `#B88635`, texte `#191714`.
   - Survol : fond `#191714`, bordure `#191714`, texte `#FFFFFF`.
3. **Bouton WhatsApp (Conversion) :**
   - Liseré ou fond plein noir avec icône fine WhatsApp ou accent `#25D366`.
   - Message explicite et direct : « Commander sur WhatsApp ».

### 5.2 Cartes de Parfums & de Marques
- Ratio photo éditorial généreux : `aspect-[3/4]` ou `aspect-[4/5]`.
- Légère élévation ou bordure 1px ultra-fine `#E7DED0`.
- Au survol : zoom subtil de l'image (`scale-[1.03]` sur 600ms) sans à-coup.
- Aucun badge criard, stickers ou réductions invasives.

---

## 6. Accessibilité (A11y) & Performance
- **Contrastes :** Minimum 4.5:1 sur tous les textes de contenu.
- **Focus Rings :** Liseré fin doré `#B88635` avec offset de 2px (`focus-visible:ring-1 focus-visible:ring-[#B88635]`).
- **Supports tactiles :** Cibles tactiles ≥ 44×44px sur mobile.
- **Réduction des animations :** Respect strict de `prefers-reduced-motion`.
- **Formats d'image :** Privilégier WebP / AVIF avec dimensions réservées (zéro décalage de layout CLS).

