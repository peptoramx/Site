// ============================================================================
// PEPTORA — Research Peptide Labs
// Research-grade compound catalog, i18n (EN default / ES toggle), interactions
// ============================================================================

const CAT_LABELS = {
  en: {
    metabolic: 'Metabolic Research', 'gh-igf': 'GH / IGF Research', 'brain-sleep': 'Neuroscience Research',
    performance: 'Cellular & Longevity Research', immune: 'Immune Research', hormonal: 'Endocrine Research',
    aesthetic: 'Dermal Research', stacks: 'Research Combinations', supplies: 'Lab Supplies',
  },
  es: {
    metabolic: 'Investigación Metabólica', 'gh-igf': 'Investigación GH / IGF', 'brain-sleep': 'Investigación Neurocientífica',
    performance: 'Investigación Celular y Longevidad', immune: 'Investigación Inmune', hormonal: 'Investigación Endocrina',
    aesthetic: 'Investigación Dérmica', stacks: 'Combinaciones de Investigación', supplies: 'Insumos de Laboratorio',
  },
};

// ---- Research compound catalog (bilingual, research-use framing only) ----
const PEPTORA_PRODUCTS = [
  // ---- Metabolic Research ----
  { cat: 'metabolic', name: 'Semaglutide',
    desc: { en: 'Studied for GLP-1 receptor-mediated appetite-regulation pathways.', es: 'Estudiado por su acción sobre las vías de regulación del apetito mediadas por el receptor GLP-1.' },
    mech: { en: 'GLP-1 receptor agonist that mimics the incretin hormone, used in models studying gastric emptying and hypothalamic appetite signaling.', es: 'Agonista del receptor GLP-1 que imita la incretina, utilizado en modelos de investigación sobre vaciado gástrico y señalización hipotalámica del apetito.' } },
  { cat: 'metabolic', name: 'Tirzepatide',
    desc: { en: 'Investigated as a dual GLP-1/GIP receptor agonist in metabolic research models.', es: 'Investigado como agonista dual de los receptores GLP-1/GIP en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1 and GIP receptor agonist studied for its combined effect on insulin-sensitivity research pathways.', es: 'Agonista dual de los receptores GLP-1 y GIP, estudiado por su efecto combinado en vías de investigación de sensibilidad a la insulina.' } },
  { cat: 'metabolic', name: 'Retatrutide',
    desc: { en: 'Under investigation as a triple GLP-1/GIP/glucagon receptor agonist.', es: 'En investigación como agonista triple de los receptores GLP-1/GIP/glucagón.' },
    mech: { en: 'Triple agonist of the GLP-1, GIP and glucagon receptors, studied for combined thermogenic and appetite-pathway research.', es: 'Agonista triple de los receptores GLP-1, GIP y glucagón, estudiado por su efecto combinado en vías termogénicas y de apetito.' } },
  { cat: 'metabolic', name: 'Cagrilintide',
    desc: { en: 'Studied for amylin-receptor-mediated satiety-signaling research.', es: 'Estudiado por su acción en la señalización de saciedad mediada por el receptor de amilina.' },
    mech: { en: 'Long-acting amylin analog used in central-nervous-system research models studying satiety signaling.', es: 'Análogo de amilina de acción prolongada utilizado en modelos de investigación del sistema nervioso central sobre señalización de saciedad.' } },
  { cat: 'metabolic', name: 'Mazdutide',
    desc: { en: 'Investigated as a dual GLP-1/glucagon receptor agonist in energy-expenditure research.', es: 'Investigado como agonista dual de los receptores GLP-1/glucagón en investigación de gasto energético.' },
    mech: { en: 'Dual GLP-1 and glucagon receptor agonist studied for combined appetite and energy-expenditure pathway research.', es: 'Agonista dual de los receptores GLP-1 y glucagón, estudiado en vías combinadas de apetito y gasto energético.' } },
  { cat: 'metabolic', name: 'Survodutide',
    desc: { en: 'Studied for dual GLP-1/glucagon receptor activity in metabolic research models.', es: 'Estudiado por su actividad dual en los receptores GLP-1/glucagón en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1/glucagon agonist used in research models examining fat-oxidation pathways.', es: 'Agonista dual GLP-1/glucagón utilizado en modelos de investigación sobre vías de oxidación de grasas.' } },
  { cat: 'metabolic', name: 'GLP-1',
    desc: { en: 'Reference incretin peptide used in glucose-regulation research.', es: 'Péptido incretina de referencia utilizado en investigación de regulación de la glucosa.' },
    mech: { en: 'Incretin peptide studied for glucose-dependent insulin-release and gastric-emptying research models.', es: 'Péptido incretina estudiado en modelos de liberación de insulina dependiente de glucosa y vaciado gástrico.' } },
  { cat: 'metabolic', name: '5-Amino-1MQ',
    desc: { en: 'Studied as an NNMT inhibitor in adipose-tissue metabolism research.', es: 'Estudiado como inhibidor de la enzima NNMT en investigación del metabolismo del tejido adiposo.' },
    mech: { en: 'NNMT enzyme inhibitor used in research models examining energy expenditure in adipose tissue.', es: 'Inhibidor de la enzima NNMT utilizado en modelos de investigación sobre gasto energético en tejido adiposo.' } },
  { cat: 'metabolic', name: 'Lipo-C',
    desc: { en: 'Lipotropic compound blend used in hepatic lipid-metabolism research.', es: 'Combinación lipotrópica utilizada en investigación del metabolismo hepático de lípidos.' },
    mech: { en: 'Combination of methionine, inositol and choline studied for hepatic fat-transport research models.', es: 'Combinación de metionina, inositol y colina estudiada en modelos de investigación de transporte hepático de grasas.' } },
  { cat: 'metabolic', name: 'Lipo-C + B12',
    desc: { en: 'Lipotropic blend with B12 for cellular energy-pathway research.', es: 'Blend lipotrópico con B12 para investigación de vías de energía celular.' },
    mech: { en: 'Lipotropic blend combined with vitamin B12, studied in fat-metabolism and cellular-energy research models.', es: 'Blend lipotrópico combinado con vitamina B12, estudiado en modelos de metabolismo de grasas y energía celular.' } },

  // ---- GH / IGF Research ----
  { cat: 'gh-igf', name: 'CJC-1295 (No DAC)',
    desc: { en: 'Studied as a short-acting GHRH analog in growth-hormone secretion research.', es: 'Estudiado como análogo de GHRH de acción corta en investigación de secreción de hormona de crecimiento.' },
    mech: { en: 'Short-acting GHRH analog used in research models studying pulsatile growth-hormone release from the pituitary.', es: 'Análogo de GHRH de acción corta utilizado en modelos de investigación sobre la liberación pulsátil de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'CJC-1295 (With DAC)',
    desc: { en: 'Investigated as a long-acting GHRH analog for sustained GH-release research.', es: 'Investigado como análogo de GHRH de acción prolongada para investigación de liberación sostenida de GH.' },
    mech: { en: 'CJC-1295 variant bound to an albumin-affinity domain, studied for extended GH-release research models.', es: 'Variante de CJC-1295 unida a un dominio de afinidad a albúmina, estudiada en modelos de liberación prolongada de GH.' } },
  { cat: 'gh-igf', name: 'Ipamorelin',
    desc: { en: 'Studied as a selective GHS-R secretagogue in growth-hormone research models.', es: 'Estudiado como secretagogo selectivo del receptor GHS-R en modelos de investigación de hormona de crecimiento.' },
    mech: { en: 'Selective ghrelin-receptor (GHS-R) secretagogue studied for GH release without notable cortisol or prolactin research interference.', es: 'Secretagogo selectivo del receptor de grelina (GHS-R) estudiado por su liberación de GH sin interferencia notable en cortisol o prolactina.' } },
  { cat: 'gh-igf', name: 'Sermorelin Acetate',
    desc: { en: 'Reference GHRH(1-29) fragment used in growth-hormone release research.', es: 'Fragmento de referencia GHRH(1-29) utilizado en investigación de liberación de hormona de crecimiento.' },
    mech: { en: 'Active GHRH fragment (1-29) studied for physiological growth-hormone release research models.', es: 'Fragmento activo de GHRH (1-29) estudiado en modelos de liberación fisiológica de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'Hexarelin Acetate',
    desc: { en: 'Studied as a high-potency ghrelin-receptor secretagogue.', es: 'Estudiado como secretagogo de alta potencia del receptor de grelina.' },
    mech: { en: 'High-potency GH secretagogue used in ghrelin-receptor research models.', es: 'Secretagogo de GH de alta potencia utilizado en modelos de investigación del receptor de grelina.' } },
  { cat: 'gh-igf', name: 'GHRP-6 Acetate',
    desc: { en: 'Investigated for ghrelin-receptor-mediated GH secretion research.', es: 'Investigado por su acción en la secreción de GH mediada por el receptor de grelina.' },
    mech: { en: 'GH secretagogue studied alongside ghrelin-receptor-mediated appetite-signaling research models.', es: 'Secretagogo de GH estudiado junto con modelos de señalización del apetito mediados por el receptor de grelina.' } },
  { cat: 'gh-igf', name: 'Tesamorelin',
    desc: { en: 'Studied as a GHRH analog in visceral-adipose-tissue research models.', es: 'Estudiado como análogo de GHRH en modelos de investigación de tejido adiposo visceral.' },
    mech: { en: 'GHRH analog developed for research specifically examining visceral-fat reduction via the GH axis.', es: 'Análogo de GHRH desarrollado para investigación específica sobre reducción de grasa visceral mediante el eje de GH.' } },
  { cat: 'gh-igf', name: 'HGH 191AA (Somatropin)',
    desc: { en: 'Reference recombinant growth hormone for laboratory research.', es: 'Hormona de crecimiento recombinante de referencia para investigación de laboratorio.' },
    mech: { en: 'Recombinant human growth hormone, identical in sequence to endogenous GH, used as a laboratory reference standard.', es: 'Hormona de crecimiento humana recombinante, idéntica en secuencia a la GH endógena, utilizada como estándar de referencia en laboratorio.' } },
  { cat: 'gh-igf', name: 'HGH Fragment 176-191',
    desc: { en: 'Studied C-terminal GH fragment in lipolysis-pathway research.', es: 'Fragmento C-terminal de GH estudiado en investigación de vías de lipólisis.' },
    mech: { en: 'C-terminal fragment of GH with no IGF-1 receptor activity, used in lipolysis-pathway research models.', es: 'Fragmento C-terminal de la GH sin actividad sobre el receptor de IGF-1, utilizado en modelos de investigación de lipólisis.' } },
  { cat: 'gh-igf', name: 'IGF-1 LR3',
    desc: { en: 'Extended half-life IGF-1 analog used in cell-proliferation research.', es: 'Análogo de IGF-1 de vida media extendida utilizado en investigación de proliferación celular.' },
    mech: { en: 'Extended half-life IGF-1 analog studied for direct IGF-1-receptor activation research.', es: 'Análogo de IGF-1 de vida media extendida, estudiado por su activación directa del receptor de IGF-1.' } },
  { cat: 'gh-igf', name: 'IGF-DES',
    desc: { en: 'Studied IGF-1 variant in localized tissue-growth research models.', es: 'Variante de IGF-1 estudiada en modelos de investigación de crecimiento tisular localizado.' },
    mech: { en: 'IGF-1 variant with greater local receptor affinity, studied in targeted tissue-research models.', es: 'Variante de IGF-1 con mayor afinidad local al receptor, estudiada en modelos de investigación tisular focalizada.' } },
  { cat: 'gh-igf', name: 'Follistatin',
    desc: { en: 'Investigated as a myostatin inhibitor in muscle-tissue research.', es: 'Investigado como inhibidor de miostatina en investigación de tejido muscular.' },
    mech: { en: 'Natural myostatin inhibitor studied in research models examining muscle-tissue growth regulation.', es: 'Inhibidor natural de la miostatina, estudiado en modelos de investigación sobre regulación del crecimiento del tejido muscular.' } },
  { cat: 'gh-igf', name: 'BPC-157',
    desc: { en: 'Studied for angiogenesis and tissue-repair pathway research.', es: 'Estudiado en investigación de vías de angiogénesis y reparación tisular.' },
    mech: { en: 'Peptide derived from a gastric protein, studied in research models examining angiogenesis and tissue repair.', es: 'Péptido derivado de una proteína gástrica, estudiado en modelos de investigación de angiogénesis y reparación de tejidos.' } },
  { cat: 'gh-igf', name: 'TB-500 (Thymosin B4 Acetate)',
    desc: { en: 'Investigated for actin-regulation and cell-migration research.', es: 'Investigado en regulación de actina y migración celular.' },
    mech: { en: 'Regulates cellular actin in research models studying cell migration and tissue-repair pathways.', es: 'Regula la actina celular en modelos de investigación sobre migración celular y vías de reparación tisular.' } },
  { cat: 'gh-igf', name: 'KPV',
    desc: { en: 'Studied tripeptide in gut anti-inflammatory pathway research.', es: 'Tripéptido estudiado en investigación de vías antiinflamatorias intestinales.' },
    mech: { en: 'Alpha-MSH-derived tripeptide studied for local anti-inflammatory activity in digestive-tract research models.', es: 'Tripéptido derivado de la alfa-MSH, estudiado por su actividad antiinflamatoria local en modelos de investigación del tracto digestivo.' } },
  { cat: 'gh-igf', name: 'GHK-Cu',
    desc: { en: 'Studied copper-peptide complex in collagen-synthesis research.', es: 'Complejo péptido-cobre estudiado en investigación de síntesis de colágeno.' },
    mech: { en: 'Copper-peptide complex studied for its role in collagen synthesis and extracellular-matrix research models.', es: 'Complejo péptido-cobre estudiado por su papel en la síntesis de colágeno y modelos de investigación de la matriz extracelular.' } },

  // ---- Neuroscience Research ----
  { cat: 'brain-sleep', name: 'Semax',
    desc: { en: 'Studied ACTH-fragment analog in BDNF and neuroplasticity research.', es: 'Análogo de fragmento de ACTH estudiado en investigación de BDNF y neuroplasticidad.' },
    mech: { en: 'Synthetic ACTH fragment studied for its effect on BDNF expression in neuroplasticity research models.', es: 'Fragmento sintético de ACTH estudiado por su efecto sobre la expresión de BDNF en modelos de investigación de neuroplasticidad.' } },
  { cat: 'brain-sleep', name: 'Selank',
    desc: { en: 'Investigated tuftsin analog in GABAergic-modulation research models.', es: 'Análogo de tuftsina investigado en modelos de modulación GABAérgica.' },
    mech: { en: 'Tuftsin analog studied for anxiolytic-related GABAergic activity in non-sedative research models.', es: 'Análogo de tuftsina estudiado por su actividad GABAérgica de tipo ansiolítico en modelos no sedantes.' } },
  { cat: 'brain-sleep', name: 'Cerebrolysin',
    desc: { en: 'Neurotrophic peptide mixture used in neurodegeneration research.', es: 'Mezcla de péptidos neurotróficos utilizada en investigación de neurodegeneración.' },
    mech: { en: 'Mixture of neurotrophic peptides derived from brain protein, studied alongside BDNF and NGF research models.', es: 'Mezcla de péptidos neurotróficos derivados de proteína cerebral, estudiada junto a modelos de investigación de BDNF y NGF.' } },
  { cat: 'brain-sleep', name: 'DSIP',
    desc: { en: 'Studied neuropeptide in slow-wave-sleep induction research models.', es: 'Neuropéptido estudiado en modelos de inducción de sueño de ondas lentas.' },
    mech: { en: 'Neuropeptide studied for GABA-receptor interaction in slow-wave-sleep research models.', es: 'Neuropéptido estudiado por su interacción con receptores GABA en modelos de investigación de sueño de ondas lentas.' } },
  { cat: 'brain-sleep', name: 'Ara-290',
    desc: { en: 'Non-hematopoietic EPO derivative studied in neuroprotection research.', es: 'Derivado no hematopoyético de EPO estudiado en investigación de neuroprotección.' },
    mech: { en: 'Non-hematopoietic derivative of erythropoietin studied for cytoprotective-receptor activity in neural-repair research.', es: 'Derivado no hematopoyético de la eritropoyetina, estudiado por su actividad en receptores citoprotectores en investigación de reparación neural.' } },

  // ---- Cellular & Longevity Research ----
  { cat: 'performance', name: 'MOTS-c',
    desc: { en: 'Mitochondrial-derived peptide studied in AMPK-pathway research.', es: 'Péptido mitocondrial estudiado en investigación de la vía AMPK.' },
    mech: { en: 'Mitochondrial-DNA-derived peptide studied for AMPK-pathway activation in metabolic-efficiency research.', es: 'Péptido derivado del ADN mitocondrial, estudiado por la activación de la vía AMPK en investigación de eficiencia metabólica.' } },
  { cat: 'performance', name: 'SS-31',
    desc: { en: 'Studied for cardiolipin-binding mitochondrial-stabilization research.', es: 'Estudiado en investigación de estabilización mitocondrial mediante unión a cardiolipina.' },
    mech: { en: 'Binds to cardiolipin in the inner mitochondrial membrane, studied in ATP-production research models.', es: 'Se une a la cardiolipina en la membrana mitocondrial interna, estudiado en modelos de investigación de producción de ATP.' } },
  { cat: 'performance', name: 'NAD+',
    desc: { en: 'Essential coenzyme studied in cellular bioenergetics and sirtuin research.', es: 'Coenzima esencial estudiada en bioenergética celular e investigación de sirtuinas.' },
    mech: { en: 'Essential coenzyme studied for its role in cellular energy production and sirtuin-activity research models.', es: 'Coenzima esencial estudiada por su papel en la producción de energía celular y modelos de investigación de sirtuinas.' } },
  { cat: 'performance', name: 'L-Carnitine',
    desc: { en: 'Studied in fatty-acid oxidation and mitochondrial-transport research.', es: 'Estudiado en investigación de oxidación de ácidos grasos y transporte mitocondrial.' },
    mech: { en: 'Transports long-chain fatty acids into the mitochondria, studied in fat-oxidation research models.', es: 'Transporta ácidos grasos de cadena larga hacia la mitocondria, estudiado en modelos de investigación de oxidación de grasas.' } },
  { cat: 'performance', name: 'AOD-9604',
    desc: { en: 'GH-fragment studied in lipolysis-pathway research models.', es: 'Fragmento de GH estudiado en modelos de investigación de vías de lipólisis.' },
    mech: { en: 'GH fragment (176-191) studied for lipolysis-pathway activity without IGF-1-receptor research interference.', es: 'Fragmento de GH (176-191) estudiado por su actividad en vías de lipólisis sin interferencia en el receptor de IGF-1.' } },
  { cat: 'performance', name: 'Epitalon',
    desc: { en: 'Tetrapeptide studied in telomerase-activity and pineal-function research.', es: 'Tetrapéptido estudiado en investigación de actividad de telomerasa y función pineal.' },
    mech: { en: 'Tetrapeptide studied for its action on the pineal gland, melatonin-production and telomerase-activity research models.', es: 'Tetrapéptido estudiado por su acción sobre la glándula pineal y modelos de investigación de producción de melatonina y actividad de la telomerasa.' } },

  // ---- Immune Research ----
  { cat: 'immune', name: 'Thymosin Alpha-1',
    desc: { en: 'Thymic peptide studied in T-lymphocyte modulation research.', es: 'Péptido tímico estudiado en investigación de modulación de linfocitos T.' },
    mech: { en: 'Thymic peptide studied for its role in T-lymphocyte maturation and function research models.', es: 'Péptido tímico estudiado por su papel en la maduración y función de los linfocitos T.' } },
  { cat: 'immune', name: 'Thymalin',
    desc: { en: "Thymus-derived extract studied in cellular immune-response research.", es: 'Extracto derivado del timo estudiado en investigación de respuesta inmune celular.' },
    mech: { en: 'Thymus-derived peptide extract studied for its role in cellular immune-response balance research.', es: 'Extracto peptídico del timo estudiado por su papel en el equilibrio de la respuesta inmune celular.' } },
  { cat: 'immune', name: 'LL-37',
    desc: { en: 'Cathelicidin peptide studied in antimicrobial and immune-modulation research.', es: 'Péptido catelicidina estudiado en investigación antimicrobiana y de modulación inmune.' },
    mech: { en: 'Cathelicidin peptide studied for direct antimicrobial activity and innate immune-response research.', es: 'Péptido catelicidina estudiado por su actividad antimicrobiana directa e investigación de la respuesta inmune innata.' } },
  { cat: 'immune', name: 'VIP',
    desc: { en: 'Neuropeptide studied for VPAC-receptor-mediated immune research.', es: 'Neuropéptido estudiado en investigación inmune mediada por el receptor VPAC.' },
    mech: { en: 'Neuropeptide studied for inflammation regulation through VPAC receptors in immune-cell research models.', es: 'Neuropéptido estudiado por la regulación de la inflamación a través de receptores VPAC en modelos de investigación de células inmunes.' } },
  { cat: 'immune', name: 'FOXO4',
    desc: { en: 'Peptide studied for FOXO4–p53 interaction in senescent-cell research.', es: 'Péptido estudiado por su interacción FOXO4-p53 en investigación de células senescentes.' },
    mech: { en: 'Peptide studied for disrupting the FOXO4-p53 interaction in senescent-cell clearance research.', es: 'Péptido estudiado por interrumpir la interacción FOXO4-p53 en investigación de eliminación de células senescentes.' } },
  { cat: 'immune', name: 'Kisspeptin-10',
    desc: { en: 'Studied for KISS1R-mediated HPG-axis signaling research.', es: 'Estudiado en investigación de señalización del eje HPG mediada por KISS1R.' },
    mech: { en: 'Activates the KISS1R receptor, studied in hypothalamic-pituitary-gonadal axis signaling research.', es: 'Activa el receptor KISS1R, estudiado en investigación de señalización del eje hipotálamo-hipófisis-gónadas.' } },
  { cat: 'immune', name: 'Glutathione',
    desc: { en: 'Endogenous antioxidant tripeptide studied in oxidative-stress research.', es: 'Tripéptido antioxidante endógeno estudiado en investigación de estrés oxidativo.' },
    mech: { en: 'Endogenous antioxidant tripeptide studied for free-radical neutralization and hepatic research models.', es: 'Tripéptido antioxidante endógeno estudiado por la neutralización de radicales libres en modelos de investigación hepática.' } },

  // ---- Endocrine Research ----
  { cat: 'hormonal', name: 'PT-141',
    desc: { en: 'Melanocortin-receptor (MC3R/MC4R) agonist studied in CNS arousal-pathway research.', es: 'Agonista de receptores de melanocortina (MC3R/MC4R) estudiado en investigación de vías de excitación del SNC.' },
    mech: { en: 'Melanocortin receptor agonist studied for central-nervous-system arousal-pathway signaling research.', es: 'Agonista de receptores de melanocortina estudiado por su señalización en vías de excitación del sistema nervioso central.' } },
  { cat: 'hormonal', name: 'HCG',
    desc: { en: 'Studied for LH-receptor-mediated Leydig-cell steroidogenesis research.', es: 'Estudiado en investigación de esteroidogénesis de células de Leydig mediada por el receptor de LH.' },
    mech: { en: 'Hormone studied for LH-receptor mimicry in Leydig-cell steroidogenesis research models.', es: 'Hormona estudiada por su acción mimética sobre el receptor de LH en modelos de investigación de esteroidogénesis en células de Leydig.' } },
  { cat: 'hormonal', name: 'Melanotan I',
    desc: { en: 'Selective alpha-MSH analog studied in melanogenesis-pathway research.', es: 'Análogo selectivo de alfa-MSH estudiado en investigación de la vía de melanogénesis.' },
    mech: { en: 'Selective alpha-MSH analog studied for melanocyte-stimulating pathway research.', es: 'Análogo selectivo de la alfa-MSH, estudiado en investigación de vías de estimulación de melanocitos.' } },
  { cat: 'hormonal', name: 'Melanotan II',
    desc: { en: 'Non-selective melanocortin-receptor agonist studied in pigmentation-pathway research.', es: 'Agonista no selectivo de receptores de melanocortina estudiado en investigación de vías de pigmentación.' },
    mech: { en: 'Non-selective melanocortin-receptor agonist studied across pigmentation and melanocortin-signaling research models.', es: 'Agonista no selectivo de receptores de melanocortina, estudiado en modelos de investigación de pigmentación y señalización de melanocortina.' } },

  // ---- Dermal Research ----
  { cat: 'aesthetic', name: 'Snap-8',
    desc: { en: 'Octapeptide studied for neuromuscular-junction inhibition in dermal research.', es: 'Octapéptido estudiado por la inhibición de la unión neuromuscular en investigación dérmica.' },
    mech: { en: 'Octapeptide studied for inhibiting neurotransmitter release at the neuromuscular junction in dermal-research models.', es: 'Octapéptido estudiado por inhibir la liberación de neurotransmisores en la unión neuromuscular en modelos de investigación dérmica.' } },
  { cat: 'aesthetic', name: 'Lemon Bottle',
    desc: { en: 'Lipolytic solution studied for localized adipocyte-membrane research.', es: 'Solución lipolítica estudiada en investigación de membranas adipocitarias localizadas.' },
    mech: { en: 'Lipolytic solution studied for its effect on localized adipocyte-membrane breakdown in laboratory models.', es: 'Solución lipolítica estudiada por su efecto en la ruptura de membranas adipocitarias localizadas en modelos de laboratorio.' } },
  { cat: 'aesthetic', name: 'Botulinum Toxin',
    desc: { en: 'Neurotoxin studied for acetylcholine-release inhibition at the neuromuscular junction.', es: 'Neurotoxina estudiada por la inhibición de la liberación de acetilcolina en la unión neuromuscular.' },
    mech: { en: 'Neurotoxin studied for blocking acetylcholine release at the neuromuscular junction in laboratory research models.', es: 'Neurotoxina estudiada por bloquear la liberación de acetilcolina en la unión neuromuscular en modelos de investigación de laboratorio.' } },
  { cat: 'aesthetic', name: 'Hyaluronic Acid',
    desc: { en: 'Glycosaminoglycan studied in dermal-matrix hydration research.', es: 'Glicosaminoglicano estudiado en investigación de hidratación de la matriz dérmica.' },
    mech: { en: 'Glycosaminoglycan studied for water retention in dermal-matrix research models.', es: 'Glicosaminoglicano estudiado por la retención de agua en modelos de investigación de la matriz dérmica.' } },

  // ---- Research Combinations ----
  { cat: 'stacks', name: { en: 'CJC-1295 (No DAC) + Ipamorelin', es: 'CJC-1295 (No DAC) + Ipamorelin' },
    desc: { en: 'Combined GHRH/secretagogue blend studied in GH-pulse research.', es: 'Blend combinado de GHRH/secretagogo estudiado en investigación de pulsos de GH.' },
    mech: { en: 'Combines a short-acting GHRH with a selective ghrelin secretagogue for fuller GH-pulse research models.', es: 'Combina un GHRH de acción corta con un secretagogo selectivo de grelina para modelos de investigación de pulsos de GH más completos.' } },
  { cat: 'stacks', name: { en: 'CagriSema Standard', es: 'CagriSema Estándar' },
    desc: { en: 'Amylin + GLP-1 combination studied in dual-pathway appetite research.', es: 'Combinación de amilina + GLP-1 estudiada en investigación de doble vía del apetito.' },
    mech: { en: 'Combines an amylin analog with a GLP-1 agonist, studied across two distinct appetite-pathway research models.', es: 'Combina un análogo de amilina con un agonista GLP-1, estudiado en dos vías distintas de investigación del apetito.' } },
  { cat: 'stacks', name: { en: 'CagriSema High Concentration', es: 'CagriSema Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the amylin + GLP-1 combination.', es: 'Vial de mayor concentración de la combinación amilina + GLP-1.' },
    mech: { en: 'Same amylin + GLP-1 research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación amilina + GLP-1, en un vial de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 Standard', es: 'BPC-157 + TB-500 Estándar' },
    desc: { en: 'Combined tissue-repair peptide blend for regenerative research models.', es: 'Blend combinado de péptidos de reparación tisular para modelos de investigación regenerativa.' },
    mech: { en: 'Combines local angiogenesis with cellular-actin regulation research for more complete tissue-repair models.', es: 'Combina angiogénesis local con regulación de actina celular para modelos de investigación de reparación tisular más completos.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 High Concentration', es: 'BPC-157 + TB-500 Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the tissue-repair blend.', es: 'Vial de mayor concentración del blend de reparación tisular.' },
    mech: { en: 'Same tissue-repair research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación de reparación tisular, en un vial de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + GHK-Cu + TB-500', es: 'BPC-157 + GHK-Cu + TB-500' },
    desc: { en: 'Triple-peptide blend studied in tissue-regeneration research.', es: 'Blend triple de péptidos estudiado en investigación de regeneración tisular.' },
    mech: { en: 'Combines gastric-repair, collagen-remodeling and tissue-regeneration research pathways in a single blend.', es: 'Combina vías de investigación de reparación gástrica, remodelación de colágeno y regeneración tisular en un solo blend.' } },
  { cat: 'stacks', name: { en: 'GHK-Cu + TB-500 + BPC-157 + KPV', es: 'GHK-Cu + TB-500 + BPC-157 + KPV' },
    desc: { en: 'Quad-peptide blend for advanced multi-pathway research.', es: 'Blend cuádruple para investigación avanzada de múltiples vías.' },
    mech: { en: 'Combines four research pathways: dermal regeneration, tissue repair, angiogenesis and local inflammatory-response models.', es: 'Combina cuatro vías de investigación: regeneración dérmica, reparación tisular, angiogénesis y modelos de respuesta inflamatoria local.' } },

  // ---- Lab Supplies ----
  { cat: 'supplies', name: { en: 'Bacteriostatic Water / PBS', es: 'Agua Bacteriostática / PBS' },
    desc: { en: 'Sterile solution for laboratory peptide reconstitution.', es: 'Solución estéril para reconstitución de péptidos en laboratorio.' },
    mech: { en: 'Sterile isotonic solution used to reconstitute lyophilized research peptides while maintaining stability.', es: 'Solución isotónica estéril utilizada para reconstituir péptidos de investigación liofilizados manteniendo su estabilidad.' } },
  { cat: 'supplies', name: { en: 'Benzyl Alcohol 0.9%', es: 'Alcohol Bencílico 0.9%' },
    desc: { en: 'Bacteriostatic water with preservative for laboratory reconstitution.', es: 'Agua bacteriostática con conservador para reconstitución de laboratorio.' },
    mech: { en: 'Bacteriostatic water with preservative studied for extending reconstituted-peptide stability in laboratory settings.', es: 'Agua bacteriostática con conservador utilizada para prolongar la estabilidad del péptido reconstituido en laboratorio.' } },
  { cat: 'supplies', name: { en: 'Acetic Acid 0.6%', es: 'Ácido Acético 0.6%' },
    desc: { en: 'Reconstitution solution for specific research compounds.', es: 'Solución de reconstitución para compuestos de investigación específicos.' },
    mech: { en: 'Acidic pH reconstitution solution required for research peptides with low solubility in neutral water.', es: 'Solución de reconstitución de pH ácido, requerida para péptidos de investigación con baja solubilidad en agua neutra.' } },
];

function nameOf(p) { return typeof p.name === 'string' ? p.name : p.name[CURRENT_LANG]; }

// ============================================================================
// Site copy dictionary
// ============================================================================
const I18N = {
  en: {
    'nav.home': 'Home', 'nav.products': 'Research Peptides', 'nav.science': 'Our Science', 'nav.contact': 'Contact',
    'disclaimer.text': 'For laboratory research use only. Not for human consumption.',

    'hero.eyebrow': 'Research-Grade Compounds · Est. 2024',
    'hero.h1_pre': 'Precision Peptides for ', 'hero.h1_em': 'Serious Research',
    'hero.lede': 'PEPTORA supplies research institutions, laboratories and biohacking researchers with rigorously sourced peptides for in-vitro and preclinical study.',
    'hero.cta1': 'Browse Research Catalog', 'hero.cta2': 'Research Collaborations',
    'hero.stat1n': '65+', 'hero.stat1l': 'Research Compounds',
    'hero.stat2n': '9', 'hero.stat2l': 'Research Categories',
    'hero.stat3n': '100%', 'hero.stat3l': 'RUO Compliant',

    'products.eyebrow': 'Research Catalog',
    'products.h2': 'Compounds Organized by Research Area',
    'products.lede': 'Every compound is supplied strictly for laboratory and preclinical research.',
    'products.notice': 'For laboratory research use only. Not for human consumption, diagnostic or therapeutic use.',
    'filters.all': 'All',
    'catalog.note_pre': 'For the complete catalog or technical data sheets, contact our research line at',
    'modal.mech_label': 'Mechanism of Action',
    'modal.cat_label': 'Research Area',

    'trust.eyebrow': 'The PEPTORA Ecosystem',
    'trust.h2': 'A research-first infrastructure',
    'trust1.h': 'PEPTORA LABS™', 'trust1.p': 'Research & development, emerging compounds.',
    'trust2.h': 'PEPTORA PERFORMANCE™', 'trust2.p': 'Cellular & metabolic research models.',
    'trust3.h': 'PEPTORA ACTIVE™', 'trust3.p': 'Applied research technical gear.',
    'trust4.h': 'Quality Assurance', 'trust4.p': 'Certificates of Analysis available on request.',

    'compliance.eyebrow': 'Research Use Only',
    'compliance.h2': 'Every compound, strictly for research',
    'compliance.p': 'All PEPTORA compounds are classified <strong>Research Use Only (RUO)</strong>. They are not drugs, dietary supplements, or cosmetics, and are not intended for human or veterinary use, diagnosis, treatment, cure, or prevention of any disease. Products are sold exclusively to qualified researchers, laboratories and institutions for in-vitro and preclinical study, in accordance with the applicable regulations of the purchaser\'s jurisdiction.',
    'compliance.note': 'By purchasing, the buyer confirms they are a qualified researcher or institution and assumes full responsibility for legal, compliant handling and use.',

    'about.eyebrow': 'Our Science',
    'about.h2': 'Behind the research',
    'about.lede': 'A closer look at the lab, the philosophy and the team — for those who want the full picture.',
    'acc1.trigger': 'Our Story',
    'acc1.p1': 'PEPTORA — Research Peptide Labs was founded in 2024 to supply serious researchers with reliably sourced peptides for laboratory study.',
    'acc1.p2': 'What began as a focused research-supply operation has grown into a multi-division ecosystem spanning compound research, cellular-performance models and applied research gear — always anchored in one principle: rigorous science, transparently sourced.',
    'acc2.trigger': 'Research Philosophy',
    'acc2.p1': 'Evidence before claims. Every compound listing reflects published research on mechanism of action — never therapeutic promises.',
    'acc2.p2': 'We hold ourselves to strict RUO standards: no compound is marketed, described, or sold in a way that implies human application.',
    'acc3.trigger': 'Mission & Values',
    'acc3.p1': '<strong>Mission:</strong> to be the most trustworthy supplier of research-grade peptides for laboratories across the Americas.',
    'acc3.p2': '<strong>Values:</strong> scientific rigor, regulatory transparency, technical accuracy, and responsible research collaboration.',

    'contact.eyebrow': 'Research & Collaboration',
    'contact.h2': 'Contact our research line',
    'contact.lede': 'For research inquiries, technical data sheets, feedback or collaboration opportunities — reach our team directly.',
    'contact.name': 'Name', 'contact.email': 'Institutional email', 'contact.message': 'Describe your research inquiry',
    'contact.send': 'Send Inquiry',
    'contact.phone_us': 'Research Line — USA', 'contact.phone_mx': 'Research Line — Mexico',
    'contact.address_label': 'Facility Address',
    'contact.side_note': 'For research, feedback and collaboration purposes only.',

    'footer.tag': 'Research-Grade Peptides Since 2024',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'All products are sold strictly for laboratory research use. Not for human or veterinary use, consumption, diagnosis, treatment, cure or prevention of disease.',

    'form.sending': 'Sending…', 'form.ok': "Inquiry sent. Our research team will follow up shortly.",
    'form.err': "Couldn't send. Please contact us via phone.",
  },
  es: {
    'nav.home': 'Inicio', 'nav.products': 'Péptidos de Investigación', 'nav.science': 'Nuestra Ciencia', 'nav.contact': 'Contacto',
    'disclaimer.text': 'Uso exclusivo de laboratorio e investigación. No apto para consumo humano.',

    'hero.eyebrow': 'Compuestos de Grado Investigación · Fundada en 2024',
    'hero.h1_pre': 'Péptidos de Precisión para ', 'hero.h1_em': 'Investigación Seria',
    'hero.lede': 'PEPTORA abastece a instituciones de investigación, laboratorios e investigadores de biohacking con péptidos rigurosamente obtenidos para estudios in vitro y preclínicos.',
    'hero.cta1': 'Ver Catálogo de Investigación', 'hero.cta2': 'Colaboraciones de Investigación',
    'hero.stat1n': '65+', 'hero.stat1l': 'Compuestos de Investigación',
    'hero.stat2n': '9', 'hero.stat2l': 'Categorías de Investigación',
    'hero.stat3n': '100%', 'hero.stat3l': 'Cumplimiento RUO',

    'products.eyebrow': 'Catálogo de Investigación',
    'products.h2': 'Compuestos Organizados por Área de Investigación',
    'products.lede': 'Cada compuesto se suministra estrictamente para investigación de laboratorio y preclínica.',
    'products.notice': 'Uso exclusivo de laboratorio e investigación. No apto para consumo humano, uso diagnóstico ni terapéutico.',
    'filters.all': 'Todos',
    'catalog.note_pre': 'Para el catálogo completo o fichas técnicas, contacta nuestra línea de investigación al',
    'modal.mech_label': 'Mecanismo de Acción',
    'modal.cat_label': 'Área de Investigación',

    'trust.eyebrow': 'El Ecosistema PEPTORA',
    'trust.h2': 'Una infraestructura orientada a la investigación',
    'trust1.h': 'PEPTORA LABS™', 'trust1.p': 'Investigación y desarrollo, compuestos emergentes.',
    'trust2.h': 'PEPTORA PERFORMANCE™', 'trust2.p': 'Modelos de investigación celular y metabólica.',
    'trust3.h': 'PEPTORA ACTIVE™', 'trust3.p': 'Equipo técnico para investigación aplicada.',
    'trust4.h': 'Control de Calidad', 'trust4.p': 'Certificados de Análisis disponibles a solicitud.',

    'compliance.eyebrow': 'Uso Exclusivo de Investigación',
    'compliance.h2': 'Cada compuesto, estrictamente para investigación',
    'compliance.p': 'Todos los compuestos de PEPTORA están clasificados como <strong>Research Use Only (RUO)</strong>. No son medicamentos, suplementos alimenticios ni cosméticos, y no están destinados al uso humano o veterinario, diagnóstico, tratamiento, cura o prevención de ninguna enfermedad. Los productos se venden exclusivamente a investigadores, laboratorios e instituciones calificadas para estudio in vitro y preclínico, conforme a la normativa aplicable en la jurisdicción del comprador.',
    'compliance.note': 'Al realizar la compra, el comprador confirma ser un investigador o institución calificada y asume total responsabilidad por el manejo y uso legal y conforme a la normativa.',

    'about.eyebrow': 'Nuestra Ciencia',
    'about.h2': 'Detrás de la investigación',
    'about.lede': 'Un vistazo más de cerca al laboratorio, la filosofía y el equipo — para quienes quieren el panorama completo.',
    'acc1.trigger': 'Nuestra Historia',
    'acc1.p1': 'PEPTORA — Research Peptide Labs se fundó en 2024 para abastecer a investigadores serios con péptidos confiables para estudio de laboratorio.',
    'acc1.p2': 'Lo que comenzó como una operación enfocada en el suministro para investigación ha crecido hasta convertirse en un ecosistema multidivisional que abarca investigación de compuestos, modelos de rendimiento celular y equipo de investigación aplicada — siempre anclado en un principio: ciencia rigurosa, obtenida con transparencia.',
    'acc2.trigger': 'Filosofía de Investigación',
    'acc2.p1': 'Evidencia antes que afirmaciones. Cada ficha de compuesto refleja investigación publicada sobre su mecanismo de acción — nunca promesas terapéuticas.',
    'acc2.p2': 'Nos sujetamos a estándares RUO estrictos: ningún compuesto se comercializa, describe o vende de forma que implique aplicación humana.',
    'acc3.trigger': 'Misión y Valores',
    'acc3.p1': '<strong>Misión:</strong> ser el proveedor más confiable de péptidos de grado investigación para laboratorios en toda América.',
    'acc3.p2': '<strong>Valores:</strong> rigor científico, transparencia regulatoria, precisión técnica y colaboración responsable en investigación.',

    'contact.eyebrow': 'Investigación y Colaboración',
    'contact.h2': 'Contacta nuestra línea de investigación',
    'contact.lede': 'Para consultas de investigación, fichas técnicas, retroalimentación u oportunidades de colaboración — contacta directamente a nuestro equipo.',
    'contact.name': 'Nombre', 'contact.email': 'Correo institucional', 'contact.message': 'Describe tu consulta de investigación',
    'contact.send': 'Enviar Consulta',
    'contact.phone_us': 'Línea de Investigación — EE.UU.', 'contact.phone_mx': 'Línea de Investigación — México',
    'contact.address_label': 'Dirección de la Instalación',
    'contact.side_note': 'Solo para fines de investigación, retroalimentación y colaboración.',

    'footer.tag': 'Péptidos de Grado Investigación Desde 2024',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer': 'Todos los productos se venden estrictamente para uso de investigación de laboratorio. No aptos para uso humano o veterinario, consumo, diagnóstico, tratamiento, cura o prevención de enfermedades.',

    'form.sending': 'Enviando…', 'form.ok': 'Consulta enviada. Nuestro equipo de investigación dará seguimiento pronto.',
    'form.err': 'No se pudo enviar. Contáctanos por teléfono.',
  },
};

let CURRENT_LANG = 'en';
function t(key) { return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][key]) || I18N.en[key] || key; }

