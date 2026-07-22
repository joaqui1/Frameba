import type { CTA_Context } from '../utils/whatsapp';

export interface BlogArticle {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  readingTime: string;
  updatedLabel: string;
  publishedIso: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  serviceHref: string;
  serviceLabel: string;
  ctaContext: CTA_Context;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  quickAnswerTitle: string;
  quickAnswerHtml: string;
  toc: Array<{ id: string; label: string }>;
  bodyHtml: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'cuanto-cuesta-fotografo-15-anos-buenos-aires',
    number: '01',
    category: '15 años · Precios',
    title: 'Cuánto cuesta un fotógrafo para una fiesta de 15 en Buenos Aires',
    shortTitle: 'Precio de fotografía para una fiesta de 15',
    description: 'Precios orientativos de fotografía para una fiesta de 15, qué modifica el presupuesto y qué debería incluir una propuesta clara.',
    intro: 'El precio no depende solamente de la cantidad de fotos. Horas, sesión previa, video, equipo y entregas pueden cambiar por completo una propuesta.',
    readingTime: '5 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-quince-portada-desktop.webp',
    imageAlt: 'Guía de precios para fotografía de una fiesta de 15',
    imagePosition: '50% 48%',
    serviceHref: '/fotografo-15-anos-caba-gba/',
    serviceLabel: 'Ver cobertura de 15 años',
    ctaContext: 'quince',
    ctaTitle: '¿Querés calcular el presupuesto de tu fiesta?',
    ctaText: 'Compartinos fecha, salón, zona, horas aproximadas y si buscás fotografía, video o ambos.',
    ctaLabel: 'Consultar presupuesto',
    quickAnswerTitle: 'Referencia rápida',
    quickAnswerHtml: '<p>Como referencia de <strong>julio de 2026</strong>, en FRAME una cobertura de <strong>fiesta sola parte de $380.000</strong> y una propuesta con <strong>fiesta más sesión previa parte de $550.000</strong>.</p><p>El valor final depende de horas, ubicación, equipo y entregas.</p>',
    toc: [
      { id: 'que-modifica-el-precio', label: 'Qué modifica el precio' },
      { id: 'que-deberia-incluir', label: 'Qué debería incluir' },
      { id: 'como-comparar', label: 'Cómo comparar propuestas' },
      { id: 'sesion-previa', label: 'Sesión previa o book' },
      { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Cuando se busca el precio de un fotógrafo para una fiesta de 15, dos presupuestos parecidos pueden incluir trabajos muy distintos. Para compararlos bien hay que mirar la cobertura completa, no solamente el número final.</p>

      <h2 id="que-modifica-el-precio">Qué modifica el precio de la fotografía para 15 años</h2>
      <div class="article-number-grid">
        <article><span>01</span><h3>Horas de cobertura</h3><p>No cuesta lo mismo registrar entrada, vals y torta que sumar preparación, recepción y cierre.</p></article>
        <article><span>02</span><h3>Foto o foto y video</h3><p>El video agrega profesionales, cámaras, audio y horas de edición.</p></article>
        <article><span>03</span><h3>Cantidad de profesionales</h3><p>Un evento grande o con momentos simultáneos puede requerir más de una persona.</p></article>
        <article><span>04</span><h3>Entrega final</h3><p>Galería digital, reels, video resumen, álbum o impresiones no implican el mismo trabajo.</p></article>
      </div>

      <h2 id="que-deberia-incluir">Qué debería incluir un presupuesto claro</h2>
      <ul class="article-checklist">
        <li>Fecha, salón y zona.</li><li>Cantidad exacta de horas.</li><li>Momentos incluidos.</li><li>Cantidad de profesionales.</li><li>Tipo de edición y entrega.</li><li>Plazo estimado.</li><li>Traslados y valor de horas extra.</li><li>Forma de reserva y pagos.</li>
      </ul>

      <h2 id="como-comparar">Cómo comparar propuestas sin mirar solo el precio</h2>
      <div class="article-comparison">
        <div><span>Revisá</span><strong>Eventos completos</strong><p>Entrada, familia, vals, pista y cierre con una calidad consistente.</p></div>
        <div><span>Confirmá</span><strong>Qué se entrega</strong><p>Fotos editadas, formatos, plazos, video y adicionales.</p></div>
        <div><span>Evitá</span><strong>Comparar solo cantidad</strong><p>Más archivos no significan automáticamente una mejor cobertura.</p></div>
      </div>

      <aside class="article-quote"><span>“</span><p>El presupuesto más conveniente es el que cubre los momentos importantes y explica con claridad qué vas a recibir.</p></aside>

      <h2 id="sesion-previa">Cuándo sumar una sesión previa o book de 15</h2>
      <p>La sesión previa conviene cuando se buscan retratos producidos, una locación elegida y fotografías para invitaciones, cuadros o recepción. Es un trabajo distinto de la fiesta: requiere planificación, sesión, selección y edición propias.</p>
      <p>Para calcular mejor la duración de la cobertura, podés consultar nuestra <a class="article-inline-link" href="/blog/cuantas-horas-contratar-fotografo-evento/">guía sobre cuántas horas contratar</a>.</p>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿Las fotos se entregan editadas?', answer: 'Sí. La propuesta debería aclarar selección, corrección de luz y color, formato y plazo de entrega.' },
      { question: '¿Se puede contratar solamente la fiesta?', answer: 'Sí. La sesión previa, el video y los reels pueden cotizarse por separado.' },
      { question: '¿El precio cambia por la zona?', answer: 'Puede cambiar por traslados, peajes, horarios y logística. Conviene informar el salón desde el primer contacto.' },
    ],
    relatedSlugs: ['cuantas-horas-contratar-fotografo-evento', 'fotos-que-no-pueden-faltar-fiesta-15', 'fotografo-video-casamiento-que-incluye'],
  },
  {
    slug: 'fotografo-video-casamiento-que-incluye',
    number: '02',
    category: 'Casamientos · Qué incluye',
    title: 'Qué incluye un servicio de fotografía y video para casamiento',
    shortTitle: 'Qué incluye la foto y el video de casamiento',
    description: 'Qué incluye una cobertura de fotografía y video para casamiento: momentos, edición, entregas y preguntas importantes antes de contratar.',
    intro: 'Una cobertura bien definida explica qué momentos se registran, cuánto dura el trabajo y qué material se entrega después del casamiento.',
    readingTime: '5 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-casamiento-portada-desktop.webp',
    imageAlt: 'Guía sobre qué incluye fotografía y video para casamiento',
    imagePosition: '50% 50%',
    serviceHref: '/fotografia-video-casamientos-buenos-aires/',
    serviceLabel: 'Ver cobertura de casamientos',
    ctaContext: 'wedding',
    ctaTitle: '¿Están organizando su casamiento?',
    ctaText: 'Con fecha, locaciones y cronograma podemos recomendar horas y preparar una propuesta clara.',
    ctaLabel: 'Consultar cobertura',
    quickAnswerTitle: 'En pocas palabras',
    quickAnswerHtml: '<p>Una cobertura puede incluir <strong>preparativos, ceremonia, retratos, recepción, discursos, fiesta, selección, edición y entrega digital</strong>.</p><p>El alcance exacto debe quedar escrito en el presupuesto.</p>',
    toc: [
      { id: 'durante-el-dia', label: 'Qué se cubre durante el día' },
      { id: 'trabajo-posterior', label: 'Trabajo después del evento' },
      { id: 'entregas-video', label: 'Entregas de video' },
      { id: 'antes-de-contratar', label: 'Qué preguntar' },
      { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Saber qué incluye un servicio de fotografía y video para casamiento evita comparar propuestas que parecen iguales, pero cubren momentos y entregas diferentes.</p>

      <h2 id="durante-el-dia">Qué puede cubrir el equipo durante el día</h2>
      <div class="article-timeline">
        <article><span>01</span><div><h3>Preparativos</h3><p>Vestido, traje, maquillaje, anillos y encuentros previos.</p></div></article>
        <article><span>02</span><div><h3>Civil o ceremonia</h3><p>Entradas, votos, anillos, beso, firma y reacciones de familiares.</p></div></article>
        <article><span>03</span><div><h3>Retratos y grupos</h3><p>Pareja, padres, hermanos, abuelos, padrinos y amistades cercanas.</p></div></article>
        <article><span>04</span><div><h3>Recepción y fiesta</h3><p>Ambientación, discursos, brindis, torta, baile y momentos espontáneos.</p></div></article>
      </div>

      <h2 id="trabajo-posterior">Qué incluye el trabajo después del casamiento</h2>
      <div class="article-process-grid">
        <article><span>01</span><h3>Respaldo</h3><p>Copias y organización del material.</p></article>
        <article><span>02</span><h3>Selección</h3><p>Elección de imágenes y momentos sin repeticiones innecesarias.</p></article>
        <article><span>03</span><h3>Edición</h3><p>Corrección de exposición, color, sonido y montaje.</p></article>
        <article><span>04</span><h3>Entrega</h3><p>Archivos preparados para guardar y compartir.</p></article>
      </div>

      <h2 id="entregas-video">Qué entregas puede incluir el video</h2>
      <ul class="article-checklist"><li>Video resumen.</li><li>Reel vertical.</li><li>Registro de ceremonia o discursos.</li><li>Edición de momentos seleccionados.</li><li>Archivos digitales para compartir.</li></ul>
      <p>No todas las propuestas incluyen las mismas piezas. El presupuesto debe indicar cantidad, duración aproximada y plazo de entrega.</p>

      <h2 id="antes-de-contratar">Qué preguntar antes de contratar</h2>
      <ul class="article-checklist"><li>Cuántas horas incluye.</li><li>Qué momentos y locaciones cubre.</li><li>Cuántas personas integran el equipo.</li><li>Qué fotos y videos se entregan.</li><li>Cuál es el plazo de entrega.</li><li>Qué ocurre si el cronograma se demora.</li></ul>
      <aside class="article-quote"><span>“</span><p>Una propuesta profesional debe dejar claro qué sucede desde la llegada del equipo hasta la entrega final.</p></aside>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿Se puede cubrir solamente el civil?', answer: 'Sí. Puede contratarse como cobertura breve o combinarse con retratos y una celebración posterior.' },
      { question: '¿Hay que preparar una lista de fotos?', answer: 'Conviene indicar familiares y grupos imprescindibles. El resto del registro debería fluir con naturalidad.' },
      { question: '¿Fotografía y video deben contratarse juntos?', answer: 'No necesariamente. Pueden contratarse por separado, aunque la cobertura combinada conserva imagen, movimiento y sonido.' },
    ],
    relatedSlugs: ['cuantas-horas-contratar-fotografo-evento', 'cuanto-cuesta-fotografo-15-anos-buenos-aires', 'fotos-que-no-pueden-faltar-fiesta-15'],
  },
  {
    slug: 'cuantas-horas-contratar-fotografo-evento',
    number: '03',
    category: 'Eventos · Duración',
    title: '¿Cuántas horas contratar un fotógrafo para un evento?',
    shortTitle: 'Cuántas horas de cobertura contratar',
    description: 'Rangos orientativos y un método simple para calcular cuántas horas de cobertura fotográfica necesita un evento.',
    intro: 'La cantidad correcta depende del primer y último momento importante, no de elegir el paquete más largo.',
    readingTime: '4 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-home.webp',
    imageAlt: 'Guía para calcular horas de cobertura fotográfica',
    imagePosition: '50% 50%',
    serviceHref: '/',
    serviceLabel: 'Ver coberturas para eventos',
    ctaContext: 'general',
    ctaTitle: '¿No sabés cuántas horas necesitás?',
    ctaText: 'Mandanos el cronograma, la fecha y la zona. Te recomendamos una duración basada en los momentos importantes.',
    ctaLabel: 'Consultar duración',
    quickAnswerTitle: 'Referencia rápida',
    quickAnswerHtml: '<p><strong>Evento social:</strong> 3 a 5 horas. <strong>Fiesta de 15:</strong> 5 a 7 horas. <strong>Casamiento:</strong> 6 a 8 horas para ceremonia y fiesta, o más si se suman preparativos.</p><p>Son rangos orientativos.</p>',
    toc: [
      { id: 'referencias', label: 'Horas según el evento' },
      { id: 'calcular', label: 'Cómo calcularlas' },
      { id: 'ejemplos', label: 'Ejemplos de cronograma' },
      { id: 'errores', label: 'Errores frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Una cobertura puede empezar demasiado temprano y terminar antes de la torta, un discurso o una sorpresa. Para elegir bien, hay que ordenar el cronograma y definir qué momentos realmente importan.</p>

      <h2 id="referencias">Referencia de horas según el tipo de evento</h2>
      <div class="article-hours-grid">
        <article><span>3–5 h</span><h3>Evento social</h3><p>Cumpleaños o celebración con momentos concentrados.</p></article>
        <article><span>5–7 h</span><h3>Fiesta de 15</h3><p>Entrada, familia, vals, torta y pista.</p></article>
        <article><span>7–9 h</span><h3>15 con preparativos</h3><p>Previa, llegada y una parte amplia de la fiesta.</p></article>
        <article><span>6–8 h</span><h3>Casamiento</h3><p>Ceremonia, retratos, recepción y fiesta.</p></article>
        <article><span>8–12 h</span><h3>Casamiento completo</h3><p>Preparativos, traslados, ceremonia y celebración.</p></article>
        <article><span>2–5 h</span><h3>Corporativo</h3><p>Presentaciones, oradores, activaciones y networking.</p></article>
      </div>

      <h2 id="calcular">Cómo calcular las horas de cobertura</h2>
      <ol class="article-steps">
        <li><span>01</span><div><h3>Anotá el cronograma</h3><p>Entrada, ceremonia, brindis, discursos, torta, shows y pista.</p></div></li>
        <li><span>02</span><div><h3>Elegí el primer momento</h3><p>Puede ser la preparación, la recepción o la entrada principal.</p></div></li>
        <li><span>03</span><div><h3>Elegí el último imprescindible</h3><p>Torta, ramo, show o una hora determinada de baile.</p></div></li>
        <li><span>04</span><div><h3>Sumá margen</h3><p>Entre treinta y sesenta minutos ayudan a absorber demoras.</p></div></li>
      </ol>

      <h2 id="ejemplos">Dos ejemplos de cronograma</h2>
      <div class="article-schedule">
        <div><span>Fiesta de 15</span><ul><li><b>21:30</b> Ambientación y recepción</li><li><b>22:30</b> Entrada</li><li><b>23:30</b> Vals</li><li><b>01:30</b> Torta</li></ul><p>Cinco o seis horas pueden cubrir los momentos centrales y una parte amplia de la pista.</p></div>
        <div><span>Casamiento</span><ul><li><b>18:00</b> Ceremonia</li><li><b>19:00</b> Retratos</li><li><b>20:00</b> Recepción</li><li><b>23:00</b> Pista</li></ul><p>Para sumar preparativos y traslados, la cobertura debe empezar antes.</p></div>
      </div>

      <h2 id="errores">Errores frecuentes</h2>
      <div class="article-number-grid">
        <article><span>01</span><h3>Contratar sin cronograma</h3><p>Muchas horas no sirven si están ubicadas en momentos sin actividad.</p></article>
        <article><span>02</span><h3>Empezar justo a tiempo</h3><p>Se pierde margen para ambientación, pruebas y retratos.</p></article>
        <article><span>03</span><h3>Terminar antes de lo importante</h3><p>Torta, shows y sorpresas deben informarse con anticipación.</p></article>
      </div>
    `,
    faqs: [],
    relatedSlugs: ['cuanto-cuesta-fotografo-15-anos-buenos-aires', 'fotografo-video-casamiento-que-incluye', 'fotos-que-no-pueden-faltar-fiesta-15'],
  },
  {
    slug: 'fotos-que-no-pueden-faltar-fiesta-15',
    number: '04',
    category: '15 años · Lista de fotos',
    title: 'Fotos para una fiesta de 15: 15 imágenes que no pueden faltar',
    shortTitle: '15 fotos imprescindibles para una fiesta de 15',
    description: 'Una lista breve con 15 fotos importantes para una fiesta de 15: preparación, familia, entrada, vals, torta, pista y momentos espontáneos.',
    intro: 'La lista ayuda a evitar olvidos, pero la cobertura debe sentirse natural y dejar espacio para lo inesperado.',
    readingTime: '5 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/fotografia-15-anos-caba-frame-1536.webp',
    imageAlt: 'Lista de fotos importantes para una fiesta de 15',
    imagePosition: '52% 48%',
    serviceHref: '/fotografo-15-anos-caba-gba/',
    serviceLabel: 'Ver cobertura de 15 años',
    ctaContext: 'quince',
    ctaTitle: '¿Querés una cobertura que cuente toda la noche?',
    ctaText: 'Compartinos fecha, salón y cronograma para ordenar los momentos importantes sin convertir la fiesta en una sesión permanente.',
    ctaLabel: 'Consultar cobertura',
    quickAnswerTitle: 'La lista esencial',
    quickAnswerHtml: '<p>Las fotos principales son <strong>vestido, detalles, preparación, retrato individual, familia, amistades, ambientación, entrada, vals, ceremonias, torta, brindis, pista, momentos espontáneos y cierre</strong>.</p>',
    toc: [
      { id: 'antes', label: 'Antes de la entrada' },
      { id: 'familia', label: 'Familia y amistades' },
      { id: 'momentos', label: 'Momentos principales' },
      { id: 'pista', label: 'Pista y cierre' },
      { id: 'organizar', label: 'Cómo organizar la lista' },
      { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Una lista de fotos para 15 años sirve para ordenar lo imprescindible. No debe transformar la noche en una sucesión de poses: algunas imágenes se preparan y otras aparecen cuando el fotógrafo está atento.</p>

      <h2 id="antes">Antes de la entrada</h2>
      <div class="article-photo-list">
        <article><span>01</span><div><h3>El vestido completo</h3><p>Una imagen clara del diseño y su caída.</p></div></article>
        <article><span>02</span><div><h3>Los detalles</h3><p>Zapatos, accesorios, invitación y maquillaje.</p></div></article>
        <article><span>03</span><div><h3>La preparación</h3><p>Peinado, últimos ajustes y nervios previos.</p></div></article>
        <article><span>04</span><div><h3>Un retrato individual</h3><p>Una foto cuidada con la quinceañera como única protagonista.</p></div></article>
      </div>

      <h2 id="familia">Familia y amistades</h2>
      <div class="article-photo-list">
        <article><span>05</span><div><h3>Con padres</h3><p>Una foto ordenada y también los abrazos espontáneos.</p></div></article>
        <article><span>06</span><div><h3>Hermanos y abuelos</h3><p>Conviene hacerlas temprano si algunos familiares se retiran antes.</p></div></article>
        <article><span>07</span><div><h3>Amigas y amigos</h3><p>Foto grupal, grupos chicos y escenas naturales.</p></div></article>
        <article><span>08</span><div><h3>La ambientación</h3><p>Salón, mesas, flores, cartelería y torta antes del ingreso.</p></div></article>
      </div>

      <h2 id="momentos">Los momentos principales</h2>
      <div class="article-photo-list">
        <article><span>09</span><div><h3>La entrada</h3><p>La protagonista y las reacciones de quienes la reciben.</p></div></article>
        <article><span>10</span><div><h3>El vals</h3><p>Planos generales, detalles y miradas de la familia.</p></div></article>
        <article><span>11</span><div><h3>Velas, discursos o regalos</h3><p>Todo momento especial debe informarse antes.</p></div></article>
        <article><span>12</span><div><h3>La torta</h3><p>La foto formal y las reacciones que aparecen alrededor.</p></div></article>
        <article><span>13</span><div><h3>El brindis</h3><p>Copas, palabras, abrazos y celebración.</p></div></article>
      </div>

      <h2 id="pista">Pista, espontáneas y cierre</h2>
      <div class="article-photo-list">
        <article><span>14</span><div><h3>La pista y los momentos espontáneos</h3><p>Movimiento, grupos, luces, risas y abrazos inesperados.</p></div></article>
        <article><span>15</span><div><h3>Una fotografía de cierre</h3><p>Una imagen que resuma cómo terminó la noche.</p></div></article>
      </div>

      <h2 id="organizar">Cómo organizar la lista sin pasar la noche posando</h2>
      <ol class="article-steps">
        <li><span>01</span><div><h3>Elegí pocos grupos</h3><p>Padres, hermanos, abuelos y amistades imprescindibles.</p></div></li>
        <li><span>02</span><div><h3>Designá un referente</h3><p>Una persona que conozca a todos agiliza las fotos familiares.</p></div></li>
        <li><span>03</span><div><h3>Compartí el cronograma</h3><p>Entrada, vals, torta, shows y sorpresas deben estar informados.</p></div></li>
      </ol>
      <aside class="article-quote"><span>“</span><p>La lista evita olvidos; las mejores fotos suelen aparecer entre un momento planificado y el siguiente.</p></aside>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿Hay que enviar una lista completa?', answer: 'No. Alcanza con indicar familiares, grupos y momentos que el equipo no podría conocer por sí solo.' },
      { question: '¿Cuándo conviene hacer las fotos familiares?', answer: 'Antes de la entrada o durante la recepción, antes de que empiece la pista.' },
      { question: '¿La sesión previa reemplaza las fotos de la fiesta?', answer: 'No. La sesión produce retratos; la fiesta conserva familia, amistades y momentos reales.' },
    ],
    relatedSlugs: ['cuanto-cuesta-fotografo-15-anos-buenos-aires', 'cuantas-horas-contratar-fotografo-evento', 'fotografo-video-casamiento-que-incluye'],
  },
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
