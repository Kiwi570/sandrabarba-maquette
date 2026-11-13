VERDICT : REFAIRE

# Regard du directeur artistique sur la page Rendez-vous (13 novembre 2026)

Consigne `_audit/regard-da.md` appliquée à `rendez-vous.html`, pas à l'accueil. Sources : `/tmp/apercus/rendez-vous/`, avec les mosaïques ordinateur (3 lignes de 4 images) et téléphone (2 lignes de 8), la planche, les deux films, `premier-ecran.json` et `vides.json`. La vitrine est l'accueil de cette maquette (`/tmp/v2-mix.jpg`, `/tmp/zoom-planche.jpg`). C'est le premier regard sur cette page : il n'y a pas de liste précédente à vérifier.

**Lecture du verdict.** REFAIRE tombe par la règle : le critère 2 vaut 2, le critère 9 vaut 1 et la moyenne est de 3,0. Ces deux critères ont été écrits pour l'accueil. La direction suit le brief : il ne faut pas reprendre la page en profondeur, mais appliquer les cinq points ci-dessous, tous en CSS ou en texte. Si la boîte bouge et répond (point 1), la page monte à environ 3,6 : AJUSTER.

## Le brief, point par point

| Demande | État |
|---|---|
| Deux fonds, trois changements au plus | **Fait.** La page passe de la nuit à la pierre, puis revient à la nuit : 2 changements. Le bureau en bois fait partie de la scène. |
| Ouverture : la boîte affiche le numéro en grand, posée sur le bureau, avec le portrait sandra-laine | **À moitié fait.** C'est fait sur ordinateur. Sur téléphone, le portrait a disparu (téléphone, ligne 1, image 3). |
| Demande en trois étapes, sur fond clair, sans tuiles | **À moitié fait.** Le fond est clair et les étapes 1-2-3 sont là. Mais les séances sont quatre cartes à bordure en 2 × 2, posées dans une carte à ombre. |
| Plan redessiné proprement (Aubignan, Carpentras, Orange, Avignon, Vaison-la-Romaine), avec l'adresse et le parking | **À moitié fait.** Tout y est et la géographie est juste. Le dessin n'est pas net (point 5) et les étiquettes sont trop petites. |
| Pas de grand vide | **À moitié fait.** Aucun écran n'est vide (`vides.json`). Mais il reste de la nuit vide au-dessus de la boîte, et la colonne droite est vide sous le formulaire. |
| Textes à 16 px au moins sur ordinateur | **Pas fait.** Les surtitres, les prix et le plan sont sous 16 px. |
| Portrait sous un quart de l'écran | **Fait.** Le médaillon fait environ 210 px et reste net. |

## Notes

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité au vrai lieu et au métier | 4 | Tout est vrai et conforme au relevé : 65 €, le coaching couple en 1 h 15, le 89 rue du Portail-Neuf, le parking gratuit, Sarrians, Caromb et Monteux. Le portrait est le vrai (pull de laine blanc). Le cabinet (ordinateur, ligne 2, image 1) est la vraie pièce redessinée, signalée « Illustration générée ». Les temps de trajet restent approximatifs. |
| 2 | Effet signature | 2 | La boîte au numéro occupe environ 20 % de l'écran (ligne 1, image 3). Après l'intro, rien ne bouge seul et rien ne répond à la souris (`premier-ecran.json` : 0 % et 0 %). La loupe ronde sur « 07 60 36 » (ligne 1, image 2) est belle, mais elle appartient à l'intro. |
| 3 | Images | 3 | Le portrait est net dans son médaillon. L'illustration du cabinet est petite (environ 420 px) et porte une pastille. Sur téléphone, une traînée de lumière floue et verticale sépare le texte de la boîte (téléphone, ligne 1, image 3). |
| 4 | Composition et finition | 3 | Le langage est celui de l'accueil et les deux fonds sont tenus. Mais la boîte est posée bas, sous environ 680 × 335 px de nuit vide, et le médaillon flotte sous le texte. Le formulaire et le plan sont des cartes à ombre. Un onglet vertical « VOTRE MOT » n'a pas d'objet sur cette page. L'italique est rose, alors que celui de l'accueil est pêche. |
| 5 | Rythme, sans vides | 4 | La page tient en 3,4 écrans sur ordinateur et 4,8 sur téléphone, sans écran vide. Restent trois vides : la nuit au-dessus de la boîte, environ 465 px à droite sous le formulaire (ligne 2, image 2), et environ 210 px de nuit sur téléphone. |
| 6 | Typographie et lisibilité | 3 | Les polices sont celles de l'accueil et les titres tiennent. Mais plusieurs textes restent petits : les surtitres (environ 13 px), « 1 h · 65 € » et « Trois étapes… » (environ 14 px), les villes (environ 15 px), les minutes (environ 12 px), « Parking gratuit à proximité » (environ 13 px). Sur téléphone, le plan tombe à environ 8 px (téléphone, ligne 2, image 1). |
| 7 | Niveau par rapport à la vitrine | 3 | On retrouve la boîte, le bureau et la nuit de l'accueil, avec le portrait en plus. La page reste un cran en dessous : la boîte n'a que deux lignes et ne bouge pas, le bureau est nu, et l'ensemble est plus bas et moins tenu que `/tmp/v2-mix.jpg`. La ressemblance est voulue par le brief : aucun point retiré. |
| 8 | Envie d'agir | 4 | Le numéro se lit de loin. « Votre demande » et « Envoyer un SMS » sont là dès le premier écran, et le téléphone a la barre « Appeler / Rendez-vous ». Deux freins : qui arrive directement attend 2,7 s d'intro « La vie est un combat » avant le numéro, et rien ne dit que la boîte se touche. |
| 9 | Jeu | 1 | Rien ne se manipule : la page n'a qu'un formulaire et un plan fixe. |

