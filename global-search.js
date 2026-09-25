// Shared bilingual search: one registry, visible outcomes, keyboard-native dialog.
document.addEventListener('DOMContentLoaded',()=>{
 const lang=()=>document.documentElement.lang==='es'?'es':'en';
 const t=(en,es)=>lang()==='es'?es:en;
 const normalize=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const button=document.createElement('button');button.type='button';button.className='site-search-button';
 const dialog=document.createElement('dialog');dialog.id='siteSearch';dialog.setAttribute('aria-label','Search PEPTORA');
 dialog.innerHTML='<div class="search-top"><label><span></span><input type="search" autocomplete="off"></label><button class="search-close" type="button">×</button></div><p class="search-status" aria-live="polite"></p><div class="search-results"></div>';
 (document.querySelector('.header-actions,.header-cta')||document.body).prepend(button);document.body.append(dialog);
 const input=dialog.querySelector('input'),results=dialog.querySelector('.search-results'),status=dialog.querySelector('.search-status');
 const guides=[
 ['Essential guides','Guías esenciales','mechanism mechanisms evidence mecanismos evidencia','learn.html'],
 ['Metabolic health','Salud metabólica','GLP-1 GIP glucagon incretin metabolism metabolismo','learn.html#metabolic'],
 ['Recovery research','Investigación de recuperación','BPC TB-500 GHK-Cu KPV GLOW KLOW tissue tejidos','learn.html#recovery'],
 ['Cognition research','Investigación de cognición','Semax Selank BDNF neural stress estrés','learn.html#cognition'],
 ['Longevity research','Investigación de longevidad','MOTS-c NAD mitochondria celular mitocondria','learn.html#longevity'],
 ['Body composition','Composición corporal','GH growth hormone visceral grasa','learn.html#body'],
 ['Reading evidence','Leer la evidencia','mechanistic preclinical clinical regulatory mecanistica preclinica clinica regulatoria','learn.html#evidence'],
 ['Reference calculator','Calculadora de referencia','concentration volumen mg mL mcg U-100 clicks clics','tools.html'],
 ['Research briefs & sources','Research briefs y fuentes','primary sources fuentes estudios GH neuroscience mitochondria','research.html']
 ];
 function render(){
  const q=normalize(input.value).trim();
  const products=typeof PEPTORA_PRODUCTS==='undefined'?[]:PEPTORA_PRODUCTS.map(p=>{
   const stable=typeof p.name==='string'?p.name:p.name.en,name=typeof p.name==='string'?p.name:p.name[lang()];
   const lens=typeof BIOHACKING_LENS_BY_PRODUCT==='undefined'?null:BIOHACKING_LENS_BY_PRODUCT[lang()][stable];
   const community=typeof PEPTORA_COMMUNITY==='undefined'?null:PEPTORA_COMMUNITY[stable];
   return {name,text:[stable,name,p.desc.en,p.desc.es,p.mech.en,p.mech.es,lens?.objective,lens?.community,community?.en.context,community?.es.context,community?.en.summary,community?.es.summary].join(' '),href:'index.html?compound='+encodeURIComponent(stable)+'#productos',type:t('Reference','Referencia')};
  });
  const entries=[...guides.map(g=>({name:g[lang()==='es'?1:0],text:g.slice(0,3).join(' '),href:g[3],type:t('Learn / tools','Guía / herramientas')})),...products];
  const matching=q?entries.filter(e=>normalize(e.text).includes(q)):entries.slice(0,6);
  results.replaceChildren();
  matching.slice(0,15).forEach(e=>{const a=document.createElement('a'),name=document.createElement('span'),kind=document.createElement('small');name.textContent=e.name;kind.textContent=e.type+' ↗';const u=new URL(e.href,location.href);u.searchParams.set('lang',lang());a.href=u.pathname+u.search+u.hash;a.append(name,kind);results.append(a);});
  status.textContent=!q?t('Start with a guide, or search any compound.','Empieza con una guía o busca un compuesto.'):!matching.length?t('No matches. Try a compound name or a different term.','Sin resultados. Prueba el nombre del compuesto u otro término.'):matching.length+t(' results',' resultados')+(matching.length>15?t(' · showing the first 15',' · se muestran los primeros 15'):'');
 }
 function labels(){button.textContent=t('Search','Buscar');button.setAttribute('aria-label',t('Search PEPTORA','Buscar en PEPTORA'));dialog.setAttribute('aria-label',button.getAttribute('aria-label'));dialog.querySelector('label span').textContent=t('Search PEPTORA','Buscar en PEPTORA');input.placeholder=t('Compound, objective, mechanism or guide','Compuesto, objetivo, mecanismo o guía');dialog.querySelector('.search-close').setAttribute('aria-label',t('Close search','Cerrar búsqueda'));if(dialog.open)render();}
 button.addEventListener('click',()=>{labels();input.value='';render();dialog.showModal();input.focus();});
 dialog.querySelector('.search-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>button.focus());
 input.addEventListener('input',render);
 document.getElementById('langToggle')?.addEventListener('click',labels);
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!document.querySelector('dialog[open]')){e.preventDefault();button.click();}});
 labels();
});