function applyTranslations() {
  document.documentElement.lang = CURRENT_LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'))); });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    const filter = pill.getAttribute('data-filter');
    if (filter === 'all') pill.textContent = t('filters.all');
    else if (CAT_LABELS[CURRENT_LANG][filter]) pill.textContent = CAT_LABELS[CURRENT_LANG][filter];
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = CURRENT_LANG === 'en' ? 'ES' : 'EN';

  renderProducts();
  buildMarquee();
}

function setLanguage(lang) {
  CURRENT_LANG = lang === 'es' ? 'es' : 'en';
  try { localStorage.setItem('peptora_lang', CURRENT_LANG); } catch (e) {}
  applyTranslations();
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('peptora_lang'); } catch (e) {}
  CURRENT_LANG = saved === 'es' ? 'es' : 'en';
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', () => setLanguage(CURRENT_LANG === 'en' ? 'es' : 'en'));
  applyTranslations();
}

// ============================================================================
// Hero marquee — scrolling compound names for immediate visual dynamism
// ============================================================================
function buildMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const names = PEPTORA_PRODUCTS.filter(p => p.cat !== 'supplies').map(nameOf);
  const row = names.join(' &nbsp;·&nbsp; ') + ' &nbsp;·&nbsp; ';
  track.innerHTML = row + row; // duplicate for seamless loop
}

