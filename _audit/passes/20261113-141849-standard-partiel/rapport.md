# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 15:24:25 · 6 min · 6 page(s) · audit standard (étapes : fichiers, mesures, parcours)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261113-141849-standard-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **17**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (11), liens vers la page en cours (5), changements de hauteur (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-123607-rapide-cible | rapide | /psychotherapie,/sophrologie,/violences,/rendez-vous | toutes | 63 | 13 | 1 | échecs |
| 20261113-132655-standard | standard | toutes | toutes | 63 | 38 | 1 | échecs |
| 20261113-135908-standard | standard | toutes | toutes | 13 | 31 | 1 | échecs |
| **20261113-141849-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, parcours | 5 | 17 | 0 | échecs |

## Échecs

### contraste sur image (1)

- **contraste sur image** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 1.35:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « La vie est un combat. » — avec div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(2) > em.titre-ligne « Ne le vivez plus seul·e. » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.couple-grille > figure.media.couple-media > picture > img « Deux fauteuils de velours gris tournés l’un vers l » — grok/deux-fauteuils (5/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### élément recouvert (1)

- **élément recouvert** — `/rendez-vous` — div.conteneur.acces-grille > figure.plan > svg > g:nth-of-type(1) — par div.conteneur.acces-grille > figure.plan > svg > path:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### lien profond (1)

- **lien profond** — `/ → /rendez-vous?seance=deux#demande` — choix « seance=deux » non prérempli (valeur : couple) _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### contraste sur image (12)

- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(4) « E » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(2) « E » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(3) « T » — 1.84:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(4) « T » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(5) « R » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(2) « N » — 1.33:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(1) « S » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » — 1.30:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(9) « U » — 2.10:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (9.4 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (9.7 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
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


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
