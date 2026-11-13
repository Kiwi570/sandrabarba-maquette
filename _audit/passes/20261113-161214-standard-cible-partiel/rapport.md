# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 17:13:27 · 1 min · 3 page(s) · audit standard ciblé sur /,/psychotherapie,/sophrologie (étapes : fichiers, mesures)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-161214-standard-cible-partiel` · version ?v=2
- Échecs : **3**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (33), balayage (3)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-151752-standard | standard | toutes | toutes | 0 | 4 | 25 | INCOMPLET |
| 20261113-154851-standard | standard | toutes | toutes | 64 | 8 | 1 | échecs |
| 20261113-160940-standard-cible-partiel | standard | /,/psychotherapie,/rendez-vous,/sophrologie,/violences | fichiers, mesures | 16 | 2 | 0 | échecs |
| **20261113-161214-standard-cible-partiel** (celle-ci) | standard | /,/psychotherapie,/sophrologie | fichiers, mesures | 3 | 1 | 0 | échecs |

## Échecs

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-num:nth-of-type(1) « 01 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-mot:nth-of-type(2) « Affronter » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-num:nth-of-type(1) « 02 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-mot:nth-of-type(2) « Se reconstruire » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-num:nth-of-type(1) « 03 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-mot:nth-of-type(2) « Vivre » _(1366×768 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 29 min de travail pour 105 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /psychotherapie, /sophrologie.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/psychotherapie --seulement=fichiers,mesures
```
