# Ivoire.Fragrance --- Cahier des charges UI/UX et architecture du site

**Version :** 1.0\
**Date :** 9 novembre 2026\
**Type de document :** spécification fonctionnelle, design system et
architecture technique\
**Périmètre :** site vitrine e-commerce avec commande finalisée sur
WhatsApp

------------------------------------------------------------------------

## 1. Présentation du projet

Ivoire.Fragrance est une boutique de parfums qui présente une sélection
organisée autour de trois marques :

  Marque          Nombre de parfums
  ------------- -------------------
  Oud Nuclear                     4
  Iris Oud                        4
  Imaginari                       4
  **Total**          **12 parfums**

Le site doit donner une image premium, élégante, moderne et cohérente.
Il ne doit pas ressembler à un catalogue générique de commerce en ligne.
L'expérience doit mettre en valeur les parfums à travers de grandes
images éditoriales, une typographie raffinée, des espaces généreux et
une navigation simple.

### Objectif principal

Présenter les trois marques et leurs douze parfums, donner envie de
découvrir les produits et permettre au visiteur de démarrer facilement
une commande sur WhatsApp.

### Informations commerciales confirmées

-   Nom de la boutique : **Ivoire.Fragrance**
-   Marques : **Oud Nuclear**, **Iris Oud**, **Imaginari**
-   Catalogue initial : **4 parfums par marque**, soit 12 références
-   Devise : **FCFA**
-   WhatsApp de commande : **+225 07 49 41 88 73**
-   Paiement en ligne : **non prévu au lancement**
-   Finalisation de la commande : **conversation WhatsApp**
-   Adresse de domaine envisagée : **ivoire-fragrance.com**

Les noms exacts des douze parfums, les prix, les volumes, les
descriptions, les notes olfactives, les stocks et les photographies
définitives restent à renseigner. Le site ne doit jamais inventer ces
informations.

------------------------------------------------------------------------

## 2. Direction artistique

### 2.1 Intention visuelle

La direction artistique s'inspire de l'image de référence fournie pour
Oud Nuclear : une ambiance lumineuse, chaleureuse et luxueuse, avec un
fond ivoire, des reflets dorés, une mise en scène soignée du flacon et
une composition éditoriale.

L'objectif n'est pas de reproduire exactement cette image, mais d'en
reprendre les principes :

-   Luxe discret, sans surcharge décorative.
-   Palette ivoire, crème, noir et or champagne.
-   Photographies de parfums mises au premier plan.
-   Typographie élégante avec contraste entre serif et sans-serif.
-   Composition asymétrique et éditoriale.
-   Espaces blancs généreux.
-   Animations subtiles et maîtrisées.
-   Hiérarchie visuelle claire : marque, parfum, message, action.

Le rendu doit évoquer une maison de parfumerie contemporaine et soignée,
plutôt qu'une boutique promotionnelle.

### 2.2 Palette de couleurs

Les valeurs ci-dessous constituent la base du design system. Elles
pourront être ajustées après les premiers écrans, mais elles doivent
rester cohérentes sur l'ensemble du site.

  Rôle                   Couleur           Code
  ---------------------- ----------------- -----------
  Fond principal         Ivoire chaud      `#F7F1E7`
  Fond secondaire        Crème clair       `#FDFBF7`
  Or principal           Or champagne      `#B88635`
  Or doux                Or clair          `#D7B879`
  Texte principal        Noir profond      `#191714`
  Texte secondaire       Brun/gris chaud   `#746B60`
  Bordures               Beige doux        `#E7DED0`
  Blanc                  Blanc pur         `#FFFFFF`
  Fond sombre ponctuel   Noir chaud        `#171512`

**Règles d'utilisation :**

-   L'ivoire et le crème dominent les grandes surfaces.
-   Le noir profond est réservé aux titres et aux textes importants.
-   L'or sert à souligner, encadrer ou mettre en évidence une action ;
    il ne doit pas recouvrir tous les éléments.
