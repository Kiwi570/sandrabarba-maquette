# Plan v1 — Sandra Barba · « La boîte à mots » (plan : outil d'abord)

Palette : nuit #161d36 · nuit 2 #1f2847 · pierre #ece3d4 · craie #fffaf1 · framboise #e0457b · corail #f19a6b · velours #45474f.
Polices : Instrument Serif (titres), Bricolage Grotesque condensée 75 % graisse 700 (tuiles de la boîte), Hanken Grotesk (texte).
Fond : la page part de la nuit (mur bleu) et s'éclaircit jusqu'à la pierre en bas de l'accueil (sortir du silence).

## Grille wouahou
1. Manipuler (`data-grille="manipuler"`) : on attrape une tuile (LE DEUIL, LA PEUR, LE COUPLE, LE SILENCE, LE SOMMEIL, L'ÉPUISEMENT, LES EXAMENS, MA FILLE, LES VIOLENCES) et on la lance dans la boîte ; élan, rebond, aimantée par la fente ; au doigt aussi, et un simple toucher la pose. La boîte s'allume, compose la réponse. Dans les 2 s après l'intro, une tuile glisse seule dans la boîte puis repart (démonstration).
2. Intro → page : panneau nuit, tuiles « LA VIE EST UN COMBAT » qui tombent, le B du logo glisse jusqu'à la boîte (`data-iris-centre`), le panneau s'ouvre en cercle depuis elle (`versObjet`).
3. Voile : `iris`, nuit, logo, nom de la page en tuiles.
4. Fil (`data-grille="fil"`) : « votre mot ». Une tuile glisse sur un rail de fentes dans la marge gauche (ordinateur) et s'arrête à chaque section ; sur téléphone elle vit dans la barre du bas (« LA PEUR · Prendre rendez-vous »). Gardée de page en page (sessionStorage), elle remplit le rendez-vous.
5. Typo fabriquée (`data-grille="typo"`) : sur chaque page, une ligne du titre se compose en tuiles de boîte lumineuse qui tombent une à une.
6. Scène (`data-grille="scene"`, accueil) : « Mettre des mots » épinglée : au défilement, les tuiles noires du silence se retournent et composent ses phrases (METTRE DES MOTS → EN PARLER → SORTIR DU SILENCE).
7. Retour (`data-grille="retour"`, rendez-vous) : à l'envoi, les tuiles du mot et de la séance volent dans une boîte qui s'allume « DEMANDE REÇUE ».
8. Familles modernes de l'accueil : typo-geante (signature : boîte et tuiles), lumiere-pointeur (halo de la boîte sur le mur, lampe du cabinet qui suit la main), ambiance-qui-change (nuit → pierre). Pages : psychothérapie ambiance-qui-change (trois temps), sophrologie lumiere-pointeur (respiration de la boîte), violences lumiere-pointeur (lampe qui révèle les violences invisibles), rendez-vous typo-geante (numéro en tuiles, confirmation).

## Accueil (≈ 9 écrans)
1. Ouverture : mur de nuit (Grok), titre « La vie est un combat. Ne le vivez plus seul·e. », boîte « QUEL MOT VOUS AMÈNE ? », tuiles, rendez-vous, téléphone, info clé (1 h · 65 € · cabinet ou visio). Effets : boite, halo (souris), tuiles.
2. Réponse (sous la boîte, même écran sur ordinateur) : approche, première séance, lien vers la page, « Prendre rendez-vous pour en parler ».
3. « Je suis comme vous. Une femme. » : portrait rampe (5), depuis 2005, formations, Vivre Femmes. Effet : rideau sur le portrait, lignes.
4. Scène « Mettre des mots » (épinglée).
5. Trois façons de venir : au cabinet, en visio, à deux ou en famille (cartes 65 €, durées). Effet : cascade + vitesse légère.
6. Le cabinet d'Aubignan : grande pièce (Grok) dont la lampe suit la main + vraie photo en vignette + boîte AIMER LA VIE réelle + adresse, parking. Effet : lampe.
7. Ce qu'ils en disent : 3 avis réels.
8. Violences : bandeau sombre, « Ne restez pas seule », 3919, lien vers la page.
9. Appel : « Quel mot vous amène ? » rappel + rendez-vous.

## Pages
- Psychothérapie : fond pierre, très grand titre (tuiles « PARLER »), bandeau divan sous voile sombre qui s'efface ; signature « trois temps » (affronter, se reconstruire, vivre) qui éclaircissent la page ; thèmes ; couple et famille (deux fauteuils) ; formations (diplômes) ; tarifs ; appel.
- Sophrologie : scindée texte / voilage ; boîte qui respire (« INSPIREZ »), maintenir pour inspirer ; pour qui, pour quoi (tuiles) ; méthode Caycedo (galets) ; déroulé ; tarifs ; appel.
- Violences : ouverture sombre compacte, citation, rai de lumière ; numéros d'aide en tête ; « Quitter vite » fixe ; les violences invisibles révélées à la lampe ; « la parole se délie » (presse, association) ; approche ; appel.
- Rendez-vous : numéro en tuiles dans une boîte ; formulaire en étapes (séance, lieu, préférences, coordonnées, récapitulatif) ; retour « DEMANDE REÇUE » ; accès (carte dessinée), e-mail, SMS 7 j/7, portrait laine.
- 404 : « PAGE INTROUVABLE » en tuiles, galets.

## Effets propres (data-effet)
boite-a-mots, halo-boite, tuiles, fil-mot, titre-tuiles, mettre-des-mots, ambiance-nuit, lampe-cabinet, trois-temps, boite-respire, lampe-violences, boite-recue, telephone-tuiles
