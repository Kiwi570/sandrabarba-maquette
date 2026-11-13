/* Sandra Barba — « La boîte à mots ». Effets propres au projet (le reste vient du socle).
   Chaque effet porte data-effet="nom-du-plan" dans les pages. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=3';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const CLE_MOT = 'sb-mot';
const lireMot = () => { try { return JSON.parse(sessionStorage.getItem(CLE_MOT) || 'null'); } catch { return null; } };
const ecrireMot = (m) => { try { m ? sessionStorage.setItem(CLE_MOT, JSON.stringify(m)) : sessionStorage.removeItem(CLE_MOT); } catch { /* stockage indisponible */ } };
const ech = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const lettresHtml = (t) => String(t).split('').map((ch) => (ch === ' ' ? '<span class="e"> </span>' : `<span class="l">${ech(ch)}</span>`)).join('');

/* ---------- La boîte : poser une rangée de lettres qui tombent une à une ---------- */
function poserRangee(rangee, texte, { delai = 0, pas = 0.035 } = {}) {
  if (!rangee) return;
  rangee.innerHTML = lettresHtml(texte);
  const l = $$('.l', rangee);
  if (!gsap || !l.length) return;
  gsap.fromTo(l, { yPercent: -70, rotationX: -75, opacity: 0 }, { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.42, ease: 'back.out(2.2)', stagger: pas, delay: delai, overwrite: true });
}
function montrerLettres(racine, { delai = 0 } = {}) {
  if (!racine) return;
  racine.classList.add('vues');
  const l = $$('.boite-rangee .l', racine);
  if (!gsap || !l.length) return;
  gsap.fromTo(l, { yPercent: -70, rotationX: -75, opacity: 0 }, { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.42, ease: 'back.out(2.2)', stagger: 0.03, delay: delai });
}

/* ---------- Le fil : « votre mot » glisse dans la marge et vous suit de page en page ---------- */
function majFil() {
  const tuile = $('[data-fil-tuile]'), chip = $('[data-fil-mot]');
  const m = lireMot();
  if (tuile) tuile.textContent = m ? m.tuile : 'VOTRE MOT';
  document.documentElement.classList.toggle('a-un-mot', !!m);
  if (chip) { chip.textContent = m ? m.tuile : ''; chip.hidden = !m; }
  $$('[data-fil-lien]').forEach((a) => { const u = new URL(a.href, location.href); if (m) u.searchParams.set('mot', m.cle); else u.searchParams.delete('mot'); a.href = u.pathname + u.search + u.hash; });
}
function initFil() {
  majFil();
  const fil = $('.fil'), tuile = $('[data-fil-tuile]');
  if (!fil || !tuile || !gsap) return;
  let reperes = [], hRail = 0, hDoc = 1, y = 0, cible = 0;
  const mesurer = () => {
    $$('.fil-repere', fil).forEach((r) => r.remove());
    hRail = fil.clientHeight - 90;
    hDoc = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    reperes = $$('main > section').map((s) => Math.min(1, Math.max(0, (s.offsetTop - innerHeight * 0.3) / hDoc)));
    reperes.forEach((p) => { const r = document.createElement('span'); r.className = 'fil-repere'; r.style.top = `${p * hRail + 6}px`; fil.appendChild(r); });
  };
  mesurer();
  quand('rafraichi', mesurer);
  window.addEventListener('resize', mesurer);
  boucle(document.body, (dt) => {
    const p = Math.min(1, scrollY / hDoc);
    /* la tuile s'arrête un instant sur chaque repère (aimantée) */
    const proche = reperes.reduce((a, r) => (Math.abs(r - p) < Math.abs(a - p) ? r : a), p);
    const vise = Math.abs(proche - p) < 0.025 ? proche : p;
    cible = vise * hRail;
    y += (cible - y) * Math.min(1, dt * 7);
    tuile.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
  });
}

/* ---------- Halo de la boîte (suit la souris ; erre doucement tant qu'elle n'a pas bougé) ---------- */
function initHalo() {
  const halo = $('.halo'), sec = $('.ouverture'), boiteEl = $('[data-boite]');
  if (!halo || !sec || !boiteEl) return;
  let cx = 0, cy = 0, tx = 0, ty = 0, aBouge = false, base = { x: 0, y: 0 };
  const mesurer = () => { const r = boiteEl.getBoundingClientRect(), s = sec.getBoundingClientRect(); base = { x: r.left + r.width / 2 - s.left, y: r.top + r.height / 2 - s.top }; if (!aBouge) { cx = tx = base.x; cy = ty = base.y; } };
  mesurer(); quand('rafraichi', mesurer); window.addEventListener('resize', mesurer);
  if (souris) sec.addEventListener('pointermove', (e) => { const s = sec.getBoundingClientRect(); tx = e.clientX - s.left; ty = e.clientY - s.top; aBouge = true; }, { passive: true });
  boucle(halo, (dt, t) => {
    if (!aBouge) { tx = base.x + Math.cos(t * 0.5) * 70; ty = base.y + Math.sin(t * 0.7) * 40; }
    const k = Math.min(1, dt * 5);
    cx += (tx - cx) * k; cy += (ty - cy) * k;
    if (Math.abs(tx - cx) < 0.3 && Math.abs(ty - cy) < 0.3 && aBouge) { cx = tx; cy = ty; }
    halo.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
  });
}

