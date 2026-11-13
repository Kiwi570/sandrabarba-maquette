# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 17:06:12 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **64 échec(s)**
- Passe : `20261113-154851-standard` · version ?v=2
- Échecs : **64**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (14), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /rendez-vous |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-151752-standard | standard | toutes | toutes | 0 | 4 | 25 | INCOMPLET |
| **20261113-154851-standard** (celle-ci) | standard | toutes | toutes | 64 | 8 | 1 | échecs |

## Échecs

### section sans visuel (3)

- **section sans visuel** — `/` — section#avis « CE QU’ELLES EN DISENT « Jamais seule. » Une vraie  » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/sophrologie` — section#fin « Prête, prêt à respirer autrement ? Une séance d’1  » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/violences` — section#fin « Ne restez pas seule. Appelez, envoyez un SMS, ou d » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### textes qui se chevauchent (28)

- **textes qui se chevauchent** — `/` — div.ouverture:nth-of-type(1) > div.ouverture-grille.conteneur:nth-of-type(2) > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Séance d’1 h · 65 € · au cabinet ou en visio » — avec div.bureau:nth-of-type(3) > div.conteneur.objet-bas > p.indice > span.indice-tactile:nth-of-type(2) « Touchez votre mot, ou faites-le glisser » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.pi-ouverture-texte:nth-of-type(1) > h1.pi-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Parler, » — avec div.pi-ouverture-texte:nth-of-type(1) > h1.pi-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne « pour comprendre ce qui se répète. » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-num:nth-of-type(1) « 01 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-mot:nth-of-type(3) « Affronter » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-num:nth-of-type(1) « 02 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(2) > p.pi-temps-mot:nth-of-type(3) « Se reconstruire » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-num:nth-of-type(1) « 03 » — avec div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-mot:nth-of-type(3) « Vivre » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/rendez-vous` — div.pi-ouverture-texte > h1.pi-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Un appel, un SMS, » — avec h1.pi-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « ou trois questions. » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/sophrologie` — div.po-sophro-texte:nth-of-type(1) > h1.pi-titre.pi-titre--encre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Il n’y a pas de magie : » — avec h1.pi-titre.pi-titre--encre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « retrouvez-vous. » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes.fx-fini > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(1) > span.pi-etape-num:nth-of-type(1) « 1 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sophrologie` — div.conteneur > ol.pi-etapes > li:nth-of-type(2) > span.pi-etape-num:nth-of-type(1) « 2 » — avec div.conteneur > ol.pi-etapes > li:nth-of-type(3) > span.pi-etape-num:nth-of-type(1) « 3 » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — div.pi-ouverture-texte:nth-of-type(1) > h1.pi-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « Mettre des mots, en parler, » — avec h1.pi-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne > em « sortir du silence. » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(1) > span.pi-forme-num « 1 » — avec div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(1) > h3 « Psychologiques » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(2) > span.pi-forme-num « 2 » — avec div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(2) > h3 « Physiques » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(3) > span.pi-forme-num « 3 » — avec div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(3) > h3 « Sexuelles » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(4) > span.pi-forme-num « 4 » — avec div.conteneur > ul.pi-formes-liste.fx-fini > li:nth-of-type(4) > h3 « Économiques » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros.fx-fini > li:nth-of-type(2) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 114 » — avec ul.pi-numeros.fx-fini > li:nth-of-type(2) > a.pi-numero > strong « Par SMS » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste > li:nth-of-type(1) > span.pi-forme-num « 1 » — avec div.conteneur > ul.pi-formes-liste > li:nth-of-type(1) > h3 « Psychologiques » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste > li:nth-of-type(2) > span.pi-forme-num « 2 » — avec div.conteneur > ul.pi-formes-liste > li:nth-of-type(2) > h3 « Physiques » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste > li:nth-of-type(3) > span.pi-forme-num « 3 » — avec div.conteneur > ul.pi-formes-liste > li:nth-of-type(3) > h3 « Sexuelles » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — div.conteneur > ul.pi-formes-liste > li:nth-of-type(4) > span.pi-forme-num « 4 » — avec div.conteneur > ul.pi-formes-liste > li:nth-of-type(4) > h3 « Économiques » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros.fx-fini > li:nth-of-type(1) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 17 » — avec ul.pi-numeros.fx-fini > li:nth-of-type(1) > a.pi-numero > strong « Police, gendarmerie » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros.fx-fini > li:nth-of-type(3) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 3919 » — avec ul.pi-numeros.fx-fini > li:nth-of-type(3) > a.pi-numero > strong « Violences Femmes Info » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros.fx-fini > li:nth-of-type(4) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 119 » — avec ul.pi-numeros.fx-fini > li:nth-of-type(4) > a.pi-numero > strong « Enfance en danger » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros > li:nth-of-type(1) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 17 » — avec ul.pi-numeros > li:nth-of-type(1) > a.pi-numero > strong « Police, gendarmerie » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros > li:nth-of-type(2) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 114 » — avec ul.pi-numeros > li:nth-of-type(2) > a.pi-numero > strong « Par SMS » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros > li:nth-of-type(3) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 3919 » — avec ul.pi-numeros > li:nth-of-type(3) > a.pi-numero > strong « Violences Femmes Info » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/violences` — ul.pi-numeros > li:nth-of-type(4) > a.pi-numero > span.pi-numero-chiffres:nth-of-type(1) « 119 » — avec ul.pi-numeros > li:nth-of-type(4) > a.pi-numero > strong « Enfance en danger » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/psychotherapie` — section#debut > div.conteneur.pi-ouverture-grille:nth-of-type(1) > div.pi-ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Séance d’1 h · 65 € · au cabinet ou en visio » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/rendez-vous` — section#debut > div.conteneur.pi-ouverture-grille:nth-of-type(1) > div.pi-ouverture-texte > p.info-cle:nth-of-type(3) « Du lundi au samedi, sur rendez-vous · 89 rue du Po » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/violences` — div.conteneur.pi-ouverture-grille:nth-of-type(1) > div.pi-ouverture-texte:nth-of-type(1) > div.page-actions > p.info-cle:nth-of-type(2) « 3919 · Violences Femmes Info · gratuit et anonyme, » _(320×568 sansJs)_

