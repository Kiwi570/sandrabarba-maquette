# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 14:14:31 · 6 min · 6 page(s) · audit standard (étapes : films, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-130841-standard-partiel` · version ?v=4
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4)

## Passes de cette version (?v=4)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-125908-standard-partiel | standard | toutes | fichiers, mesures | 8 | 3 | 0 | échecs |
| 20261116-130632-standard-partiel | standard | toutes | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261116-130841-standard-partiel** (celle-ci) | standard | toutes | films, parcours | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 57 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.0 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (6.1 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2867 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2644 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2530 ms depuis le premier octet
- film de l'ouverture /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sophrologie (1366×768) : 2662 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2617 ms depuis le premier octet
- film de l'ouverture /violences 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2813 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2590 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2535 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2597 ms depuis le premier octet
- Ouverture /violences (390×844) : 2584 ms depuis le premier octet
- Changements de hauteur /rendez-vous : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