-   Le texte courant doit rester très lisible : ne pas utiliser un doré
    clair sur un fond crème.
-   Les fonds sombres peuvent être utilisés ponctuellement pour créer un
    contraste éditorial, pas comme thème principal.

### 2.3 Typographie

Le système typographique doit associer une police serif expressive pour
l'élégance et une sans-serif neutre pour la lisibilité.

**Association recommandée :**

-   Titres éditoriaux : `Cormorant Garamond` ou `Playfair Display`.
-   Textes, navigation et boutons : `DM Sans` ou `Inter`.

**Hiérarchie indicative :**

  Élément              Taille desktop Traitement
  ------------------ ---------------- ---------------------------------------
  Grand titre Hero          64--88 px Serif, léger à moyen
  Titre de section          40--56 px Serif
  Titre de page             48--64 px Serif
  Nom de parfum             24--32 px Serif ou sans-serif selon le contexte
  Texte courant             16--18 px Sans-serif
  Navigation                13--15 px Sans-serif, espacement léger
  Petit libellé             11--13 px Capitales espacées

Sur mobile, les titres doivent être redimensionnés pour éviter les
débordements. Les textes essentiels ne doivent pas devenir trop petits.

### 2.4 Iconographie et éléments graphiques

-   Utiliser des icônes fines et simples, cohérentes entre elles.
-   Bibliothèque recommandée : Lucide React.
-   Éviter les emojis dans l'interface.
-   Préférer des traits fins, des séparateurs discrets et des bordures
    sobres.
-   Les effets métalliques, ombres fortes, dégradés dorés et effets 3D
    doivent rester rares.
-   Les boutons doivent être élégants, lisibles et faciles à identifier.

### 2.5 Photographie et traitement des images

La photographie est un élément central de l'identité visuelle.

**Style recherché :**

-   Flacons photographiés avec une lumière douce et directionnelle.
-   Fonds ivoire, crème, pierre claire ou décors sobres.
-   Reflets maîtrisés sur le verre et les bouchons.
-   Ombres naturelles et réalistes.
-   Mise en scène premium, sans accumulation d'accessoires.
-   Cadrages éditoriaux avec de l'espace autour du produit.

**Règles :**

-   Ne pas utiliser une image générique qui ne correspond pas au parfum
    réellement vendu.
-   Ne pas modifier artificiellement l'étiquette, le nom ou le packaging
    d'un produit.
-   Prévoir une image principale de qualité pour chaque parfum et des
    images supplémentaires si elles sont disponibles.
-   Utiliser des formats adaptés et compressés, idéalement WebP ou AVIF.
-   Prévoir un recadrage spécifique pour mobile plutôt que de réduire
    simplement l'image desktop.

------------------------------------------------------------------------

## 3. Expérience de la page d'accueil

La page d'accueil doit présenter l'univers de la boutique et orienter
rapidement vers les marques et les parfums.

### 3.1 En-tête / navigation

L'en-tête doit être minimaliste.

**Éléments :**

-   Logo Ivoire.Fragrance à gauche.
-   Liens de navigation : Accueil, Nos marques, Notre histoire.
-   Icône ou lien WhatsApp clairement identifiable.
-   Menu mobile sous forme de menu compact.

**Comportement :**

-   En-tête transparent ou discret au-dessus du Hero si le contraste le
    permet.
-   Au défilement, l'en-tête peut devenir ivoire avec une séparation
    très fine.
-   Navigation fixe possible, à condition de ne pas prendre trop de
    hauteur.
-   Les liens actifs doivent être identifiables sans décoration
    excessive.

### 3.2 Hero principal en carrousel

Le Hero doit être la section visuellement la plus forte de la page
d'accueil.

Le concept retenu est un **carrousel éditorial de campagnes parfumées**.
Chaque slide présente une marque ou un parfum mis en scène.

**Structure d'une slide :**

1.  Nom de la marque ou du parfum.
2.  Accroche courte et évocatrice.
3.  Bouton d'action : « Découvrir » ou « Explorer la fragrance ».
4.  Grande photographie de campagne.
5.  Éventuel repère de navigation du carrousel.

