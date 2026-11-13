/* Psychothérapie, couple et famille (v2).
   Deux fonds seulement : la nuit pour l'ouverture et l'appel final, la pierre entre les deux.
   Ouverture : la boîte « PARLER » posée sur le bureau. Signature : les trois temps en une seule scène épinglée. */
import { html } from '../../outils/gabarit.mjs';
import { boite, sceneBureau, plateau } from '../gabarits/boite.mjs';
import { vignettes, visionneuse } from '../gabarits/vignettes.mjs';

export const page = { cle: 'psychotherapie', fichier: 'psychotherapie', imagePartage: 'grok/cabinet-lumiere-1280.webp' };

export default (c) => {
  const temps = [1, 2, 3].map((i) => ({ mot: c.t(`psychotherapie.temps${i}Mot`), motS: c.s(`psychotherapie.temps${i}Mot`), titre: c.t(`psychotherapie.temps${i}Titre`), texte: c.t(`psychotherapie.temps${i}`) }));
  const themes = c.s('psychotherapie.themes').split('|');
  const moitie = Math.ceil(themes.length / 2);
  const ligne = (mots) => html`${[0, 1].map(() => mots.map((m) => html`<span>${m}</span>`))}`;
  return html`
<section class="pi-ouverture ton-nuit" id="debut">
  <div class="conteneur pi-ouverture-grille">
    <div class="pi-ouverture-texte">
      <p class="surtitre" data-anime="gsap">${c.t('psychotherapie.sur')}</p>
      <h1 data-superpose class="pi-titre"><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${c.t('psychotherapie.titreLigne1')}</span></span><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${c.t('psychotherapie.titreLigne2')} <em>${c.t('psychotherapie.titreMot')}</em></span></span></h1>
      <p class="pi-chapo" data-anime="gsap">${c.t('psychotherapie.texte')}</p>
      <p class="pi-actions" data-anime="gsap">${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })} <a class="tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      <p class="info-cle" data-info-cle data-anime="gsap">${c.t('psychotherapie.info')}</p>
    </div>
    ${sceneBureau({ rangees: ['', c.s('psychotherapie.tuiles'), ''], label: c.s('psychotherapie.tuiles'), attrs: 'data-grille="typo" data-effet="boite-page" data-iris-centre' })}
  </div>
  ${plateau()}
</section>

<section class="pi-temps ton-pierre" id="temps" data-temps data-effet="trois-temps">
  <div class="pi-temps-collant">
    <div class="conteneur pi-temps-grille">
      <div class="pi-temps-tete">
        <p class="surtitre" data-anime>${c.t('psychotherapie.tempsSur')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.tempsTitre')}</h2>
        <ol class="pi-temps-fil" aria-hidden="true">${temps.map((t, i) => html`<li data-fil-temps="${i}"><span>0${i + 1}</span>${t.mot}</li>`)}</ol>
      </div>
      <div class="pi-temps-boite" data-visuel>
        ${boite({ rangees: ['', temps[0].motS.toUpperCase(), ''], label: temps.map((t) => t.motS).join(', '), classe: 'boite--temps allumee', attrs: 'data-boite-temps data-mots="' + temps.map((t) => t.motS.toUpperCase()).join('|') + '"' })}
        <span class="boite-ombre" aria-hidden="true"></span>
      </div>
      <div class="pi-temps-scene">
        ${temps.map((t, i) => html`<article class="pi-temps-etat${i === 0 ? ' actif' : ''}" data-etat="${i}">
          <p class="pi-temps-num" aria-hidden="true">0${i + 1} / 03</p>
          <h3 class="pi-temps-titre">${t.titre}</h3>
          <p class="pi-temps-p">${t.texte}</p>
        </article>`)}
      </div>
    </div>
  </div>
</section>

<section class="pi-mots ton-pierre" id="themes">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('psychotherapie.themesSur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.themesTitre')}</h2>
  </div>
  <div class="pi-ruban" data-ruban data-visuel aria-hidden="true">
    <p class="pi-ruban-ligne" data-ruban-sens="-1">${ligne(themes.slice(0, moitie))}</p>
    <p class="pi-ruban-ligne pi-ruban-ligne--2" data-ruban-sens="1">${ligne(themes.slice(moitie))}</p>
  </div>
  <ul class="visuellement-cache">${themes.map((m) => html`<li>${m}</li>`)}</ul>
  <div class="conteneur">
    <p class="pi-grande-citation" data-anime>${c.t('psychotherapie.methode')}</p>
  </div>
</section>

<section class="pi-couple ton-pierre" id="couple">
  <div class="conteneur pi-couple-grille">
    ${c.media({ nom: 'grok/deux-fauteuils', alt: c.s('psychotherapie.coupleAlt'), cadrage: '50% 55%', classe: 'pi-couple-media', ratio: '2 / 3', sizes: '(max-width: 760px) 70vw, 34vw' })}
    <div class="pi-couple-texte">
      <p class="surtitre" data-anime>${c.t('psychotherapie.coupleSur')}</p>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('psychotherapie.coupleTitre')}</h2>
      <div class="pi-deux-colonnes">
        <div data-anime>
          <h3 class="pi-petit-titre">Coaching couple <span class="pi-prix" data-prix>1 h 15 · 65 €</span></h3>
          <p>${c.t('psychotherapie.coupleTexte')}</p>
        </div>
        <div data-anime>
          <h3 class="pi-petit-titre">Coaching famille <span class="pi-prix" data-prix>1 h · 65 €</span></h3>
          <p>${c.t('psychotherapie.familleTexte')}</p>
        </div>
      </div>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=couple', classe: 'lien-fleche', texte: c.t('accueil.seancesRdv') })}</p>
    </div>
  </div>
</section>

<section class="pi-docs ton-pierre" id="formations">
  <div class="conteneur pi-docs-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('psychotherapie.docsSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.docsTitre')}</h2>
      <p data-anime>${c.t('psychotherapie.formationsTexte')}</p>
      <p class="pi-note" data-anime>${c.t('psychotherapie.docsNote')}</p>
    </div>
    ${vignettes(c, ['diplome-efpp', 'diplome-stress', 'diplome-sophrologie', 'presse'])}
  </div>
</section>

<section class="pi-fin ton-nuit" id="fin">
  <div class="conteneur pi-fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('psychotherapie.finTitre')}</h2>
      <p class="pi-chapo" data-anime>${c.t('psychotherapie.finTexte')}</p>
      <p class="pi-actions" data-anime>${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete') })} <a class="tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </div>
    <div class="pi-fin-cote">
      ${c.media({ nom: 'cabinet-photo', alt: 'Le vrai cabinet : le fauteuil œuf et la lampe en bois flotté', cadrage: '55% 45%', classe: 'pi-fin-media', ratio: '4 / 5', sizes: '(max-width: 760px) 40vw, 12vw' })}
      <dl class="pi-tarifs" data-anime="cascade">
        ${c.donnees.seances.map((s) => html`<div><dt>${s.titre}</dt><dd>${s.duree} · <strong data-prix>${s.prix}</strong></dd></div>`)}
      </dl>
    </div>
  </div>
</section>
${visionneuse()}
`;
};
