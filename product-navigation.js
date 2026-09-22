// Direct, meaningful paths from editorial entry points to the relevant
// reference card. The catalog remains the source of truth; this only opens,
// focuses and explains the destination through its visible card.
document.addEventListener('DOMContentLoaded', () => {
  const objectiveTargets = ['Retatrutide', 'CJC-1295 (No DAC)', 'BPC-157', 'Semax', 'MOTS-c', 'NAD+', 'Tesamorelin', 'GLOW'];

  function focusReference(name) {
    const catalog = document.querySelector('.catalog-details');
    const grid = document.getElementById('productGrid');
    if (!catalog || !grid) return;
    catalog.open = true;
    if (typeof setCatalogFilter === 'function') setCatalogFilter('all');
    const card = [...grid.querySelectorAll('.product-card')].find(item => item.querySelector('h4')?.textContent.trim() === name);
    if (!card) return;
    document.querySelectorAll('.product-card.product-focus').forEach(item => item.classList.remove('product-focus'));
    card.classList.add('product-focus');
    card.querySelector('.pc-context')?.setAttribute('open', '');
    requestAnimationFrame(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  document.addEventListener('click', event => {
    const objective = event.target.closest('.objective-list a');
    if (objective) {
      const target = objectiveTargets[[...document.querySelectorAll('.objective-list a')].indexOf(objective)];
      if (target) { event.preventDefault(); event.stopImmediatePropagation(); focusReference(target); }
      return;
    }
    const featured = event.target.closest('.featured-card');
    if (featured) {
      event.preventDefault(); event.stopImmediatePropagation();
      const name = featured.querySelector('h3')?.textContent.trim();
      if (name) focusReference(name);
    }
  }, true);

  const requestedCompound = new URLSearchParams(window.location.search).get('compound');
  if (requestedCompound) window.setTimeout(() => focusReference(requestedCompound), 80);
});

