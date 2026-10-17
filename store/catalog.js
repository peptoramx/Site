/* Public storefront only. Never import administrative inventory or credentials. */
(function(root){
  const segments=[
    {id:'all',en:'All products',es:'Todos'},
    {id:'metabolic',en:'Metabolism',es:'Metabolismo'},
    {id:'performance',en:'Performance',es:'Rendimiento'},
    {id:'recovery',en:'Recovery',es:'Recuperación'},
    {id:'cognition',en:'Cognition',es:'Cognición'},
    {id:'cellular',en:'Cellular & longevity',es:'Salud celular y longevidad'},
    {id:'skin',en:'Skin',es:'Piel'},
    {id:'supplies',en:'Supplies',es:'Insumos'}
  ];
  const rows=[
    ['tirzepatide','Tirzepatide','Tirzepatida',['metabolic'],['20 mg','30 mg'],'GIP + GLP-1','Tirzepatida tirzepatide'],
    ['retatrutide','RT','RT',['metabolic'],['10 mg','20 mg'],'Triple agonist: GLP-1, GIP and glucagon / Triple agonista: GLP-1, GIP y glucagón','Retatrutida retatrutide RT triple agonista triple agonist'],
    ['ghk-cu','GHK-Cu','GHK-Cu',['skin','recovery'],['50 mg','100 mg'],'Copper peptide / Péptido de cobre','GHK-Cu'],
    ['ipamorelin','Ipamorelin','Ipamorelin',['performance'],['10 mg'],'GH axis / Eje GH','Ipamorelin'],
    ['cjc-1295-no-dac','CJC-1295 no DAC','CJC-1295 sin DAC',['performance'],['5 mg'],'GH axis / Eje GH','CJC-1295'],
    ['tesamorelin-ipamorelin','Tesamorelin + Ipamorelin','Tesamorelin + Ipamorelin',['performance','metabolic'],['10 mg + 5 mg'],'Combination / Combinación','Tesamorelin Ipamorelin'],
    ['semax','Semax','Semax',['cognition'],['10 mg'],'Neuropeptide / Neuropéptido','Semax'],
    ['selank','Selank','Selank',['cognition'],['10 mg'],'Neuropeptide / Neuropéptido','Selank'],
    ['ss-31','SS-31','SS-31',['cellular'],['5 mg'],'Mitochondria / Mitocondria','SS-31 Elamipretide'],
    ['mots-c','MOTS-c','MOTS-c',['cellular','metabolic','performance'],['10 mg'],'Mitochondrial peptide / Péptido mitocondrial','MOTS-c Motsc'],
    ['wolverine','Wolverine','Wolverine',['recovery'],['5 mg + 5 mg'],'BPC-157 + TB-500','BPC-157 TB-500 Wolverine'],
    ['klow','KLOW','KLOW',['recovery','skin'],['80 mg'],'BPC-157 + TB-500 + GHK-Cu + KPV','KLOW KPV GHK-Cu BPC-157 TB-500'],
    ['bpc-157','BPC-157','BPC-157',['recovery'],['20 mg'],'Single compound / Compuesto individual','BPC-157'],
    ['nad-plus','NAD+','NAD+',['cellular'],['500 mg'],'Coenzyme / Coenzima','NAD+ NAD'],
    ['glutathione','Glutathione','Glutatión',['cellular'],['600 mg'],'Antioxidant research / Investigación antioxidante','Glutathion Glutathione Glutation Glutatión'],
    ['bac-water-3ml','BAC Water','Agua BAC',['supplies'],['3 ml'],'Bacteriostatic water / Agua bacteriostática','BAC Water agua bacteriostatica 3ml'],
    ['bac-water-10ml','BAC Water','Agua BAC',['supplies'],['10 ml'],'Bacteriostatic water / Agua bacteriostática','BAC Water agua bacteriostatica 10ml'],
    ['cjc-ipamorelin','CJC-1295 no DAC + Ipamorelin','CJC-1295 sin DAC + Ipamorelin',['performance'],['5 mg + 5 mg'],'Combination / Combinación','CJC-1295 no DAC Ipamorelin']
  ];
  const products=rows.map(([id,en,es,segments,presentations,context,aliases])=>({id,en,es,segments,context,aliases,
    variants:presentations.map((presentation,i)=>({id:id+'-'+(i+1),presentation,price:null,currency:'MXN',available:false,needsConfirmation:false}))}));
  const colors=['#12618c','#674b9f','#b16d39','#16827d','#50779f','#8a517b','#2b60b5','#3b8e65','#7d5ea5','#65932d','#b37b22','#b34c73','#32765a','#9a6b32','#4a8280','#7396a5','#445f76','#8c5c3a'];
  products.forEach((p,i)=>p.color=colors[i]);
  const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
  function filterProducts(query='',segment='all',type='all'){
    const terms=String(query).trim().split(/\s+/).map(normalize).filter(Boolean);
    return products.filter(p=>(segment==='all'||p.segments.includes(segment))&&(type==='all'||(type==='supplies')===p.segments.includes('supplies'))&&terms.every(t=>normalize([p.en,p.es,p.context,p.aliases,...p.variants.map(v=>v.presentation),...segments.filter(s=>p.segments.includes(s.id)).flatMap(s=>[s.en,s.es]),...Object.values(root.PeptoraCommunity?.[p.id]||{}).flatMap(c=>[c.headline,c.short,...(c.goals||[])])].join(' ')).includes(t)));
  }
  function sanitizeCart(raw){
    if(!Array.isArray(raw))return [];
    const result=new Map();
    for(const row of raw){if(!row||typeof row.variant!=='string'||!Number.isSafeInteger(row.qty)||row.qty<1)continue;
      if(!products.some(p=>p.variants.some(v=>v.id===row.variant)))continue;
      result.set(row.variant,{variant:row.variant,qty:Math.min(99,(result.get(row.variant)?.qty||0)+row.qty)});
    }return [...result.values()];
  }
  function cartSummary(cart){let total=0,pending=false;const lines=sanitizeCart(cart).map(row=>{const product=products.find(p=>p.variants.some(v=>v.id===row.variant)),variant=product.variants.find(v=>v.id===row.variant);if(typeof variant.price!=='number'||!Number.isFinite(variant.price)||variant.price<0)pending=true;else total+=variant.price*row.qty;return {...row,product,details:variant};});return {lines,total:pending?null:Math.round(total*100)/100,pending};}
  function composition(product,variant){
    const blends={
      'wolverine':[['BPC-157',5],['TB-500',5]],
      'tesamorelin-ipamorelin':[['Tesamorelin',10],['Ipamorelin',5]],
      'cjc-ipamorelin':[['CJC-1295 no DAC',5],['Ipamorelin',5]],
      'klow':[['BPC-157',10],['TB-500',10],['GHK-Cu',50],['KPV',10]]
    };
    const unit=product.segments.includes('supplies')?'ml':'mg';
    const ingredients=(blends[product.id]||[[product.id==='retatrutide'?'Retatrutide':product.en,Number.parseFloat(variant.presentation)]]).map(([name,amount])=>({name,amount,unit}));
    return {ingredients,total:ingredients.reduce((n,i)=>n+i.amount,0),unit,breakdownPending:false};
  }
  const api={products,segments,normalize,filterProducts,sanitizeCart,cartSummary,composition};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.PeptoraCatalog=api;
})(typeof window!=='undefined'?window:globalThis);

