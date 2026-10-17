/* Public retail projection from the existing inventory; never load administrative
 * lot records, acquisition costs, customers or credentials into this storefront.
 * WhatsApp inquiries do NOT reserve inventory. Confirm sales in the inventory app.
 */
(function(root){
 let offers={};
 const endpoint='https://raw.githubusercontent.com/peptoramx/Peptora/refs/heads/main/data/store-offers.json';
 const contacts={es:'526624621816',en:'17316665112'};
 function validate(next){const safe=Object.fromEntries(Object.entries(next).map(([id,offer])=>[id,{...offer}]));for(const [low,high] of [['retatrutide-1','retatrutide-2'],['tirzepatide-1','tirzepatide-2'],['ghk-cu-1','ghk-cu-2']])if(safe[low]?.price>0&&safe[high]?.price>0&&safe[high].price<safe[low].price){safe[low].price=null;safe[high].price=null;}return safe;}
 async function load(catalog){try{const response=await fetch(endpoint+'?t='+Date.now(),{cache:'no-store',signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error();const feed=await response.json();if(feed.schema!==1||feed.currency!=='MXN'||!feed.offers||typeof feed.offers!=='object')throw Error();offers=feed.offers;apply(catalog);return true;}catch{offers={};apply(catalog);return false;}}
 const amount=(mxn,lang)=>Number.isFinite(mxn)&&mxn>0?(lang==='en'?Math.round((mxn/18.2+5)*100)/100:mxn):null;
 const money=(mxn,lang)=>amount(mxn,lang)===null?(lang==='es'?'Precio por confirmar':'Price to confirm'):new Intl.NumberFormat(lang==='es'?'es-MX':'en-US',{style:'currency',currency:lang==='es'?'MXN':'USD'}).format(amount(mxn,lang))+' '+(lang==='es'?'MXN':'USD');
 function apply(catalog){offers=validate(offers);for(const p of catalog.products)for(const v of p.variants){const o=offers[v.id]||{};v.price=Number.isFinite(o.price)&&o.price>0?o.price:null;delete v.stock;v.available=o.available===true;}}
 function message(lines,customer,lang){const es=lang==='es';return [es?'Hola PEPTORA Sonora, quiero confirmar esta compra:':'Hello PEPTORA USA, I would like to confirm this purchase:',...lines.map(r=>r.qty+' × '+r.product[lang]+' · '+r.details.presentation+' · '+money(r.details.price,lang)+(r.details.available?'':(es?' · Bajo pedido':' · On request'))), '',(es?'Nombre: ':'Name: ')+customer.name.trim(),(es?'Dirección: ':'Address: ')+customer.address.trim(),'',es?'Por favor confirma precios, disponibilidad y costo de envío. Para productos sin existencias, entiendo que el envío puede tardar de 5 a 7 días después de confirmar la compra.':'Please confirm prices, availability and shipping cost. For out-of-stock products, I understand shipping may take 5–7 days after purchase confirmation.'].join('\n');}
 const api={get offers(){return offers;},contacts,validate,apply,load,amount,message,phone:'526624621816'};if(typeof module!=='undefined')module.exports=api;else root.PeptoraCommerce=api;
})(typeof window!=='undefined'?window:globalThis);

