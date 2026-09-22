// Lightweight, bilingual catalog search. It operates on the rendered cards
// and reapplies after category navigation rebuilds the reference grid.
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('productSearch');
  const grid = document.getElementById('productGrid');
  const count = document.getElementById('productCount');
  if (!input || !grid) return;

  function placeholder() {
    input.placeholder = document.documentElement.lang === 'es'
      ? 'Buscar compuesto, vía o categoría'
      : 'Search compound, pathway or category';
  }
  function apply() {
    const term = input.value.trim().toLowerCase();
    const cards = [...grid.querySelectorAll('.product-card')];
    let visible = 0;
    cards.forEach(card => {
      const show = !term || card.textContent.toLowerCase().includes(term);
      card.hidden = !show;
      if (show) visible++;
    });
    if (count && term) count.textContent = document.documentElement.lang === 'es' ? `${visible} resultados` : `${visible} results`;
  }
  input.addEventListener('input', apply);
  new MutationObserver(apply).observe(grid, { childList: true });
  new MutationObserver(() => { placeholder(); apply(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  placeholder();
});