**Exemple de direction pour Oud Nuclear :**

-   Fond ivoire lumineux.
-   Texte à gauche : « Oud Nuclear ».
-   Accroche : « Un parfum, une présence. »
-   Bouton fin bordé d'or.
-   Flacon et coffret à droite, dans une composition photographique
    luxueuse.

Les autres slides devront conserver la même grammaire visuelle tout en
ayant leur propre ambiance photographique et leur propre contenu réel.

**Comportement du carrousel :**

-   Navigation par flèches et indicateurs de pagination.
-   Glissement tactile sur mobile.
-   Défilement automatique lent uniquement si cela ne nuit pas à la
    lecture.
-   Pause au survol et lorsque l'utilisateur interagit.
-   Respect de la préférence système de réduction des animations.
-   Pas de transition agressive ni d'effet spectaculaire.
-   Chaque slide doit avoir un lien d'action pertinent.
-   Le carrousel doit rester utilisable au clavier et accessible.

Le carrousel ne doit pas devenir un prétexte pour cacher les
informations importantes. Les marques et les accès au catalogue doivent
rester visibles en dessous.

### 3.3 Section « Nos marques »

Présenter les trois marques sous forme de cartes éditoriales :

-   Oud Nuclear
-   Iris Oud
-   Imaginari

Chaque carte comporte une photographie représentative, le nom de la
marque et un lien pour découvrir son univers.

Les cartes peuvent avoir des proportions généreuses et des images
immersives. Éviter les cartes e-commerce standard avec trop de bordures
et de badges.

### 3.4 Section sélection / découverte

Présenter une sélection de parfums avec :

-   Photographie du flacon.
-   Nom du parfum.
-   Marque.
-   Prix en FCFA lorsqu'il est confirmé.
-   Lien vers la fiche produit.

Ne pas afficher de prix fictif. Tant que les prix ne sont pas fournis,
cette information doit être masquée ou indiquée comme non renseignée
dans les données, sans inventer une valeur.

### 3.5 Section expérience et commande

Expliquer le parcours en trois étapes simples :

1.  Découvrir les marques et les parfums.
2.  Choisir une fragrance.
3.  Échanger avec Ivoire.Fragrance sur WhatsApp pour finaliser la
    commande.

Cette section doit rassurer le visiteur sur la simplicité du processus.

### 3.6 Pied de page

Le footer doit contenir :

-   Logo et courte présentation.
-   Navigation secondaire.
-   Liens vers TikTok et Instagram lorsque les comptes officiels seront
    confirmés.
-   Contact WhatsApp.
-   Informations de livraison et conditions commerciales lorsqu'elles
    seront définies.
-   Mention de copyright.

Ne pas inventer de comptes sociaux, d'adresse physique ou de politique
de livraison.

------------------------------------------------------------------------

## 4. Architecture des pages

### 4.1 Page d'accueil --- `/`

Objectif : présenter l'identité de la boutique et guider le visiteur
vers le catalogue.

Sections :

1.  Header.
2.  Hero carrousel.
3.  Présentation des trois marques.
4.  Sélection de parfums.
5.  Présentation de l'expérience Ivoire.Fragrance.
6.  Explication de la commande WhatsApp.
7.  Footer.

### 4.2 Page des marques --- `/marques`

Objectif : donner une vue d'ensemble des trois univers.

Contenu :

-   Titre éditorial.
-   Introduction courte.
-   Trois blocs de marques.
-   Visuels propres à chaque univers.
-   Accès à la page de chaque marque.

### 4.3 Page d'une marque --- `/marques/:slug`

Objectif : présenter une marque et ses quatre parfums.

Contenu :

-   Visuel de couverture de la marque.
-   Nom et présentation de la marque.
-   Grille des quatre parfums.
-   Accès à chaque fiche produit.

Le composant doit être réutilisable pour les trois marques. Seules les
données changent selon le slug de l'URL.

