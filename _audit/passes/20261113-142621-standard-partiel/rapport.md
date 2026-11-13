# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 15:31:48 · 5 min · 6 page(s) · audit standard (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261113-142621-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-123607-rapide-cible | rapide | /psychotherapie,/sophrologie,/violences,/rendez-vous | toutes | 63 | 13 | 1 | échecs |
| 20261113-132655-standard | standard | toutes | toutes | 63 | 38 | 1 | échecs |
| 20261113-135908-standard | standard | toutes | toutes | 13 | 31 | 1 | échecs |
| 20261113-141849-standard-partiel | standard | toutes | fichiers, mesures, parcours | 5 | 17 | 0 | échecs |
| **20261113-142621-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours | 0 | 5 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.4 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (9.2 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/rendez-vous` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-rendez-vous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 213 min de travail pour 135 min de budget, 51 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 111 min pour 45 prévues.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 54 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