### contraste insuffisant (9)

- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-geant:nth-of-type(2) « 1 » — 1.00:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(2) « 02 Se reconstruire » — 3.13:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(3) « 03 Vivre » — 3.13:1 (minimum 4.5:1) _(768×1024 normal, 844×390 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(2) « 02 Se reconstruire » — 3.17:1 (minimum 4.5:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(3) « 03 Vivre » — 3.17:1 (minimum 4.5:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat:nth-of-type(3) > p.pi-temps-geant:nth-of-type(2) « 3 » — 1.00:1 (minimum 3:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(1) « 01 Affronter » — 3.13:1 (minimum 4.5:1) _(1366×768 sansJs)_
- **contraste insuffisant** — `/sophrologie` — section#souffle > div.conteneur.pi-respire-grille:nth-of-type(2) > p.pi-note.pi-note--clair:nth-of-type(2) « Un exercice de découverte, qui ne remplace pas une » — 1.67:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **contraste insuffisant** — `/violences` — section#aide > div.conteneur > p.pi-note.pi-note--clair:nth-of-type(2) « Numéros nationaux, gratuits, joignables même depui » — 1.67:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### image non chargée (3)

- **image non chargée** — `/psychotherapie` — main#contenu > dialog.visionneuse > img — http://127.0.0.1:37237/psychotherapie _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **image non chargée** — `/sophrologie` — main#contenu > dialog.visionneuse > img — http://127.0.0.1:37237/sophrologie _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **image non chargée** — `/violences` — main#contenu > dialog.visionneuse > img — http://127.0.0.1:37237/violences _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte coupé (3)

- **texte coupé** — `/psychotherapie` — div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(3) > span « 03 » — coupé par section#temps > div.pi-temps-collant « TROIS TEMPS On avance, à votre rythme. 01 Affronte » _(844×390 normal)_
- **texte coupé** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-tete:nth-of-type(1) > ol.pi-temps-fil > li:nth-of-type(3) « 03 Vivre » — coupé par section#temps > div.pi-temps-collant « TROIS TEMPS On avance, à votre rythme. 01 Affronte » _(844×390 normal)_
- **texte coupé** — `/psychotherapie` — div.conteneur.pi-temps-grille > div.pi-temps-scene:nth-of-type(2) > article.pi-temps-etat.actif:nth-of-type(1) > p.pi-temps-geant:nth-of-type(2) « 1 » — coupé par section#temps > div.pi-temps-collant « TROIS TEMPS On avance, à votre rythme. 01 Affronte » _(844×390 normal)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.pi-couple-grille > figure.media.pi-couple-media > picture > img « Deux fauteuils de velours gris tournés l’un vers l » — grok/deux-fauteuils (5/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### accessibilité (axe) : color-contrast (3)

- **accessibilité (axe) : color-contrast** — `/psychotherapie` — li[data-fil-temps="1"] ; li[data-fil-temps="2"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/sophrologie` — .pi-note — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/violences` — .pi-note--clair — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### élément recouvert (1)

- **élément recouvert** — `/rendez-vous` — div.conteneur.acces-grille > figure.plan.pi-plan > svg > g:nth-of-type(5) — par div.conteneur.acces-grille > figure.plan.pi-plan > svg > rect _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/sophrologie` — section#debut > div.po-sophro-grille.conteneur:nth-of-type(1) > div.po-sophro-texte:nth-of-type(1) > h1.pi-titre.pi-titre--encre « Il n’y a pas de magie : retrouvez-vous. » — haut 28 px, bas 88 px, zone 68–390 px _(844×390 normal)_

### texte sous 12 px (8)

- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(1) « I » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(2) « N » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(3) « S » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(4) « P » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(5) « I » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(6) « R » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(7) « E » — 9.6 px _(320×568 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/sophrologie` — div.boite-cadre > div.boite-panneau > p.boite-rangee:nth-of-type(2) > span.l:nth-of-type(8) « Z » — 9.6 px _(320×568 normal, 320×568 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/sophrologie` — div.po-sophro-grille.conteneur:nth-of-type(1) > div.po-sophro-texte:nth-of-type(1) > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » — 3.69:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### typographie française (1)

- **typographie française** — `/violences` — section#presse > div.conteneur.pi-docs-grille > div:nth-of-type(1) > p.pi-note:nth-of-type(3) « Ouvrir l’article en grand : ouvrez la vignette. » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 82 ms (différence 23 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/psychotherapie` — à 50 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (10.1 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/sophrologie` — 10 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 18 min de travail pour 45 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2820 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2657 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2574 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2698 ms depuis le premier octet
- film de l'ouverture /sophrologie 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /violences (1366×768) : 2600 ms depuis le premier octet
- Ouverture / (390×844) : 2771 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2654 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2589 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2623 ms depuis le premier octet
- Ouverture /violences (390×844) : 2606 ms depuis le premier octet
- film de l'ouverture /violences 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /sophrologie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 446 images d’intro, 38 de voile et 201 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /rendez-vous : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 388, tâche la plus longue 96 ms
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 175, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1356, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1405, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /psychotherapie : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/psychotherapie,/rendez-vous,/sophrologie,/violences --seulement=fichiers,mesures
```
