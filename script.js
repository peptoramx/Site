// ============================================================================
// PEPTORA — Research Peptide Labs
// Research-grade compound reference, i18n, interactions
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

// Educational context for the reference cards. It intentionally describes
// research conversations, not personal use, protocols or administration.
const BIOHACKING_LENS = {
  en: {
    metabolic: { objective: 'Metabolic signalling', community: 'Often discussed in metabolic-health and body-composition conversations.', evidence: 'Evidence varies by compound; some pathways have clinical literature, others remain investigational.', map: 'METABOLIC' },
    'gh-igf': { objective: 'Adaptation & performance signalling', community: 'Often appears in performance, recovery and physique-oriented discussions.', evidence: 'Performance claims should not be inferred from research context; athlete anti-doping rules may apply.', map: 'PERFORMANCE' },
    'brain-sleep': { objective: 'Cognitive & sleep pathways', community: 'Often discussed around focus, stress resilience and sleep-related research.', evidence: 'Human evidence and regulatory status vary substantially between compounds.', map: 'COGNITION' },
    performance: { objective: 'Recovery & cellular adaptation', community: 'Often appears in longevity, recovery and training-adaptation conversations.', evidence: 'Research context is not evidence of a personal outcome or a recommendation.', map: 'LONGEVITY' },
    immune: { objective: 'Immune & inflammatory signalling', community: 'Often discussed in cellular-health and recovery conversations.', evidence: 'Immune pathways are complex; research interest is not a treatment claim.', map: 'CELLULAR HEALTH' },
    hormonal: { objective: 'Endocrine signalling', community: 'Often appears in hormone, vitality and performance discussions.', evidence: 'Hormonal pathways require clinical context; this card is not guidance for use.', map: 'PERFORMANCE' },
    aesthetic: { objective: 'Skin & tissue research', community: 'Often discussed in skin-quality, connective-tissue and recovery conversations.', evidence: 'Mechanistic interest does not establish a cosmetic or therapeutic result.', map: 'SKIN & TISSUE' },
    stacks: { objective: 'Research comparison', community: 'Often discussed as a way to compare pathways, not as a usage plan.', evidence: 'Combining compounds can add uncertainty; PEPTORA does not publish protocols.', map: 'RESEARCH TOOLS' },
    supplies: { objective: 'Laboratory workflow', community: 'Appears in conversations about documentation and research workflow.', evidence: 'Equipment context is educational and does not provide administration guidance.', map: 'RESEARCH TOOLS' },
  },
  es: {
    metabolic: { objective: 'Se\u00f1alizaci\u00f3n metab\u00f3lica', community: 'Suele aparecer en conversaciones sobre salud metab\u00f3lica y composici\u00f3n corporal.', evidence: 'La evidencia var\u00eda por compuesto; algunas v\u00edas tienen literatura cl\u00ednica y otras siguen siendo de investigaci\u00f3n.', map: 'METAB\u00d3LICO' },
    'gh-igf': { objective: 'Se\u00f1alizaci\u00f3n de adaptaci\u00f3n y rendimiento', community: 'Suele aparecer en conversaciones sobre rendimiento, recuperaci\u00f3n y f\u00edsico.', evidence: 'El contexto de investigaci\u00f3n no demuestra rendimiento; pueden aplicar reglas antidopaje.', map: 'RENDIMIENTO' },
    'brain-sleep': { objective: 'V\u00edas cognitivas y del sue\u00f1o', community: 'Suele aparecer en conversaciones sobre enfoque, estr\u00e9s y sue\u00f1o.', evidence: 'La evidencia humana y el estatus regulatorio var\u00edan de forma importante entre compuestos.', map: 'COGNICI\u00d3N' },
    performance: { objective: 'Recuperaci\u00f3n y adaptaci\u00f3n celular', community: 'Suele aparecer en conversaciones sobre longevidad, recuperaci\u00f3n y adaptaci\u00f3n al entrenamiento.', evidence: 'El contexto de investigaci\u00f3n no equivale a un resultado personal ni a una recomendaci\u00f3n.', map: 'LONGEVIDAD' },
    immune: { objective: 'Se\u00f1alizaci\u00f3n inmune e inflamatoria', community: 'Suele aparecer en conversaciones sobre salud celular y recuperaci\u00f3n.', evidence: 'Las v\u00edas inmunes son complejas; el inter\u00e9s de investigaci\u00f3n no es una afirmaci\u00f3n terap\u00e9utica.', map: 'SALUD CELULAR' },
    hormonal: { objective: 'Se\u00f1alizaci\u00f3n endocrina', community: 'Suele aparecer en conversaciones sobre hormonas, vitalidad y rendimiento.', evidence: 'Las v\u00edas hormonales requieren contexto cl\u00ednico; esta ficha no es una gu\u00eda de uso.', map: 'RENDIMIENTO' },
    aesthetic: { objective: 'Investigaci\u00f3n de piel y tejido', community: 'Suele aparecer en conversaciones sobre calidad de piel, tejido conectivo y recuperaci\u00f3n.', evidence: 'El inter\u00e9s mecan\u00edstico no establece un resultado est\u00e9tico o terap\u00e9utico.', map: 'PIEL Y TEJIDO' },
    stacks: { objective: 'Comparaci\u00f3n de investigaci\u00f3n', community: 'Suele aparecer como forma de comparar v\u00edas, no como plan de uso.', evidence: 'Combinar compuestos puede a\u00f1adir incertidumbre; PEPTORA no publica protocolos.', map: 'HERRAMIENTAS' },
    supplies: { objective: 'Flujo de trabajo de laboratorio', community: 'Aparece en conversaciones sobre documentaci\u00f3n y flujo de trabajo de investigaci\u00f3n.', evidence: 'El contexto de equipo es educativo y no proporciona gu\u00eda de administraci\u00f3n.', map: 'HERRAMIENTAS' },
  },
};

const BIOHACKING_LENS_LABELS = {
  en: { title: 'Biohacking lens', objective: 'Research objective', community: 'Conversation context', evidence: 'Evidence boundary', explore: 'Explore pathway', note: 'Educational context only — not a protocol, recommendation or administration guide.' },
  es: { title: 'Lente de biohacking', objective: 'Objetivo de investigaci\u00f3n', community: 'Contexto de conversaci\u00f3n', evidence: 'L\u00edmite de evidencia', explore: 'Explorar ruta', note: 'Contexto educativo \u00fanicamente; no es un protocolo, recomendaci\u00f3n ni gu\u00eda de administraci\u00f3n.' },
};

