import type { CTA_Context } from '../utils/whatsapp';

export interface NewService {
  slug: string;
  badge: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  context: CTA_Context;
  cta: string;
  corporateGallery?: {
    lead: { src: string; alt: string; width: number; height: number };
    portrait?: { src: string; alt: string; width: number; height: number };
    top: { src: string; alt: string; width: number; height: number };
    bottom: { src: string; alt: string; width: number; height: number };
  };
  bookGallery?: {
    lead: { src: string; alt: string; width: number; height: number };
    portrait: { src: string; alt: string; width: number; height: number };
  };
  // Add a local cover here when the final photograph is available.
  cover?: { src: string; mobileSrc?: string; alt: string; position?: string; mobilePosition?: string };
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    text: string;
    cards?: Array<{ title: string; text: string }>;
    link?: { label: string; href: string };
  }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; text: string; href: string }>;
  /** Página madre del silo: se usa en el breadcrumb visible y en el schema BreadcrumbList. */
  parent: { label: string; href: string };
  breadcrumbLabel: string;
}

export const NEW_SERVICES: NewService[] = [
  {
    slug: 'book-15-anos-buenos-aires',
    parent: { label: '15 años', href: '/fotografo-15-anos-caba-gba/' },
    breadcrumbLabel: 'Book de 15',
    badge: 'Book de 15 · Sesión previa',
    title: 'Book de fotos de 15 años en Buenos Aires | Frame Estudio',
    h1: 'Book de fotos de 15 años en Buenos Aires',
    bookGallery: {
      lead: { src: '/images/book-15-dsc01068.webp', alt: 'Retrato espontáneo durante una sesión de 15 años en Buenos Aires', width: 1800, height: 2700 },
      portrait: { src: '/images/book-15-dsc01746.webp', alt: 'Retrato nocturno durante una sesión de 15 años en Buenos Aires', width: 1079, height: 1920 },
    },
    cover: {
      src: '/images/book-15-sunset.webp',
      mobileSrc: '/images/book-15-dsc01746.webp',
      alt: 'Retrato de 15 años con el skyline urbano de Buenos Aires al atardecer',
      position: '50% 58%',
      mobilePosition: '50% 50%',
    },
    description: 'Book de 15 años con sesión planificada, orientación para elegir el estilo y fotografías editadas. Consultá tu presupuesto.',
    intro: 'Una sesión para contar quién sos antes de la fiesta. Planificamos tu book de 15 en Buenos Aires con una locación, una luz y un estilo que tengan que ver con vos.',
    context: 'book',
    cta: 'Consultar mi book de 15',
    sections: [
      {
        id: 'sesion', eyebrow: 'A tu manera', title: 'Sesión de fotos para 15 años',
        text: 'El book es una sesión independiente de la cobertura de la fiesta. Nos permite dedicar tiempo a los retratos, probar encuadres y acompañarte para que te sientas cómoda frente a cámara.',
        cards: [
          { title: 'Una idea que te represente', text: 'Partimos de tus gustos y de algunas referencias. Elegimos un rumbo visual que podamos realizar en la locación acordada.' },
          { title: 'Dirección durante la sesión', text: 'Te orientamos con movimientos, posturas y miradas. No hace falta saber posar ni tener experiencia.' },
          { title: 'Fotos para distintos momentos', text: 'Contanos si las querés para invitaciones, pantalla, redes o recuerdos impresos: eso ayuda a definir encuadres y fechas.' },
        ],
      },
      {
        id: 'exteriores', eyebrow: 'Elegir el lugar', title: 'Books de 15 en exteriores y locaciones',
        text: 'Podemos planificar una sesión en exteriores o en una locación acordada. Para elegir el lugar miramos la luz, la distancia, la posibilidad de cambiarte y un plan alternativo si llueve. Los accesos, permisos y costos de una locación se confirman antes de reservar.',
        cards: [
          { title: 'Natural', text: 'Verde, caminos y espacios abiertos para una sesión con movimiento y una luz suave.' },
          { title: 'Urbano', text: 'Arquitectura, texturas y líneas para un book con una estética más editorial.' },
          { title: 'Personal', text: 'Un hobby, un objeto o una combinación de ropa pueden darle identidad al book sin recargar cada foto.' },
        ],
        link: { label: 'Ver ideas, ropa y locaciones para tu sesión', href: '/blog/ideas-sesion-fotos-15-anos/' },
      },
      {
        id: 'incluye', eyebrow: 'Del plan a las fotos', title: 'Qué incluye el book de fotos de 15 años',
        text: 'Antes de reservar acordamos duración, cantidad de fotos finales, cambios de ropa, locaciones y plazo. Así sabés exactamente qué vas a recibir.',
        cards: [
          { title: 'Antes', text: 'Definimos fecha, referencias, ropa y locación. Si las fotos se usan en la fiesta, organizamos la entrega con ese plazo en mente.' },
          { title: 'Durante', text: 'Hacemos la sesión con orientación frente a cámara y tiempo para los cambios previstos en la propuesta.' },
          { title: 'Después', text: 'Seleccionamos y editamos las fotografías. Recibís los archivos digitales en los formatos acordados.' },
        ],
      },
      {
        id: 'precio', eyebrow: 'Una propuesta clara', title: 'Precios del book de fotos de 15 años',
        text: 'El presupuesto de un book se calcula según duración, cantidad de locaciones, traslados y entregas. Consultanos por la sesión sola o por una propuesta con fiesta y sesión previa. Maquillaje, alquileres e impresiones se incluyen solo si figuran en la cotización.',
        cards: [
          { title: 'Solo book', text: 'Una sesión previa con planificación, fotografías editadas y entrega digital. La cantidad de imágenes y el plazo quedan por escrito.' },
          { title: 'Book y fiesta', text: 'Podés combinar ambos servicios. La cobertura de la noche se define con su propio cronograma y cantidad de horas.' },
        ],
        link: { label: 'Ver fotografía y video para la fiesta de 15', href: '/fotografo-15-anos-caba-gba/' },
      },
    ],
    faqs: [
      { question: '¿Puedo contratar el book sin la cobertura de la fiesta?', answer: 'Sí. Podés consultar por la sesión de fotos de 15 años por separado o combinarla con la cobertura de tu cumpleaños.' },
      { question: '¿Qué ropa conviene llevar?', answer: 'Ropa con la que te sientas cómoda y que funcione con la locación. Acordamos los cambios antes de la sesión para aprovechar el tiempo y evitar llevar opciones que no vamos a usar.' },
      { question: '¿Qué pasa si llueve?', answer: 'Antes de reservar acordamos cómo resolver el clima: reprogramar o evaluar una locación alternativa. Las condiciones se detallan en la propuesta.' },
      { question: '¿Con cuánta anticipación se hace el book?', answer: 'Depende de cuándo necesitás las fotografías. Si van a usarse en invitaciones, cuadros o pantallas, dejá tiempo para la edición y la producción de esas piezas. Confirmamos la fecha de entrega al cotizar.' },
      { question: '¿El book incluye video o reel?', answer: 'Se puede consultar como adicional. La cotización debe aclarar si incluye solo fotos o también video, la duración de las piezas y sus formatos.' },
    ],
    related: [
      { label: 'Ideas para tu sesión de 15', text: 'Estilos, ropa y cómo elegir una locación.', href: '/blog/ideas-sesion-fotos-15-anos/' },
      { label: 'Cobertura de la fiesta', text: 'Fotografía y video de previa, entrada, vals y pista.', href: '/fotografo-15-anos-caba-gba/' },
      { label: 'Presupuesto de una fiesta de 15', text: 'Qué comparar y qué debería incluir cada propuesta.', href: '/blog/cuanto-cuesta-fotografo-15-anos-buenos-aires/' },
      { label: 'Otras sesiones de fotos', text: 'Retratos, parejas y sesiones en locaciones de Buenos Aires.', href: '/sesion-de-fotos-buenos-aires/' },
    ],
  },
  {
    slug: 'fotografia-corporativa-buenos-aires',
    parent: { label: 'Eventos corporativos', href: '/eventos-corporativos-buenos-aires/' },
    breadcrumbLabel: 'Fotografía corporativa',
    badge: 'Retratos · Profesionales · Equipos',
    title: 'Fotografía corporativa en Buenos Aires | Frame Estudio',
    h1: 'Fotografía corporativa en Buenos Aires',
    corporateGallery: {
      lead: { src: '/images/corporate-dsc01620.webp', alt: 'Retrato profesional al atardecer junto a un edificio en Buenos Aires', width: 3159, height: 5620 },
      portrait: { src: '/images/corporate-dsc04168.webp', alt: 'Retrato profesional de cuerpo entero en Buenos Aires', width: 1151, height: 2048 },
      top: { src: '/images/corporate-sunset.webp', alt: 'Retrato profesional frente al skyline de Buenos Aires al atardecer', width: 1536, height: 1024 },
      bottom: { src: '/images/corporate-night-sculpture.webp', alt: 'Retrato nocturno junto a una escultura iluminada en Buenos Aires', width: 1536, height: 1024 },
    },
    cover: { src: '/images/corporate-dsc01620.webp', alt: 'Retrato profesional al atardecer junto a un edificio en Buenos Aires' },
    description: 'Retratos corporativos, fotos para LinkedIn y fotografías de equipos en Buenos Aires. Planificamos la sesión, el estilo y la entrega. Pedí presupuesto.',
    intro: 'Fotos profesionales para presentarte y mostrar a tu equipo. Organizamos sesiones de retratos corporativos para LinkedIn, CV y comunicación de empresa.',
    context: 'portraits',
    cta: 'Consultar una sesión',
    sections: [
      {
        id: 'retratos', eyebrow: 'Tu imagen profesional', title: 'Retratos corporativos para profesionales',
        text: 'Una buena foto de presentación necesita una expresión natural, luz cuidada y un contexto coherente con tu actividad. Antes de la sesión definimos para qué vas a usar las imágenes y qué estilo querés transmitir. Durante las fotos te acompañamos con la postura, las manos y la mirada.',
        cards: [
          { title: 'Perfil individual', text: 'Retratos para profesionales que necesitan actualizar su presentación, perfil o currículum.' },
          { title: 'Directivos y voceros', text: 'Imágenes para perfiles institucionales, prensa, presentaciones y comunicación de la empresa.' },
          { title: 'Marca personal', text: 'Retratos y fotografías en contexto para acompañar tu actividad en la web y redes profesionales.' },
        ],
      },
      {
        id: 'linkedin', eyebrow: 'Una foto que funcione', title: 'Fotos profesionales para LinkedIn y CV',
        text: 'Pensamos el retrato para que se vea bien también en un tamaño pequeño. Un fondo simple, separación entre persona y entorno, y espacio para recortar ayudan a que el rostro conserve protagonismo. Acordamos versiones para perfil, currículum y web según tus necesidades.',
        cards: [
          { title: 'Fondo y encuadre', text: 'Elegimos un entorno que acompañe tu presentación. Dejamos margen para el recorte circular o vertical del perfil.' },
          { title: 'Ropa y expresión', text: 'Buscamos una imagen acorde a tu profesión. Traé prendas cómodas, prolijas y sin estampados que distraigan.' },
          { title: 'Edición natural', text: 'Cuidamos luz, color y presentación de las fotografías. El alcance del retoque se acuerda antes de la sesión.' },
        ],
      },
      {
        id: 'equipos', eyebrow: 'Una identidad compartida', title: 'Fotografía de equipos y directivos',
        text: 'Para equipos, coordinamos una pauta de luz, fondo y encuadre que mantenga coherencia entre los retratos. Podemos planificar la jornada en las oficinas o en una locación acordada, revisando previamente espacio, accesos y horarios.',
        cards: [
          { title: 'Retratos consistentes', text: 'Una misma dirección visual para las fichas del equipo, la web institucional y los perfiles profesionales.' },
          { title: 'Fotos de grupo', text: 'Organizamos los grupos y la distribución de personas según el espacio y el uso de las imágenes.' },
          { title: 'Jornada organizada', text: 'Definimos cantidad de personas, turnos y un referente de la empresa para coordinar los tiempos.' },
        ],
      },
      {
        id: 'precio', eyebrow: 'Planificación y entrega', title: 'Cómo es la sesión y cuánto cuesta',
        text: 'El presupuesto depende de la cantidad de personas, el tiempo de sesión, la locación y las fotografías finales. La propuesta detalla planificación, toma, selección, edición, formatos de entrega y plazos.',
        cards: [
          { title: 'Sesión individual', text: 'Indicá si buscás un retrato de perfil, varios cambios de ropa o imágenes para una web personal.' },
          { title: 'Sesión de equipo', text: 'Pasá la cantidad de personas, si necesitás fotos grupales y la disponibilidad de las oficinas.' },
        ],
      },
    ],
    faqs: [
      { question: '¿Hacen fotos para LinkedIn aunque no tenga experiencia frente a cámara?', answer: 'Sí. Te orientamos durante la sesión para encontrar una postura y una expresión naturales. Antes definimos el estilo y el uso de las imágenes.' },
      { question: '¿Pueden hacer las fotos en nuestras oficinas?', answer: 'Sí, podemos planificar la sesión en las oficinas cuando el espacio, la iluminación y los tiempos funcionan para la propuesta. Antes revisamos los accesos y la organización necesaria.' },
      { question: '¿Qué incluye la entrega?', answer: 'Incluye las fotografías seleccionadas y editadas que se acuerden en la propuesta. Cantidad, resolución, formatos, retoque y plazo se detallan antes de reservar.' },
      { question: '¿Es el mismo servicio que cubrir un evento corporativo?', answer: 'Son servicios distintos. La sesión de retratos se organiza alrededor de las personas, con tiempo para cada foto. La cobertura de eventos registra una conferencia, lanzamiento o jornada y tiene su propio cronograma.' },
    ],
    related: [
      { label: 'Eventos corporativos', text: 'Fotografía y video para congresos, conferencias y lanzamientos.', href: '/eventos-corporativos-buenos-aires/' },
      { label: 'Video institucional para eventos', text: 'Resúmenes, reels y entrevistas para comunicar lo que pasó.', href: '/video-para-eventos-buenos-aires/' },
      { label: 'Sesiones de fotos en Buenos Aires', text: 'Retratos en locaciones de la ciudad para marca personal y más.', href: '/sesion-de-fotos-buenos-aires/' },
    ],
  },
];
