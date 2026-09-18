// ============================================================================
// PEPTORA — Research Peptide Labs
// i18n (EN default / ES toggle), product catalog, and site interactions
// ============================================================================

// ---- Category labels per language (category IDs are stable, language-free) ----
const CAT_LABELS = {
  en: {
    metabolic: 'Metabolic & Appetite',
    'gh-igf': 'GH / IGF & Recovery',
    'brain-sleep': 'Brain & Sleep',
    performance: 'Performance & Longevity',
    immune: 'Immunity & Wellness',
    hormonal: 'Hormonal & Sexual',
    aesthetic: 'Aesthetics & Skin',
    stacks: 'Stacks',
    supplies: 'Supplies',
  },
  es: {
    metabolic: 'Metabólico & Apetito',
    'gh-igf': 'GH / IGF & Recuperación',
    'brain-sleep': 'Cerebro & Sueño',
    performance: 'Rendimiento & Longevidad',
    immune: 'Inmunidad & Bienestar',
    hormonal: 'Hormonal & Sexual',
    aesthetic: 'Estética & Piel',
    stacks: 'Stacks',
    supplies: 'Insumos',
  },
};

// ---- Product catalog (bilingual) ----
const PEPTORA_PRODUCTS = [
  // ---- Metabolic & Appetite ----
  { cat: 'metabolic', name: 'Semaglutide',
    desc: { en: 'Pioneer GLP-1 for sustained weight loss.', es: 'GLP-1 pionero para una pérdida de peso sostenida.' },
    mech: { en: 'GLP-1 receptor agonist that mimics the natural incretin hormone, slowing gastric emptying and acting on the hypothalamus to reduce appetite.', es: 'Agonista del receptor GLP-1 que imita la incretina natural, ralentiza el vaciado gástrico y actúa en el hipotálamo para reducir el apetito.' } },
  { cat: 'metabolic', name: 'Tirzepatide',
    desc: { en: 'Next-generation appetite control and weight loss.', es: 'Control de apetito y pérdida de peso de nueva generación.' },
    mech: { en: 'Dual GLP-1 and GIP receptor agonist, combining appetite control with improved insulin sensitivity.', es: 'Agonista dual de los receptores GLP-1 y GIP, combinando el control del apetito con una mejor sensibilidad a la insulina.' } },
  { cat: 'metabolic', name: 'Retatrutide',
    desc: { en: 'The next generation in metabolic optimization.', es: 'La siguiente generación en optimización metabólica.' },
    mech: { en: 'Triple agonist of the GLP-1, GIP and glucagon receptors, adding a thermogenic effect to appetite reduction.', es: 'Agonista triple de los receptores GLP-1, GIP y glucagón, sumando un efecto termogénico a la reducción del apetito.' } },
  { cat: 'metabolic', name: 'Cagrilintide',
    desc: { en: 'Extended satiety for advanced appetite control.', es: 'Saciedad prolongada para un control avanzado del apetito.' },
    mech: { en: 'Long-acting amylin analog that acts on the central nervous system to prolong the feeling of fullness.', es: 'Análogo de amilina de acción prolongada que actúa sobre el sistema nervioso central para extender la sensación de saciedad.' } },
  { cat: 'metabolic', name: 'Mazdutide',
    desc: { en: 'Dual action for weight and metabolism control.', es: 'Doble acción para el control de peso y metabolismo.' },
    mech: { en: 'Dual GLP-1 and glucagon receptor agonist, combining appetite control with increased energy expenditure.', es: 'Agonista dual de los receptores GLP-1 y glucagón, combinando el control del apetito con mayor gasto energético.' } },
  { cat: 'metabolic', name: 'Survodutide',
    desc: { en: 'Triple action for advanced metabolic optimization.', es: 'Triple acción para optimización metabólica avanzada.' },
    mech: { en: 'Dual GLP-1/glucagon agonist aimed at maximizing fat oxidation alongside appetite control.', es: 'Agonista dual GLP-1/glucagón orientado a maximizar la oxidación de grasa junto con el control del apetito.' } },
  { cat: 'metabolic', name: 'GLP-1',
    desc: { en: 'Appetite and glucose regulation.', es: 'Regulación del apetito y la glucosa.' },
    mech: { en: 'Incretin peptide that stimulates glucose-dependent insulin release and slows gastric emptying.', es: 'Péptido incretina que estimula la liberación de insulina dependiente de glucosa y enlentece el vaciado gástrico.' } },
  { cat: 'metabolic', name: '5-Amino-1MQ',
    desc: { en: 'Fat loss while preserving muscle mass.', es: 'Pérdida de grasa preservando masa muscular.' },
    mech: { en: 'NNMT enzyme inhibitor, promoting greater energy expenditure in adipose tissue.', es: 'Inhibidor de la enzima NNMT, favoreciendo un mayor gasto energético en el tejido adiposo.' } },
  { cat: 'metabolic', name: 'Lipo-C',
    desc: { en: 'Lipotropic blend focused on fat metabolism.', es: 'Blend lipotrópico enfocado en el metabolismo de grasas.' },
    mech: { en: 'Combination of methionine, inositol and choline that supports fat transport and hepatic metabolism.', es: 'Combinación de metionina, inositol y colina que apoya el transporte y metabolismo hepático de las grasas.' } },
  { cat: 'metabolic', name: 'Lipo-C + B12',
    desc: { en: 'Lipotropic blend with added B12 energy.', es: 'Lipotrópico con energía adicional de vitamina B12.' },
    mech: { en: 'Lipotropic blend boosted with vitamin B12 for fat metabolism and cellular energy production.', es: 'Blend lipotrópico potenciado con vitamina B12 para el metabolismo de grasas y la producción de energía celular.' } },

  // ---- GH / IGF Axis & Recovery ----
  { cat: 'gh-igf', name: 'CJC-1295 (No DAC)',
    desc: { en: 'Stimulates natural growth hormone production.', es: 'Estimula la producción natural de hormona de crecimiento.' },
    mech: { en: 'Short-acting GHRH analog that stimulates natural pulses of growth hormone from the pituitary.', es: 'Análogo de GHRH de acción corta que estimula pulsos naturales de hormona de crecimiento en la hipófisis.' } },
  { cat: 'gh-igf', name: 'CJC-1295 (With DAC)',
    desc: { en: 'Sustained, longer-lasting GH elevation.', es: 'Elevación sostenida de GH de mayor duración.' },
    mech: { en: 'CJC-1295 variant bound to an albumin-affinity domain, extending its action on GH release.', es: 'Variante de CJC-1295 unida a un dominio de afinidad a albúmina, que prolonga su acción sobre la liberación de GH.' } },
  { cat: 'gh-igf', name: 'Ipamorelin',
    desc: { en: 'Recovery, deep rest and body composition.', es: 'Recuperación, descanso profundo y composición corporal.' },
    mech: { en: 'Selective ghrelin receptor (GHS-R) secretagogue that stimulates GH without affecting cortisol or prolactin.', es: 'Secretagogo selectivo del receptor de grelina (GHS-R) que estimula GH sin afectar cortisol ni prolactina.' } },
  { cat: 'gh-igf', name: 'Sermorelin Acetate',
    desc: { en: 'Classic, well-tolerated stimulation of natural GH.', es: 'Estimulación clásica y bien tolerada de GH natural.' },
    mech: { en: 'Active GHRH fragment (1-29) that stimulates the physiological release of growth hormone.', es: 'Fragmento activo de GHRH (1-29) que estimula la liberación fisiológica de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'Hexarelin Acetate',
    desc: { en: 'Potent release of growth hormone.', es: 'Liberación potente de hormona de crecimiento.' },
    mech: { en: 'High-potency GH secretagogue that acts on the ghrelin receptor.', es: 'Secretagogo de GH de alta potencia que actúa sobre el receptor de grelina.' } },
  { cat: 'gh-igf', name: 'GHRP-6 Acetate',
    desc: { en: 'GH release with an appetite-stimulating effect.', es: 'Liberación de GH con efecto orexigénico.' },
    mech: { en: 'GH secretagogue that also stimulates appetite through the ghrelin receptor.', es: 'Secretagogo de GH que también estimula el apetito a través del receptor de grelina.' } },
  { cat: 'gh-igf', name: 'Tesamorelin',
    desc: { en: 'Specialist in reducing visceral fat.', es: 'Especialista en la reducción de grasa visceral.' },
    mech: { en: "GHRH analog developed specifically to reduce visceral fat via the GH axis.", es: 'Análogo de GHRH desarrollado específicamente para reducir grasa visceral mediante el eje de GH.' } },
  { cat: 'gh-igf', name: 'HGH 191AA (Somatropin)',
    desc: { en: 'Reference recombinant growth hormone.', es: 'Hormona de crecimiento recombinante de referencia.' },
    mech: { en: 'Recombinant human growth hormone, identical in sequence to endogenous GH.', es: 'Hormona de crecimiento humana recombinante, idéntica en secuencia a la GH endógena.' } },
  { cat: 'gh-igf', name: 'HGH Fragment 176-191',
    desc: { en: 'Fragment focused on fat metabolism.', es: 'Fragmento enfocado en el metabolismo de grasas.' },
    mech: { en: 'C-terminal fragment of GH with no effect on IGF-1, targeted toward lipolysis.', es: 'Fragmento C-terminal de la GH sin efecto sobre IGF-1, con acción dirigida a la lipólisis.' } },
  { cat: 'gh-igf', name: 'IGF-1 LR3',
    desc: { en: 'Boosts muscle growth and recovery.', es: 'Potencia el crecimiento y recuperación muscular.' },
    mech: { en: 'Extended half-life IGF-1 analog that acts directly on the IGF-1 receptor.', es: 'Análogo de IGF-1 con vida media extendida que actúa directamente sobre el receptor de IGF-1.' } },
  { cat: 'gh-igf', name: 'IGF-DES',
    desc: { en: 'Localized recovery and muscle development.', es: 'Recuperación localizada y desarrollo muscular.' },
    mech: { en: 'IGF-1 variant with greater local receptor affinity, with more targeted muscular action.', es: 'Variante de IGF-1 con mayor afinidad local al receptor, con acción muscular más focalizada.' } },
  { cat: 'gh-igf', name: 'Follistatin',
    desc: { en: 'Next-level muscle development.', es: 'Desarrollo muscular de siguiente nivel.' },
    mech: { en: 'Natural inhibitor of myostatin, the protein that limits muscle growth.', es: 'Inhibidor natural de la miostatina, la proteína que limita el crecimiento muscular.' } },
  { cat: 'gh-igf', name: 'BPC-157',
    desc: { en: 'Accelerated tissue recovery and digestive health.', es: 'Recuperación acelerada de tejidos y salud digestiva.' },
    mech: { en: 'Peptide derived from a gastric protein that promotes angiogenesis and tissue repair.', es: 'Péptido derivado de una proteína gástrica que favorece la angiogénesis y la reparación de tejidos.' } },
  { cat: 'gh-igf', name: 'TB-500 (Thymosin B4 Acetate)',
    desc: { en: 'Comprehensive repair of muscles and joints.', es: 'Reparación integral de músculos y articulaciones.' },
    mech: { en: 'Regulates cellular actin, promoting cell migration and tissue repair.', es: 'Regula la actina celular, favoreciendo la migración celular y la reparación de tejidos.' } },
  { cat: 'gh-igf', name: 'KPV',
    desc: { en: 'Gut balance and inflammation control.', es: 'Equilibrio intestinal y control de la inflamación.' },
    mech: { en: 'Alpha-MSH-derived tripeptide with local anti-inflammatory activity in the digestive tract.', es: 'Tripéptido derivado de la alfa-MSH con actividad antiinflamatoria local en el tracto digestivo.' } },
  { cat: 'gh-igf', name: 'GHK-Cu',
    desc: { en: 'Skin regeneration and rejuvenation.', es: 'Regeneración y rejuvenecimiento cutáneo.' },
    mech: { en: 'Copper-peptide complex that stimulates collagen synthesis and extracellular matrix remodeling.', es: 'Complejo péptido-cobre que estimula la síntesis de colágeno y la remodelación de la matriz extracelular.' } },

  // ---- Brain, Mood & Sleep ----
  { cat: 'brain-sleep', name: 'Semax',
    desc: { en: 'Peak focus, memory and cognitive performance.', es: 'Máximo enfoque, memoria y rendimiento cognitivo.' },
    mech: { en: 'Synthetic ACTH fragment that increases BDNF, promoting neuroplasticity and focus.', es: 'Fragmento sintético de ACTH que incrementa el BDNF, favoreciendo la neuroplasticidad y el enfoque.' } },
  { cat: 'brain-sleep', name: 'Selank',
    desc: { en: 'Calm and mental clarity without sedation.', es: 'Calma y claridad mental sin sedación.' },
    mech: { en: 'Tuftsin analog with anxiolytic activity that modulates GABAergic activity without causing sedation.', es: 'Análogo de tuftsina con actividad ansiolítica que modula la actividad GABAérgica sin causar sedación.' } },
  { cat: 'brain-sleep', name: 'Cerebrolysin',
    desc: { en: 'Neurotrophic support for cognitive function.', es: 'Soporte neurotrófico para la función cognitiva.' },
    mech: { en: 'Mixture of neurotrophic peptides derived from brain protein, with action similar to BDNF and NGF.', es: 'Mezcla de péptidos neurotróficos derivados de proteína cerebral, con acción similar a BDNF y NGF.' } },
  { cat: 'brain-sleep', name: 'DSIP',
    desc: { en: 'Deep sleep and overnight recovery.', es: 'Sueño profundo y recuperación nocturna.' },
    mech: { en: 'Neuropeptide that interacts with GABA receptors to induce slow-wave sleep.', es: 'Neuropéptido que interactúa con receptores GABA para inducir sueño de ondas lentas.' } },
  { cat: 'brain-sleep', name: 'Ara-290',
    desc: { en: 'Research in neuroprotection and wellness.', es: 'Investigación en neuroprotección y bienestar.' },
    mech: { en: 'Non-hematopoietic derivative of erythropoietin that acts on cytoprotective receptors to promote neural repair.', es: 'Derivado no hematopoyético de la eritropoyetina que actúa sobre receptores de citoprotección para favorecer la reparación neural.' } },

  // ---- Performance & Cellular Longevity ----
  { cat: 'performance', name: 'MOTS-c',
    desc: { en: 'Cellular energy for performance and recovery.', es: 'Energía celular para rendimiento y recuperación.' },
    mech: { en: 'Mitochondrial-DNA-derived peptide that activates the AMPK pathway, improving metabolic efficiency.', es: 'Péptido derivado del ADN mitocondrial que activa la vía AMPK, mejorando la eficiencia metabólica.' } },
  { cat: 'performance', name: 'SS-31',
    desc: { en: 'Mitochondrial health and cellular resilience.', es: 'Salud mitocondrial y resistencia celular.' },
    mech: { en: 'Binds to cardiolipin in the inner mitochondrial membrane, stabilizing ATP production.', es: 'Se une a la cardiolipina en la membrana mitocondrial interna, estabilizando la producción de ATP.' } },
  { cat: 'performance', name: 'NAD+',
    desc: { en: 'Cellular energy and longevity from within.', es: 'Energía celular y longevidad desde el interior.' },
    mech: { en: 'Essential coenzyme in cellular energy production and sirtuin activity.', es: 'Coenzima esencial en la producción de energía celular y en la actividad de las sirtuinas.' } },
  { cat: 'performance', name: 'L-Carnitine',
    desc: { en: 'Converts fat into energy for your performance.', es: 'Convierte grasa en energía para tu rendimiento.' },
    mech: { en: 'Transports long-chain fatty acids into the mitochondria for oxidation.', es: 'Transporta ácidos grasos de cadena larga hacia la mitocondria para su oxidación.' } },
  { cat: 'performance', name: 'AOD-9604',
    desc: { en: 'Localized fat reduction.', es: 'Reducción de grasa localizada.' },
    mech: { en: 'GH fragment (176-191) that stimulates lipolysis without activating the IGF-1 receptor.', es: 'Fragmento de la GH (176-191) que estimula la lipólisis sin activar el receptor de IGF-1.' } },
  { cat: 'performance', name: 'Epitalon',
    desc: { en: 'Cellular regeneration and healthy aging.', es: 'Regeneración celular y envejecimiento saludable.' },
    mech: { en: 'Tetrapeptide that acts on the pineal gland, regulating melatonin production and telomerase activity.', es: 'Tetrapéptido que actúa sobre la glándula pineal, regulando la producción de melatonina y la actividad de la telomerasa.' } },

  // ---- Immunity & Overall Wellness ----
  { cat: 'immune', name: 'Thymosin Alpha-1',
    desc: { en: 'Advanced support for the immune system.', es: 'Apoyo avanzado al sistema inmunológico.' },
    mech: { en: 'Thymic peptide that modulates the maturation and function of T lymphocytes.', es: 'Péptido tímico que modula la maduración y función de los linfocitos T.' } },
  { cat: 'immune', name: 'Thymalin',
    desc: { en: "Strengthens the body's natural defenses.", es: 'Fortalece las defensas naturales del organismo.' },
    mech: { en: 'Thymus-derived peptide extract that helps restore balance in the cellular immune response.', es: 'Extracto peptídico del timo que ayuda a restaurar el equilibrio de la respuesta inmune celular.' } },
  { cat: 'immune', name: 'LL-37',
    desc: { en: 'Natural defenses and tissue recovery.', es: 'Defensas naturales y recuperación de tejidos.' },
    mech: { en: 'Cathelicidin peptide with direct antimicrobial activity and innate immune response modulation.', es: 'Péptido catelicidina con actividad antimicrobiana directa y modulación de la respuesta inmune innata.' } },
  { cat: 'immune', name: 'VIP',
    desc: { en: 'Immune balance and neuroprotection.', es: 'Equilibrio inmunológico y neuroprotección.' },
    mech: { en: 'Neuropeptide that regulates inflammation through VPAC receptors present on immune cells.', es: 'Neuropéptido que regula la inflamación a través de receptores VPAC presentes en células inmunes.' } },
  { cat: 'immune', name: 'FOXO4',
    desc: { en: 'Cutting-edge senolytic research.', es: 'Investigación senolítica de vanguardia.' },
    mech: { en: 'Peptide that disrupts the FOXO4-p53 interaction, promoting the clearance of senescent cells.', es: 'Péptido disruptor de la interacción FOXO4-p53, favoreciendo la eliminación de células senescentes.' } },
  { cat: 'immune', name: 'Kisspeptin-10',
    desc: { en: 'Comprehensive hormonal balance.', es: 'Equilibrio hormonal integral.' },
    mech: { en: 'Activates the KISS1R receptor, stimulating GnRH release along the hypothalamic-pituitary-gonadal axis.', es: 'Activa el receptor KISS1R, estimulando la liberación de GnRH en el eje hipotálamo-hipófisis-gónadas.' } },
  { cat: 'immune', name: 'Glutathione',
    desc: { en: 'Master antioxidant for cellular protection.', es: 'Antioxidante maestro para la protección celular.' },
    mech: { en: 'Endogenous antioxidant tripeptide that neutralizes free radicals and supports liver detoxification.', es: 'Tripéptido antioxidante endógeno que neutraliza radicales libres y apoya la desintoxicación hepática.' } },

  // ---- Hormonal & Sexual Wellness ----
  { cat: 'hormonal', name: 'PT-141',
    desc: { en: 'Restores desire and intimate connection.', es: 'Recupera el deseo y la conexión íntima.' },
    mech: { en: 'Melanocortin receptor agonist (MC3R/MC4R) that acts on the central nervous system to stimulate sexual desire.', es: 'Agonista de receptores de melanocortina (MC3R/MC4R) que actúa en el sistema nervioso central para estimular el deseo sexual.' } },
  { cat: 'hormonal', name: 'HCG',
    desc: { en: 'Support for natural testosterone production.', es: 'Apoyo a la producción natural de testosterona.' },
    mech: { en: 'Hormone that mimics LH, stimulating Leydig cells for testosterone production.', es: 'Hormona que imita a la LH, estimulando las células de Leydig para la producción de testosterona.' } },
  { cat: 'hormonal', name: 'Melanotan I',
    desc: { en: 'Natural pigmentation and skin protection.', es: 'Pigmentación natural y protección cutánea.' },
    mech: { en: 'Selective alpha-MSH analog that stimulates melanogenesis in melanocytes.', es: 'Análogo selectivo de la alfa-MSH que estimula la melanogénesis en los melanocitos.' } },
  { cat: 'hormonal', name: 'Melanotan II',
    desc: { en: 'Even tanning with added libido support.', es: 'Bronceado uniforme con apoyo a la libido.' },
    mech: { en: 'Non-selective melanocortin receptor agonist, with effects on pigmentation and libido.', es: 'Agonista no selectivo de receptores de melanocortina, con efecto sobre pigmentación y libido.' } },

  // ---- Aesthetics & Skin ----
  { cat: 'aesthetic', name: 'Snap-8',
    desc: { en: 'Smoothing of expression lines.', es: 'Suavizado de líneas de expresión.' },
    mech: { en: 'Octapeptide that inhibits neurotransmitter release at the neuromuscular junction, relaxing facial muscles.', es: 'Octapéptido que inhibe la liberación de neurotransmisores en la unión neuromuscular, relajando la musculatura facial.' } },
  { cat: 'aesthetic', name: 'Lemon Bottle',
    desc: { en: 'Localized fat dissolution, professional aesthetic use.', es: 'Disolución localizada de grasa, uso estético profesional.' },
    mech: { en: 'Injectable lipolytic solution that promotes the breakdown of localized adipocyte membranes.', es: 'Solución lipolítica inyectable que favorece la ruptura de membranas adipocitarias localizadas.' } },
  { cat: 'aesthetic', name: 'Botulinum Toxin',
    desc: { en: 'Muscle relaxation for aesthetic purposes, professional use.', es: 'Relajación muscular para fines estéticos, uso profesional.' },
    mech: { en: 'Neurotoxin that blocks acetylcholine release at the neuromuscular junction, relaxing the treated muscle.', es: 'Neurotoxina que bloquea la liberación de acetilcolina en la placa neuromuscular, relajando el músculo tratado.' } },
  { cat: 'aesthetic', name: 'Hyaluronic Acid',
    desc: { en: 'Hydration and volume for the skin.', es: 'Hidratación y volumen para la piel.' },
    mech: { en: 'Glycosaminoglycan that retains water in the dermal matrix, providing volume and hydration.', es: 'Glicosaminoglicano que retiene agua en la matriz dérmica, aportando volumen e hidratación.' } },

  // ---- Stacks ----
  { cat: 'stacks', name: { en: 'CJC-1295 (No DAC) + Ipamorelin', es: 'CJC-1295 (No DAC) + Ipamorelin' },
    desc: { en: 'Classic synergy for GH, recovery and sleep.', es: 'Sinergia clásica para GH, recuperación y sueño.' },
    mech: { en: 'Combines a short-acting GHRH with a selective ghrelin secretagogue for a fuller GH pulse.', es: 'Combina un GHRH de acción corta con un secretagogo selectivo de grelina para un pulso de GH más completo.' } },
  { cat: 'stacks', name: { en: 'CagriSema Standard', es: 'CagriSema Estándar' },
    desc: { en: 'Cagrilintide + Semaglutide — dual-action appetite control.', es: 'Cagrilintide + Semaglutide — control de apetito de doble acción.' },
    mech: { en: 'Combines an amylin analog with a GLP-1 agonist, acting on two distinct appetite-control pathways.', es: 'Combina un análogo de amilina con un agonista GLP-1, actuando sobre dos vías distintas del control del apetito.' } },
  { cat: 'stacks', name: { en: 'CagriSema High Concentration', es: 'CagriSema Alta Concentración' },
    desc: { en: 'Higher-concentration version of the most sought-after duo.', es: 'Versión de mayor concentración del dúo más buscado.' },
    mech: { en: 'Same amylin + GLP-1 synergy, in a higher-concentration vial.', es: 'Misma sinergia amilina + GLP-1, en una presentación de mayor concentración por vial.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 Standard', es: 'BPC-157 + TB-500 Estándar' },
    desc: { en: 'Comprehensive tissue recovery, standard presentation.', es: 'Recuperación integral de tejidos, presentación estándar.' },
    mech: { en: 'Combines local angiogenesis with cellular actin regulation for more complete tissue recovery.', es: 'Combina angiogénesis local con regulación de actina celular para una recuperación de tejidos más completa.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 High Concentration', es: 'BPC-157 + TB-500 Alta Concentración' },
    desc: { en: 'Comprehensive tissue recovery, higher concentration.', es: 'Recuperación integral de tejidos, mayor concentración.' },
    mech: { en: 'Same tissue-repair synergy in a higher-concentration vial.', es: 'Misma sinergia de reparación tisular en una presentación de mayor concentración por vial.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + GHK-Cu + TB-500', es: 'BPC-157 + GHK-Cu + TB-500' },
    desc: { en: 'Triple combination for recovery and skin regeneration.', es: 'Triple combinación para recuperación y regeneración cutánea.' },
    mech: { en: 'Combines gastric repair, collagen remodeling and tissue regeneration in a single protocol.', es: 'Une reparación gástrica, remodelación de colágeno y regeneración tisular en un mismo protocolo.' } },
  { cat: 'stacks', name: { en: 'GHK-Cu + TB-500 + BPC-157 + KPV', es: 'GHK-Cu + TB-500 + BPC-157 + KPV' },
    desc: { en: 'Quadruple blend for advanced comprehensive recovery.', es: 'Blend cuádruple para recuperación integral avanzada.' },
    mech: { en: 'Combines four mechanisms: skin regeneration, tissue repair, angiogenesis and local inflammation control.', es: 'Combina cuatro mecanismos: regeneración cutánea, reparación tisular, angiogénesis y control local de la inflamación.' } },

  // ---- Supplies & Reconstitution ----
  { cat: 'supplies', name: { en: 'Bacteriostatic Water / PBS', es: 'Agua Bacteriostática / PBS' },
    desc: { en: 'Sterile solution for peptide reconstitution.', es: 'Solución estéril para reconstitución de péptidos.' },
    mech: { en: 'Sterile isotonic solution used to reconstitute lyophilized peptides while maintaining their stability.', es: 'Solución isotónica estéril utilizada para reconstituir péptidos liofilizados manteniendo su estabilidad.' } },
  { cat: 'supplies', name: { en: 'Benzyl Alcohol 0.9%', es: 'Alcohol Bencílico 0.9%' },
    desc: { en: 'Bacteriostatic water with preservative for reconstitution.', es: 'Agua bacteriostática con conservador para reconstitución.' },
    mech: { en: 'Bacteriostatic water with preservative that extends the stability of the reconstituted peptide.', es: 'Agua bacteriostática con conservador que prolonga la estabilidad del péptido ya reconstituido.' } },
  { cat: 'supplies', name: { en: 'Acetic Acid 0.6%', es: 'Ácido Acético 0.6%' },
    desc: { en: 'Reconstitution solution for specific compounds.', es: 'Solución de reconstitución para compuestos específicos.' },
    mech: { en: 'Acidic pH reconstitution solution, required for peptides with low solubility in neutral water.', es: 'Solución de reconstitución de pH ácido, requerida para péptidos con baja solubilidad en agua neutra.' } },
];

function nameOf(p) { return typeof p.name === 'string' ? p.name : p.name[CURRENT_LANG]; }

// ============================================================================
// Site copy dictionary
// ============================================================================
const I18N = {
  en: {
    'nav.inicio': 'Home', 'nav.ecosistema': 'Ecosystem', 'nav.productos': 'Products',
    'nav.historia': 'History', 'nav.filosofia': 'Philosophy', 'nav.contacto': 'Contact',

    'hero.eyebrow': 'Science · Performance · Longevity · Evolution',
    'hero.lede': 'Applied science for human optimization. An ecosystem of biohacking, research and education for performance, recovery and longevity.',
    'hero.cta1': 'View Products', 'hero.cta2': 'Explore Ecosystem', 'hero.scroll': 'Scroll',

    'intro.eyebrow': 'Introduction',
    'intro.h2': 'Applied science for a better version of you.',
    'intro.p1': 'We bring scientific innovation and human optimization to those seeking to responsibly improve their quality of life.',
    'intro.p2': 'We integrate science, biohacking, technology and education into one ecosystem, focused on performance, recovery, body composition and longevity.',

    'eco.eyebrow': 'Brand Divisions',
    'eco.h2': 'An ecosystem designed for human evolution',
    'eco.lede': 'Four specialized divisions, one identity: innovation, excellence and applied science.',
    'eco1.sub': 'Core brand', 'eco1.p': 'Responsible biohacking and scientific education in service of wellness and longevity.',
    'eco1.tag1': 'Biohacking', 'eco1.tag2': 'Longevity', 'eco1.tag3': 'Cognitive Performance',
    'eco2.sub': 'Research & Development', 'eco2.p': 'Scientific research and emerging technologies for the future of human optimization.',
    'eco2.tag1': 'Research', 'eco2.tag2': 'RUO Products',
    'eco3.sub': 'Peak Physical Performance', 'eco3.p': 'Athletic performance, recovery and body composition based on evidence.',
    'eco3.tag1': 'Performance', 'eco3.tag2': 'Recovery',
    'eco4.sub': 'Athletic Lifestyle', 'eco4.p': 'Technical apparel and accessories for a lifestyle focused on movement.',
    'eco4.tag1': 'Gym Wear', 'eco4.tag2': 'Athleisure',

    'products.eyebrow': 'Catalog',
    'products.h2': 'Scientific innovation for human optimization',
    'products.lede': 'Specialized portfolio, organized by research lines.',
    'products.notice_pre': 'Products', 'products.notice_strong': 'Research Use Only (RUO)',
    'products.notice_post': 'where applicable. For educational and informational purposes. Not medical advice and not a substitute for professional consultation.',
    'filters.all': 'All',
    'catalog.note_pre': 'For information on our full available catalog, please request it via WhatsApp',

    'why.eyebrow': 'Why PEPTORA?',
    'why.h2_pre': 'The human body holds ', 'why.h2_em': 'extraordinary potential', 'why.h2_post': ' with the right tools.',
    'why.lede': "We bring together modern science on metabolism, recovery and performance in an ecosystem built to evolve constantly.",
    'why.punch1': "We don't follow trends.", 'why.punch2': 'We bring science to people.',
    'pillar1.h': 'Applied Science', 'pillar1.p': 'Information based on available evidence.',
    'pillar2.h': 'Human Optimization', 'pillar2.p': 'Wellness, recovery and metabolism.',
    'pillar3.h': 'Innovation', 'pillar3.p': 'Emerging technologies in biohacking and longevity.',
    'pillar4.h': 'Education', 'pillar4.p': 'Clear and responsible content.',
    'pillar5.h': 'Performance', 'pillar5.p': 'Peak physical and cognitive potential.',
    'pillar6.h': 'Evolution', 'pillar6.p': 'Continuous improvement as identity.',

    'manifesto.eyebrow': 'Manifesto',
    'manifesto.h2_1': 'Evolving is not an option.', 'manifesto.h2_2': "It's a decision.",
    'manifesto.p1': 'Science is advancing faster than ever — and with it, our understanding of metabolism, aging and human performance.',
    'manifesto.p2': 'We believe in knowledge before promises.<br>In discipline backed by correct information.<br>In technology in service of quality of life.<br>In longevity as living with energy and purpose.',
    'manifesto.p3': "We don't sell promises. We build a community that values education and continuous improvement.",

    'historia.eyebrow': 'Our History',
    'historia.h2': 'Where science drives evolution',
    'historia.lede': 'PEPTORA was born to bring cutting-edge science and biohacking to those seeking more health, energy and performance.',
    'historia.li1': 'Sleep better.', 'historia.li2': 'Train smarter.', 'historia.li3': 'Understand metabolism.',
    'historia.li4': 'Support recovery.', 'historia.li5': 'Keep learning.',
    'tl1.h': 'The Origin', 'tl1.p': 'Human evolution also depends on daily decisions. With that philosophy, PEPTORA — Research Peptide Labs was born.',
    'tl2.h': 'Ecosystem Growth', 'tl2.p': 'New divisions emerge: PEPTORA LABS™, PERFORMANCE™ and ACTIVE™.',
    'tl3.h': 'One Shared Purpose', 'tl3.p': 'Each division drives a community that values science and constant evolution.',
    'tl4.h': 'More Than a Company', 'tl4.p': 'A philosophy of life where science drives evolution.',

    'quienes.eyebrow': 'Who We Are',
    'quienes.h2': 'An ecosystem dedicated to human optimization',
    'quienes.p1': 'A company focused on human optimization through applied science, education and technological innovation.',
    'quienes.p2': "We don't replace medical care or promote miracle solutions. We foster continuous learning about how the body works.",
    'quienes.tag1': 'Responsible Biohacking', 'quienes.tag2': 'Scientific Education', 'quienes.tag3': 'Body Composition',
    'quienes.tag4': 'Recovery', 'quienes.tag5': 'Longevity',

    'filosofia.eyebrow': 'Philosophy',
    'filosofia.h2': 'Evolution begins with knowledge',
    'filosofia.lede': 'Six principles support the way we understand human optimization.',
    'philo1.h': 'Science', 'philo1.p': 'Grounded in evidence and critical thinking.',
    'philo2.h': 'Education', 'philo2.p': 'Understanding the body to decide better.',
    'philo3.h': 'Prevention', 'philo3.p': "Investing today in tomorrow's health.",
    'philo4.h': 'Innovation', 'philo4.p': 'We evolve alongside science.',
    'philo5.h': 'Responsibility', 'philo5.p': 'Ethical and transparent communication.',
    'philo6.h': 'Continuous Evolution', 'philo6.p': "There's always room to improve.",
    'filosofia.closer': "Real biohacking isn't just technology: it's better habits, constant learning and responsibility.",

    'hacemos.eyebrow': 'What We Do',
    'hacemos.h2': 'Applied science for human potential',
    'hacemos.lede': 'Four integrated areas serving performance, metabolic health and longevity.',
    'tab1.label': 'Human Optimization', 'tab1.h': 'Human Optimization',
    'tab1.desc': 'Evidence-based strategies for overall wellness and sustainable habits.',
    'tab1.li1': 'Overall Wellness', 'tab1.li2': 'Body Composition', 'tab1.li3': 'Muscle Recovery',
    'tab1.li4': 'Cognitive Performance', 'tab1.li5': 'Longevity', 'tab1.li6': 'Scientific Education',
    'tab2.label': 'Biohacking & Technology', 'tab2.h': 'Biohacking and Technology',
    'tab2.desc': 'Tools to understand physiological status and support optimization with objective data.',
    'tab2.li1': 'Performance Monitoring', 'tab2.li2': 'Evidence-Based Protocols',
    'tab2.li3': 'Scientific Innovation', 'tab2.li4': 'Wellness Technology',
    'tab3.label': 'Research & Development', 'tab3.h': 'Research and Development',
    'tab3.desc': 'PEPTORA LABS™ explores new technologies and scientific outreach, with RUO products.',
    'tab3.li1': 'Research Products', 'tab3.li2': 'Scientific Outreach',
    'tab3.li3': 'Biotech Innovation', 'tab3.li4': 'Emerging Technologies',
    'tab4.label': 'Apparel & Lifestyle', 'tab4.h': 'Apparel & Lifestyle',
    'tab4.desc': 'PEPTORA ACTIVE™ accompanies those who live with discipline and peak performance.',
    'tab4.li1': 'Gym Wear', 'tab4.li2': 'Technical Apparel', 'tab4.li3': 'Premium Athleisure', 'tab4.li4': 'Sports Accessories',

    'valores.eyebrow': 'Values', 'valores.h2': 'The principles that define us',
    'val1.h': 'Science', 'val1.p': 'The foundation of everything we build.',
    'val2.h': 'Integrity', 'val2.p': 'Honesty and transparency.',
    'val3.h': 'Innovation', 'val3.p': 'New ways to optimize the body.',
    'val4.h': 'Excellence', 'val4.p': 'High standards in everything we do.',
    'val5.h': 'Education', 'val5.p': 'Informed decisions about wellness.',
    'val6.h': 'Continuous Evolution', 'val6.p': 'Learning and pushing limits every day.',
    'val7.h': 'Scientific Responsibility', 'val7.p': 'Ethics and objectivity above all.',

    'mission.eyebrow': 'Mission', 'mission.h': 'Democratizing science applied to wellness',
    'mission.p': "Building the leading biohacking ecosystem in Latin America, bringing innovation and evidence-based knowledge closer.",
    'vision.eyebrow': 'Vision', 'vision.h': 'Building the future of human optimization',
    'vision.p': 'Connecting research, education, technology and lifestyle under one philosophy of continuous evolution.',

    'compliance.eyebrow': 'Commitment to Science',
    'compliance.h2': 'Ethics, transparency and evidence',
    'compliance.lede_pre': 'Many molecules and peptides in our ecosystem are',
    'compliance.lede_em': 'Research Use Only (RUO)',
    'compliance.lede_post': ', intended exclusively for research, in accordance with applicable jurisdiction.',
    'comp1.h': 'Evidence-Based Education', 'comp1.p': 'Information grounded in scientific literature.',
    'comp2.h': 'Transparency', 'comp2.p': 'We distinguish established evidence from emerging research.',
    'comp3.h': 'Scientific Responsibility', 'comp3.p': 'We discourage unrealistic expectations.',
    'comp4.h': 'Ongoing Research', 'comp4.p': 'Continuous updates as evidence evolves.',
    'notice.strong': 'Important notice:',
    'notice.text': 'information for educational purposes. Does not constitute medical advice or replace professional consultation. RUO products are intended exclusively for research and must be used in accordance with applicable law.',

    'contact.eyebrow': 'Contact', 'contact.h2': "We're here to help",
    'contact.lede': 'Reach out to learn more about our products and divisions.',
    'contact.name': 'Name', 'contact.email': 'Your email', 'contact.message': 'What information do you need?',
    'contact.send': 'Send Message', 'contact.whatsapp': 'WhatsApp',
    'contact.side_note': 'Direct, personal response — no intermediaries.',

    'footer.tag': 'Science · Performance · Longevity · Evolution',
    'footer.rights': 'All rights reserved.',

    'form.sending': 'Sending…', 'form.ok': "Message sent! We'll get back to you soon.",
    'form.err': "Couldn't send. Please message us on WhatsApp.",
    'mech.label': 'Mechanism of Action',
  },
  es: {
    'nav.inicio': 'Inicio', 'nav.ecosistema': 'Ecosistema', 'nav.productos': 'Productos',
    'nav.historia': 'Historia', 'nav.filosofia': 'Filosofía', 'nav.contacto': 'Contacto',

    'hero.eyebrow': 'Ciencia · Rendimiento · Longevidad · Evolución',
    'hero.lede': 'Ciencia aplicada a la optimización humana. Un ecosistema de biohacking, investigación y educación para el rendimiento, la recuperación y la longevidad.',
    'hero.cta1': 'Ver productos', 'hero.cta2': 'Explorar ecosistema', 'hero.scroll': 'Desplázate',

    'intro.eyebrow': 'Introducción',
    'intro.h2': 'Ciencia aplicada para una mejor versión de ti.',
    'intro.p1': 'Acercamos la innovación científica y la optimización humana a quienes buscan mejorar su calidad de vida con responsabilidad.',
    'intro.p2': 'Integramos ciencia, biohacking, tecnología y educación en un mismo ecosistema, enfocado en rendimiento, recuperación, composición corporal y longevidad.',

    'eco.eyebrow': 'Divisiones de marca',
    'eco.h2': 'Un ecosistema diseñado para la evolución humana',
    'eco.lede': 'Cuatro divisiones especializadas, una misma identidad: innovación, excelencia y ciencia aplicada.',
    'eco1.sub': 'Núcleo de marca', 'eco1.p': 'Biohacking responsable y educación científica al servicio del bienestar y la longevidad.',
    'eco1.tag1': 'Biohacking', 'eco1.tag2': 'Longevidad', 'eco1.tag3': 'Rendimiento cognitivo',
    'eco2.sub': 'Investigación & desarrollo', 'eco2.p': 'Investigación científica y tecnologías emergentes para el futuro de la optimización humana.',
    'eco2.tag1': 'Investigación', 'eco2.tag2': 'Productos RUO',
    'eco3.sub': 'Máximo rendimiento físico', 'eco3.p': 'Desempeño deportivo, recuperación y composición corporal basados en evidencia.',
    'eco3.tag1': 'Rendimiento', 'eco3.tag2': 'Recuperación',
    'eco4.sub': 'Lifestyle deportivo', 'eco4.p': 'Apparel técnico y accesorios para un estilo de vida enfocado en el movimiento.',
    'eco4.tag1': 'Gym Wear', 'eco4.tag2': 'Athleisure',

    'products.eyebrow': 'Catálogo',
    'products.h2': 'Innovación científica para la optimización humana',
    'products.lede': 'Portafolio especializado, organizado por líneas de investigación.',
    'products.notice_pre': 'Productos', 'products.notice_strong': 'Research Use Only (RUO)',
    'products.notice_post': 'cuando corresponda. Fines educativos e informativos. No constituyen asesoría médica ni sustituyen consulta profesional.',
    'filters.all': 'Todos',
    'catalog.note_pre': 'Si deseas obtener información sobre el catálogo disponible, favor de solicitarlo al número de WhatsApp',

    'why.eyebrow': '¿Por qué PEPTORA?',
    'why.h2_pre': 'El cuerpo humano tiene un ', 'why.h2_em': 'potencial extraordinario', 'why.h2_post': ' con las herramientas adecuadas.',
    'why.lede': 'Reunimos ciencia moderna sobre metabolismo, recuperación y rendimiento en un ecosistema pensado para evolucionar constantemente.',
    'why.punch1': 'No seguimos tendencias.', 'why.punch2': 'Acercamos la ciencia a las personas.',
    'pillar1.h': 'Ciencia Aplicada', 'pillar1.p': 'Información basada en evidencia disponible.',
    'pillar2.h': 'Optimización Humana', 'pillar2.p': 'Bienestar, recuperación y metabolismo.',
    'pillar3.h': 'Innovación', 'pillar3.p': 'Tecnologías emergentes en biohacking y longevidad.',
    'pillar4.h': 'Educación', 'pillar4.p': 'Contenido claro y responsable.',
    'pillar5.h': 'Rendimiento', 'pillar5.p': 'Máximo potencial físico y cognitivo.',
    'pillar6.h': 'Evolución', 'pillar6.p': 'Mejora continua como identidad.',

    'manifesto.eyebrow': 'Manifiesto',
    'manifesto.h2_1': 'Evolucionar no es una opción.', 'manifesto.h2_2': 'Es una decisión.',
    'manifesto.p1': 'La ciencia avanza más rápido que nunca — y con ella, nuestra comprensión del metabolismo, el envejecimiento y el rendimiento humano.',
    'manifesto.p2': 'Creemos en el conocimiento antes que en la promesa.<br>En la disciplina respaldada por información correcta.<br>En la tecnología al servicio de la calidad de vida.<br>En la longevidad como vivir con energía y propósito.',
    'manifesto.p3': 'No vendemos promesas. Construimos una comunidad que valora la educación y la mejora continua.',

    'historia.eyebrow': 'Nuestra Historia',
    'historia.h2': 'Donde la ciencia impulsa la evolución',
    'historia.lede': 'PEPTORA nace para acercar la ciencia de vanguardia y el biohacking a quienes buscan más salud, energía y rendimiento.',
    'historia.li1': 'Dormir mejor.', 'historia.li2': 'Entrenar con inteligencia.', 'historia.li3': 'Comprender el metabolismo.',
    'historia.li4': 'Favorecer la recuperación.', 'historia.li5': 'Aprender continuamente.',
    'tl1.h': 'El origen', 'tl1.p': 'La evolución humana depende también de las decisiones diarias. Con esa filosofía nace PEPTORA — Research Peptide Labs.',
    'tl2.h': 'Crecimiento del ecosistema', 'tl2.p': 'Surgen nuevas divisiones: PEPTORA LABS™, PERFORMANCE™ y ACTIVE™.',
    'tl3.h': 'Un mismo propósito', 'tl3.p': 'Cada división impulsa una comunidad que valora la ciencia y la evolución constante.',
    'tl4.h': 'Más que una empresa', 'tl4.p': 'Una filosofía de vida donde la ciencia impulsa la evolución.',

    'quienes.eyebrow': 'Quiénes Somos',
    'quienes.h2': 'Un ecosistema dedicado a la optimización humana',
    'quienes.p1': 'Empresa orientada a la optimización humana mediante ciencia aplicada, educación e innovación tecnológica.',
    'quienes.p2': 'No reemplazamos la atención médica ni promovemos soluciones milagrosas. Fomentamos el aprendizaje continuo sobre cómo funciona el organismo.',
    'quienes.tag1': 'Biohacking responsable', 'quienes.tag2': 'Educación científica', 'quienes.tag3': 'Composición corporal',
    'quienes.tag4': 'Recuperación', 'quienes.tag5': 'Longevidad',

    'filosofia.eyebrow': 'Filosofía',
    'filosofia.h2': 'La evolución comienza con el conocimiento',
    'filosofia.lede': 'Seis principios sostienen nuestra manera de entender la optimización humana.',
    'philo1.h': 'Ciencia', 'philo1.p': 'Sustentada en evidencia y pensamiento crítico.',
    'philo2.h': 'Educación', 'philo2.p': 'Comprender el cuerpo para decidir mejor.',
    'philo3.h': 'Prevención', 'philo3.p': 'Invertir hoy en la salud del futuro.',
    'philo4.h': 'Innovación', 'philo4.p': 'Evolucionamos junto con la ciencia.',
    'philo5.h': 'Responsabilidad', 'philo5.p': 'Comunicación ética y transparente.',
    'philo6.h': 'Evolución Continua', 'philo6.p': 'Siempre hay una oportunidad de mejora.',
    'filosofia.closer': 'El biohacking real no es solo tecnología: es mejores hábitos, aprendizaje constante y responsabilidad.',

    'hacemos.eyebrow': 'Qué Hacemos',
    'hacemos.h2': 'Ciencia aplicada al potencial humano',
    'hacemos.lede': 'Cuatro áreas integradas al servicio del rendimiento, la salud metabólica y la longevidad.',
    'tab1.label': 'Optimización Humana', 'tab1.h': 'Optimización Humana',
    'tab1.desc': 'Estrategias respaldadas por evidencia para el bienestar integral y hábitos sostenibles.',
    'tab1.li1': 'Bienestar integral', 'tab1.li2': 'Composición corporal', 'tab1.li3': 'Recuperación muscular',
    'tab1.li4': 'Rendimiento cognitivo', 'tab1.li5': 'Longevidad', 'tab1.li6': 'Educación científica',
    'tab2.label': 'Biohacking & Tecnología', 'tab2.h': 'Biohacking y Tecnología',
    'tab2.desc': 'Herramientas para conocer el estado fisiológico y apoyar la optimización con datos objetivos.',
    'tab2.li1': 'Monitoreo del rendimiento', 'tab2.li2': 'Protocolos basados en evidencia',
    'tab2.li3': 'Innovación científica', 'tab2.li4': 'Tecnología aplicada al bienestar',
    'tab3.label': 'Investigación & Desarrollo', 'tab3.h': 'Investigación y Desarrollo',
    'tab3.desc': 'PEPTORA LABS™ explora nuevas tecnologías y divulgación científica, con productos RUO.',
    'tab3.li1': 'Productos para investigación', 'tab3.li2': 'Divulgación científica',
    'tab3.li3': 'Innovación biotecnológica', 'tab3.li4': 'Tecnologías emergentes',
    'tab4.label': 'Apparel & Lifestyle', 'tab4.h': 'Apparel & Lifestyle',
    'tab4.desc': 'PEPTORA ACTIVE™ acompaña a quienes viven con disciplina y alto rendimiento.',
    'tab4.li1': 'Gym Wear', 'tab4.li2': 'Apparel técnico', 'tab4.li3': 'Athleisure Premium', 'tab4.li4': 'Accesorios deportivos',

    'valores.eyebrow': 'Valores', 'valores.h2': 'Los principios que nos definen',
    'val1.h': 'Ciencia', 'val1.p': 'Base de todo lo que construimos.',
    'val2.h': 'Integridad', 'val2.p': 'Honestidad y transparencia.',
    'val3.h': 'Innovación', 'val3.p': 'Nuevas formas de optimizar el organismo.',
    'val4.h': 'Excelencia', 'val4.p': 'Altos estándares en todo lo que hacemos.',
    'val5.h': 'Educación', 'val5.p': 'Decisiones informadas sobre bienestar.',
    'val6.h': 'Evolución Continua', 'val6.p': 'Aprender y superar límites cada día.',
    'val7.h': 'Responsabilidad Científica', 'val7.p': 'Ética y objetividad ante todo.',

    'mission.eyebrow': 'Misión', 'mission.h': 'Democratizar la ciencia aplicada al bienestar',
    'mission.p': 'Construir el ecosistema líder de biohacking en Latinoamérica, acercando innovación y conocimiento respaldado por evidencia.',
    'vision.eyebrow': 'Visión', 'vision.h': 'Construir el futuro de la optimización humana',
    'vision.p': 'Conectar investigación, educación, tecnología y estilo de vida bajo una misma filosofía de evolución continua.',

    'compliance.eyebrow': 'Compromiso con la ciencia',
    'compliance.h2': 'Ética, transparencia y evidencia',
    'compliance.lede_pre': 'Muchas moléculas y péptidos de nuestro ecosistema son',
    'compliance.lede_em': 'Research Use Only (RUO)',
    'compliance.lede_post': ', exclusivamente para investigación, conforme a la jurisdicción correspondiente.',
    'comp1.h': 'Educación basada en evidencia', 'comp1.p': 'Información fundamentada en literatura científica.',
    'comp2.h': 'Transparencia', 'comp2.p': 'Diferenciamos evidencia consolidada de investigación emergente.',
    'comp3.h': 'Responsabilidad científica', 'comp3.p': 'Desalentamos expectativas poco realistas.',
    'comp4.h': 'Investigación continua', 'comp4.p': 'Actualización permanente con la evidencia disponible.',
    'notice.strong': 'Aviso importante:',
    'notice.text': 'información con fines educativos. No constituye asesoría médica ni sustituye consulta profesional. Los productos RUO están destinados exclusivamente a investigación y deben usarse conforme a la legislación vigente.',

    'contact.eyebrow': 'Contacto', 'contact.h2': 'Estamos para ayudarte',
    'contact.lede': 'Escríbenos para conocer más sobre nuestros productos y divisiones.',
    'contact.name': 'Nombre', 'contact.email': 'Tu correo', 'contact.message': '¿Qué información necesitas?',
    'contact.send': 'Enviar mensaje', 'contact.whatsapp': 'WhatsApp',
    'contact.side_note': 'Respuesta directa y personalizada, sin intermediarios.',

    'footer.tag': 'Ciencia · Rendimiento · Longevidad · Evolución',
    'footer.rights': 'Todos los derechos reservados.',

    'form.sending': 'Enviando…', 'form.ok': '¡Mensaje enviado! Te responderemos pronto.',
    'form.err': 'No se pudo enviar. Escríbenos por WhatsApp.',
    'mech.label': 'Mecanismo de acción',
  },
};

let CURRENT_LANG = 'en';

function t(key) {
  return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][key]) || (I18N.en[key] || key);
}

