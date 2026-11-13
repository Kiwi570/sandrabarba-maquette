# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 14:45:06 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **63 échec(s)**
- Passe : `20261113-132655-standard` · version ?v=1
- Échecs : **63**
- À regarder : **38**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (13), souris immobile (4), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-123607-rapide-cible | rapide | /psychotherapie,/sophrologie,/violences,/rendez-vous | toutes | 63 | 13 | 1 | échecs |
| **20261113-132655-standard** (celle-ci) | standard | toutes | toutes | 63 | 38 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — div.ouverture:nth-of-type(1) > div.ouverture-grille.conteneur:nth-of-type(2) > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Séance d’1 h · 65 € · au cabinet ou en visio » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.info-cle:nth-of-type(3) « 07 60 36 58 32 » _(320×568 normal, 844×390 normal, 1366×768 normal, 1366×768 sansJs, 320×568 sansJs, 1366×768 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/sophrologie` — div.po-sophro-grille > div.po-sophro-texte > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » _(844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/violences` — section#debut > div.conteneur.po-viol-grille > div.page-actions > p.info-cle:nth-of-type(2) « 3919 · Violences Femmes Info · gratuit et anonyme, » _(320×568 normal, 320×568 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#cabinet > div.cabinet-scene:nth-of-type(1) > p.lampe-indice « Promenez la lumière de la lampe » — 1.32:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — section#cabinet > div.cabinet-scene:nth-of-type(1) > p.lampe-indice « Promenez la lumière de la lampe » — 1.27:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### section sans visuel (3)

- **section sans visuel** — `/` — section#avis « CE QU’ILS EN DISENT « Jamais seule. » Une vraie éc » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#fin « Et vous, quel mot vous amène ? Une séance d’1 h, 6 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +5)_
- **section sans visuel** — `/psychotherapie` — section#couple « Illustration générée COUPLE ET FAMILLE Vous n’arri » _(320×568 sansJs)_

### photo faible affichée en grand (11)

- **photo faible affichée en grand** — `/` — div.conteneur.bande-grille > figure.media.bande-presse > picture > img « Article de presse : « Éveiller les consciences sur » — presse (3/5, faible, 39 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — li#seance-cabinet > figure.media.carte-media > picture > img « La vraie pièce du cabinet : divan gris, lampe en b » — cabinet-photo (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — li#seance-visio > figure.media.carte-media > picture > img « Un ordinateur portable à demi ouvert sur un bureau » — grok/visio (5/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — li#seance-deux > figure.media.carte-media > picture > img « Deux fauteuils de velours gris tournés l'un vers l » — grok/deux-fauteuils (5/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — div.cabinet-vraies.fx-fini:nth-of-type(2) > figure.media.vraie-photo > picture > img « L’entrée du cabinet : le bureau en bois, le bocal  » — aimer-la-vie (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/404` — div.conteneur.introuvable-grille > figure.media.introuvable-media > picture > img « La vraie boîte « AIMER LA VIE », dans l’entrée du  » — aimer-la-vie (3/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/404` — div.conteneur.introuvable-grille > figure.media.introuvable-media > picture > img « La vraie boîte « AIMER LA VIE », dans l’entrée du  » — aimer-la-vie (3/5, faible, 31 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.themes-grille > figure.media.themes-media > picture > img « Photo du cabinet : divan gris, lampe en bois flott » — cabinet-photo (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.themes-grille > figure.media.themes-media > picture > img « Photo du cabinet : divan gris, lampe en bois flott » — cabinet-photo (3/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/sophrologie` — div.conteneur.methode-grille > figure.media.methode-media > picture > img « Photo du cabinet : divan gris, lampe en bois flott » — cabinet-photo (3/5, faible, 60 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/sophrologie` — div.conteneur.methode-grille > figure.media.methode-media > picture > img « Photo du cabinet : divan gris, lampe en bois flott » — cabinet-photo (3/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### texte coupé (2)

- **texte coupé** — `/` — div.bureau:nth-of-type(3) > div.conteneur.objet-bas > p.indice > span.indice-tactile:nth-of-type(2) « Touchez votre mot, ou faites-le glisser » — coupé par section#debut > div.plongee-collant > div.ouverture:nth-of-type(1) « Illustration générée AUBIGNAN · ET EN VISIO · DEPU » _(320×568 normal)_
- **texte coupé** — `/psychotherapie` — section#couple > div.conteneur.couple-grille > figure.media.couple-media > figcaption.mention-ia « Illustration générée » — coupé par section#couple > div.conteneur.couple-grille > figure.media.couple-media « Illustration générée » _(320×568 normal, 320×568 sansJs)_

### contraste sur image (3)

- **contraste sur image** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 1.46:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur « COMMENT ON TRAVAILLE · FAITES DÉFILER, ET BALAYEZ  » — 1.90:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.plongee-collant > div.dedans:nth-of-type(2) > p.surtitre.scene-sur > span.indice-souris:nth-of-type(1) « FAITES DÉFILER, ET BALAYEZ LES LETTRES AVEC LA SOU » — 1.90:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### textes qui se chevauchent (25)

- **textes qui se chevauchent** — `/` — div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(1) > span.titre-ligne « La vie est un combat. » — avec div.ouverture-texte:nth-of-type(1) > h1.ouverture-titre > span.ligne-masque:nth-of-type(2) > em.titre-ligne « Ne le vivez plus seul·e. » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(1) « E » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(1) « S » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(2) « N » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(2) « O » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « R » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(4) « E » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « I » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « R » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(8) « D » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(7) « L » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(8) « D » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(8) « E » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(9) « U » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(2) « O » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(1) « S » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « R » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(2) « I » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « R » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « L » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « L » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « E » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « I » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « E » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « I » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « N » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « R » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(5) « N » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « R » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « C » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(8) « D » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « C » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(8) « D » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(3) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(7) « E » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(2) « N » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(3) « R » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « R » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(7) « L » — avec div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(9) « U » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/` — div.plongee-collant > div.ouverture:nth-of-type(1) > figure.media.ouverture-mur > figcaption.mention-ia « Illustration générée » — avec div.conteneur.objet-bas > ul.tuiles > li:nth-of-type(9) > a.tuile.tuile--mot « LA NAISSANCE » _(320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — div.conteneur.introuvable-grille > div > p.page-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Revenir à l’accueil » _(844×390 normal, 1366×768 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/rendez-vous` — div.conteneur.acces-grille > figure.plan > svg > g:nth-of-type(1) — par figure.plan > svg > g:nth-of-type(2) > text:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### débordement horizontal (2)

- **débordement horizontal** — `/psychotherapie` — page large de 342 px — largeurs : 320, 720, 760 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/sophrologie` — page large de 442 px — largeurs : 440 à 760 px (9 largeurs) _(balayage 320–1920 normal)_

### ouverture : élément qui apparaît puis disparaît (1)

- **ouverture : élément qui apparaît puis disparaît** — `/` — ul.tuiles > li > a.tuile.tuile--mot « LE SOMMEIL » _(1366×768 film, 390×844 film)_

### lien profond (8)

- **lien profond** — `/ → /rendez-vous?mot=deuil#demande` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=peur#demande` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=couple#demande` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=sommeil#demande` — section introuvable à l’arrivée _(1366×768 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=epuisement#demande` — section introuvable à l’arrivée _(1366×768 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=examens#demande` — section introuvable à l’arrivée _(1366×768 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=fille#demande` — section introuvable à l’arrivée _(1366×768 lien profond)_
- **lien profond** — `/ → /rendez-vous?mot=naissance#demande` — section introuvable à l’arrivée _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/violences` — 358 × 54 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### contraste sur image (27)

- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(2) « N » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(4) « E » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(5) « M » — 2.00:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(6) « B » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(3) « T » — 1.24:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(6) « E » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(1) « E » — 1.95:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(2) « N » — 1.92:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(1) « S » — 1.47:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(4) « T » — 2.74:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(6) « R » — 1.11:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal, 1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(3) > span.l:nth-of-type(8) « D » — 1.62:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(1) « E » — 2.21:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(2) « N » — 2.08:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(3) « S » — 1.94:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.dedans:nth-of-type(2) > div.rails:nth-of-type(1) > p.rail.rail-mot:nth-of-type(1) > span.l:nth-of-type(8) « E » — 2.16:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(1) « M » — 1.74:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(2) « E » — 1.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(3) « T » — 1.84:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(4) « T » — 1.08:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(5) « R » — 1.82:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(1) > span.l:nth-of-type(6) « E » — 1.56:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(1) « E » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.rails:nth-of-type(1) > p.rail:nth-of-type(2) > span.phrase-mot:nth-of-type(2) > span.l:nth-of-type(2) « N » — 1.09:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- … et 2 autres (rapport.json)

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/rendez-vous` — à 2231 ms (différence 32 %) (films/ouverture-rendez-vous-390.png) _(390×844 film)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/psychotherapie` — à 128 ms (différence 22 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.8 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (13.5 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/rendez-vous` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-rendez-vous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (7.2 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — div.boite.boite--petite — boite-fin : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/rendez-vous` — a.po-rdv-boite — parallaxe : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/rendez-vous` — div.boite.boite--recue — boite-recue : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 213 min de travail pour 135 min de budget, 51 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 111 min pour 45 prévues.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 54 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2768 ms depuis le premier octet
- Ouverture /psychotherapie (1366×768) : 2629 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2472 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2593 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2635 ms depuis le premier octet
- Ouverture / (390×844) : 2895 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2616 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2541 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2775 ms depuis le premier octet
- Ouverture /violences (390×844) : 2602 ms depuis le premier octet
- film de l'ouverture /violences 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /psychotherapie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 502 images d’intro, 37 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 385, tâche la plus longue 0 ms
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 272, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 167, tâche la plus longue 0 ms
- Fluidité /sophrologie 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 223, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1358, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1419, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /psychotherapie : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.29 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,films,parcours
```
