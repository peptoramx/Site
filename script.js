// PEPTORA BIOHACKING — product catalog data
const PEPTORA_PRODUCTS = [
  // ---- Metabólico & Apetito ----
  { cat: 'Metabólico & Apetito', name: 'Semaglutide', desc: 'GLP-1 pionero para una pérdida de peso sostenida.', mech: 'Agonista del receptor GLP-1 que imita la incretina natural, ralentiza el vaciado gástrico y actúa en el hipotálamo para reducir el apetito.' },
  { cat: 'Metabólico & Apetito', name: 'Tirzepatide', desc: 'Control de apetito y pérdida de peso de nueva generación.', mech: 'Agonista dual de los receptores GLP-1 y GIP, combinando el control del apetito con una mejor sensibilidad a la insulina.' },
  { cat: 'Metabólico & Apetito', name: 'Retatrutide', desc: 'La siguiente generación en optimización metabólica.', mech: 'Agonista triple de los receptores GLP-1, GIP y glucagón, sumando un efecto termogénico a la reducción del apetito.' },
  { cat: 'Metabólico & Apetito', name: 'Cagrilintide', desc: 'Saciedad prolongada para un control avanzado del apetito.', mech: 'Análogo de amilina de acción prolongada que actúa sobre el sistema nervioso central para extender la sensación de saciedad.' },
  { cat: 'Metabólico & Apetito', name: 'Mazdutide', desc: 'Doble acción para el control de peso y metabolismo.', mech: 'Agonista dual de los receptores GLP-1 y glucagón, combinando el control del apetito con mayor gasto energético.' },
  { cat: 'Metabólico & Apetito', name: 'Survodutide', desc: 'Triple acción para optimización metabólica avanzada.', mech: 'Agonista dual GLP-1/glucagón orientado a maximizar la oxidación de grasa junto con el control del apetito.' },
  { cat: 'Metabólico & Apetito', name: 'GLP-1', desc: 'Regulación del apetito y la glucosa.', mech: 'Péptido incretina que estimula la liberación de insulina dependiente de glucosa y enlentece el vaciado gástrico.' },
  { cat: 'Metabólico & Apetito', name: '5-Amino-1MQ', desc: 'Pérdida de grasa preservando masa muscular.', mech: 'Inhibidor de la enzima NNMT, favoreciendo un mayor gasto energético en el tejido adiposo.' },
  { cat: 'Metabólico & Apetito', name: 'Lipo-C', desc: 'Blend lipotrópico enfocado en el metabolismo de grasas.', mech: 'Combinación de metionina, inositol y colina que apoya el transporte y metabolismo hepático de las grasas.' },
  { cat: 'Metabólico & Apetito', name: 'Lipo-C + B12', desc: 'Lipotrópico con energía adicional de vitamina B12.', mech: 'Blend lipotrópico potenciado con vitamina B12 para el metabolismo de grasas y la producción de energía celular.' },

  // ---- GH / IGF Axis & Recuperación ----
  { cat: 'GH / IGF & Recuperación', name: 'CJC-1295 (No DAC)', desc: 'Estimula la producción natural de hormona de crecimiento.', mech: 'Análogo de GHRH de acción corta que estimula pulsos naturales de hormona de crecimiento en la hipófisis.' },
  { cat: 'GH / IGF & Recuperación', name: 'CJC-1295 (With DAC)', desc: 'Elevación sostenida de GH de mayor duración.', mech: 'Variante de CJC-1295 unida a un dominio de afinidad a albúmina, que prolonga su acción sobre la liberación de GH.' },
  { cat: 'GH / IGF & Recuperación', name: 'Ipamorelin', desc: 'Recuperación, descanso profundo y composición corporal.', mech: 'Secretagogo selectivo del receptor de grelina (GHS-R) que estimula GH sin afectar cortisol ni prolactina.' },
  { cat: 'GH / IGF & Recuperación', name: 'Sermorelin Acetate', desc: 'Estimulación clásica y bien tolerada de GH natural.', mech: 'Fragmento activo de GHRH (1-29) que estimula la liberación fisiológica de hormona de crecimiento.' },
  { cat: 'GH / IGF & Recuperación', name: 'Hexarelin Acetate', desc: 'Liberación potente de hormona de crecimiento.', mech: 'Secretagogo de GH de alta potencia que actúa sobre el receptor de grelina.' },
  { cat: 'GH / IGF & Recuperación', name: 'GHRP-6 Acetate', desc: 'Liberación de GH con efecto orexigénico.', mech: 'Secretagogo de GH que también estimula el apetito a través del receptor de grelina.' },
  { cat: 'GH / IGF & Recuperación', name: 'Tesamorelin', desc: 'Especialista en la reducción de grasa visceral.', mech: 'Análogo de GHRH desarrollado específicamente para reducir grasa visceral mediante el eje de GH.' },
  { cat: 'GH / IGF & Recuperación', name: 'HGH 191AA (Somatropina)', desc: 'Hormona de crecimiento recombinante de referencia.', mech: 'Hormona de crecimiento humana recombinante, idéntica en secuencia a la GH endógena.' },
  { cat: 'GH / IGF & Recuperación', name: 'HGH Fragment 176-191', desc: 'Fragmento enfocado en el metabolismo de grasas.', mech: 'Fragmento C-terminal de la GH sin efecto sobre IGF-1, con acción dirigida a la lipólisis.' },
  { cat: 'GH / IGF & Recuperación', name: 'IGF-1 LR3', desc: 'Potencia el crecimiento y recuperación muscular.', mech: 'Análogo de IGF-1 con vida media extendida que actúa directamente sobre el receptor de IGF-1.' },
  { cat: 'GH / IGF & Recuperación', name: 'IGF-DES', desc: 'Recuperación localizada y desarrollo muscular.', mech: 'Variante de IGF-1 con mayor afinidad local al receptor, con acción muscular más focalizada.' },
  { cat: 'GH / IGF & Recuperación', name: 'Follistatin', desc: 'Desarrollo muscular de siguiente nivel.', mech: 'Inhibidor natural de la miostatina, la proteína que limita el crecimiento muscular.' },
  { cat: 'GH / IGF & Recuperación', name: 'BPC-157', desc: 'Recuperación acelerada de tejidos y salud digestiva.', mech: 'Péptido derivado de una proteína gástrica que favorece la angiogénesis y la reparación de tejidos.' },
  { cat: 'GH / IGF & Recuperación', name: 'TB-500 (Thymosin B4 Acetate)', desc: 'Reparación integral de músculos y articulaciones.', mech: 'Regula la actina celular, favoreciendo la migración celular y la reparación de tejidos.' },
  { cat: 'GH / IGF & Recuperación', name: 'KPV', desc: 'Equilibrio intestinal y control de la inflamación.', mech: 'Tripéptido derivado de la alfa-MSH con actividad antiinflamatoria local en el tracto digestivo.' },
  { cat: 'GH / IGF & Recuperación', name: 'GHK-Cu', desc: 'Regeneración y rejuvenecimiento cutáneo.', mech: 'Complejo péptido-cobre que estimula la síntesis de colágeno y la remodelación de la matriz extracelular.' },

  // ---- Cerebro, Ánimo & Sueño ----
  { cat: 'Cerebro & Sueño', name: 'Semax', desc: 'Máximo enfoque, memoria y rendimiento cognitivo.', mech: 'Fragmento sintético de ACTH que incrementa el BDNF, favoreciendo la neuroplasticidad y el enfoque.' },
  { cat: 'Cerebro & Sueño', name: 'Selank', desc: 'Calma y claridad mental sin sedación.', mech: 'Análogo de tuftsina con actividad ansiolítica que modula la actividad GABAérgica sin causar sedación.' },
  { cat: 'Cerebro & Sueño', name: 'Cerebrolysin', desc: 'Soporte neurotrófico para la función cognitiva.', mech: 'Mezcla de péptidos neurotróficos derivados de proteína cerebral, con acción similar a BDNF y NGF.' },
  { cat: 'Cerebro & Sueño', name: 'DSIP', desc: 'Sueño profundo y recuperación nocturna.', mech: 'Neuropéptido que interactúa con receptores GABA para inducir sueño de ondas lentas.' },
  { cat: 'Cerebro & Sueño', name: 'Ara-290', desc: 'Investigación en neuroprotección y bienestar.', mech: 'Derivado no hematopoyético de la eritropoyetina que actúa sobre receptores de citoprotección para favorecer la reparación neural.' },

  // ---- Rendimiento & Longevidad Celular ----
  { cat: 'Rendimiento & Longevidad', name: 'MOTS-c', desc: 'Energía celular para rendimiento y recuperación.', mech: 'Péptido derivado del ADN mitocondrial que activa la vía AMPK, mejorando la eficiencia metabólica.' },
  { cat: 'Rendimiento & Longevidad', name: 'SS-31', desc: 'Salud mitocondrial y resistencia celular.', mech: 'Se une a la cardiolipina en la membrana mitocondrial interna, estabilizando la producción de ATP.' },
  { cat: 'Rendimiento & Longevidad', name: 'NAD+', desc: 'Energía celular y longevidad desde el interior.', mech: 'Coenzima esencial en la producción de energía celular y en la actividad de las sirtuinas.' },
  { cat: 'Rendimiento & Longevidad', name: 'L-Carnitina', desc: 'Convierte grasa en energía para tu rendimiento.', mech: 'Transporta ácidos grasos de cadena larga hacia la mitocondria para su oxidación.' },
  { cat: 'Rendimiento & Longevidad', name: 'AOD-9604', desc: 'Reducción de grasa localizada.', mech: 'Fragmento de la GH (176-191) que estimula la lipólisis sin activar el receptor de IGF-1.' },
  { cat: 'Rendimiento & Longevidad', name: 'Epitalon', desc: 'Regeneración celular y envejecimiento saludable.', mech: 'Tetrapéptido que actúa sobre la glándula pineal, regulando la producción de melatonina y la actividad de la telomerasa.' },

  // ---- Inmunidad & Bienestar Integral ----
  { cat: 'Inmunidad & Bienestar', name: 'Thymosin Alpha-1', desc: 'Apoyo avanzado al sistema inmunológico.', mech: 'Péptido tímico que modula la maduración y función de los linfocitos T.' },
  { cat: 'Inmunidad & Bienestar', name: 'Thymalin', desc: 'Fortalece las defensas naturales del organismo.', mech: 'Extracto peptídico del timo que ayuda a restaurar el equilibrio de la respuesta inmune celular.' },
  { cat: 'Inmunidad & Bienestar', name: 'LL-37', desc: 'Defensas naturales y recuperación de tejidos.', mech: 'Péptido catelicidina con actividad antimicrobiana directa y modulación de la respuesta inmune innata.' },
  { cat: 'Inmunidad & Bienestar', name: 'VIP', desc: 'Equilibrio inmunológico y neuroprotección.', mech: 'Neuropéptido que regula la inflamación a través de receptores VPAC presentes en células inmunes.' },
  { cat: 'Inmunidad & Bienestar', name: 'FOXO4', desc: 'Investigación senolítica de vanguardia.', mech: 'Péptido disruptor de la interacción FOXO4-p53, favoreciendo la eliminación de células senescentes.' },
  { cat: 'Inmunidad & Bienestar', name: 'Kisspeptin-10', desc: 'Equilibrio hormonal integral.', mech: 'Activa el receptor KISS1R, estimulando la liberación de GnRH en el eje hipotálamo-hipófisis-gónadas.' },
  { cat: 'Inmunidad & Bienestar', name: 'Glutathione', desc: 'Antioxidante maestro para la protección celular.', mech: 'Tripéptido antioxidante endógeno que neutraliza radicales libres y apoya la desintoxicación hepática.' },

  // ---- Hormonal & Bienestar Sexual ----
  { cat: 'Hormonal & Sexual', name: 'PT-141', desc: 'Recupera el deseo y la conexión íntima.', mech: 'Agonista de receptores de melanocortina (MC3R/MC4R) que actúa en el sistema nervioso central para estimular el deseo sexual.' },
  { cat: 'Hormonal & Sexual', name: 'HCG', desc: 'Apoyo a la producción natural de testosterona.', mech: 'Hormona que imita a la LH, estimulando las células de Leydig para la producción de testosterona.' },
  { cat: 'Hormonal & Sexual', name: 'Melanotan I', desc: 'Pigmentación natural y protección cutánea.', mech: 'Análogo selectivo de la alfa-MSH que estimula la melanogénesis en los melanocitos.' },
  { cat: 'Hormonal & Sexual', name: 'Melanotan II', desc: 'Bronceado uniforme con apoyo a la libido.', mech: 'Agonista no selectivo de receptores de melanocortina, con efecto sobre pigmentación y libido.' },

  // ---- Estética & Piel ----
  { cat: 'Estética & Piel', name: 'Snap-8', desc: 'Suavizado de líneas de expresión.', mech: 'Octapéptido que inhibe la liberación de neurotransmisores en la unión neuromuscular, relajando la musculatura facial.' },
  { cat: 'Estética & Piel', name: 'Lemon Bottle', desc: 'Disolución localizada de grasa, uso estético profesional.', mech: 'Solución lipolítica inyectable que favorece la ruptura de membranas adipocitarias localizadas.' },
  { cat: 'Estética & Piel', name: 'Botulinum Toxin', desc: 'Relajación muscular para fines estéticos, uso profesional.', mech: 'Neurotoxina que bloquea la liberación de acetilcolina en la placa neuromuscular, relajando el músculo tratado.' },
  { cat: 'Estética & Piel', name: 'Hyaluronic Acid', desc: 'Hidratación y volumen para la piel.', mech: 'Glicosaminoglicano que retiene agua en la matriz dérmica, aportando volumen e hidratación.' },

  // ---- Stacks ----
  { cat: 'Stacks', name: 'CJC-1295 (No DAC) + Ipamorelin', desc: 'Sinergia clásica para GH, recuperación y sueño.', mech: 'Combina un GHRH de acción corta con un secretagogo selectivo de grelina para un pulso de GH más completo.' },
  { cat: 'Stacks', name: 'CagriSema Estándar', desc: 'Cagrilintide + Semaglutide — control de apetito de doble acción.', mech: 'Combina un análogo de amilina con un agonista GLP-1, actuando sobre dos vías distintas del control del apetito.' },
  { cat: 'Stacks', name: 'CagriSema Alta Concentración', desc: 'Versión de mayor concentración del dúo más buscado.', mech: 'Misma sinergia amilina + GLP-1, en una presentación de mayor concentración por vial.' },
  { cat: 'Stacks', name: 'BPC-157 + TB-500 Estándar', desc: 'Recuperación integral de tejidos, presentación estándar.', mech: 'Combina angiogénesis local con regulación de actina celular para una recuperación de tejidos más completa.' },
  { cat: 'Stacks', name: 'BPC-157 + TB-500 Alta Concentración', desc: 'Recuperación integral de tejidos, mayor concentración.', mech: 'Misma sinergia de reparación tisular en una presentación de mayor concentración por vial.' },
  { cat: 'Stacks', name: 'BPC-157 + GHK-Cu + TB-500', desc: 'Triple combinación para recuperación y regeneración cutánea.', mech: 'Une reparación gástrica, remodelación de colágeno y regeneración tisular en un mismo protocolo.' },
  { cat: 'Stacks', name: 'GHK-Cu + TB-500 + BPC-157 + KPV', desc: 'Blend cuádruple para recuperación integral avanzada.', mech: 'Combina cuatro mecanismos: regeneración cutánea, reparación tisular, angiogénesis y control local de la inflamación.' },

  // ---- Insumos & Reconstitución ----
  { cat: 'Insumos', name: 'Agua Bacteriostática / PBS', desc: 'Solución estéril para reconstitución de péptidos.', mech: 'Solución isotónica estéril utilizada para reconstituir péptidos liofilizados manteniendo su estabilidad.' },
  { cat: 'Insumos', name: 'Alcohol Bencílico 0.9%', desc: 'Agua bacteriostática con conservador para reconstitución.', mech: 'Agua bacteriostática con conservador que prolonga la estabilidad del péptido ya reconstituido.' },
  { cat: 'Insumos', name: 'Ácido Acético 0.6%', desc: 'Solución de reconstitución para compuestos específicos.', mech: 'Solución de reconstitución de pH ácido, requerida para péptidos con baja solubilidad en agua neutra.' },
];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  grid.innerHTML = PEPTORA_PRODUCTS.map((p, i) => `
    <div class="product-card show" data-cat="${p.cat}" data-idx="${i}">
      <span class="pc-cat">${p.cat}</span>
      <h4>${p.name}<svg class="pc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></h4>
      <p>${p.desc}</p>
      <div class="pc-mech"><div class="pc-mech-inner"><span class="pc-mech-label">Mecanismo de acción</span><p>${p.mech}</p></div></div>
    </div>
  `).join('');

  if (countEl) countEl.textContent = `${PEPTORA_PRODUCTS.length} productos`;

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  const pills = document.querySelectorAll('.filter-pill');
  const cards = () => document.querySelectorAll('.product-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      let visible = 0;
      cards().forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-cat') === filter;
        card.classList.toggle('show', match);
        if (match) visible++;
      });
      if (countEl) countEl.textContent = `${visible} producto${visible === 1 ? '' : 's'}`;
    });
  });
}

// Contact form — destination address assembled at runtime, never in plain
// text in the page source, and sent via FormSubmit's AJAX endpoint so the
// static site never needs a backend of its own.
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  const u = ['p','e','p','t','o','r','a','m','x'].join('');
  const d = ['g','m','a','i','l','.','c','o','m'].join('');
  const dest = u + String.fromCharCode(64) + d;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // honeypot — silently drop bot submissions
    if (form.querySelector('.hp-field').value) return;

    status.textContent = 'Enviando…';
    status.className = 'form-status';

    const data = new FormData(form);
    data.append('_subject', 'Nuevo contacto — PEPTORA');
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${dest}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('request failed');
      status.textContent = '¡Mensaje enviado! Te responderemos pronto.';
      status.className = 'form-status ok';
      form.reset();
    } catch (err) {
      status.textContent = 'No se pudo enviar. Escríbenos por WhatsApp.';
      status.className = 'form-status err';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  renderProducts();

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Tabs — Qué Hacemos
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // Header border on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.style.borderBottomColor = 'rgba(255,255,255,.18)';
    } else {
      header.style.borderBottomColor = 'rgba(255,255,255,.08)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