### 4.4 Fiche parfum --- `/parfums/:slug`

Objectif : convaincre le visiteur et faciliter la commande.

Contenu :

-   Galerie d'images du parfum.
-   Nom du parfum.
-   Marque associée.
-   Prix en FCFA.
-   Contenance.
-   Description.
-   Famille olfactive et notes, uniquement si ces informations sont
    vérifiées.
-   Disponibilité.
-   Sélecteur de quantité si la quantité peut être commandée.
-   Bouton « Commander sur WhatsApp ».
-   Éventuellement, suggestions d'autres parfums.

Le bouton de commande doit être désactivé ou remplacé par une indication
appropriée lorsque le prix ou la disponibilité ne sont pas confirmés.

### 4.5 Page Notre histoire --- `/notre-histoire`

Objectif : présenter la démarche, les valeurs et l'identité de la
boutique.

Le contenu final sera rédigé à partir de l'histoire réelle de
l'entreprise. Ne pas inventer de date de création, d'origine ou de
promesse commerciale.

### 4.6 Pages complémentaires éventuelles

À prévoir lorsque les informations seront disponibles :

-   Livraison et retours.
-   Questions fréquentes.
-   Contact.
-   Mentions légales et politique de confidentialité.

------------------------------------------------------------------------

## 5. Parcours de commande WhatsApp

Le site ne collecte pas de paiement en ligne au lancement. WhatsApp est
le canal de finalisation de la commande.

**Numéro de destination :** `2250749418873`

### Parcours

1.  Le visiteur consulte une fiche parfum.
2.  Il sélectionne une quantité.
3.  Il clique sur le bouton WhatsApp.
4.  WhatsApp s'ouvre avec un message prérempli.
5.  Le client vérifie le message et l'envoie lui-même.
6.  L'équipe confirme la disponibilité, le prix final et les modalités
    de livraison dans la conversation.

### Contenu du message prérempli

Le message peut inclure :

-   Nom du parfum.
-   Marque.
-   Quantité.
-   Prix unitaire, s'il est renseigné.
-   Total indicatif, s'il peut être calculé.
-   Lien de la fiche produit.

Le site doit préciser implicitement ou explicitement que le clic ouvre
WhatsApp : la commande n'est pas transmise tant que le client n'a pas
envoyé le message.

Les frais de livraison ne doivent pas être intégrés au total tant qu'ils
ne sont pas connus.

------------------------------------------------------------------------

## 6. Design system --- règles d'interface

### 6.1 Grille et espacements

-   Utiliser une grille cohérente sur toutes les pages.
-   Prévoir un conteneur de contenu centré avec une largeur maximale
    adaptée aux grands écrans.
-   Conserver des marges latérales généreuses sur desktop.
-   Réduire progressivement les marges sur tablette et mobile.
-   Utiliser une échelle d'espacement cohérente plutôt que des valeurs
    arbitraires.
-   Éviter les sections trop serrées : l'espace vide participe à
    l'impression premium.

### 6.2 Boutons

Prévoir trois styles principaux :

**Bouton principal** - Fond noir ou or suffisamment contrasté. - Texte
clair. - Forme sobre. - Action principale de la section.

**Bouton secondaire** - Fond transparent. - Bordure fine or ou noir. -
Texte noir. - Utilisé pour les actions de découverte.

**Lien éditorial** - Texte simple avec soulignement discret, flèche ou
animation légère. - Utilisé pour les navigations secondaires.

Les boutons doivent disposer d'états visibles : repos, survol, focus
clavier, actif et désactivé.

### 6.3 Cartes de marques et de produits

-   Images dominantes.
-   Peu de bordures.
-   Titres clairement hiérarchisés.
-   Alignement régulier.
-   Zone cliquable suffisamment grande.
-   Effets au survol subtils : léger zoom de l'image ou déplacement très
    limité.
-   Pas d'ombre lourde ni de badges décoratifs inutiles.

### 6.4 Animations

