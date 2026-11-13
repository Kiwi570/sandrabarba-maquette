# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 17:45:14 · 6 min · 6 page(s) · audit standard (étapes : films, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261113-163921-standard-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-151752-standard | standard | toutes | toutes | 0 | 4 | 25 | INCOMPLET |
| 20261113-154851-standard | standard | toutes | toutes | 64 | 8 | 1 | échecs |
| 20261113-160940-standard-cible-partiel | standard | /,/psychotherapie,/rendez-vous,/sophrologie,/violences | fichiers, mesures | 16 | 2 | 0 | échecs |
| 20261113-161214-standard-cible-partiel | standard | /,/psychotherapie,/sophrologie | fichiers, mesures | 3 | 1 | 0 | échecs |
| 20261113-161335-standard-cible-partiel | standard | /,/psychotherapie | fichiers, mesures | 0 | 1 | 0 | complet |
| 20261113-163518-standard-partiel | standard | toutes | fichiers, mesures | 9 | 2 | 0 | échecs |
| 20261113-163751-standard-cible-partiel | standard | /psychotherapie,/rendez-vous,/sophrologie | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261113-163921-standard-partiel** (celle-ci) | standard | toutes | films, parcours | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.0 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2825 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2675 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2603 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2687 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2643 ms depuis le premier octet
- Ouverture / (390×844) : 2860 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2666 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2556 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2630 ms depuis le premier octet
- Ouverture /violences (390×844) : 2635 ms depuis le premier octet
- Changements de hauteur /rendez-vous : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