**Moyenne : 27 / 9 = 3,0.**

## Ce qui doit changer (du plus grave au moins grave, chaque point en CSS ou en texte, en quelques minutes)

1. **La boîte ne bouge pas et elle est posée trop bas** (ordinateur, ligne 1, image 3).
   - Lui donner une troisième ligne, comme à l'accueil : « APPELEZ » en framboise, puis « 07 60 36 » et « 58 32 ». Son haut remonte alors à hauteur du titre « Un appel, un SMS, » et la nuit vide au-dessus disparaît.
   - Faire retomber les chiffres un à un, 0,4 s après l'arrivée (une animation CSS avec délai : ils tombent déjà ainsi dans la loupe de l'intro). Les soulever de quelques pixels au survol.
   - Faire de toute la boîte un lien `tel:`, avec le curseur en main.
2. **Sur téléphone, le portrait manque et laisse environ 210 px de nuit traversée d'une traînée floue** (téléphone, ligne 1, image 3).
   - Afficher le médaillon (environ 96 px) à gauche de la ligne « Du lundi au samedi… ».
   - Remplacer la traînée par un halo rond, comme sur ordinateur.
   - Resserrer l'espace pour que la boîte et son bureau remontent au-dessus de la barre « Appeler / Rendez-vous ».
   - Sur les deux formats, ajouter une légende au médaillon : « Sandra vous répond elle-même, du lundi au samedi. »
3. **Le formulaire garde des tuiles, contre le brief** (ordinateur, ligne 2, image 1).
   - Une séance par ligne, sur le fond pierre : un rond, « Séance au cabinet », et « 1 h · 65 € » au bout de la ligne, avec un filet fin entre les lignes.
   - Retirer la bordure, le fond blanc et l'ombre, des options comme de la carte.
   - Supprimer la phrase « Trois étapes : la séance, le lieu, vos coordonnées », qui répète la liste 1-2-3 de gauche.
   - La liste, plus haute, comble en partie le vide à droite. Réduire aussi de moitié l'espace avant « Venir au cabinet ».
4. **Des textes restent sous 16 px** (voir le critère 6).
   - Sur ordinateur, passer à 16 px au moins les surtitres, les prix, l'aide du formulaire, les villes, les minutes, le parking et « Plan schématique ».
   - Sur téléphone, écrire les temps sous le plan, en texte courant : « Carpentras 10 min · Orange 25 min · Vaison-la-Romaine 25 min · Avignon 35 min ».
5. **Le plan n'est pas encore propre, et deux finitions manquent** (ordinateur, ligne 2, image 3).
   - Donner à Vaison-la-Romaine le même point noir que les autres villes, et arrêter sa route sur ce point au lieu de la faire sortir du cadre.
   - Arrêter net les routes d'Orange et d'Avignon sur leur point : aujourd'hui elles le dépassent.
   - Mettre les minutes toujours sous le nom (pour Avignon, elles sont à côté).
   - Passer l'italique « ou trois questions. » au pêche de « Ne le vivez plus seule. ».
   - Cacher sur cette page l'onglet vertical « VOTRE MOT » (environ 10 px, sans explication).

## Ce qui est réussi (à garder)

- La boîte affiche le numéro en grand, sur le bureau et sous la lumière de l'accueil. Avec le titre « Un appel, un SMS, ou trois questions. », on sait quoi faire en une seconde.
- La page n'a que deux fonds : nuit, pierre, puis nuit. Elle est calme et courte (3,4 écrans).
- Le portrait en médaillon est net, et le cabinet est signalé comme une illustration : tout est vrai et présenté honnêtement.
