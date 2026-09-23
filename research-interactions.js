document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('.brief-grid article').forEach((brief,index)=>{
 const source=brief.querySelector('a[href]');if(!source)return;
 const drawer=document.createElement('details');drawer.className='brief-evidence-drawer';
 const label=source.href.includes('accessdata.fda.gov')?['FDA label','Ficha de la FDA']:source.href.includes('?term=')?['Literature index','Índice de literatura']:['Primary study','Estudio primario'];
 drawer.innerHTML='<summary><span class="lang-en">View evidence context</span><span class="lang-es">Ver contexto de evidencia</span><span>+</span></summary><div><p class="lang-en">Start with the study population, endpoint and setting before comparing this record with another reference.</p><p class="lang-es">Revisa la población, el resultado medido y el entorno del estudio antes de comparar referencias.</p></div>';
 const link=document.createElement('a');link.href=source.href;link.target='_blank';link.rel='noopener';link.innerHTML='<span class="lang-en">'+label[0]+' ↗</span><span class="lang-es">'+label[1]+' ↗</span>';drawer.querySelector('div').append(link);
 source.replaceWith(drawer);brief.dataset.brief=String(index+1).padStart(2,'0');
 });
});
