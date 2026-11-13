# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 17:37:31 · 2 min · 6 page(s) · audit standard (étapes : fichiers, mesures)

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261113-163518-standard-partiel` · version ?v=2
- Échecs : **9**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-151752-standard | standard | toutes | toutes | 0 | 4 | 25 | INCOMPLET |
| 20261113-154851-standard | standard | toutes | toutes | 64 | 8 | 1 | échecs |
| 20261113-160940-standard-cible-partiel | standard | /,/psychotherapie,/rendez-vous,/sophrologie,/violences | fichiers, mesures | 16 | 2 | 0 | échecs |
| 20261113-161214-standard-cible-partiel | standard | /,/psychotherapie,/sophrologie | fichiers, mesures | 3 | 1 | 0 | échecs |
| 20261113-161335-standard-cible-partiel | standard | /,/psychotherapie | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261113-163518-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures | 9 | 2 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(3) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-p:nth-of-type(2) « Un deuil, une maladie, un divorce, un licenciement » — coupé par section#temps > div.pi-temps-collant « TROIS TEMPS On avance, à votre rythme. A F F R O N » _(320×568 normal)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/rendez-vous` — svg > g:nth-of-type(2) > g:nth-of-type(1) > text:nth-of-type(1) — avec svg > g:nth-of-type(2) > g:nth-of-type(1) > text.plan-min:nth-of-type(2) _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/rendez-vous` — svg > g:nth-of-type(2) > g:nth-of-type(2) > text:nth-of-type(1) — avec svg > g:nth-of-type(2) > g:nth-of-type(2) > text.plan-min:nth-of-type(2) _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/sophrologie` — section#debut > div.po-sophro-grille.conteneur:nth-of-type(1) > div.po-sophro-texte:nth-of-type(1) > h1.pi-titre.pi-titre--encre « Il n’y a pas de magie : retrouvez-vous. » — haut 64 px, bas 124 px, zone 68–390 px _(844×390 normal)_

### contraste sur image (1)

- **contraste sur image** — `/sophrologie` — div.po-sophro-grille.conteneur:nth-of-type(1) > div.po-sophro-texte:nth-of-type(1) > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » — 4.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### typographie française (1)

- **typographie française** — `/violences` — section#presse > div.conteneur.pi-docs-grille > div:nth-of-type(1) > p.pi-note:nth-of-type(3) « Ouvrir l’article en grand : ouvrez la vignette. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 4 étape(s) notée(s), 78 min de travail pour 135 min de budget, 0 min d’attente de l’utilisateur.
- Journal : « films, regards du directeur artistique, audit et corrections » 43 min pour 25 prévues.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/psychotherapie,/rendez-vous,/sophrologie --seulement=fichiers,mesures
```
