# Rapport d’audit

Projet : `sandrabarba-maquette` · 13/11/2026 13:47:43 · 12 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /psychotherapie,/sophrologie,/violences,/rendez-vous

## Résumé

- Statut : **63 échec(s)**
- Passe : `20261113-123607-rapide-cible` · version ?v=1
- Échecs : **63**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (24), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (8), liens vers la page en cours (4), changements de hauteur (4), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (12), souris immobile (1), vitesse (4), captures (1)

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

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `index.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `psychotherapie.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `rendez-vous.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `sophrologie.html` — mailto:info@sandrabarba.fr
- **lien vers le site actuel** — `violences.html` — mailto:info@sandrabarba.fr

### image de partage (5)

- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `psychotherapie.html` — fichier introuvable : /assets/partage/psychotherapie-fr.jpg
- **image de partage** — `rendez-vous.html` — fichier introuvable : /assets/partage/rendez-vous-fr.jpg
- **image de partage** — `sophrologie.html` — fichier introuvable : /assets/partage/sophrologie-fr.jpg
- **image de partage** — `violences.html` — fichier introuvable : /assets/partage/violences-fr.jpg

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/psychotherapie` — div.po-psy-bas > div.page-actions > p:nth-of-type(1) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/sophrologie` — div.po-sophro-texte > div.page-actions > p:nth-of-type(1) > a.bouton:nth-of-type(1) « Prendre rendez-vous » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/violences` — div.conteneur.po-viol-grille > div.page-actions > p:nth-of-type(1) > a.bouton:nth-of-type(1) « Appeler 07 60 36 58 32 » _(844×390 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/psychotherapie` — div.conteneur.po-psy-tete:nth-of-type(1) > div.po-psy-bas > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/sophrologie` — div.po-sophro-grille > div.po-sophro-texte > div.page-actions > p.info-cle:nth-of-type(2) « Séance d’1 h · 65 € · au cabinet ou en visio » _(844×390 normal, 1366×768 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/violences` — section#debut > div.conteneur.po-viol-grille > div.page-actions > p.info-cle:nth-of-type(2) « 3919 · Violences Femmes Info · gratuit et anonyme, » _(844×390 normal, 320×568 sansJs)_

### section sans visuel (7)

- **section sans visuel** — `/psychotherapie` — section#temps « TROIS TEMPS 1 On avance, à votre rythme. Affronter » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/psychotherapie` — section#temps > div.temps.ton-nuit:nth-of-type(1) « TROIS TEMPS 1 On avance, à votre rythme. Affronter » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/psychotherapie` — section#temps > div.temps.ton-crepuscule:nth-of-type(2) « 2 Se reconstruire Sentiments d’échec, angoisses, l » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/psychotherapie` — section#temps > div.temps.ton-aube:nth-of-type(3) « 3 Retrouver le sourire, vivre Connaître ses forces » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/psychotherapie` — section#fin « Et si vous commenciez par en parler ? Une première » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/rendez-vous` — section#debut « PRENDRE RENDEZ-VOUS Un appel, un SMS, ou trois que » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/rendez-vous` — section#debut « Un appel, un SMS, ou trois questions. Votre demand » _(844×390 normal)_

### photo faible affichée en grand (6)

- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.couple-grille > figure.media.couple-media > picture > img « Deux fauteuils de velours gris tournés l’un vers l » — grok/deux-fauteuils (5/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/psychotherapie` — div.conteneur.couple-grille > figure.media.couple-media > picture > img « Deux fauteuils de velours gris tournés l’un vers l » — grok/deux-fauteuils (5/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/sophrologie` — figure.avec > figure.media.avec-media > picture > img « Sandra Barba en noir et blanc devant une bibliothè » — sandra-bibliotheque (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/sophrologie` — figure.avec > figure.media.avec-media > picture > img « Sandra Barba en noir et blanc devant une bibliothè » — sandra-bibliotheque (3/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/violences` — div.conteneur.presse-grille > figure.media.presse-media > picture > img « Article de presse : « Éveiller les consciences sur » — presse (3/5, faible, 60 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/violences` — div.conteneur.presse-grille > figure.media.presse-media > picture > img « Article de presse : « Éveiller les consciences sur » — presse (3/5, faible, 34 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### zone tactile sous 44 px (16)

- **zone tactile sous 44 px** — `/psychotherapie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(1) « 17 » — 18 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/psychotherapie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(2) « 112 » — 27 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/psychotherapie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(3) « 114 » — 27 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/psychotherapie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(4) « 3919 » — 36 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(1) « 17 » — 18 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(2) « 112 » — 27 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(3) « 114 » — 27 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(4) « 3919 » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sophrologie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(1) « 17 » — 18 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sophrologie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(2) « 112 » — 27 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sophrologie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(3) « 114 » — 27 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sophrologie` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(4) « 3919 » — 36 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/violences` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(1) « 17 » — 18 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/violences` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(2) « 112 » — 27 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/violences` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(3) « 114 » — 27 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/violences` — div.conteneur.pied-grille:nth-of-type(1) > div.pied-aide:nth-of-type(2) > p:nth-of-type(2) > a:nth-of-type(4) « 3919 » — 36 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### texte coupé (4)

- **texte coupé** — `/psychotherapie` — div.conteneur.po-psy-tete:nth-of-type(1) > h1.page-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne « pour comprendre ce qui se répète. » — coupé par section#debut > div.conteneur.po-psy-tete:nth-of-type(1) > h1.page-titre > span.ligne-masque:nth-of-type(2) « pour comprendre ce qui se répète. » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/rendez-vous` — div > h1.page-titre.po-rdv-titre > span.ligne-masque > span.titre-ligne « Un appel, un SMS, ou trois questions. » — coupé par div.conteneur.po-rdv-grille > div > h1.page-titre.po-rdv-titre > span.ligne-masque « Un appel, un SMS, ou trois questions. » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/rendez-vous` — figure.plan > svg > g:nth-of-type(2) > text:nth-of-type(3) — coupé par section#acces > div.conteneur.acces-grille > figure.plan > svg « Plan d’accès schématique du cabinet à Aubignan » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/sophrologie` — div.po-sophro-texte > h1.page-titre > span.ligne-masque:nth-of-type(2) > span.titre-ligne « Il n’y a pas de magie : retrouvez-vous. » — coupé par div.po-sophro-grille > div.po-sophro-texte > h1.page-titre > span.ligne-masque:nth-of-type(2) « Il n’y a pas de magie : retrouvez-vous. » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### contraste insuffisant (4)

- **contraste insuffisant** — `/rendez-vous` — section#acces > div.conteneur.acces-grille > div > p.surtitre:nth-of-type(1) « VENIR AU CABINET » — 4.44:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/sophrologie` — section#debut > div.po-sophro-grille > div.po-sophro-texte > p.surtitre:nth-of-type(1) « SOPHROLOGIE · MÉTHODE CAYCEDO » — 4.44:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/sophrologie` — section#methode > div.conteneur.methode-grille > div > p.surtitre:nth-of-type(1) « LA MÉTHODE » — 4.44:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/violences` — section#approche > div.conteneur.approche-grille > div > p.surtitre:nth-of-type(1) « COMMENT ELLE ACCOMPAGNE » — 4.44:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/rendez-vous` — div.conteneur.acces-grille > figure.plan > svg > g:nth-of-type(1) — par div.conteneur.acces-grille > figure.plan > svg > rect _(390×844 normal, 1366×768 normal)_

### accessibilité (axe) : color-contrast (3)

- **accessibilité (axe) : color-contrast** — `/rendez-vous` — li[data-point=""]:nth-child(2) ; li[data-point=""]:nth-child(3) ; .acces-grille > div > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/sophrologie` — .surtitre[data-anime="gsap"] ; .methode-grille > div > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/violences` — .approche-grille > div > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### contraste sur image (2)

- **contraste sur image** — `/violences` — section#debut > div.conteneur.po-viol-grille > p.page-chapo:nth-of-type(2) « Depuis 2005, Sandra Barba accompagne les femmes do » — 1.77:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/violences` — section#debut > div.conteneur.po-viol-grille > div.page-actions > p.info-cle:nth-of-type(2) « 3919 · Violences Femmes Info · gratuit et anonyme, » — 1.83:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### lien profond (1)

- **lien profond** — `/violences → /rendez-vous?mot=violences#demande` — choix « mot=violences » non prérempli (valeur : LES VIOLENCES) _(1366×768 lien profond, 390×844 lien profond)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/rendez-vous` — section#debut.page-ouverture.po-rdv — ses effets (telephone-tuiles) ne bougent pas, ou sont cachés à cette taille _(1366×768 normal, 390×844 normal)_

### effet du plan absent (1)

- **effet du plan absent** — « ambiance » : aucun élément data-effet="ambiance"

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/psychotherapie` — section#debut > div.po-psy-bandeau:nth-of-type(2) > figure.media.po-psy-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/psychotherapie` — section#couple > div.conteneur.couple-grille > figure.media.couple-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/sophrologie` — section#debut > div.po-sophro-grille > figure.media.po-sophro-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/violences` — section#debut > figure.media.po-viol-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/sophrologie` — div.conteneur.methode-grille > figure.media.methode-media > picture > img « Photo du cabinet : divan gris, lampe en bois flott » — cabinet-photo (3/5, 63 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### bouton sans effet visible (1)

- **bouton sans effet visible** — `/violences` _(1366×768)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/psychotherapie` — écran différent à la même position après rechargement (12.4 %), voir comparaisons/rechargement-psychotherapie-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/rendez-vous` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-rendez-vous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/sophrologie` — écran différent à la même position après rechargement (9.6 %), voir comparaisons/rechargement-sophrologie-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/rendez-vous` — div.boite.boite--tel — telephone-tuiles : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/rendez-vous` — div.boite.boite--recue — boite-recue : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/rendez-vous` — figure.plan — plan-acces : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Journal v1 : 2 étape(s) notée(s), 23 min de travail pour 50 min de budget, 49 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /psychotherapie, /rendez-vous, /sophrologie, /violences.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /psychotherapie (1366×768) : 2668 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2479 ms depuis le premier octet
- Ouverture /sophrologie (1366×768) : 2636 ms depuis le premier octet
- Ouverture /violences (1366×768) : 2678 ms depuis le premier octet
- Ouverture /psychotherapie (390×844) : 2663 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2489 ms depuis le premier octet
- Ouverture /sophrologie (390×844) : 2663 ms depuis le premier octet
- Ouverture /violences (390×844) : 2633 ms depuis le premier octet
- bords de l’écran /rendez-vous 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 306 images d’intro, 28 de voile et 89 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /psychotherapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /sophrologie : aucune section épinglée ou plein écran.
- Tient dans l'écran /violences : aucune section épinglée ou plein écran.
- Fluidité /psychotherapie 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 57 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 171, tâche la plus longue 0 ms
- Fluidité /sophrologie 1366×768 (molette) : 0 % d'images lentes sur 234, tâche la plus longue 0 ms
- Fluidité /violences 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /psychotherapie 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /sophrologie 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /violences 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse /psychotherapie : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /sophrologie : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /violences : 0.35 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,mouvement
```
