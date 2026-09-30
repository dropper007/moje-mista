'use strict';
const categories = [
  { id: 'all', name: 'Všechny odkazy', icon: '▦' },
  { id: 'mail', name: 'Pošta', icon: '✉', color: '#bd283c', tint: '#ffedf0' },
  { id: 'info', name: 'Obecné', icon: '◉', color: '#2453b9', tint: '#eaf1ff' },
  { id: 'games', name: 'Hry', icon: '▦', color: '#39742a', tint: '#eaf5e5' },
  { id: 'todo', name: 'ToDo', icon: '✓', color: '#955908', tint: '#fff1db' }
];
let active = 'all';
const search = document.querySelector('#search');
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url : null; } catch { return null; }
}
function render() {
  const query = normalize(search.value.trim());
  const matches = window.PORTAL_LINKS.filter(item => (active === 'all' || item.category === active) && normalize([item.name, item.url || '', item.note || '', categories.find(c => c.id === item.category)?.name || ''].join(' ')).includes(query));
  document.querySelectorAll('.category').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.id === active)));
  document.querySelector('#view-title').textContent = categories.find(c => c.id === active).name;
  document.querySelector('#result-count').textContent = `${matches.length} z ${window.PORTAL_LINKS.length} odkazů`;
  const groups = document.querySelector('#groups');
  groups.replaceChildren();
  categories.slice(1).forEach(category => {
    const items = matches.filter(item => item.category === category.id);
    if (!items.length && (query || (active !== 'all' && active !== category.id))) return;
    const section = el('section', 'group');
    const title = el('h3', '', category.name);
    title.append(el('span', '', String(items.length)));
    if (!items.length) {
      section.append(title, el('div', 'category-empty', category.id === 'todo' ? 'Místo pro odkazy na věci, ke kterým se chceš vrátit a dokončit je.' : 'Zatím tu nejsou žádné odkazy.'));
      groups.append(section);
      return;
    }
    const grid = el('div', 'grid');
    items.forEach(item => {
      const url = safeUrl(item.url);
      const card = el(url ? 'a' : 'div', `card${url ? '' : ' pending'}`);
      if (url) { card.href = url.href; card.target = '_blank'; card.rel = 'noopener noreferrer'; card.setAttribute('aria-label', `${item.name} — otevřít v nové kartě`); }
      const isVideo = url && /(^|\.)(youtube\.com|youtu\.be)$/.test(url.hostname);
      const icon = el('span', 'icon', item.icon || (isVideo ? '▶' : category.icon));
      icon.setAttribute('aria-hidden', 'true');
      icon.style.setProperty('--ink', item.color || (isVideo ? '#c62132' : category.color));
      icon.style.setProperty('--tint', item.tint || (isVideo ? '#ffedf0' : category.tint));
      card.append(icon, el('strong', '', item.name), el('span', 'domain', url ? url.hostname.replace(/^www\./, '') : 'Doplnit platnou adresu'));
      if (item.note) card.append(el('span', 'state', item.note));
      grid.append(card);
    });
    section.append(title, grid); groups.append(section);
  });
  document.querySelector('#empty').hidden = matches.length !== 0 || !query;
}
categories.forEach(category => {
  const button = el('button', 'category');
  button.type = 'button'; button.dataset.id = category.id;
  const icon = el('span', 'nav-icon', category.icon); icon.setAttribute('aria-hidden', 'true');
  button.append(icon, el('span', '', category.name), el('span', 'count', String(window.PORTAL_LINKS.filter(item => category.id === 'all' || category.id === item.category).length)));
  button.addEventListener('click', () => { active = category.id; render(); });
  document.querySelector('#categories').append(button);
});
search.addEventListener('input', render);
document.querySelector('#search-form').addEventListener('submit', event => event.preventDefault());
document.querySelector('#reset').addEventListener('click', () => { search.value = ''; active = 'all'; render(); search.focus(); });
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) { event.preventDefault(); search.focus(); }
  if (event.key === 'Escape' && document.activeElement === search) { search.value = ''; render(); }
});
document.querySelector('#total').textContent = `${window.PORTAL_LINKS.length} odkazů · ${categories.length - 1} kategorie`;
render();
