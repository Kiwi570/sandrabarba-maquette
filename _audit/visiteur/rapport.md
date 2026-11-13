# Test « vrai visiteur » : Sandra Barba

Persona : femme de 42 ans, Carpentras, sort d'une relation où elle était rabaissée, ne dort plus, cherche quelqu'un à qui parler.
Outil : `_audit/visiteur.mjs`. Les secondes sont celles du script (navigateur automatisé, chargement compris). Un humain qui lit mettrait plus de temps.
Barème : mission 1 sans aucun geste ; les autres en 3 gestes au plus et en 30 s au plus.

## Synthèse

| Mission | Téléphone 390x844 | Ordinateur 1440x900 |
|---|---|---|
| 1 arrivée | Réussie de justesse, 0 geste, 3,4 s (le métier n'est pas écrit) | Réussie, 0 geste, 3,4 s |
| 2 prix | Réussie, 0 geste, 3,7 s | Réussie, 0 geste, 3,3 s |
| 3 rdv | Réussie, **hors barème** : 10 gestes, 22 s, plus 1 geste pour voir la confirmation | Réussie, **hors barème** : 10 gestes, 21 s, plus 1 geste pour voir la confirmation |
| 4 contact | Téléphone : 0 geste. Adresse : **hors barème**, 4 ou 5 gestes, environ 10 s | Téléphone : 0 geste. Adresse : 3 gestes, 7,7 s |
| 5 différence | Réussie, **hors barème** : 4 gestes, 8,4 s | Réussie, **hors barème** : 4 gestes, 7,1 s |
| 6 violences | Réussie, 2 gestes, 7,2 s | Réussie, 1 geste, 7,1 s |

## 1. Arrivée (premier écran, aucun geste)

**Téléphone : réussie de justesse.** 0 geste, 3,4 s. Capture : `_audit/visiteur/arrivee-390x844/etape-0.png`
- **Où :** « AUBIGNAN · ET EN VISIO · DEPUIS 2005 ». C'est clair.
- **Pour qui :** les mots proposés (« le deuil, la peur, le couple, les violences, le sommeil, l'épuisement… ») parlent à la persona, qui se reconnaît dans « le couple », « les violences » et « le sommeil ». Une tuile « LE SOMMEIL » tombe même dans la boîte.
- **Ce qui gêne :**
  - Sur téléphone, l'en-tête n'affiche que « Sandra Barba », sans « Psychothérapie · Sophrologie ».
  - Le titre « La vie est un combat. Ne le vivez plus seul·e. » ne dit pas le métier.
  - La visiteuse comprend « une professionnelle de l'écoute » grâce à « Séance d'1 h · 65 € » et « Prendre rendez-vous ». Le mot « psychothérapie » n'apparaît pourtant nulle part dans le premier écran.
  - La tuile « LE SOMMEIL » recouvre en partie « QUEL MOT ».

**Ordinateur : réussie.** 0 geste, 3,4 s. Capture : `_audit/visiteur/arrivee-1440x900/etape-0.png`
- **Quoi :** « Sandra Barba, PSYCHOTHÉRAPIE · SOPHROLOGIE », dans l'en-tête et dans le menu.
- **Où :** Aubignan et en visio.
- **Pour qui :** donné par les mots.
- **Ce qui gêne (mineur) :** la tuile « LE SOMMEIL » mange les lettres de « QUEL MOT », qui se lit « QUEL MOT » à moitié caché.

## 2. Prix d'une séance

**Téléphone : réussie.** 0 geste, 3,7 s. Capture : `_audit/visiteur/prix-390x844/etape-0.png`
- « Séance d'1 h · 65 € · au cabinet ou en visio » est lisible sous le bouton principal.

**Ordinateur : réussie.** 0 geste, 3,3 s. Capture : `_audit/visiteur/prix-1440x900/etape-0.png`
- Même ligne, sous le bouton.
- Le formulaire détaille ensuite : cabinet 1 h, visio 1 h, coaching couple 1 h 15, coaching famille 1 h, tous à 65 €.

**Ce qui gêne (mineur) :**
- Aucune mention d'un remboursement par la mutuelle, une question probable pour la persona. Je ne l'ai pas cherchée au-delà.
- La ligne de prix est petite et peu contrastée.

## 3. Demander un rendez-vous jusqu'à la confirmation

Données fictives saisies : Claire, 06 12 34 56 78. Choix faits : séance au cabinet, à Aubignan, en fin de journée.

**Téléphone : réussie, hors barème.** 10 gestes, 22 s.
- Parcours : Prendre rendez-vous, Séance au cabinet, défiler, Suivant, Au cabinet à Aubignan, en fin de journée, Suivant, prénom, téléphone, Envoyer la demande. Il faut ensuite remonter pour voir la confirmation.
- Captures :
  - `_audit/visiteur/rdv-390x844/etape-1.png` : arrivée sur le formulaire.
  - `_audit/visiteur/rdv-390x844/etape-4.png` : l'étape 2 s'affiche décalée.
  - `_audit/visiteur/rdv-390x844/etape-7.png` : coordonnées.
  - `_audit/visiteur/rdv-390x844/etape-11.png` : après l'envoi, la confirmation est hors de l'écran.
- **Ce qui gêne :**
  - Arriver au formulaire ne prend qu'un geste. Mais le bouton « Suivant » de l'étape 1 est sous le pli : sans défilement, « Suivant » est introuvable (essai raté : `_audit/visiteur/rdv-390x844/journal.json`, première série).
  - Après chaque « Suivant », l'écran ne se recentre pas sur la nouvelle question. On arrive au milieu ou au bas de l'étape suivante.
  - **Après « Envoyer la demande », la confirmation n'est pas dans l'écran.** On voit le bas de la carte vide puis « Venir au cabinet ». La visiteuse peut croire que rien ne s'est passé.
  - Dans la barre du bas, une étiquette « LES VIOLENCES » vient se coller dans le bouton « Rendez-vous », qui se casse en « Rendez- / vous » (visible dans `_audit/visiteur/violences-tuile-390x844/etape-2.png`).
  - Le panneau lumineux est lu comme une action au nom bizarre, « 0 7 6 0 3 6 5 8 3 2 » : un nom accessible épelé chiffre par chiffre.

**Ordinateur : réussie, hors barème.** 10 gestes, 21 s, plus 1 geste pour voir la confirmation.
- Captures :
  - `_audit/visiteur/rdv-1440x900/etape-1.png` : étape 1.
  - `_audit/visiteur/rdv-1440x900/etape-3.png` : étape 2.
  - `_audit/visiteur/rdv-1440x900/etape-7.png` : étape 3.
  - `_audit/visiteur/rdv-1440x900/etape-9.png` : récapitulatif et bouton Envoyer.
  - `_audit/visiteur/rdv-1440x900/etape-11.png` : après l'envoi, seule la fin de « DEMANDE REÇUE » se voit.
  - `_audit/visiteur/rdv-confirmation-1440x900/etape-12.png` : message de confirmation, après avoir remonté.
- **Ce qui gêne :**
  - Comme sur téléphone, la confirmation reste au-dessus de l'écran après l'envoi. Seul le panneau « DEMANDE / REÇUE » dépasse en haut à gauche.
  - Le message dit « Maquette : rien n'a été envoyé. Sur le vrai site, Sandra vous rappelle pour fixer l'heure. » C'est normal pour une maquette, mais à remplacer.
  - « Politique de confidentialité : à compléter » est visible sous les champs : un texte provisoire qui casse la confiance.
  - La case « J'accepte d'être recontactée par SMS » est déjà cochée.
  - Le choix « Le mot qui vous amène » n'a pas pu être rempli avec « Le sommeil » par l'outil (`choisir` en échec, l'option porte sans doute un autre libellé). Champ facultatif, sans effet sur la mission.
  - Le formulaire en 3 étapes est clair (récapitulatif en étiquettes, « Trois questions, puis Sandra vous répond »). Il dépasse quand même le barème par nature : 7 clics et 2 champs.

## 4. Joindre ou venir (téléphone, adresse)

**Téléphone :**
- **Numéro : réussie,** 0 geste. 07 60 36 58 32 est en clair dans le premier écran, avec un bouton « Appeler » fixe en bas. Le menu propose aussi « Appeler 07 60 36 58 32 ». Captures : `_audit/visiteur/arrivee-390x844/etape-0.png`, `_audit/visiteur/contact-menu-390x844/etape-1.png`
- **Adresse : hors barème,** 4 ou 5 gestes (menu, Rendez-vous, puis 2 ou 3 écrans), environ 10 s.
- **Ce qui gêne :**
  - L'adresse (« 89 rue du Portail-Neuf, Aubignan », parking gratuit, e-mail info@sandrabarba.fr) n'est ni dans le menu ni dans le premier écran. Elle se trouve sous le formulaire de la page Rendez-vous.
  - Aucune entrée « Contact » ou « Venir » dans le menu.
- Captures : `_audit/visiteur/rdv-390x844/etape-11.png` (adresse vue), `_audit/visiteur/contact-390x844/etape-3.png` (allé trop loin avec 3 défilements).

**Ordinateur :**
- **Numéro : réussie,** 0 geste, dans le premier écran.
- **Adresse : réussie,** 3 gestes (Rendez-vous, défiler 2), 7,7 s. Capture : `_audit/visiteur/contact-1440x900/etape-2.png`
- La section « Venir au cabinet » rassure la persona : « entre Carpentras et Vaison-la-Romaine », « Elle reçoit des personnes de … Carpentras », un plan schématique et le parking.
- **Ce qui gêne :** il faut deviner que l'adresse est rangée sous « Rendez-vous ».

## 5. Ce qui distingue cette praticienne (environ 30 s de visite)

**Téléphone : réussie, hors barème.** 4 gestes, 8,4 s.
- Captures :
  - `_audit/visiteur/difference-390x844/etape-2.png`, `_audit/visiteur/difference-390x844/etape-4.png` et `_audit/visiteur/difference-390x844/etape-6.png` : la partie « Comment on travaille ».
  - `_audit/visiteur/difference-390x844/etape-8.png` : le portrait « Je suis comme vous. Une femme. »
- Ce qui la distingue, au 4e écran :
  - spécialisée depuis 2005 auprès des femmes victimes de violences (enfance, couple) ;
  - présidente de l'association Vivre Femmes ;
  - conférences et formation de professionnels ;
  - le ton « Je suis comme vous. Une femme. » et deux métiers, psychothérapie et sophrologie.
- Pour la persona, c'est exactement le bon message.
- **Ce qui gêne :**
  - Les 3 premiers défilements restent dans l'animation « Comment on travaille ».
  - Les lettres qui tombent recouvrent la phrase « Comprendre les schémas qui se répètent… », rendue illisible (etape-4).
  - Cette spécialité n'est dite nulle part dans le premier écran.

**Ordinateur : réussie, hors barème.** 4 gestes, 7,1 s.
- Captures : `_audit/visiteur/difference-1440x900/etape-2.png`, `_audit/visiteur/difference-1440x900/etape-4.png` et `_audit/visiteur/difference-1440x900/etape-6.png` (« SORTIR DU SILENCE », le haut de « Je suis comme… »), puis `_audit/visiteur/difference-1440x900/etape-7.png` (le portrait).
- **Ce qui gêne :**
  - Au 3e geste, seul le titre « Je suis comme » dépasse. Le texte qui dit la spécialité arrive au 4e.
  - Les lettres éparpillées (« O M R R P E A T… ») dans le bac ne se lisent pas sans les balayer.

## 6. Numéro d'aide en cas de violences, et page dédiée

**Téléphone : réussie.** 2 gestes (menu, Violences), 7,2 s. Capture : `_audit/visiteur/violences-390x844/etape-2.png`
- Le haut de la page /violences montre :
  - « 3919 · Violences Femmes Info · gratuit et anonyme, 24 h/24 » ;
  - « Si vous êtes en danger, appelez. » avec la carte « 17 Police, gendarmerie » (et 112) ;
  - un bouton « Quitter vite ✕ ».
- Autre chemin, 1 geste : la tuile « LES VIOLENCES » de l'accueil fait apparaître « Sa spécialité depuis 2005 », un bouton de rendez-vous et « En savoir plus ». Capture : `_audit/visiteur/violences-tuile-390x844/etape-2.png`
- **Ce qui gêne :**
  - Le 3919 est écrit en petit, en gris sur fond sombre, et n'est pas un lien d'appel (l'outil ne le relève pas comme numéro). Le bouton rose mis en avant est celui de la praticienne, pas le 3919.
  - « Quitter vite » recouvre en partie la carte du 17.

**Ordinateur : réussie.** 1 geste (Violences dans le menu), 7,1 s. Capture : `_audit/visiteur/violences-1440x900/etape-1.png`
- 3919 dans le premier écran de la page, avec « Quitter vite ✕ » en bas à droite.
- **Ce qui gêne :** même remarque. Le 3919 est petit, peu contrasté et non cliquable, alors que « Appeler 07 60 36 58 32 » est en gros bouton.

## Missions ratées ou hors barème

1. **rdv (téléphone et ordinateur) :** 10 gestes, plus 1 pour voir la confirmation, au lieu de 3. Après l'envoi, **la confirmation n'est pas dans l'écran** : il faut remonter pour la voir.
2. **contact, adresse sur téléphone :** 4 ou 5 gestes. L'adresse n'est que sous le formulaire de la page Rendez-vous, sans entrée « Contact » ou « Venir » dans le menu.
3. **différence (téléphone et ordinateur) :** 4 gestes. La spécialité (violences faites aux femmes, association Vivre Femmes) n'apparaît qu'après l'animation « Comment on travaille ».
4. **arrivée sur téléphone (limite) :** le métier (psychothérapie, sophrologie) n'est pas écrit dans le premier écran.

## Gênes mineures

- La tuile « LE SOMMEIL » recouvre « QUEL MOT » dans le premier écran (téléphone et ordinateur).
- Sur téléphone, le formulaire ne se recentre pas sur la nouvelle étape après « Suivant ». Le bouton « Suivant » de l'étape 1 est sous le pli.
- « Politique de confidentialité : à compléter » est visible, et la case de consentement SMS est précochée.
- Le message de confirmation « Maquette : rien n'a été envoyé » est à remplacer.
- Dans la barre du bas sur téléphone, après le choix d'un mot, l'étiquette entre dans le bouton « Rendez-vous », qui se casse sur deux lignes.
- Les lettres animées recouvrent la phrase d'explication sur téléphone, et le bac de lettres ne se lit pas sur ordinateur.
- Le 3919 n'est pas cliquable, il est petit et peu contrasté. « Quitter vite » chevauche la carte du 17 sur téléphone.
- Le panneau lumineux a un nom accessible épelé « 0 7 6 0 3 6 5 8 3 2 ».
- Aucune information sur un remboursement éventuel par la mutuelle à côté du prix.
