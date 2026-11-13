# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 15:16:10 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **13 échec(s)**
- Passe : `20261113-135908-standard` · version ?v=1
- Échecs : **13**
- À regarder : **31**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (11), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (4), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-123607-rapide-cible | rapide | /psychotherapie,/sophrologie,/violences,/rendez-vous | toutes | 63 | 13 | 1 | échecs |
| 20261113-132655-standard | standard | toutes | toutes | 63 | 38 | 1 | échecs |
| **20261113-135908-standard** (celle-ci) | standard | toutes | toutes | 13 | 31 | 1 | échecs |

## Échecs

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/` — li#seance-cabinet > figure.media.carte-media > picture > img « La vraie pièce du cabinet : divan gris, lampe en b » — cabinet-photo (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — li#seance-visio > figure.media.carte-media > picture > img « Un ordinateur portable à demi ouvert sur un bureau » — grok/visio (5/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — li#seance-deux > figure.media.carte-media > picture > img « Deux fauteuils de velours gris tournés l'un vers l » — grok/deux-fauteuils (5/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### contraste sur image (2)

- **contraste sur image** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 1.38:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 1.90:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### texte sous 12 px (2)

- **texte sous 12 px** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 11.0 px _(390×844 sansJs)_
- **texte sous 12 px** — `/` — div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur > span.indice-tactile:nth-of-type(2) « FAITES DÉFILER, ET BALAYEZ LES LETTRES DU DOIGT » — 11.0 px _(390×844 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « La vie est un combat. » — avec div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(2) > em.titre-ligne « Ne le vivez plus seul·e. » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### section sans visuel (2)

- **section sans visuel** — `/404` — section#debut « PAGE INTROUVABLE Ce mot-là n’est pas dans la boîte » _(320×568 normal, 390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/psychotherapie` — section#couple « Illustration générée COUPLE ET FAMILLE Vous n’arri » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.info-cle:nth-of-type(3) « 07 60 36 58 32 » _(320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/rendez-vous` — div.conteneur.acces-grille > figure.plan > svg > g:nth-of-type(1) — par div.conteneur.acces-grille > figure.plan > svg > path:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### lien profond (1)

- **lien profond** — `/ → /rendez-vous?seance=deux#demande` — choix « seance=deux » non prérempli (valeur : undefined) _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/violences` — 358 × 54 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### contraste sur image (20)

- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(4) « E » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(1) « E » — 2.75:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(2) « N » — 1.50:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(1) « S » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal, 1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » — 1.30:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(9) « U » — 2.10:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(1) « E » — 2.21:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(2) « N » — 2.08:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — 1.94:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(4) « E » — 2.03:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — 1.94:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — 1.70:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(7) « L » — 1.60:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(8) « E » — 1.54:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(1) « E » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(2) « N » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « I » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 87 ms (différence 23 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/psychotherapie` — à 30 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bouton sans effet visible (1)

- **bouton sans effet visible** — `/violences` _(1366×768)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (9.7 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/rendez-vous` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-rendez-vous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/rendez-vous` — a.po-rdv-boite — parallaxe : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/rendez-vous` — div.boite.boite--recue — boite-recue : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 213 min de travail pour 135 min de budget, 51 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 111 min pour 45 prévues.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 54 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2785 ms depuis le premier octet
- film de l'ouverture / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /psychotherapie (1366×768) : 2624 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2540 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2589 ms depuis le premier octet
- film de l'ouverture /sophrologie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /violences (1366×768) : 2589 ms depuis le premier octet
- Ouverture / (390×844) : 2852 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2596 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2502 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2603 ms depuis le premier octet
- Ouverture /violences (390×844) : 2631 ms depuis le premier octet
- Bords de l’écran : 501 images d’intro, 39 de voile et 144 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 373, tâche la plus longue 85 ms
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 270, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /sophrologie 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1404, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1413, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /psychotherapie : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.31 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
