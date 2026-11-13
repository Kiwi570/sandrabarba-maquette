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

---

# Second regard

VERDICT : REFAIRE

Regard du 13 novembre 2026 sur `rendez-vous.html`, avec la consigne `_audit/regard-da.md`. Sources : `/tmp/apercus2/rendez-vous/` (mosaïque ordinateur en 3 lignes de 4 images, mosaïque téléphone en 2 lignes de 8, planche, `premier-ecran.json`, `vides.json` et les deux films). Le film ordinateur fait 1280 × 800, pour un écran de 1440 × 900 : les tailles ci-dessous sont ramenées en px CSS. La vitrine est l'accueil (`/tmp/v2-mix.jpg`, `/tmp/zoom-planche.jpg`). Je n'ai pas lu `regard-da-corrections.md` comme une preuve : chaque point est vérifié sur les images.

**Lecture du verdict.** REFAIRE tombe encore par la règle : le critère 9 vaut 2 et la moyenne est de 3,3, contre 3,0 au premier regard. La page a nettement progressé : il n'y a plus de tuiles, le plan est propre et les textes sont presque tous lisibles. C'est le deuxième regard sous 3,5. La consigne demande alors de le dire : l'écart ne vient plus des détails, il vient de l'échelle de la boîte. Elle occupe toujours environ 21 % de l'écran et commence sous le titre. À l'accueil, elle en occupe environ 24 % et commence à hauteur du surtitre. Après l'intro, rien ne bouge seul. Le changement d'échelle proposé au point 1 se fait en CSS. Les points 1 à 3 feraient passer la page à environ 3,8, donc AJUSTER.

## La liste du premier regard, point par point

1. **La boîte (troisième ligne, chute des chiffres, survol, position) : à moitié fait.**
   - Fait : « APPELEZ / 07 60 36 / 58 32 » est en place, et les chiffres retombent à l'arrivée (ordinateur, ligne 1, image 2). La boîte réagit à la souris, sur 24 % du premier écran (`premier-ecran.json`), et pose sur le bois avec une ombre de contact.
   - Pas fait : la boîte n'a pas remonté. Son haut est à 327 px du film, juste sous la fin du titre, et il reste environ 300 px CSS de nuit au-dessus (ligne 1, image 3).
   - « Le halo respire seul » ne se voit pas : 0 % du premier écran bouge seul, et l'écart entre deux images du halo n'est que de 0,03 sur 1,2 s.
   - Le lien `tel:` ne se vérifie pas sur les images.
2. **Le téléphone : à moitié fait.**
   - Fait : le médaillon (environ 88 px) est revenu, avec sa légende « Sandra vous répond elle-même, du lundi au samedi. ». La boîte passe au-dessus du titre (téléphone, ligne 1, image 3).
   - Pas fait : la traînée de lumière floue et verticale est toujours là, de la boîte jusqu'à la barre, à droite du médaillon.
   - Le bureau a disparu sur téléphone : la boîte flotte dans la nuit, alors que le brief la veut « posée sur le bureau ».
3. **Le formulaire sans tuiles : fait.** Il y a une séance par ligne, séparée par des filets fins, sur la pierre, sans bordure, sans fond blanc et sans ombre. La phrase « Trois étapes… » a disparu. Le vide à droite sous « Suivant » est passé d'environ 465 px à environ 250 px (ordinateur, ligne 2, images 1 et 2).
4. **Les textes à 16 px : à moitié fait.**
   - Sur ordinateur, les surtitres, les prix, la légende du médaillon, les villes et « Plan schématique… » font maintenant environ 16 px.
   - Dans le plan, les minutes, « 89 rue du Portail-Neuf » et « Parking gratuit à proximité » restent à environ 14 px.
   - Sur téléphone, les étiquettes du plan font environ 7 à 10 px (téléphone, ligne 2, image 1). Les temps de trajet sont bien écrits sous le plan.
5. **Le plan et les finitions : fait.**
   - Vaison-la-Romaine a son point noir, et toutes les routes s'arrêtent net sur leur point. Pour Avignon, les minutes sont sous le nom (ordinateur, ligne 2, image 3).
   - Les italiques sont pêche, et l'onglet « VOTRE MOT » n'apparaît plus.
   - Petit reste : « Orange » est au-dessus de son point et « 25 min » en dessous, si bien que le point sépare le nom de ses minutes.

## Le brief

| Demande | État |
|---|---|
| Deux fonds, trois changements au plus | **Fait** : nuit, pierre, puis nuit, soit 2 changements. |
| Boîte au numéro en grand, posée sur le bureau, avec le portrait en médaillon net | **Fait sur ordinateur, à moitié sur téléphone** : la boîte n'a pas de bureau et la traînée floue reste. Le médaillon est net sur les deux formats. |
| Demande en trois étapes, sur fond clair, sans tuiles | **Fait.** |
| Plan propre (cinq villes), avec l'adresse et le parking | **Fait.** Les petites étiquettes sont à agrandir. |
| Textes à 16 px au moins | **Presque** : il reste les étiquettes secondaires du plan (environ 14 px) et les mentions du pied de page (environ 13 px). |

