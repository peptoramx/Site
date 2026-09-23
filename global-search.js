// Site-wide, client-side search. It uses the same PEPTORA product registry as
// the catalogue and also indexes the original educational routes.
document.addEventListener('DOMContentLoaded', () => {
  const ui = document.createElement('div');
  ui.className = 'global-search-ui';
  ui.innerHTML = `<button class="global-search-trigger" type="button" aria-label="Search PEPTORA">⌕ <span>SEARCH</span></button><div class="global-search-dialog" hidden><div class="global-search-panel" role="dialog" aria-modal="true" aria-label="Search PEPTORA"><div class="global-search-top"><input type="search" placeholder="Search compounds, pathways, guides" aria-label="Search PEPTORA"><button type="button" aria-label="Close search">×</button></div><p class="global-search-hint">COMPOUNDS · PATHWAYS · GUIDES · BRIEFS</p><div class="global-search-results"></div></div></div>`;
  document.body.appendChild(ui);
  const trigger = ui.querySelector('.global-search-trigger');
  const dialog = ui.querySelector('.global-search-dialog');
  const input = ui.querySelector('input');
  const results = ui.querySelector('.global-search-results');
  const close = () => { dialog.hidden = true; trigger.focus(); };
  const open = () => { dialog.hidden = false; input.value = ''; render(''); input.focus(); };
  const guides = [
    ['Essential research guides', 'mechanism evidence concentration vocabulary', 'learn.html'],
    ['Metabolic health guide', 'GLP-1 GIP glucagon incretin body composition', 'learn.html#metabolic'],
    ['Recovery & tissue guide', 'BPC TB-500 GHK-Cu KPV GLOW KLOW', 'learn.html#recovery'],
    ['Cognition guide', 'Semax Selank BDNF neural stress', 'learn.html#cognition'],
    ['Longevity guide', 'MOTS-c NAD mitochondria cellular', 'learn.html#longevity'],
    ['Evidence ladder', 'mechanistic preclinical clinical regulatory', 'learn.html#evidence'],
    ['Reference calculator', 'concentration mg mL mcg U-100 clicks', 'tools.html'],
    ['Research briefs', 'primary sources GLP-1 GH neuroscience tissue mitochondria', 'research.html']
  ];
  const products = typeof PEPTORA_PRODUCTS === 'undefined' ? [] : PEPTORA_PRODUCTS.map(p => ({
    name: typeof p.name === 'string' ? p.name : p.name.en,
    text: [typeof p.name === 'string' ? p.name : p.name.en, p.desc?.en, p.mech?.en, p.interest?.en, p.cat].join(' '),
    href: `index.html?compound=${encodeURIComponent(typeof p.name === 'string' ? p.name : p.name.en)}#productos`, type: 'COMPOUND'
  }));
  function render(query) {
    const q = query.trim().toLowerCase();
    const items = q ? [
      ...products.filter(item => item.text.toLowerCase().includes(q)).map(item => ({...item, label:item.name})),
      ...guides.filter(item => item.join(' ').toLowerCase().includes(q)).map(item => ({label:item[0], href:item[2], type:'GUIDE'}))
    ].slice(0, 12) : guides.slice(0, 6).map(item => ({label:item[0], href:item[2], type:'GUIDE'}));
    results.innerHTML = items.length ? items.map(item => `<a href="${item.href}"><small>${item.type}</small><span>${item.label}</span><b>↗</b></a>`).join('') : '<p class="global-search-empty">No matching PEPTORA reference.</p>';
  }
  trigger.addEventListener('click', open); ui.querySelector('.global-search-top button').addEventListener('click', close);
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  input.addEventListener('input', () => render(input.value));
  window.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); dialog.hidden ? open() : close(); } if (event.key === 'Escape' && !dialog.hidden) close(); });
});

