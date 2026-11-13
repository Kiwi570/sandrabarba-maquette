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