Les animations doivent soutenir la lecture et la découverte :

-   Apparition douce des sections.
-   Transitions courtes entre états.
-   Zoom très léger des images au survol.
-   Déplacement discret des éléments éditoriaux.
-   Transitions du carrousel fluides.

Éviter les animations longues, les effets de parallaxe excessifs et les
éléments qui bougent en permanence.

### 6.5 Responsive design

Le site doit être conçu mobile-first, car une part importante des
visiteurs provenant des réseaux sociaux consultera probablement le site
sur smartphone.

**Desktop :** - Hero en composition horizontale. - Image produit de
grande taille. - Navigation complète. - Grilles de plusieurs colonnes.

**Tablette :** - Réduction des espaces et des tailles de titres. -
Grilles adaptées à deux colonnes si nécessaire. - Hero rééquilibré.

**Mobile :** - Navigation compacte. - Hero empilé ou recadré
spécifiquement. - Texte et bouton immédiatement lisibles. - Produits sur
une ou deux colonnes selon la largeur. - Boutons adaptés au tactile. -
Aucun défilement horizontal non intentionnel. - WhatsApp facilement
accessible sans masquer le contenu.

------------------------------------------------------------------------

## 7. Stack technique recommandée

Le projet est un site vitrine avec catalogue et redirection vers
WhatsApp. Il n'a pas besoin d'un backend au lancement.

### 7.1 Frontend

  Technologie          Utilisation
  -------------------- --------------------------------------------
  React                Construction de l'interface en composants
  Vite                 Initialisation, développement et build
  JavaScript           Logique et données du catalogue
  React Router         Navigation entre les pages
  Tailwind CSS         Mise en forme et responsive design
  CSS personnalisé     Variables, détails éditoriaux et finitions
  Lucide React         Icônes
  Motion (optionnel)   Animations maîtrisées

### 7.2 Choix d'implémentation

-   Utiliser React avec Vite.
-   Utiliser JavaScript pour garder une base simple à maintenir.
-   Utiliser React Router pour les routes.
-   Utiliser Tailwind CSS pour les styles utilitaires, avec un design
    system défini dans les variables CSS.
-   Créer des composants personnalisés plutôt que d'adopter un thème
    prêt à l'emploi.
-   Ne pas utiliser une bibliothèque de composants générique qui
    donnerait au site une apparence standardisée.
-   Utiliser Motion uniquement si une animation apporte une réelle
    valeur.
-   Utiliser Lucide React pour les icônes.

### 7.3 Gestion des données

Au lancement :

-   Les données des marques et produits sont stockées dans des fichiers
    locaux du projet.
-   Chaque marque possède un identifiant et un slug.
-   Chaque produit est associé à une marque.
-   Les prix, volumes, descriptions, images et disponibilités sont
    renseignés dans les données.
-   Les fonctions de recherche et de filtrage peuvent être ajoutées si
    le catalogue évolue.

Aucune base de données n'est nécessaire pour les douze produits
initiaux.

### 7.4 Backend futur

Laravel et MySQL ne sont pas nécessaires dans la première version.

Ils pourront être ajoutés lorsque le projet aura besoin de :

-   Espace administrateur.
-   Ajout et modification de produits sans modifier le code.
-   Gestion du stock.
-   Gestion centralisée des commandes.
-   Comptes clients.
-   Paiement en ligne.
-   Historique des commandes.

Il faut donc garder une séparation propre entre données, composants et
pages pour faciliter une future évolution.

### 7.5 Hébergement et déploiement

Stack de lancement recommandée :

-   GitHub : versionnement du code.
-   Cloudflare Pages : hébergement du frontend statique.
-   OVHcloud : achat et gestion du nom de domaine.
-   HTTPS : activation via la plateforme d'hébergement.

Le site doit être déployable à partir du dépôt GitHub avec une commande
de build Vite et le répertoire de sortie correspondant.

------------------------------------------------------------------------

## 8. Organisation du projet

Organisation indicative des dossiers :

