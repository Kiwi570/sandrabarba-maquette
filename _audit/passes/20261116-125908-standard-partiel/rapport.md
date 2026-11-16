# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 14:01:15 · 2 min · 6 page(s) · audit standard (étapes : fichiers, mesures)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261116-125908-standard-partiel` · version ?v=4
- Échecs : **8**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5)

## Échecs

### texte coupé (8)

- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(1) « D » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(2) « E » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(3) « S » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(5) « M » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(6) « O » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(7) « T » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(8) « S » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_
- **texte coupé** — `/` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(3) > span.l:nth-of-type(9) « . » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « La vie est un combat. Ne le vivez plus seul·e. Pre » _(844×390 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 4 de donnees/site.json

### typographie française (1)

- **typographie française** — `/violences` — section#presse > div.conteneur.pi-docs-grille > div:nth-of-type(1) > p.pi-note:nth-of-type(3) « Ouvrir l’article en grand : ouvrez la vignette. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=4
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
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
