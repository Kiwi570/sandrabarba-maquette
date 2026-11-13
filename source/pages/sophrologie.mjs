/* Sophrologie (v2). Ouverture plein cadre sur le voilage, la boîte « INSPIREZ » posée sur le bureau.
   Grand moment : « Respirez avec la boîte », en pleine largeur sur la nuit, la lumière monte et descend avec le souffle.
   Fonds : pierre (ouverture), nuit (respiration), pierre, nuit (appel final). */
import { html } from '../../outils/gabarit.mjs';
import { boite, sceneBureau, plateau } from '../gabarits/boite.mjs';
import { vignettes, visionneuse } from '../gabarits/vignettes.mjs';

export const page = { cle: 'sophrologie', fichier: 'sophrologie', imagePartage: 'grok/voilage-1280.webp' };

export default (c) => html`
<section class="page-ouverture po-sophro pi-sophro-ouverture ton-pierre" id="debut">
  ${c.media({ nom: 'grok/voilage', alt: c.s('sophrologie.imageAlt'), cadrage: '100% 50%', cadrageMobile: '50% 64%', classe: 'po-sophro-media', sizes: '100vw', priorite: true })}
  <div class="po-sophro-grille conteneur pi-sophro-grille">
    <div class="po-sophro-texte">
      <p class="surtitre" data-anime="gsap">${c.t('sophrologie.sur')}</p>
      <h1 data-superpose class="pi-titre pi-titre--encre"><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${c.t('sophrologie.titreLigne1')}</span></span><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap"><em>${c.t('sophrologie.titreMot')}</em></span></span></h1>
      <p class="pi-chapo" data-anime="gsap">${c.t('sophrologie.texte')}</p>
      <div class="page-actions" data-anime="gsap">
        <p>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })} <a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
        <p class="info-cle" data-info-cle>${c.t('sophrologie.info')}</p>
      </div>
    </div>
    ${sceneBureau({ rangees: ['', c.s('sophrologie.tuiles'), ''], label: c.s('sophrologie.tuiles'), attrs: 'data-grille="typo" data-effet="boite-page" data-iris-centre' })}
  </div>
  ${plateau()}
</section>

<section class="pi-respire ton-nuit" id="souffle" data-souffle data-inspirez="${c.s('sophrologie.souffleInspirez')}" data-expirez="${c.s('sophrologie.souffleExpirez')}" data-fin="${c.s('sophrologie.souffleFin')}">
  <div class="pi-respire-lumiere" data-respire-lumiere aria-hidden="true"></div>
  <div class="conteneur pi-respire-grille">
    <div class="pi-respire-tete">
      <p class="surtitre" data-anime>${c.t('sophrologie.souffleSur')}</p>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('sophrologie.souffleTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('sophrologie.souffleTexte')} ${c.t('sophrologie.respireLumiere')}</p>
    </div>
    <div class="pi-respire-objet" data-visuel data-grille="manipuler">
      ${boite({ rangees: ['', c.s('sophrologie.souffleInspirez'), ''], label: c.s('sophrologie.souffleTitre'), classe: 'boite--souffle allumee', attrs: 'data-effet="boite-respire"' })}
      <span class="boite-ombre" aria-hidden="true"></span>
    </div>
    <p class="pi-respire-actions" data-anime><button type="button" class="bouton souffle-bouton" data-souffle-bouton>${c.t('sophrologie.souffleBouton')}</button><span class="souffle-compte" data-souffle-compte aria-live="polite">0 / 3</span></p>
    <p class="pi-note pi-note--clair" data-anime>${c.t('sophrologie.souffleNote')}</p>
  </div>
</section>

<section class="pi-principes ton-pierre" id="methode">
  <div class="conteneur">
    <div class="pi-principes-tete">
      <p class="surtitre" data-anime>${c.t('sophrologie.methodeSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.methodeTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('sophrologie.methodeTexte')}</p>
    </div>
    <ol class="pi-etapes" data-anime="cascade" data-visuel>${[1, 2, 3].map((i) => html`<li><span class="pi-etape-num" aria-hidden="true">${String(i)}</span><span class="pi-etape-nom">${c.t(`sophrologie.principe${i}`)}</span></li>`)}</ol>
    <p class="pi-deroule-phrase" data-anime><span class="surtitre">${c.t('sophrologie.deroulerSur')}</span>${c.t('sophrologie.deroule1')} ${c.t('sophrologie.deroule2')} ${c.t('sophrologie.deroule3')}</p>
    </div>
  </div>
</section>

<section class="pi-avec ton-pierre" id="pour-qui">
  <div class="conteneur pi-avec-grille">
    ${c.media({ nom: 'sandra-rampe', alt: c.s('sophrologie.portraitAlt'), cadrage: '46% 38%', classe: 'pi-portrait', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="5"' })}
    <div class="pi-avec-texte">
      <p class="surtitre" data-anime>${c.t('sophrologie.pourQuiSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.pourQuiTitre')}</h2>
      <ul class="pi-colonnes" data-anime="cascade">${c.s('sophrologie.pourQui').split('|').map((x) => html`<li>${x}</li>`)}</ul>
      <p class="petit-titre" data-anime>${c.t('sophrologie.avecSur')}</p>
      <p data-anime>${c.t('sophrologie.avecTexte')}</p>
      ${vignettes(c, ['diplome-sophrologie'])}
    </div>
  </div>
</section>

<section class="pi-fin ton-nuit" id="fin">
  <div class="conteneur pi-fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('sophrologie.finTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('sophrologie.finTexte')}</p>
      <p class="pi-actions" data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('commun.actionEntete') })} <a class="tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </div>
    ${c.media({ nom: 'grok/cabinet-lumiere', alt: 'Le cabinet d’Aubignan dans la lumière d’une lampe', cadrage: '60% 50%', classe: 'pi-fin-photo', ratio: '3 / 2', sizes: '(max-width: 760px) 80vw, 26vw' })}
  </div>
</section>
${visionneuse()}
`;