function applyTranslations() {
  document.documentElement.lang = CURRENT_LANG;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Category filter pill labels (category id lives in data-filter)
  document.querySelectorAll('.filter-pill').forEach(pill => {
    const filter = pill.getAttribute('data-filter');
    if (filter === 'all') { pill.textContent = t('filters.all'); }
    else if (CAT_LABELS[CURRENT_LANG][filter]) { pill.textContent = CAT_LABELS[CURRENT_LANG][filter]; }
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = CURRENT_LANG === 'en' ? 'ES' : 'EN';

  renderProducts();
}

function setLanguage(lang) {
  CURRENT_LANG = lang === 'es' ? 'es' : 'en';
  try { localStorage.setItem('peptora_lang', CURRENT_LANG); } catch (e) {}
  applyTranslations();
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('peptora_lang'); } catch (e) {}
  CURRENT_LANG = saved === 'es' ? 'es' : 'en'; // English default

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => setLanguage(CURRENT_LANG === 'en' ? 'es' : 'en'));
  }
  applyTranslations();
}

// ============================================================================
// Product catalog rendering
// ============================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  const lang = CURRENT_LANG;
  const productWord = lang === 'es' ? 'producto' : 'product';

  grid.innerHTML = PEPTORA_PRODUCTS.map((p, i) => {
    const name = nameOf(p);
    const catLabel = CAT_LABELS[lang][p.cat] || p.cat;
    return `
    <div class="product-card show" data-cat="${p.cat}" data-idx="${i}">
      <span class="pc-cat">${catLabel}</span>
      <h4>${name}<svg class="pc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></h4>
      <p>${p.desc[lang]}</p>
      <div class="pc-mech"><div class="pc-mech-inner"><span class="pc-mech-label">${t('mech.label')}</span><p>${p.mech[lang]}</p></div></div>
    </div>
  `;
  }).join('');

  const total = PEPTORA_PRODUCTS.length;
  countEl && (countEl.textContent = lang === 'es' ? `${total} productos` : `${total} products`);

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('expanded'));
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
      if (countEl) countEl.textContent = `${visible} ${productWord}${visible === 1 ? '' : (lang === 'es' ? 's' : 's')}`;
    });
  }, { once: false });
}

// ============================================================================
// Contact form — destination address assembled at runtime, never in plain
// text in the page source, and sent via FormSubmit's AJAX endpoint so the
// static site never needs a backend of its own.
// ============================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  const u = ['p','e','p','t','o','r','a','m','x'].join('');
  const d = ['g','m','a','i','l','.','c','o','m'].join('');
  const dest = u + String.fromCharCode(64) + d;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.querySelector('.hp-field').value) return; // honeypot

    status.textContent = t('form.sending');
    status.className = 'form-status';

    const data = new FormData(form);
    data.append('_subject', 'New contact — PEPTORA');
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${dest}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('request failed');
      status.textContent = t('form.ok');
      status.className = 'form-status ok';
      form.reset();
    } catch (err) {
      status.textContent = t('form.err');
      status.className = 'form-status err';
    }
  });
}

// ============================================================================
// Init
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();       // sets CURRENT_LANG, applies translations, renders products
  initContactForm();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

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

  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.style.borderBottomColor = window.scrollY > 20 ? 'rgba(191,160,84,.45)' : 'rgba(0,0,0,.08)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