/* ---------- La boîte à mots : attraper sa tuile et la lancer dans la boîte ---------- */
function initBoite() {
  const objet = $('[data-objet]'), boiteEl = $('[data-boite]');
  if (!objet || !boiteEl) return null;
  const donnees = JSON.parse(($('#donnees-mots') || {}).textContent || '[]');
  const rang = $$('.boite-rangee', boiteEl);
  const annonce = $('[data-boite-annonce]');
  const zone = objet.closest('section') || document;
  const tuiles = $$('.tuile--mot', zone);
  const liste = $('[data-tuiles]', zone), rep = $('[data-reponse]', zone), indice = $('.indice', zone);
  const q1 = rang[0].textContent.trim(), q2 = rang[1].textContent.trim();
  const r1 = 'METTONS-Y', r2 = 'DES MOTS.';
  boiteEl.setAttribute('data-vide', '');
  rep.hidden = false; rep.setAttribute('inert', ''); rep.classList.add('reponse--cachee');
  let pose = null;

  const montrerReponse = (m) => {
    $('[data-reponse-approche]', rep).textContent = m.approche;
    $('[data-reponse-texte]', rep).textContent = m.texte;
    const rdv = $('[data-reponse-rdv]', rep); rdv.href = m.rdv; rdv.textContent = `Prendre rendez-vous · ${m.tuile.toLowerCase()}`;
    const plus = $('[data-reponse-plus]', rep); plus.href = m.url; plus.dataset.libelle = m.libelle;
    rep.removeAttribute('inert'); rep.classList.remove('reponse--cachee'); liste.classList.add('tuiles--cachees'); liste.setAttribute('inert', '');
    if (gsap) { gsap.fromTo(rep, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.35 }); gsap.to(liste, { opacity: 0, y: 10, duration: 0.3 }); }
    if (indice) indice.classList.add('indice--cache');
  };
  const poser = (tuile, m, depuis) => {
    if (pose) return;
    arreterDemo(); pose = m;
    ecrireMot({ cle: m.cle, tuile: m.tuile });
    majFil(); majRailMot();
    const rb = rang[0].getBoundingClientRect(), rt = tuile.getBoundingClientRect();
    const dx = rb.left + rb.width / 2 - (rt.left + rt.width / 2) + (depuis ? depuis.x : 0);
    const dy = rb.top + rb.height / 2 - (rt.top + rt.height / 2) + (depuis ? depuis.y : 0);
    const fin = () => {
      tuile.classList.add('posee');
      boiteEl.removeAttribute('data-vide'); lumiere(true);
      poserRangee(rang[0], m.tuile);
      poserRangee(rang[1], r1, { delai: 0.25 });
      poserRangee(rang[2], r2, { delai: 0.45 });
      if (annonce) annonce.textContent = `${m.tuile.toLowerCase()} : ${m.texte}`;
      montrerReponse(m);
      if (gsap) gsap.fromTo(boiteEl, { scale: 1 }, { scale: 1.025, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' });
    };
    if (!gsap) return fin();
    gsap.to(tuile, { x: dx, y: dy, rotation: 0, scale: 0.7, duration: 0.42, ease: 'power2.in', onComplete: fin });
  };
  const reprendre = () => {
    pose = null; ecrireMot(null); majFil(); majRailMot();
    lumiere(false); boiteEl.setAttribute('data-vide', '');
    poserRangee(rang[0], q1); poserRangee(rang[1], q2, { delai: 0.2 }); rang[2].innerHTML = '';
    tuiles.forEach((t) => { t.classList.remove('posee'); if (gsap) gsap.set(t, { x: 0, y: 0, scale: 1, rotation: 0 }); });
    rep.setAttribute('inert', ''); rep.classList.add('reponse--cachee'); liste.classList.remove('tuiles--cachees'); liste.removeAttribute('inert');
    if (gsap) { gsap.to(rep, { opacity: 0, duration: 0.25 }); gsap.fromTo(liste, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.15 }); }
    if (indice) indice.classList.remove('indice--cache');
    tuiles[0] && tuiles[0].focus({ preventScroll: true });

  };
  $('[data-reponse-autre]', rep).addEventListener('click', reprendre);

  /* Glisser et lancer, à la souris comme au doigt ; un clic ou un toucher pose aussi le mot. */
  tuiles.forEach((t) => {
    const m = donnees.find((d) => d.cle === t.dataset.mot);
    let depart = null, glisse = false, x = 0, y = 0, hist = [];
    t.addEventListener('click', (e) => { e.preventDefault(); if (!glisse && m) poser(t, m); glisse = false; });
    t.addEventListener('pointerdown', (e) => {
      if (pose || e.button > 0) return;
      arreterDemo();
      depart = { x: e.clientX, y: e.clientY }; hist = [{ x: 0, y: 0, t: performance.now() }];
      t.setPointerCapture(e.pointerId);
    });
    t.addEventListener('pointermove', (e) => {
      if (!depart) return;
      x = e.clientX - depart.x; y = e.clientY - depart.y;
      if (!glisse && Math.hypot(x, y) < 7) return;
      if (!glisse) { glisse = true; t.classList.add('en-main'); }
      hist.push({ x, y, t: performance.now() }); if (hist.length > 6) hist.shift();
      if (gsap) gsap.set(t, { x, y, rotation: Math.max(-14, Math.min(14, x * 0.04)) });
      const rb = boiteEl.getBoundingClientRect();
      boiteEl.classList.toggle('survolee', e.clientX > rb.left - 30 && e.clientX < rb.right + 30 && e.clientY > rb.top - 30 && e.clientY < rb.bottom + 30);
    });
    const lacherTuile = (e) => {
      if (!depart) return;
      depart = null; t.classList.remove('en-main'); boiteEl.classList.remove('survolee');
      if (!glisse) return;
      const a = hist[0], b = hist[hist.length - 1], dt = Math.max(16, b.t - a.t);
      const vx = (b.x - a.x) / dt, vy = (b.y - a.y) / dt; /* px par ms */
      const px = e.clientX + vx * 220, py = e.clientY + vy * 220; /* où l'élan l'emmène */
      const rb = boiteEl.getBoundingClientRect();
      const dedans = (X, Y) => X > rb.left - 40 && X < rb.right + 40 && Y > rb.top - 40 && Y < rb.bottom + 40;
      if (m && (dedans(e.clientX, e.clientY) || dedans(px, py))) { poser(t, m, { x, y }); setTimeout(() => { glisse = false; }, 0); }
      else if (gsap) { gsap.to(t, { x: 0, y: 0, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.55)' }); setTimeout(() => { glisse = false; }, 0); }
    };
    t.addEventListener('pointerup', lacherTuile);
    t.addEventListener('pointercancel', lacherTuile);
  });

  const ouverture = boiteEl.closest('.ouverture');
  const lumiere = (on) => { boiteEl.classList.toggle('allumee', on); if (ouverture) ouverture.style.setProperty('--lueur-bureau', on ? '1' : '0'); };
  /* Démonstration, juste après l'ouverture : une tuile entre dans la fente, la boîte s'allume sur ce mot, puis la tuile revient. */
  let demoTl = null;
  const arreterDemo = () => {
    if (!demoTl) return;
    demoTl.kill(); demoTl = null;
    if (!pose) { const t = tuiles[DEMO]; if (t && gsap) gsap.to(t, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.3 }); lumiere(false); rang[0].innerHTML = lettresHtml(q1); rang[1].innerHTML = lettresHtml(q2); rang[2].innerHTML = ''; }
  };
  objet.closest('section').addEventListener('pointerdown', arreterDemo, { once: true });
  objet.closest('section').addEventListener('focusin', arreterDemo, { once: true });
  const DEMO = Math.min(4, tuiles.length - 1);
  const demo = () => {
    if (pose || !gsap) return;
    const t = tuiles[DEMO], m = donnees.find((d) => d.cle === (t && t.dataset.mot));
    if (!t || !m) return;
    const rb = rang[0].getBoundingClientRect(), rt = t.getBoundingClientRect();
    const rbx = boiteEl.getBoundingClientRect();
    const dx = rbx.left + rbx.width / 2 - (rt.left + rt.width / 2), dy = rbx.bottom - 4 + rt.height * 0.42 - (rt.top + rt.height / 2);
    demoTl = gsap.timeline({ delay: 0.6 })
      .to(t, { y: -18, rotation: -5, duration: 0.25, ease: 'power2.out' })
      .to(t, { x: dx, y: dy, rotation: 0, scale: 0.9, duration: 0.65, ease: 'power2.inOut' })
      .call(() => { lumiere(true); poserRangee(rang[0], m.tuile); poserRangee(rang[1], r1, { delai: 0.2 }); poserRangee(rang[2], r2, { delai: 0.4 }); })
      .to({}, { duration: 1.9 })
      .call(() => { lumiere(false); poserRangee(rang[0], q1); poserRangee(rang[1], q2, { delai: 0.15 }); rang[2].innerHTML = ''; })
      .to(t, { x: 0, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.4)' })
      .call(() => { demoTl = null; });
  };
  const arreterEssais = () => {};
  const calmer = () => {};
  /* Un mot déjà choisi (retour arrière, autre page) : la boîte le montre. */
  const deja = lireMot();
  const appliquerDeja = () => {
    if (!deja) return false;
    const m = donnees.find((d) => d.cle === deja.cle); const t = tuiles.find((x) => x.dataset.mot === deja.cle);
    if (!m || !t) return false;
    pose = m; t.classList.add('posee'); boiteEl.removeAttribute('data-vide'); lumiere(true);
    rang[0].innerHTML = lettresHtml(m.tuile); rang[1].innerHTML = lettresHtml(r1); rang[2].innerHTML = lettresHtml(r2);
    montrerReponse(m); if (gsap) gsap.set([rep], { opacity: 1, y: 0, clearProps: 'transform' });
    return true;
  };
  return { demo, appliquerDeja, boiteEl };
}

/* ---------- La plongée : on entre dans la boîte au défilement ; le mot choisi reste sur le rail du haut,
   les lettres du bac composent ses phrases sur les deux autres rails, puis y retombent ; la main les balaie ---------- */
function majRailMot() {
  const r = $('[data-rail-mot]'); if (!r) return;
  const m = lireMot(); const t = m ? m.tuile : (r.dataset.defaut || (r.dataset.defaut = r.textContent.trim()));
  r.innerHTML = lettresHtml(t);
}
function initPlongee() {
  const sec = $('.plongee[data-scene]');
  if (!sec || !gsap || !window.ScrollTrigger) return;
  majRailMot();
  const cadre = $('[data-collant]', sec), boiteEl = $('.boite--accueil', sec), dedans = $('[data-panneau]', sec), bac = $('.bac', sec);
  const texte = $('.ouverture-texte', sec), bureau = $('.bureau', sec), halo = $('.halo', sec);
  const panneau = $('.boite-panneau', boiteEl) || boiteEl, rails = $('.rails', dedans), sur = $('.scene-sur', dedans);
  const etapes = [0, 1, 2].map((i) => $$(`.phrase-mot[data-etape="${i}"] .l`, sec));
  const suivantes = $$('.phrase-mot[data-etape="1"], .phrase-mot[data-etape="2"]', sec);
  const toutes = etapes.flat(), legendes = $$('.legende', sec);
  const alea = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  const tirage = toutes.map((l, i) => ({ fx: alea(i, 1), fy: alea(i, 2), r: (alea(i, 3) - 0.5) * 80 }));
  let bases = [], dansBac = [], tl = null, st = null;
  const construire = () => {
    if (st) st.kill(); if (tl) tl.kill();
    gsap.set([boiteEl, ...$$('.rail', rails), dedans, texte, bureau, halo, sur, ...suivantes], { clearProps: 'transform,opacity,clipPath,visibility' });
    gsap.set(toutes, { x: 0, y: 0, rotation: 0, scale: 1 });
    const fr = cadre.getBoundingClientRect(), pr = panneau.getBoundingClientRect(), dr = dedans.getBoundingClientRect(), kr = bac.getBoundingClientRect();
    bases = toutes.map((l) => { const r = l.getBoundingClientRect(); return { x: r.left - dr.left + r.width / 2, y: r.top - dr.top + r.height / 2 }; });
    const bx = kr.left - dr.left, by = kr.top - dr.top, bw = kr.width, bh = kr.height;
    dansBac = toutes.map((l, i) => ({ x: bx + bw * (0.04 + tirage[i].fx * 0.92) - bases[i].x, y: by + bh * (0.3 + tirage[i].fy * 0.45) - bases[i].y, rotation: tirage[i].r, scale: 0.42 }));
    etapes.forEach((ls, e) => { if (e > 0) ls.forEach((l) => gsap.set(l, dansBac[toutes.indexOf(l)])); });
    /* On entre dans la boîte : l'intérieur s'ouvre par une fenêtre qui part exactement du panneau de la boîte
       (même crème, mêmes mots), puis s'agrandit jusqu'aux bords de l'écran pendant que les mots grandissent.
       Rien de lourd ne change de taille : une découpe (clip-path) et le seul bloc de texte. */
    const ins = [pr.top - fr.top, fr.right - pr.right, fr.bottom - pr.bottom, pr.left - fr.left].map((v) => Math.max(0, v).toFixed(1) + 'px');
    /* chaque rangée de mots part exactement de la rangée de la boîte (même place, même taille de lettre) */
    const rangsBoite = $$('.boite-rangee', boiteEl), lignes = $$('.rail', rails);
    const departs = lignes.map((ln, i) => {
      const a = ln.getBoundingClientRect(), b = (rangsBoite[i] || panneau).getBoundingClientRect();
      const fa = parseFloat(getComputedStyle(ln).fontSize) || 1, fb = parseFloat(getComputedStyle(rangsBoite[i] || panneau).fontSize) || fa;
      return { x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2), scale: fb / fa };
    });
    tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    /* zone morte au tout début : un reste de défilement ne fait jamais bouger l'ouverture */
    gsap.set(dedans, { visibility: 'hidden', opacity: 1, clipPath: `inset(${ins.join(' ')})` });
    tl.fromTo(lignes, { x: (i) => departs[i].x, y: (i) => departs[i].y, scale: (i) => departs[i].scale }, { x: 0, y: 0, scale: 1, duration: 0.17, ease: 'power2.inOut' }, 0.04)
      .set(dedans, { visibility: 'visible' }, 0.04)
      .fromTo(dedans, { opacity: 0 }, { opacity: 1, duration: 0.02 }, 0.04)
      .to(dedans, { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.17, ease: 'power2.inOut' }, 0.04)
      .to(texte, { opacity: 0, x: -48, duration: 0.08 }, 0.03)
      .to(bureau, { yPercent: 55, opacity: 0, duration: 0.1 }, 0.03)
      .to(halo, { opacity: 0, duration: 0.1 }, 0.04)
      .set(boiteEl, { visibility: 'hidden' }, 0.22)
      .fromTo(suivantes, { opacity: 0 }, { opacity: 1, duration: 0.04 }, 0.19)
      .fromTo(sur, { opacity: 0 }, { opacity: 1, duration: 0.04 }, 0.19);
    const plan = [[null, 0.4], [0.44, 0.66], [0.7, null]];
    etapes.forEach((ls, e) => {
      const idx = ls.map((l) => toutes.indexOf(l));
      if (e > 0) tl.to(ls, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.1, ease: 'power3.out', stagger: { each: 0.002, from: 'random' } }, plan[e][0]);
      if (plan[e][1] != null) tl.to(ls, { x: (j) => dansBac[idx[j]].x, y: (j) => dansBac[idx[j]].y, rotation: (j) => dansBac[idx[j]].rotation, scale: 0.42, duration: 0.04, ease: 'power2.in', stagger: { each: 0.001, from: 'random' } }, plan[e][1]);
    });
    tl.to({}, { duration: 0.04 }, 0.96);
    let plonge = false;
    const rangs = $$('.boite-rangee', boiteEl);
    const versDedans = (oui) => {
      if (oui === plonge) return; plonge = oui;
      if (oui) { const m = lireMot(); boiteEl.dataset.avant = rangs.map((r) => r.textContent.replace(/\s+/g, ' ').trim()).join('|');
        const ph = etapes[0].length ? [$$('.rail .phrase-mot[data-etape="0"]', sec)[0], $$('.rail .phrase-mot[data-etape="0"]', sec)[1]].map((x) => (x ? x.textContent.replace(/\s+/g, ' ').trim() : '')) : ['', ''];
        /* le mot affiché reste le même dedans : le mot choisi, sinon celui que la démonstration a posé */
        const vu = rangs[0].textContent.replace(/\s+/g, ' ').trim(), railMot = $('[data-rail-mot]');
        const motVu = m ? m.tuile : (vu && !/\?|QUEL/.test(vu) ? vu : ((railMot && railMot.dataset.defaut) || 'ENSEMBLE'));
        rangs[0].innerHTML = lettresHtml(motVu); rangs[1].innerHTML = lettresHtml(ph[0]); rangs[2].innerHTML = lettresHtml(ph[1]);
        if (railMot && !m) railMot.innerHTML = lettresHtml(motVu);
        boiteEl.classList.add('allumee');
      } else if (boiteEl.dataset.avant) { const v = boiteEl.dataset.avant.split('|'); rangs.forEach((r, k) => { r.innerHTML = lettresHtml(v[k] || ''); }); if (!lireMot()) boiteEl.classList.remove('allumee'); }
    };
    st = window.ScrollTrigger.create({
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.5, animation: tl, invalidateOnRefresh: false,
      onUpdate: (x) => {
        const p = x.progress; versDedans(p > 0.03); sec.classList.toggle('zoom-fini', p > 0.215); document.documentElement.classList.toggle('fil-au-repos', p < 0.2 && x.isActive !== false && scrollY < sec.offsetTop + sec.offsetHeight * 0.2);
        const fen = [[0.22, 0.4], [0.55, 0.65], [0.83, 1.01]];
        legendes.forEach((l, n) => l.classList.toggle('actif', p >= fen[n][0] && p < fen[n][1]));
      },
    });
  };
  /* attendre que les polices et la mise en page soient posées */
  construire();
  if (scrollY < sec.offsetTop + 10) document.documentElement.classList.add('fil-au-repos');
  let attente = null;
  quand('rafraichi', () => { if (scrollY > sec.offsetTop + 10) return; clearTimeout(attente); attente = setTimeout(construire, 150); });
  /* la boîte n'est à sa vraie place qu'une fois l'ouverture jouée, ou quand la réponse s'affiche : on remesure la fenêtre de départ */
  if (window.ResizeObserver) { const ro = new ResizeObserver(() => { if (scrollY > sec.offsetTop + 10) return; clearTimeout(attente); attente = setTimeout(construire, 120); }); ro.observe(boiteEl); ro.observe(bureau); }
  quand('pret', () => { clearTimeout(attente); attente = setTimeout(() => { if (scrollY < sec.offsetTop + 10) construire(); }, 900); });
  /* Balayer les lettres du bac ou des rails : elles s'écartent sous la main, puis reviennent. */
  const ecart = toutes.map(() => ({ x: 0, y: 0 }));
  let px = -9999, py = -9999, actif = 0;
  const suivre = (e) => { const r = dedans.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; actif = 1.2; };
  dedans.addEventListener('pointermove', suivre, { passive: true });
  dedans.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) suivre(t); }, { passive: true });
  boucle(dedans, (dt) => {
    if (actif <= 0 && ecart.every((o) => Math.abs(o.x) + Math.abs(o.y) < 0.2)) return;
    actif -= dt;
    toutes.forEach((l, i) => {
      const o = ecart[i], b = bases[i];
      if (actif > 0 && b) {
        const cx = b.x + gsap.getProperty(l, 'x') + o.x, cy = b.y + gsap.getProperty(l, 'y') + o.y;
        const ddx = cx - px, ddy = cy - py, d = Math.hypot(ddx, ddy);
        if (d < 140 && d > 0.1) { const f = (140 - d) / 140; o.x += (ddx / d) * f * 900 * dt; o.y += (ddy / d) * f * 900 * dt; }
      }
      o.x -= o.x * Math.min(1, dt * 2.4); o.y -= o.y * Math.min(1, dt * 2.4);
      l.style.translate = `${o.x.toFixed(1)}px ${o.y.toFixed(1)}px`;
    });
  });
}

