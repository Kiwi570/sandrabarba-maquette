# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 15:37:35 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **14 échec(s)**
- Passe : `20261113-143156-complet-partiel` · version ?v=1
- Échecs : **14**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-123607-rapide-cible | rapide | /psychotherapie,/sophrologie,/violences,/rendez-vous | toutes | 63 | 13 | 1 | échecs |
| 20261113-132655-standard | standard | toutes | toutes | 63 | 38 | 1 | échecs |
| 20261113-135908-standard | standard | toutes | toutes | 13 | 31 | 1 | échecs |
| 20261113-141849-standard-partiel | standard | toutes | fichiers, mesures, parcours | 5 | 17 | 0 | échecs |
| 20261113-142621-standard-partiel | standard | toutes | fichiers, mesures, parcours | 0 | 5 | 0 | complet |
| **20261113-143156-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 14 | 0 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### texte coupé (8)

- **texte coupé** — `/` — div.ouverture:nth-of-type(1) > div.ouverture-grille.conteneur:nth-of-type(2) > div.ouverture-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « PSYCHOTHÉRAPIE · SOPHROLOGIE · AUBIGNAN ET VISIO » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « La vie est un combat. » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(2) > em.titre-ligne « Ne le vivez plus seul·e. » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.ouverture:nth-of-type(1) > div.ouverture-grille.conteneur:nth-of-type(2) > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Séance d’1 h · 65 € · au cabinet ou en visio » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.objet-bas > ul.tuiles.vues > li:nth-of-type(6) > button.tuile.tuile--mot « L’ÉPUISEMENT » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.objet-bas > ul.tuiles.vues > li:nth-of-type(7) > button.tuile.tuile--mot « LES EXAMENS » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.objet-bas > ul.tuiles.vues > li:nth-of-type(8) > button.tuile.tuile--mot « MA FILLE » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_
- **texte coupé** — `/` — div.conteneur.objet-bas > ul.tuiles.vues > li:nth-of-type(9) > button.tuile.tuile--mot « LA NAISSANCE » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée PSYCHOTHÉRAPIE · SOPHROLOGIE  » _(1366×768 sansWebgl)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.info-cle:nth-of-type(3) « 07 60 36 58 32 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/psychotherapie` — div.conteneur.po-psy-tete:nth-of-type(1) > div.po-psy-bas > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » _(1000×560 normal, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/sophrologie` — div.po-sophro-grille > div.po-sophro-texte > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » _(1000×560 normal, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/violences` — section#debut > div.conteneur.po-viol-grille > div.page-actions > p.info-cle:nth-of-type(2) « 3919 · Violences Femmes Info · gratuit et anonyme, » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/violences` — div.conteneur.po-viol-grille > div.page-actions > p:nth-of-type(1) > a.bouton:nth-of-type(1) « Appeler 07 60 36 58 32 » _(1000×560 normal, 1000×560 sansWebgl)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/psychotherapie,/sophrologie,/violences --seulement=fichiers,mesures
```
