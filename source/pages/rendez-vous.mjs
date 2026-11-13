/* Rendez-vous et contact (v2). Nuit : la boîte qui affiche le numéro, posée sur le bureau, et le portrait de Sandra.
   Pierre : la demande en trois étapes (à l'envoi, le récapitulatif tombe dans la confirmation : grille wouahou, point 7),
   puis le plan d'accès redessiné. Nuit : le pied de page. */
import { html, brut } from '../../outils/gabarit.mjs';
import { sceneBureau, plateau } from '../gabarits/boite.mjs';

export const page = { cle: 'rendez-vous', fichier: 'rendez-vous', imagePartage: 'grok/cabinet-lumiere-1280.webp' };

const SEANCES = [
  { v: 'cabinet', cle: 'seanceCabinet', d: '1 h' },
  { v: 'visio', cle: 'seanceVisio', d: '1 h' },
  { v: 'couple', cle: 'seanceCouple', d: '1 h 15' },
  { v: 'famille', cle: 'seanceFamille', d: '1 h' },
];

export default (c) => {
  const T = (k) => c.t(`rendez-vous.${k}`), S = (k) => c.s(`rendez-vous.${k}`);
  const radio = (nom, v, lib, extra = '') => html`<label class="choix"><input type="radio" name="${nom}" value="${v}" data-libelle="${lib}"${brut(extra)}><span>${lib}</span></label>`;
  return html`
<section class="pi-ouverture pi-ouverture--rdv ton-nuit" id="debut">
  <div class="conteneur pi-ouverture-grille pi-rdv-grille">
    <div class="pi-ouverture-texte">
      <p class="surtitre" data-anime="gsap">${T('sur')}</p>
      <h1 data-superpose class="pi-titre"><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${T('titreLigne1')}</span></span><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap"><em>${T('titreMot')}</em></span></span></h1>
      <p class="pi-actions" data-anime="gsap"><a class="bouton" href="#demande" data-action-principale data-sans-transition>${T('demandeSur')}</a> <a class="lien-fleche" href="sms:${c.site.contact.telephoneLien}">${T('sms')}</a></p>
      <p class="info-cle" data-info-cle data-anime="gsap">${T('info')}</p>
      ${c.media({ nom: 'sandra-laine', alt: S('portraitAlt'), cadrage: '50% 36%', classe: 'pi-rdv-portrait', ratio: '1 / 1', sizes: '(max-width: 760px) 40vw, 15vw', legende: 'Sandra vous répond elle-même, du lundi au samedi.' })}
    </div>
    <a class="pi-rdv-boite" href="tel:${c.site.contact.telephoneLien}" aria-label="${S('telLabel')}">
      ${sceneBureau({ rangees: ['APPELEZ', '07 60 36', '58 32'], label: S('telLabel'), attrs: 'data-grille="typo" data-effet="boite-page" data-iris-centre' })}
    </a>
  </div>
  ${plateau()}
</section>

<section class="demande ton-pierre" id="demande">
  <div class="conteneur demande-grille">
    <div class="demande-cote">
      <p class="surtitre" data-anime>${T('demandeSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${T('demandeTitre')}</h2>
      <ol class="pi-etapes-rdv" aria-hidden="true">${['e1', 'e2', 'e3'].map((k, i) => html`<li data-point><span class="pi-etape-num">${String(i + 1)}</span>${T(k)}</li>`)}</ol>
      ${c.media({ nom: 'grok/cabinet-lumiere', alt: 'Le cabinet d’Aubignan dans la lumière d’une lampe', cadrage: '60% 50%', classe: 'pi-demande-media', ratio: '3 / 2', sizes: '(max-width: 760px) 90vw, 30vw' })}
    </div>
    <form class="demande-form" data-demande novalidate data-grille="retour" aria-describedby="demande-etapes">
      <div data-demande-corps>
        <p id="demande-etapes" class="demande-etapes visuellement-cache">${T('etapes')}</p>
        <div data-etapes-conteneur class="etapes-conteneur">
          <fieldset data-etape-form>
            <legend>${T('e1')}</legend>
            <div class="choix-grille">${SEANCES.map((s, i) => html`<label class="choix choix--carte"><input type="radio" name="seance" value="${s.v}" data-libelle="${S(s.cle)}"${brut(i === 0 ? ' required id="seance"' : '')}><span><strong>${S(s.cle)}</strong><span class="choix-detail">${s.d} · <span data-prix>65 €</span></span></span></label>`)}</div>
            <p class="champ-erreur" id="seance-erreur" role="alert" hidden>Choisissez une séance.</p>
            <p class="etape-nav"><button type="button" class="bouton" data-suivant>${T('suivant')}</button></p>
          </fieldset>
          <fieldset data-etape-form hidden>
            <legend>${T('e2')}</legend>
            <div class="choix-grille choix-grille--3">${radio('lieu', 'cabinet', S('lieuCabinet'), ' required id="lieu"')}${radio('lieu', 'visio', S('lieuVisio'))}${radio('lieu', 'domicile', S('lieuDomicile'))}</div>
            <p class="champ-erreur" id="lieu-erreur" role="alert" hidden>Choisissez un lieu.</p>
            <p class="moments-titre">${T('moments')}</p>
            <div class="choix-grille choix-grille--3">${['matin', 'apresMidi', 'soir'].map((k) => html`<label class="choix"><input type="checkbox" name="moment" value="${k}" data-libelle="${S(k)}"><span>${S(k)}</span></label>`)}</div>
            <div class="champ"><label for="mot">${T('mot')}</label><select id="mot" name="mot" aria-describedby="mot-aide"><option value="">—</option>${c.donnees.mots.map((m) => html`<option value="${m.cle}">${m.tuile.charAt(0) + m.tuile.slice(1).toLowerCase()}</option>`)}</select><p class="mention-donnees" id="mot-aide">${T('motAide')}</p></div>
            <p class="etape-nav"><button type="button" class="lien-discret" data-precedent>${T('precedent')}</button><button type="button" class="bouton" data-suivant>${T('suivant')}</button></p>
          </fieldset>
          <fieldset data-etape-form hidden>
            <legend>${T('e3')}</legend>
            <div class="champs-2">
              <div class="champ"><label for="nom">${T('nom')}</label><input id="nom" name="nom" type="text" autocomplete="given-name" required aria-describedby="nom-erreur"><p class="champ-erreur" id="nom-erreur" role="alert" hidden>Indiquez votre prénom.</p></div>
              <div class="champ"><label for="tel">${T('tel')}</label><input id="tel" name="tel" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9 +().-]{10,}" required aria-describedby="tel-erreur"><p class="champ-erreur" id="tel-erreur" role="alert" hidden>Un numéro de 10 chiffres, par exemple 06 12 34 56 78.</p></div>
            </div>
            <div class="champ"><label for="email">${T('email')}</label><input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-erreur"><p class="champ-erreur" id="email-erreur" role="alert" hidden>Une adresse e-mail valide, par exemple prenom@exemple.fr.</p></div>
            <div class="champ"><label for="message">${T('message')}</label><textarea id="message" name="message" rows="3"></textarea></div>
            <label class="choix choix--case"><input type="checkbox" name="sms"><span>${T('smsOk')}</span></label>
            <p class="mention-donnees">${T('rgpd')}</p>
            <p class="recap-titre">${T('recap')}</p>
            <p class="recap" data-recap aria-live="polite"></p>
            <p class="etape-nav"><button type="button" class="lien-discret" data-precedent>${T('precedent')}</button><button type="submit" class="bouton">${T('envoyer')}</button></p>
          </fieldset>
        </div>
      </div>
      <div class="demande-recue" data-demande-recue data-boite-recue data-effet="boite-recue" hidden>
        <p class="demande-recue-titre">Demande reçue.</p>
        <ul class="demande-recue-liste" data-recue-liste></ul>
        <p data-message-envoi tabindex="-1">${T('recu')}</p>
        <p><button type="button" class="lien-discret" data-recommencer>${T('recommencer')}</button></p>
      </div>
    </form>
  </div>
</section>

<script type="application/json" id="donnees-mots">${brut(JSON.stringify(c.donnees.mots.map((m) => ({ cle: m.cle, tuile: m.tuile }))).replace(/</g, '\\u003c'))}</script>

<section class="acces pi-acces ton-pierre" id="acces">
  <div class="conteneur acces-grille">
    <div>
      <p class="surtitre" data-anime>${T('accesSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${T('accesTitre')}</h2>
      <p data-anime>${T('accesTexte')}</p>
      <p data-anime>${T('zones')}</p>
      <p class="acces-liens" data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${S('telLabel')}</a> <span class="email">${T('ecrire')}</span></p>
    </div>
    <figure class="plan pi-plan" data-visuel>
      <svg viewBox="0 0 640 480" role="img" aria-label="${S('carteLabel')}">
        <rect x="0" y="0" width="640" height="480" rx="10" fill="#f4ecdf"/>
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M318 214 C 300 170 300 120 330 74 S 370 44 384 40" stroke="#d8c8ae" stroke-width="10"/>
          <path d="M318 214 C 260 200 190 176 120 150 S 64 130 44 127" stroke="#d8c8ae" stroke-width="10"/>
          <path d="M318 214 C 336 262 352 300 372 336" stroke="#cdbb9d" stroke-width="12"/>
          <path d="M372 336 C 300 360 220 388 150 410 S 90 430 70 437" stroke="#d8c8ae" stroke-width="10"/>
        </g>
        <g font-family="Hanken Grotesk, sans-serif" fill="#1b2240">
          <g><circle cx="384" cy="40" r="7" fill="#1b2240"/><text x="398" y="42" font-size="21">Vaison-la-Romaine</text><text class="plan-min" x="398" y="68" font-size="19" fill="#3d4255">25 min</text></g>
          <g><circle cx="44" cy="127" r="7" fill="#1b2240"/><text x="30" y="80" font-size="21">Orange</text><text class="plan-min" x="30" y="106" font-size="19" fill="#3d4255">25 min</text></g>
          <g><circle cx="372" cy="336" r="8" fill="#1b2240"/><text x="390" y="344" font-size="21">Carpentras</text><text class="plan-min" x="390" y="372" font-size="19" fill="#3d4255">10 min</text></g>
          <g><circle cx="70" cy="437" r="7" fill="#1b2240"/><text x="86" y="438" font-size="21">Avignon</text><text class="plan-min" x="86" y="466" font-size="19" fill="#3d4255">35 min</text></g>
        </g>
        <g data-repere><circle cx="318" cy="214" r="30" fill="rgba(180,41,90,.14)"/><circle cx="318" cy="214" r="11" fill="#b4295a"/></g>
        <g font-family="Hanken Grotesk, sans-serif" fill="#1b2240">
          <text x="358" y="200" font-size="22" font-weight="700">Aubignan</text>
          <text class="plan-min" x="358" y="228" font-size="19">${T('adresseCourte')}</text>
        </g>
        <g data-repere><rect x="356" y="238" width="282" height="40" rx="6" fill="#f4ecdf"/><rect x="362" y="244" width="26" height="26" rx="5" fill="#1b2240"/><text x="375" y="263" text-anchor="middle" font-family="Hanken Grotesk, sans-serif" font-weight="700" font-size="16" fill="#fff">P</text><text x="398" y="263" font-family="Hanken Grotesk, sans-serif" font-size="19" fill="#1b2240" class="plan-min">${T('parking')}</text></g>
      </svg>
      <figcaption class="media-legende">${T('carteNote')} · Carpentras 10 min · Orange 25 min · Vaison-la-Romaine 25 min · Avignon 35 min</figcaption>
    </figure>
  </div>
</section>
`;
};