/* ---------- L'ambiance : chaque section s'éclaircit au fil de la lecture ---------- */
function initAmbiance() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('[data-ambiance]').forEach((s) => {
    const [a, b] = s.dataset.ambiance.split(',');
    s.setAttribute('data-effet', s.getAttribute('data-effet') || 'ambiance');
    gsap.fromTo(s, { backgroundColor: a }, { backgroundColor: b, ease: 'none', scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ---------- Une lampe qui suit la main (cabinet, violences invisibles) ---------- */
function initLampes() {
  $$('[data-lampe]').forEach((scene) => {
    const lum = $('.lampe-lumiere', scene), dedans = $('.lampe-dedans', scene);
    if (!lum) return;
    const depart = (scene.dataset.lampe || '62,40').split(',').map(Number);
    let w = 0, h = 0, cx = 0, cy = 0, tx = 0, ty = 0, aBouge = false;
    const mesurer = () => { w = scene.clientWidth; h = scene.clientHeight; if (dedans) { dedans.style.width = `${w}px`; dedans.style.height = `${h}px`; } if (!aBouge) { cx = tx = w * depart[0] / 100; cy = ty = h * depart[1] / 100; } };
    mesurer(); quand('rafraichi', mesurer); window.addEventListener('resize', mesurer);
    const suivre = (e) => { const r = scene.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; aBouge = true; };
    if (souris) scene.addEventListener('pointermove', suivre, { passive: true });
    scene.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') suivre(e); }, { passive: true });
    scene.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) suivre(t); }, { passive: true });
    boucle(scene, (dt, t) => {
      if (!aBouge) { tx = w * depart[0] / 100 + Math.cos(t * 0.45) * w * 0.16; ty = h * depart[1] / 100 + Math.sin(t * 0.6) * h * 0.12; }
      const k = Math.min(1, dt * 4.5);
      cx += (tx - cx) * k; cy += (ty - cy) * k;
      if (aBouge && Math.abs(tx - cx) < 0.3 && Math.abs(ty - cy) < 0.3) { cx = tx; cy = ty; }
      lum.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (dedans) dedans.style.transform = `translate3d(${(-cx).toFixed(1)}px, ${(-cy).toFixed(1)}px, 0)`;
    });
  });
}

/* ---------- Titres en tuiles : les tuiles tombent une à une (grille wouahou, point 5) ---------- */
const tuilesTitre = () => $$('.titre-tuiles .tuile');
function poserTitre(delai = 0) {
  const t = tuilesTitre();
  $$('.titre-tuiles').forEach((x) => x.classList.add('vues'));
  if (!gsap || !t.length) return;
  gsap.fromTo(t, { y: -48, rotation: (i) => (i % 2 ? 9 : -7), opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.55, ease: 'back.out(2)', stagger: 0.09, delay: delai });
}

/* ---------- Boîte qui respire (sophrologie) : maintenir pour inspirer, relâcher pour expirer ---------- */
function initSouffle() {
  const z = $('[data-souffle]');
  if (!z || !gsap) return;
  const boiteEl = $('.boite', z), bouton = $('[data-souffle-bouton]', z), rang = $$('.boite-rangee', boiteEl), compte = $('[data-souffle-compte]', z);
  const T = { in: z.dataset.inspirez || 'INSPIREZ', out: z.dataset.expirez || 'EXPIREZ', fin: z.dataset.fin || 'MERCI' };
  let n = 0, enCours = false, anim = null;
  /* Au repos, la boîte respire seule, lentement. */
  const lum = $('[data-respire-lumiere]', z);
  /* Au repos, la boîte respire seule : 4 s pour inspirer, 6 s pour expirer, la lumière suit, le mot change. */
  const repos = gsap.timeline({ paused: true, repeat: -1 })
    .call(() => { if (!enCours) poserRangee(rang[1], T.in, { pas: 0.02 }); }, null, 0)
    .to(boiteEl, { scale: 1.04, '--lueur': 0.5, duration: 4, ease: 'sine.inOut' }, 0)
    .call(() => { if (!enCours) poserRangee(rang[1], T.out, { pas: 0.02 }); }, null, 4)
    .to(boiteEl, { scale: 1, '--lueur': 0.2, duration: 6, ease: 'sine.inOut' }, 4);
  if (lum) repos.fromTo(lum, { opacity: 0.3, scale: 0.85 }, { opacity: 0.95, scale: 1.15, duration: 4, ease: 'sine.inOut' }, 0).to(lum, { opacity: 0.3, scale: 0.85, duration: 6, ease: 'sine.inOut' }, 4);
  let animLum = null;
  const io = new IntersectionObserver(([e]) => (e.isIntersecting ? repos.play() : repos.pause())); io.observe(z);
  const inspirer = (e) => {
    e.preventDefault(); if (enCours) return; enCours = true; repos.pause();
    poserRangee(rang[1], T.in, { pas: 0.02 });
    anim && anim.kill();
    anim = gsap.to(boiteEl, { scale: 1.1, '--lueur': 0.6, duration: 4, ease: 'sine.out' });
    if (lum) { animLum && animLum.kill(); animLum = gsap.to(lum, { opacity: 1, scale: 1.25, duration: 4, ease: 'sine.out' }); }
  };
  const expirer = () => {
    if (!enCours) return; enCours = false; n += 1;
    if (compte) compte.textContent = `${Math.min(n, 3)} / 3`;
    poserRangee(rang[1], n >= 3 ? T.fin : T.out, { pas: 0.02 });
    anim && anim.kill();
    anim = gsap.to(boiteEl, { scale: 1, '--lueur': 0.2, duration: 5, ease: 'sine.inOut', onComplete: () => { if (n >= 3) { n = 0; } repos.play(); } });
    if (lum) { animLum && animLum.kill(); animLum = gsap.to(lum, { opacity: 0.35, scale: 0.9, duration: 5, ease: 'sine.inOut' }); }
  };
  bouton.addEventListener('pointerdown', inspirer);
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => bouton.addEventListener(ev, expirer));
  bouton.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) inspirer(e); });
  bouton.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') expirer(); });
  bouton.addEventListener('click', (e) => e.preventDefault());
}

