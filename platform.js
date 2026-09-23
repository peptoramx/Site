/* Homepage interaction layer. The existing registry remains the source of truth. */
(() => {
'use strict';
const es={
skip:'Saltar al contenido',navExplore:'Explorar',navIndex:'Índice de compuestos',navLearn:'Aprender',navTools:'Calculadora',navAbout:'Nosotros',navResearch:'Research briefs',navContact:'Contacto',
heroEyebrow:'PEPTORA / EL SISTEMA HUMANO',heroTitle:'CIENCIA DE PÉPTIDOS<br>PARA LA ERA DEL<br><span>BIOHACKING.</span>',heroIntro:'Conoce el compuesto. Entiende el sistema. Explora la ciencia detrás del rendimiento, la recuperación y la longevidad.',heroExplore:'Encuentra tu punto de partida ↗',heroLearn:'¿Nuevo en ciencia de péptidos? Empieza aquí →',heroNote:'Educación independiente. Investigación en contexto.',heroAbout:'Conoce PEPTORA →',heroCaption:'Explora lo que te mueve.',
explorerLabel:'TU PUNTO DE PARTIDA',explorerTitle:'¿Qué quieres<br>entender?',explorerIntro:'Elige un objetivo. Conoce la pregunta biológica y explora los compuestos relacionados.',
selectedLabel:'EN FOCO',selectedTitle:'Ocho puertas a la<br>ciencia de péptidos.',selectedAll:'Consultar el índice completo →',indexLabel:'BIBLIOTECA DE REFERENCIA',indexTitle:'Encuentra un compuesto.',indexOpen:'Abrir índice +',
searchLabel:'Busca compuestos o mecanismos',searchPlaceholder:'Prueba Semax, AMPK o recuperación',filterObjective:'Objetivo',filterType:'Tipo de referencia',reset:'Restablecer filtros',
learnTitle:'Más contexto.<br>Más claridad.',learnIntro:'Empieza por entender qué significa un mecanismo, qué revela la evidencia y cómo leer una ficha.',learnAll:'Entrar a la biblioteca educativa →',
guide1:'Aprende a leer la evidencia',guide1p:'Del mecanismo biológico al hallazgo clínico.',guide2:'Explora un compuesto a fondo',guide2p:'Research briefs, comparaciones y fuentes en contexto.',guide3:'Entiende los números',guide3p:'Concentración y volumen de referencia, explicados juntos.',
aboutLabel:'POR QUÉ PEPTORA',aboutTitle:'Curiosidad.<br>Con contexto.',aboutIntro:'PEPTORA conecta la ciencia de péptidos con la educación en biohacking. Te ayudamos a entender los compuestos, los sistemas biológicos y la evidencia detrás de la conversación.',aboutText:'Nuestra biblioteca de referencia comenzó en 2024. Hoy reúne información de laboratorio e investigación sobre rendimiento humano, distinguiendo lo que se estudia de lo que está demostrado.',aboutMore:'Nuestro enfoque de investigación +',aboutMethod:'Distinguimos mecanismos, entornos de investigación y hallazgos. Los compuestos relacionados son puntos de partida para comparar, no productos intercambiables. Las referencias de laboratorio y las conversaciones educativas no establecen resultados de uso personal.',aboutContact:'Conversemos →',
contactLabel:'HABLEMOS',contactTitle:'Trae tu<br>pregunta.',contactIntro:'Preguntas de investigación, comentarios o una nueva colaboración. Queremos escucharte.',formName:'Nombre',formEmail:'Correo electrónico',formMessage:'Tu pregunta',formSend:'Enviar consulta ↗',
footerTag:'Ciencia de péptidos. Curiosidad humana.',disclaimer:'Solo educación y referencia de laboratorio. No es consejo médico ni instrucciones para uso humano o veterinario. Los materiales de investigación no son para consumo humano.'
};
const objectives = [
['metabolic','Metabolic','Metabolismo','Energy. Appetite. Signalling.','Energía. Apetito. Señalización.','Explore the pathways discussed in metabolic research, from incretin receptors to cellular energy.','Explora las vías de investigación metabólica, desde los receptores de incretinas hasta la energía celular.','peptora-cellular-ice-blue.jpg',['Retatrutide','Tirzepatide','Cagrilintide','Semaglutide']],
['performance','Performance','Rendimiento','The biology behind output.','La biología del rendimiento.','Explore exercise-metabolism and growth-hormone signalling research. A pathway is a question to study, not a promised result.','Explora la investigación del metabolismo del ejercicio y la señalización de la hormona de crecimiento. Una vía es una pregunta de estudio, no un resultado prometido.','peptora-performance-editorial.jpg',['MOTS-c','CJC-1295 (No DAC)','Ipamorelin','L-Carnitine']],
['recovery','Recovery','Recuperación','Understand the repair response.','Entiende la respuesta de reparación.','A starting point for tissue-response and inflammatory-signalling research. These references do not establish injury-treatment outcomes.','Un punto de partida para investigar respuestas de reparación y señalización inflamatoria. Estas referencias no establecen resultados de tratamiento de lesiones.','peptora-recovery-editorial.jpg',['BPC-157','TB-500 (Thymosin B4 Acetate)','KPV','GLOW','KLOW']],
['cognition','Cognition','Cognición','Different signals. Different questions.','Señales distintas. Preguntas distintas.','Explore neural plasticity, stress signalling and sleep research. Semax and Selank are distinct references, not interchangeable nootropics.','Explora plasticidad neural, señalización del estrés e investigación del sueño. Semax y Selank son referencias distintas, no nootrópicos intercambiables.','peptora-cognition-editorial.jpg',['Semax','Selank','DSIP','Cerebrolysin']],
['longevity','Longevity','Longevidad','Look closer at cellular time.','Observa el tiempo celular.','Mitochondria, redox biology and cellular aging: explore the research without confusing mechanisms with proven lifespan effects.','Mitocondrias, biología redox y envejecimiento celular: explora la investigación sin confundir mecanismos con efectos demostrados sobre la vida.','peptora-longevity-editorial.jpg',['MOTS-c','NAD+','SS-31','Epitalon','FOXO4']],
['cellular','Cellular health','Salud celular','Small signals. Connected systems.','Pequeñas señales. Sistemas conectados.','Navigate redox, mitochondrial and immune-signalling references at the cellular scale.','Explora referencias de señalización redox, mitocondrial e inmunitaria a escala celular.',null,['NAD+','SS-31','Glutathione','Thymosin Alpha-1','KPV']],
['body','Body composition','Composición corporal','More than the number on a scale.','Más que un número en la báscula.','Compare the research questions behind visceral adiposity, energy balance and endocrine signalling.','Compara las preguntas de investigación sobre grasa visceral, balance energético y señalización endocrina.',null,['Tesamorelin','Retatrutide','Tirzepatide','AOD-9604']],
['skin','Skin & tissue','Piel y tejidos','The science beneath the surface.','La ciencia bajo la superficie.','Explore copper peptides, extracellular-matrix biology and named combinations. Combination evidence must be evaluated separately.','Explora péptidos de cobre, biología de la matriz extracelular y combinaciones. La evidencia de cada combinación debe evaluarse por separado.',null,['GHK-Cu','GLOW','KLOW','BPC-157','Snap-8']],
['tools','Research tools','Herramientas','Get the reference right.','La referencia correcta.','Laboratory materials and concentration arithmetic, with assumptions and units kept visible.','Materiales de laboratorio y aritmética de concentración, con unidades y supuestos a la vista.',null,['Bacteriostatic Water / PBS','Benzyl Alcohol 0.9%','Acetic Acid 0.6%']]
];
const featured=['Retatrutide','MOTS-c','Tesamorelin','CJC-1295 (No DAC)','NAD+','BPC-157','GLOW','KLOW'];
const originalCopy=new Map();
const stableName=p=>typeof p.name==='string'?p.name:p.name.en;
const displayName=p=>typeof p.name==='string'?p.name:p.name[CURRENT_LANG]||p.name.en;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const find=n=>PEPTORA_PRODUCTS.find(p=>stableName(p)===n);
const language=()=>CURRENT_LANG==='es';
const loc=(en,es)=>language()?es:en;
const lens=p=>BIOHACKING_LENS_BY_PRODUCT[CURRENT_LANG][stableName(p)]||BIOHACKING_LENS_BY_PRODUCT[CURRENT_LANG][displayName(p)];
const href=path=>{const u=new URL(path,location.href);u.searchParams.set('lang',CURRENT_LANG);return u.pathname+u.search+u.hash;};
let ready=false,active='metabolic',record=null,opener=null,priorUrl=null;
const compared=new Set();
function renderComparison(){
 const shelf=document.getElementById('comparisonShelf');if(!shelf)return;
 shelf.hidden=!compared.size;
 shelf.innerHTML='<div class="comparison-heading"><h3>'+loc('Compare research context','Compara el contexto de investigación')+'</h3><button type="button" data-action="clear-comparison">'+loc('Clear','Limpiar')+'</button></div><p>'+loc('Up to three references. Related pathways do not make compounds interchangeable.','Hasta tres referencias. Las vías relacionadas no hacen intercambiables los compuestos.')+'</p><div class="comparison-grid">'+[...compared].map(find).map(p=>'<article><button class="comparison-remove" type="button" data-remove-comparison="'+escape(stableName(p))+'" aria-label="'+escape(loc('Remove ','Quitar ')+displayName(p))+'">×</button><h3>'+escape(displayName(p))+'</h3><p>'+escape(p.mech[CURRENT_LANG])+'</p><p class="comparison-evidence">'+escape(lens(p)?.evidence||'')+'</p><button type="button" data-compound="'+escape(stableName(p))+'">'+loc('Open reference →','Abrir ficha →')+'</button></article>').join('')+'</div>';
}
function memberships(p){
 const n=stableName(p), explicit=objectives.filter(o=>o[8].includes(n)).map(o=>o[0]);
 const categories={metabolic:'metabolic','gh-igf':'performance','brain-sleep':'cognition',performance:'longevity',immune:'cellular',hormonal:'cellular',aesthetic:'skin',supplies:'tools'};
 if(!explicit.length && categories[p.cat])explicit.push(categories[p.cat]);
 if(p.cat==='stacks'&&!explicit.length)explicit.push(n.startsWith('Cagri')?'metabolic':n.startsWith('BPC')?'recovery':'performance');
 return explicit;
}
function type(p){return p.cat==='supplies'?'tools':p.cat==='stacks'?'combinations':'individual';}
function typeLabel(p){return {tools:loc('Laboratory reference','Referencia de laboratorio'),combinations:loc('Combination','Combinación'),individual:loc('Individual reference','Referencia individual')}[type(p)];}
function recordButton(p,cls='reference-card',number){
 const l=lens(p);
 return '<button type="button" class="'+cls+'" data-compound="'+escape(stableName(p))+'">'+
 (number!==undefined?'<span class="card-number">'+String(number+1).padStart(2,'0')+' / PEPTORA</span>':'<span>'+typeLabel(p)+'</span>')+
 '<h3>'+escape(displayName(p))+'</h3><p>'+escape(l?.objective||p.desc[CURRENT_LANG])+'</p><span class="card-open">'+loc('Open reference →','Abrir ficha →')+'</span></button>';
}

function renderExplorer(){
 const options=document.querySelector('.objective-options');
 const scroll=options.scrollLeft;
 options.innerHTML=objectives.map((o,i)=>'<button type="button" class="objective-choice" data-objective="'+o[0]+'" aria-pressed="'+(active===o[0])+'" aria-controls="objectivePanel"><span>'+String(i+1).padStart(2,'0')+'</span><span>'+escape(o[language()?2:1])+'</span><b>↗</b></button>').join('');
 options.scrollLeft=scroll;
 const o=objectives.find(o=>o[0]===active),panel=document.getElementById('objectivePanel');
 panel.className='objective-panel'+(o[7]?'':' no-photo');
 panel.innerHTML='<div class="objective-story"><p class="kicker">'+escape(o[language()?2:1])+' / PEPTORA</p><h3>'+escape(o[language()?4:3])+'</h3><p>'+escape(o[language()?6:5])+'</p><div class="objective-links">'+o[8].map(find).filter(Boolean).map(p=>'<button type="button" data-compound="'+escape(stableName(p))+'">'+escape(displayName(p))+'<span>↗</span></button>').join('')+'</div><a class="text-link" href="'+href(active==='tools'?'tools.html':'learn.html#'+({body:'metabolic',cellular:'longevity',skin:'recovery',performance:'body'}[active]||active))+'">'+loc(active==='tools'?'Open calculator →':'Read the learning guide →',active==='tools'?'Abrir calculadora →':'Leer la guía educativa →')+'</a></div>'+
 (o[7]?'<figure class="objective-photo"><img src="assets/images/biohacking/'+o[7]+'" alt="'+escape(o[language()?2:1])+'" width="640" height="800" loading="lazy"></figure>':'');
}
function renderIndex(){
 const q=normalize(document.getElementById('referenceSearch').value),objective=document.getElementById('objectiveFilter').value,kind=document.getElementById('referenceType').value;
 const items=PEPTORA_PRODUCTS.filter(p=>(objective==='all'||memberships(p).includes(objective))&&(kind==='all'||type(p)===kind)&&normalize([displayName(p),stableName(p),p.desc.en,p.desc.es,p.mech.en,p.mech.es,lens(p)?.objective,memberships(p).map(k=>objectives.find(o=>o[0]===k).slice(1,3).join(' '))].join(' ')).includes(q));
 document.getElementById('referenceCount').textContent=items.length+loc(' of '+PEPTORA_PRODUCTS.length+' references',' de '+PEPTORA_PRODUCTS.length+' referencias');
 document.getElementById('referenceGrid').innerHTML=items.length?items.map(p=>recordButton(p)).join(''):'<p class="empty-state">'+loc('No matching references. Try another term or reset the filters.','No hay referencias coincidentes. Prueba otro término o restablece los filtros.')+'</p>';
}
function related(p){
 const n=stableName(p);
 const explicit={
 'BPC-157':['TB-500 (Thymosin B4 Acetate)','KPV','GLOW','KLOW'],
 'TB-500 (Thymosin B4 Acetate)':['BPC-157','GLOW','KLOW','GHK-Cu'],
 'GHK-Cu':['GLOW','KLOW','BPC-157','KPV'],
 'KPV':['BPC-157','KLOW','GHK-Cu'],
 'Retatrutide':['Tirzepatide','Cagrilintide','Semaglutide'],
 'Tirzepatide':['Retatrutide','Semaglutide','Cagrilintide'],
 'Cagrilintide':['Retatrutide','Tirzepatide','CagriSema Standard'],
 'Semax':['Selank','Cerebrolysin','DSIP'],'Selank':['Semax','DSIP','Cerebrolysin'],
 'GLOW':['BPC-157','TB-500 (Thymosin B4 Acetate)','GHK-Cu','KLOW'],
 'KLOW':['GLOW','BPC-157','TB-500 (Thymosin B4 Acetate)','GHK-Cu','KPV']
 };
 return (explicit[n]||PEPTORA_PRODUCTS.filter(other=>stableName(other)!==n&&memberships(other).some(k=>memberships(p).includes(k))).map(stableName).slice(0,4)).map(find).filter(Boolean);
}
function renderRecord(){
 if(!record)return;
 const p=find(record),l=lens(p);
 if(!p)return;
 const brief={Retatrutide:'retatrutide','MOTS-c':'mots',Semax:'semax',Tesamorelin:'tesamorelin','BPC-157':'tissue',GLOW:'tissue',KLOW:'tissue','NAD+':'nad'}[record];
 document.getElementById('recordContent').innerHTML='<p class="kicker">'+typeLabel(p)+'</p><h2 id="compoundTitle" tabindex="-1">'+escape(displayName(p))+'</h2><p class="record-lead">'+escape(p.desc[CURRENT_LANG])+'</p>'+
 '<section><h3>'+loc('The mechanism','El mecanismo')+'</h3><p>'+escape(p.mech[CURRENT_LANG])+'</p></section>'+
 '<section><h3>'+loc('The biohacking conversation','La conversación en biohacking')+'</h3><p>'+escape(l?.community||p.interest[CURRENT_LANG])+'</p></section>'+
 (l?'<section><h3>'+loc('Evidence in context','La evidencia en contexto')+'</h3><p>'+escape(l.evidence)+'</p></section>':'')+
 '<div class="record-actions"><button class="solid-button" type="button" data-action="compare" '+(!compared.has(record)&&compared.size>=3?'disabled':'')+'>'+ (compared.has(record)?loc('Remove from comparison','Quitar de comparación'):compared.size>=3?loc('Comparison full (3/3)','Comparación llena (3/3)'):loc('Add to comparison','Agregar a comparación'))+'</button><button type="button" class="text-link" data-action="show-comparison">'+loc('View comparison','Ver comparación')+' ('+compared.size+')</button></div>'+
 '<details><summary>'+loc('More research context +','Más contexto de investigación +')+'</summary><p>'+escape(p.interest[CURRENT_LANG])+'</p></details>'+
 '<section><h3>'+loc('Related references','Referencias relacionadas')+'</h3><p style="margin-bottom:14px">'+loc('Related research questions, not equivalent compounds.','Preguntas de investigación relacionadas, no compuestos equivalentes.')+'</p><div class="related-list">'+related(p).map(r=>'<button type="button" data-compound="'+escape(stableName(r))+'">'+escape(displayName(r))+' ↗</button>').join('')+'</div></section>'+
 '<a class="text-link" href="'+href('research.html'+(brief?'#'+brief:''))+'">'+(brief?loc('Read the related research brief →','Leer el brief de investigación relacionado →'):loc('Explore the research library →','Explorar la biblioteca de investigación →'))+'</a><p class="record-note">'+loc('Educational and laboratory reference. Not a recommendation for administration or personal use.','Referencia educativa y de laboratorio. No es una recomendación de administración ni de uso personal.')+'</p>';
}
function openRecord(name,source,updateUrl=true){
 if(!find(name))return;
 const dialog=document.getElementById('compoundDialog');
 if(!dialog.open){opener=source||document.activeElement;priorUrl=location.href;}
 record=name;renderRecord();
 if(updateUrl){const url=new URL(location.href);url.searchParams.set('compound',name);url.searchParams.set('lang',CURRENT_LANG);history.replaceState(null,'',url);}
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;document.getElementById('compoundTitle').focus({preventScroll:true});
}
function closeRecord(){
 const dialog=document.getElementById('compoundDialog');
 if(dialog.open)dialog.close();
 record=null;
 const url=new URL(priorUrl||location.href);url.searchParams.delete('compound');url.searchParams.set('lang',CURRENT_LANG);history.replaceState(null,'',url);
 if(opener?.isConnected)opener.focus({preventScroll:true});
}
function refresh(){
 if(!ready)return;
 document.querySelectorAll('[data-copy]').forEach(el=>{const key=el.dataset.copy;el.innerHTML=language()&&es[key]?es[key]:originalCopy.get(key);});
 document.querySelectorAll('[data-placeholder]').forEach(el=>el.placeholder=language()?es[el.dataset.placeholder]:'Try Semax, AMPK or recovery');
 const objective=document.getElementById('objectiveFilter'),kind=document.getElementById('referenceType'),oldObjective=objective.value||'all',oldKind=kind.value||'all';
 objective.innerHTML='<option value="all">'+loc('All objectives','Todos los objetivos')+'</option>'+objectives.map(o=>'<option value="'+o[0]+'">'+escape(o[language()?2:1])+'</option>').join('');objective.value=oldObjective;
 kind.innerHTML=[['all','All references','Todas las referencias'],['individual','Individual references','Referencias individuales'],['combinations','Combinations','Combinaciones'],['tools','Laboratory tools','Herramientas de laboratorio']].map(o=>'<option value="'+o[0]+'">'+o[language()?2:1]+'</option>').join('');kind.value=oldKind;
 renderExplorer();document.getElementById('selectedGrid').innerHTML=featured.map(find).filter(Boolean).map((p,i)=>recordButton(p,'selected-card',i)).join('');renderIndex();renderRecord();renderComparison();
 document.querySelectorAll('a[href]').forEach(a=>{const raw=a.getAttribute('href');if(/^(learn|research|tools)\.html/.test(raw))a.href=href(raw);});
 document.querySelector('.objective-options').setAttribute('aria-label',loc('Research objectives','Objetivos de investigación'));
 document.getElementById('navToggle').setAttribute('aria-label',loc('Toggle navigation','Abrir o cerrar navegación'));
}
// applyTranslations calls this after every explicit language change.
renderProducts=refresh;
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-copy]').forEach(el=>originalCopy.set(el.dataset.copy,el.innerHTML));
 const shelf=document.createElement('section');shelf.id='comparisonShelf';shelf.className='comparison-shelf';shelf.hidden=true;shelf.setAttribute('aria-live','polite');document.getElementById('referenceCount').before(shelf);
 ready=true;
 const requested=new URLSearchParams(location.search).get('objective');
 const alias={'#performance':'performance','#longevity':'longevity'};
 if(objectives.some(o=>o[0]===requested))active=requested;
 else if(alias[location.hash])active=alias[location.hash];
 refresh();
 document.addEventListener('click',e=>{
  const compound=e.target.closest('[data-compound]');
  if(compound){openRecord(compound.dataset.compound,compound);return;}
  const choice=e.target.closest('[data-objective]');
  if(choice){active=choice.dataset.objective;const scroll=document.querySelector('.objective-options').scrollLeft;renderExplorer();const replacement=document.querySelector('[data-objective="'+active+'"]');replacement.focus({preventScroll:true});document.querySelector('.objective-options').scrollLeft=scroll;return;}
  if(e.target.closest('[data-action="close-record"]'))closeRecord();
  if(e.target.closest('[data-action="compare"]')){if(compared.has(record))compared.delete(record);else if(compared.size<3)compared.add(record);renderRecord();renderComparison();}
  if(e.target.closest('[data-action="show-comparison"]')){closeRecord();document.querySelector('.catalog-details').open=true;(compared.size?document.getElementById('comparisonShelf'):document.getElementById('productos')).scrollIntoView({block:'start'});}
  if(e.target.closest('[data-action="clear-comparison"]')){compared.clear();renderComparison();}
  const remove=e.target.closest('[data-remove-comparison]');if(remove){compared.delete(remove.dataset.removeComparison);renderComparison();}
  if(e.target.closest('[data-action="reset"]')){document.getElementById('referenceSearch').value='';document.getElementById('objectiveFilter').value='all';document.getElementById('referenceType').value='all';renderIndex();}
  const link=e.target.closest('a[href]');
  if(link?.hash==='#productos')document.querySelector('.catalog-details').open=true;
 });
 ['referenceSearch','objectiveFilter','referenceType'].forEach(id=>document.getElementById(id).addEventListener('input',renderIndex));
 const dialog=document.getElementById('compoundDialog');
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeRecord();});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeRecord();}});
 const nav=document.getElementById('mainNav'),toggle=document.getElementById('navToggle');
 new MutationObserver(()=>toggle.setAttribute('aria-expanded',String(nav.classList.contains('open')))).observe(nav,{attributes:true,attributeFilter:['class']});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');}});
 if(location.hash==='#productos'||location.hash==='#peptides')document.querySelector('.catalog-details').open=true;
 const compound=new URLSearchParams(location.search).get('compound');if(compound)openRecord(compound,null,false);
 if(alias[location.hash])document.getElementById('objetivos').scrollIntoView();
 window.addEventListener('popstate',()=>{const n=new URLSearchParams(location.search).get('compound');if(n)openRecord(n);else if(dialog.open)closeRecord();});
});
})();
