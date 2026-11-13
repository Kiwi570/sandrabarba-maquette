/* Psychothérapie, couple et famille. Ouverture : fond pierre, très grand titre en tuiles « PARLER »,
   bandeau du divan sous un voile sombre qui s'efface au défilement. Signature : les trois temps, de la nuit à la pierre. */
import { html } from '../../outils/gabarit.mjs';
import { titreTuiles } from '../gabarits/boite.mjs';

export const page = { cle: 'psychotherapie', fichier: 'psychotherapie', imagePartage: 'grok/divan-1280.webp' };

export default (c) => {
  const temps = [1, 2, 3].map((i) => ({ titre: c.t(`psychotherapie.temps${i}Titre`), texte: c.t(`psychotherapie.temps${i}`) }));
  const tons = ['ton-nuit', 'ton-crepuscule', 'ton-aube'];
  return html`
<section class="page-ouverture po-psy ton-pierre" id="debut">
  <div class="conteneur po-psy-tete">
    <p class="surtitre" data-anime="gsap">${c.t('psychotherapie.sur')}</p>
    <h1 class="page-titre">${titreTuiles(c.s('psychotherapie.tuiles'), 'data-iris-centre')}<span class="ligne-masque"><span class="titre-ligne">${c.t('psychotherapie.titre')}</span></span></h1>
    <div class="po-psy-bas">
      <p class="page-chapo" data-anime="gsap">${c.t('psychotherapie.texte')}</p>
      <div class="page-actions" data-anime="gsap">
        <p>${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })} <a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
        <p class="info-cle" data-info-cle>${c.t('psychotherapie.info')}</p>
      </div>
    </div>
  </div>
  <div class="po-psy-bandeau" data-effet="voile-divan">
    ${c.media({ nom: 'grok/divan', alt: c.s('psychotherapie.imageAlt'), cadrage: '50% 55%', classe: 'po-psy-media', sizes: '100vw', priorite: true, attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div class="po-psy-voile" aria-hidden="true"></div>
  </div>
</section>

<section class="trois-temps" id="temps">
  <span class="temps-ligne" data-effet="trois-temps" aria-hidden="true"></span>
  ${temps.map((t, i) => html`<div class="temps ${tons[i]}">
    <div class="conteneur temps-grille">
      ${i === 0 ? html`<p class="surtitre temps-sur" data-anime>${c.t('psychotherapie.tempsSur')}</p>` : ''}
      <p class="temps-num" data-anime data-visuel><span class="tuile">${String(i + 1)}</span></p>
      <div>
        ${i === 0 ? html`<h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.tempsTitre')}</h2>` : ''}
        <h3 class="temps-titre" data-anime="lignes">${t.titre}</h3>
        <p data-anime>${t.texte}</p>
      </div>
    </div>
  </div>`)}
</section>

<section class="themes ton-pierre" id="themes">
  <div class="conteneur themes-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('psychotherapie.themesSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.themesTitre')}</h2>
      <ul class="nuage-tuiles" data-anime="cascade">${c.s('psychotherapie.themes').split('|').map((x) => html`<li><span class="tuile">${x.toUpperCase()}</span></li>`)}</ul>
      <p class="themes-methode" data-anime>${c.t('psychotherapie.methode')}</p>
    </div>
    ${c.media({ nom: 'cabinet-photo', alt: 'Photo du cabinet : divan gris, lampe en bois flotté et fauteuil', cadrage: '55% 45%', classe: 'themes-media', sizes: '(max-width: 760px) 100vw, 34vw', legende: c.t('accueil.cabinetPhoto'), attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="couple ton-nuit" id="couple">
  <div class="conteneur couple-grille">
    ${c.media({ nom: 'grok/deux-fauteuils', alt: c.s('psychotherapie.coupleAlt'), cadrage: '50% 60%', classe: 'couple-media', ratio: '4 / 5', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('psychotherapie.coupleSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.coupleTitre')}</h2>
      <p data-anime>${c.t('psychotherapie.coupleTexte')}</p>
      <p class="carte-prix" data-anime><span class="tuile tuile--mini">COACHING COUPLE · 1 H 15</span><span class="tuile tuile--mini tuile--rose" data-prix>65 €</span></p>
      <p data-anime>${c.t('psychotherapie.familleTexte')}</p>
      <p class="carte-prix" data-anime><span class="tuile tuile--mini">COACHING FAMILLE · 1 H</span><span class="tuile tuile--mini tuile--rose" data-prix>65 €</span></p>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=couple', classe: 'lien-fleche', texte: c.t('accueil.seancesRdv') })}</p>
    </div>
  </div>
</section>

<section class="formations ton-crepuscule" id="formations">
  <div class="conteneur formations-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('psychotherapie.formationsSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('psychotherapie.formationsTitre')}</h2>
      <p data-anime>${c.t('psychotherapie.formationsTexte')}</p>
    </div>
    <div class="diplomes" data-anime="cascade">
      ${c.media({ nom: 'diplome-efpp', alt: 'Attestation de l’EFPP d’Aix-en-Provence, praticien en psychothérapie', classe: 'diplome', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 26vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
      ${c.media({ nom: 'diplome-stress', alt: 'Certificat de formation de spécialiste du stress post-traumatique', classe: 'diplome', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 26vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
    </div>
  </div>
</section>

<section class="fin ton-pierre" id="fin">
  <div class="conteneur fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('psychotherapie.finTitre')}</h2>
      <p data-anime>${c.t('psychotherapie.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete') })}<a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    </div>
    <div class="fin-cote">
    ${c.media({ nom: 'grok/visio', alt: 'Un ordinateur portable à demi ouvert sur un bureau en bois, à côté d’une tasse', cadrage: '40% 60%', classe: 'fin-media', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <ul class="tarifs-tuiles" data-anime="cascade">
      ${c.donnees.seances.map((s) => html`<li><span class="tarif-nom">${s.titre}</span><span class="tuile tuile--mini">${s.duree}</span><span class="tuile tuile--mini tuile--rose" data-prix>${s.prix}</span></li>`)}
    </ul>
    </div>
  </div>
</section>
`;
};
