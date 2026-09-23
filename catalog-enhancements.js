// Adds information architecture to the existing product cards without
// duplicating the source registry in script.js.
document.addEventListener('DOMContentLoaded', () => {
  const related = {
    'Retatrutide':['Tirzepatide','Cagrilintide','Mazdutide'], 'Semax':['Selank','Cerebrolysin','DSIP'],
    'Selank':['Semax','DSIP'], 'GLOW':['BPC-157','TB-500 (Thymosin B4 Acetate)','GHK-Cu','KPV'],
    'KLOW':['GLOW','BPC-157','TB-500 (Thymosin B4 Acetate)','GHK-Cu','KPV'],
    'MOTS-c':['NAD+','SS-31','Epitalon'], 'Tesamorelin':['CJC-1295 (No DAC)','Ipamorelin','HGH Fragment 176-191'],
    'CJC-1295 (No DAC)':['CJC-1295 (With DAC)','Ipamorelin','Tesamorelin'], 'NAD+':['MOTS-c','SS-31','Glutathione'],
    'BPC-157':['TB-500 (Thymosin B4 Acetate)','GHK-Cu','GLOW']
  };
  const evidence = {Retatrutide:'CLINICAL', Tesamorelin:'REGULATORY', Semax:'PRECLINICAL', Selank:'PRECLINICAL', 'MOTS-c':'MECHANISTIC', 'NAD+':'MECHANISTIC', 'BPC-157':'PRECLINICAL', GLOW:'PRECLINICAL', KLOW:'PRECLINICAL', 'CJC-1295 (No DAC)':'PRECLINICAL'};
  const typeFor = card => card.dataset.cat === 'supplies' ? 'tool' : card.dataset.cat === 'stacks' ? 'combination' : 'compound';
  function enhance() {
    document.querySelectorAll('.product-card').forEach(card => {
      if (card.dataset.enhanced) return;
      card.dataset.enhanced = 'true'; card.dataset.type = typeFor(card);
      const name = card.querySelector('h4')?.textContent.trim(); const level = evidence[name] || 'RESEARCH';
      const tag = document.createElement('span'); tag.className = `pc-evidence pc-evidence-${level.toLowerCase()}`; tag.textContent = level; card.querySelector('.pc-cat')?.after(tag);
      if (related[name]) {
        const block = document.createElement('div'); block.className = 'pc-related';
        block.innerHTML = `<b>RELATED REFERENCES</b><div>${related[name].map(item => `<a href="index.html?compound=${encodeURIComponent(item)}#productos">${item}</a>`).join('')}</div>`;
        card.appendChild(block);
      }
    });
  }
  const grid = document.getElementById('productGrid'); if (!grid) return; enhance(); new MutationObserver(enhance).observe(grid,{childList:true});
  const row = document.createElement('div'); row.className = 'type-filter-row'; row.innerHTML = '<span>VIEW</span><button data-type="all" class="active">ALL TYPES</button><button data-type="compound">COMPOUNDS</button><button data-type="combination">COMBINATIONS</button><button data-type="tool">LAB TOOLS</button>';
  document.getElementById('filterRow')?.after(row);
  function setType(button) { row.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===button)); const type=button.dataset.type; document.querySelectorAll('.product-card').forEach(card=>card.hidden=type!=='all'&&card.dataset.type!==type); }
  document.addEventListener('click', event => { const button=event.target.closest('.type-filter-row button'); if(!button)return; event.preventDefault(); event.stopImmediatePropagation(); setType(button); }, true);
});