/* ---------- Quitter vite (violences) : remplace la page sans laisser de retour possible ---------- */
function initQuitter() {
  const b = $('[data-quitter]');
  if (!b) return;
  const partir = () => { try { sessionStorage.clear(); } catch { /* rien */ } location.replace('https://meteofrance.com/'); };
  b.addEventListener('click', partir);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !document.documentElement.classList.contains('menu-ouvert')) { const n = (b.__esc = (b.__esc || 0) + 1); if (n >= 2) partir(); setTimeout(() => { b.__esc = 0; }, 900); } });
}

/* ---------- Rendez-vous : demande en étapes, et la demande tombe dans la boîte « DEMANDE REÇUE » ---------- */
function initDemande() {
  const f = $('[data-demande]');
  if (!f) return;
  const etapes = $$('[data-etape-form]', f), points = $$('[data-point]', f);
  const params = new URLSearchParams(location.search);
  const m = lireMot();
  const champMot = $('[name="mot"]', f);
  if (champMot) champMot.value = params.get('mot') || (m && m.cle) || '';
  const s = ({ deux: 'couple' })[params.get('seance')] || params.get('seance'); if (s) { const r = $(`[name="seance"][value="${s}"]`, f); if (r) r.checked = true; }
  if (params.get('mot') === 'couple') { const r = $('[name="seance"][value="couple"]', f); if (r) r.checked = true; }
  if (params.get('mot') === 'fille') { const r = $('[name="seance"][value="famille"]', f); if (r) r.checked = true; }
  let i = 0;
  const conteneur = $('[data-etapes-conteneur]', f);
  const montrer = (n, focus = true) => {
    const h0 = conteneur.offsetHeight;
    etapes.forEach((e, k) => { e.hidden = k !== n; });
    points.forEach((p, k) => { p.classList.toggle('actif', k === n); p.classList.toggle('fait', k < n); if (k === n) p.setAttribute('aria-current', 'step'); else p.removeAttribute('aria-current'); });
    i = n;
    if (gsap) { const h1 = conteneur.offsetHeight; gsap.fromTo(conteneur, { height: h0 }, { height: h1, duration: 0.35, ease: 'power2.out', clearProps: 'height' }); gsap.fromTo(etapes[n], { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35 }); }
    if (focus) { const c = $('input, textarea, select, button', etapes[n]); c && c.focus({ preventScroll: true }); const r = f.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * 0.4) window.scrollTo({ top: r.top + scrollY - 90 }); }
    recap();
  };
  const valide = (n) => {
    let ok = true;
    $$('[required]', etapes[n]).forEach((c) => {
      const err = $(`#${c.id}-erreur`, f);
      const bon = c.type === 'radio' ? !!$(`[name="${c.name}"]:checked`, f) : c.checkValidity();
      if (c.type !== 'radio') c.setAttribute('aria-invalid', bon ? 'false' : 'true');
      if (err) err.hidden = bon;
      if (!bon) ok = false;
    });
    return ok;
  };
  const recap = () => {
    const r = $('[data-recap]', f); if (!r) return;
    const v = (n) => { const c = $(`[name="${n}"]:checked`, f); return c ? c.dataset.libelle || c.value : ''; };
    const moments = $$('[name="moment"]:checked', f).map((c) => c.dataset.libelle).join(', ');
    r.innerHTML = [v('seance'), v('lieu'), moments, champMot && champMot.value ? `« ${ech(champMot.options[champMot.selectedIndex].text)} »` : ''].filter(Boolean).map((x) => `<span class="recap-item">${ech(x)}</span>`).join('');
  };
  f.addEventListener('change', recap);
  $$('[data-suivant]', f).forEach((b) => b.addEventListener('click', () => { if (valide(i)) montrer(i + 1); }));
  $$('[data-precedent]', f).forEach((b) => b.addEventListener('click', () => montrer(i - 1)));
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!valide(i)) return;
    const envoi = $('[type="submit"]', f); envoi.disabled = true;
    const recue = $('[data-demande-recue]'), liste = $('[data-recue-liste]');
    const tuilesVol = $$('[data-recap] .recap-item', f);
    const fin = () => {
      if (liste) liste.innerHTML = tuilesVol.map((t) => `<li>${ech(t.textContent)}</li>`).join('');
      $('[data-demande-corps]', f).hidden = true;
      recue.hidden = false;
      if (gsap) { gsap.fromTo(recue, { y: -26, opacity: 0, rotation: -0.6 }, { y: 0, opacity: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.6)' }); gsap.fromTo($$('li', liste), { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'back.out(2)', delay: 0.15 }); }
      const msg = $('[data-message-envoi]'); if (msg) msg.focus({ preventScroll: true });
      const cible = $('#demande'); if (cible) window.scrollTo({ top: cible.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 12 });
    };
    if (!gsap || !tuilesVol.length) return fin();
    const rb = f.getBoundingClientRect();
    tuilesVol.forEach((t, k) => {
      const r = t.getBoundingClientRect();
      const c = t.cloneNode(true); c.classList.add('tuile-vol'); c.setAttribute('aria-hidden', 'true');
      Object.assign(c.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, margin: 0, zIndex: 900 });
      document.body.appendChild(c);
      gsap.to(c, { x: rb.left + 40 - r.left, y: Math.max(80, rb.top + 120) - r.top + k * 6, rotation: (k % 2 ? 6 : -5), scale: 0.9, opacity: 0, duration: 0.7, delay: k * 0.08, ease: 'power2.in', onComplete: () => c.remove() });
    });
    gsap.delayedCall(0.7 + tuilesVol.length * 0.08, fin);
  });
  $('[data-recommencer]') && $('[data-recommencer]').addEventListener('click', () => {
    f.reset(); $('[data-demande-corps]', f).hidden = false; $('[data-demande-recue]').hidden = true; $('[type="submit"]', f).disabled = false;
    montrer(0);
  });
  montrer(0, false);
}

