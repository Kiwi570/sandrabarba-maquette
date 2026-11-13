/* Rendez-vous et contact. Ouverture compacte : le numéro en tuiles dans la boîte lumineuse.
   Demande en trois étapes ; à l'envoi, les tuiles tombent dans la boîte « DEMANDE REÇUE » (grille wouahou, point 7). Accès. */
import { html, brut } from '../../outils/gabarit.mjs';
import { boite } from '../gabarits/boite.mjs';

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
<section class="page-ouverture po-rdv ton-nuit" id="debut">
  <div class="conteneur po-rdv-grille">
    <div>
      <p class="surtitre" data-anime="gsap">${T('sur')}</p>
      <h1 class="page-titre po-rdv-titre"><span class="ligne-masque"><span class="titre-ligne">${T('titre')}</span></span></h1>
      <div class="page-actions" data-anime="gsap">
        <p><a class="bouton" href="#demande" data-action-principale data-sans-transition>${T('demandeSur')}</a> <a class="lien-fleche" href="sms:${c.site.contact.telephoneLien}">${T('sms')}</a></p>
        <p class="info-cle" data-info-cle>${T('info')}</p>
      </div>
    </div>
    <a class="po-rdv-boite" data-visuel data-fx="parallaxe" data-fx-force="6" href="tel:${c.site.contact.telephoneLien}" aria-label="${S('telLabel')}">
      ${boite({ rangees: ['07 60 36', '58 32'], classe: 'boite--tel allumee', attrs: 'data-effet="telephone-tuiles" data-grille="typo" data-iris-centre' })}
    </a>
  </div>
</section>

<section class="demande ton-pierre" id="demande">
  <div class="conteneur demande-grille">
    <div class="demande-cote">
      <p class="surtitre" data-anime>${T('demandeSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${T('demandeTitre')}</h2>
      ${c.media({ nom: 'sandra-laine', alt: S('portraitAlt'), cadrage: '50% 38%', classe: 'demande-portrait', ratio: '1 / 1', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-anime="rideau"' })}
      ${boite({ rangees: ['VOTRE', 'DEMANDE'], label: 'Boîte de confirmation', classe: 'boite--recue', attrs: `data-boite-recue data-recu="${S('recuTuiles')}" data-effet="boite-recue" data-grille="retour"` })}
    </div>
    <form class="demande-form" data-demande novalidate data-grille="retour" aria-describedby="demande-etapes">
      <div data-demande-corps>
        <p id="demande-etapes" class="demande-etapes">${T('etapes')}</p>
        <ol class="points-etapes" aria-hidden="true">${['e1', 'e2', 'e3'].map((k, i) => html`<li data-point><span class="tuile tuile--mini">${String(i + 1)}</span>${T(k)}</li>`)}</ol>
        <div data-etapes-conteneur class="etapes-conteneur">
          <fieldset data-etape-form>
            <legend>${T('e1')}</legend>
            <div class="choix-grille">${SEANCES.map((s, i) => html`<label class="choix choix--carte"><input type="radio" name="seance" value="${s.v}" data-libelle="${S(s.cle)}"${brut(i === 0 ? ' required id="seance"' : '')}><span><strong>${S(s.cle)}</strong><span class="tuile tuile--mini">${s.d}</span><span class="tuile tuile--mini tuile--rose" data-prix>65 €</span></span></label>`)}</div>
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
      <div class="demande-recue" data-demande-recue hidden>
        <p data-message-envoi tabindex="-1">${T('recu')}</p>
        <p><button type="button" class="lien-discret" data-recommencer>${T('recommencer')}</button></p>
      </div>
    </form>
  </div>
</section>

<script type="application/json" id="donnees-mots">${brut(JSON.stringify(c.donnees.mots.map((m) => ({ cle: m.cle, tuile: m.tuile }))).replace(/</g, '\\u003c'))}</script>

<section class="acces ton-aube" id="acces">
  <div class="conteneur acces-grille">
    <div>
      <p class="surtitre" data-anime>${T('accesSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${T('accesTitre')}</h2>
      <p data-anime>${T('accesTexte')}</p>
      <p data-anime>${T('zones')}</p>
      <p class="acces-liens" data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${S('telLabel')}</a> <span class="email">${T('ecrire')}</span></p>
    </div>
    <figure class="plan" data-visuel>
      <svg viewBox="0 0 600 460" role="img" aria-label="${S('carteLabel')}" data-fx="trace">
                <path d="M-10 330 C 120 300 210 340 300 300 S 470 230 610 250" fill="none" stroke="#c9b9a2" stroke-width="16" stroke-linecap="round" data-fx-trait/>
        <path d="M300 -10 C 290 90 320 170 300 300 S 260 420 250 470" fill="none" stroke="#d6c7b0" stroke-width="12" stroke-linecap="round" data-fx-trait/>
        <path d="M80 120 C 160 160 240 200 300 300" fill="none" stroke="#d6c7b0" stroke-width="8" stroke-linecap="round" stroke-dasharray="2 14" data-fx-trait/>
        <path d="M520 90 C 470 160 420 220 300 300" fill="none" stroke="#b4295a" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 10" data-fx-trait/>
        <g data-repere><circle cx="300" cy="300" r="15" fill="#b4295a"/><circle cx="300" cy="300" r="34" fill="rgba(180,41,90,.1)" stroke="#b4295a" stroke-width="2" opacity=".45"/></g>
        <g font-family="Hanken Grotesk, sans-serif" font-size="17" fill="#1b2240">
          <text x="344" y="276" font-weight="700">Cabinet, 89 rue du Portail‑Neuf</text>
          <text x="344" y="298">Aubignan</text>
          <text x="388" y="70">Vers Vaison-la-Romaine</text>
          <text x="30" y="104">Vers Orange</text>
          <text x="420" y="246">Carpentras</text>
          <text x="40" y="358">Sarrians</text>
          <text x="210" y="440">Vers Avignon</text>
        </g>
        <g data-repere><rect x="352" y="356" width="22" height="22" rx="4" fill="#1b2240"/><text x="363" y="372" text-anchor="middle" font-family="Hanken Grotesk, sans-serif" font-weight="700" font-size="15" fill="#fff">P</text><text x="384" y="372" font-family="Hanken Grotesk, sans-serif" font-size="16" fill="#1b2240">Parking gratuit à proximité</text></g>
      </svg>
      <figcaption class="media-legende">${T('carteNote')}</figcaption>
    </figure>
  </div>
</section>
`;
};
