/* La boîte lumineuse et ses tuiles : l'objet du projet (direction « La boîte à mots »).
   Les rangées sont écrites lettre par lettre (span.l) pour que le JavaScript les fasse tomber une à une ;
   le texte réel est donné aux lecteurs d'écran par aria-label ou par un texte annoncé à côté. */
import { html, brut } from '../../outils/gabarit.mjs';

const ech = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* Une rangée de lettres. Espace : span.e (largeur d'une demi-lettre). */
export const lettres = (texte) => brut(String(texte).split('').map((ch) => (ch === ' ' ? '<span class="e"> </span>' : `<span class="l">${ech(ch)}</span>`)).join(''));

/* boite({ rangees: ['QUEL MOT', 'VOUS AMÈNE ?', ''], label, classe, attrs }) */
export function boite({ rangees = [], label = '', classe = '', attrs = '' } = {}) {
  return html`<div class="boite ${classe}"${brut(attrs ? ' ' + attrs : '')}${label ? brut(` role="img" aria-label="${ech(label)}"`) : ''}>
  <div class="boite-cadre"><div class="boite-panneau">${rangees.map((r, i) => html`
    <p class="boite-rangee" data-rangee="${i}" aria-hidden="true">${lettres(r)}</p>`)}
  </div></div>
</div>`;
}

/* Titre en tuiles posées une à une (grille wouahou, point 5 : typographie fabriquée par le métier). */
export const titreTuiles = (texte, attrs = '') => html`<span class="titre-tuiles" data-grille="typo" data-effet="titre-tuiles"${brut(attrs ? ' ' + attrs : '')}>${String(texte).split('|').map((ligne) => html`<span class="titre-tuiles-ligne">${ligne.split(' ').map((m) => html`<span class="tuile tuile--titre">${m}</span>`)}</span>`)}</span>`;

/* Scène d'ouverture des pages intérieures : la boîte posée sur le vrai bureau de pin, lumière chaude, ombre de contact.
   Une seule fois par page, avec le mot de la page. */
export const sceneBureau = ({ rangees, label, classe = '', attrs = '' }) => html`<div class="scene-objet">
  ${boite({ rangees, label, classe: `boite--page allumee ${classe}`, attrs: `data-visuel ${attrs}` })}
  <span class="boite-ombre" aria-hidden="true"></span>
</div>`;
export const plateau = () => html`<div class="pi-plateau" aria-hidden="true"></div>`;