/* ---------- Psychothérapie : le voile sur le divan s'efface, la ligne des trois temps se trace ---------- */
function initPsy() {
  if (!gsap || !window.ScrollTrigger) return;
  const v = $('.po-psy-voile');
  if (v) gsap.fromTo(v, { opacity: 1 }, { opacity: 0.08, ease: 'none', scrollTrigger: { trigger: '.po-psy-bandeau', start: 'top 85%', end: 'bottom 30%', scrub: true } });
  const l = $('.temps-ligne');
  if (l) gsap.fromTo(l, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.trois-temps', start: 'top 70%', end: 'bottom 60%', scrub: true } });
}

/* ---------- Trois temps (psychothérapie) : une scène épinglée, le grand mot change au défilement ---------- */
function initTemps() {
  const sec = $('[data-temps]');
  if (!sec || !window.ScrollTrigger) return;
  const etats = $$('.pi-temps-etat', sec), fil = $$('[data-fil-temps]', sec);
  let courant = -1;
  const bt = $('[data-boite-temps]', sec), rangT = bt ? $$('.boite-rangee', bt) : [], motsT = bt ? (bt.dataset.mots || '').split('|') : [];
  const poser = (i) => {
    if (i === courant) return; const premier = courant < 0; courant = i;
    etats.forEach((e, k) => e.classList.toggle('actif', k === i)); fil.forEach((e, k) => e.classList.toggle('actif', k <= i));
    if (rangT[1] && motsT[i] && !premier) poserRangee(rangT[1], motsT[i], { pas: 0.03 });
  };
  poser(0);
  window.ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom', onUpdate: (x) => poser(Math.min(etats.length - 1, Math.floor(x.progress * etats.length * 0.999))) });
}

/* ---------- Les mots qui amènent au cabinet : deux lignes de grande typographie qui défilent en sens contraire ---------- */
function initRuban() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('[data-ruban]').forEach((r) => {
    $$('[data-ruban-sens]', r).forEach((l) => {
      const sens = Number(l.dataset.rubanSens) || 1;
      gsap.fromTo(l, { xPercent: sens > 0 ? -30 : 0 }, { xPercent: sens > 0 ? 0 : -30, ease: 'none', scrollTrigger: { trigger: r, start: 'top bottom', end: 'bottom top', scrub: 0.4 } });
    });
  });
}