-   `public/` : ressources statiques accessibles directement.
-   `public/images/brands/` : images des trois marques.
-   `public/images/products/` : images des douze parfums.
-   `src/assets/` : ressources importées par les composants.
-   `src/components/` : composants partagés.
-   `src/pages/` : pages liées aux routes.
-   `src/data/` : catalogue local.
-   `src/utils/` : fonctions utilitaires, notamment la génération des
    liens WhatsApp.
-   `src/hooks/` : hooks personnalisés si le projet en nécessite.
-   `src/styles/` : variables globales et styles spécifiques.
-   `src/` : point d'entrée et configuration de l'application.

### Composants partagés à prévoir

-   Header / Navbar.
-   Footer.
-   HeroCarousel.
-   BrandCard.
-   ProductCard.
-   ProductGrid.
-   ProductGallery.
-   WhatsAppOrderButton.
-   QuantitySelector.
-   SectionHeading.
-   Breadcrumbs.
-   MobileMenu.

Les composants doivent être réutilisables et recevoir leurs informations
via des propriétés. Éviter de dupliquer la même structure pour chaque
marque.

------------------------------------------------------------------------

## 9. Modèle de contenu du catalogue

Chaque marque doit disposer des informations suivantes :

-   Identifiant.
-   Nom.
-   Slug.
-   Présentation.
-   Image principale.
-   Éventuellement une image de campagne.

Chaque parfum doit disposer des informations suivantes :

-   Identifiant.
-   Nom commercial.
-   Slug.
-   Identifiant de marque.
-   Prix en FCFA.
-   Contenance.
-   Description.
-   Famille olfactive.
-   Notes de tête, de cœur et de fond, si elles sont connues.
-   Image principale.
-   Galerie secondaire éventuelle.
-   Disponibilité.

Les douze produits peuvent être initialisés avec des champs incomplets,
mais l'interface publique doit éviter d'afficher des données fictives ou
des libellés temporaires.

### Convention de nommage des images

Exemples de noms de fichiers :

-   `oud-nuclear-cover.webp`
-   `iris-oud-cover.webp`
-   `imaginari-cover.webp`
-   `oud-nuclear-parfum-01.webp`
-   `oud-nuclear-parfum-02.webp`

Conserver une convention similaire pour les douze références.

------------------------------------------------------------------------

## 10. SEO, accessibilité et performance

### SEO

-   Un titre et une description propres à chaque page.
-   Des URLs lisibles avec des slugs.
-   Des titres hiérarchisés correctement.
-   Des textes alternatifs pertinents pour les images.
-   Des images optimisées.
-   Une favicon et des métadonnées de partage social.
-   Un sitemap et un fichier robots adaptés au site publié.

Pour un catalogue dont chaque produit doit être correctement indexé,
évaluer le rendu pré-généré ou le rendu côté serveur avant de considérer
le SEO comme terminé. Une application React uniquement rendue côté
client peut limiter l'indexation ou l'aperçu de certaines pages selon
les moteurs et les plateformes.

### Accessibilité

-   Contrastes suffisants entre texte et arrière-plan.
-   Navigation clavier.
-   Focus visible.
-   Boutons et liens avec des libellés explicites.
-   Textes alternatifs pour les images utiles.
-   Respect de la réduction des animations.
-   Contrôles du carrousel accessibles.

### Performance

-   Images WebP ou AVIF.
-   Chargement différé des images hors écran.
-   Dimensions d'image réservées pour limiter les décalages de mise en
    page.
-   Limiter les bibliothèques et animations superflues.
-   Polices optimisées et nombre de variantes limité.
-   Vérification des performances sur mobile et réseau lent.

------------------------------------------------------------------------

## 11. Principes à respecter pendant la réalisation

1.  **Priorité à l'identité visuelle.** Ne pas produire un site
    e-commerce générique.
2.  **Photographie avant décoration.** Les parfums doivent être les
    éléments visuels principaux.
