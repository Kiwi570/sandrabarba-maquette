/* Page 404 : « PAGE INTROUVABLE » en tuiles, galets. */
import { html } from '../../outils/gabarit.mjs';
import { titreTuiles } from '../gabarits/boite.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable ton-nuit" id="debut">
  <div class="conteneur introuvable-grille">
    <div>
      <h1 class="page-titre">${titreTuiles(c.s('404.tuiles'), 'data-iris-centre')}<span class="introuvable-sous">${c.t('404.titre')}</span></h1>
      <p class="page-chapo" data-anime="gsap">${c.t('404.texte')}</p>
      <p class="page-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('404.accueil'), attrs: 'data-action-principale' })} ${c.lien('rendez-vous', { ancre: 'demande', classe: 'lien-fleche', texte: c.t('commun.actionEntete') })}</p>
      <p class="info-cle" data-info-cle>${c.site.contact.telephone}</p>
    </div>
    ${c.media({ nom: 'aimer-la-vie', alt: c.s('accueil.vraieBoite'), classe: 'introuvable-media', ratio: '4 / 3', cadrage: '60% 50%', sizes: '(max-width: 760px) 100vw, 35vw', priorite: true, attrs: 'data-fx="parallaxe"' })}
  </div>
</section>
`;
