// ============================================================================
// PEPTORA — Research Peptide Labs
// Research-grade compound reference (not for sale), i18n, interactions
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

// ---- Research compound reference (bilingual). Not for sale — reference only. ----
const PEPTORA_PRODUCTS = [
  // ---- Metabolic Research ----
  { cat: 'metabolic', name: 'Semaglutide',
    desc: { en: 'Studied for GLP-1 receptor-mediated appetite-regulation pathways.', es: 'Estudiado por su acción sobre las vías de regulación del apetito mediadas por el receptor GLP-1.' },
    mech: { en: 'GLP-1 receptor agonist that mimics the incretin hormone, used in models studying gastric emptying and hypothalamic appetite signaling.', es: 'Agonista del receptor GLP-1 que imita la incretina, utilizado en modelos de investigación sobre vaciado gástrico y señalización hipotalámica del apetito.' },
    interest: { en: 'Widely referenced in independent metabolic-research and biohacking literature studying GLP-1 pathway modulation.', es: 'Ampliamente referenciado en literatura de investigación metabólica independiente y biohacking sobre modulación de la vía GLP-1.' } },
  { cat: 'metabolic', name: 'Tirzepatide',
    desc: { en: 'Investigated as a dual GLP-1/GIP receptor agonist in metabolic research models.', es: 'Investigado como agonista dual de los receptores GLP-1/GIP en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1 and GIP receptor agonist studied for its combined effect on insulin-sensitivity research pathways.', es: 'Agonista dual de los receptores GLP-1 y GIP, estudiado por su efecto combinado en vías de investigación de sensibilidad a la insulina.' },
    interest: { en: 'Frequently discussed in independent research communities examining dual-incretin receptor pathways.', es: 'Frecuentemente discutido en comunidades de investigación independiente sobre vías de doble incretina.' } },
  { cat: 'metabolic', name: 'Retatrutide',
    desc: { en: 'Under investigation as a triple GLP-1/GIP/glucagon receptor agonist.', es: 'En investigación como agonista triple de los receptores GLP-1/GIP/glucagón.' },
    mech: { en: 'Triple agonist of the GLP-1, GIP and glucagon receptors, studied for combined thermogenic and appetite-pathway research.', es: 'Agonista triple de los receptores GLP-1, GIP y glucagón, estudiado por su efecto combinado en vías termogénicas y de apetito.' },
    interest: { en: 'An emerging compound tracked closely in independent triple-agonist research literature.', es: 'Un compuesto emergente seguido de cerca en la literatura de investigación de agonistas triples.' } },
  { cat: 'metabolic', name: 'Cagrilintide',
    desc: { en: 'Studied for amylin-receptor-mediated satiety-signaling research.', es: 'Estudiado por su acción en la señalización de saciedad mediada por el receptor de amilina.' },
    mech: { en: 'Long-acting amylin analog used in central-nervous-system research models studying satiety signaling.', es: 'Análogo de amilina de acción prolongada utilizado en modelos de investigación del sistema nervioso central sobre señalización de saciedad.' },
    interest: { en: 'Studied within independent research groups examining amylin-pathway combination protocols.', es: 'Estudiado en grupos de investigación independiente sobre protocolos combinados de la vía de amilina.' } },
  { cat: 'metabolic', name: 'Mazdutide',
    desc: { en: 'Investigated as a dual GLP-1/glucagon receptor agonist in energy-expenditure research.', es: 'Investigado como agonista dual de los receptores GLP-1/glucagón en investigación de gasto energético.' },
    mech: { en: 'Dual GLP-1 and glucagon receptor agonist studied for combined appetite and energy-expenditure pathway research.', es: 'Agonista dual de los receptores GLP-1 y glucagón, estudiado en vías combinadas de apetito y gasto energético.' },
    interest: { en: 'Referenced in metabolic-research discussions examining dual-receptor pathway activity.', es: 'Referenciado en discusiones de investigación metabólica sobre actividad de vías de doble receptor.' } },
  { cat: 'metabolic', name: 'Survodutide',
    desc: { en: 'Studied for dual GLP-1/glucagon receptor activity in metabolic research models.', es: 'Estudiado por su actividad dual en los receptores GLP-1/glucagón en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1/glucagon agonist used in research models examining fat-oxidation pathways.', es: 'Agonista dual GLP-1/glucagón utilizado en modelos de investigación sobre vías de oxidación de grasas.' },
    interest: { en: 'Of research interest for its dual-pathway metabolic activity, tracked in independent literature.', es: 'De interés en investigación por su actividad metabólica de doble vía, seguida en literatura independiente.' } },
  { cat: 'metabolic', name: 'GLP-1',
    desc: { en: 'Reference incretin peptide used in glucose-regulation research.', es: 'Péptido incretina de referencia utilizado en investigación de regulación de la glucosa.' },
    mech: { en: 'Incretin peptide studied for glucose-dependent insulin-release and gastric-emptying research models.', es: 'Péptido incretina estudiado en modelos de liberación de insulina dependiente de glucosa y vaciado gástrico.' },
    interest: { en: 'A foundational reference compound throughout incretin-pathway research literature.', es: 'Un compuesto de referencia fundamental en la literatura de investigación de la vía incretina.' } },
  { cat: 'metabolic', name: '5-Amino-1MQ',
    desc: { en: 'Studied as an NNMT inhibitor in adipose-tissue metabolism research.', es: 'Estudiado como inhibidor de la enzima NNMT en investigación del metabolismo del tejido adiposo.' },
    mech: { en: 'NNMT enzyme inhibitor used in research models examining energy expenditure in adipose tissue.', es: 'Inhibidor de la enzima NNMT utilizado en modelos de investigación sobre gasto energético en tejido adiposo.' },
    interest: { en: 'Studied in independent research on NNMT-pathway modulation and adipose energy metabolism.', es: 'Estudiado en investigación independiente sobre modulación de la vía NNMT y metabolismo energético adiposo.' } },
  { cat: 'metabolic', name: 'Lipo-C',
    desc: { en: 'Lipotropic compound blend used in hepatic lipid-metabolism research.', es: 'Combinación lipotrópica utilizada en investigación del metabolismo hepático de lípidos.' },
    mech: { en: 'Combination of methionine, inositol and choline studied for hepatic fat-transport research models.', es: 'Combinación de metionina, inositol y colina estudiada en modelos de investigación de transporte hepático de grasas.' },
    interest: { en: 'Referenced in research literature on lipotropic compound combinations and hepatic lipid metabolism.', es: 'Referenciado en literatura de investigación sobre combinaciones lipotrópicas y metabolismo hepático de lípidos.' } },
  { cat: 'metabolic', name: 'Lipo-C + B12',
    desc: { en: 'Lipotropic blend with B12 for cellular energy-pathway research.', es: 'Blend lipotrópico con B12 para investigación de vías de energía celular.' },
    mech: { en: 'Lipotropic blend combined with vitamin B12, studied in fat-metabolism and cellular-energy research models.', es: 'Blend lipotrópico combinado con vitamina B12, estudiado en modelos de metabolismo de grasas y energía celular.' },
    interest: { en: 'Studied alongside cellular-energy pathway research in combination with lipotropic compounds.', es: 'Estudiado junto con investigación de vías de energía celular en combinación con compuestos lipotrópicos.' } },

  // ---- GH / IGF Research ----
  { cat: 'gh-igf', name: 'CJC-1295 (No DAC)',
    desc: { en: 'Studied as a short-acting GHRH analog in growth-hormone secretion research.', es: 'Estudiado como análogo de GHRH de acción corta en investigación de secreción de hormona de crecimiento.' },
    mech: { en: 'Short-acting GHRH analog used in research models studying pulsatile growth-hormone release from the pituitary.', es: 'Análogo de GHRH de acción corta utilizado en modelos de investigación sobre la liberación pulsátil de hormona de crecimiento.' },
    interest: { en: 'One of the most referenced GHRH analogs in independent growth-hormone pathway research.', es: 'Uno de los análogos de GHRH más referenciados en investigación independiente del eje de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'CJC-1295 (With DAC)',
    desc: { en: 'Investigated as a long-acting GHRH analog for sustained GH-release research.', es: 'Investigado como análogo de GHRH de acción prolongada para investigación de liberación sostenida de GH.' },
    mech: { en: 'CJC-1295 variant bound to an albumin-affinity domain, studied for extended GH-release research models.', es: 'Variante de CJC-1295 unida a un dominio de afinidad a albúmina, estudiada en modelos de liberación prolongada de GH.' },
    interest: { en: 'Studied in research literature examining extended-duration GHRH pathway activity.', es: 'Estudiado en literatura de investigación sobre actividad prolongada de la vía GHRH.' } },
  { cat: 'gh-igf', name: 'Ipamorelin',
    desc: { en: 'Studied as a selective GHS-R secretagogue in growth-hormone research models.', es: 'Estudiado como secretagogo selectivo del receptor GHS-R en modelos de investigación de hormona de crecimiento.' },
    mech: { en: 'Selective ghrelin-receptor (GHS-R) secretagogue studied for GH release without notable cortisol or prolactin research interference.', es: 'Secretagogo selectivo del receptor de grelina (GHS-R) estudiado por su liberación de GH sin interferencia notable en cortisol o prolactina.' },
    interest: { en: 'Frequently referenced in secretagogue research literature due to its receptor-selectivity profile.', es: 'Frecuentemente referenciado en literatura de secretagogos por su perfil de selectividad de receptor.' } },
  { cat: 'gh-igf', name: 'Sermorelin Acetate',
    desc: { en: 'Reference GHRH(1-29) fragment used in growth-hormone release research.', es: 'Fragmento de referencia GHRH(1-29) utilizado en investigación de liberación de hormona de crecimiento.' },
    mech: { en: 'Active GHRH fragment (1-29) studied for physiological growth-hormone release research models.', es: 'Fragmento activo de GHRH (1-29) estudiado en modelos de liberación fisiológica de hormona de crecimiento.' },
    interest: { en: 'A long-studied reference compound throughout GHRH pathway research literature.', es: 'Un compuesto de referencia ampliamente estudiado en la literatura de investigación de la vía GHRH.' } },
  { cat: 'gh-igf', name: 'Hexarelin Acetate',
    desc: { en: 'Studied as a high-potency ghrelin-receptor secretagogue.', es: 'Estudiado como secretagogo de alta potencia del receptor de grelina.' },
    mech: { en: 'High-potency GH secretagogue used in ghrelin-receptor research models.', es: 'Secretagogo de GH de alta potencia utilizado en modelos de investigación del receptor de grelina.' },
    interest: { en: 'Studied in research literature for its high-affinity ghrelin-receptor activity.', es: 'Estudiado en literatura de investigación por su actividad de alta afinidad en el receptor de grelina.' } },
  { cat: 'gh-igf', name: 'GHRP-6 Acetate',
    desc: { en: 'Investigated for ghrelin-receptor-mediated GH secretion research.', es: 'Investigado por su acción en la secreción de GH mediada por el receptor de grelina.' },
    mech: { en: 'GH secretagogue studied alongside ghrelin-receptor-mediated appetite-signaling research models.', es: 'Secretagogo de GH estudiado junto con modelos de señalización del apetito mediados por el receptor de grelina.' },
    interest: { en: 'Referenced in research combining growth-hormone and appetite-pathway study.', es: 'Referenciado en investigación que combina hormona de crecimiento y vías del apetito.' } },
  { cat: 'gh-igf', name: 'Tesamorelin',
    desc: { en: 'Studied as a GHRH analog in visceral-adipose-tissue research models.', es: 'Estudiado como análogo de GHRH en modelos de investigación de tejido adiposo visceral.' },
    mech: { en: 'GHRH analog developed for research specifically examining visceral-fat reduction via the GH axis.', es: 'Análogo de GHRH desarrollado para investigación específica sobre reducción de grasa visceral mediante el eje de GH.' },
    interest: { en: 'Widely cited in visceral-adipose-tissue research literature.', es: 'Ampliamente citado en la literatura de investigación de tejido adiposo visceral.' } },
  { cat: 'gh-igf', name: 'HGH 191AA (Somatropin)',
    desc: { en: 'Reference recombinant growth hormone for laboratory research.', es: 'Hormona de crecimiento recombinante de referencia para investigación de laboratorio.' },
    mech: { en: 'Recombinant human growth hormone, identical in sequence to endogenous GH, used as a laboratory reference standard.', es: 'Hormona de crecimiento humana recombinante, idéntica en secuencia a la GH endógena, utilizada como estándar de referencia en laboratorio.' },
    interest: { en: 'The reference-standard compound throughout growth-hormone pathway research literature.', es: 'El compuesto de referencia estándar en la literatura de investigación del eje de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'HGH Fragment 176-191',
    desc: { en: 'Studied C-terminal GH fragment in lipolysis-pathway research.', es: 'Fragmento C-terminal de GH estudiado en investigación de vías de lipólisis.' },
    mech: { en: 'C-terminal fragment of GH with no IGF-1 receptor activity, used in lipolysis-pathway research models.', es: 'Fragmento C-terminal de la GH sin actividad sobre el receptor de IGF-1, utilizado en modelos de investigación de lipólisis.' },
    interest: { en: 'Studied specifically for its isolated lipolytic research profile, distinct from full-sequence GH.', es: 'Estudiado específicamente por su perfil lipolítico aislado, distinto al de la GH de secuencia completa.' } },
  { cat: 'gh-igf', name: 'IGF-1 LR3',
    desc: { en: 'Extended half-life IGF-1 analog used in cell-proliferation research.', es: 'Análogo de IGF-1 de vida media extendida utilizado en investigación de proliferación celular.' },
    mech: { en: 'Extended half-life IGF-1 analog studied for direct IGF-1-receptor activation research.', es: 'Análogo de IGF-1 de vida media extendida, estudiado por su activación directa del receptor de IGF-1.' },
    interest: { en: 'Referenced in cell-proliferation and tissue-growth research literature.', es: 'Referenciado en literatura de investigación de proliferación celular y crecimiento tisular.' } },
  { cat: 'gh-igf', name: 'IGF-DES',
    desc: { en: 'Studied IGF-1 variant in localized tissue-growth research models.', es: 'Variante de IGF-1 estudiada en modelos de investigación de crecimiento tisular localizado.' },
    mech: { en: 'IGF-1 variant with greater local receptor affinity, studied in targeted tissue-research models.', es: 'Variante de IGF-1 con mayor afinidad local al receptor, estudiada en modelos de investigación tisular focalizada.' },
    interest: { en: 'Studied in localized-tissue growth-factor research literature.', es: 'Estudiado en literatura de investigación de factores de crecimiento tisular localizado.' } },
  { cat: 'gh-igf', name: 'Follistatin',
    desc: { en: 'Investigated as a myostatin inhibitor in muscle-tissue research.', es: 'Investigado como inhibidor de miostatina en investigación de tejido muscular.' },
    mech: { en: 'Natural myostatin inhibitor studied in research models examining muscle-tissue growth regulation.', es: 'Inhibidor natural de la miostatina, estudiado en modelos de investigación sobre regulación del crecimiento del tejido muscular.' },
    interest: { en: 'Referenced in myostatin-pathway research literature examining muscle-tissue regulation.', es: 'Referenciado en literatura de investigación de la vía de miostatina sobre regulación del tejido muscular.' } },
  { cat: 'gh-igf', name: 'BPC-157',
    desc: { en: 'Studied for angiogenesis and tissue-repair pathway research.', es: 'Estudiado en investigación de vías de angiogénesis y reparación tisular.' },
    mech: { en: 'Peptide derived from a gastric protein, studied in research models examining angiogenesis and tissue repair.', es: 'Péptido derivado de una proteína gástrica, estudiado en modelos de investigación de angiogénesis y reparación de tejidos.' },
    interest: { en: 'One of the most widely referenced compounds in independent tissue-repair research literature.', es: 'Uno de los compuestos más referenciados en la literatura de investigación independiente sobre reparación tisular.' } },
  { cat: 'gh-igf', name: 'TB-500 (Thymosin B4 Acetate)',
    desc: { en: 'Investigated for actin-regulation and cell-migration research.', es: 'Investigado en regulación de actina y migración celular.' },
    mech: { en: 'Regulates cellular actin in research models studying cell migration and tissue-repair pathways.', es: 'Regula la actina celular en modelos de investigación sobre migración celular y vías de reparación tisular.' },
    interest: { en: 'Frequently studied alongside BPC-157 in independent tissue-repair research literature.', es: 'Frecuentemente estudiado junto con BPC-157 en literatura de investigación sobre reparación tisular.' } },
  { cat: 'gh-igf', name: 'KPV',
    desc: { en: 'Studied tripeptide in gut anti-inflammatory pathway research.', es: 'Tripéptido estudiado en investigación de vías antiinflamatorias intestinales.' },
    mech: { en: 'Alpha-MSH-derived tripeptide studied for local anti-inflammatory activity in digestive-tract research models.', es: 'Tripéptido derivado de la alfa-MSH, estudiado por su actividad antiinflamatoria local en modelos de investigación del tracto digestivo.' },
    interest: { en: 'Referenced in gut-health research literature for its anti-inflammatory pathway profile.', es: 'Referenciado en literatura de investigación de salud intestinal por su perfil de vía antiinflamatoria.' } },
  { cat: 'gh-igf', name: 'GHK-Cu',
    desc: { en: 'Studied copper-peptide complex in collagen-synthesis research.', es: 'Complejo péptido-cobre estudiado en investigación de síntesis de colágeno.' },
    mech: { en: 'Copper-peptide complex studied for its role in collagen synthesis and extracellular-matrix research models.', es: 'Complejo péptido-cobre estudiado por su papel en la síntesis de colágeno y modelos de investigación de la matriz extracelular.' },
    interest: { en: 'Widely studied in dermatological and collagen-synthesis research literature.', es: 'Ampliamente estudiado en literatura de investigación dermatológica y de síntesis de colágeno.' } },

  // ---- Neuroscience Research ----
  { cat: 'brain-sleep', name: 'Semax',
    desc: { en: 'Studied ACTH-fragment analog in BDNF and neuroplasticity research.', es: 'Análogo de fragmento de ACTH estudiado en investigación de BDNF y neuroplasticidad.' },
    mech: { en: 'Synthetic ACTH fragment studied for its effect on BDNF expression in neuroplasticity research models.', es: 'Fragmento sintético de ACTH estudiado por su efecto sobre la expresión de BDNF en modelos de investigación de neuroplasticidad.' },
    interest: { en: 'A long-studied nootropic-research compound originating from Russian pharmacological research literature.', es: 'Un compuesto nootrópico ampliamente estudiado, originario de la literatura farmacológica rusa.' } },
  { cat: 'brain-sleep', name: 'Selank',
    desc: { en: 'Investigated tuftsin analog in GABAergic-modulation research models.', es: 'Análogo de tuftsina investigado en modelos de modulación GABAérgica.' },
    mech: { en: 'Tuftsin analog studied for anxiolytic-related GABAergic activity in non-sedative research models.', es: 'Análogo de tuftsina estudiado por su actividad GABAérgica de tipo ansiolítico en modelos no sedantes.' },
    interest: { en: 'Studied alongside Semax in independent anxiolytic-pathway research literature.', es: 'Estudiado junto con Semax en literatura de investigación independiente sobre vías ansiolíticas.' } },
  { cat: 'brain-sleep', name: 'Cerebrolysin',
    desc: { en: 'Neurotrophic peptide mixture used in neurodegeneration research.', es: 'Mezcla de péptidos neurotróficos utilizada en investigación de neurodegeneración.' },
    mech: { en: 'Mixture of neurotrophic peptides derived from brain protein, studied alongside BDNF and NGF research models.', es: 'Mezcla de péptidos neurotróficos derivados de proteína cerebral, estudiada junto a modelos de investigación de BDNF y NGF.' },
    interest: { en: 'Referenced in neurodegeneration research literature for its neurotrophic peptide profile.', es: 'Referenciado en literatura de investigación de neurodegeneración por su perfil de péptidos neurotróficos.' } },
  { cat: 'brain-sleep', name: 'DSIP',
    desc: { en: 'Studied neuropeptide in slow-wave-sleep induction research models.', es: 'Neuropéptido estudiado en modelos de inducción de sueño de ondas lentas.' },
    mech: { en: 'Neuropeptide studied for GABA-receptor interaction in slow-wave-sleep research models.', es: 'Neuropéptido estudiado por su interacción con receptores GABA en modelos de investigación de sueño de ondas lentas.' },
    interest: { en: 'Studied in sleep-architecture research literature for its slow-wave-sleep pathway activity.', es: 'Estudiado en literatura de investigación de arquitectura del sueño por su actividad en la vía de ondas lentas.' } },
  { cat: 'brain-sleep', name: 'Ara-290',
    desc: { en: 'Non-hematopoietic EPO derivative studied in neuroprotection research.', es: 'Derivado no hematopoyético de EPO estudiado en investigación de neuroprotección.' },
    mech: { en: 'Non-hematopoietic derivative of erythropoietin studied for cytoprotective-receptor activity in neural-repair research.', es: 'Derivado no hematopoyético de la eritropoyetina, estudiado por su actividad en receptores citoprotectores en investigación de reparación neural.' },
    interest: { en: 'An emerging compound in neuroprotection research literature, derived from EPO-pathway study.', es: 'Un compuesto emergente en literatura de investigación de neuroprotección, derivado del estudio de la vía de EPO.' } },

  // ---- Cellular & Longevity Research ----
  { cat: 'performance', name: 'MOTS-c',
    desc: { en: 'Mitochondrial-derived peptide studied in AMPK-pathway research.', es: 'Péptido mitocondrial estudiado en investigación de la vía AMPK.' },
    mech: { en: 'Mitochondrial-DNA-derived peptide studied for AMPK-pathway activation in metabolic-efficiency research.', es: 'Péptido derivado del ADN mitocondrial, estudiado por la activación de la vía AMPK en investigación de eficiencia metabólica.' },
    interest: { en: 'Referenced in mitochondrial-research literature as a key marker in cellular-energy pathway studies.', es: 'Referenciado en literatura de investigación mitocondrial como marcador clave en estudios de la vía de energía celular.' } },
  { cat: 'performance', name: 'SS-31',
    desc: { en: 'Studied for cardiolipin-binding mitochondrial-stabilization research.', es: 'Estudiado en investigación de estabilización mitocondrial mediante unión a cardiolipina.' },
    mech: { en: 'Binds to cardiolipin in the inner mitochondrial membrane, studied in ATP-production research models.', es: 'Se une a la cardiolipina en la membrana mitocondrial interna, estudiado en modelos de investigación de producción de ATP.' },
    interest: { en: 'Widely studied in independent longevity-research literature for its mitochondrial-stabilization profile.', es: 'Ampliamente estudiado en literatura de investigación de longevidad por su perfil de estabilización mitocondrial.' } },
  { cat: 'performance', name: 'NAD+',
    desc: { en: 'Essential coenzyme studied in cellular bioenergetics and sirtuin research.', es: 'Coenzima esencial estudiada en bioenergética celular e investigación de sirtuinas.' },
    mech: { en: 'Essential coenzyme studied for its role in cellular energy production and sirtuin-activity research models.', es: 'Coenzima esencial estudiada por su papel en la producción de energía celular y modelos de investigación de sirtuinas.' },
    interest: { en: 'One of the most referenced compounds in cellular-aging and longevity-research literature.', es: 'Uno de los compuestos más referenciados en literatura de investigación de envejecimiento celular y longevidad.' } },
  { cat: 'performance', name: 'L-Carnitine',
    desc: { en: 'Studied in fatty-acid oxidation and mitochondrial-transport research.', es: 'Estudiado en investigación de oxidación de ácidos grasos y transporte mitocondrial.' },
    mech: { en: 'Transports long-chain fatty acids into the mitochondria, studied in fat-oxidation research models.', es: 'Transporta ácidos grasos de cadena larga hacia la mitocondria, estudiado en modelos de investigación de oxidación de grasas.' },
    interest: { en: 'A foundational reference compound throughout fatty-acid metabolism research literature.', es: 'Un compuesto de referencia fundamental en la literatura de investigación del metabolismo de ácidos grasos.' } },
  { cat: 'performance', name: 'AOD-9604',
    desc: { en: 'GH-fragment studied in lipolysis-pathway research models.', es: 'Fragmento de GH estudiado en modelos de investigación de vías de lipólisis.' },
    mech: { en: 'GH fragment (176-191) studied for lipolysis-pathway activity without IGF-1-receptor research interference.', es: 'Fragmento de GH (176-191) estudiado por su actividad en vías de lipólisis sin interferencia en el receptor de IGF-1.' },
    interest: { en: 'Studied specifically for its isolated lipolytic research profile.', es: 'Estudiado específicamente por su perfil lipolítico aislado.' } },
  { cat: 'performance', name: 'Epitalon',
    desc: { en: 'Tetrapeptide studied in telomerase-activity and pineal-function research.', es: 'Tetrapéptido estudiado en investigación de actividad de telomerasa y función pineal.' },
    mech: { en: 'Tetrapeptide studied for its action on the pineal gland, melatonin-production and telomerase-activity research models.', es: 'Tetrapéptido estudiado por su acción sobre la glándula pineal y modelos de investigación de producción de melatonina y actividad de la telomerasa.' },
    interest: { en: 'Referenced in longevity-research literature for telomerase-pathway studies originating from Russian gerontological research.', es: 'Referenciado en literatura de investigación de longevidad por estudios de la vía de telomerasa, originados en la investigación gerontológica rusa.' } },

  // ---- Immune Research ----
  { cat: 'immune', name: 'Thymosin Alpha-1',
    desc: { en: 'Thymic peptide studied in T-lymphocyte modulation research.', es: 'Péptido tímico estudiado en investigación de modulación de linfocitos T.' },
    mech: { en: 'Thymic peptide studied for its role in T-lymphocyte maturation and function research models.', es: 'Péptido tímico estudiado por su papel en la maduración y función de los linfocitos T.' },
    interest: { en: 'Referenced in immunological research literature for several decades.', es: 'Referenciado en literatura de investigación inmunológica durante varias décadas.' } },
  { cat: 'immune', name: 'Thymalin',
    desc: { en: "Thymus-derived extract studied in cellular immune-response research.", es: 'Extracto derivado del timo estudiado en investigación de respuesta inmune celular.' },
    mech: { en: 'Thymus-derived peptide extract studied for its role in cellular immune-response balance research.', es: 'Extracto peptídico del timo estudiado por su papel en el equilibrio de la respuesta inmune celular.' },
    interest: { en: 'Studied in Russian immunological research literature on thymic-peptide extracts.', es: 'Estudiado en la literatura de investigación inmunológica rusa sobre extractos peptídicos tímicos.' } },
  { cat: 'immune', name: 'LL-37',
    desc: { en: 'Cathelicidin peptide studied in antimicrobial and immune-modulation research.', es: 'Péptido catelicidina estudiado en investigación antimicrobiana y de modulación inmune.' },
    mech: { en: 'Cathelicidin peptide studied for direct antimicrobial activity and innate immune-response research.', es: 'Péptido catelicidina estudiado por su actividad antimicrobiana directa e investigación de la respuesta inmune innata.' },
    interest: { en: 'Widely referenced in antimicrobial-peptide research literature.', es: 'Ampliamente referenciado en literatura de investigación de péptidos antimicrobianos.' } },
  { cat: 'immune', name: 'VIP',
    desc: { en: 'Neuropeptide studied for VPAC-receptor-mediated immune research.', es: 'Neuropéptido estudiado en investigación inmune mediada por el receptor VPAC.' },
    mech: { en: 'Neuropeptide studied for inflammation regulation through VPAC receptors in immune-cell research models.', es: 'Neuropéptido estudiado por la regulación de la inflamación a través de receptores VPAC en modelos de investigación de células inmunes.' },
    interest: { en: 'Studied in neuroimmunology research literature for its receptor-mediated pathway profile.', es: 'Estudiado en literatura de investigación de neuroinmunología por su perfil de vía mediada por receptor.' } },
  { cat: 'immune', name: 'FOXO4',
    desc: { en: 'Peptide studied for FOXO4–p53 interaction in senescent-cell research.', es: 'Péptido estudiado por su interacción FOXO4-p53 en investigación de células senescentes.' },
    mech: { en: 'Peptide studied for disrupting the FOXO4-p53 interaction in senescent-cell clearance research.', es: 'Péptido estudiado por interrumpir la interacción FOXO4-p53 en investigación de eliminación de células senescentes.' },
    interest: { en: 'An emerging compound in senescence-research literature, tracked closely by longevity researchers.', es: 'Un compuesto emergente en literatura de investigación de senescencia, seguido de cerca por investigadores de longevidad.' } },
  { cat: 'immune', name: 'Kisspeptin-10',
    desc: { en: 'Studied for KISS1R-mediated HPG-axis signaling research.', es: 'Estudiado en investigación de señalización del eje HPG mediada por KISS1R.' },
    mech: { en: 'Activates the KISS1R receptor, studied in hypothalamic-pituitary-gonadal axis signaling research.', es: 'Activa el receptor KISS1R, estudiado en investigación de señalización del eje hipotálamo-hipófisis-gónadas.' },
    interest: { en: 'Referenced in reproductive-endocrinology research literature.', es: 'Referenciado en literatura de investigación de endocrinología reproductiva.' } },
  { cat: 'immune', name: 'Glutathione',
    desc: { en: 'Endogenous antioxidant tripeptide studied in oxidative-stress research.', es: 'Tripéptido antioxidante endógeno estudiado en investigación de estrés oxidativo.' },
    mech: { en: 'Endogenous antioxidant tripeptide studied for free-radical neutralization and hepatic research models.', es: 'Tripéptido antioxidante endógeno estudiado por la neutralización de radicales libres en modelos de investigación hepática.' },
    interest: { en: 'One of the most studied antioxidant compounds in oxidative-stress research literature.', es: 'Uno de los compuestos antioxidantes más estudiados en literatura de investigación de estrés oxidativo.' } },

  // ---- Endocrine Research ----
  { cat: 'hormonal', name: 'PT-141',
    desc: { en: 'Melanocortin-receptor (MC3R/MC4R) agonist studied in CNS arousal-pathway research.', es: 'Agonista de receptores de melanocortina (MC3R/MC4R) estudiado en investigación de vías de excitación del SNC.' },
    mech: { en: 'Melanocortin receptor agonist studied for central-nervous-system arousal-pathway signaling research.', es: 'Agonista de receptores de melanocortina estudiado por su señalización en vías de excitación del sistema nervioso central.' },
    interest: { en: 'Studied in central-nervous-system research literature for its melanocortin-receptor profile.', es: 'Estudiado en literatura de investigación del sistema nervioso central por su perfil de receptor de melanocortina.' } },
  { cat: 'hormonal', name: 'HCG',
    desc: { en: 'Studied for LH-receptor-mediated Leydig-cell steroidogenesis research.', es: 'Estudiado en investigación de esteroidogénesis de células de Leydig mediada por el receptor de LH.' },
    mech: { en: 'Hormone studied for LH-receptor mimicry in Leydig-cell steroidogenesis research models.', es: 'Hormona estudiada por su acción mimética sobre el receptor de LH en modelos de investigación de esteroidogénesis en células de Leydig.' },
    interest: { en: 'A long-referenced compound in reproductive-endocrinology research literature.', es: 'Un compuesto ampliamente referenciado en literatura de investigación de endocrinología reproductiva.' } },
  { cat: 'hormonal', name: 'Melanotan I',
    desc: { en: 'Selective alpha-MSH analog studied in melanogenesis-pathway research.', es: 'Análogo selectivo de alfa-MSH estudiado en investigación de la vía de melanogénesis.' },
    mech: { en: 'Selective alpha-MSH analog studied for melanocyte-stimulating pathway research.', es: 'Análogo selectivo de la alfa-MSH, estudiado en investigación de vías de estimulación de melanocitos.' },
    interest: { en: 'Studied in pigmentation-pathway research literature for its selective receptor profile.', es: 'Estudiado en literatura de investigación de la vía de pigmentación por su perfil selectivo de receptor.' } },
  { cat: 'hormonal', name: 'Melanotan II',
    desc: { en: 'Non-selective melanocortin-receptor agonist studied in pigmentation-pathway research.', es: 'Agonista no selectivo de receptores de melanocortina estudiado en investigación de vías de pigmentación.' },
    mech: { en: 'Non-selective melanocortin-receptor agonist studied across pigmentation and melanocortin-signaling research models.', es: 'Agonista no selectivo de receptores de melanocortina, estudiado en modelos de investigación de pigmentación y señalización de melanocortina.' },
    interest: { en: 'Referenced in melanocortin-pathway research literature for its broad receptor activity.', es: 'Referenciado en literatura de investigación de la vía de melanocortina por su amplia actividad de receptor.' } },

  // ---- Dermal Research ----
  { cat: 'aesthetic', name: 'Snap-8',
    desc: { en: 'Octapeptide studied for neuromuscular-junction inhibition in dermal research.', es: 'Octapéptido estudiado por la inhibición de la unión neuromuscular en investigación dérmica.' },
    mech: { en: 'Octapeptide studied for inhibiting neurotransmitter release at the neuromuscular junction in dermal-research models.', es: 'Octapéptido estudiado por inhibir la liberación de neurotransmisores en la unión neuromuscular en modelos de investigación dérmica.' },
    interest: { en: 'Studied in cosmetic-chemistry research literature for its neuromuscular-junction pathway profile.', es: 'Estudiado en literatura de investigación de química cosmética por su perfil de vía de la unión neuromuscular.' } },
  { cat: 'aesthetic', name: 'Lemon Bottle',
    desc: { en: 'Lipolytic solution studied for localized adipocyte-membrane research.', es: 'Solución lipolítica estudiada en investigación de membranas adipocitarias localizadas.' },
    mech: { en: 'Lipolytic solution studied for its effect on localized adipocyte-membrane breakdown in laboratory models.', es: 'Solución lipolítica estudiada por su efecto en la ruptura de membranas adipocitarias localizadas en modelos de laboratorio.' },
    interest: { en: 'Referenced in aesthetic-research literature for its localized lipolytic formulation.', es: 'Referenciado en literatura de investigación estética por su formulación lipolítica localizada.' } },
  { cat: 'aesthetic', name: 'Botulinum Toxin',
    desc: { en: 'Neurotoxin studied for acetylcholine-release inhibition at the neuromuscular junction.', es: 'Neurotoxina estudiada por la inhibición de la liberación de acetilcolina en la unión neuromuscular.' },
    mech: { en: 'Neurotoxin studied for blocking acetylcholine release at the neuromuscular junction in laboratory research models.', es: 'Neurotoxina estudiada por bloquear la liberación de acetilcolina en la unión neuromuscular en modelos de investigación de laboratorio.' },
    interest: { en: 'One of the most extensively studied neurotoxins in research literature.', es: 'Una de las neurotoxinas más extensamente estudiadas en la literatura de investigación.' } },
  { cat: 'aesthetic', name: 'Hyaluronic Acid',
    desc: { en: 'Glycosaminoglycan studied in dermal-matrix hydration research.', es: 'Glicosaminoglicano estudiado en investigación de hidratación de la matriz dérmica.' },
    mech: { en: 'Glycosaminoglycan studied for water retention in dermal-matrix research models.', es: 'Glicosaminoglicano estudiado por la retención de agua en modelos de investigación de la matriz dérmica.' },
    interest: { en: 'Widely referenced in dermal-research literature for its matrix-hydration profile.', es: 'Ampliamente referenciado en literatura de investigación dérmica por su perfil de hidratación de la matriz.' } },

  // ---- Research Combinations ----
  { cat: 'stacks', name: { en: 'CJC-1295 (No DAC) + Ipamorelin', es: 'CJC-1295 (No DAC) + Ipamorelin' },
    desc: { en: 'Combined GHRH/secretagogue blend studied in GH-pulse research.', es: 'Blend combinado de GHRH/secretagogo estudiado en investigación de pulsos de GH.' },
    mech: { en: 'Combines a short-acting GHRH with a selective ghrelin secretagogue for fuller GH-pulse research models.', es: 'Combina un GHRH de acción corta con un secretagogo selectivo de grelina para modelos de investigación de pulsos de GH más completos.' },
    interest: { en: 'One of the most referenced combination protocols in independent GH-pathway research literature.', es: 'Uno de los protocolos combinados más referenciados en la literatura de investigación independiente del eje de GH.' } },
  { cat: 'stacks', name: { en: 'CagriSema Standard', es: 'CagriSema Estándar' },
    desc: { en: 'Amylin + GLP-1 combination studied in dual-pathway appetite research.', es: 'Combinación de amilina + GLP-1 estudiada en investigación de doble vía del apetito.' },
    mech: { en: 'Combines an amylin analog with a GLP-1 agonist, studied across two distinct appetite-pathway research models.', es: 'Combina un análogo de amilina con un agonista GLP-1, estudiado en dos vías distintas de investigación del apetito.' },
    interest: { en: 'Widely discussed in independent metabolic-research literature for its dual-pathway approach.', es: 'Ampliamente discutido en literatura de investigación metabólica independiente por su enfoque de doble vía.' } },
  { cat: 'stacks', name: { en: 'CagriSema High Concentration', es: 'CagriSema Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the amylin + GLP-1 combination.', es: 'Vial de mayor concentración de la combinación amilina + GLP-1.' },
    mech: { en: 'Same amylin + GLP-1 research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación amilina + GLP-1, en un vial de mayor concentración.' },
    interest: { en: 'Same research profile as the standard combination, referenced for higher-concentration study designs.', es: 'Mismo perfil de investigación que la combinación estándar, referenciada para diseños de estudio de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 Standard', es: 'BPC-157 + TB-500 Estándar' },
    desc: { en: 'Combined tissue-repair peptide blend for regenerative research models.', es: 'Blend combinado de péptidos de reparación tisular para modelos de investigación regenerativa.' },
    mech: { en: 'Combines local angiogenesis with cellular-actin regulation research for more complete tissue-repair models.', es: 'Combina angiogénesis local con regulación de actina celular para modelos de investigación de reparación tisular más completos.' },
    interest: { en: 'One of the most referenced combination protocols in independent tissue-repair research literature.', es: 'Uno de los protocolos combinados más referenciados en la literatura de investigación independiente sobre reparación tisular.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 High Concentration', es: 'BPC-157 + TB-500 Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the tissue-repair blend.', es: 'Vial de mayor concentración del blend de reparación tisular.' },
    mech: { en: 'Same tissue-repair research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación de reparación tisular, en un vial de mayor concentración.' },
    interest: { en: 'Same research profile as the standard blend, referenced for higher-concentration study designs.', es: 'Mismo perfil de investigación que el blend estándar, referenciado para diseños de estudio de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + GHK-Cu + TB-500', es: 'BPC-157 + GHK-Cu + TB-500' },
    desc: { en: 'Triple-peptide blend studied in tissue-regeneration research.', es: 'Blend triple de péptidos estudiado en investigación de regeneración tisular.' },
    mech: { en: 'Combines gastric-repair, collagen-remodeling and tissue-regeneration research pathways in a single blend.', es: 'Combina vías de investigación de reparación gástrica, remodelación de colágeno y regeneración tisular en un solo blend.' },
    interest: { en: 'Referenced in independent research literature exploring multi-pathway regenerative protocols.', es: 'Referenciado en literatura de investigación independiente que explora protocolos regenerativos multivía.' } },
  { cat: 'stacks', name: { en: 'GHK-Cu + TB-500 + BPC-157 + KPV', es: 'GHK-Cu + TB-500 + BPC-157 + KPV' },
    desc: { en: 'Quad-peptide blend for advanced multi-pathway research.', es: 'Blend cuádruple para investigación avanzada de múltiples vías.' },
    mech: { en: 'Combines four research pathways: dermal regeneration, tissue repair, angiogenesis and local inflammatory-response models.', es: 'Combina cuatro vías de investigación: regeneración dérmica, reparación tisular, angiogénesis y modelos de respuesta inflamatoria local.' },
    interest: { en: 'A more complex combination referenced in advanced multi-pathway research protocols.', es: 'Una combinación más compleja referenciada en protocolos de investigación avanzados de múltiples vías.' } },

  // ---- Lab Supplies ----
  { cat: 'supplies', name: { en: 'Bacteriostatic Water / PBS', es: 'Agua Bacteriostática / PBS' },
    desc: { en: 'Sterile solution for laboratory peptide reconstitution.', es: 'Solución estéril para reconstitución de péptidos en laboratorio.' },
    mech: { en: 'Sterile isotonic solution used to reconstitute lyophilized research peptides while maintaining stability.', es: 'Solución isotónica estéril utilizada para reconstituir péptidos de investigación liofilizados manteniendo su estabilidad.' },
    interest: { en: 'A standard reference solution in laboratory peptide-handling protocols.', es: 'Una solución de referencia estándar en protocolos de manejo de péptidos en laboratorio.' } },
  { cat: 'supplies', name: { en: 'Benzyl Alcohol 0.9%', es: 'Alcohol Bencílico 0.9%' },
    desc: { en: 'Bacteriostatic water with preservative for laboratory reconstitution.', es: 'Agua bacteriostática con conservador para reconstitución de laboratorio.' },
    mech: { en: 'Bacteriostatic water with preservative studied for extending reconstituted-peptide stability in laboratory settings.', es: 'Agua bacteriostática con conservador utilizada para prolongar la estabilidad del péptido reconstituido en laboratorio.' },
    interest: { en: 'Commonly referenced in laboratory protocols for extended peptide stability.', es: 'Comúnmente referenciada en protocolos de laboratorio para estabilidad prolongada de péptidos.' } },
  { cat: 'supplies', name: { en: 'Acetic Acid 0.6%', es: 'Ácido Acético 0.6%' },
    desc: { en: 'Reconstitution solution for specific research compounds.', es: 'Solución de reconstitución para compuestos de investigación específicos.' },
    mech: { en: 'Acidic pH reconstitution solution required for research peptides with low solubility in neutral water.', es: 'Solución de reconstitución de pH ácido, requerida para péptidos de investigación con baja solubilidad en agua neutra.' },
    interest: { en: 'Referenced in laboratory protocols for low-solubility research peptides.', es: 'Referenciada en protocolos de laboratorio para péptidos de investigación de baja solubilidad.' } },
];

function nameOf(p) { return typeof p.name === 'string' ? p.name : p.name[CURRENT_LANG]; }

// ============================================================================
// Site copy dictionary — reference/collaboration framing only. Not a store.
// ============================================================================
const I18N = {
  en: {
    'nav.home': 'Home', 'nav.products': 'Research Peptides', 'nav.science': 'Our Science', 'nav.contact': 'Contact',
    'disclaimer.text': 'Reference information only — not for sale. Laboratory research use only. Not for human consumption.',

    'hero.eyebrow': 'Research Reference · Est. 2024',
    'hero.h1_pre': 'Precision Peptides for ', 'hero.h1_em': 'Serious Research',
    'hero.lede': 'PEPTORA is an independent research-reference resource for laboratories, institutions and biohacking researchers studying peptide compounds in vitro and preclinically. This site does not sell products.',
    'hero.cta1': 'Browse Research Reference', 'hero.cta2': 'Research Collaborations',
    'hero.stat1n': '65+', 'hero.stat1l': 'Compounds Referenced',
    'hero.stat2n': '9', 'hero.stat2l': 'Research Categories',
    'hero.stat3n': '100%', 'hero.stat3l': 'RUO Framing',

    'products.eyebrow': 'Research Reference',
    'products.h2': 'Compounds Organized by Research Area',
    'products.lede': 'A reference library for laboratory and preclinical research — not a storefront.',
    'products.notice': 'For laboratory research reference only. Not for human consumption, diagnostic or therapeutic use. Not for sale.',
    'filters.all': 'All',
    'catalog.note_pre': 'For technical data sheets or research collaboration, contact our line at',
    'card.mech_label': 'Mechanism of Action',
    'card.interest_label': 'Research Interest',

    'trust.eyebrow': 'The PEPTORA Ecosystem',
    'trust.h2': 'A research-first infrastructure',
    'trust1.h': 'PEPTORA LABS™', 'trust1.p': 'Research & development, emerging compounds.',
    'trust2.h': 'PEPTORA PERFORMANCE™', 'trust2.p': 'Cellular & metabolic research models.',
    'trust3.h': 'PEPTORA ACTIVE™', 'trust3.p': 'Applied research technical gear.',
    'trust4.h': 'Quality Reference', 'trust4.p': 'Certificate of Analysis data referenced on request.',

    'compliance.eyebrow': 'Research Use Only — Not for Sale',
    'compliance.h2': 'A reference resource, not a store',
    'compliance.p': 'PEPTORA does not sell peptides or research compounds. This website is an independent <strong>informational and educational reference</strong> for the research and biohacking community. All compounds referenced are classified <strong>Research Use Only (RUO)</strong>: they are not drugs, dietary supplements, or cosmetics, and none of the information here is intended for human or veterinary use, diagnosis, treatment, cure, or prevention of any disease.',
    'compliance.note': 'Access to detailed compound information is intended for researchers, laboratories and institutions, who assume full responsibility for the legal and compliant use of any research they conduct.',

    'about.eyebrow': 'Our Science',
    'about.h2': 'Behind the research',
    'about.lede': 'A closer look at the philosophy and the team — for those who want the full picture.',
    'acc1.trigger': 'Our Story',
    'acc1.p1': 'PEPTORA — Research Peptide Labs was founded in 2024 as a reference resource for the research community studying peptide compounds.',
    'acc1.p2': 'What began as a focused research-reference project has grown into a multi-division ecosystem spanning compound research, cellular-performance models and applied research gear — anchored in one principle: rigorous science, transparently referenced.',
    'acc2.trigger': 'Research Philosophy',
    'acc2.p1': 'Evidence before claims. Every compound entry reflects published research on mechanism of action — never therapeutic promises.',
    'acc2.p2': 'We hold ourselves to strict RUO standards: no compound is described in a way that implies human application.',
    'acc3.trigger': 'Mission & Values',
    'acc3.p1': '<strong>Mission:</strong> to be the most trustworthy reference for research-grade peptide information for laboratories across the Americas.',
    'acc3.p2': '<strong>Values:</strong> scientific rigor, regulatory transparency, technical accuracy, and responsible research collaboration.',

    'contact.eyebrow': 'Research & Collaboration',
    'contact.h2': 'Contact our research line',
    'contact.lede': 'This line is for research inquiries, technical data sheets, feedback and collaboration opportunities only — not for sales or purchase requests.',
    'contact.name': 'Name', 'contact.email': 'Institutional email', 'contact.message': 'Describe your research inquiry',
    'contact.send': 'Send Inquiry',
    'contact.phone_us': 'Research & Collaboration Line',
    'contact.phone_note': 'Direct, personalized attention for research collaboration — United States and Mexico, in English and Spanish.',
    'contact.address_label': 'Facility Address',
    'contact.side_note': 'For research, feedback and collaboration purposes only. Not a sales line.',

    'footer.tag': 'Independent Research Reference Since 2024',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'PEPTORA does not sell products. This website is an independent informational reference for laboratory research purposes only. Not for human or veterinary use, consumption, diagnosis, treatment, cure or prevention of disease.',

    'form.sending': 'Sending…', 'form.ok': "Inquiry sent. Our research team will follow up shortly.",
    'form.err': "Couldn't send. Please contact us via phone.",
  },
  es: {
    'nav.home': 'Inicio', 'nav.products': 'Péptidos de Investigación', 'nav.science': 'Nuestra Ciencia', 'nav.contact': 'Contacto',
    'disclaimer.text': 'Información de referencia únicamente — no está a la venta. Uso exclusivo de laboratorio. No apto para consumo humano.',

    'hero.eyebrow': 'Referencia de Investigación · Fundada en 2024',
    'hero.h1_pre': 'Péptidos de Precisión para ', 'hero.h1_em': 'Investigación Seria',
    'hero.lede': 'PEPTORA es un recurso independiente de referencia para laboratorios, instituciones e investigadores de biohacking que estudian compuestos peptídicos in vitro y de forma preclínica. Este sitio no vende productos.',
    'hero.cta1': 'Ver Referencia de Investigación', 'hero.cta2': 'Colaboraciones de Investigación',
    'hero.stat1n': '65+', 'hero.stat1l': 'Compuestos Referenciados',
    'hero.stat2n': '9', 'hero.stat2l': 'Categorías de Investigación',
    'hero.stat3n': '100%', 'hero.stat3l': 'Enfoque RUO',

    'products.eyebrow': 'Referencia de Investigación',
    'products.h2': 'Compuestos Organizados por Área de Investigación',
    'products.lede': 'Una biblioteca de referencia para investigación de laboratorio y preclínica — no una tienda.',
    'products.notice': 'Solo como referencia de investigación de laboratorio. No apto para consumo humano, uso diagnóstico ni terapéutico. No está a la venta.',
    'filters.all': 'Todos',
    'catalog.note_pre': 'Para fichas técnicas o colaboración de investigación, contacta nuestra línea al',
    'card.mech_label': 'Mecanismo de Acción',
    'card.interest_label': 'Interés de Investigación',

    'trust.eyebrow': 'El Ecosistema PEPTORA',
    'trust.h2': 'Una infraestructura orientada a la investigación',
    'trust1.h': 'PEPTORA LABS™', 'trust1.p': 'Investigación y desarrollo, compuestos emergentes.',
    'trust2.h': 'PEPTORA PERFORMANCE™', 'trust2.p': 'Modelos de investigación celular y metabólica.',
    'trust3.h': 'PEPTORA ACTIVE™', 'trust3.p': 'Equipo técnico para investigación aplicada.',
    'trust4.h': 'Referencia de Calidad', 'trust4.p': 'Datos de Certificado de Análisis disponibles a solicitud.',

    'compliance.eyebrow': 'Uso Exclusivo de Investigación — No a la Venta',
    'compliance.h2': 'Un recurso de referencia, no una tienda',
    'compliance.p': 'PEPTORA no vende péptidos ni compuestos de investigación. Este sitio web es una <strong>referencia informativa y educativa</strong> independiente para la comunidad de investigación y biohacking. Todos los compuestos referenciados están clasificados como <strong>Research Use Only (RUO)</strong>: no son medicamentos, suplementos alimenticios ni cosméticos, y ninguna información aquí presentada está destinada al uso humano o veterinario, diagnóstico, tratamiento, cura o prevención de enfermedades.',
    'compliance.note': 'El acceso a información detallada de los compuestos está destinado a investigadores, laboratorios e instituciones, quienes asumen total responsabilidad por el uso legal y conforme a la normativa de cualquier investigación que realicen.',

    'about.eyebrow': 'Nuestra Ciencia',
    'about.h2': 'Detrás de la investigación',
    'about.lede': 'Un vistazo más de cerca a la filosofía y el equipo — para quienes quieren el panorama completo.',
    'acc1.trigger': 'Nuestra Historia',
    'acc1.p1': 'PEPTORA — Research Peptide Labs se fundó en 2024 como un recurso de referencia para la comunidad de investigación que estudia compuestos peptídicos.',
    'acc1.p2': 'Lo que comenzó como un proyecto de referencia enfocado en investigación ha crecido hasta convertirse en un ecosistema multidivisional que abarca investigación de compuestos, modelos de rendimiento celular y equipo de investigación aplicada — anclado en un principio: ciencia rigurosa, referenciada con transparencia.',
    'acc2.trigger': 'Filosofía de Investigación',
    'acc2.p1': 'Evidencia antes que afirmaciones. Cada ficha de compuesto refleja investigación publicada sobre su mecanismo de acción — nunca promesas terapéuticas.',
    'acc2.p2': 'Nos sujetamos a estándares RUO estrictos: ningún compuesto se describe de forma que implique aplicación humana.',
    'acc3.trigger': 'Misión y Valores',
    'acc3.p1': '<strong>Misión:</strong> ser la referencia más confiable de información sobre péptidos de grado investigación para laboratorios en toda América.',
    'acc3.p2': '<strong>Valores:</strong> rigor científico, transparencia regulatoria, precisión técnica y colaboración responsable en investigación.',

    'contact.eyebrow': 'Investigación y Colaboración',
    'contact.h2': 'Contacta nuestra línea de investigación',
    'contact.lede': 'Esta línea es solo para consultas de investigación, fichas técnicas, retroalimentación y oportunidades de colaboración — no para ventas ni solicitudes de compra.',
    'contact.name': 'Nombre', 'contact.email': 'Correo institucional', 'contact.message': 'Describe tu consulta de investigación',
    'contact.send': 'Enviar Consulta',
    'contact.phone_us': 'Línea de Investigación y Colaboración',
    'contact.phone_note': 'Atención directa y personalizada para colaboración de investigación — Estados Unidos y México, en inglés y español.',
    'contact.address_label': 'Dirección de la Instalación',
    'contact.side_note': 'Solo para fines de investigación, retroalimentación y colaboración. No es una línea de ventas.',

    'footer.tag': 'Referencia Independiente de Investigación Desde 2024',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer': 'PEPTORA no vende productos. Este sitio web es una referencia informativa independiente solo para fines de investigación de laboratorio. No apto para uso humano o veterinario, consumo, diagnóstico, tratamiento, cura o prevención de enfermedades.',

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
// Hero marquee — scrolling compound names
// ============================================================================
function buildMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const names = PEPTORA_PRODUCTS.filter(p => p.cat !== 'supplies').map(nameOf);
  const row = names.join(' &nbsp;·&nbsp; ') + ' &nbsp;·&nbsp; ';
  track.innerHTML = row + row;
}

// ============================================================================
// Product reference grid — fully static cards, NO click/expand/modal.
// Every field (name, category, description, mechanism, research interest)
// is always visible. This removes any possibility of the mobile overlap
// bug that affected earlier expand/collapse and modal approaches.
// ============================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;
  const lang = CURRENT_LANG;

  grid.innerHTML = PEPTORA_PRODUCTS.map((p) => {
    const name = nameOf(p);
    const catLabel = CAT_LABELS[lang][p.cat] || p.cat;
    return `
    <div class="product-card" data-cat="${p.cat}">
      <span class="pc-cat">${catLabel}</span>
      <h4>${name}</h4>
      <p class="pc-desc">${p.desc[lang]}</p>
      <div class="pc-block">
        <span class="pc-label">${t('card.mech_label')}</span>
        <p>${p.mech[lang]}</p>
      </div>
      <div class="pc-block">
        <span class="pc-label">${t('card.interest_label')}</span>
        <p>${p.interest[lang]}</p>
      </div>
    </div>`;
  }).join('');

  const total = PEPTORA_PRODUCTS.length;
  countEl && (countEl.textContent = lang === 'es' ? `${total} compuestos` : `${total} compounds`);

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

// ============================================================================
// Accordion (Our Science) — robust grid-template-rows technique.
// Animates to the content's real height (never a guessed max-height), so
// it can never clip or misjudge content height and overlap what follows.
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
// Contact form
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
    header.style.borderBottomColor = window.scrollY > 20 ? 'rgba(191,160,84,.4)' : 'rgba(0,0,0,.08)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
