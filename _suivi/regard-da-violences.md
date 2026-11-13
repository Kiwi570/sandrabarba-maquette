VERDICT : REFAIRE

Regard du directeur artistique, page **Violences** (13 novembre 2026), selon `_audit/regard-da.md`.
Sources : `/tmp/apercus/violences/` (mosaïques, planche, films, `premier-ecran.json`, `vides.json`), vitrine `/tmp/v2-mix.jpg` et `/tmp/zoom-planche.jpg`, `_suivi/releve.md`. Le film ordinateur fait 1280 px (rendu 1440 réduit) : les tailles citées sont ramenées à 1440.
Repères : « L2 I3 » = mosaïque ordinateur, ligne 2, image 3 ; « tél L1 I3 » = mosaïque téléphone.

Regard précédent : aucun pour cette page (les `regard-da*.md` portent sur l'accueil).

## Notes

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité au lieu et au métier | 4 | Vrai portrait de Sandra (L3 I1), vraie coupure « Éveiller les consciences… » et vrai certificat (L3 I3), mots de la cliente (« le secret est bien caché au fond du placard », L1 I3), Vivre Femmes 2017, Transition'Elles, numéros vérifiés du relevé. Rien de faux. La boîte reste un objet inventé, mais c'est le langage du site. |
| 2 | Effet signature | 2 | La boîte « SORTIR DU SILENCE » est grande (≈ 20 % de l'écran, L1 I3) et s'écrit lettre à lettre (L1 I2), puis plus rien : 0 % bouge seul, 0 % réagit à la souris, rien à manipuler. La règle plafonne à 2. Au téléphone, la boîte est collée à la barre du bas et on ne voit pas le bureau (tél L1 I3). |
| 3 | Images | 3 | Le portrait est net et chaleureux (L3 I1-I2). Mais le mur ocre du premier écran est terne et boueux, avec un coin haut droit sombre (L1 I3). La lampe laisse le bas du mur noir et une tache brune à droite (L2 I3). La presse tient dans des timbres de 135 px (L3 I3). |
| 4 | Composition et finition | 3 | Un seul langage (boîte, serif, nuit et pierre), colonnes tenues (L2 I1, L2 I4). Finitions : la languette « VOTRE MOT » vient de l'accueil et n'a pas d'objet ici (L1 I3, bord gauche). Le final est décalé à ≈ 230 px quand tout est à 82 px (L3 I4). La moitié droite est vide dans la presse et le final. Au téléphone, « Quitter vite » recouvre les titres (tél L2 I6, L1 I4). Une bande nuit de 14 px longe le bord droit des sections pierre (L2 I4, L3 I3). |
| 5 | Rythme, sans vides | 4 | 6,4 écrans sur ordinateur et 7,8 au téléphone, aucun écran vide (`vides.json`). Les respirations de 150 à 190 px après les numéros et avant le portrait passent. Seules les moitiés vides de la presse et du final pèsent. |
| 6 | Typographie et lisibilité | 3 | Les titres serif sont beaux et tiennent (L2 I1, L3 I1). Le brief demande 16 px, mais les surtitres font ≈ 13-14 px. Sont aussi trop petits : les textes sous les numéros (≈ 15 px), « Promenez la lumière sur le mur », les légendes de presse, « Ouvrir l'article… », « Numéros nationaux… » et la ligne 3919 du premier écran (≈ 13-14 px). Les numéros (≈ 80 px) sont plus petits que le titre qui les annonce (L2 I1). |
| 7 | Niveau par rapport à la vitrine | 3 | Même famille que l'accueil (boîte, bureau, nuit), mais l'ouverture est un cran en dessous : la boîte est figée sur deux lignes, un mur brun remplace le halo et il n'y a pas de tuiles (L1 I3 face à v2-mix). La lampe rattrape (L2 I3). |
| 8 | Envie d'agir | 4 | Dès le premier écran : « Appeler 07 60 36 58 32 », « Prendre rendez-vous » et la ligne 3919 (L1 I3). Au téléphone, une barre Appeler / Rendez-vous ; le final reprend les deux. Clair et sans pression. |
| 9 | Jeu | 3 | Une seule vraie manipulation : la lampe, en pleine largeur (L2 I3, tél L1 I7-I8). L'ouverture ne propose rien à faire. |

Moyenne : 29 / 9 = **3,2**. Le critère 2 vaut 2 et la moyenne est sous 3,5, d'où REFAIRE. Ici, REFAIRE ne veut pas dire tout reprendre : le verdict vient de l'ouverture figée et du mur brun. Les cinq points ci-dessous se font en CSS ou en texte.

## Le brief, point par point

- **Deux fonds, trois changements au plus** : oui (nuit, puis pierre, puis nuit : deux changements). Mais le mur ocre de l'ouverture fait un troisième ton.
- **Ouverture sombre et « Quitter vite »** : oui. Le bouton manque pendant l'intro sur ordinateur (L1 I1-I2) et chevauche le texte au téléphone.
- **Boîte posée sur le bureau** : oui sur ordinateur (elle flotte de 3 px). Au téléphone, le bureau est caché au premier écran.
- **Numéros sur le même fond, sans tuiles** : oui. En « très grands chiffres » : non.
- **Lampe en pleine largeur** : oui. Mieux éclairée : à moitié.
- **Quatre formes en colonnes** : oui.
- **Culpabilité avec le portrait en grand** : oui (≈ 38 % de la largeur).
- **Presse en vignette** : oui, mais trop petite.
- **Final « Ne restez pas seule »** : oui, mais décalé.
- **Pas de grand vide** : oui.
- **16 px au moins** : non.

## Ce qui doit changer

1. **« Quitter vite » visible dès la première image, et jamais sur le texte.** Sur ordinateur, il manque pendant l'intro « LA VIE EST UN COMBAT » (L1 I1-I2, ≈ 2 s). Au téléphone, il flotte en haut au milieu et recouvre les titres (tél L2 I6 « Éveiller les cons… », tél L1 I4).
   - CSS : le passer au-dessus du voile d'intro (z-index), ou ne pas jouer l'intro sur cette page.
   - Au téléphone : le garder dans l'en-tête, qui reste affiché sur fond nuit plein (pas masqué au défilement sur cette page), à droite avant « Menu », comme sur tél L1 I3.
2. **Ouverture : la nuit et le halo de l'accueil à la place du mur ocre, et une lumière qui vit.** Le mur brun fait un troisième fond, et rien ne bouge après l'intro.
   - CSS : fond nuit avec le halo blanc doux au-dessus de la boîte, comme sur v2-mix.
   - Faire respirer le halo comme une lampe de bureau, sobre : opacité de 0,55 à 0,9, échelle de 1 à 1,1, sur 7 s en boucle, coupé si `prefers-reduced-motion`.
   - Descendre la boîte de 3 px pour qu'elle repose sur le bureau, avec une ombre de contact.
   - Au téléphone : réduire l'espace sous le texte pour que la boîte et le bord du bureau tiennent au-dessus de la barre Appeler / Rendez-vous (tél L1 I3).
3. **Tailles : des numéros vraiment très grands, rien sous 16 px.**
   - CSS : 17, 114, 3919 et 119 à ≈ 8 rem sur ordinateur et ≈ 4,5 rem au téléphone, un cran plus gras, plus grands que le titre « Si vous êtes en danger, appelez. » (L2 I1).
   - Passer à 16 px au moins sur ordinateur : les surtitres (en capitales espacées), les textes sous les numéros, « Promenez la lumière sur le mur », les légendes de presse, « Ouvrir l'article… », « Numéros nationaux… » et la ligne 3919 du premier écran.
4. **La lampe, mieux éclairée.** Le cercle de lumière coupe les lettres net (« …ULATION », « L'ARGENT CO », L2 I3). Les mots sont tassés en haut, le bas du mur reste noir sur ≈ 40 % de sa hauteur et le tiers droit est une tache brune.
   - CSS : adoucir le bord du masque (dégradé radial de 35 % à 75 %) et agrandir le rayon de moitié.
   - Montrer les mots non éclairés à ≈ 25 % d'opacité au lieu de ≈ 10 %.
   - Centrer le nuage de mots en hauteur et l'étaler sur toute la largeur, puis ramener le mur à la hauteur des mots (≈ 70 vh).
5. **Finitions.**
   - Retirer la languette verticale « VOTRE MOT », héritée de l'accueil (L1 I3).
   - Aligner « Ne restez pas seule. » et ses boutons sur la marge de 82 px (L3 I4).
   - Presse : passer les vignettes de 135 à ≈ 260 px pour occuper la moitié droite. Remplacer « touchez la vignette » par « cliquez sur la vignette » sur ordinateur.
   - Teinter en transparent la bande nuit de 14 px au bord droit des sections pierre (barre ou gouttière de défilement).

## Ce qui est réussi

- La boîte « SORTIR DU SILENCE » sur le bureau, en grand, avec la phrase de la cliente et l'appel direct dès le premier écran (L1 I3). C'est le même langage que l'accueil, sur un ton juste.
- La lampe en pleine largeur : les mots de l'emprise (les reproches, l'isolement, l'argent confisqué, la honte) sont écrits dans les lettres de la boîte. C'est l'idée la plus forte de la page, sobre et parlante (L2 I3, tél L1 I8).
- La partie pierre : les quatre formes en colonnes nettes, puis le portrait de Sandra, net et chaleureux, face à « La culpabilité n'est pas la vôtre. » (L3 I1-I2).

VERDICT : REFAIRE · moyenne 3,2 / 5 (critère 2 à 2 : ouverture figée ; corrections en CSS et en texte)

---

## Second regard

VERDICT : REFAIRE

Second regard du directeur artistique sur la page **Violences** (13 novembre 2026), selon `_audit/regard-da.md`. Sources : `/tmp/apercus2/violences/` (mosaïques, planche, `premier-ecran.json`, `vides.json`, films dont j'ai extrait des images à 2 par seconde), vitrine `/tmp/v2-mix.jpg` et `/tmp/zoom-planche.jpg`. Les mesures sont prises sur le film en 1280 px et ramenées à 1440.
Repères : « L2 I3 » = mosaïque ordinateur, ligne 2, image 3 ; « tél L1 I7 » = mosaïque téléphone ; « film 9 s » = image du film ordinateur à 9 s ; « film tél 10 s » = film téléphone.

### La liste du premier regard, vérifiée sur les images

1. **« Quitter vite » visible dès la première image, jamais sur le texte : fait.** Sur ordinateur, il est là pendant l'intro (L1 I1-I2). Au téléphone, il est dans l'en-tête, qui reste affiché, entre « Sandra Barba » et « Menu », et ne recouvre plus aucun titre (tél L1 I1 à L3 I3). Reste mineur : « Sandra Barba » touche le bouton (≈ 5 px d'écart). Sur ordinateur, le bouton flottant passe sur la fin de certains textes pendant le défilement (texte du 119 au film 5 s, « Illustration générée » au film 9 s, « APE 8690F » du pied de page).
2. **Ouverture : nuit et halo, une lumière qui vit : à moitié fait.**
   - Fait : le mur ocre a disparu. La nuit et un halo doux sont posés au-dessus de la boîte, qui repose sur le plateau avec une ombre de contact (L1 I3, film 3 s).
   - Pas fait : rien ne bouge seul. `premier-ecran.json` donne 0 % sur ordinateur et au téléphone. Sur le film, la luminosité du halo varie de moins de 0,3 niveau de gris sur 17 s : la respiration est invisible. Le halo est aussi bien plus faible que sur v2-mix.
   - Pas fait au téléphone : la boîte flotte dans la nuit, sans bureau dessous (tél L1 I3, film tél 3 s).
3. **Numéros très grands, rien sous 16 px : fait.** 17, 114, 3919 et 119 font ≈ 85 px de haut (≈ 7,5 rem), plus de deux fois le titre « Si vous êtes en danger, appelez. » (L1 I4, film 5,5 s). Les surtitres, les textes sous les numéros, « Numéros nationaux… », « Promenez la lumière… », les légendes de presse et la ligne 3919 font tous 16 px ou plus. Seule exception : la ligne légale du pied de page (≈ 13-14 px).
4. **La lampe mieux éclairée : à moitié fait.**
   - Fait : les mots dans l'ombre sont lisibles (≈ 35 %), le bord de la lumière est plus doux et le nuage est mieux étalé.
   - Le vrai défaut, mal diagnostiqué au premier regard, vient de la couche éclairée : elle est **décalée** d'environ 280 px vers la gauche et 280 px vers le haut par rapport aux mots sombres. Exemple : le « LA HONTE » éclairé est à x 258, y 250, son double sombre à x 538, y 530 (film 9 s). Le nuage apparaît donc en double, coupé net par un bord vertical vers x 800 (« LA PEU », « CONFIS ») et par le haut du mur (« …ATION »).
   - Même chose au téléphone : les mots éclairés sont coupés au bord gauche et chevauchent « LES INSULTES / LES REPROCHES », et la consigne « Faites glisser votre doigt… » apparaît en double (tél L1 I7, film tél 8-10 s).
   - Le mur fait encore ≈ 84 vh, et la tache brune du tiers droit reste.
5. **Finitions : à moitié fait.**
   - Fait : la languette « VOTRE MOT » est retirée (L1 I3). « Ne restez pas seule. » est aligné sur la marge de 82 px (L3 I4). Les vignettes de presse passent de 135 à ≈ 220 px (L3 I2-I3, film 15 s), et le texte dit « ouvrez la vignette ».
   - Pas fait : la bande nuit de ≈ 15 px longe toujours le bord droit du plateau, de la lampe et des sections pierre (film 3 s, 9,5 s, 12,5 s, 15 s).

### Notes

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité au lieu et au métier | 4 | Toujours rien de faux : vrai portrait (L3 I1), vraie coupure et vrai certificat (L3 I2), mots de la cliente, numéros vérifiés. Le final ajoute une vraie photo de Sandra (L3 I4). |
| 2 | Effet signature | 2 | La boîte « SORTIR DU SILENCE » est grande et posée sur le bureau (L1 I3), mais rien ne bouge seul après l'intro (0 %). Elle réagit au survol sur 23 % de l'écran, sans se manipuler : la règle plafonne à 2. Le halo est trop faible et ne respire pas visiblement (point 2 à moitié fait). La troisième rangée de la boîte reste vide, ce qui la déséquilibre. |
| 3 | Images | 3 | Le mur ocre est parti et l'ouverture est propre (L1 I3). Le portrait de la culpabilité est net et chaleureux (L3 I1). Mais la lampe garde sa tache brune à droite et un bas de mur vide (point 4 à moitié fait). Le portrait rond du final est blanc sur blanc, délavé, et le cercle coupe le front (film 16,5 s, film tél 22 s). |
| 4 | Composition et finition | 3 | Un seul langage du haut en bas, et le final est réaligné. Défauts : le nuage de la lampe en double avec des mots tranchés (L2 I2, film 9 s), la bande nuit au bord droit (point 5 à moitié fait) et la rangée vide de la boîte. |
| 5 | Rythme, sans vides | 4 | 6,4 écrans sur ordinateur, 8,3 au téléphone, aucun écran vide (`vides.json`). La presse et le final n'ont plus de moitié vide. Le mur de la lampe reste un peu haut. |
| 6 | Typographie et lisibilité | 4 | Les titres serif tiennent. Les numéros sont enfin très grands (L1 I4). Tous les textes de contenu font 16 px ou plus ; seule la ligne légale du pied fait ≈ 13-14 px. Dans le pied de page, « 17 ou 112 . Par SMS : 114 . » laisse une espace avant chaque point. |
| 7 | Niveau par rapport à la vitrine | 3 | L'ouverture est de la même famille que v2-mix (nuit, halo, boîte sur le plateau), mais un cran en dessous : la boîte est plus petite (≈ 44 % de la largeur), figée sur deux rangées, et le halo est terne. La lampe, qui devrait rattraper, montre ses mots en double. |
| 8 | Envie d'agir | 4 | « Appeler 07 60 36 58 32 », « Prendre rendez-vous » et la ligne 3919 sont là dès le premier écran (L1 I3). Au téléphone, la barre Appeler / Rendez-vous est toujours visible, et le final reprend les deux. |
| 9 | Jeu | 3 | Une seule manipulation, la lampe, en pleine largeur. Mais la lumière révèle un double décalé au lieu des mots qu'elle survole. |

Moyenne : 30 / 9 = **3,3** (3,2 au premier regard). REFAIRE, parce que le critère 2 vaut 2 et que la moyenne est sous 3,5.
C'est le deuxième regard sous 3,5, mais le problème tient à trois choses précises : l'échelle de la lumière d'ouverture, le décalage de la couche éclairée de la lampe et l'absence de bureau au téléphone. Les trois se règlent en CSS. Une fois les points 1 à 3 ci-dessous faits, les critères 2, 3 et 4 passent à 3, 4 et 4 : moyenne ≈ 3,7, soit AJUSTER.

### Le brief, point par point

- **Deux fonds, trois changements au plus** : oui (nuit, pierre, nuit), et le mur ocre a disparu.
- **Ouverture sombre et « Quitter vite »** : oui, dès la première image.
- **Boîte posée sur le bureau** : oui sur ordinateur, non au téléphone.
- **Numéros en très grands chiffres, sans tuiles** : oui.
- **Lampe en pleine largeur, mieux éclairée** : pleine largeur, oui. Mieux éclairée : à moitié, à cause de la couche décalée.
- **Quatre formes en colonnes** : oui.
- **« La culpabilité n'est pas la vôtre » avec le portrait en grand** : oui (≈ 38 % de la largeur).
- **Presse en vignette** : oui (≈ 220 px).
- **Final « Ne restez pas seule »** : oui.
- **16 px au moins** : oui, sauf la ligne légale du pied de page.

### Ce qui doit changer (CSS ou texte, quelques minutes chacun)

1. **Lampe : superposer exactement la couche éclairée aux mots sombres** (film 9 s, film tél 10 s).
   - La couche claire prend la même position et la même taille que la couche sombre (`position:absolute; inset:0`, même transformation), sans boîte ni `overflow:hidden` autour.
   - Seul le masque bouge : `mask-image: radial-gradient(circle 22vmax at var(--x) var(--y), #000 35%, transparent 75%)`.
   - Sortir la consigne « Promenez la lumière… / Faites glisser… » de la couche dupliquée.
   - Puis ramener le mur à ≈ 70 vh, et poser un dégradé nuit sur le tiers droit pour éteindre la tache brune.
2. **Ouverture : une lumière qui vit, à l'échelle de l'accueil.**
   - Un halo large (≈ 900 px) et franc au-dessus de la boîte, comme sur v2-mix.
   - Une respiration visible : opacité de 0,35 à 1 et échelle de 0,9 à 1,15, sur 6 s. Vérifier qu'elle n'est coupée que sous `prefers-reduced-motion`. Il faut que 8 % de l'écran au moins bouge seul.
   - Remplir les trois rangées de la boîte : « SORTIR / DU / SILENCE ».
   - La porter à ≈ 50 % de la largeur.
3. **Téléphone : poser la boîte sur un plateau.** Sous la boîte, une bande de pin de ≈ 40 px avec l'ombre de contact de l'ordinateur (film tél 3 s). L'espace libre sous la ligne 3919 (≈ 90 px) permet de garder les boutons au-dessus de la barre.
4. **Finitions.**
   - Retirer la bande nuit de 15 px au bord droit : piste de la barre de défilement transparente, ou pas de gouttière réservée.
   - Ligne légale du pied de page à 16 px.
   - Supprimer les espaces avant les points dans « 17 ou 112 . Par SMS : 114 . ».
   - Décaler « Illustration générée » vers la gauche de la lampe pour que « Quitter vite » ne la couvre pas.
5. **Portrait du final.** Recadrer pour montrer toute la tête (`object-position: 50% 15%`) et le réchauffer légèrement (`filter: saturate(1.1) contrast(1.06)`). Sinon, reprendre un gros plan du portrait chaleureux à la rambarde.

### Ce qui est réussi

- L'ouverture a trouvé son ton : nuit, boîte « SORTIR DU SILENCE » sur le plateau, appel direct et 3919 dès le premier écran, « Quitter vite » toujours là (L1 I3, tél L1 I3).
- Les numéros d'aide en très grands chiffres roses, sans tuiles, nets et calmes (L1 I4) : c'est exactement le brief.
- La partie pierre : quatre formes en colonnes, puis le grand portrait face à « La culpabilité n'est pas la vôtre. » (L2 I4, L3 I1).

VERDICT : REFAIRE · moyenne 3,3 / 5 (critère 2 à 2 : rien ne bouge seul à l'ouverture ; la lampe affiche ses mots en double ; tout se corrige en CSS ou en texte)