// ============================================================================
// Product catalog rendering — grid + modal (mobile-safe, no inline reflow)
// ============================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;
  const lang = CURRENT_LANG;

  grid.innerHTML = PEPTORA_PRODUCTS.map((p, i) => {
    const name = nameOf(p);
    const catLabel = CAT_LABELS[lang][p.cat] || p.cat;
    return `
    <button class="product-card" data-cat="${p.cat}" data-idx="${i}" type="button">
      <span class="pc-cat">${catLabel}</span>
      <h4>${name}</h4>
      <p>${p.desc[lang]}</p>
      <span class="pc-more">${lang === 'es' ? 'Ver detalles' : 'View details'} →</span>
    </button>`;
  }).join('');

  const total = PEPTORA_PRODUCTS.length;
  countEl && (countEl.textContent = lang === 'es' ? `${total} compuestos` : `${total} compounds`);

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openProductModal(parseInt(card.getAttribute('data-idx'), 10)));
  });

  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      let visible = 0;
      grid.querySelectorAll('.product-card').forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-cat') === filter;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      if (countEl) countEl.textContent = lang === 'es' ? `${visible} compuestos` : `${visible} compounds`;
    });
  });
}

// ---- Product detail modal ----
function openProductModal(idx) {
  const p = PEPTORA_PRODUCTS[idx];
  if (!p) return;
  const lang = CURRENT_LANG;
  document.getElementById('pmCat').textContent = CAT_LABELS[lang][p.cat] || p.cat;
  document.getElementById('pmName').textContent = nameOf(p);
  document.getElementById('pmDesc').textContent = p.desc[lang];
  document.getElementById('pmMechLabel').textContent = t('modal.mech_label');
  document.getElementById('pmMech').textContent = p.mech[lang];

  const modal = document.getElementById('productModal');
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}
function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.classList.remove('modal-open');
}

function initModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeProductModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProductModal(); });
}

// ============================================================================
// Accordion (About / Our Science section)
// ============================================================================
function initAccordion() {
  document.querySelectorAll('.acc-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.acc-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ============================================================================
// Contact form — destination assembled at runtime, sent via FormSubmit AJAX
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
    if (form.querySelector('.hp-field').value) return;
    status.textContent = t('form.sending');
    status.className = 'form-status';
    const data = new FormData(form);
    data.append('_subject', 'New research inquiry — PEPTORA');
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${dest}`, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      if (!res.ok) throw new Error('failed');
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
  initLanguage();
  initContactForm();
  initModal();
  initAccordion();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.style.borderBottomColor = window.scrollY > 20 ? 'rgba(180,186,194,.35)' : 'rgba(255,255,255,.08)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
