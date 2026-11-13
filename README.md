# Maquette : Sandra Barba, psychothérapie et sophrologie

Maquette de présentation, direction « La boîte à mots ». Site statique (HTML, CSS, JavaScript), généré à partir de `donnees/` par `node outils/generer.mjs`, prêt pour Vercel.
Adresse prévue : https://sandrabarba-maquette.vercel.app

## Pages (v2)
- Accueil : la boîte lumineuse « Quel mot vous amène ? » sur le bureau, la plongée dans la boîte (« Mettons-y des mots », « En parler », « Sortir du silence »), Sandra, violences, trois façons de venir, le cabinet, avis, appel.
- Pages intérieures refaites en v2, sur deux fonds seulement (pierre et nuit), avec la boîte une fois, en grand, posée sur le bureau dans l'ouverture :
  - Psychothérapie : boîte « PARLER », les trois temps en une scène épinglée (Affronter, Se reconstruire, Vivre), les mots qui amènent au cabinet en grande typographie qui défile, couple et famille, formations et presse en vignettes.
  - Sophrologie : plein cadre sur le voilage avec la boîte « INSPIREZ », « Respirez avec la boîte » en pleine largeur (la lumière suit le souffle), les trois principes, pour qui, portrait.
  - Violences : boîte « SORTIR DU SILENCE », numéros d'aide en grands chiffres, la lampe sur le mur, les quatre formes, « La culpabilité n'est pas la vôtre » avec le portrait, la presse en vignette, « Ne restez pas seule ».
  - Rendez-vous : la boîte qui affiche le numéro, la demande en trois étapes, le plan d'accès redessiné.
- 404.
- Pages du site actuel non reprises (v2 possible) : À propos complet, Diplômes, Blog (4 articles), Coaching couple en page propre.

## À fournir par la cliente (à compléter)
- **Mentions légales** : éditeur (nom, adresse, SIRET 514 610 393 00019 à confirmer), directrice de publication, hébergeur (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis, à vérifier au moment de la mise en ligne).
- **Politique de confidentialité** (formulaire de demande, données de santé : base légale, durée de conservation, droits).
- **Titre professionnel** : la maquette dit « psychothérapie » (la pratique) et jamais « psychothérapeute » ni « psychologue » (titres protégés : registre national des psychothérapeutes tenu par l'ARS, décret 2010-534 ; titre de psychologue, décret 90-255). Si Sandra Barba est inscrite au registre, le titre peut être ajouté. Les mots-clés « psychologue » de l'ancien site sont à retirer.
- **Assurance responsabilité civile professionnelle** (si elle souhaite l'afficher).
- **Horaires** : le site dit « du lundi au samedi, sur rendez-vous » ; aucune heure n'est affichée faute d'information.
- **Statistique « 1 fille sur 8, 1 garçon sur 10 »** de l'ancien site : non reprise, faute de source.
- **Crédits** : portraits signés Aurore Soumille, photographe portraitiste (à confirmer pour chaque photo) ; illustrations générées par IA (mention « Illustration générée » à garder sur le site final).

## Ajouté par la maquette (vérifié)
- Numéros d'aide nationaux : 17, 112, 114 (SMS), 3919 Violences Femmes Info (gratuit, anonyme, 24 h/24, 7 j/7, pas un numéro d'urgence), 119 (enfance en danger).
- Bouton « Quitter vite » sur la page Violences (remplace la page par un site météo, sans retour possible).

## À la mise en ligne définitive
- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaire de demande simulé (le brancher sur un vrai envoi), mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Images à remplacer pour aller plus grand
- `sandra-laine` (960 px) et les images générées `deux-fauteuils` et `visio` (1024 px de large) restent sous un quart de l'écran : au-delà, elles deviennent floues sur un écran Retina. Une version plus grande permettrait de les passer en grand.

## Travailler sur la maquette
- Textes : `donnees/textes/fr.json` ; données : `donnees/*.json` ; pages : `source/pages/` ; style : `assets/css/site.css` ; effets : `assets/js/site.js`.
- Générer : `node outils/generer.mjs`. Ne jamais modifier les pages `.html` à la main.
- Audit : `node _audit/audit.mjs` (voir `_audit/README.md`).
