/* Practical community context. Not dosing, administration, treatment or proof of efficacy. */
(()=>{
const rows={
 'tirzepatide':[
  ['Appetite awareness','Portion management','Body-composition goals'],['Apetito y saciedad','Manejo de porciones','Composición corporal'],
  'In biohacking discussions, the practical interest is often making eating feel less dominant throughout the day. People talk about food noise, portion sizes and consistency with their broader weight goals. The focus is not just losing scale weight: it also includes how appetite, eating habits and body composition are tracked separately.',
  'En biohacking, el interés práctico suele ser que la comida deje de ocupar tanto espacio mental durante el día. Se habla del ruido de la comida, las porciones y la constancia con los objetivos de peso. No todo gira alrededor de la báscula: apetito, hábitos y composición corporal se observan como aspectos distintos.'],
 'retatrutide':[
  ['Weight-related goals','Metabolic interest','Body-composition tracking'],['Objetivos de peso','Interés metabólico','Seguimiento de composición corporal'],
  'RT is the triple agonist in the collection: GLP-1, GIP and glucagon. In biohacking conversations, the interest connects appetite, metabolic goals and body-composition tracking. The focus is not only the number on the scale, but also the broader conversation around fat mass, lean mass and daily eating habits.',
  'RT es el triple agonista de la colección: GLP-1, GIP y glucagón. En la comunidad biohacking, el interés conecta apetito, objetivos metabólicos y seguimiento de la composición corporal. La conversación va más allá del número en la báscula: también incluye grasa, masa magra y hábitos de alimentación.'],
 'ghk-cu':[
  ['Skin texture','Visible aging','Skin-recovery interest'],['Textura de la piel','Envejecimiento visible','Interés en recuperación de la piel'],
  'The practical conversation is usually about how skin looks and feels: texture, firmness and the visible marks of time. GHK-Cu also appears in GLOW and KLOW discussions, but this product is the standalone copper-peptide reference. A topical skincare product and a research vial are different products; one cannot stand in as evidence for the other.',
  'La conversación práctica se centra en cómo se ve y se siente la piel: textura, firmeza y cambios visibles con el tiempo. GHK-Cu también aparece en conversaciones de GLOW y KLOW, pero aquí se presenta por separado. Un cosmético tópico y un vial de investigación son productos diferentes; la experiencia con uno no demuestra los resultados del otro.'],
 'ipamorelin':[
  ['Rest quality','Between-session recovery','Lean-mass goals'],['Calidad del descanso','Recuperación entre sesiones','Objetivos de masa magra'],
  'People often discuss ipamorelin when looking at the part of performance that happens outside the gym: rest, sleep quality and feeling ready for the next session. It is also compared with CJC-1295 no DAC combinations. The practical distinction is between a goal someone is pursuing and an effect that has actually been demonstrated for the product.',
  'Se comenta ipamorelin al mirar la parte del rendimiento que sucede fuera del gimnasio: descanso, calidad del sueño y la sensación de estar listo para la siguiente sesión. También se compara con combinaciones de CJC-1295 sin DAC. Conviene distinguir entre el objetivo que busca una persona y un efecto realmente demostrado para el producto.'],
 'cjc-1295-no-dac':[
  ['Recovery routines','Rest and training','Body-composition interest'],['Rutinas de recuperación','Descanso y entrenamiento','Interés en composición corporal'],
  'Its place in biohacking is tied to conversations about the relationship between training, rest and growth-hormone signalling. The no-DAC identity is important when comparing products; it is not simply another concentration of the DAC version. This listing is the single compound, separate from the CJC-1295 no DAC + ipamorelin blend.',
  'Su lugar en biohacking está ligado a la relación entre entrenamiento, descanso y señales de hormona de crecimiento. La identidad sin DAC importa al comparar productos: no es simplemente otra concentración de la versión con DAC. Esta ficha corresponde al compuesto individual, separado de la mezcla CJC-1295 sin DAC + ipamorelin.'],
 'tesamorelin-ipamorelin':[
  ['Visceral-fat interest','Body composition','Rest and recovery'],['Interés en grasa visceral','Composición corporal','Descanso y recuperación'],
  'The pairing brings two community interests together: the visceral-fat discussion around tesamorelin and the rest-and-recovery discussion around ipamorelin. Visceral fat refers to fat around internal organs, not every change at the waist. The 10 mg + 5 mg listing tells you what is in the vial; it does not establish an application schedule or a proven combined effect.',
  'La mezcla reúne dos intereses de comunidad: la conversación de grasa visceral alrededor de tesamorelin y la de descanso y recuperación alrededor de ipamorelin. Grasa visceral es la que rodea órganos internos, no cualquier cambio en la cintura. La presentación 10 mg + 5 mg indica el contenido del vial, no una pauta de aplicación ni un efecto conjunto demostrado.'],
 'semax':[
  ['Attention and focus','Mental clarity','Learning-related interest'],['Atención y enfoque','Claridad mental','Interés en aprendizaje'],
  'Semax is discussed in the context of demanding work, study and mentally focused tasks. The community language is about staying on task and feeling mentally clear, rather than the calmer, stress-oriented conversation around Selank. More perceived alertness is not automatically better learning, memory or output.',
  'Semax se comenta en el contexto de trabajo exigente, estudio y tareas que requieren atención. El lenguaje de comunidad gira alrededor de sostener el enfoque y sentir claridad mental, distinto del énfasis de calma y estrés de Selank. Sentirse más alerta no implica automáticamente aprender, recordar o producir más.'],
 'selank':[
  ['Calm focus','Everyday stress interest','Less mental overload'],['Enfoque en calma','Interés en estrés cotidiano','Menor sobrecarga mental'],
  'The practical appeal is staying mentally present without feeling overwhelmed. People distinguish this from simply chasing stimulation or a stronger productivity effect. Selank and Semax can appear in the same conversations, but they are not interchangeable and should not be reduced to a sedative-versus-stimulant pair.',
  'El atractivo práctico es mantenerse presente sin sentirse rebasado. La comunidad distingue ese objetivo de buscar más estimulación o un efecto más fuerte de productividad. Selank y Semax pueden aparecer en las mismas conversaciones, pero no son intercambiables ni se reducen a una pareja de sedante y estimulante.'],
 'ss-31':[
  ['Cellular-energy interest','Long-term function','Healthy-aging conversations'],['Interés en energía celular','Función a largo plazo','Envejecimiento saludable'],
  'SS-31 comes up when biohackers look beyond a quick energy boost and discuss the cell systems involved in longer-term function. It is not presented here as a stimulant or a way to reverse aging. Its disease-specific medical context is different from broad wellness use or the expected experience from a research vial.',
  'SS-31 aparece cuando se mira más allá de un impulso rápido de energía y se habla de sistemas celulares vinculados con función a largo plazo. No se plantea como estimulante ni como forma de revertir el envejecimiento. Su contexto médico en enfermedades específicas es diferente del bienestar general o de la experiencia que alguien espera de un vial de investigación.'],
 'mots-c':[
  ['Endurance interest','Energy use','Exercise adaptation'],['Interés en resistencia','Uso de energía','Adaptación al ejercicio'],
  'MOTS-c sits at the intersection of metabolic and performance discussions. People following it are interested in how the body uses fuel and responds to activity, not merely how stimulated they feel. The exercise-in-a-vial nickname can be misleading: the compound is not an established replacement for exercise, nutrition or recovery habits.',
  'MOTS-c conecta las conversaciones de metabolismo y rendimiento. Quienes lo siguen se interesan por cómo el cuerpo utiliza energía y responde a la actividad, no solo por sentirse estimulados. El apodo ejercicio en un vial puede confundir: no es un sustituto demostrado del ejercicio, la alimentación o los hábitos de recuperación.'],
 'wolverine':[
  ['Training-wear conversations','Tendon and mobility interest','Return-to-activity goals'],['Desgaste por entrenamiento','Interés en tendones y movilidad','Objetivos de retorno a actividad'],
  'Wolverine is the community name for BPC-157 + TB-500. It appears when people discuss interrupted training, physical wear and getting back to activity. Here the vial contains 5 mg of each compound. Combining them is not proof of faster repair, and injury assessment remains different from choosing a community-labelled stack.',
  'Wolverine es el nombre de comunidad para BPC-157 + TB-500. Aparece al hablar de pausas en el entrenamiento, desgaste físico y volver a la actividad. Este vial contiene 5 mg de cada compuesto. Combinarlos no demuestra reparación más rápida; evaluar una lesión es distinto de elegir un stack por su nombre comunitario.'],
 'klow':[
  ['Recovery interest','Skin quality','Inflammatory-balance conversations'],['Interés en recuperación','Calidad de la piel','Conversaciones de equilibrio inflamatorio'],
  'KLOW brings four different community conversations into one blend: BPC-157 for physical-recovery and gut-health interest, TB-500 for mobility and training recovery, GHK-Cu for skin appearance, and KPV for inflammatory-balance discussions. The 80 mg presentation contains 10 + 10 + 50 + 10 mg respectively. These roles explain the community interest, not proven combined outcomes.',
  'KLOW reúne cuatro conversaciones en una mezcla: BPC-157 por el interés en recuperación física e intestino; TB-500 por movilidad y recuperación del entrenamiento; GHK-Cu por apariencia de la piel; y KPV por equilibrio inflamatorio. Los 80 mg contienen, en ese orden, 10 + 10 + 50 + 10 mg. Esos enfoques explican el interés comunitario, no resultados conjuntos demostrados.'],
 'bpc-157':[
  ['Physical-recovery interest','Tendon and joint conversations','Gut-health interest'],['Interés en recuperación física','Conversaciones de tendones y articulaciones','Interés en salud intestinal'],
  'The community connects BPC-157 with physical wear and the gut, often discussing it alongside TB-500. This 20 mg presentation contains BPC-157 alone, which makes it different from Wolverine and KLOW. A personal story of improvement does not establish which compound, habit or other intervention caused the change.',
  'La comunidad conecta BPC-157 con desgaste físico e intestino, y suele comentarlo junto a TB-500. Esta presentación de 20 mg contiene BPC-157 solo: no es Wolverine ni KLOW. Una historia personal de mejoría no permite saber qué compuesto, hábito u otra intervención produjo el cambio.'],
 'nad-plus':[
  ['Vitality-related interest','Mental-fatigue conversations','Healthy aging'],['Interés en vitalidad','Conversaciones de fatiga mental','Envejecimiento saludable'],
  'NAD+ is familiar in biohacking discussions about daily energy and mental fatigue. It is a coenzyme, not a peptide, and is not the same product as NR or NMN. The practical comparison starts by checking what the product actually contains, rather than transferring claims between substances with related names.',
  'NAD+ es familiar en las conversaciones de energía diaria y fatiga mental. Es una coenzima, no un péptido, y no es el mismo producto que NR o NMN. Para comparar opciones, lo primero es identificar qué contiene cada producto, sin trasladar promesas entre sustancias de nombres relacionados.'],
 'glutathione':[
  ['Antioxidant-balance interest','Skin-appearance conversations','Recovery and daily demands'],['Interés en equilibrio antioxidante','Conversaciones de apariencia de la piel','Recuperación y exigencia diaria'],
  'Glutathione appears in wellness and biohacking conversations about antioxidant balance, skin appearance and the effects of a demanding lifestyle. This does not make detox or skin-lightening promises established benefits. Product form, context and actual documentation matter when comparing different glutathione products.',
  'Glutatión aparece en bienestar y biohacking al hablar de equilibrio antioxidante, apariencia de la piel y exigencias del estilo de vida. Eso no convierte las promesas de detox o aclaramiento de piel en beneficios demostrados. Al comparar productos importan su forma, el contexto y su documentación real.'],
 'bac-water-3ml':[
  ['3 ml supply presentation','Product-specific compatibility','Clear product identification'],['Presentación de insumo de 3 ml','Compatibilidad específica','Identificación del producto'],
  'BAC Water is a supply, not an active ingredient for weight, recovery or cognition. The 3 ml identifies the volume of this presentation. Compatibility, storage and handling must follow the verified instructions for the products involved, not an assumption that one water product suits every compound.',
  'BAC Water es un insumo, no un activo para peso, recuperación o cognición. Los 3 ml identifican el volumen de esta presentación. Compatibilidad, conservación y manejo deben corresponder a instrucciones verificadas de los productos involucrados, no a la idea de que una misma agua sirve para cualquier compuesto.'],
 'bac-water-10ml':[
  ['10 ml supply presentation','Larger volume','Product-specific compatibility'],['Presentación de insumo de 10 ml','Mayor volumen','Compatibilidad específica'],
  'This is the larger-volume BAC Water presentation. A 10 ml bottle does not indicate higher potency than a 3 ml bottle. It remains a supply: verify identity and the relevant product documentation rather than attributing performance or longevity benefits to the water itself.',
  'Esta es la presentación de mayor volumen de BAC Water. Un frasco de 10 ml no indica más potencia que uno de 3 ml. Sigue siendo un insumo: se revisan identidad y documentación de los productos correspondientes, sin atribuirle al agua beneficios de rendimiento o longevidad.'],
 'cjc-ipamorelin':[
  ['Rest and sleep interest','Between-session recovery','Lean-mass conversations'],['Interés en descanso y sueño','Recuperación entre sesiones','Conversaciones de masa magra'],
  'This is a familiar community pairing when discussing training consistency, recovery and rest. The vial contains 5 mg CJC-1295 no DAC plus 5 mg ipamorelin; it is different from the single-compound options. The stated amounts identify the blend and do not establish a schedule, clinical synergy or a guaranteed training result.',
  'Es una pareja conocida en comunidad al hablar de constancia de entrenamiento, recuperación y descanso. El vial reúne 5 mg de CJC-1295 sin DAC y 5 mg de ipamorelin, distinto de las opciones individuales. Esas cantidades identifican la mezcla; no establecen una pauta, sinergia clínica ni un resultado garantizado al entrenar.']
};
for(const [id,[enGoals,esGoals,enText,esText]] of Object.entries(rows)){
 const p=window.PeptoraCommunity[id];
 p.en.goals=enGoals;p.es.goals=esGoals;p.en.applied=enText;p.es.applied=esText;
}
})();

