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
    category: '15 años · Presupuesto',
    title: '¿Cuánto cuesta un fotógrafo para un cumpleaños de 15 en Buenos Aires?',
    shortTitle: 'Cuánto cuesta un fotógrafo para 15 años',
    description: 'Conocé cuánto cuesta un fotógrafo para un cumpleaños de 15 en Buenos Aires, qué modifica el precio y qué debería incluir una cobertura profesional.',
    intro: 'Dos presupuestos pueden tener un valor parecido y ofrecer coberturas completamente distintas. Esta guía explica qué estás pagando y cómo comparar sin mirar solamente el número final.',
    readingTime: '8 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-quince-portada-desktop.webp',
    imageAlt: 'Fotografía profesional de una fiesta de 15 años en Buenos Aires',
    imagePosition: '50% 48%',
    serviceHref: '/fotografo-15-anos-caba-gba/',
    serviceLabel: 'Ver servicio de 15 años',
    ctaContext: 'quince',
    ctaTitle: '¿Querés saber cuánto costaría tu fiesta?',
    ctaText: 'Contanos la fecha, el salón, la cantidad aproximada de horas y si buscás fotografía, video o ambos. Te respondemos con una propuesta clara.',
    ctaLabel: 'Consultar presupuesto para un 15',
    quickAnswerTitle: 'Respuesta rápida',
    quickAnswerHtml: '<p>Como referencia de <strong>julio de 2026</strong>, en FRAME una cobertura de <strong>fiesta sola parte de $380.000</strong>, mientras que una propuesta con <strong>fiesta y sesión previa parte de $550.000</strong>.</p><p>Son valores orientativos: el presupuesto final cambia según la fecha, el salón, la zona, las horas contratadas y si se suma video, reels u otra entrega.</p>',
    toc: [
      { id: 'que-modifica-el-precio', label: 'Qué modifica el precio' },
      { id: 'que-deberia-incluir', label: 'Qué debería incluir' },
      { id: 'como-comparar', label: 'Cómo comparar presupuestos' },
      { id: 'cuantas-horas', label: 'Cuántas horas conviene contratar' },
      { id: 'sesion-previa', label: 'Cuándo sumar una sesión previa' },
      { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Organizar una fiesta de 15 implica decidir sobre el salón, el vestido, la música, la ambientación y muchos proveedores a la vez. Con la fotografía aparece una dificultad extra: no siempre es fácil entender por qué una propuesta cuesta más que otra.</p>
      <p>La pregunta correcta no es solamente cuánto cuesta un fotógrafo. También conviene saber <strong>qué momentos cubre, cuántas horas permanece, cómo resuelve una pista con poca luz, qué edición realiza y cómo entrega el material</strong>.</p>

      <h2 id="que-modifica-el-precio">Qué modifica el precio de un fotógrafo para 15 años</h2>
      <div class="article-number-grid">
        <article><span>01</span><h3>La cantidad de horas</h3><p>No cuesta lo mismo registrar la entrada, el vals y una parte de la pista que acompañar también la previa, la recepción y el cierre. La duración debería definirse a partir del cronograma real.</p></article>
        <article><span>02</span><h3>Fiesta sola o sesión previa</h3><p>El book es una producción independiente: requiere locación, horario de luz, vestuario, sesión, selección y edición. No es simplemente “agregar una hora”.</p></article>
        <article><span>03</span><h3>Fotografía o foto y video</h3><p>El video suma profesionales, cámaras, audio y muchas horas de montaje. Conserva movimiento, voces y discursos que la fotografía no registra de la misma manera.</p></article>
        <article><span>04</span><h3>Cantidad de profesionales</h3><p>En una fiesta grande o con momentos simultáneos puede ser útil sumar otro fotógrafo o un equipo de video. Tiene sentido cuando existe una necesidad concreta, no como agregado automático.</p></article>
        <article><span>05</span><h3>Salón y ubicación</h3><p>Distancia, horarios de traslado, peajes y logística pueden modificar la propuesta. Informar la dirección desde el inicio permite cotizar sin sorpresas.</p></article>
        <article><span>06</span><h3>La entrega final</h3><p>Fotos digitales, galería online, video resumen, reels, álbum impreso o piezas para redes no implican el mismo trabajo. El presupuesto debe aclarar qué está incluido.</p></article>
      </div>

      <aside class="article-quote"><span>“</span><p>Una cobertura económica que termina antes de la torta puede ser más cara que una propuesta bien pensada alrededor de los momentos importantes.</p></aside>

      <h2 id="que-deberia-incluir">Qué debería incluir un presupuesto profesional</h2>
      <p>Una propuesta clara debería permitir que la familia entienda qué sucede desde que el equipo llega hasta que recibe las fotos finales.</p>
      <ul class="article-checklist">
        <li>Fecha y ubicación del evento.</li><li>Cantidad exacta de horas de cobertura.</li><li>Momentos incluidos y horario estimado.</li><li>Fotografía, video o ambas opciones.</li><li>Cantidad de profesionales.</li><li>Tipo de selección y edición.</li><li>Formato y plazo estimado de entrega.</li><li>Traslados, adicionales y valor de horas extra.</li><li>Forma de pago y condiciones de reserva.</li>
      </ul>

      <h2 id="como-comparar">Cómo comparar presupuestos sin mirar solamente el precio</h2>
      <p>La cantidad de fotos no es el único criterio. Una entrega enorme no garantiza una mejor cobertura. Conviene mirar <strong>eventos completos</strong> y no solamente una selección de las diez mejores imágenes.</p>
      <p>Prestá atención a los interiores, la pista, los momentos espontáneos y los retratos familiares. Esas situaciones muestran la consistencia real del fotógrafo: cómo maneja luces difíciles, movimiento y escenas que no se repiten.</p>
      <div class="article-comparison">
        <div><span>Mirar</span><strong>Historias completas</strong><p>Entrada, familia, vals, pista y cierre con una estética consistente.</p></div>
        <div><span>Preguntar</span><strong>Qué se entrega</strong><p>Formato, edición, plazos, respaldo y condiciones claras.</p></div>
        <div><span>Evitar</span><strong>Comparar solo cantidad</strong><p>Más archivos no significa mejores imágenes ni una cobertura más cuidada.</p></div>
      </div>

      <h2 id="cuantas-horas">¿Cuántas horas conviene contratar?</h2>
      <p>Para registrar entrada, retratos familiares, vals, torta y una parte importante de la pista, muchas fiestas funcionan bien con una cobertura de <strong>entre cinco y siete horas</strong>.</p>
      <p>Cuando se suman preparativos, encuentro con amigas o un cierre más avanzado, puede ser necesario ampliar ese tiempo. La mejor decisión no es contratar la mayor cantidad posible, sino ubicar la cobertura alrededor de los momentos que realmente querés conservar.</p>
      <a class="article-inline-link" href="/blog/cuantas-horas-contratar-fotografo-evento/">Ver la guía completa para calcular las horas de cobertura →</a>

      <h2 id="sesion-previa">¿Cuándo conviene sumar una sesión previa?</h2>
      <p>La sesión previa tiene sentido cuando la quinceañera quiere fotografías más producidas, con tiempo para elegir locación, vestuario y estilo. También permite crear imágenes para invitaciones, cuadros, recepción o contenido previo a la fiesta.</p>
      <p>Durante el evento, en cambio, la prioridad es registrar lo que está pasando. Son dos tipos de fotografía distintos y complementarios: <strong>el book construye retratos; la fiesta conserva la historia real</strong>.</p>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿La reserva congela el precio?', answer: 'Depende de las condiciones de cada propuesta. La forma de reserva y el esquema de pagos deberían quedar indicados por escrito.' },
      { question: '¿Las fotografías se entregan editadas?', answer: 'Sí. Una cobertura profesional debería incluir selección, corrección de luz y color, y una entrega final consistente.' },
      { question: '¿Se puede contratar solamente la fiesta?', answer: 'Sí. También se puede sumar sesión previa, video o reels según el tipo de recuerdo que quieran conservar.' },
      { question: '¿Trabajan en CABA y GBA?', answer: 'FRAME realiza coberturas en Buenos Aires, CABA, GBA y otras zonas según disponibilidad y logística.' },
    ],
    relatedSlugs: ['cuantas-horas-contratar-fotografo-evento', 'fotos-que-no-pueden-faltar-fiesta-15', 'fotografo-video-casamiento-que-incluye'],
  },
  {
    slug: 'fotografo-video-casamiento-que-incluye',
    number: '02',
    category: 'Casamientos · Guía',
    title: 'Fotógrafo y video para casamiento: qué incluye el servicio',
    shortTitle: 'Qué incluye la foto y el video de casamiento',
    description: 'Descubrí qué incluye un servicio de fotografía y video para casamiento: preparativos, ceremonia, retratos, fiesta, edición y entrega final.',
    intro: 'Una cobertura bien armada empieza antes de encender las cámaras: se revisan horarios, locaciones, traslados, personas importantes y momentos que no pueden quedar librados al azar.',
    readingTime: '9 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-casamiento-portada-desktop.webp',
    imageAlt: 'Fotografía y video profesional para casamiento en Buenos Aires',
    imagePosition: '50% 50%',
    serviceHref: '/fotografia-video-casamientos-buenos-aires/',
    serviceLabel: 'Ver servicio de casamientos',
    ctaContext: 'wedding',
    ctaTitle: '¿Están organizando su casamiento?',
    ctaText: 'Con la fecha, las locaciones y un cronograma aproximado podemos recomendar horas y preparar una propuesta de fotografía, video o ambos.',
    ctaLabel: 'Consultar foto y video para casamiento',
    quickAnswerTitle: 'En pocas palabras',
    quickAnswerHtml: '<p>Una cobertura completa puede incluir <strong>preparativos, civil o ceremonia, retratos, recepción, discursos, fiesta, selección, edición y entrega digital</strong>.</p><p>La propuesta exacta cambia según locaciones, traslados, cantidad de horas, tamaño del equipo y piezas finales de video.</p>',
    toc: [
      { id: 'momentos', label: 'Momentos de la cobertura' }, { id: 'despues', label: 'Trabajo después del casamiento' }, { id: 'video', label: 'Qué entregas puede incluir el video' }, { id: 'foto-o-video', label: 'Fotografía, video o ambos' }, { id: 'preguntar', label: 'Qué preguntar antes de contratar' }, { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    bodyHtml: `
      <p class="article-lead">Contratar fotografía y video para un casamiento no significa solamente tener a alguien con una cámara durante la fiesta. Una buena cobertura empieza antes: se ordena el día para que el equipo pueda anticiparse sin convertir la celebración en una producción permanente.</p>
      <p>El objetivo es registrar lo que sucede y saber cuándo intervenir: ordenar una foto familiar, encontrar una mejor luz o resolver un retrato de pareja de forma breve.</p>
      <h2 id="momentos">Qué momentos suele incluir una cobertura</h2>
      <div class="article-timeline">
        <article><span>01</span><div><h3>Preparativos</h3><p>Vestido, traje, anillos, maquillaje, peinado y encuentros previos. Muchas de las mejores imágenes aparecen entre una acción y otra.</p></div></article>
        <article><span>02</span><div><h3>Civil o ceremonia</h3><p>Entradas, miradas, votos, anillos, beso, firma, arroz y abrazos. Para video, el audio merece una atención especial.</p></div></article>
        <article><span>03</span><div><h3>Retratos de pareja</h3><p>Con planificación, entre quince y treinta minutos pueden alcanzar para obtener imágenes cuidadas sin desaparecer de la celebración durante una hora.</p></div></article>
        <article><span>04</span><div><h3>Familia y amigos</h3><p>Conviene preparar una lista breve con padres, hermanos, abuelos, padrinos y grupos cercanos.</p></div></article>
        <article><span>05</span><div><h3>Recepción y ambientación</h3><p>Salón, mesas, flores, papelería y torta se fotografían mejor antes de que ingresen todos los invitados.</p></div></article>
        <article><span>06</span><div><h3>Fiesta</h3><p>La pista exige experiencia con movimiento, luces cambiantes y poca iluminación. Importan tanto la energía general como los abrazos.</p></div></article>
      </div>
      <aside class="article-quote"><span>“</span><p>El fotógrafo debería estar listo antes de que empiece el momento, no enterarse cuando ya está sucediendo.</p></aside>
      <h2 id="despues">Qué incluye el trabajo después del casamiento</h2>
      <p>La cobertura no termina cuando se guardan las cámaras. Después viene una parte extensa que el cliente no ve: <strong>respaldo, selección, edición, organización y exportación</strong>.</p>
      <div class="article-process-grid">
        <article><span>01</span><h3>Respaldo</h3><p>Copias y organización del material para reducir riesgos antes de comenzar la edición.</p></article>
        <article><span>02</span><h3>Selección</h3><p>Elegir imágenes que construyan una historia sin repeticiones innecesarias.</p></article>
        <article><span>03</span><h3>Edición</h3><p>Corrección de exposición, color, contraste y encuadre con una estética consistente.</p></article>
        <article><span>04</span><h3>Entrega</h3><p>Archivos organizados y exportados en formatos preparados para guardar y compartir.</p></article>
      </div>
      <h2 id="video">Qué entregas puede incluir el video</h2>
      <ul class="article-checklist"><li>Video resumen del casamiento.</li><li>Reel o pieza vertical para redes.</li><li>Registro más extenso de ceremonia o discursos.</li><li>Edición de momentos seleccionados.</li><li>Archivos preparados para compartir.</li></ul>
      <p>No conviene asumir que todas estas piezas están incluidas. El presupuesto debería explicar qué videos se entregan, su duración aproximada y el plazo estimado.</p>
      <h2 id="foto-o-video">Fotografía sola, video solo o cobertura combinada</h2>
      <div class="article-comparison article-comparison-two">
        <div><span>Fotografía</span><strong>Detiene el instante</strong><p>Permite observar gestos, detalles y composiciones que sucedieron en una fracción de segundo.</p></div>
        <div><span>Video</span><strong>Conserva el ritmo</strong><p>Guarda movimiento, voces, música, silencios y la forma en que se desarrolló cada momento.</p></div>
      </div>
      <h2 id="preguntar">Qué preguntar antes de contratar</h2>
      <ul class="article-checklist"><li>Cuántas horas incluye la propuesta.</li><li>Qué momentos y locaciones se cubren.</li><li>Cuántas personas integran el equipo.</li><li>Qué entregas están incluidas.</li><li>Cuál es el plazo de entrega.</li><li>Cómo se resguarda el material.</li><li>Qué sucede si el cronograma se demora.</li><li>Condiciones de reserva y cancelación.</li></ul>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿Se puede cubrir solamente el civil?', answer: 'Sí. Un civil puede contratarse como una cobertura breve o combinarse con una sesión y una celebración posterior.' },
      { question: '¿Cuántas horas necesita un casamiento?', answer: 'Depende de si se cubren preparativos, civil, ceremonia y fiesta. Una cobertura completa necesita más tiempo que una propuesta centrada únicamente en ceremonia y recepción.' },
      { question: '¿Hay que hacer una lista de todas las fotos?', answer: 'No. Es útil preparar una lista corta de familiares y momentos imprescindibles, pero el registro general debería quedar en manos del fotógrafo.' },
      { question: '¿Trabajan en CABA y GBA?', answer: 'FRAME realiza casamientos en Buenos Aires, CABA, GBA, Zona Norte y otras zonas según disponibilidad.' },
    ],
    relatedSlugs: ['cuantas-horas-contratar-fotografo-evento', 'cuanto-cuesta-fotografo-15-anos-buenos-aires', 'fotos-que-no-pueden-faltar-fiesta-15'],
  },
  {
    slug: 'cuantas-horas-contratar-fotografo-evento',
    number: '03',
    category: 'Eventos · Planificación',
    title: '¿Cuántas horas contratar un fotógrafo para un evento?',
    shortTitle: 'Cuántas horas contratar un fotógrafo',
    description: 'Calculá cuántas horas de fotografía necesitás según el tipo de evento, el cronograma y los momentos que no querés perderte.',
    intro: 'Una cobertura puede empezar demasiado temprano y terminar antes de la parte más importante. La forma correcta de elegir horas es ordenar el cronograma, no adivinar un paquete.',
    readingTime: '7 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/hero-home.webp',
    imageAlt: 'Fotógrafo registrando un evento social en Buenos Aires',
    imagePosition: '50% 50%',
    serviceHref: '/',
    serviceLabel: 'Ver fotografía para eventos',
    ctaContext: 'general',
    ctaTitle: '¿No sabés cuántas horas necesitás?',
    ctaText: 'Mandanos el cronograma, la fecha y la zona. Te recomendamos una cobertura que llegue a los momentos importantes sin sumar horas porque sí.',
    ctaLabel: 'Consultar horas para mi evento',
    quickAnswerTitle: 'Referencia rápida',
    quickAnswerHtml: '<p><strong>Eventos sociales:</strong> 3 a 5 horas. <strong>Fiestas de 15:</strong> 5 a 7 horas sin previa y 7 a 9 con preparativos. <strong>Casamientos:</strong> 6 a 8 horas para ceremonia y fiesta; 8 a 12 desde preparativos.</p><p>Son rangos orientativos. La cantidad correcta depende del primer y último momento que realmente querés conservar.</p>',
    toc: [{ id: 'referencias', label: 'Horas según el evento' }, { id: 'momentos', label: 'Empezar por los momentos' }, { id: 'calcular', label: 'Cómo calcular paso a paso' }, { id: 'ejemplos', label: 'Ejemplos de cronograma' }, { id: 'errores', label: 'Errores frecuentes' }, { id: 'historia', label: 'Cubrir la historia completa' }],
    bodyHtml: `
      <p class="article-lead">Elegir la cantidad de horas parece sencillo hasta que aparece el cronograma real. Una cobertura puede desperdiciar tiempo al principio y quedarse corta justo antes de la torta, un discurso o una sorpresa.</p>
      <p>La mejor forma de decidir no es elegir por intuición. Es ubicar los momentos que querés conservar y agregar un margen razonable para las demoras normales de cualquier evento.</p>
      <h2 id="referencias">Referencia de horas según el tipo de evento</h2>
      <div class="article-hours-grid">
        <article><span>3–5 h</span><h3>Evento social</h3><p>Cumpleaños, celebración familiar o recepción con momentos concentrados.</p></article>
        <article><span>5–7 h</span><h3>Fiesta de 15</h3><p>Entrada, familia, vals, torta y una parte importante de la pista.</p></article>
        <article><span>7–9 h</span><h3>15 con previa</h3><p>Preparativos, llegada al salón y cobertura amplia de la fiesta.</p></article>
        <article><span>2–4 h</span><h3>Civil</h3><p>Ceremonia breve, retratos y celebración posterior cercana.</p></article>
        <article><span>6–8 h</span><h3>Casamiento</h3><p>Ceremonia, retratos, recepción y una parte relevante de la fiesta.</p></article>
        <article><span>8–12 h</span><h3>Casamiento completo</h3><p>Preparativos, traslados, ceremonia, recepción y pista.</p></article>
        <article><span>2–4 h</span><h3>Corporativo breve</h3><p>Recepción, presentación, oradores y networking.</p></article>
        <article><span>5–8 h</span><h3>Jornada corporativa</h3><p>Agenda completa, paneles, activaciones y fotografías institucionales.</p></article>
      </div>
      <h2 id="momentos">Empezá por los momentos que no pueden faltar</h2>
      <p>En un cumpleaños de 15 pueden ser la preparación, la entrada, las fotos familiares, el vals, la torta y la pista. En un casamiento: preparativos, ceremonia, retratos, discursos y baile. En un evento corporativo: recepción, oradores, networking y fotografías institucionales.</p>
      <aside class="article-quote"><span>“</span><p>La cobertura debería empezar cuando comienza la historia que querés recordar y terminar después del último momento realmente importante.</p></aside>
      <h3>¿Cuánto antes debería llegar el fotógrafo?</h3><p>Para una fiesta social suele ser útil llegar entre treinta y sesenta minutos antes de la entrada principal. Ese margen permite registrar salón, ambientación y retratos.</p>
      <h3>¿Hasta qué momento conviene quedarse?</h3><p>No todos los eventos necesitan cobertura hasta que se encienden las luces. Pero retirarse antes de la torta, un show o un momento planificado sí puede dejar una parte central sin registrar.</p>
      <h2 id="calcular">Cómo calcular las horas paso a paso</h2>
      <ol class="article-steps">
        <li><span>01</span><div><h3>Anotá el horario real</h3><p>Registrá entrada, ceremonia, brindis, discursos, torta, shows y apertura de pista.</p></div></li>
        <li><span>02</span><div><h3>Elegí el primer momento</h3><p>Puede ser la preparación, la llegada de invitados o la entrada principal.</p></div></li>
        <li><span>03</span><div><h3>Elegí el último imprescindible</h3><p>Puede ser la torta, un show, el ramo o una hora específica de pista.</p></div></li>
        <li><span>04</span><div><h3>Sumá margen</h3><p>Agregar entre treinta y sesenta minutos ayuda a absorber demoras sin perder el cierre.</p></div></li>
        <li><span>05</span><div><h3>Confirmá traslados</h3><p>Cuando hay civil, ceremonia y salón en lugares distintos, el tiempo de viaje también forma parte de la cobertura.</p></div></li>
      </ol>
      <h2 id="ejemplos">Ejemplos de cronograma</h2>
      <div class="article-schedule">
        <div><span>Fiesta de 15</span><ul><li><b>21:00</b> Recepción</li><li><b>22:00</b> Entrada</li><li><b>23:30</b> Vals</li><li><b>00:00</b> Pista</li><li><b>01:30</b> Torta</li></ul><p>Una cobertura de 21:30 a 02:30 registraría ambientación, entrada, familia, vals, torta y una parte amplia de la fiesta.</p></div>
        <div><span>Casamiento</span><ul><li><b>18:00</b> Ceremonia</li><li><b>19:00</b> Retratos</li><li><b>20:00</b> Recepción</li><li><b>22:00</b> Discursos</li><li><b>23:00</b> Pista</li></ul><p>Seis horas pueden cubrir ceremonia, retratos, recepción y pista. Para sumar preparativos y traslados, hace falta comenzar antes.</p></div>
      </div>
      <h2 id="errores">Errores frecuentes al elegir horas</h2>
      <div class="article-number-grid">
        <article><span>01</span><h3>Contratar sin cronograma</h3><p>Muchas horas no garantizan mejores recuerdos si están ubicadas en momentos sin actividad.</p></article>
        <article><span>02</span><h3>Empezar demasiado tarde</h3><p>Llegar justo a la entrada elimina el margen para resolver iluminación, detalles y retratos previos.</p></article>
        <article><span>03</span><h3>Terminar antes de lo importante</h3><p>Torta, discursos, shows y sorpresas deben informarse antes de fijar el horario final.</p></article>
        <article><span>04</span><h3>No contemplar demoras</h3><p>Un pequeño margen puede evitar adicionales inesperados o una retirada apresurada.</p></article>
      </div>
      <h2 id="historia">La cantidad correcta es la que cubre la historia</h2><p>No se trata de fotografiar cada minuto. Se trata de estar presente cuando sucede algo que no va a repetirse.</p>
    `,
    faqs: [],
    relatedSlugs: ['cuanto-cuesta-fotografo-15-anos-buenos-aires', 'fotografo-video-casamiento-que-incluye', 'fotos-que-no-pueden-faltar-fiesta-15'],
  },
  {
    slug: 'fotos-que-no-pueden-faltar-fiesta-15',
    number: '04',
    category: '15 años · Inspiración',
    title: 'Qué fotos no pueden faltar en una fiesta de 15',
    shortTitle: 'Las fotos imprescindibles de una fiesta de 15',
    description: 'Descubrí las fotos imprescindibles de una fiesta de 15: preparativos, familia, entrada, vals, torta, amigas, pista y momentos espontáneos.',
    intro: 'Una buena cobertura no debería sentirse como una lista de poses. Aun así, hay imágenes que ayudan a contar la noche completa y conviene contemplarlas antes del evento.',
    readingTime: '8 min de lectura',
    updatedLabel: 'Actualizado el 22 de julio de 2026',
    publishedIso: '2026-07-22',
    image: '/images/fotografia-15-anos-caba-frame-1536.webp',
    imageAlt: 'Fotos imprescindibles para una fiesta de 15 años',
    imagePosition: '52% 48%',
    serviceHref: '/fotografo-15-anos-caba-gba/',
    serviceLabel: 'Ver fotografía para 15 años',
    ctaContext: 'quince',
    ctaTitle: '¿Querés una cobertura que cuente toda la noche?',
    ctaText: 'Con la fecha, el salón y el cronograma podemos ordenar los momentos importantes sin convertir la fiesta en una sesión permanente.',
    ctaLabel: 'Consultar cobertura para un 15',
    quickAnswerTitle: 'La idea principal',
    quickAnswerHtml: '<p>Las fotos esenciales son <strong>vestido, detalles, preparación, retratos, familia, amigas, ambientación, entrada, vals, ceremonias, torta, pista, momentos espontáneos y una imagen de cierre</strong>.</p><p>La lista evita olvidos, pero la mejor cobertura aparece en todo lo que sucede entre esas fotos.</p>',
    toc: [{ id: 'antes', label: 'Antes de la entrada' }, { id: 'familia', label: 'Familia y amistades' }, { id: 'momentos', label: 'Momentos principales' }, { id: 'pista', label: 'Pista y espontáneas' }, { id: 'asegurar', label: 'Cómo asegurar las fotos' }, { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' }],
    bodyHtml: `
      <p class="article-lead">La fiesta tiene que avanzar y la quinceañera tiene que disfrutarla. El fotógrafo debe encontrar los momentos sin transformar cada escena en una producción. Algunas fotos se planifican; otras dependen de estar atento en el segundo correcto.</p>
      <h2 id="antes">Antes de la entrada</h2>
      <div class="article-photo-list">
        <article><span>01</span><div><h3>El vestido completo</h3><p>Una imagen clara del diseño y su caída, realizada durante la preparación, al llegar al salón o en un espacio con buena luz.</p></div></article>
        <article><span>02</span><div><h3>Los detalles</h3><p>Zapatos, accesorios, invitación, perfume y maquillaje construyen contexto y conectan con recuerdos concretos del día.</p></div></article>
        <article><span>03</span><div><h3>La preparación</h3><p>Maquillaje, peinado, últimos ajustes y nervios previos cuentan la transición entre prepararse y entrar a la fiesta.</p></div></article>
        <article><span>04</span><div><h3>Un retrato individual</h3><p>Algunos retratos donde la quinceañera sea la única protagonista, con dirección simple y sin extender demasiado la sesión.</p></div></article>
      </div>
      <h2 id="familia">Familia y amistades</h2>
      <div class="article-photo-list">
        <article><span>05</span><div><h3>La quinceañera con sus padres</h3><p>Conviene hacer una versión ordenada mirando a cámara y también registrar los abrazos o gestos que aparecen entre una foto y otra.</p></div></article>
        <article><span>06</span><div><h3>Hermanos, abuelos y familia cercana</h3><p>Las combinaciones centrales deberían definirse antes. Los abuelos merecen especial atención porque muchas veces se retiran temprano.</p></div></article>
        <article><span>07</span><div><h3>Amigas y amigos</h3><p>Además de la foto grupal, sirven grupos más chicos y escenas espontáneas. Probablemente sean algunas de las imágenes más compartidas.</p></div></article>
        <article><span>08</span><div><h3>La ambientación vacía</h3><p>Salón, mesas, flores, cartelería y torta deberían fotografiarse antes de que el espacio se llene y cambie por completo.</p></div></article>
      </div>
      <h2 id="momentos">Los momentos principales de la noche</h2>
      <div class="article-photo-list">
        <article><span>09</span><div><h3>La entrada y las reacciones</h3><p>No alcanza con fotografiar a la quinceañera entrando. También importan los padres, amigas y familiares que la ven aparecer.</p></div></article>
        <article><span>10</span><div><h3>El vals o baile principal</h3><p>Conviene alternar planos generales, detalles y reacciones. La iluminación puede ser difícil y debe resolverse sin romper la atmósfera.</p></div></article>
        <article><span>11</span><div><h3>Discursos, velas o ceremonias</h3><p>Cambio de zapatos, velas, regalos, discursos o videos sorpresa deben informarse con anticipación.</p></div></article>
        <article><span>12</span><div><h3>La torta y el brindis</h3><p>Además de la foto formal, suelen aparecer abrazos, risas y gestos. Conviene registrar el momento completo.</p></div></article>
      </div>
      <aside class="article-quote"><span>“</span><p>Guardar una sorpresa para la quinceañera no significa ocultársela al equipo audiovisual. Necesitamos saber que va a ocurrir para ubicarnos antes.</p></aside>
      <h2 id="pista">Pista, momentos espontáneos y cierre</h2>
      <div class="article-photo-list">
        <article><span>13</span><div><h3>La pista</h3><p>Planos abiertos, grupos, movimientos y luces. La energía aparece cuando las personas se olvidan de la cámara.</p></div></article>
        <article><span>14</span><div><h3>Los momentos espontáneos</h3><p>Una conversación, una amiga acomodando el vestido o un abrazo inesperado pueden terminar siendo las fotos favoritas.</p></div></article>
        <article><span>15</span><div><h3>Una fotografía de cierre</h3><p>Puede ser un retrato en la pista, una imagen con el grupo cercano o una escena que resuma cómo terminó la fiesta.</p></div></article>
      </div>
      <h2 id="asegurar">Cómo asegurar las fotos importantes sin pasar la noche posando</h2>
      <ol class="article-steps">
        <li><span>01</span><div><h3>Prepará una lista corta</h3><p>Padres, hermanos, abuelos, padrinos y grupos imprescindibles. Entre cinco y diez combinaciones suelen ser suficientes.</p></div></li>
        <li><span>02</span><div><h3>Elegí un referente familiar</h3><p>Una persona que conozca a todos ayuda a reunir rápidamente a la familia.</p></div></li>
        <li><span>03</span><div><h3>Compartí el cronograma</h3><p>Entrada, vals, torta, shows y sorpresas deberían estar informados antes del evento.</p></div></li>
        <li><span>04</span><div><h3>Reservá un momento breve</h3><p>Entre quince y veinte minutos organizados pueden resolver retratos individuales y familiares.</p></div></li>
      </ol>
      <p>La lista ayuda a evitar olvidos, pero una cobertura no debería sentirse mecánica. El objetivo es contar cómo se vivió la fiesta.</p>
      <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
    `,
    faqs: [
      { question: '¿Hay que enviarle una lista completa al fotógrafo?', answer: 'No. Alcanza con indicar familiares, grupos y momentos especiales que el fotógrafo no podría conocer por sí solo.' },
      { question: '¿Cuándo conviene hacer las fotos familiares?', answer: 'Puede ser antes de la entrada, después de la recepción o en un momento acordado antes de que empiece la pista.' },
      { question: '¿La sesión previa reemplaza las fotos de la fiesta?', answer: 'No. El book produce retratos planificados; la fiesta registra momentos reales, familia, amistades y celebración.' },
      { question: '¿Se puede sumar video?', answer: 'Sí. El video permite conservar discursos, voces, movimiento y música, y puede combinarse con la cobertura fotográfica.' },
    ],
    relatedSlugs: ['cuanto-cuesta-fotografo-15-anos-buenos-aires', 'cuantas-horas-contratar-fotografo-evento', 'fotografo-video-casamiento-que-incluye'],
  },
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
