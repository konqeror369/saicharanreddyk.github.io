/* main.js — reads window.PORTFOLIO, renders all sections, attaches UI behaviors */

const P = PORTFOLIO;

/* ── Helpers ──────────────────────────────────────────────────── */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

/* ── Render: Hero (includes bio) ─────────────────────────────── */
function renderIntro() {
  const sec = qs('#intro');
  const { bio } = P.about;
  sec.innerHTML = `
    <div class="container">
      <p class="intro-eyebrow" data-reveal>Software Developer · Average Gamer</p>
      <h1 class="intro-name" data-reveal>${P.name}</h1>
      <p class="intro-tagline" data-reveal>${P.tagline}</p>
      <div class="intro-bio" data-reveal>
        ${(() => {
          const [intro, ...bullets] = bio.split('\n').filter(Boolean);
          return `<p>${intro}</p>` +
            (bullets.length ? `<ul class="intro-bio-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '');
        })()}
      </div>
      <div class="intro-ctas" data-reveal>
        <a href="#education" class="btn btn-primary">Learn More</a>
        <a href="#contact" class="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  `;
}

/* ── Render: Education ────────────────────────────────────────── */
function renderEducation() {
  const sec = qs('#education');
  const entries = P.about.education.map(e => `
    <div class="edu-entry" data-reveal>
      <div class="edu-entry-left">
        <div class="edu-entry-degree">${e.degree}</div>
        <div class="edu-entry-institution">${e.institution}</div>
        <div class="edu-entry-board">${e.board}</div>
      </div>
      <div class="edu-entry-years">${e.years}</div>
    </div>
  `).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">Academic</p>
      <h2 class="section-title">Education</h2>
      <div class="edu-entries">${entries}</div>
    </div>
  `;
}

/* ── Render: Experience ───────────────────────────────────────── */
function renderExperience() {
  const sec = qs('#experience');
  const items = P.experience.map(job => `
    <div class="timeline-item" data-reveal>
      <div class="timeline-meta">
        <span class="timeline-title">${job.title}</span>
        <span class="timeline-company">${job.company}</span>
        <span class="timeline-period">${job.period}</span>
      </div>
      <ul class="timeline-bullets">
        ${job.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">Work</p>
      <h2 class="section-title">Experience</h2>
      <div class="timeline">${items}</div>
    </div>
  `;
}

/* ── Render: Skills ───────────────────────────────────────────── */
function renderSkills() {
  const sec = qs('#skills');
  const groups = Object.entries(P.skills).map(([group, tags]) => `
    <div class="skill-group" data-reveal>
      <div class="skill-group-name">${group}</div>
      <div class="skill-tags">
        ${tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">Technical</p>
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">${groups}</div>
    </div>
  `;
}

/* ── Render: Certifications (hyperlinks) ──────────────────────── */
function renderCertifications() {
  const sec = qs('#certifications');
  const cards = P.certifications.map(cert => {
    const badge = cert.issuer.includes('Oracle') ? 'OCI' : 'AWS';
    return `
      <a class="cert-card" data-reveal href="${cert.url}" target="_blank" rel="noopener">
        <div class="cert-badge">${badge}</div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-link">View certificate</div>
      </a>
    `;
  }).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">Credentials</p>
      <h2 class="section-title">Certifications</h2>
      <div class="certs-grid">${cards}</div>
    </div>
  `;
}

/* ── Lightbox ─────────────────────────────────────────────────── */
function openLightbox(name, imgSrc) {
  const lb = qs('#lightbox');
  const content = qs('#lightbox-content');
  const actions = qs('#lightbox-actions');

  const img = new Image();
  img.onload = () => {
    content.innerHTML = '';
    const i = el('img', 'lightbox-img');
    i.src = imgSrc;
    i.alt = name;
    content.appendChild(i);
  };
  img.onerror = () => {
    content.innerHTML = `
      <div class="lightbox-placeholder">
        <div class="ph-label">${name}<br><span style="color:var(--muted);font-size:0.7rem">Image coming soon</span></div>
      </div>
    `;
  };
  img.src = imgSrc;

  actions.innerHTML = '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  qs('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Render: Awards (photo cards) ────────────────────────────── */
function renderAwards() {
  const sec = qs('#awards');
  const cards = P.awards.map(a => `
    <div class="award-card" data-reveal data-name="${a.name}" data-img="${a.image}">
      <div class="award-thumb">
        <img src="${a.image}" alt="${a.name}" class="award-thumb-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="award-thumb-ph" style="display:none">
          <span>${a.name[0]}</span>
        </div>
        <div class="award-thumb-overlay">
          <span>Click to enlarge</span>
        </div>
      </div>
      <div class="award-body">
        <div class="award-name">${a.name}</div>
        <div class="award-context">${a.context}</div>
      </div>
    </div>
  `).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">Recognition</p>
      <h2 class="section-title">Awards</h2>
      <div class="awards-grid">${cards}</div>
    </div>
  `;

  qs('#awards').addEventListener('click', e => {
    const card = e.target.closest('.award-card');
    if (!card) return;
    openLightbox(card.dataset.name, card.dataset.img);
  });
}

/* ── Render: Mentorship ───────────────────────────────────────── */
function renderMentorship() {
  const sec = qs('#mentorship');
  const items = P.mentorship.map(m => `<li data-reveal>${m}</li>`).join('');

  sec.innerHTML = `
    <div class="container">
      <p class="section-label">More</p>
      <h2 class="section-title">Mentorship & Initiatives</h2>
      <ul class="mentorship-list">${items}</ul>
    </div>
  `;
}

/* ── Render: Contact ──────────────────────────────────────────── */
function renderContact() {
  const sec = qs('#contact');

  const phoneLink = P.phone ? `
    <a href="tel:${P.phone.replace(/\s/g, '')}" class="contact-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z"/>
      </svg>
      ${P.phone}
    </a>
  ` : '';

  const emailLink = `
    <a href="mailto:${P.email}" class="contact-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      ${P.email}
    </a>
  `;

  const linkedinLink = P.linkedin ? `
    <a href="${P.linkedin}" target="_blank" rel="noopener" class="contact-link">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
      LinkedIn
    </a>
  ` : '';

  const githubLink = P.github ? `
    <a href="${P.github}" target="_blank" rel="noopener" class="contact-link">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
      GitHub
    </a>
  ` : '';

  sec.innerHTML = `
    <div class="container">
      <div class="contact-inner">
        <p class="section-label">Contact</p>
        <h2 class="section-title">Get in Touch</h2>
        <p class="contact-tagline">Open to new opportunities</p>
        <div class="contact-links" data-reveal>
          ${phoneLink}${emailLink}${linkedinLink}${githubLink}
        </div>
      </div>
    </div>
  `;
}

/* ── Render: Footer ───────────────────────────────────────────── */
function renderFooter() {
  qs('#footer').textContent = `© ${new Date().getFullYear()} ${P.name} · saicharanreddyk.com`;
}

/* ── Nav: scroll spy + scrolled state ────────────────────────── */
function initNav() {
  const nav = qs('#nav');
  const links = qsa('#nav-links a');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const sections = qsa('main section[id]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => spy.observe(s));
}

/* ── Nav: hamburger ───────────────────────────────────────────── */
function initHamburger() {
  const btn = qs('#hamburger');
  const overlay = qs('#nav-overlay');

  btn.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  overlay.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      overlay.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Scroll reveal ────────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  qsa('[data-reveal]').forEach(el => observer.observe(el));
}

/* ── Lightbox events ──────────────────────────────────────────── */
function initLightbox() {
  qs('#lightbox-close').addEventListener('click', closeLightbox);
  qs('#lightbox').addEventListener('click', e => {
    if (e.target === qs('#lightbox')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ── Section scroll nav (right-side) ─────────────────────────── */
function initSectionNav() {
  const LABELS = { intro: 'Home', education: 'Education', experience: 'Experience', skills: 'Skills', certifications: 'Certs', awards: 'Awards', mentorship: 'More', contact: 'Contact' };
  const sections = Array.from(qsa('main section[id]'));
  const nav = qs('#scroll-nav');

  const items = sections.map((s, i) => {
    const a = document.createElement('a');
    a.href = `#${s.id}`;
    a.innerHTML = `<span class="snav-label">${LABELS[s.id] || s.id}</span><span class="snav-dot"></span>`;
    a.addEventListener('click', e => { e.preventDefault(); s.scrollIntoView({ behavior: 'smooth' }); });
    nav.appendChild(a);
    return a;
  });

  function getCurrentIdx() {
    const mid = window.scrollY + window.innerHeight * 0.4;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= mid) idx = i;
    }
    return idx;
  }

  function update() {
    const cur = getCurrentIdx();
    items.forEach((a, i) => {
      const dist = Math.abs(i - cur);
      a.className = dist === 0 ? 'snav-active' : dist === 1 ? 'snav-near' : '';
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Boot ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderIntro();
  renderEducation();
  renderExperience();
  renderSkills();
  renderCertifications();
  renderAwards();
  renderMentorship();
  renderContact();
  renderFooter();

  initNav();
  initHamburger();
  initReveal();
  initLightbox();
  initSectionNav();
});
