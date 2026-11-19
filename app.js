'use strict';

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#case-dialog');
const caseContent = document.querySelector('#case-content');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
let currentFilter = 'all';
let lastProjectTrigger;

const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const externalLink = (url, label, className = '') => `<a class="${className}" href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`;
const stackHTML = stack => stack.map(([name, icon]) => `<span class="tech"><img src="assets/icons/${icon}" alt="" width="15" height="15">${escapeHTML(name)}</span>`).join('');

function renderProjects() {
  const projects = PROJECTS.filter(project => currentFilter === 'all' || project.category === currentFilter);
  grid.innerHTML = projects.map(project => {
    const featured = currentFilter === 'all' && project.featured === true;
    return `<article class="project-card${featured ? ' project-card--featured' : ''}">
      <button class="project-image-button" type="button" data-project="${project.id}" aria-label="Read the ${escapeHTML(project.name)} case study">
        <div class="project-image"><img src="${project.image}" alt="${escapeHTML(project.alt)}" loading="lazy"></div>
        <span class="image-label mono">${escapeHTML(project.imageType)}</span>
      </button>
      <div class="project-content">
        <p class="project-label mono">${escapeHTML(project.label)}</p>
        <div class="project-heading"><h3>${escapeHTML(project.name)}</h3></div>
        <p class="project-headline">${escapeHTML(project.headline)}</p>
        <p class="project-description">${escapeHTML(project.description)}</p>
        <div class="project-stack" aria-label="Technology stack">${stackHTML(project.stack)}</div>
        <div class="project-actions"><button class="case-button" type="button" data-project="${project.id}">Read project details <span aria-hidden="true">↗</span></button><div>${project.code ? externalLink(project.code, 'Code') : ''}${project.live ? externalLink(project.live, 'Live app') : ''}</div></div>
      </div>
    </article>`;
  }).join('');
  document.querySelector('#project-count').textContent = `${projects.length} project${projects.length === 1 ? '' : 's'}`;
}

filterButtons.forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filterButtons.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  renderProjects();
}));

grid.addEventListener('click', event => {
  const trigger = event.target.closest('[data-project]');
  if (!trigger) return;
  const project = PROJECTS.find(item => item.id === trigger.dataset.project);
  if (!project) return;
  lastProjectTrigger = trigger;
  caseContent.innerHTML = `<p class="eyebrow">Project details · ${escapeHTML(project.label)}</p><h2 id="case-title">${escapeHTML(project.name)}</h2><p class="case-intro">${escapeHTML(project.headline)}</p><div class="case-image"><img src="${project.image}" alt="${escapeHTML(project.alt)}"></div><p class="case-caption">${escapeHTML(project.sourceNote)}</p><div class="case-section"><h3>The problem</h3><p>${escapeHTML(project.problem)}</p></div><div class="case-section"><h3>What I built</h3><ul>${project.built.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></div><div class="case-section"><h3>What to keep in mind</h3><p>${escapeHTML(project.tradeoff)}</p></div><div class="case-section"><h3>Engineering focus</h3><p>${escapeHTML(project.focus)}</p><div class="project-stack">${stackHTML(project.stack)}</div></div><div class="case-links">${project.code ? externalLink(project.code, 'Explore the code', 'button button-primary') : ''}${project.live ? externalLink(project.live, 'Open live app', 'button button-secondary') : ''}</div>`;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
});

document.querySelector('.case-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (lastProjectTrigger?.isConnected) lastProjectTrigger.focus({preventScroll:true});
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

document.querySelector('#copy-email').addEventListener('click', async () => {
  const email = 'ngthanhtinqn@gmail.com';
  const status = document.querySelector('#copy-status');
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(email);
    else {
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(field);
      try {
        field.select();
        if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
      } finally { field.remove(); }
    }
    status.textContent = 'Email copied. Thanks for reaching out!';
  } catch {
    status.textContent = 'You can select the email address above, or click it to send a message.';
  }
});

renderProjects();