## Notes

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité | 4 | Tout reste vrai : 65 €, le coaching couple en 1 h 15, le 89 rue du Portail-Neuf, le parking gratuit, les villes. Le portrait est le vrai, et le cabinet est signalé « Illustration générée ». Les temps de trajet restent approximatifs. |
| 2 | Effet signature | 3 | La boîte a trois rangées, ses chiffres tombent (ligne 1, image 2) et elle réagit à la souris (24 %). Mais elle n'occupe qu'environ 21 % de l'écran (569 × 379 px sur 1280 × 800), et rien ne bouge seul après l'intro (0 %). |
| 3 | Images | 3 | Le médaillon est net et l'illustration est honnête. La traînée floue verticale reste sur le téléphone (ligne 1, image 3) : point 2 à moitié fait. |
| 4 | Composition | 3 | Sans tuiles, sans onglet et avec les italiques pêche, la page parle un seul langage. Deux points restent à moitié faits : environ 300 px de nuit au-dessus de la boîte, et sur téléphone une boîte qui flotte sans bureau. |
| 5 | Rythme | 4 | La page tient en 3,3 écrans sur ordinateur et 4,6 sur téléphone, sans écran vide (`vides.json`). Restent la nuit au-dessus de la boîte et environ 250 px vides sous « Suivant ». |
| 6 | Typographie | 4 | Les textes principaux font maintenant environ 16 px et les titres tiennent. Les étiquettes secondaires du plan font environ 14 px sur ordinateur et 7 à 10 px sur téléphone : point 4 à moitié fait. |
| 7 | Niveau / vitrine | 3 | C'est le même monde que l'accueil, un cran en dessous : la boîte est plus petite et plus basse, le bureau est nu, et le téléphone n'a pas de bureau. |
| 8 | Envie d'agir | 4 | Le numéro se lit vers 2,5 s, et la boîte est un lien d'appel. « Votre demande », « Envoyer un SMS » et la barre « Appeler / Rendez-vous » sont là dès le premier écran. |
| 9 | Jeu | 2 | La boîte se soulève au survol, mais rien ne s'attrape et rien ne se joue. |

**Moyenne : 30 / 9 = 3,3.**

## Ce qui doit changer (tout se fait en CSS ou en texte, en quelques minutes)

1. **Changer l'échelle de la boîte, pas la retoucher** (critères 2, 4 et 7).
   - Sur ordinateur, monter son haut au niveau du surtitre « PRENDRE RENDEZ-VOUS » et la porter à environ 52 % de la largeur, soit environ 30 % de l'écran. La nuit vide au-dessus disparaît.
   - Rendre visible la respiration du halo : opacité de 0,55 à 1 et échelle de 0,92 à 1,08, en boucle de 4 s. Elle doit dépasser 8 % de l'écran qui bouge seul.
2. **Donner aux chiffres une petite prise** (critère 9). Au survol, chaque chiffre se soulève et penche séparément (`transform` sur chaque chiffre, transition de 0,2 s). Au clic ou au toucher, il rejoue sa chute d'arrivée.
3. **Sur téléphone, poser la boîte et effacer la traînée** (critères 3 et 4).
   - Sous la boîte, ajouter une bande du même bois (environ 40 px) avec l'ombre de contact.
   - Remplacer la traînée verticale floue par le halo rond de l'ordinateur.
4. **Agrandir les petits textes qui restent** (critère 6).
   - Sur ordinateur, passer à 16 px les minutes, « 89 rue du Portail-Neuf » et « Parking gratuit à proximité » dans le plan.
   - Sur téléphone, ne garder sur le plan que les noms de villes, à 15 px au moins : les temps sont déjà écrits dessous.
   - Mettre « Orange » et « 25 min » ensemble, à droite du point.
   - Passer les mentions du pied de page à 15 px.
5. **Réduire le vide sous « Suivant »** (critère 5). Ramener l'illustration du cabinet à la hauteur de la liste 1-2-3, ou réduire l'espace avant « Venir au cabinet », pour que les deux colonnes finissent ensemble.

## Ce qui est réussi (à garder)

- La demande en lignes à filets sur la pierre : elle est calme, lisible et suit le brief à la lettre.
- Le plan est enfin propre : les cinq villes, les routes arrêtées sur les points, le repère du parking, et les temps aussi écrits en texte.
- L'ouverture : la boîte à trois rangées dont les chiffres tombent, posée avec une ombre de contact, et le médaillon accompagné de « Sandra vous répond elle-même, du lundi au samedi. ».