// ---- Research compound reference (bilingual). Not for sale — reference only. ----
const PEPTORA_PRODUCTS = [
  // ---- Metabolic Research ----
  { cat: 'metabolic', name: 'Semaglutide',
    desc: { en: 'Studied for GLP-1 receptor-mediated appetite-regulation pathways.', es: 'Estudiado por su acción sobre las vías de regulación del apetito mediadas por el receptor GLP-1.' },
    mech: { en: 'GLP-1 receptor agonist that mimics the incretin hormone, used in models studying gastric emptying and hypothalamic appetite signaling.', es: 'Agonista del receptor GLP-1 que imita la incretina, utilizado en modelos de investigación sobre vaciado gástrico y señalización hipotalámica del apetito.' },
    interest: { en: 'In plain terms, this is one of the GLP-1 compounds behind the recent wave of weight-management research — the same hormone class found in some prescription medications, studied here strictly as a research compound. Widely referenced in independent metabolic-research and biohacking literature studying GLP-1 pathway modulation.', es: 'En términos simples, es uno de los compuestos GLP-1 detrás de la ola reciente de investigación sobre el peso — la misma familia hormonal presente en algunos medicamentos recetados, estudiada aquí estrictamente como compuesto de investigación. Ampliamente referenciado en literatura de investigación metabólica independiente y biohacking sobre modulación de la vía GLP-1.' } },
  { cat: 'metabolic', name: 'Tirzepatide',
    desc: { en: 'Investigated as a dual GLP-1/GIP receptor agonist in metabolic research models.', es: 'Investigado como agonista dual de los receptores GLP-1/GIP en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1 and GIP receptor agonist studied for its combined effect on insulin-sensitivity research pathways.', es: 'Agonista dual de los receptores GLP-1 y GIP, estudiado por su efecto combinado en vías de investigación de sensibilidad a la insulina.' },
    interest: { en: 'This one acts on two appetite-related hormone systems at the same time, which is why it draws so much interest from researchers comparing it to single-pathway compounds. Frequently discussed in independent research communities examining dual-incretin receptor pathways.', es: 'Este actúa sobre dos sistemas hormonales del apetito al mismo tiempo, por lo que atrae mucho interés de investigadores que lo comparan con compuestos de una sola vía. Frecuentemente discutido en comunidades de investigación independiente sobre vías de doble incretina.' } },
  { cat: 'metabolic', name: 'Retatrutide',
    desc: { en: 'Under investigation as a triple GLP-1/GIP/glucagon receptor agonist.', es: 'En investigación como agonista triple de los receptores GLP-1/GIP/glucagón.' },
    mech: { en: 'Triple agonist of the GLP-1, GIP and glucagon receptors, studied for combined thermogenic and appetite-pathway research.', es: 'Agonista triple de los receptores GLP-1, GIP y glucagón, estudiado por su efecto combinado en vías termogénicas y de apetito.' },
    interest: { en: 'Sometimes called a “triple agonist” because it engages three separate metabolic hormone pathways at once — a newer research direction closely watched by the biohacking community. An emerging compound tracked closely in independent triple-agonist research literature.', es: 'A veces se le llama “agonista triple” porque activa tres vías hormonales metabólicas a la vez — una línea de investigación más nueva, seguida de cerca por la comunidad de biohacking. Un compuesto emergente seguido de cerca en la literatura de investigación de agonistas triples.' } },
  { cat: 'metabolic', name: 'Cagrilintide',
    desc: { en: 'Studied for amylin-receptor-mediated satiety-signaling research.', es: 'Estudiado por su acción en la señalización de saciedad mediada por el receptor de amilina.' },
    mech: { en: 'Long-acting amylin analog used in central-nervous-system research models studying satiety signaling.', es: 'Análogo de amilina de acción prolongada utilizado en modelos de investigación del sistema nervioso central sobre señalización de saciedad.' },
    interest: { en: 'Works on a different hormone pathway than the GLP-1 compounds, which is why researchers often study it paired with them rather than on its own. Studied within independent research groups examining amylin-pathway combination protocols.', es: 'Actúa sobre una vía hormonal distinta a la de los compuestos GLP-1, por lo que suele estudiarse combinado con ellos en lugar de solo. Estudiado en grupos de investigación independiente sobre protocolos combinados de la vía de amilina.' } },
  { cat: 'metabolic', name: 'Mazdutide',
    desc: { en: 'Investigated as a dual GLP-1/glucagon receptor agonist in energy-expenditure research.', es: 'Investigado como agonista dual de los receptores GLP-1/glucagón en investigación de gasto energético.' },
    mech: { en: 'Dual GLP-1 and glucagon receptor agonist studied for combined appetite and energy-expenditure pathway research.', es: 'Agonista dual de los receptores GLP-1 y glucagón, estudiado en vías combinadas de apetito y gasto energético.' },
    interest: { en: 'Sits in the same research family as Tirzepatide, but pairs GLP-1 with a different second hormone pathway. Referenced in metabolic-research discussions examining dual-receptor pathway activity.', es: 'Pertenece a la misma familia de investigación que Tirzepatide, pero combina GLP-1 con una segunda vía hormonal distinta. Referenciado en discusiones de investigación metabólica sobre actividad de vías de doble receptor.' } },
  { cat: 'metabolic', name: 'Survodutide',
    desc: { en: 'Studied for dual GLP-1/glucagon receptor activity in metabolic research models.', es: 'Estudiado por su actividad dual en los receptores GLP-1/glucagón en modelos de investigación metabólica.' },
    mech: { en: 'Dual GLP-1/glucagon agonist used in research models examining fat-oxidation pathways.', es: 'Agonista dual GLP-1/glucagón utilizado en modelos de investigación sobre vías de oxidación de grasas.' },
    interest: { en: 'Combines two metabolic hormone pathways, placing it in the same emerging research category as Tirzepatide and Mazdutide. Of research interest for its dual-pathway metabolic activity, tracked in independent literature.', es: 'Combina dos vías hormonales metabólicas, ubicándolo en la misma categoría emergente de investigación que Tirzepatide y Mazdutide. De interés en investigación por su actividad metabólica de doble vía, seguida en literatura independiente.' } },
  { cat: 'metabolic', name: 'GLP-1',
    desc: { en: 'Reference incretin peptide used in glucose-regulation research.', es: 'Péptido incretina de referencia utilizado en investigación de regulación de la glucosa.' },
    mech: { en: 'Incretin peptide studied for glucose-dependent insulin-release and gastric-emptying research models.', es: 'Péptido incretina estudiado en modelos de liberación de insulina dependiente de glucosa y vaciado gástrico.' },
    interest: { en: 'This is the base incretin hormone that many newer metabolic compounds are designed to mimic or build upon. A foundational reference compound throughout incretin-pathway research literature.', es: 'Esta es la hormona incretina base que muchos compuestos metabólicos más nuevos están diseñados para imitar o mejorar. Un compuesto de referencia fundamental en la literatura de investigación de la vía incretina.' } },
  { cat: 'metabolic', name: '5-Amino-1MQ',
    desc: { en: 'Studied as an NNMT inhibitor in adipose-tissue metabolism research.', es: 'Estudiado como inhibidor de la enzima NNMT en investigación del metabolismo del tejido adiposo.' },
    mech: { en: 'NNMT enzyme inhibitor used in research models examining energy expenditure in adipose tissue.', es: 'Inhibidor de la enzima NNMT utilizado en modelos de investigación sobre gasto energético en tejido adiposo.' },
    interest: { en: 'Works through a completely different route than the GLP-1 family — it targets an enzyme involved in how fat cells manage energy. Studied in independent research on NNMT-pathway modulation and adipose energy metabolism.', es: 'Funciona por una vía completamente distinta a la familia GLP-1 — actúa sobre una enzima involucrada en cómo las células grasas manejan la energía. Estudiado en investigación independiente sobre modulación de la vía NNMT y metabolismo energético adiposo.' } },
  { cat: 'metabolic', name: 'Lipo-C',
    desc: { en: 'Lipotropic compound blend used in hepatic lipid-metabolism research.', es: 'Combinación lipotrópica utilizada en investigación del metabolismo hepático de lípidos.' },
    mech: { en: 'Combination of methionine, inositol and choline studied for hepatic fat-transport research models.', es: 'Combinación de metionina, inositol y colina estudiada en modelos de investigación de transporte hepático de grasas.' },
    interest: { en: 'A classic lipotropic blend that has been part of nutrition and metabolic research literature for decades, well before newer peptide compounds appeared. Referenced in research literature on lipotropic compound combinations and hepatic lipid metabolism.', es: 'Una combinación lipotrópica clásica que ha sido parte de la literatura de investigación nutricional y metabólica durante décadas, mucho antes de que aparecieran los péptidos más nuevos. Referenciado en literatura de investigación sobre combinaciones lipotrópicas y metabolismo hepático de lípidos.' } },
  { cat: 'metabolic', name: 'Lipo-C + B12',
    desc: { en: 'Lipotropic blend with B12 for cellular energy-pathway research.', es: 'Blend lipotrópico con B12 para investigación de vías de energía celular.' },
    mech: { en: 'Lipotropic blend combined with vitamin B12, studied in fat-metabolism and cellular-energy research models.', es: 'Blend lipotrópico combinado con vitamina B12, estudiado en modelos de metabolismo de grasas y energía celular.' },
    interest: { en: 'The same lipotropic blend with added B12 — a pairing frequently referenced together in metabolic-research literature. Studied alongside cellular-energy pathway research in combination with lipotropic compounds.', es: 'El mismo blend lipotrópico con B12 agregada — una combinación frecuentemente referenciada en conjunto en la literatura de investigación metabólica. Estudiado junto con investigación de vías de energía celular en combinación con compuestos lipotrópicos.' } },

  // ---- GH / IGF Research ----
  { cat: 'gh-igf', name: 'CJC-1295 (No DAC)',
    desc: { en: 'Studied as a short-acting GHRH analog in growth-hormone secretion research.', es: 'Estudiado como análogo de GHRH de acción corta en investigación de secreción de hormona de crecimiento.' },
    mech: { en: 'Short-acting GHRH analog used in research models studying pulsatile growth-hormone release from the pituitary.', es: 'Análogo de GHRH de acción corta utilizado en modelos de investigación sobre la liberación pulsátil de hormona de crecimiento.' },
    interest: { en: 'One of the two building blocks — alongside Ipamorelin — of the most commonly referenced growth-hormone research combination. One of the most referenced GHRH analogs in independent growth-hormone pathway research.', es: 'Uno de los dos componentes — junto con Ipamorelin — de la combinación de investigación de hormona de crecimiento más referenciada. Uno de los análogos de GHRH más referenciados en investigación independiente del eje de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'CJC-1295 (With DAC)',
    desc: { en: 'Investigated as a long-acting GHRH analog for sustained GH-release research.', es: 'Investigado como análogo de GHRH de acción prolongada para investigación de liberación sostenida de GH.' },
    mech: { en: 'CJC-1295 variant bound to an albumin-affinity domain, studied for extended GH-release research models.', es: 'Variante de CJC-1295 unida a un dominio de afinidad a albúmina, estudiada en modelos de liberación prolongada de GH.' },
    interest: { en: 'The longer-acting version of CJC-1295, engineered to stay active for days instead of hours. Studied in research literature examining extended-duration GHRH pathway activity.', es: 'La versión de acción prolongada de CJC-1295, diseñada para mantenerse activa durante días en lugar de horas. Estudiado en literatura de investigación sobre actividad prolongada de la vía GHRH.' } },
  { cat: 'gh-igf', name: 'Ipamorelin',
    desc: { en: 'Studied as a selective GHS-R secretagogue in growth-hormone research models.', es: 'Estudiado como secretagogo selectivo del receptor GHS-R en modelos de investigación de hormona de crecimiento.' },
    mech: { en: 'Selective ghrelin-receptor (GHS-R) secretagogue studied for GH release without notable cortisol or prolactin research interference.', es: 'Secretagogo selectivo del receptor de grelina (GHS-R) estudiado por su liberación de GH sin interferencia notable en cortisol o prolactina.' },
    interest: { en: 'Known for being one of the more selective growth-hormone compounds studied, meaning it carries a lower likelihood of also affecting cortisol or prolactin. Frequently referenced in secretagogue research literature due to its receptor-selectivity profile.', es: 'Conocido por ser uno de los compuestos de hormona de crecimiento más selectivos estudiados, con menor probabilidad de afectar también al cortisol o la prolactina. Frecuentemente referenciado en literatura de secretagogos por su perfil de selectividad de receptor.' } },
  { cat: 'gh-igf', name: 'Sermorelin Acetate',
    desc: { en: 'Reference GHRH(1-29) fragment used in growth-hormone release research.', es: 'Fragmento de referencia GHRH(1-29) utilizado en investigación de liberación de hormona de crecimiento.' },
    mech: { en: 'Active GHRH fragment (1-29) studied for physiological growth-hormone release research models.', es: 'Fragmento activo de GHRH (1-29) estudiado en modelos de liberación fisiológica de hormona de crecimiento.' },
    interest: { en: 'One of the earliest GHRH-based compounds studied, predating many of the newer growth-hormone secretagogues on this list. A long-studied reference compound throughout GHRH pathway research literature.', es: 'Uno de los primeros compuestos basados en GHRH estudiados, anterior a muchos de los secretagogos de hormona de crecimiento más nuevos de esta lista. Un compuesto de referencia ampliamente estudiado en la literatura de investigación de la vía GHRH.' } },
  { cat: 'gh-igf', name: 'Hexarelin Acetate',
    desc: { en: 'Studied as a high-potency ghrelin-receptor secretagogue.', es: 'Estudiado como secretagogo de alta potencia del receptor de grelina.' },
    mech: { en: 'High-potency GH secretagogue used in ghrelin-receptor research models.', es: 'Secretagogo de GH de alta potencia utilizado en modelos de investigación del receptor de grelina.' },
    interest: { en: 'Considered one of the more potent GH secretagogues in its class, often compared against Ipamorelin in research literature. Studied in research literature for its high-affinity ghrelin-receptor activity.', es: 'Considerado uno de los secretagogos de GH más potentes de su clase, frecuentemente comparado con Ipamorelin en la literatura de investigación. Estudiado en literatura de investigación por su actividad de alta afinidad en el receptor de grelina.' } },
  { cat: 'gh-igf', name: 'GHRP-6 Acetate',
    desc: { en: 'Investigated for ghrelin-receptor-mediated GH secretion research.', es: 'Investigado por su acción en la secreción de GH mediada por el receptor de grelina.' },
    mech: { en: 'GH secretagogue studied alongside ghrelin-receptor-mediated appetite-signaling research models.', es: 'Secretagogo de GH estudiado junto con modelos de señalización del apetito mediados por el receptor de grelina.' },
    interest: { en: 'Notably increases appetite as part of its mechanism — a side-effect that is itself a separate subject of research interest. Referenced in research combining growth-hormone and appetite-pathway study.', es: 'Notablemente aumenta el apetito como parte de su mecanismo — un efecto secundario que en sí mismo es objeto de interés de investigación por separado. Referenciado en investigación que combina hormona de crecimiento y vías del apetito.' } },
  { cat: 'gh-igf', name: 'Tesamorelin',
    desc: { en: 'Studied as a GHRH analog in visceral-adipose-tissue research models.', es: 'Estudiado como análogo de GHRH en modelos de investigación de tejido adiposo visceral.' },
    mech: { en: 'GHRH analog developed for research specifically examining visceral-fat reduction via the GH axis.', es: 'Análogo de GHRH desarrollado para investigación específica sobre reducción de grasa visceral mediante el eje de GH.' },
    interest: { en: 'One of the few compounds in this family with a documented history of approved medical use, which makes it especially well characterized in the scientific literature. Widely cited in visceral-adipose-tissue research literature.', es: 'Uno de los pocos compuestos de esta familia con un historial documentado de uso médico aprobado, lo que lo hace especialmente bien caracterizado en la literatura científica. Ampliamente citado en la literatura de investigación de tejido adiposo visceral.' } },
  { cat: 'gh-igf', name: 'HGH 191AA (Somatropin)',
    desc: { en: 'Reference recombinant growth hormone for laboratory research.', es: 'Hormona de crecimiento recombinante de referencia para investigación de laboratorio.' },
    mech: { en: 'Recombinant human growth hormone, identical in sequence to endogenous GH, used as a laboratory reference standard.', es: 'Hormona de crecimiento humana recombinante, idéntica en secuencia a la GH endógena, utilizada como estándar de referencia en laboratorio.' },
    interest: { en: 'This is synthetic growth hormone itself, rather than a compound that stimulates its release — the reference point for the entire GH research category. The reference-standard compound throughout growth-hormone pathway research literature.', es: 'Esta es la hormona de crecimiento sintética en sí misma, en lugar de un compuesto que estimula su liberación — el punto de referencia para toda la categoría de investigación de GH. El compuesto de referencia estándar en la literatura de investigación del eje de hormona de crecimiento.' } },
  { cat: 'gh-igf', name: 'HGH Fragment 176-191',
    desc: { en: 'Studied C-terminal GH fragment in lipolysis-pathway research.', es: 'Fragmento C-terminal de GH estudiado en investigación de vías de lipólisis.' },
    mech: { en: 'C-terminal fragment of GH with no IGF-1 receptor activity, used in lipolysis-pathway research models.', es: 'Fragmento C-terminal de la GH sin actividad sobre el receptor de IGF-1, utilizado en modelos de investigación de lipólisis.' },
    interest: { en: 'A small piece of the full GH molecule, isolated because researchers found this specific fragment relates to fat metabolism without the broader hormonal effects. Studied specifically for its isolated lipolytic research profile, distinct from full-sequence GH.', es: 'Un pequeño fragmento de la molécula completa de GH, aislado porque los investigadores encontraron que se relaciona con el metabolismo de grasas sin los efectos hormonales más amplios. Estudiado específicamente por su perfil lipolítico aislado, distinto al de la GH de secuencia completa.' } },
  { cat: 'gh-igf', name: 'IGF-1 LR3',
    desc: { en: 'Extended half-life IGF-1 analog used in cell-proliferation research.', es: 'Análogo de IGF-1 de vida media extendida utilizado en investigación de proliferación celular.' },
    mech: { en: 'Extended half-life IGF-1 analog studied for direct IGF-1-receptor activation research.', es: 'Análogo de IGF-1 de vida media extendida, estudiado por su activación directa del receptor de IGF-1.' },
    interest: { en: 'A modified version of a natural growth factor, altered specifically so it stays active in the body longer for research purposes. Referenced in cell-proliferation and tissue-growth research literature.', es: 'Una versión modificada de un factor de crecimiento natural, alterada específicamente para que permanezca activa más tiempo con fines de investigación. Referenciado en literatura de investigación de proliferación celular y crecimiento tisular.' } },
  { cat: 'gh-igf', name: 'IGF-DES',
    desc: { en: 'Studied IGF-1 variant in localized tissue-growth research models.', es: 'Variante de IGF-1 estudiada en modelos de investigación de crecimiento tisular localizado.' },
    mech: { en: 'IGF-1 variant with greater local receptor affinity, studied in targeted tissue-research models.', es: 'Variante de IGF-1 con mayor afinidad local al receptor, estudiada en modelos de investigación tisular focalizada.' },
    interest: { en: 'Another IGF-1 variant, but modified for a more localized research profile rather than a broad systemic one. Studied in localized-tissue growth-factor research literature.', es: 'Otra variante de IGF-1, pero modificada para un perfil de investigación más localizado en lugar de uno sistémico amplio. Estudiado en literatura de investigación de factores de crecimiento tisular localizado.' } },
  { cat: 'gh-igf', name: 'Follistatin',
    desc: { en: 'Investigated as a myostatin inhibitor in muscle-tissue research.', es: 'Investigado como inhibidor de miostatina en investigación de tejido muscular.' },
    mech: { en: 'Natural myostatin inhibitor studied in research models examining muscle-tissue growth regulation.', es: 'Inhibidor natural de la miostatina, estudiado en modelos de investigación sobre regulación del crecimiento del tejido muscular.' },
    interest: { en: 'Works by blocking myostatin, the protein that naturally caps muscle growth — this blocking action is what makes it a distinct research subject. Referenced in myostatin-pathway research literature examining muscle-tissue regulation.', es: 'Funciona bloqueando la miostatina, la proteína que limita naturalmente el crecimiento muscular — esta acción de bloqueo es lo que lo convierte en un tema de investigación particular. Referenciado en literatura de investigación de la vía de miostatina sobre regulación del tejido muscular.' } },
  { cat: 'gh-igf', name: 'BPC-157',
    desc: { en: 'Studied for angiogenesis and tissue-repair pathway research.', es: 'Estudiado en investigación de vías de angiogénesis y reparación tisular.' },
    mech: { en: 'Peptide derived from a gastric protein, studied in research models examining angiogenesis and tissue repair.', es: 'Péptido derivado de una proteína gástrica, estudiado en modelos de investigación de angiogénesis y reparación de tejidos.' },
    interest: { en: 'Originally identified in gastric juice, this is one of the most discussed compounds in independent injury and recovery research communities. One of the most widely referenced compounds in independent tissue-repair research literature.', es: 'Identificado originalmente en el jugo gástrico, es uno de los compuestos más discutidos en comunidades independientes de investigación sobre lesiones y recuperación. Uno de los compuestos más referenciados en la literatura de investigación independiente sobre reparación tisular.' } },
  { cat: 'gh-igf', name: 'TB-500 (Thymosin B4 Acetate)',
    desc: { en: 'Investigated for actin-regulation and cell-migration research.', es: 'Investigado en regulación de actina y migración celular.' },
    mech: { en: 'Regulates cellular actin in research models studying cell migration and tissue-repair pathways.', es: 'Regula la actina celular en modelos de investigación sobre migración celular y vías de reparación tisular.' },
    interest: { en: 'A synthetic version of a naturally occurring protein fragment, almost always discussed alongside BPC-157 in tissue-repair research. Frequently studied alongside BPC-157 in independent tissue-repair research literature.', es: 'Una versión sintética de un fragmento proteico natural, casi siempre discutido junto con BPC-157 en investigación de reparación de tejidos. Frecuentemente estudiado junto con BPC-157 en literatura de investigación sobre reparación tisular.' } },
  { cat: 'gh-igf', name: 'KPV',
    desc: { en: 'Studied tripeptide in gut anti-inflammatory pathway research.', es: 'Tripéptido estudiado en investigación de vías antiinflamatorias intestinales.' },
    mech: { en: 'Alpha-MSH-derived tripeptide studied for local anti-inflammatory activity in digestive-tract research models.', es: 'Tripéptido derivado de la alfa-MSH, estudiado por su actividad antiinflamatoria local en modelos de investigación del tracto digestivo.' },
    interest: { en: 'A very small, simple tripeptide studied mainly within gut-related inflammation research. Referenced in gut-health research literature for its anti-inflammatory pathway profile.', es: 'Un tripéptido muy pequeño y simple, estudiado principalmente en investigación de inflamación intestinal. Referenciado en literatura de investigación de salud intestinal por su perfil de vía antiinflamatoria.' } },
  { cat: 'gh-igf', name: 'GHK-Cu',
    desc: { en: 'Studied copper-peptide complex in collagen-synthesis research.', es: 'Complejo péptido-cobre estudiado en investigación de síntesis de colágeno.' },
    mech: { en: 'Copper-peptide complex studied for its role in collagen synthesis and extracellular-matrix research models.', es: 'Complejo péptido-cobre estudiado por su papel en la síntesis de colágeno y modelos de investigación de la matriz extracelular.' },
    interest: { en: 'A naturally occurring copper-binding peptide found in the body that declines with age — part of the reason it is so widely studied in skin and collagen research. Widely studied in dermatological and collagen-synthesis research literature.', es: 'Un péptido de unión al cobre que ocurre naturalmente en el cuerpo y disminuye con la edad — parte de la razón por la que se estudia tanto en investigación de piel y colágeno. Ampliamente estudiado en literatura de investigación dermatológica y de síntesis de colágeno.' } },

  // ---- Neuroscience Research ----
  { cat: 'brain-sleep', name: 'Semax',
    desc: { en: 'Studied ACTH-fragment analog in BDNF and neuroplasticity research.', es: 'Análogo de fragmento de ACTH estudiado en investigación de BDNF y neuroplasticidad.' },
    mech: { en: 'Synthetic ACTH fragment studied for its effect on BDNF expression in neuroplasticity research models.', es: 'Fragmento sintético de ACTH estudiado por su efecto sobre la expresión de BDNF en modelos de investigación de neuroplasticidad.' },
    interest: { en: 'Developed decades ago in Russia, with one of the longest research histories of any nootropic peptide. A long-studied nootropic-research compound originating from Russian pharmacological research literature.', es: 'Desarrollado hace décadas en Rusia, con una de las historias de investigación más largas de cualquier péptido nootrópico. Un compuesto nootrópico ampliamente estudiado, originario de la literatura farmacológica rusa.' } },
  { cat: 'brain-sleep', name: 'Selank',
    desc: { en: 'Investigated tuftsin analog in GABAergic-modulation research models.', es: 'Análogo de tuftsina investigado en modelos de modulación GABAérgica.' },
    mech: { en: 'Tuftsin analog studied for anxiolytic-related GABAergic activity in non-sedative research models.', es: 'Análogo de tuftsina estudiado por su actividad GABAérgica de tipo ansiolítico en modelos no sedantes.' },
    interest: { en: 'Developed by the same Russian research institute as Semax, but focused on calming pathways rather than focus. Studied alongside Semax in independent anxiolytic-pathway research literature.', es: 'Desarrollado por el mismo instituto de investigación ruso que Semax, pero enfocado en vías de calma en lugar de concentración. Estudiado junto con Semax en literatura de investigación independiente sobre vías ansiolíticas.' } },
  { cat: 'brain-sleep', name: 'Cerebrolysin',
    desc: { en: 'Neurotrophic peptide mixture used in neurodegeneration research.', es: 'Mezcla de péptidos neurotróficos utilizada en investigación de neurodegeneración.' },
    mech: { en: 'Mixture of neurotrophic peptides derived from brain protein, studied alongside BDNF and NGF research models.', es: 'Mezcla de péptidos neurotróficos derivados de proteína cerebral, estudiada junto a modelos de investigación de BDNF y NGF.' },
    interest: { en: 'A mixture of naturally derived peptide fragments that has been used in neurological research settings for decades. Referenced in neurodegeneration research literature for its neurotrophic peptide profile.', es: 'Una mezcla de fragmentos peptídicos de origen natural, utilizada en entornos de investigación neurológica durante décadas. Referenciado en literatura de investigación de neurodegeneración por su perfil de péptidos neurotróficos.' } },
  { cat: 'brain-sleep', name: 'DSIP',
    desc: { en: 'Studied neuropeptide in slow-wave-sleep induction research models.', es: 'Neuropéptido estudiado en modelos de inducción de sueño de ondas lentas.' },
    mech: { en: 'Neuropeptide studied for GABA-receptor interaction in slow-wave-sleep research models.', es: 'Neuropéptido estudiado por su interacción con receptores GABA en modelos de investigación de sueño de ondas lentas.' },
    interest: { en: 'Its name literally describes what researchers study it for — “Delta Sleep-Inducing Peptide” refers to the deep-sleep brainwave stage. Studied in sleep-architecture research literature for its slow-wave-sleep pathway activity.', es: 'Su nombre describe literalmente lo que los investigadores estudian — “Delta Sleep-Inducing Peptide” se refiere a la etapa cerebral del sueño profundo. Estudiado en literatura de investigación de arquitectura del sueño por su actividad en la vía de ondas lentas.' } },
  { cat: 'brain-sleep', name: 'Ara-290',
    desc: { en: 'Non-hematopoietic EPO derivative studied in neuroprotection research.', es: 'Derivado no hematopoyético de EPO estudiado en investigación de neuroprotección.' },
    mech: { en: 'Non-hematopoietic derivative of erythropoietin studied for cytoprotective-receptor activity in neural-repair research.', es: 'Derivado no hematopoyético de la eritropoyetina, estudiado por su actividad en receptores citoprotectores en investigación de reparación neural.' },
    interest: { en: 'A lab-engineered piece of the EPO hormone, modified specifically to remove its blood-related effects while keeping its nerve-protective research profile. An emerging compound in neuroprotection research literature, derived from EPO-pathway study.', es: 'Un fragmento de la hormona EPO diseñado en laboratorio, modificado específicamente para eliminar sus efectos relacionados con la sangre y conservar su perfil de investigación neuroprotector. Un compuesto emergente en literatura de investigación de neuroprotección, derivado del estudio de la vía de EPO.' } },

  // ---- Cellular & Longevity Research ----
  { cat: 'performance', name: 'MOTS-c',
    desc: { en: 'Mitochondrial-derived peptide studied in AMPK-pathway research.', es: 'Péptido mitocondrial estudiado en investigación de la vía AMPK.' },
    mech: { en: 'Mitochondrial-DNA-derived peptide studied for AMPK-pathway activation in metabolic-efficiency research.', es: 'Péptido derivado del ADN mitocondrial, estudiado por la activación de la vía AMPK en investigación de eficiencia metabólica.' },
    interest: { en: 'One of a small class of peptides discovered hiding inside mitochondrial DNA — a relatively recent and still-expanding area of cellular research. Referenced in mitochondrial-research literature as a key marker in cellular-energy pathway studies.', es: 'Uno de un pequeño grupo de péptidos descubiertos ocultos en el ADN mitocondrial — un área de investigación celular relativamente reciente y en expansión. Referenciado en literatura de investigación mitocondrial como marcador clave en estudios de la vía de energía celular.' } },
  { cat: 'performance', name: 'SS-31',
    desc: { en: 'Studied for cardiolipin-binding mitochondrial-stabilization research.', es: 'Estudiado en investigación de estabilización mitocondrial mediante unión a cardiolipina.' },
    mech: { en: 'Binds to cardiolipin in the inner mitochondrial membrane, studied in ATP-production research models.', es: 'Se une a la cardiolipina en la membrana mitocondrial interna, estudiado en modelos de investigación de producción de ATP.' },
    interest: { en: 'Designed to target mitochondria directly, which is why it appears so often in longevity and cellular-aging research circles. Widely studied in independent longevity-research literature for its mitochondrial-stabilization profile.', es: 'Diseñado para actuar directamente sobre las mitocondrias, por lo que aparece con frecuencia en círculos de investigación de longevidad y envejecimiento celular. Ampliamente estudiado en literatura de investigación de longevidad por su perfil de estabilización mitocondrial.' } },
  { cat: 'performance', name: 'NAD+',
    desc: { en: 'Essential coenzyme studied in cellular bioenergetics and sirtuin research.', es: 'Coenzima esencial estudiada en bioenergética celular e investigación de sirtuinas.' },
    mech: { en: 'Essential coenzyme studied for its role in cellular energy production and sirtuin-activity research models.', es: 'Coenzima esencial estudiada por su papel en la producción de energía celular y modelos de investigación de sirtuinas.' },
    interest: { en: 'A molecule every cell needs to produce energy, and one of the most discussed compounds in the entire longevity-research space. One of the most referenced compounds in cellular-aging and longevity-research literature.', es: 'Una molécula que toda célula necesita para producir energía, y uno de los compuestos más discutidos en todo el ámbito de investigación de la longevidad. Uno de los compuestos más referenciados en literatura de investigación de envejecimiento celular y longevidad.' } },
  { cat: 'performance', name: 'L-Carnitine',
    desc: { en: 'Studied in fatty-acid oxidation and mitochondrial-transport research.', es: 'Estudiado en investigación de oxidación de ácidos grasos y transporte mitocondrial.' },
    mech: { en: 'Transports long-chain fatty acids into the mitochondria, studied in fat-oxidation research models.', es: 'Transporta ácidos grasos de cadena larga hacia la mitocondria, estudiado en modelos de investigación de oxidación de grasas.' },
    interest: { en: 'One of the best-established compounds on this list, backed by decades of published research on fat metabolism. A foundational reference compound throughout fatty-acid metabolism research literature.', es: 'Uno de los compuestos mejor establecidos de esta lista, respaldado por décadas de investigación publicada sobre el metabolismo de grasas. Un compuesto de referencia fundamental en la literatura de investigación del metabolismo de ácidos grasos.' } },
  { cat: 'performance', name: 'AOD-9604',
    desc: { en: 'GH-fragment studied in lipolysis-pathway research models.', es: 'Fragmento de GH estudiado en modelos de investigación de vías de lipólisis.' },
    mech: { en: 'GH fragment (176-191) studied for lipolysis-pathway activity without IGF-1-receptor research interference.', es: 'Fragmento de GH (176-191) estudiado por su actividad en vías de lipólisis sin interferencia en el receptor de IGF-1.' },
    interest: { en: 'Developed specifically to isolate the fat-related portion of the GH molecule without its other hormonal effects. Studied specifically for its isolated lipolytic research profile.', es: 'Desarrollado específicamente para aislar la porción relacionada con la grasa de la molécula de GH, sin sus otros efectos hormonales. Estudiado específicamente por su perfil lipolítico aislado.' } },
  { cat: 'performance', name: 'Epitalon',
    desc: { en: 'Tetrapeptide studied in telomerase-activity and pineal-function research.', es: 'Tetrapéptido estudiado en investigación de actividad de telomerasa y función pineal.' },
    mech: { en: 'Tetrapeptide studied for its action on the pineal gland, melatonin-production and telomerase-activity research models.', es: 'Tetrapéptido estudiado por su acción sobre la glándula pineal y modelos de investigación de producción de melatonina y actividad de la telomerasa.' },
    interest: { en: 'Studied for decades in Russian aging research, particularly around its relationship to telomeres — the protective caps on chromosomes tied to cellular aging. Referenced in longevity-research literature for telomerase-pathway studies originating from Russian gerontological research.', es: 'Estudiado durante décadas en investigación rusa sobre el envejecimiento, particularmente en relación con los telómeros — las protecciones de los cromosomas ligadas al envejecimiento celular. Referenciado en literatura de investigación de longevidad por estudios de la vía de telomerasa, originados en la investigación gerontológica rusa.' } },

  // ---- Immune Research ----
  { cat: 'immune', name: 'Thymosin Alpha-1',
    desc: { en: 'Thymic peptide studied in T-lymphocyte modulation research.', es: 'Péptido tímico estudiado en investigación de modulación de linfocitos T.' },
    mech: { en: 'Thymic peptide studied for its role in T-lymphocyte maturation and function research models.', es: 'Péptido tímico estudiado por su papel en la maduración y función de los linfocitos T.' },
    interest: { en: 'Derived from the thymus gland, and one of the most established immune-focused peptides in the research literature. Referenced in immunological research literature for several decades.', es: 'Derivado de la glándula del timo, y uno de los péptidos de enfoque inmunológico mejor establecidos en la literatura de investigación. Referenciado en literatura de investigación inmunológica durante varias décadas.' } },
  { cat: 'immune', name: 'Thymalin',
    desc: { en: "Thymus-derived extract studied in cellular immune-response research.", es: 'Extracto derivado del timo estudiado en investigación de respuesta inmune celular.' },
    mech: { en: 'Thymus-derived peptide extract studied for its role in cellular immune-response balance research.', es: 'Extracto peptídico del timo estudiado por su papel en el equilibrio de la respuesta inmune celular.' },
    interest: { en: 'A close relative of Thymosin Alpha-1, from the same line of Russian thymic-peptide research. Studied in Russian immunological research literature on thymic-peptide extracts.', es: 'Un pariente cercano de la Thymosin Alpha-1, de la misma línea de investigación rusa sobre péptidos tímicos. Estudiado en la literatura de investigación inmunológica rusa sobre extractos peptídicos tímicos.' } },
  { cat: 'immune', name: 'LL-37',
    desc: { en: 'Cathelicidin peptide studied in antimicrobial and immune-modulation research.', es: 'Péptido catelicidina estudiado en investigación antimicrobiana y de modulación inmune.' },
    mech: { en: 'Cathelicidin peptide studied for direct antimicrobial activity and innate immune-response research.', es: 'Péptido catelicidina estudiado por su actividad antimicrobiana directa e investigación de la respuesta inmune innata.' },
    interest: { en: 'Part of the body’s own first line of defense against pathogens, which makes it a frequent subject in antimicrobial research. Widely referenced in antimicrobial-peptide research literature.', es: 'Parte de la primera línea de defensa natural del cuerpo contra los patógenos, lo que lo convierte en un tema frecuente en investigación antimicrobiana. Ampliamente referenciado en literatura de investigación de péptidos antimicrobianos.' } },
  { cat: 'immune', name: 'VIP',
    desc: { en: 'Neuropeptide studied for VPAC-receptor-mediated immune research.', es: 'Neuropéptido estudiado en investigación inmune mediada por el receptor VPAC.' },
    mech: { en: 'Neuropeptide studied for inflammation regulation through VPAC receptors in immune-cell research models.', es: 'Neuropéptido estudiado por la regulación de la inflamación a través de receptores VPAC en modelos de investigación de células inmunes.' },
    interest: { en: 'A peptide already present naturally throughout the nervous and immune systems, studied here for its receptor-level interactions. Studied in neuroimmunology research literature for its receptor-mediated pathway profile.', es: 'Un péptido ya presente de forma natural en los sistemas nervioso e inmune, estudiado aquí por sus interacciones a nivel de receptor. Estudiado en literatura de investigación de neuroinmunología por su perfil de vía mediada por receptor.' } },
  { cat: 'immune', name: 'FOXO4',
    desc: { en: 'Peptide studied for FOXO4–p53 interaction in senescent-cell research.', es: 'Péptido estudiado por su interacción FOXO4-p53 en investigación de células senescentes.' },
    mech: { en: 'Peptide studied for disrupting the FOXO4-p53 interaction in senescent-cell clearance research.', es: 'Péptido estudiado por interrumpir la interacción FOXO4-p53 en investigación de eliminación de células senescentes.' },
    interest: { en: 'A newer entrant in longevity science, part of the “senolytic” research wave focused on clearing aged, dysfunctional cells. An emerging compound in senescence-research literature, tracked closely by longevity researchers.', es: 'Un compuesto más reciente en la ciencia de la longevidad, parte de la ola de investigación “senolítica” enfocada en eliminar células envejecidas y disfuncionales. Un compuesto emergente en literatura de investigación de senescencia, seguido de cerca por investigadores de longevidad.' } },
  { cat: 'immune', name: 'Kisspeptin-10',
    desc: { en: 'Studied for KISS1R-mediated HPG-axis signaling research.', es: 'Estudiado en investigación de señalización del eje HPG mediada por KISS1R.' },
    mech: { en: 'Activates the KISS1R receptor, studied in hypothalamic-pituitary-gonadal axis signaling research.', es: 'Activa el receptor KISS1R, estudiado en investigación de señalización del eje hipotálamo-hipófisis-gónadas.' },
    interest: { en: 'A key signal in the hormone chain that governs reproductive-hormone production, of long-standing interest to endocrinology researchers. Referenced in reproductive-endocrinology research literature.', es: 'Una señal clave en la cadena hormonal que gobierna la producción de hormonas reproductivas, de interés de larga data para investigadores en endocrinología. Referenciado en literatura de investigación de endocrinología reproductiva.' } },
  { cat: 'immune', name: 'Glutathione',
    desc: { en: 'Endogenous antioxidant tripeptide studied in oxidative-stress research.', es: 'Tripéptido antioxidante endógeno estudiado en investigación de estrés oxidativo.' },
    mech: { en: 'Endogenous antioxidant tripeptide studied for free-radical neutralization and hepatic research models.', es: 'Tripéptido antioxidante endógeno estudiado por la neutralización de radicales libres en modelos de investigación hepática.' },
    interest: { en: 'Often called the body’s “master antioxidant,” and one of the most widely referenced molecules in oxidative-stress research. One of the most studied antioxidant compounds in oxidative-stress research literature.', es: 'A menudo llamado el “antioxidante maestro” del cuerpo, y una de las moléculas más referenciadas en investigación de estrés oxidativo. Uno de los compuestos antioxidantes más estudiados en literatura de investigación de estrés oxidativo.' } },

  // ---- Endocrine Research ----
  { cat: 'hormonal', name: 'PT-141',
    desc: { en: 'Melanocortin-receptor (MC3R/MC4R) agonist studied in CNS arousal-pathway research.', es: 'Agonista de receptores de melanocortina (MC3R/MC4R) estudiado en investigación de vías de excitación del SNC.' },
    mech: { en: 'Melanocortin receptor agonist studied for central-nervous-system arousal-pathway signaling research.', es: 'Agonista de receptores de melanocortina estudiado por su señalización en vías de excitación del sistema nervioso central.' },
    interest: { en: 'Notable for working through the brain and nervous system rather than through blood flow, unlike older approaches studied in this area. Studied in central-nervous-system research literature for its melanocortin-receptor profile.', es: 'Notable por actuar a través del cerebro y el sistema nervioso en lugar de por el flujo sanguíneo, a diferencia de enfoques más antiguos estudiados en esta área. Estudiado en literatura de investigación del sistema nervioso central por su perfil de receptor de melanocortina.' } },
  { cat: 'hormonal', name: 'HCG',
    desc: { en: 'Studied for LH-receptor-mediated Leydig-cell steroidogenesis research.', es: 'Estudiado en investigación de esteroidogénesis de células de Leydig mediada por el receptor de LH.' },
    mech: { en: 'Hormone studied for LH-receptor mimicry in Leydig-cell steroidogenesis research models.', es: 'Hormona estudiada por su acción mimética sobre el receptor de LH en modelos de investigación de esteroidogénesis en células de Leydig.' },
    interest: { en: 'A hormone long used in reproductive-endocrinology research and one of the best-characterized compounds in this category. A long-referenced compound in reproductive-endocrinology research literature.', es: 'Una hormona utilizada durante mucho tiempo en investigación de endocrinología reproductiva y uno de los compuestos mejor caracterizados de esta categoría. Un compuesto ampliamente referenciado en literatura de investigación de endocrinología reproductiva.' } },
  { cat: 'hormonal', name: 'Melanotan I',
    desc: { en: 'Selective alpha-MSH analog studied in melanogenesis-pathway research.', es: 'Análogo selectivo de alfa-MSH estudiado en investigación de la vía de melanogénesis.' },
    mech: { en: 'Selective alpha-MSH analog studied for melanocyte-stimulating pathway research.', es: 'Análogo selectivo de la alfa-MSH, estudiado en investigación de vías de estimulación de melanocitos.' },
    interest: { en: 'Developed originally as a more selective, better-tolerated research alternative to Melanotan II. Studied in pigmentation-pathway research literature for its selective receptor profile.', es: 'Desarrollado originalmente como una alternativa de investigación más selectiva y mejor tolerada que Melanotan II. Estudiado en literatura de investigación de la vía de pigmentación por su perfil selectivo de receptor.' } },
  { cat: 'hormonal', name: 'Melanotan II',
    desc: { en: 'Non-selective melanocortin-receptor agonist studied in pigmentation-pathway research.', es: 'Agonista no selectivo de receptores de melanocortina estudiado en investigación de vías de pigmentación.' },
    mech: { en: 'Non-selective melanocortin-receptor agonist studied across pigmentation and melanocortin-signaling research models.', es: 'Agonista no selectivo de receptores de melanocortina, estudiado en modelos de investigación de pigmentación y señalización de melanocortina.' },
    interest: { en: 'One of the earliest melanocortin peptides studied, and still a frequent reference point for newer compounds in the same receptor family. Referenced in melanocortin-pathway research literature for its broad receptor activity.', es: 'Uno de los primeros péptidos de melanocortina estudiados, y todavía un punto de referencia frecuente para compuestos más nuevos de la misma familia de receptores. Referenciado en literatura de investigación de la vía de melanocortina por su amplia actividad de receptor.' } },

  // ---- Dermal Research ----
  { cat: 'aesthetic', name: 'Snap-8',
    desc: { en: 'Octapeptide studied for neuromuscular-junction inhibition in dermal research.', es: 'Octapéptido estudiado por la inhibición de la unión neuromuscular en investigación dérmica.' },
    mech: { en: 'Octapeptide studied for inhibiting neurotransmitter release at the neuromuscular junction in dermal-research models.', es: 'Octapéptido estudiado por inhibir la liberación de neurotransmisores en la unión neuromuscular en modelos de investigación dérmica.' },
    interest: { en: 'A cosmetic-chemistry peptide designed to mimic the effect of relaxed facial muscles, without being an actual neurotoxin like Botulinum Toxin. Studied in cosmetic-chemistry research literature for its neuromuscular-junction pathway profile.', es: 'Un péptido de química cosmética diseñado para imitar el efecto de músculos faciales relajados, sin ser una neurotoxina real como la Toxina Botulínica. Estudiado en literatura de investigación de química cosmética por su perfil de vía de la unión neuromuscular.' } },
  { cat: 'aesthetic', name: 'Lemon Bottle',
    desc: { en: 'Lipolytic solution studied for localized adipocyte-membrane research.', es: 'Solución lipolítica estudiada en investigación de membranas adipocitarias localizadas.' },
    mech: { en: 'Lipolytic solution studied for its effect on localized adipocyte-membrane breakdown in laboratory models.', es: 'Solución lipolítica estudiada por su efecto en la ruptura de membranas adipocitarias localizadas en modelos de laboratorio.' },
    interest: { en: 'A branded injectable formulation studied for its localized fat-dissolving properties in aesthetic-research contexts. Referenced in aesthetic-research literature for its localized lipolytic formulation.', es: 'Una formulación inyectable de marca estudiada por sus propiedades lipolíticas localizadas en contextos de investigación estética. Referenciado en literatura de investigación estética por su formulación lipolítica localizada.' } },
  { cat: 'aesthetic', name: 'Botulinum Toxin',
    desc: { en: 'Neurotoxin studied for acetylcholine-release inhibition at the neuromuscular junction.', es: 'Neurotoxina estudiada por la inhibición de la liberación de acetilcolina en la unión neuromuscular.' },
    mech: { en: 'Neurotoxin studied for blocking acetylcholine release at the neuromuscular junction in laboratory research models.', es: 'Neurotoxina estudiada por bloquear la liberación de acetilcolina en la unión neuromuscular en modelos de investigación de laboratorio.' },
    interest: { en: 'One of the most thoroughly studied substances in medicine, well beyond its cosmetic applications. One of the most extensively studied neurotoxins in research literature.', es: 'Una de las sustancias más estudiadas a fondo en medicina, mucho más allá de sus aplicaciones cosméticas. Una de las neurotoxinas más extensamente estudiadas en la literatura de investigación.' } },
  { cat: 'aesthetic', name: 'Hyaluronic Acid',
    desc: { en: 'Glycosaminoglycan studied in dermal-matrix hydration research.', es: 'Glicosaminoglicano estudiado en investigación de hidratación de la matriz dérmica.' },
    mech: { en: 'Glycosaminoglycan studied for water retention in dermal-matrix research models.', es: 'Glicosaminoglicano estudiado por la retención de agua en modelos de investigación de la matriz dérmica.' },
    interest: { en: 'A substance the body already produces naturally in skin and joints, which is why it is one of the most extensively studied dermal compounds. Widely referenced in dermal-research literature for its matrix-hydration profile.', es: 'Una sustancia que el cuerpo ya produce de forma natural en la piel y las articulaciones, por lo que es uno de los compuestos dérmicos más estudiados. Ampliamente referenciado en literatura de investigación dérmica por su perfil de hidratación de la matriz.' } },

  // ---- Research Combinations ----
  { cat: 'stacks', name: { en: 'CJC-1295 (No DAC) + Ipamorelin', es: 'CJC-1295 (No DAC) + Ipamorelin' },
    desc: { en: 'Combined GHRH/secretagogue blend studied in GH-pulse research.', es: 'Blend combinado de GHRH/secretagogo estudiado en investigación de pulsos de GH.' },
    mech: { en: 'Combines a short-acting GHRH with a selective ghrelin secretagogue for fuller GH-pulse research models.', es: 'Combina un GHRH de acción corta con un secretagogo selectivo de grelina para modelos de investigación de pulsos de GH más completos.' },
    interest: { en: 'Pairs the two most commonly referenced growth-hormone research peptides into a single combined protocol. One of the most referenced combination protocols in independent GH-pathway research literature.', es: 'Combina los dos péptidos de investigación de hormona de crecimiento más referenciados en un solo protocolo combinado. Uno de los protocolos combinados más referenciados en la literatura de investigación independiente del eje de GH.' } },
  { cat: 'stacks', name: { en: 'CagriSema Standard', es: 'CagriSema Estándar' },
    desc: { en: 'Amylin + GLP-1 combination studied in dual-pathway appetite research.', es: 'Combinación de amilina + GLP-1 estudiada en investigación de doble vía del apetito.' },
    mech: { en: 'Combines an amylin analog with a GLP-1 agonist, studied across two distinct appetite-pathway research models.', es: 'Combina un análogo de amilina con un agonista GLP-1, estudiado en dos vías distintas de investigación del apetito.' },
    interest: { en: 'Pairs two of the most closely watched metabolic compounds of the past few years into a single combined research protocol. Widely discussed in independent metabolic-research literature for its dual-pathway approach.', es: 'Combina dos de los compuestos metabólicos más seguidos de los últimos años en un solo protocolo de investigación combinado. Ampliamente discutido en literatura de investigación metabólica independiente por su enfoque de doble vía.' } },
  { cat: 'stacks', name: { en: 'CagriSema High Concentration', es: 'CagriSema Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the amylin + GLP-1 combination.', es: 'Vial de mayor concentración de la combinación amilina + GLP-1.' },
    mech: { en: 'Same amylin + GLP-1 research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación amilina + GLP-1, en un vial de mayor concentración.' },
    interest: { en: 'The same combined research protocol as the standard version, referenced in study designs calling for a higher-concentration vial. Same research profile as the standard combination, referenced for higher-concentration study designs.', es: 'El mismo protocolo de investigación combinado que la versión estándar, referenciado en diseños de estudio que requieren un vial de mayor concentración. Mismo perfil de investigación que la combinación estándar, referenciada para diseños de estudio de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 Standard', es: 'BPC-157 + TB-500 Estándar' },
    desc: { en: 'Combined tissue-repair peptide blend for regenerative research models.', es: 'Blend combinado de péptidos de reparación tisular para modelos de investigación regenerativa.' },
    mech: { en: 'Combines local angiogenesis with cellular-actin regulation research for more complete tissue-repair models.', es: 'Combina angiogénesis local con regulación de actina celular para modelos de investigación de reparación tisular más completos.' },
    interest: { en: 'Pairs the two most frequently referenced tissue-repair peptides into a single combined research protocol. One of the most referenced combination protocols in independent tissue-repair research literature.', es: 'Combina los dos péptidos de reparación tisular más referenciados en un solo protocolo de investigación combinado. Uno de los protocolos combinados más referenciados en la literatura de investigación independiente sobre reparación tisular.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + TB-500 High Concentration', es: 'BPC-157 + TB-500 Alta Concentración' },
    desc: { en: 'Higher-concentration research vial of the tissue-repair blend.', es: 'Vial de mayor concentración del blend de reparación tisular.' },
    mech: { en: 'Same tissue-repair research synergy, in a higher-concentration research vial.', es: 'Misma sinergia de investigación de reparación tisular, en un vial de mayor concentración.' },
    interest: { en: 'The same combined research protocol as the standard version, referenced in study designs calling for a higher-concentration vial. Same research profile as the standard blend, referenced for higher-concentration study designs.', es: 'El mismo protocolo de investigación combinado que la versión estándar, referenciado en diseños de estudio que requieren un vial de mayor concentración. Mismo perfil de investigación que el blend estándar, referenciado para diseños de estudio de mayor concentración.' } },
  { cat: 'stacks', name: { en: 'BPC-157 + GHK-Cu + TB-500', es: 'BPC-157 + GHK-Cu + TB-500' },
    desc: { en: 'Triple-peptide blend studied in tissue-regeneration research.', es: 'Blend triple de péptidos estudiado en investigación de regeneración tisular.' },
    mech: { en: 'Combines gastric-repair, collagen-remodeling and tissue-regeneration research pathways in a single blend.', es: 'Combina vías de investigación de reparación gástrica, remodelación de colágeno y regeneración tisular en un solo blend.' },
    interest: { en: 'Adds a skin-focused compound to the classic tissue-repair pairing, broadening the combined research protocol. Referenced in independent research literature exploring multi-pathway regenerative protocols.', es: 'Agrega un compuesto enfocado en la piel a la combinación clásica de reparación tisular, ampliando el protocolo de investigación combinado. Referenciado en literatura de investigación independiente que explora protocolos regenerativos multivía.' } },
  { cat: 'stacks', name: { en: 'GHK-Cu + TB-500 + BPC-157 + KPV', es: 'GHK-Cu + TB-500 + BPC-157 + KPV' },
    desc: { en: 'Quad-peptide blend for advanced multi-pathway research.', es: 'Blend cuádruple para investigación avanzada de múltiples vías.' },
    mech: { en: 'Combines four research pathways: dermal regeneration, tissue repair, angiogenesis and local inflammatory-response models.', es: 'Combina cuatro vías de investigación: regeneración dérmica, reparación tisular, angiogénesis y modelos de respuesta inflamatoria local.' },
    interest: { en: 'The most layered combination on this list, bringing together four individually well-referenced research compounds. A more complex combination referenced in advanced multi-pathway research protocols.', es: 'La combinación más compleja de esta lista, reuniendo cuatro compuestos de investigación individualmente bien referenciados. Una combinación más compleja referenciada en protocolos de investigación avanzados de múltiples vías.' } },

  // ---- Lab Supplies ----
  { cat: 'supplies', name: { en: 'Bacteriostatic Water / PBS', es: 'Agua Bacteriostática / PBS' },
    desc: { en: 'Sterile solution for laboratory peptide reconstitution.', es: 'Solución estéril para reconstitución de péptidos en laboratorio.' },
    mech: { en: 'Sterile isotonic solution used to reconstitute lyophilized research peptides while maintaining stability.', es: 'Solución isotónica estéril utilizada para reconstituir péptidos de investigación liofilizados manteniendo su estabilidad.' },
    interest: { en: 'The everyday solution researchers reach for first when preparing a peptide vial for use in the lab. A standard reference solution in laboratory peptide-handling protocols.', es: 'La solución cotidiana a la que los investigadores recurren primero al preparar un vial de péptido para uso en laboratorio. Una solución de referencia estándar en protocolos de manejo de péptidos en laboratorio.' } },
  { cat: 'supplies', name: { en: 'Benzyl Alcohol 0.9%', es: 'Alcohol Bencílico 0.9%' },
    desc: { en: 'Bacteriostatic water with preservative for laboratory reconstitution.', es: 'Agua bacteriostática con conservador para reconstitución de laboratorio.' },
    mech: { en: 'Bacteriostatic water with preservative studied for extending reconstituted-peptide stability in laboratory settings.', es: 'Agua bacteriostática con conservador utilizada para prolongar la estabilidad del péptido reconstituido en laboratorio.' },
    interest: { en: 'Chosen over plain sterile water specifically because the added preservative extends how long a reconstituted vial stays usable. Commonly referenced in laboratory protocols for extended peptide stability.', es: 'Elegida sobre el agua estéril simple específicamente porque el conservador agregado prolonga cuánto tiempo se mantiene utilizable un vial reconstituido. Comúnmente referenciada en protocolos de laboratorio para estabilidad prolongada de péptidos.' } },
  { cat: 'supplies', name: { en: 'Acetic Acid 0.6%', es: 'Ácido Acético 0.6%' },
    desc: { en: 'Reconstitution solution for specific research compounds.', es: 'Solución de reconstitución para compuestos de investigación específicos.' },
    mech: { en: 'Acidic pH reconstitution solution required for research peptides with low solubility in neutral water.', es: 'Solución de reconstitución de pH ácido, requerida para péptidos de investigación con baja solubilidad en agua neutra.' },
    interest: { en: 'A specialty solution reached for only when a particular compound will not dissolve properly in standard bacteriostatic water. Referenced in laboratory protocols for low-solubility research peptides.', es: 'Una solución especializada a la que se recurre solo cuando un compuesto particular no se disuelve correctamente en agua bacteriostática estándar. Referenciada en protocolos de laboratorio para péptidos de investigación de baja solubilidad.' } },
];

function nameOf(p) { return typeof p.name === 'string' ? p.name : p.name[CURRENT_LANG]; }

// ============================================================================
// Site copy dictionary — reference/collaboration framing only. Not a store.
// ============================================================================
const I18N = {
  en: {
    'nav.home': 'Home', 'nav.products': 'Research Peptides', 'nav.science': 'Our Science', 'nav.tools': 'Reference Tools', 'nav.contact': 'Contact',
    'disclaimer.text': 'For laboratory research use only. Not for human consumption.',

    'hero.eyebrow': 'Research Reference · Est. 2024',
    'hero.h1_pre': 'Precision Peptides for ', 'hero.h1_em': 'Serious Research',
    'hero.lede': 'PEPTORA is an independent research-reference resource for laboratories, institutions and biohacking researchers studying peptide compounds in vitro and preclinically.',
    'hero.cta1': 'Browse Research Reference', 'hero.cta2': 'Research Collaborations',
    'hero.stat1n': '65+', 'hero.stat1l': 'Compounds Referenced',
    'hero.stat2n': '9', 'hero.stat2l': 'Research Categories',
    'hero.stat3n': '100%', 'hero.stat3l': 'RUO Framing',

    'products.eyebrow': 'Research Reference',
    'products.h2': 'Compounds Organized by Research Area',
    'products.lede': 'A reference library for laboratory and preclinical research.',
    'products.notice': 'For laboratory research reference only. Not for human consumption, diagnostic or therapeutic use.',
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

    'compliance.eyebrow': 'Research Use Only',
    'compliance.h2': 'Classification & responsible use',
    'compliance.p': 'This website is an independent <strong>informational and educational reference</strong> for the research and biohacking community. All compounds referenced are classified <strong>Research Use Only (RUO)</strong>: intended exclusively for laboratory and preclinical research, not for human or veterinary use, diagnosis, treatment, cure, or prevention of any disease.',
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
    'contact.lede': 'This line is for research inquiries, technical data sheets, feedback and collaboration opportunities.',
    'contact.name': 'Name', 'contact.email': 'Institutional email', 'contact.message': 'Describe your research inquiry',
    'contact.send': 'Send Inquiry',
    'contact.phone_us': 'Research & Collaboration Line',
    'contact.phone_note': 'Direct, personalized attention for research collaboration — United States and Mexico, in English and Spanish.',
    'contact.address_label': 'Facility Address',
    'contact.side_note': 'For research, feedback and collaboration purposes.',

    'footer.tag': 'Independent Research Reference Since 2024',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'This website is an independent informational reference for laboratory research purposes. Not for human or veterinary use, consumption, diagnosis, treatment, cure or prevention of disease.',

    'form.sending': 'Sending…', 'form.ok': "Inquiry sent. Our research team will follow up shortly.",
    'form.err': "Couldn't send. Please contact us via phone.",

    'tools.eyebrow': 'Laboratory Reference Tool',
    'tools.h1': 'Reconstitution Concentration Reference',
    'tools.lede': 'A reference calculator for laboratory solution preparation. It computes the resulting concentration of a reconstituted research compound, or the diluent volume required to reach a target concentration — nothing more.',
    'tools.scope_note': 'This tool performs solution-concentration arithmetic only. It does not calculate, suggest, or reference amounts for administration or use in any living organism.',
    'tools.calc1.eyebrow': 'Calculator 01',
    'tools.calc1.h': 'Concentration From Reconstitution',
    'tools.calc1.desc': 'Enter the peptide mass and the diluent volume used to reconstitute it to find the resulting solution concentration.',
    'tools.calc2.eyebrow': 'Calculator 02',
    'tools.calc2.h': 'Diluent Volume For Target Concentration',
    'tools.calc2.desc': 'Enter the peptide mass and the concentration you want the solution to reach to find the required diluent volume.',
    'tools.field.mg': 'Peptide mass (mg)',
    'tools.field.ml': 'Diluent volume added (mL)',
    'tools.field.target': 'Target concentration (mg/mL)',
    'tools.result.mgml': 'Concentration',
    'tools.result.mcgml': 'Equivalent',
    'tools.result.ml': 'Diluent volume required',
    'tools.footnote': 'For laboratory research reference only. Not for human or veterinary use, consumption, diagnosis, treatment, cure or prevention of disease. This calculator does not provide administration, dosing, or usage guidance of any kind.',
  },
  es: {
    'nav.home': 'Inicio', 'nav.products': 'Péptidos de Investigación', 'nav.science': 'Nuestra Ciencia', 'nav.tools': 'Herramientas de Referencia', 'nav.contact': 'Contacto',
    'disclaimer.text': 'Uso exclusivo de laboratorio e investigación. No apto para consumo humano.',

    'hero.eyebrow': 'Referencia de Investigación · Fundada en 2024',
    'hero.h1_pre': 'Péptidos de Precisión para ', 'hero.h1_em': 'Investigación Seria',
    'hero.lede': 'PEPTORA es un recurso independiente de referencia para laboratorios, instituciones e investigadores de biohacking que estudian compuestos peptídicos in vitro y de forma preclínica.',
    'hero.cta1': 'Ver Referencia de Investigación', 'hero.cta2': 'Colaboraciones de Investigación',
    'hero.stat1n': '65+', 'hero.stat1l': 'Compuestos Referenciados',
    'hero.stat2n': '9', 'hero.stat2l': 'Categorías de Investigación',
    'hero.stat3n': '100%', 'hero.stat3l': 'Enfoque RUO',

    'products.eyebrow': 'Referencia de Investigación',
    'products.h2': 'Compuestos Organizados por Área de Investigación',
    'products.lede': 'Una biblioteca de referencia para investigación de laboratorio y preclínica.',
    'products.notice': 'Solo como referencia de investigación de laboratorio. No apto para consumo humano, uso diagnóstico ni terapéutico.',
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

    'compliance.eyebrow': 'Uso Exclusivo de Investigación',
    'compliance.h2': 'Clasificación y uso responsable',
    'compliance.p': 'Este sitio web es una <strong>referencia informativa y educativa</strong> independiente para la comunidad de investigación y biohacking. Todos los compuestos referenciados están clasificados como <strong>Research Use Only (RUO)</strong>: destinados exclusivamente a investigación de laboratorio y preclínica, no al uso humano o veterinario, diagnóstico, tratamiento, cura o prevención de enfermedades.',
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
    'contact.lede': 'Esta línea es para consultas de investigación, fichas técnicas, retroalimentación y oportunidades de colaboración.',
    'contact.name': 'Nombre', 'contact.email': 'Correo institucional', 'contact.message': 'Describe tu consulta de investigación',
    'contact.send': 'Enviar Consulta',
    'contact.phone_us': 'Línea de Investigación y Colaboración',
    'contact.phone_note': 'Atención directa y personalizada para colaboración de investigación — Estados Unidos y México, en inglés y español.',
    'contact.address_label': 'Dirección de la Instalación',
    'contact.side_note': 'Para fines de investigación, retroalimentación y colaboración.',

    'footer.tag': 'Referencia Independiente de Investigación Desde 2024',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer': 'Este sitio web es una referencia informativa independiente para fines de investigación de laboratorio. No apto para uso humano o veterinario, consumo, diagnóstico, tratamiento, cura o prevención de enfermedades.',

    'form.sending': 'Enviando…', 'form.ok': 'Consulta enviada. Nuestro equipo de investigación dará seguimiento pronto.',
    'form.err': 'No se pudo enviar. Contáctanos por teléfono.',

    'tools.eyebrow': 'Herramienta de Referencia de Laboratorio',
    'tools.h1': 'Referencia de Concentración de Reconstitución',
    'tools.lede': 'Una calculadora de referencia para la preparación de soluciones en laboratorio. Calcula la concentración resultante de un compuesto de investigación reconstituido, o el volumen de diluyente necesario para alcanzar una concentración objetivo — nada más.',
    'tools.scope_note': 'Esta herramienta realiza únicamente aritmética de concentración de soluciones. No calcula, sugiere ni hace referencia a cantidades de administración o uso en ningún organismo vivo.',
    'tools.calc1.eyebrow': 'Calculadora 01',
    'tools.calc1.h': 'Concentración a Partir de la Reconstitución',
    'tools.calc1.desc': 'Ingresa la masa del péptido y el volumen de diluyente usado para reconstituirlo, y obtén la concentración resultante de la solución.',
    'tools.calc2.eyebrow': 'Calculadora 02',
    'tools.calc2.h': 'Volumen de Diluyente Para una Concentración Objetivo',
    'tools.calc2.desc': 'Ingresa la masa del péptido y la concentración a la que quieres llevar la solución, y obtén el volumen de diluyente necesario.',
    'tools.field.mg': 'Masa del péptido (mg)',
    'tools.field.ml': 'Volumen de diluyente agregado (mL)',
    'tools.field.target': 'Concentración objetivo (mg/mL)',
    'tools.result.mgml': 'Concentración',
    'tools.result.mcgml': 'Equivalente',
    'tools.result.ml': 'Volumen de diluyente necesario',
    'tools.footnote': 'Solo como referencia de investigación de laboratorio. No apto para uso humano o veterinario, consumo, diagnóstico, tratamiento, cura o prevención de enfermedades. Esta calculadora no ofrece ninguna guía de administración, dosificación o uso.',
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

  document.querySelectorAll('.objective-list a i').forEach((detail, index) => {
    detail.textContent = t(`objective.detail.${index + 1}`);
  });

  const footerNav = document.querySelector('.footer-nav');
  if (footerNav && document.body.contains(document.getElementById('inicio'))) {
    footerNav.innerHTML = [
      ['#inicio', 'nav.biohacking'], ['#peptides', 'nav.peptides'], ['#performance', 'nav.performance'],
      ['#longevity', 'nav.longevity'], ['#lab', 'nav.lab'], ['tools.html', 'nav.tools'], ['#contacto', 'nav.contact']
    ].map(([href, key]) => `<a href="${href}">${t(key)}</a>`).join('');
  }

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = CURRENT_LANG === 'en' ? 'ES' : 'EN';

  renderProducts();
  buildTicker();
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
// Hero ticker — instrument-style live readout of referenced compounds
// ============================================================================
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = PEPTORA_PRODUCTS.filter(p => p.cat !== 'supplies');
  const lang = CURRENT_LANG;
  const row = items.map(p => {
    const catLabel = CAT_LABELS[lang][p.cat] || p.cat;
    return `<span class="tk-item"><strong>${nameOf(p)}</strong> — ${catLabel}</span><span class="tk-sep">/</span>`;
  }).join('');
  track.innerHTML = row + row;
}

// ============================================================================
// Hero canvas — generative peptide-chain network, reacts to cursor
// ============================================================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const hero = canvas ? canvas.closest('.hero') : null;
  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, dpr = 1, nodes = [];
  const mouse = { x: null, y: null };

  function resize() {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(14, Math.min(36, Math.floor(w / 55)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1.3 + Math.random() * 1.6,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = Math.min(150, w / 5);

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(191,160,84,${(1 - dist / maxDist) * 0.32})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (mouse.x !== null) {
        const dx = a.x - mouse.x, dy = a.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(212,175,55,${(1 - dist / 140) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(140,115,40,0.55)';
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReduced) requestAnimationFrame(step);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  resize();
  step();
}

// ============================================================================
// Hero stats — count up on load instead of appearing as static numbers
// ============================================================================
function animateStats() {
  const els = document.querySelectorAll('.stat-n[data-count]');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  els.forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced || !Number.isFinite(target)) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ============================================================================
// Product reference grid — fully static cards (content never expands/collapses).
// The FILTER interaction, however, animates: cards that remain visible glide
// to their new position (FLIP technique) and newly shown cards enter with a
// staggered fade, instead of an instant display:none toggle.
// ============================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const featuredGrid = document.getElementById('featuredGrid');
  if (!grid && !featuredGrid) return;
  const lang = CURRENT_LANG;

  if (featuredGrid) {
    const featuredCategories = ['metabolic', 'gh-igf', 'brain-sleep'];
    const featured = featuredCategories.map(category => PEPTORA_PRODUCTS.find(product => product.cat === category)).filter(Boolean);
    featuredGrid.innerHTML = featured.map((p, index) => `
      <article class="featured-card">
        <span>${String(index + 1).padStart(2, '0')} / ${CAT_LABELS[lang][p.cat] || p.cat}</span>
        <h3>${nameOf(p)}</h3>
        <p>${p.desc[lang]}</p>
        <a href="#productos">${t('featured.view')} <b>→</b></a>
      </article>`).join('');
  }

  if (!grid) return;

  grid.innerHTML = PEPTORA_PRODUCTS.map((p) => {
    const name = nameOf(p);
    const catLabel = CAT_LABELS[lang][p.cat] || p.cat;
    const lens = BIOHACKING_LENS[lang][p.cat] || BIOHACKING_LENS.en[p.cat];
    const lensLabels = BIOHACKING_LENS_LABELS[lang];
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
      <details class="pc-context">
        <summary>${lensLabels.title}<span>+</span></summary>
        <div class="pc-context-body">
          <div><span>${lensLabels.objective}</span><p>${lens.objective}</p></div>
          <div><span>${lensLabels.community}</span><p>${lens.community}</p></div>
          <div><span>${lensLabels.evidence}</span><p>${lens.evidence}</p></div>
          <a href="#objetivos" class="pc-context-link">${lensLabels.explore} <b>↗</b><em>${lens.map}</em></a>
          <small>${lensLabels.note}</small>
        </div>
      </details>
    </div>`;
  }).join('');

  const total = PEPTORA_PRODUCTS.length;
  updateProductCount(total);

  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyFilter(pill.getAttribute('data-filter'));
    });
  });

  function updateProductCount(visible) {
    if (countEl) countEl.textContent = CURRENT_LANG === 'es' ? `${visible} compuestos` : `${visible} compounds`;
  }

  function applyFilter(filter) {
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    const willShow = (card) => filter === 'all' || card.getAttribute('data-cat') === filter;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      let visible = 0;
      cards.forEach(card => {
        const show = willShow(card);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      updateProductCount(visible);
      return;
    }

    // FIRST — record positions of cards that are visible now and will stay visible
    const firstRects = new Map();
    cards.forEach(card => {
      if (card.style.display !== 'none' && willShow(card)) {
        firstRects.set(card, card.getBoundingClientRect());
      }
    });

    // Cards leaving the filter fade out first, so the reflow below is calm
    const leaving = cards.filter(card => card.style.display !== 'none' && !willShow(card));
    leaving.forEach(card => card.classList.add('fx-hide'));

    const commit = () => {
      let visible = 0;
      let enterIndex = 0;
      cards.forEach(card => {
        const show = willShow(card);
        const wasHidden = card.style.display === 'none';
        card.style.display = show ? '' : 'none';
        card.classList.remove('fx-hide');
        if (show) {
          visible++;
          if (wasHidden) {
            card.classList.add('fx-enter');
            card.style.transitionDelay = (enterIndex * 28) + 'ms';
            enterIndex++;
          }
        }
      });
      updateProductCount(visible);

      // LAST + INVERT + PLAY — reposition cards that stayed visible
      firstRects.forEach((firstRect, card) => {
        if (card.style.display === 'none') return;
        const lastRect = card.getBoundingClientRect();
        const dx = firstRect.left - lastRect.left;
        const dy = firstRect.top - lastRect.top;
        if (dx || dy) {
          card.style.transition = 'none';
          card.style.transform = `translate(${dx}px, ${dy}px)`;
          card.getBoundingClientRect(); // force reflow
          card.style.transition = '';
          card.style.transform = '';
        }
      });

      requestAnimationFrame(() => {
        cards.forEach(card => {
          if (card.classList.contains('fx-enter')) {
            card.getBoundingClientRect(); // force reflow
            card.classList.remove('fx-enter');
            card.style.transitionDelay = '';
          }
        });
      });
    };

    if (leaving.length) {
      setTimeout(commit, 200);
    } else {
      commit();
    }
  }
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
// Reconstitution concentration reference (tools.html only).
// Pure solution-concentration arithmetic. The optional device-scale converter
// reports volume equivalents only from values explicitly entered by the user;
// it never derives or recommends an amount, schedule, or route of use.
// ============================================================================
function initConcentrationCalc() {
  const mass = document.getElementById('u-mass-mg');
  const diluent = document.getElementById('u-diluent-ml');
  const reference = document.getElementById('u-reference-mg');
  const mlPerClick = document.getElementById('u-click-ml');
  const outMgMl = document.getElementById('u-out-mgml');
  const outMcgMl = document.getElementById('u-out-mcgml');
  const outMl = document.getElementById('u-out-ml');
  const outU100 = document.getElementById('u-out-u100');
  const outClicks = document.getElementById('u-out-clicks');

  if (!mass || !diluent || !reference || !mlPerClick) return;

  function fmt(n) {
    if (!Number.isFinite(n)) return '—';
    return (Math.round(n * 1000) / 1000).toString();
  }

  function clear() {
    [outMgMl, outMcgMl, outMl, outU100, outClicks].forEach(output => { output.textContent = '—'; });
  }

  function calculate() {
    const massMg = parseFloat(mass.value);
    const diluentMl = parseFloat(diluent.value);
    const referenceMg = parseFloat(reference.value);
    const clickVolumeMl = parseFloat(mlPerClick.value);
    if (!Number.isFinite(massMg) || !Number.isFinite(diluentMl) || massMg < 0 || diluentMl <= 0) { clear(); return; }
    const concentration = massMg / diluentMl;
    outMgMl.textContent = `${fmt(concentration)} mg/mL`;
    outMcgMl.textContent = `${fmt(concentration * 1000)} mcg/mL`;
    if (!Number.isFinite(referenceMg) || referenceMg < 0 || concentration <= 0) { outMl.textContent = '—'; outU100.textContent = '—'; outClicks.textContent = '—'; return; }
    const referenceMl = referenceMg / concentration;
    outMl.textContent = `${fmt(referenceMl)} mL`;
    outU100.textContent = `${fmt(referenceMl * 100)} ${t('tools.calc3.markings')}`;
    outClicks.textContent = Number.isFinite(clickVolumeMl) && clickVolumeMl > 0 ? `${fmt(referenceMl / clickVolumeMl)} ${t('tools.calc3.click_unit')}` : '—';
  }

  [mass, diluent, reference, mlPerClick].forEach(input => input.addEventListener('input', calculate));
}

// ============================================================================
// Init
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initContactForm();
  initAccordion();
  initHeroCanvas();
  animateStats();
  initConcentrationCalc();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));
  }

  document.querySelectorAll('a[href="#productos"]').forEach(link => {
    link.addEventListener('click', () => {
      const catalog = document.querySelector('.catalog-details');
      if (catalog) catalog.open = true;
    });
  });

  // Objectives are real entry points into the reference index, not decorative links.
  const objectiveFilters = ['metabolic', 'gh-igf', 'performance', 'brain-sleep', 'performance', 'immune', 'metabolic', 'aesthetic', null];
  document.querySelectorAll('.objective-list a').forEach((link, index) => {
    const filter = objectiveFilters[index];
    if (!filter) return;
    link.addEventListener('click', () => {
      const catalog = document.querySelector('.catalog-details');
      if (catalog) catalog.open = true;
      const pill = document.querySelector(`.filter-pill[data-filter="${filter}"]`);
      if (pill) pill.click();
    });
  });

  document.querySelectorAll('[data-system-filter]').forEach(link => {
    link.addEventListener('click', () => {
      const catalog = document.querySelector('.catalog-details');
      if (catalog) catalog.open = true;
      const filter = link.getAttribute('data-system-filter');
      const pill = document.querySelector(`.filter-pill[data-filter="${filter}"]`);
      if (pill) pill.click();
    });
  });

  const performanceCatalogLink = document.querySelector('.performance-copy a[href="#productos"]');
  if (performanceCatalogLink) {
    performanceCatalogLink.addEventListener('click', () => {
      const pill = document.querySelector('.filter-pill[data-filter="gh-igf"]');
      if (pill) pill.click();
    });
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

  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && navLinks.length) {
    const byId = new Map(navLinks.map(link => [link.getAttribute('href').slice(1), link]));
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.remove('active'));
        const active = byId.get(entry.target.id);
        if (active) active.classList.add('active');
      });
    }, { rootMargin: '-25% 0px -62% 0px', threshold: 0 });
    byId.forEach((link, id) => {
      const section = document.getElementById(id);
      if (section) navObserver.observe(section);
    });
  }
});

// Editorial platform copy. Kept in the same localization registry as the
// original reference content so language switching remains one coherent system.
Object.assign(I18N.en, {
  'nav.objectives': 'Objectives',
  'hero.eyebrow': 'PEPTORA / BIOHACKING PLATFORM',
  'hero.h1_pre': 'PEPTIDE SCIENCE', 'hero.h1_em': 'FOR THE BIOHACKING ERA',
  'hero.lede': 'Explore the intersection of peptide science, human performance, recovery, metabolism, cognition and longevity.',
  'hero.cta1': 'Explore biohacking', 'hero.cta2': 'Explore peptides',
  'hero.rail': 'SCIENCE', 'hero.rail2': 'PERFORMANCE', 'hero.rail3': 'LONGEVITY / BIOHACKING',
  'manifesto.h2': 'BIOHACKING BEGINS WITH <em>UNDERSTANDING THE SYSTEM.</em>',
  'manifesto.p': 'Human optimization is not a collection of isolated compounds. It is an evolving system of metabolism, recovery, sleep, cognition, performance, cellular health and longevity.',
  'manifesto.cta': 'Read our research philosophy <b>→</b>',
  'manifesto.note1': 'Mechanisms before marketing.', 'manifesto.note2': 'Systems before shortcuts.', 'manifesto.note3': 'Responsible research framing.',
  'objectives.eyebrow': 'PEPTORA / OPERATING SYSTEM', 'objectives.h2': 'EXPLORE BY <em>OBJECTIVE.</em>', 'objectives.p': 'Nine research pathways for a more connected view of performance and longevity.',
  'objective.1': 'METABOLIC', 'objective.2': 'PERFORMANCE', 'objective.3': 'RECOVERY', 'objective.4': 'COGNITION', 'objective.5': 'LONGEVITY', 'objective.6': 'CELLULAR HEALTH', 'objective.7': 'BODY COMPOSITION', 'objective.8': 'SKIN & TISSUE', 'objective.9': 'RESEARCH TOOLS',
  'performance.eyebrow': 'Human performance', 'performance.h2': 'ENGINEER<br>HUMAN<br><em>PERFORMANCE.</em>', 'performance.p': 'Energy, recovery, adaptation, body composition and metabolic efficiency are connected variables. Study the system, not the shortcut.', 'performance.cta': 'Explore performance <b>↗</b>',
  'peptides.eyebrow': 'Peptide science', 'peptides.h2': 'SMALL MOLECULES.<br><em>PRECISE SIGNALS.</em><br>COMPLEX SYSTEMS.', 'peptides.p': 'Peptides are biological signaling molecules and research tools. Their value is not in hype; it is in the questions they let researchers ask about mechanisms, pathways and biological context.', 'peptides.cta': 'Explore peptides <b>→</b>',
  'longevity.eyebrow': 'Longevity & cellular science', 'longevity.h2': 'LONGEVITY<br>IS A<br><em>CELLULAR<br>PROBLEM.</em>', 'longevity.p': 'Mitochondria, cellular signaling, metabolic health and repair are not isolated subjects. They are the biological infrastructure of how systems age and adapt.', 'longevity.cta': 'Explore longevity', 'ecosystem.eyebrow': 'The PEPTORA ecosystem',
  'longevity.visual': 'Mitochondria • Signaling • Repair',
  'products.eyebrow': 'Peptide science', 'products.h2': 'COMPOUNDS, <em>IN CONTEXT.</em>', 'products.lede': 'Explore research references by biological objective, pathway or peptide category.',
  'lab.eyebrow': 'The biohacking lab', 'lab.h2': 'THE SIGNAL<br><em>BEHIND THE NOISE.</em>', 'lab.p': 'Education should make science more legible, not make bigger promises. The Biohacking Lab connects mechanisms, pathways and reference tools in one system.', 'lab.cta': 'Open reference tools <b>↗</b>', 'lab.note': 'A reference system, not a prescription.',
  'about.h2': 'RIGOR BEFORE <em>RECOMMENDATION.</em>', 'contact.h2': 'START WITH A <em>BETTER QUESTION.</em>',
  'tools.calc3.eyebrow': 'Reference converter', 'tools.calc3.h': 'Volume & Device-Scale Reference', 'tools.calc3.desc': 'Convert a known laboratory volume using an explicitly supplied device scale. This is arithmetic only; it does not recommend an amount, route, schedule, or use.', 'tools.calc3.mg': 'Reference amount (mg)', 'tools.calc3.conc': 'Known concentration (mg/mL)', 'tools.calc3.clickml': 'Manufacturer-stated mL per click', 'tools.calc3.mlout': 'Calculated volume', 'tools.calc3.u100': 'U-100 scale markings', 'tools.calc3.clicks': 'Device clicks', 'tools.calc3.note': 'U-100 markings are a volume scale of 100 markings per mL, not an amount of active material. Click output only applies to the exact device specification entered above.', 'tools.calc3.scope': 'Reference only: confirm the concentration and the device documentation independently. PEPTORA does not provide dosing, administration, or device-use guidance.'
  ,'tools.calc3.markings': 'markings', 'tools.calc3.click_unit': 'clicks'
});
Object.assign(I18N.es, {
  'nav.objectives': 'Objetivos',
  'hero.eyebrow': 'PEPTORA / PLATAFORMA DE BIOHACKING',
  'hero.h1_pre': 'CIENCIA DE P\u00c9PTIDOS', 'hero.h1_em': 'PARA LA ERA DEL BIOHACKING',
  'hero.lede': 'Explora la intersecci\u00f3n entre ciencia de p\u00e9ptidos, rendimiento humano, recuperaci\u00f3n, metabolismo, cognici\u00f3n y longevidad.',
  'hero.cta1': 'Explorar biohacking', 'hero.cta2': 'Explorar p\u00e9ptidos',
  'hero.rail': 'CIENCIA', 'hero.rail2': 'RENDIMIENTO', 'hero.rail3': 'LONGEVIDAD / BIOHACKING',
  'manifesto.h2': 'EL BIOHACKING COMIENZA POR <em>ENTENDER EL SISTEMA.</em>',
  'manifesto.p': 'La optimizaci\u00f3n humana no es una colecci\u00f3n de compuestos aislados. Es un sistema en evoluci\u00f3n de metabolismo, recuperaci\u00f3n, sue\u00f1o, cognici\u00f3n, rendimiento, salud celular y longevidad.',
  'manifesto.cta': 'Leer nuestra filosof\u00eda de investigaci\u00f3n <b>→</b>',
  'manifesto.note1': 'Mecanismos antes que marketing.', 'manifesto.note2': 'Sistemas antes que atajos.', 'manifesto.note3': 'Marco de investigaci\u00f3n responsable.',
  'objectives.eyebrow': 'PEPTORA / SISTEMA OPERATIVO', 'objectives.h2': 'EXPLORA POR <em>OBJETIVO.</em>', 'objectives.p': 'Nueve rutas de investigaci\u00f3n para entender mejor el rendimiento y la longevidad.',
  'objective.1': 'METAB\u00d3LICO', 'objective.2': 'RENDIMIENTO', 'objective.3': 'RECUPERACI\u00d3N', 'objective.4': 'COGNICI\u00d3N', 'objective.5': 'LONGEVIDAD', 'objective.6': 'SALUD CELULAR', 'objective.7': 'COMPOSICI\u00d3N CORPORAL', 'objective.8': 'PIEL Y TEJIDO', 'objective.9': 'HERRAMIENTAS DE INVESTIGACI\u00d3N',
  'performance.eyebrow': 'Rendimiento humano', 'performance.h2': 'DISE\u00d1A EL<br>RENDIMIENTO<br><em>HUMANO.</em>', 'performance.p': 'Energ\u00eda, recuperaci\u00f3n, adaptaci\u00f3n, composici\u00f3n corporal y eficiencia metab\u00f3lica son variables conectadas. Estudia el sistema, no el atajo.', 'performance.cta': 'Explorar rendimiento <b>↗</b>',
  'peptides.eyebrow': 'Ciencia de p\u00e9ptidos', 'peptides.h2': 'MOL\u00c9CULAS PEQUE\u00d1AS.<br><em>SE\u00d1ALES PRECISAS.</em><br>SISTEMAS COMPLEJOS.', 'peptides.p': 'Los p\u00e9ptidos son mol\u00e9culas de se\u00f1alizaci\u00f3n biol\u00f3gica y herramientas de investigaci\u00f3n. Su valor no est\u00e1 en el ruido, sino en las preguntas que permiten hacer sobre mecanismos, rutas y contexto biol\u00f3gico.', 'peptides.cta': 'Explorar p\u00e9ptidos <b>→</b>',
  'longevity.eyebrow': 'Longevidad y ciencia celular', 'longevity.h2': 'LA LONGEVIDAD<br>ES UN<br><em>PROBLEMA<br>CELULAR.</em>', 'longevity.p': 'Mitocondrias, se\u00f1alizaci\u00f3n celular, salud metab\u00f3lica y reparaci\u00f3n no son temas aislados. Son la infraestructura biol\u00f3gica de c\u00f3mo los sistemas envejecen y se adaptan.', 'longevity.cta': 'Explorar longevidad', 'ecosystem.eyebrow': 'El ecosistema PEPTORA',
  'longevity.visual': 'Mitocondrias • Se\u00f1alizaci\u00f3n • Reparaci\u00f3n',
  'products.eyebrow': 'Ciencia de p\u00e9ptidos', 'products.h2': 'COMPUESTOS, <em>EN CONTEXTO.</em>', 'products.lede': 'Explora referencias de investigaci\u00f3n por objetivo biol\u00f3gico, v\u00eda o categor\u00eda de p\u00e9ptido.',
  'lab.eyebrow': 'El laboratorio de biohacking', 'lab.h2': 'LA SE\u00d1AL<br><em>DETR\u00c1S DEL RUIDO.</em>', 'lab.p': 'La educaci\u00f3n debe hacer la ciencia m\u00e1s legible, no hacer promesas m\u00e1s grandes. El Biohacking Lab conecta mecanismos, rutas y herramientas de referencia en un solo sistema.', 'lab.cta': 'Abrir herramientas de referencia <b>↗</b>', 'lab.note': 'Un sistema de referencia, no una prescripci\u00f3n.',
  'about.h2': 'RIGOR ANTES QUE <em>RECOMENDACI\u00d3N.</em>', 'contact.h2': 'EMPIEZA CON UNA <em>MEJOR PREGUNTA.</em>',
  'tools.calc3.eyebrow': 'Convertidor de referencia', 'tools.calc3.h': 'Referencia de volumen y escala de dispositivo', 'tools.calc3.desc': 'Convierte un volumen de laboratorio conocido usando una escala de dispositivo indicada expl\u00edcitamente. Es solo aritm\u00e9tica; no recomienda cantidad, v\u00eda, frecuencia ni uso.', 'tools.calc3.mg': 'Cantidad de referencia (mg)', 'tools.calc3.conc': 'Concentraci\u00f3n conocida (mg/mL)', 'tools.calc3.clickml': 'mL por clic indicado por el fabricante', 'tools.calc3.mlout': 'Volumen calculado', 'tools.calc3.u100': 'Marcas de escala U-100', 'tools.calc3.clicks': 'Clics del dispositivo', 'tools.calc3.note': 'Las marcas U-100 son una escala de volumen de 100 marcas por mL, no una cantidad de material activo. El resultado de clics solo aplica a la especificaci\u00f3n exacta indicada arriba.', 'tools.calc3.scope': 'Solo como referencia: confirma de forma independiente la concentraci\u00f3n y la documentaci\u00f3n del dispositivo. PEPTORA no ofrece indicaciones de dosificaci\u00f3n, administraci\u00f3n ni uso de dispositivos.'
  ,'tools.calc3.markings': 'marcas', 'tools.calc3.click_unit': 'clics'
});

Object.assign(I18N.en, {
  'tools.unified.eyebrow': 'One reference calculator', 'tools.unified.h': 'ALL VALUES, ONE VIEW.', 'tools.unified.desc': 'Enter the laboratory mass, reconstitution volume, reference amount and device specification once. Every reference value updates together.', 'tools.unified.mass': 'Laboratory mass (mg)', 'tools.unified.diluent': 'Reconstitution volume (mL)', 'tools.unified.reference': 'Reference amount (mg)', 'tools.unified.clickml': 'Manufacturer-stated mL per click', 'tools.unified.mgml': 'Concentration', 'tools.unified.mcgml': 'Microgram equivalent', 'tools.unified.volume': 'Reference volume', 'tools.unified.u100': 'U-100 scale markings', 'tools.unified.clicks': 'Device clicks', 'tools.unified.note': 'U-100 is a 100-marking-per-mL volume scale. Click output only applies to the exact device specification entered above.', 'tools.unified.scope': 'Reference only: confirm concentration and device documentation independently. PEPTORA does not provide dosing, administration or device-use guidance.'
});
Object.assign(I18N.es, {
  'tools.unified.eyebrow': 'Una sola calculadora de referencia', 'tools.unified.h': 'TODOS LOS VALORES, EN UNA VISTA.', 'tools.unified.desc': 'Ingresa una sola vez la masa de laboratorio, el volumen de reconstituci\u00f3n, la cantidad de referencia y la especificaci\u00f3n del dispositivo. Todos los valores se actualizan juntos.', 'tools.unified.mass': 'Masa de laboratorio (mg)', 'tools.unified.diluent': 'Volumen de reconstituci\u00f3n (mL)', 'tools.unified.reference': 'Cantidad de referencia (mg)', 'tools.unified.clickml': 'mL por clic indicado por el fabricante', 'tools.unified.mgml': 'Concentraci\u00f3n', 'tools.unified.mcgml': 'Equivalente en microgramos', 'tools.unified.volume': 'Volumen de referencia', 'tools.unified.u100': 'Marcas de escala U-100', 'tools.unified.clicks': 'Clics del dispositivo', 'tools.unified.note': 'U-100 es una escala de volumen de 100 marcas por mL. El resultado de clics solo aplica a la especificaci\u00f3n exacta indicada arriba.', 'tools.unified.scope': 'Solo como referencia: confirma de forma independiente la concentraci\u00f3n y la documentaci\u00f3n del dispositivo. PEPTORA no ofrece indicaciones de dosificaci\u00f3n, administraci\u00f3n ni uso de dispositivos.'
});

Object.assign(I18N.en, {
  'precision.eyebrow': 'Research tools', 'precision.h2': 'PRECISION MATTERS.', 'precision.p': 'Clear research starts with clear arithmetic. Explore concentration, reconstitution and volume-reference tools designed to keep technical context visible.', 'precision.cta': 'Open precision tools ↗'
  ,'hero.cap1': 'BIOHACKING', 'hero.cap2': 'PERFORMANCE', 'hero.cap3': 'LONGEVITY', 'performance.visual': 'RECOVERY / ADAPTATION / OUTPUT',
  'eco.1': 'BIOHACKING', 'eco.2': 'PEPTIDES', 'eco.3': 'PERFORMANCE', 'eco.4': 'RECOVERY', 'eco.5': 'METABOLISM', 'eco.6': 'COGNITION', 'eco.7': 'LONGEVITY', 'eco.8': 'TOOLS', 'eco.9': 'EDUCATION'
});
Object.assign(I18N.es, {
  'precision.eyebrow': 'Herramientas de investigaci\u00f3n', 'precision.h2': 'LA PRECISI\u00d3N IMPORTA.', 'precision.p': 'La investigaci\u00f3n clara comienza con aritm\u00e9tica clara. Explora herramientas de concentraci\u00f3n, reconstituci\u00f3n y referencia de volumen para mantener visible el contexto t\u00e9cnico.', 'precision.cta': 'Abrir herramientas de precisi\u00f3n ↗'
  ,'hero.cap1': 'BIOHACKING', 'hero.cap2': 'RENDIMIENTO', 'hero.cap3': 'LONGEVIDAD', 'performance.visual': 'RECUPERACI\u00d3N / ADAPTACI\u00d3N / RENDIMIENTO',
  'eco.1': 'BIOHACKING', 'eco.2': 'P\u00c9PTIDOS', 'eco.3': 'RENDIMIENTO', 'eco.4': 'RECUPERACI\u00d3N', 'eco.5': 'METABOLISMO', 'eco.6': 'COGNICI\u00d3N', 'eco.7': 'LONGEVIDAD', 'eco.8': 'HERRAMIENTAS', 'eco.9': 'EDUCACI\u00d3N'
});

Object.assign(I18N.en, {
  'system.metabolism': 'Metabolism', 'system.recovery': 'Recovery', 'system.sleep': 'Sleep', 'system.cognition': 'Cognition', 'system.performance': 'Performance', 'system.cellular': 'Cellular health', 'system.longevity': 'Longevity'
});
Object.assign(I18N.es, {
  'system.metabolism': 'Metabolismo', 'system.recovery': 'Recuperaci\u00f3n', 'system.sleep': 'Sue\u00f1o', 'system.cognition': 'Cognici\u00f3n', 'system.performance': 'Rendimiento', 'system.cellular': 'Salud celular', 'system.longevity': 'Longevidad'
});

Object.assign(I18N.en, {
  'footer.tag': 'Biohacking • Peptide Science • Human Performance • Longevity',
  'contact.eyebrow': 'PEPTORA / CONNECT', 'contact.lede': 'For research questions, platform feedback and collaboration inquiries. Start with the context that matters.'
});
Object.assign(I18N.es, {
  'footer.tag': 'Biohacking • Ciencia de p\u00e9ptidos • Rendimiento humano • Longevidad',
  'contact.eyebrow': 'PEPTORA / CONEXI\u00d3N', 'contact.lede': 'Para preguntas de investigaci\u00f3n, comentarios sobre la plataforma y consultas de colaboraci\u00f3n. Empieza con el contexto que importa.'
});

Object.assign(I18N.en, {
  'tools.eyebrow': 'PEPTORA precision tools', 'tools.h1': 'REFERENCE TOOLS FOR CLEARER RESEARCH.',
  'tools.lede': 'Precision matters. Use these calculators to review solution concentration and reference-volume arithmetic for laboratory materials.',
  'tools.scope_note': 'These tools perform reference arithmetic only. They do not calculate, suggest or recommend amounts for administration or use in any living organism.'
});
Object.assign(I18N.es, {
  'tools.eyebrow': 'Herramientas de precisi\u00f3n PEPTORA', 'tools.h1': 'HERRAMIENTAS DE REFERENCIA PARA INVESTIGAR CON MAYOR CLARIDAD.',
  'tools.lede': 'La precisi\u00f3n importa. Usa estas calculadoras para revisar concentraci\u00f3n de soluciones y aritm\u00e9tica de vol\u00famenes de referencia para materiales de laboratorio.',
  'tools.scope_note': 'Estas herramientas realizan solo aritm\u00e9tica de referencia. No calculan, sugieren ni recomiendan cantidades para administraci\u00f3n o uso en organismos vivos.'
});

Object.assign(I18N.en, { 'catalog.open': 'Open complete research index' });
Object.assign(I18N.es, { 'catalog.open': 'Abrir \u00edndice completo de investigaci\u00f3n' });
Object.assign(I18N.en, { 'manifesto.index': 'PEPTORA BIOLOGICAL SYSTEMS' });
Object.assign(I18N.es, { 'manifesto.index': 'PEPTORA SISTEMAS BIOL\u00d3GICOS' });
Object.assign(I18N.en, {
  'objective.detail.1': 'Energy • Glucose • Appetite', 'objective.detail.2': 'Strength • Adaptation • Output', 'objective.detail.3': 'Repair • Tissue • Inflammation', 'objective.detail.4': 'Focus • Neural signaling • Sleep', 'objective.detail.5': 'Cellular aging • Mitochondria', 'objective.detail.6': 'Signaling • Regeneration', 'objective.detail.7': 'Metabolic research models', 'objective.detail.8': 'Dermal • Collagen research', 'objective.detail.9': 'Concentration • Reference tools'
});
Object.assign(I18N.es, {
  'objective.detail.1': 'Energ\u00eda • Glucosa • Apetito', 'objective.detail.2': 'Fuerza • Adaptaci\u00f3n • Rendimiento', 'objective.detail.3': 'Reparaci\u00f3n • Tejido • Inflamaci\u00f3n', 'objective.detail.4': 'Enfoque • Se\u00f1alizaci\u00f3n neural • Sue\u00f1o', 'objective.detail.5': 'Envejecimiento celular • Mitocondrias', 'objective.detail.6': 'Se\u00f1alizaci\u00f3n • Regeneraci\u00f3n', 'objective.detail.7': 'Modelos de investigaci\u00f3n metab\u00f3lica', 'objective.detail.8': 'Investigaci\u00f3n d\u00e9rmica • Col\u00e1geno', 'objective.detail.9': 'Concentraci\u00f3n • Herramientas de referencia'
});

Object.assign(I18N.en, {
  'featured.eyebrow': 'Selected research references', 'featured.h2': 'FEATURED PEPTIDES.', 'featured.p': 'A focused entry point to the research index. View the complete reference library when you are ready.', 'featured.cta': 'Explore all peptides ↗', 'featured.view': 'View peptide'
});
Object.assign(I18N.es, {
  'featured.eyebrow': 'Referencias de investigaci\u00f3n seleccionadas', 'featured.h2': 'P\u00c9PTIDOS DESTACADOS.', 'featured.p': 'Un punto de entrada enfocado al \u00edndice de investigaci\u00f3n. Consulta la biblioteca de referencia completa cuando lo necesites.', 'featured.cta': 'Explorar todos los p\u00e9ptidos ↗', 'featured.view': 'Ver p\u00e9ptido'
});

Object.assign(I18N.en, {
  'lab.h2': 'UNDERSTAND THE SYSTEM.', 'lab.p': 'The Biohacking Lab makes complex science easier to navigate: mechanisms, interconnected pathways, research context and precision tools in one place.',
  'lab.path1.h': 'MECHANISMS', 'lab.path1.p': 'How biological signaling works.', 'lab.path2.h': 'PATHWAYS', 'lab.path2.p': 'Explore connected biological systems.', 'lab.path3.h': 'RESEARCH', 'lab.path3.p': 'Review context and evidence.', 'lab.path4.h': 'TOOLS', 'lab.path4.p': 'Use precision reference tools.'
});
Object.assign(I18N.es, {
  'lab.h2': 'ENTIENDE EL SISTEMA.', 'lab.p': 'El Biohacking Lab vuelve m\u00e1s navegable la ciencia compleja: mecanismos, rutas interconectadas, contexto de investigaci\u00f3n y herramientas de precisi\u00f3n en un solo lugar.',
  'lab.path1.h': 'MECANISMOS', 'lab.path1.p': 'C\u00f3mo funciona la se\u00f1alizaci\u00f3n biol\u00f3gica.', 'lab.path2.h': 'RUTAS', 'lab.path2.p': 'Explora sistemas biol\u00f3gicos conectados.', 'lab.path3.h': 'INVESTIGACI\u00d3N', 'lab.path3.p': 'Revisa contexto y evidencia.', 'lab.path4.h': 'HERRAMIENTAS', 'lab.path4.p': 'Usa herramientas de referencia precisas.'
});

Object.assign(I18N.en, {
  'nav.biohacking': 'Biohacking', 'nav.peptides': 'Peptides', 'nav.performance': 'Performance', 'nav.longevity': 'Longevity', 'nav.lab': 'Biohacking Lab', 'nav.explore': 'Explore',
  'tracks.lab.eyebrow': 'Laboratory reference', 'tracks.lab.h': 'RESEARCH PEPTIDES.', 'tracks.lab.p': 'Compound records, categories, mechanisms and bilingual research context for laboratory reference.', 'tracks.lab.cta': 'Open research index →',
  'tracks.bio.eyebrow': 'Biohacking education', 'tracks.bio.h': 'HUMAN OPTIMIZATION.', 'tracks.bio.p': 'Explore the systems behind performance, recovery, metabolism, cognition and longevity through education and scientific context.', 'tracks.bio.cta': 'Explore objectives →',
  'tracks.disclaimer': 'Educational biohacking content is not medical advice, a recommendation, or guidance for administration. Product references are for laboratory research only and are not for human or veterinary use.'
});
Object.assign(I18N.es, {
  'nav.biohacking': 'Biohacking', 'nav.peptides': 'P\u00e9ptidos', 'nav.performance': 'Rendimiento', 'nav.longevity': 'Longevidad', 'nav.lab': 'Biohacking Lab', 'nav.explore': 'Explorar',
  'tracks.lab.eyebrow': 'Referencia de laboratorio', 'tracks.lab.h': 'P\u00c9PTIDOS DE INVESTIGACI\u00d3N.', 'tracks.lab.p': 'Registros de compuestos, categor\u00edas, mecanismos y contexto biling\u00fce para referencia de laboratorio.', 'tracks.lab.cta': 'Abrir \u00edndice de investigaci\u00f3n →',
  'tracks.bio.eyebrow': 'Educaci\u00f3n de biohacking', 'tracks.bio.h': 'OPTIMIZACI\u00d3N HUMANA.', 'tracks.bio.p': 'Explora los sistemas detr\u00e1s del rendimiento, recuperaci\u00f3n, metabolismo, cognici\u00f3n y longevidad mediante educaci\u00f3n y contexto cient\u00edfico.', 'tracks.bio.cta': 'Explorar objetivos →',
  'tracks.disclaimer': 'El contenido educativo de biohacking no es consejo m\u00e9dico, una recomendaci\u00f3n ni una gu\u00eda de administraci\u00f3n. Las referencias de productos son solo para investigaci\u00f3n de laboratorio y no son para uso humano ni veterinario.'
});

// These keys are rendered as text nodes by the existing localization engine.
// Keep their translated values plain text so no markup is ever exposed.
for (const locale of ['en', 'es']) {
  const values = locale === 'en' ? {
    'manifesto.h2': 'BIOHACKING BEGINS WITH UNDERSTANDING THE SYSTEM.', 'manifesto.cta': 'Read our research philosophy →',
    'objectives.h2': 'EXPLORE BY OBJECTIVE.', 'performance.h2': 'ENGINEER HUMAN PERFORMANCE.', 'performance.cta': 'Explore performance ↗',
    'peptides.h2': 'SMALL MOLECULES. PRECISE SIGNALS. COMPLEX SYSTEMS.', 'peptides.cta': 'Explore peptides →',
    'products.h2': 'COMPOUNDS, IN CONTEXT.', 'lab.h2': 'THE SIGNAL BEHIND THE NOISE.', 'lab.cta': 'Open reference tools ↗',
    'longevity.h2': 'LONGEVITY IS A CELLULAR PROBLEM.', 'about.h2': 'RIGOR BEFORE RECOMMENDATION.', 'contact.h2': 'START WITH A BETTER QUESTION.'
  } : {
    'manifesto.h2': 'EL BIOHACKING COMIENZA POR ENTENDER EL SISTEMA.', 'manifesto.cta': 'Leer nuestra filosof\u00eda de investigaci\u00f3n →',
    'objectives.h2': 'EXPLORA POR OBJETIVO.', 'performance.h2': 'DISE\u00d1A EL RENDIMIENTO HUMANO.', 'performance.cta': 'Explorar rendimiento ↗',
    'peptides.h2': 'MOL\u00c9CULAS PEQUE\u00d1AS. SE\u00d1ALES PRECISAS. SISTEMAS COMPLEJOS.', 'peptides.cta': 'Explorar p\u00e9ptidos →',
    'products.h2': 'COMPUESTOS, EN CONTEXTO.', 'lab.h2': 'LA SE\u00d1AL DETR\u00c1S DEL RUIDO.', 'lab.cta': 'Abrir herramientas de referencia ↗',
    'longevity.h2': 'LA LONGEVIDAD ES UN PROBLEMA CELULAR.', 'about.h2': 'RIGOR ANTES QUE RECOMENDACI\u00d3N.', 'contact.h2': 'EMPIEZA CON UNA MEJOR PREGUNTA.'
  };
  Object.assign(I18N[locale], values);
}