/* ---------- Vignettes (diplômes, presse) : s'ouvrent en grand ---------- */
function initVisionneuse() {
  const d = $('[data-visionneuse]');
  if (!d || typeof d.showModal !== 'function') return;
  const img = $('[data-visionneuse-img]', d);
  $$('[data-vignette]').forEach((b) => b.addEventListener('click', () => {
    img.src = b.dataset.vignette; img.alt = b.dataset.vignetteAlt || '';
    d.showModal();
  }));
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
}

/* ---------- Démarrage ---------- */
let boite = null;
demarrer({
  preparer() {
    initFil();
    boite = initBoite();
    initHalo();
    initPlongee();
    initAmbiance();
    initLampes();
    initSouffle();
    initQuitter();
    initDemande();
    initPsy();
    initTemps();
    initRuban();
    initVisionneuse();
  },
  /* Intro : les tuiles « LA VIE EST UN COMBAT » tombent, le B glisse jusqu'à la boîte, la page s'ouvre depuis elle. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { scale: 0.86, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45 }, 0)
      .fromTo('.ouverture-tuiles .tuile', { y: -70, rotation: (i) => (i % 2 ? 10 : -8), opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.08 }, 0.12)
      .to('.ouverture-tuiles, .ouverture-nom', { opacity: 0, duration: 0.25 }, 0.95);
    versObjet(tl, { a: 1.0 });
    arriveePage(tl, 1.5);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.titre-ligne, .surtitre[data-anime="gsap"], .ouverture-chapo, .ouverture-actions, .info-cle, .indice, .page-chapo, .page-actions, [data-anime="gsap"]', { clearProps: 'transform,opacity' });
    $$('.boite--accueil, .boite--petite, .titre-tuiles, .tuiles').forEach((x) => x.classList.add('vues'));
    gsap.set('.boite--accueil .l, .boite--petite .l, .titre-tuiles .tuile, .tuiles .tuile--mot', { clearProps: 'transform,opacity' });
    if (boite) boite.appliquerDeja();
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline();
    arriveePage(tl, 0.15);
  },
});

/* Animations d'arrivée communes à l'intro et au voile : titres, boîte, tuiles. */
function arriveePage(tl, t0) {
  const deja = boite && boite.appliquerDeja();
  tl.fromTo('.titre-ligne', { yPercent: 145, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, t0)
    .fromTo('.surtitre[data-anime="gsap"], .ouverture-chapo, .ouverture-actions, .info-cle, .indice, .page-chapo, .page-actions, .pi-chapo[data-anime="gsap"], .pi-actions[data-anime="gsap"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, t0 + 0.15);
  if (!deja) tl.call(() => montrerLettres($('.boite--accueil')), null, t0 + 0.1);
  if ($('.boite--page')) tl.call(() => montrerLettres($('.boite--page')), null, t0 + 0.2);
  tl.call(() => poserTitre(0), null, t0 + 0.05);
  if ($('.tuiles') && !deja) tl.call(() => $('.tuiles').classList.add('vues'), null, t0 + 0.34).fromTo('.tuiles .tuile--mot', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'back.out(1.8)' }, t0 + 0.35);
  if (boite && !deja) tl.call(() => boite.demo(), null, t0 + 0.2);
}
