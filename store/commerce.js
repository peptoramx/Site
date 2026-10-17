/* Public prices and stock only. Never publish acquisition costs or credentials here.
 * Add variant IDs to offers, e.g. 'semax-1': {price: 1200, stock: 3}.
 * Stock is manually confirmed; WhatsApp inquiries do NOT reserve inventory.
 */
(function(root){
 const offers={};
 function apply(catalog){for(const p of catalog.products)for(const v of p.variants){const o=offers[v.id]||{};v.price=Number.isFinite(o.price)&&o.price>0?o.price:null;v.stock=Number.isInteger(o.stock)&&o.stock>0?o.stock:0;v.available=v.stock>0;}}
 function message(lines,customer,lang){const es=lang==='es';return [es?'Hola PEPTORA Sonora, quiero confirmar esta compra:':'Hello PEPTORA Sonora, I would like to confirm this purchase:',...lines.map(r=>r.qty+' × '+r.product[lang]+' · '+r.details.presentation+(r.details.available?'':(es?' · Bajo pedido':' · On request'))), '',(es?'Nombre: ':'Name: ')+customer.name.trim(),(es?'Dirección: ':'Address: ')+customer.address.trim(),'',es?'Por favor confirma precios, disponibilidad y costo de envío. Para productos sin existencias, entiendo que el envío puede tardar de 5 a 7 días después de confirmar la compra.':'Please confirm prices, availability and shipping cost. For out-of-stock products, I understand shipping may take 5–7 days after purchase confirmation.'].join('\n');}
 const api={offers,apply,message,phone:'526624621816'};if(typeof module!=='undefined')module.exports=api;else root.PeptoraCommerce=api;
})(typeof window!=='undefined'?window:globalThis);

