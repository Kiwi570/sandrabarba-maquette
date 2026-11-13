/* Formations et presse : une bande de vignettes qui s'ouvrent en grand au clic (une seule visionneuse par page). */
import { html } from '../../outils/gabarit.mjs';

const DOCS = {
  'diplome-efpp': 'Attestation de l’EFPP d’Aix-en-Provence, praticien en psychothérapie',
  'diplome-stress': 'Certificat de spécialiste du stress post-traumatique',
  'diplome-sophrologie': 'Certificat de sophrologie, relaxation dynamique et relationnelle, École de Provence',
  presse: 'Article de presse : « Éveiller les consciences sur les violences invisibles »',
};
const LEGENDES = {
  'diplome-efpp': 'EFPP, Aix-en-Provence',
  'diplome-stress': 'Stress post-traumatique',
  'diplome-sophrologie': 'Sophrologie, École de Provence',
  presse: 'La presse, sur Vivre Femmes',
};

export const vignettes = (c, noms) => html`<ul class="vignettes" data-anime="cascade">${noms.map((n) => html`<li>
  <button type="button" class="vignette" data-vignette="/assets/images/${n}-800.webp" data-vignette-alt="${DOCS[n]}" aria-label="Agrandir : ${DOCS[n]}">
    <img src="/assets/images/${n}-480.webp" alt="" width="480" height="${n === 'presse' ? 600 : 320}" loading="lazy" decoding="async">
  </button>
  <p class="vignette-legende">${LEGENDES[n]}</p>
</li>`)}</ul>`;

export const visionneuse = () => html`<dialog class="visionneuse" data-visionneuse aria-label="Document en grand">
  <form method="dialog"><button class="visionneuse-fermer" aria-label="Fermer">✕</button></form>
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" width="1" height="1" data-visionneuse-img>
</dialog>`;
