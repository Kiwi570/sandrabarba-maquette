# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 16:23:05 · 5 min · 6 page(s) · audit standard

## Résumé

- Statut : **INCOMPLET : 24 contrôle(s) requis n’ont pas tourné (voir « Non lancé ») ; ne vaut pas pour une livraison**
- Passe : `20261113-151752-standard` · version ?v=2
- Échecs : **0**
- À regarder : **4**
- Non lancé : **25**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (6), films de transition (5)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /rendez-vous |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/violences` — 358 × 54 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/psychotherapie` — à 28 ms (différence 43 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

## Non lancé

- **film de l'ouverture /psychotherapie 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /rendez-vous 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /sophrologie 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /violences 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /psychotherapie 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /rendez-vous 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /sophrologie 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /violences 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /psychotherapie 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /rendez-vous 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /sophrologie 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /violences 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1920×1080** : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page (3 tentatives)
- **parcours:intro** : browser.newContext: Target page, context or browser has been closed
- **parcours:menu** : browser.newContext: Target page, context or browser has been closed
- **parcours:liens** : browser.newContext: Target page, context or browser has been closed
- **parcours:hauteur** : browser.newContext: Target page, context or browser has been closed
- **ecran** : browser.newContext: Target page, context or browser has been closed
- **fluidite** : browser.newContext: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2783 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2680 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2510 ms depuis le premier octet
- film de l'ouverture /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sophrologie (1366×768) : 2646 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2629 ms depuis le premier octet
- Ouverture / (390×844) : 2794 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 0 images d’intro, 0 de voile et 0 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
