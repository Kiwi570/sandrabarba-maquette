/* Sandra Barba — « La boîte à mots ». Effets propres au projet (le reste vient du socle).
   Chaque effet porte data-effet="nom-du-plan" dans les pages. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=1';

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
  const texte = $('.ouverture-texte', sec), bureau = $('.bureau', sec), mur = $('.ouverture-mur', sec), halo = $('.halo', sec);
  const etapes = [0, 1, 2].map((i) => $$(`.phrase-mot[data-etape="${i}"] .l`, sec));
  const toutes = etapes.flat(), legendes = $$('.legende', sec);
  const alea = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  const tirage = toutes.map((l, i) => ({ fx: alea(i, 1), fy: alea(i, 2), r: (alea(i, 3) - 0.5) * 80 }));
  let bases = [], dansBac = [], tl = null, st = null;
  const construire = () => {
    if (st) st.kill(); if (tl) tl.kill();
    gsap.set(boiteEl, { clearProps: 'transform' });
    gsap.set(toutes, { x: 0, y: 0, rotation: 0 });
    const fr = cadre.getBoundingClientRect(), br = boiteEl.getBoundingClientRect(), dr = dedans.getBoundingClientRect(), kr = bac.getBoundingClientRect();
    /* plongée : la boîte grandit jusqu'à ce que son cadre devienne le bord de l'écran */
    const vw = fr.width, vh = fr.height;
    const sc = Math.max(vw / br.width, vh / br.height) * 1.08;
    const dx = vw / 2 - (br.left - fr.left + br.width / 2), dy = vh / 2 - (br.top - fr.top + br.height / 2);
    bases = toutes.map((l) => { const r = l.getBoundingClientRect(); return { x: r.left - dr.left + r.width / 2, y: r.top - dr.top + r.height / 2 }; });
    /* le bac : lettres couchées au bas du cadre, jamais derrière le mot ni sur la légende */
    const bx = kr.left - dr.left, by = kr.top - dr.top, bw = kr.width, bh = kr.height;
    dansBac = toutes.map((l, i) => ({ x: bx + bw * (0.04 + tirage[i].fx * 0.92) - bases[i].x, y: by + bh * (0.3 + tirage[i].fy * 0.45) - bases[i].y, rotation: tirage[i].r, scale: 0.42 }));
    toutes.forEach((l, i) => gsap.set(l, dansBac[i]));
    tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    /* zone morte au tout début : un reste de défilement ne fait jamais bouger l'ouverture */
    tl.to(boiteEl, { x: dx, y: dy, scale: sc, duration: 0.17, ease: 'power2.in' }, 0.03)
      .to(texte, { opacity: 0, x: -80, duration: 0.1 }, 0.03)
      .to(bureau, { yPercent: 70, opacity: 0, duration: 0.12 }, 0.04)
      .to([mur, halo], { opacity: 0.25, duration: 0.14 }, 0.04)
      .set(dedans, { visibility: 'visible' }, 0.16)
      .to(dedans, { opacity: 1, duration: 0.05 }, 0.16)
      .to(boiteEl, { opacity: 0, duration: 0.03 }, 0.21)
      .set([mur, halo], { visibility: 'hidden' }, 0.215);
    const plan = [[null, 0.4], [0.44, 0.66], [0.7, null]];
    etapes.forEach((ls, e) => {
      const idx = ls.map((l) => toutes.indexOf(l));
      if (e === 0) gsap.set(ls, { x: 0, y: 0, rotation: 0, scale: 1 });
      else tl.to(ls, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.1, ease: 'power3.out', stagger: { each: 0.002, from: 'random' } }, plan[e][0]);
      if (plan[e][1] != null) tl.to(ls, { x: (j) => dansBac[idx[j]].x, y: (j) => dansBac[idx[j]].y, rotation: (j) => dansBac[idx[j]].rotation, scale: 0.42, duration: 0.04, ease: 'power2.in', stagger: { each: 0.001, from: 'random' } }, plan[e][1]);
    });
    tl.to({}, { duration: 0.04 }, 0.96);
    let plonge = false;
    const rangs = $$('.boite-rangee', boiteEl);
    const versDedans = (oui) => {
      if (oui === plonge) return; plonge = oui;
      if (oui) { const m = lireMot(); boiteEl.dataset.avant = rangs.map((r) => r.textContent.replace(/\s+/g, ' ').trim()).join('|');
        const ph = etapes[0].length ? [$$('.rail .phrase-mot[data-etape="0"]', sec)[0], $$('.rail .phrase-mot[data-etape="0"]', sec)[1]].map((x) => (x ? x.textContent.replace(/\s+/g, ' ').trim() : '')) : ['', ''];
        rangs[0].innerHTML = lettresHtml(m ? m.tuile : ($('[data-rail-mot]').dataset.defaut || 'ENSEMBLE')); rangs[1].innerHTML = lettresHtml(ph[0]); rangs[2].innerHTML = lettresHtml(ph[1]);
        boiteEl.classList.add('allumee');
      } else if (boiteEl.dataset.avant) { const v = boiteEl.dataset.avant.split('|'); rangs.forEach((r, k) => { r.innerHTML = lettresHtml(v[k] || ''); }); if (!lireMot()) boiteEl.classList.remove('allumee'); }
    };
    st = window.ScrollTrigger.create({
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.35, animation: tl, invalidateOnRefresh: false,
      onUpdate: (x) => {
        const p = x.progress; versDedans(p > 0.03);
        const fen = [[0.22, 0.4], [0.55, 0.65], [0.83, 1.01]];
        legendes.forEach((l, n) => l.classList.toggle('actif', p >= fen[n][0] && p < fen[n][1]));
      },
    });
  };
  /* attendre que les polices et la mise en page soient posées */
  construire();
  let attente = null;
  quand('rafraichi', () => { if (scrollY > sec.offsetTop + 10) return; clearTimeout(attente); attente = setTimeout(construire, 150); });
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
  const repos = gsap.to(boiteEl, { scale: 1.035, '--lueur': 0.36, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, paused: true });
  const io = new IntersectionObserver(([e]) => (e.isIntersecting ? repos.play() : repos.pause())); io.observe(z);
  const inspirer = (e) => {
    e.preventDefault(); if (enCours) return; enCours = true; repos.pause();
    poserRangee(rang[1], T.in, { pas: 0.02 });
    anim && anim.kill();
    anim = gsap.to(boiteEl, { scale: 1.12, '--lueur': 0.6, duration: 4, ease: 'sine.out' });
  };
  const expirer = () => {
    if (!enCours) return; enCours = false; n += 1;
    if (compte) compte.textContent = `${Math.min(n, 3)} / 3`;
    poserRangee(rang[1], n >= 3 ? T.fin : T.out, { pas: 0.02 });
    anim && anim.kill();
    anim = gsap.to(boiteEl, { scale: 1, '--lueur': 0.2, duration: 5, ease: 'sine.inOut', onComplete: () => { if (n >= 3) { n = 0; } repos.play(); } });
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
    r.innerHTML = [v('seance'), v('lieu'), moments, champMot && champMot.value ? `« ${ech(champMot.options[champMot.selectedIndex].text)} »` : ''].filter(Boolean).map((x) => `<span class="tuile tuile--mini">${ech(x)}</span>`).join('');
  };
  f.addEventListener('change', recap);
  $$('[data-suivant]', f).forEach((b) => b.addEventListener('click', () => { if (valide(i)) montrer(i + 1); }));
  $$('[data-precedent]', f).forEach((b) => b.addEventListener('click', () => montrer(i - 1)));
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!valide(i)) return;
    const envoi = $('[type="submit"]', f); envoi.disabled = true;
    const boiteEl = $('[data-boite-recue]'), rang = $$('.boite-rangee', boiteEl);
    const tuilesVol = $$('[data-recap] .tuile', f);
    const fin = () => {
      $('[data-demande-corps]', f).hidden = true;
      $('[data-demande-recue]').hidden = false;
      boiteEl.classList.add('allumee');
      const lignes = (boiteEl.dataset.recu || 'DEMANDE|REÇUE').split('|');
      poserRangee(rang[0], lignes[0]); poserRangee(rang[1], lignes[1], { delai: 0.2 });
      const msg = $('[data-message-envoi]'); if (msg) msg.focus({ preventScroll: true });
      const cible = $('#demande'); if (cible) window.scrollTo({ top: cible.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 12 });
    };
    if (!gsap || !tuilesVol.length) return fin();
    const rb = boiteEl.getBoundingClientRect();
    tuilesVol.forEach((t, k) => {
      const r = t.getBoundingClientRect();
      const c = t.cloneNode(true); c.classList.add('tuile-vol'); c.setAttribute('aria-hidden', 'true');
      Object.assign(c.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, margin: 0, zIndex: 900 });
      document.body.appendChild(c);
      gsap.to(c, { x: rb.left + rb.width / 2 - r.left - r.width / 2, y: rb.top + rb.height / 2 - r.top - r.height / 2, rotation: (k % 2 ? 12 : -10), scale: 0.5, opacity: 0, duration: 0.7, delay: k * 0.08, ease: 'power2.in', onComplete: () => c.remove() });
    });
    gsap.delayedCall(0.7 + tuilesVol.length * 0.08, fin);
  });
  $('[data-recommencer]') && $('[data-recommencer]').addEventListener('click', () => {
    f.reset(); $('[data-demande-corps]', f).hidden = false; $('[data-demande-recue]').hidden = true; $('[type="submit"]', f).disabled = false;
    const boiteEl = $('[data-boite-recue]'); boiteEl.classList.remove('allumee'); $$('.boite-rangee', boiteEl).forEach((r) => { r.innerHTML = ''; });
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
    .fromTo('.surtitre[data-anime="gsap"], .ouverture-chapo, .ouverture-actions, .info-cle, .indice, .page-chapo, .page-actions', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, t0 + 0.15);
  if (!deja) tl.call(() => montrerLettres($('.boite--accueil')), null, t0 + 0.1);
  tl.call(() => poserTitre(0), null, t0 + 0.05);
  if ($('.tuiles') && !deja) tl.call(() => $('.tuiles').classList.add('vues'), null, t0 + 0.34).fromTo('.tuiles .tuile--mot', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'back.out(1.8)' }, t0 + 0.35);
  if (boite && !deja) tl.call(() => boite.demo(), null, t0 + 0.2);
}
