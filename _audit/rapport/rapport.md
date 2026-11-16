# Rapport d’audit

Projet : `sandrabarba-maquette` · 16/11/2026 14:39:39 · 6 min · 6 page(s) · audit standard (étapes : fichiers, films, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-133347-standard-partiel` · version ?v=5
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4)

## Passes de cette version (?v=5)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-133123-standard-partiel | standard | toutes | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261116-133347-standard-partiel** (celle-ci) | standard | toutes | fichiers, films, parcours | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/psychotherapie` — à 83 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.0 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (6.1 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=5
- Journal v5 : 2 étape(s) notée(s), 19 min de travail pour 35 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2862 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2602 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2616 ms depuis le premier octet
- film de l'ouverture /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sophrologie (1366×768) : 2737 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2695 ms depuis le premier octet
- Ouverture / (390×844) : 2779 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /psychotherapie (390×844) : 2604 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2538 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2598 ms depuis le premier octet
- film de l'ouverture /sophrologie 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /violences (390×844) : 2566 ms depuis le premier octet
- film de l'ouverture /violences 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Changements de hauteur /rendez-vous : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
