# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 17:11:36 · 2 min · 5 page(s) · audit standard ciblé sur /,/psychotherapie,/rendez-vous,/sophrologie,/violences (étapes : fichiers, mesures)

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261113-160940-standard-cible-partiel` · version ?v=2
- Échecs : **16**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (5)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-151752-standard | standard | toutes | toutes | 0 | 4 | 25 | INCOMPLET |
| 20261113-154851-standard | standard | toutes | toutes | 64 | 8 | 1 | échecs |
| **20261113-160940-standard-cible-partiel** (celle-ci) | standard | /,/psychotherapie,/rendez-vous,/sophrologie,/violences | fichiers, mesures | 16 | 2 | 0 | échecs |

## Échecs

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.pi-couple-grille > figure.media.pi-couple-media > picture > img « Deux fauteuils de velours gris tournés l’un vers l » — grok/deux-fauteuils (5/5, faible, 25 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### textes qui se chevauchent (7)

- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-num:nth-of-type(1) « 01 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-mot:nth-of-type(2) « Affronter » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-num:nth-of-type(1) « 02 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-mot:nth-of-type(2) « Se reconstruire » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-num:nth-of-type(1) « 03 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-mot:nth-of-type(2) « Vivre » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(1366×768 sansJs)_

### texte sous 12 px (8)

- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(1) « I » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(2) « N » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(3) « S » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(4) « P » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(5) « I » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(6) « R » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(7) « E » — 10.5 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(8) « Z » — 10.5 px _(320×568 normal, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### typographie française (1)

- **typographie française** — `/violences` — section#presse > div.conteneur.pi-docs-grille > div:nth-of-type(1) > p.pi-note:nth-of-type(3) « Ouvrir l’article en grand : ouvrez la vignette. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 29 min de travail pour 105 min de budget, 0 min d’attente de l’utilisateur.
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
node _audit/audit.mjs --pages=/,/psychotherapie,/sophrologie --seulement=fichiers,mesures
```