3.  **Sobriété.** L'or doit rester un accent, pas envahir l'interface.
4.  **Cohérence.** Les trois marques doivent avoir une présentation
    cohérente tout en pouvant conserver leur propre univers.
5.  **Réutilisabilité.** Une page de marque et une fiche produit doivent
    être alimentées par les données, pas dupliquées.
6.  **Mobile-first.** Chaque écran doit être pensé et testé sur
    smartphone.
7.  **Aucune donnée inventée.** Prix, notes, volumes, disponibilité et
    promesses doivent être confirmés.
8.  **Commande transparente.** Le client doit comprendre qu'il finalise
    sa commande en envoyant un message sur WhatsApp.
9.  **Performance.** Ne pas sacrifier la vitesse pour des animations
    décoratives.
10. **Évolutivité.** Le projet doit pouvoir accueillir un backend
    Laravel plus tard sans devoir réécrire toute l'interface.

------------------------------------------------------------------------

## 12. Ordre de réalisation recommandé

### Phase 1 --- Fondations

-   Initialiser React avec Vite.
-   Installer et configurer React Router.
-   Installer Tailwind CSS.
-   Définir les couleurs, typographies, espacements et règles
    responsive.
-   Mettre en place la structure des dossiers.
-   Préparer les données des trois marques et des douze produits.

### Phase 2 --- Composants de base

-   Header et navigation mobile.
-   Footer.
-   Boutons.
-   Titres de section.
-   Cartes de marque.
-   Cartes de produit.
-   Bouton WhatsApp.

### Phase 3 --- Pages principales

-   Accueil et Hero carrousel.
-   Liste des marques.
-   Page dynamique de marque.
-   Fiche produit dynamique.
-   Notre histoire.

### Phase 4 --- Finitions UI/UX

-   Animations discrètes.
-   Responsive desktop, tablette et mobile.
-   États de chargement, indisponibilité et données manquantes.
-   Accessibilité et navigation clavier.
-   Vérification des liens WhatsApp.

### Phase 5 --- Préparation à la publication

-   Renseigner les douze fiches réelles.
-   Ajouter les photographies définitives.
-   Ajouter les informations commerciales et sociales confirmées.
-   Optimiser les images.
-   Configurer les métadonnées SEO.
-   Tester les routes et les liens.
-   Déployer sur Cloudflare Pages.
-   Connecter le domaine.

------------------------------------------------------------------------

## 13. Critères de validation avant publication

Le site pourra être considéré comme prêt lorsque :

-   Les trois marques sont correctement présentées.
-   Les douze parfums sont accessibles depuis leur marque.
-   Chaque fiche produit affiche uniquement des informations confirmées.
-   Les prix sont affichés en FCFA lorsqu'ils sont disponibles.
-   Les liens WhatsApp ouvrent le bon numéro avec le bon produit.
-   Le visiteur doit envoyer lui-même son message pour transmettre sa
    demande.
-   Le carrousel fonctionne sur ordinateur et mobile.
-   Le menu mobile est utilisable.
-   Aucune page ne présente d'erreur ou de lien cassé.
-   Les images sont optimisées.
-   Le site est lisible sur les principaux formats d'écran.
-   Le domaine et le HTTPS fonctionnent.

------------------------------------------------------------------------

## 14. Résumé de la vision

Ivoire.Fragrance doit être conçu comme une **vitrine digitale de
parfumerie premium**, et non comme un simple catalogue de produits.

L'expérience repose sur quatre piliers :

-   **Une identité visuelle forte :** ivoire, or champagne, noir et
    photographie éditoriale.
-   **Une découverte immersive :** un Hero carrousel et trois univers de
    marque distincts.
-   **Une navigation simple :** accueil, marques, pages de marque et
    fiches parfum.
-   **Une conversion directe :** commande initiée sur le site et
    finalisée sur WhatsApp.

La première version doit rester volontairement légère : React, Vite,
React Router, Tailwind CSS et des données locales. Le backend, la base
de données et le paiement en ligne seront envisagés lorsque les besoins
opérationnels le justifieront.
