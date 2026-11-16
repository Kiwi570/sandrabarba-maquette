/* Accueil — « La boîte à mots » (plan : outil d'abord).
   De la nuit à la pierre claire : on sort du silence en descendant. Chaque section a son effet au défilement. */
import { html, brut } from '../../outils/gabarit.mjs';
import { boite, lettres, titreTuiles } from '../gabarits/boite.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'sandra-rampe-784.webp' };

export default (c) => {
  const mots = c.donnees.mots;
  const scene = [1, 2, 3].map((i) => ({ tuiles: c.s(`accueil.scene${i}Tuiles`).split('|'), texte: c.t(`accueil.scene${i}`) }));
  return html`
<section class="plongee ton-nuit" id="debut" data-scene data-grille="scene" data-effet="mettre-des-mots">
<div class="plongee-collant" data-collant>
<div class="ouverture">
  <div class="halo" data-effet="halo-boite" data-souris aria-hidden="true"></div>
  <div class="ouverture-grille conteneur">
    <div class="ouverture-texte">
      <p class="surtitre" data-anime="gsap">${c.t('accueil.sur')}</p>
      <h1 class="ouverture-titre" data-superpose><span class="ligne-masque"><span class="titre-ligne" data-anime="gsap">${c.t('accueil.titre1')}</span></span><span class="ligne-masque"><em class="titre-ligne" data-anime="gsap">${c.t('accueil.titre2')}</em></span></h1>
      <p class="ouverture-chapo" data-anime="gsap">${c.t('accueil.texte')}</p>
      <p class="ouverture-actions" data-anime="gsap">
        ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <p class="info-cle" data-info-cle data-anime="gsap">${c.t('accueil.info')}</p>
      <p class="consigne-boite" aria-hidden="true"><span>↘</span> ${c.t('accueil.indiceSouris')}</p>
      <div class="reponse" data-reponse>
        <div class="reponse-corps">
          <p class="reponse-approche" data-reponse-approche></p>
          <p class="reponse-texte" data-reponse-texte></p>
        </div>
        <p class="reponse-actions">
          <a class="bouton" href="${c.url('rendez-vous', 'demande')}" data-reponse-rdv data-libelle="${c.libelle('rendez-vous')}">${c.t('accueil.reponseRdv')}</a>
          <a class="lien-fleche" href="${c.url('psychotherapie')}" data-reponse-plus data-libelle="${c.libelle('psychotherapie')}">${c.t('accueil.reponsePlus')}</a>
          <button type="button" class="lien-discret" data-reponse-autre>${c.t('accueil.reponseAutre')}</button>
        </p>
      </div>
    </div>
    <div class="objet" data-grille="manipuler" data-objet>
      ${boite({ rangees: [c.s('accueil.boiteQuestion1'), c.s('accueil.boiteQuestion2'), ''], label: c.s('accueil.boiteLabel'), classe: 'boite--accueil', attrs: 'data-boite data-effet="boite-a-mots" data-grille="typo" data-iris-centre' })}
      <span class="boite-ombre" aria-hidden="true"></span>
      <p class="visuellement-cache" aria-live="polite" data-boite-annonce></p>
    </div>
  </div>
  <div class="bureau" data-bureau>
    <span class="bureau-lumiere" aria-hidden="true"></span>
    <div class="conteneur objet-bas">
      <p class="indice"><span class="indice-souris">${c.t('accueil.indiceSouris')}</span><span class="indice-tactile">${c.t('accueil.indiceTactile')}</span></p>
      <ul class="tuiles" data-tuiles data-effet="tuiles" data-ruban>
        ${mots.map((m) => html`<li><button type="button" class="tuile tuile--mot" data-mot="${m.cle}">${m.tuile}</button></li>`)}
      </ul>
    </div>
  </div>
</div>
  <div class="dedans" data-panneau data-visuel>
    <h2 class="visuellement-cache">${c.t('accueil.sceneTitre')} ${scene.map((x) => x.tuiles.join(' ')).join(', ')}</h2>
    <p class="surtitre scene-sur">${c.t('accueil.sceneSur')} · <span class="indice-souris">${c.t('accueil.sceneIndice')}</span><span class="indice-tactile">${c.t('accueil.sceneIndiceTactile')}</span></p>
    <div class="rails" aria-hidden="true">
      <p class="rail rail-mot" data-rail-mot>${lettres(c.s('accueil.railMot'))}</p>
      <p class="rail">${scene.map((x, i) => html`<span class="phrase-mot" data-etape="${i}">${lettres(x.tuiles[0])}</span>`)}</p>
      <p class="rail">${scene.map((x, i) => html`<span class="phrase-mot" data-etape="${i}">${lettres(x.tuiles[1] || '')}</span>`)}</p>
    </div>
    <div class="legendes">${scene.map((x, i) => html`<p class="legende" data-etape="${i}">${x.texte}</p>`)}</div>
    <div class="bac" aria-hidden="true"></div>
  </div>
</div>
  <script type="application/json" id="donnees-mots">${brut(JSON.stringify(mots.map((m) => ({ ...m, url: c.url(m.page, m.ancre || ''), libelle: c.libelle(m.page), rdv: c.url('rendez-vous', 'demande', 'mot=' + m.cle) }))).replace(/</g, '\\u003c'))}</script>
</section>

<section class="moi ton-pierre" id="sandra" data-ambiance="#f3ead9,#ece3d4" data-effet="ambiance">
  <div class="conteneur moi-grille">
    ${c.media({ nom: 'sandra-rampe', alt: 'Sandra Barba, souriante, accoudée à une rampe en fer forgé devant un mur de pierre', cadrage: '46% 40%', classe: 'moi-portrait', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-anime="rideau"' })}
    <div class="moi-texte">
      <p class="surtitre" data-anime>${c.t('accueil.moiSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.moiTitre')}</h2>
      <blockquote class="moi-citation" data-anime>${c.t('accueil.moiCitation')}</blockquote>
      <p data-anime>${c.t('accueil.moiTexte')}</p>
      <p class="moi-dispo" data-anime>${c.t('accueil.moiDispo')}</p>
      <div class="moi-formations" data-anime>
        <p class="petit-titre">${c.t('accueil.moiFormationsTitre')}</p>
        <ul class="etiquettes" data-anime="cascade">${c.s('accueil.moiFormations').split(' · ').map((f) => html`<li>${f}</li>`)}</ul>
      </div>
    </div>
  </div>
</section>

<section class="bande-violences ton-nuit" id="violences" data-ambiance="#1b2240,#161d36" data-effet="ambiance">
  <div class="conteneur bande-grille">
    <div class="bande-texte">
      <p class="surtitre" data-anime>${c.t('accueil.violencesSur')}</p>
      <h2 class="titre-section titre-grand" data-anime="lettres">${c.t('accueil.violencesTitre')}</h2>
      <p data-anime>${c.t('accueil.violencesTexte')}</p>
      <ul class="numeros-bande" data-anime="cascade">
        ${c.donnees.numerosBande.map((n) => html`<li><a href="tel:${n.lien}"><span class="numero-tuiles">${n.numero.split('').map((ch) => html`<span class="tuile">${ch}</span>`)}</span><span>${n.titre}</span></a></li>`)}
      </ul>
      <p data-anime>${c.lien('violences', { classe: 'bouton bouton--clair', texte: c.t('accueil.violencesLien') })}</p>
    </div>
    ${c.media({ nom: 'presse', alt: 'Article de presse : « Éveiller les consciences sur les violences invisibles »', cadrage: '50% 22%', classe: 'bande-presse', sizes: '(max-width: 760px) 100vw, 38vw', legende: c.t('accueil.violencesPresse'), attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="seances ton-pierre" id="seances" data-ambiance="#ece3d4,#e9dfcf" data-effet="ambiance">
  <div class="conteneur">
    <div class="seances-tete">
      <p class="surtitre" data-anime>${c.t('accueil.seancesSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.seancesTitre')}</h2>
      <p data-anime>${c.t('accueil.seancesTexte')}</p>
    </div>
    <ul class="cartes-seances" data-anime="cascade">
      ${c.donnees.seances.map((s) => html`<li class="carte-seance" id="seance-${s.cle}">
        ${c.media({ nom: s.image === 'cabinet-photo' ? s.image : 'grok/' + s.image, alt: s.alt, cadrage: s.image === 'cabinet-photo' ? '55% 55%' : '50% 50%', classe: 'carte-media', ratio: '4 / 3', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <div class="carte-corps">
          <h3>${s.titre} <span class="carte-prix-titre" data-prix>· ${s.duree} · ${s.prix}</span></h3>
          <p>${s.detail}</p>
          ${c.lien('rendez-vous', { ancre: 'demande', params: 'seance=' + (s.cle === 'deux' ? 'couple' : s.cle), classe: 'lien-fleche', texte: c.t('accueil.seancesRdv') })}
        </div>
      </li>`)}
    </ul>
  </div>
</section>

<section class="cabinet ton-pierre" id="cabinet" data-ambiance="#e9dfcf,#ece3d4" data-effet="ambiance">
  <div class="cabinet-scene" data-effet="lampe-cabinet" data-souris data-lampe="64,40">
    ${c.media({ nom: 'grok/cabinet-lumiere', alt: 'La pièce du cabinet en lumière douce : poutres blanchies, divan de velours gris, fauteuil gris et lampe en bois flotté', cadrage: '55% 55%', classe: 'cabinet-media', sizes: '100vw' })}
    <div class="lampe-lumiere" aria-hidden="true"></div>
    <p class="lampe-indice" aria-hidden="true"><i></i>${c.t('accueil.cabinetIndice')}</p>
  </div>
  <div class="conteneur cabinet-grille">
    <div class="cabinet-carte">
      <p class="surtitre" data-anime>${c.t('accueil.cabinetSur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.cabinetTitre')}</h2>
      <p data-anime>${c.t('accueil.cabinetTexte')}</p>
      <ul class="reperes-acces" data-anime="cascade">
        <li><strong>89 rue du Portail‑Neuf</strong>, 84810 Aubignan</li>
        <li>Parking gratuit à proximité</li>
        <li>Du lundi au samedi, sur rendez-vous</li>
        <li>Ou en visio, où que vous soyez</li>
      </ul>
      <p data-anime>${c.lien('rendez-vous', { ancre: 'acces', classe: 'lien-fleche', texte: c.t('accueil.cabinetAcces') })}</p>
    </div>
    <div class="cabinet-vraies" data-anime="cascade">
      ${c.media({ nom: 'aimer-la-vie', alt: 'La vraie boîte lumineuse « AIMER LA VIE » sur le bureau de l’entrée du cabinet, à côté d’un bocal de mousse', cadrage: '55% 50%', classe: 'vraie-photo vraie-boite', sizes: '(max-width: 760px) 100vw, 30vw', legende: c.t('accueil.vraieBoite') })}
    </div>
  </div>
</section>

<section class="avis ton-pierre" id="avis" data-ambiance="#ece3d4,#efe7da" data-effet="ambiance">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('accueil.avisSur')}</p>
    <div class="avis-tete">
      <svg class="avis-guillemet" data-visuel viewBox="0 0 120 96" aria-hidden="true"><path d="M8 96V58C8 26 26 6 54 0l6 12C42 20 34 32 33 48h21v48H8zm58 0V58c0-32 18-52 46-58l6 12c-18 8-26 20-27 36h21v48H66z" fill="currentColor"/></svg>
      <h2 class="titre-section titre-grand" data-anime="lettres">${c.t('accueil.avisTitre')}</h2>
    </div>
    <ul class="avis-liste" data-anime="cascade">
      ${c.donnees.avis.map((a) => html`<li><blockquote>${a.texte}</blockquote><p class="avis-auteur">${a.auteur} · ${a.source}</p></li>`)}
    </ul>
    <p class="avis-note" data-anime>${c.t('accueil.avisNote')}</p>
  </div>
</section>

<section class="fin ton-pierre" id="fin" data-ambiance="#efe7da,#f1eadf" data-effet="ambiance">
  <div class="conteneur fin-grille">
    <div>
      <h2 class="titre-section titre-grand" data-anime="lignes">${c.t('accueil.finTitre')}</h2>
      <p data-anime>${c.t('accueil.finTexte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('rendez-vous', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.finRdv'), attrs: 'data-survol="magnetique"' })}
        <a class="tel tel--sombre" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
        <a class="lien-fleche" href="#debut" data-sans-transition>${c.t('accueil.finBoite')}</a>
      </p>
    </div>
    ${boite({ rangees: ['ET VOUS', '?'], label: c.s('accueil.finTitre'), classe: 'boite--petite allumee', attrs: 'data-effet="boite-fin" data-boite-fin data-visuel data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>
`;
};
