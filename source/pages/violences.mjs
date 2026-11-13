/* Violences : sortir du silence (v2). Sobre et respectueuse.
   Nuit : ouverture (la boîte « SORTIR DU SILENCE » posée sur le bureau dans le rai de lumière), numéros d'aide en grands chiffres,
   lampe qui révèle les violences invisibles. Pierre : les quatre formes, « La culpabilité n'est pas la vôtre », la presse.
   Nuit : « Ne restez pas seule ». Bouton « Quitter vite » toujours là. */
import { html } from '../../outils/gabarit.mjs';
import { sceneBureau, plateau } from '../gabarits/boite.mjs';
import { vignettes, visionneuse } from '../gabarits/vignettes.mjs';

export const page = { cle: 'violences', fichier: 'violences', imagePartage: 'grok/rai-de-lumiere-1280.webp' };

export default (c) => {
  const mots = c.s('violences.mursMots').split('|');
  const mur = (classe) => html`<p class="${classe}" aria-hidden="true">${mots.map((m, i) => html`<span style="--i:${i}">${m}</span>`)}</p>`;
  const tuiles = c.s('violences.tuiles').split(' ');
  return html`
<button type="button" class="quitter" data-quitter aria-label="${c.s('violences.quitterLabel')}">${c.t('violences.quitter')} ✕</button>

<section class="pi-ouverture pi-ouverture--viol ton-nuit" id="debut">
  <div class="conteneur pi-ouverture-grille">
    <div class="pi-ouverture-texte">
      <p class="surtitre" data-anime="gsap">${c.t('violences.sur')}</p>
      <h1 data-superpose class="pi-titre"><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${c.t('violences.titre1')} ${c.t('violences.titre2')}</span></span><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap"><em>sortir du silence.</em></span></span></h1>
      <p class="pi-chapo" data-anime="gsap">${c.t('violences.texte')}</p>
      <div class="page-actions" data-anime="gsap">
        <p class="pi-actions"><a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale>${c.t('violences.finAppeler')}</a> ${c.lien('rendez-vous', { ancre: 'demande', params: 'mot=violences', classe: 'lien-fleche', texte: c.t('commun.actionEntete') })}</p>
        <p class="info-cle" data-info-cle>3919 · Violences Femmes Info · gratuit et anonyme, 24 h/24</p>
      </div>
    </div>
    ${sceneBureau({ rangees: tuiles, label: c.s('violences.tuiles'), attrs: 'data-grille="typo" data-effet="boite-page" data-iris-centre' })}
  </div>
  ${plateau()}
</section>

<section class="pi-aide ton-nuit" id="aide">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('violences.aideSur')}</p>
    <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('violences.aideTitre')}</h2>
    <ul class="pi-numeros" data-anime="cascade" data-visuel>
      ${c.donnees.aide.map((n) => html`<li><a href="tel:${n.lien}" class="pi-numero"><span class="pi-numero-chiffres">${n.numero}</span><strong>${n.titre}</strong><span class="pi-numero-texte">${n.texte}</span></a></li>`)}
    </ul>
    <p class="pi-note pi-note--clair" data-anime>${c.t('violences.aideNote')}</p>
  </div>
</section>

<section class="pi-invisibles ton-nuit" id="invisibles">
  <div class="conteneur pi-invisibles-tete">
    <p class="surtitre" data-anime>${c.t('violences.invisiblesSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.invisiblesTitre')}</h2>
    <p class="pi-grande-citation pi-grande-citation--clair" data-anime>${c.t('violences.definition')}</p>
  </div>
  <div class="mur-invisible pi-mur" data-lampe="50,50" data-effet="lampe-violences" data-souris data-visuel data-audit-ignorer>
    ${c.media({ nom: 'grok/mur-de-nuit', alt: '', cadrage: '30% 50%', classe: 'mur-fond', sizes: '100vw' })}
    ${mur('mur-mots mur-mots--eteints')}
    <div class="lampe-lumiere lampe-cercle"><div class="lampe-dedans">${mur('mur-mots mur-mots--allumes')}</div></div>
    <p class="lampe-indice"><i></i><span class="indice-souris">${c.t('violences.invisiblesIndice')}</span><span class="indice-tactile">${c.t('violences.invisiblesIndiceTactile')}</span></p>
  </div>
</section>

<section class="pi-formes ton-pierre" id="formes">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('violences.typesSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('violences.typesTitre')}</h2>
    <ul class="pi-formes-liste" data-anime="cascade" data-visuel>
      ${[1, 2, 3, 4].map((i) => html`<li><span class="pi-forme-num" aria-hidden="true">${String(i)}</span><h3>${c.t(`violences.type${i}Titre`)}</h3><p>${c.t(`violences.type${i}`)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="pi-avec ton-pierre" id="approche">
  <div class="conteneur pi-avec-grille">
    ${c.media({ nom: 'sandra-rampe', alt: c.s('violences.portraitAlt'), cadrage: '46% 38%', classe: 'pi-portrait', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="5"' })}
    <div class="pi-avec-texte">
      <p class="surtitre" data-anime>${c.t('violences.approcheSur')}</p>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('violences.approcheTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('violences.approcheTexte')}</p>
      <ul class="pi-points" data-anime="cascade">${c.s('violences.approchePoints').split('|').map((x) => html`<li>${x}</li>`)}</ul>
    </div>
  </div>
</section>

<section class="pi-docs ton-pierre" id="presse">
  <div class="conteneur pi-docs-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('violences.presseSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('violences.presseTitre')}</h2>
      <p data-anime>${c.t('violences.presseTexte')}</p>
      <p class="pi-note" data-anime>${c.t('violences.presseLien')} : ouvrez la vignette.</p>
    </div>
    <div class="pi-vignettes-grandes">${vignettes(c, ['presse', 'diplome-stress'])}</div>
  </div>
</section>

<section class="pi-fin ton-nuit" id="fin">
  <div class="conteneur pi-fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('violences.finTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('violences.finTexte')}</p>
      <p class="pi-actions" data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${c.t('violences.finAppeler')}</a> ${c.lien('rendez-vous', { ancre: 'demande', params: 'mot=violences', classe: 'bouton bouton--clair', texte: c.t('commun.actionEntete') })}</p>
    </div>
    ${c.media({ nom: 'sandra-laine', alt: 'Sandra Barba souriante, emmitouflée dans un pull de laine blanc', cadrage: '50% 36%', classe: 'pi-fin-photo pi-fin-photo--ronde', ratio: '1 / 1', sizes: '(max-width: 760px) 50vw, 18vw' })}
  </div>
</section>
${visionneuse()}
`;
};
