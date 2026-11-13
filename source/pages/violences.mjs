/* Violences : sortir du silence. Ouverture sombre et compacte, rai de lumière, numéros d'aide tout de suite.
   Signature : la lampe qui révèle les violences invisibles écrites sur le mur. Bouton « Quitter vite » toujours là. */
import { html } from '../../outils/gabarit.mjs';
import { titreTuiles } from '../gabarits/boite.mjs';

export const page = { cle: 'violences', fichier: 'violences', imagePartage: 'grok/rai-de-lumiere-1280.webp' };

export default (c) => {
  const mots = c.s('violences.mursMots').split('|');
  const mur = (classe) => html`<p class="${classe}" aria-hidden="true">${mots.map((m, i) => html`<span style="--i:${i}">${m}</span>`)}</p>`;
  return html`
<button type="button" class="quitter" data-quitter aria-label="${c.s('violences.quitterLabel')}">${c.t('violences.quitter')} ✕</button>

<section class="page-ouverture po-viol ton-nuit" id="debut">
  ${c.media({ nom: 'grok/rai-de-lumiere', alt: c.s('violences.imageAlt'), cadrage: '72% 50%', classe: 'po-viol-media', sizes: '100vw', priorite: true })}
  <div class="conteneur po-viol-grille">
    <p class="surtitre" data-anime="gsap">${c.t('violences.sur')}</p>
    <h1 class="page-titre po-viol-titre"><span class="ligne-masque"><span class="titre-ligne">${c.t('violences.titre1')}</span></span><span class="ligne-masque"><span class="titre-ligne">${c.t('violences.titre2')}</span></span>${titreTuiles(c.s('violences.tuiles'), 'data-iris-centre')}</h1>
    <p class="page-chapo" data-anime="gsap">${c.t('violences.texte')}</p>
    <div class="page-actions" data-anime="gsap">
      <p><a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale>${c.t('violences.finAppeler')}</a> ${c.lien('rendez-vous', { ancre: 'demande', params: 'mot=violences', classe: 'lien-fleche', texte: c.t('commun.actionEntete') })}</p>
      <p class="info-cle" data-info-cle>3919 · Violences Femmes Info · gratuit et anonyme, 24 h/24</p>
    </div>
  </div>
</section>

<section class="aide ton-crepuscule" id="aide">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('violences.aideSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.aideTitre')}</h2>
    <ul class="numeros" data-anime="cascade" data-visuel>
      ${c.donnees.aide.map((n) => html`<li><a href="tel:${n.lien}" class="numero"><span class="numero-tuiles">${n.numero.split('').map((ch) => html`<span class="tuile">${ch}</span>`)}</span><strong>${n.titre}</strong><span>${n.texte}</span></a></li>`)}
    </ul>
    <p class="aide-note" data-anime>${c.t('violences.aideNote')}</p>
  </div>
</section>

<section class="invisibles ton-nuit" id="invisibles">
  <div class="conteneur invisibles-tete">
    <p class="surtitre" data-anime>${c.t('violences.invisiblesSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.invisiblesTitre')}</h2>
    <p class="invisibles-def" data-anime>${c.t('violences.definition')}</p>
  </div>
  <div class="mur-invisible" data-lampe="50,50" data-effet="lampe-violences" data-souris data-visuel data-audit-ignorer>
    ${c.media({ nom: 'grok/mur-de-nuit', alt: '', cadrage: '30% 50%', classe: 'mur-fond', sizes: '100vw' })}
    ${mur('mur-mots mur-mots--eteints')}
    <div class="lampe-lumiere lampe-cercle"><div class="lampe-dedans">${mur('mur-mots mur-mots--allumes')}</div></div>
    <p class="lampe-indice"><i></i><span class="indice-souris">${c.t('violences.invisiblesIndice')}</span><span class="indice-tactile">${c.t('violences.invisiblesIndiceTactile')}</span></p>
  </div>
  <div class="conteneur">
    <ul class="types" data-anime="cascade">
      ${[1, 2, 3, 4].map((i) => html`<li><h3>${c.t(`violences.type${i}Titre`)}</h3><p>${c.t(`violences.type${i}`)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="approche ton-aube" id="approche">
  <div class="conteneur approche-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('violences.approcheSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('violences.approcheTitre')}</h2>
      <p data-anime>${c.t('violences.approcheTexte')}</p>
      <ul class="points" data-anime="cascade">${c.s('violences.approchePoints').split('|').map((x) => html`<li>${x}</li>`)}</ul>
    </div>
    ${c.media({ nom: 'diplome-stress', alt: c.s('violences.diplomeAlt'), classe: 'diplome', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="presse ton-pierre" id="presse">
  <div class="conteneur presse-grille">
    ${c.media({ nom: 'presse', alt: c.s('violences.presseAlt'), cadrage: '50% 30%', classe: 'presse-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('violences.presseSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('violences.presseTitre')}</h2>
      <p data-anime>${c.t('violences.presseTexte')}</p>
    </div>
  </div>
</section>

<section class="fin ton-nuit fin--sombre" id="fin">
  <div class="conteneur fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lettres">${c.t('violences.finTitre')}</h2>
      <p data-anime>${c.t('violences.finTexte')}</p>
      <p class="fin-actions" data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${c.t('violences.finAppeler')}</a> ${c.lien('rendez-vous', { ancre: 'demande', params: 'mot=violences', classe: 'bouton bouton--clair', texte: c.t('commun.actionEntete') })}</p>
    </div>
    ${c.media({ nom: 'sandra-rampe', alt: 'Sandra Barba, souriante, accoudée à une rampe en fer forgé', cadrage: '46% 40%', classe: 'fin-media', ratio: '1 / 1', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>
`;
};
