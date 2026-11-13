/* Sophrologie. Ouverture scindée : texte et tuiles « INSPIREZ » à gauche, voilage soulevé par l'air à droite.
   Signature : la boîte qui respire (maintenir pour inspirer, relâcher pour expirer). */
import { html } from '../../outils/gabarit.mjs';
import { boite, titreTuiles } from '../gabarits/boite.mjs';

export const page = { cle: 'sophrologie', fichier: 'sophrologie', imagePartage: 'grok/voilage-1280.webp' };

export default (c) => html`
<section class="page-ouverture po-sophro ton-aube" id="debut">
  <div class="po-sophro-grille">
    <div class="po-sophro-texte">
      <p class="surtitre" data-anime="gsap">${c.t('sophrologie.sur')}</p>
      <h1 class="page-titre">${titreTuiles(c.s('sophrologie.tuiles'), 'data-iris-centre')}<span class="ligne-masque"><span class="titre-ligne">${c.t('sophrologie.titre')}</span></span></h1>
      <p class="page-chapo" data-anime="gsap">${c.t('sophrologie.texte')}</p>
      <div class="page-actions" data-anime="gsap">
        <p>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })} <a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
        <p class="info-cle" data-info-cle>${c.t('sophrologie.info')}</p>
      </div>
    </div>
    ${c.media({ nom: 'grok/voilage', alt: c.s('sophrologie.imageAlt'), cadrage: '62% 50%', classe: 'po-sophro-media', sizes: '(max-width: 760px) 100vw, 52vw', priorite: true, attrs: 'data-fx="zoom" data-fx-force="10"' })}
  </div>
</section>

<section class="souffle ton-nuit" id="souffle" data-souffle data-inspirez="${c.s('sophrologie.souffleInspirez')}" data-expirez="${c.s('sophrologie.souffleExpirez')}" data-fin="${c.s('sophrologie.souffleFin')}">
  <div class="conteneur souffle-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('sophrologie.souffleSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.souffleTitre')}</h2>
      <p data-anime>${c.t('sophrologie.souffleTexte')}</p>
      <p class="souffle-actions" data-anime><button type="button" class="bouton souffle-bouton" data-souffle-bouton>${c.t('sophrologie.souffleBouton')}</button><span class="souffle-compte" data-souffle-compte aria-live="polite">0 / 3</span></p>
      <p class="souffle-note" data-anime>${c.t('sophrologie.souffleNote')}</p>
    </div>
    <div class="souffle-objet" data-visuel data-grille="manipuler">
      ${boite({ rangees: ['', c.s('sophrologie.souffleInspirez'), ''], label: c.s('sophrologie.souffleTitre'), classe: 'boite--souffle', attrs: 'data-effet="boite-respire"' })}
    </div>
  </div>
</section>

<section class="pour-qui ton-pierre" id="pour-qui">
  <div class="conteneur pour-qui-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('sophrologie.pourQuiSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.pourQuiTitre')}</h2>
      <ul class="nuage-tuiles" data-anime="cascade">${c.s('sophrologie.pourQui').split('|').map((x) => html`<li><span class="tuile">${x.toUpperCase()}</span></li>`)}</ul>
    </div>
    <figure class="avec">
      ${c.media({ nom: 'sandra-bibliotheque', alt: c.s('sophrologie.avecAlt'), cadrage: '50% 30%', classe: 'avec-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-anime="rideau"' })}
      <figcaption class="avec-texte"><span class="petit-titre">${c.t('sophrologie.avecSur')}</span>${c.t('sophrologie.avecTexte')}</figcaption>
    </figure>
  </div>
</section>

<section class="methode ton-aube" id="methode">
  <div class="conteneur methode-grille">
    ${c.media({ nom: 'cabinet-photo', alt: 'Photo du cabinet : divan gris, lampe en bois flotté et fauteuil', cadrage: '55% 50%', classe: 'methode-media', sizes: '(max-width: 760px) 100vw, 34vw', legende: 'Le cabinet, à Aubignan', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('sophrologie.methodeSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('sophrologie.methodeTitre')}</h2>
      <p data-anime>${c.t('sophrologie.methodeTexte')}</p>
      <ul class="principes" data-anime="cascade">${[1, 2, 3].map((i) => html`<li><span class="tuile">${String(i)}</span>${c.t(`sophrologie.principe${i}`)}</li>`)}</ul>
      <ol class="deroule" data-anime="cascade">${[1, 2, 3].map((i) => html`<li><strong>${c.t(`sophrologie.deroule${i}Titre`)}</strong> ${c.t(`sophrologie.deroule${i}`)}</li>`)}</ol>
    </div>
  </div>
</section>

<section class="fin ton-pierre" id="fin">
  <div class="conteneur fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('sophrologie.finTitre')}</h2>
      <p data-anime>${c.t('sophrologie.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=cabinet', classe: 'bouton', texte: c.t('commun.actionEntete') })}<a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </div>
    ${c.media({ nom: 'diplome-sophrologie', alt: 'Certificat de sophrologie en relaxation dynamique et relationnelle, École de Provence', classe: 'diplome', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
  </div>
</section>
`;
