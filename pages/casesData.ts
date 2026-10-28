import type { CTA_Context } from '../utils/whatsapp';

export interface CasePhoto {
  /** Base name inside /images/<folder>/, without the -800/-1600 suffix. */
  file: string;
  alt: string;
  caption?: string;
  /** Vertical photo (exported at 640/1124 px wide instead of 800/1600). */
  portrait?: boolean;
}

export interface CaseReview {
  author: string;
  rating: number;
  excerpt: string;
  source: string;
  url: string;
  when: string;
}

export interface CaseStudy {
  slug: string;
  folder: string;
  title: string;
  description: string;
  h1: string;
  badge: string;
  breadcrumbLabel: string;
  context: CTA_Context;
  cta: string;
  dateIso?: string;
  dateLabel?: string;
  location: string;
  eventType: string;
  service: string;
  intro: string;
  sections: { id: string; title: string; paragraphs: string[]; photos?: string[] }[];
  photos: CasePhoto[];
  /** Photos shown as a preview on the service page. */
  highlight: string[];
  review?: CaseReview;
  parent: { label: string; href: string };
  /** File of the hero photo; defaults to the first photo. */
  lead?: string;
  /** 'masonry' keeps vertical and horizontal photos uncropped. */
  layout?: 'grid' | 'masonry';
  previewLabel: string;
  closing: { title: string; text: string; links: { label: string; href: string }[] };
  /** Extra schema.org node describing what the case is about (e.g. the event). */
  about?: Record<string, unknown>;
}

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps?cid=14896937321842328795';

export const casePhotoSize = (photo: CasePhoto) => photo.portrait
  ? { widths: [640, 1124] as const, width: 1124, height: 2000 }
  : { widths: [800, 1600] as const, width: 1600, height: 899 };
export const casePhotoSrc = (folder: string, file: string, width: number) => `/images/${folder}/${file}-${width}.webp`;
export const casePhotoSrcSet = (folder: string, photo: CasePhoto) => casePhotoSize(photo).widths.map(width => `${casePhotoSrc(folder, photo.file, width)} ${width}w`).join(', ');
export const casePhotoUrl = (folder: string, photo: CasePhoto) => casePhotoSrc(folder, photo.file, casePhotoSize(photo).width);

export const CASES: CaseStudy[] = [
  {
    slug: 'ekoparty-2026-cobertura-foto-video',
    folder: 'ekoparty-2026',
    title: 'Cobertura de foto y video en Ekoparty 2026 | Frame Estudio',
    description: 'Caso real: fotografía y video para una empresa de ciberseguridad en Ekoparty 2026, Buenos Aires. Stand, charlas, competencia CTF y premiación.',
    h1: 'Cobertura de foto y video en Ekoparty 2026',
    badge: 'Caso real · Evento corporativo',
    breadcrumbLabel: 'Ekoparty 2026',
    context: 'corporate',
    cta: 'Consultar cobertura para mi evento',
    dateIso: '2026-10-07',
    dateLabel: '7 al 9 de octubre de 2026',
    location: 'Buenos Aires',
    eventType: 'Conferencia de ciberseguridad',
    service: 'Fotografía y video',
    intro: 'Ekoparty se presenta como la conferencia de hacking y ciberseguridad más grande de Latinoamérica. En la edición 2026 cubrimos con foto y video la participación de una empresa de ciberseguridad: su stand, las charlas, la competencia CTF del Red Team Space y la premiación en el escenario principal.',
    sections: [
      {
        id: 'stand',
        title: 'Stand, equipo y networking',
        paragraphs: [
          'Una feria de tecnología pasa rápido y con mucha gente al mismo tiempo. Registramos el stand durante la jornada: el equipo de la empresa, los asistentes que se acercaban, el merchandising y los detalles de marca que después sirven para redes y LinkedIn.',
          'La luz en estos espacios es difícil: LED de colores, carpas rojas y zonas oscuras. En la edición corregimos el color para que las caras y los colores de la marca se vean naturales.',
        ],
        photos: ['ekoparty-2026-equipo-stand-foto-grupal', 'ekoparty-2026-stand-merchandising-asistentes', 'ekoparty-2026-detalles-stand-mascaras-agenda', 'ekoparty-2026-stand-retrato-asistentes'],
      },
      {
        id: 'charlas',
        title: 'Charlas y competencia CTF',
        paragraphs: [
          'Cubrimos charlas en sala con público y la competencia CTF, donde los equipos compiten resolviendo desafíos de seguridad frente a un ranking en pantalla. Son momentos largos y con poca acción visible, así que buscamos los gestos, la concentración y el contexto que cuentan qué estaba pasando.',
          'También registramos la grabación de contenido para redes que se hacía en los stands.',
        ],
        photos: ['ekoparty-2026-charla-escenario-publico', 'ekoparty-2026-speaker-charla-microfono', 'ekoparty-2026-competencia-ctf-red-team-space', 'ekoparty-2026-entrevista-stand-grabacion'],
      },
      {
        id: 'premiacion',
        title: 'Premiación en el escenario principal',
        paragraphs: [
          'La entrega de premios del CTF fue el momento más importante para la marca: ganadores, sponsors y organizadores juntos en el escenario. Cubrimos cada puesto, las entregas y la foto grupal final, con el logo del evento de fondo.',
          'Son fotos pensadas para comunicar la participación de la marca y felicitar a los ganadores en redes.',
        ],
        photos: ['ekoparty-2026-premiacion-ctf-entrega-primer-puesto', 'ekoparty-2026-premiacion-ctf-primer-puesto', 'ekoparty-2026-premiacion-ctf-segundo-puesto', 'ekoparty-2026-premiacion-ctf-tercer-puesto', 'ekoparty-2026-premiacion-ctf-saludo-escenario', 'ekoparty-2026-premiacion-ctf-escenario', 'ekoparty-2026-foto-grupal-escenario-ekoparty'],
      },
    ],
    photos: [
      { file: 'ekoparty-2026-premiacion-ctf-primer-puesto', alt: 'Ganador del primer puesto del CTF posando con su certificado y premio en el escenario de Ekoparty 2026', caption: 'Primer puesto del CTF del Red Team Space.' },
      { file: 'ekoparty-2026-premiacion-ctf-entrega-primer-puesto', alt: 'Entrega del certificado de primer puesto del CTF en el escenario de Ekoparty', caption: 'Entrega del primer puesto, con el organizador en el micrófono.' },
      { file: 'ekoparty-2026-premiacion-ctf-segundo-puesto', alt: 'Equipo del segundo puesto del CTF sonriendo con su certificado en el escenario', caption: 'Segundo puesto del CTF.' },
      { file: 'ekoparty-2026-premiacion-ctf-tercer-puesto', alt: 'Equipo del tercer puesto del CTF celebrando en el escenario con sponsors y organizadores', caption: 'Tercer puesto, con sponsors y organizadores.' },
      { file: 'ekoparty-2026-premiacion-ctf-saludo-escenario', alt: 'Saludo entre un participante y el organizador durante la premiación del CTF', caption: 'El saludo después de la entrega.' },
      { file: 'ekoparty-2026-premiacion-ctf-escenario', alt: 'Organizadores y sponsors subiendo los premios al escenario frente a la pantalla de Ekoparty', caption: 'Preparando la entrega de premios.' },
      { file: 'ekoparty-2026-foto-grupal-escenario-ekoparty', alt: 'Foto grupal de participantes y organizadores en el escenario principal de Ekoparty 2026', caption: 'Foto grupal en el escenario principal.' },
      { file: 'ekoparty-2026-equipo-stand-foto-grupal', alt: 'Equipo de la empresa posando sonriente frente a su stand en Ekoparty', caption: 'El equipo en el stand.' },
      { file: 'ekoparty-2026-stand-merchandising-asistentes', alt: 'Asistentes con credenciales de Ekoparty en la mesa de merchandising del Red Team Space', caption: 'Movimiento en la mesa de merchandising.' },
      { file: 'ekoparty-2026-detalles-stand-mascaras-agenda', alt: 'Máscaras con luces LED rojas, stickers y la agenda de charlas sobre una mesa del stand', caption: 'Detalles del stand: agenda, stickers y máscaras LED.' },
      { file: 'ekoparty-2026-stand-retrato-asistentes', alt: 'Dos asistentes posando frente al stand con la credencial de Ekoparty', caption: 'Retratos de asistentes en el stand.' },
      { file: 'ekoparty-2026-competencia-ctf-red-team-space', alt: 'Participantes concentrados en sus laptops durante la competencia CTF con el ranking en pantalla', caption: 'La competencia CTF, con el ranking en vivo.' },
      { file: 'ekoparty-2026-charla-escenario-publico', alt: 'Speaker presentando una charla sobre seguridad de routers e IoT frente al público en sala', caption: 'Charla en sala con público.' },
      { file: 'ekoparty-2026-speaker-charla-microfono', alt: 'Speaker hablando con micrófono durante su charla en Ekoparty', caption: 'Speaker durante su presentación.' },
      { file: 'ekoparty-2026-entrevista-stand-grabacion', alt: 'Grabación de una entrevista con celular y estabilizador en un stand de Ekoparty', caption: 'Grabación de contenido para redes en un stand.' },
    ],
    highlight: [
      'ekoparty-2026-premiacion-ctf-primer-puesto',
      'ekoparty-2026-competencia-ctf-red-team-space',
      'ekoparty-2026-charla-escenario-publico',
      'ekoparty-2026-equipo-stand-foto-grupal',
      'ekoparty-2026-stand-merchandising-asistentes',
      'ekoparty-2026-foto-grupal-escenario-ekoparty',
    ],
    review: {
      author: 'Madison Bermudez',
      rating: 5,
      excerpt: 'Excelente experiencia! Contratamos los servicios de Joaquin para fotografía y video durante nuestra participación en…',
      source: 'Reseña en Google',
      url: GOOGLE_REVIEWS_URL,
      when: 'Octubre de 2026',
    },
    parent: { label: 'Eventos corporativos', href: '/eventos-corporativos-buenos-aires/' },
    previewLabel: 'Ver el caso completo y las 15 fotos',
    closing: {
      title: '¿Tu empresa participa en un evento?',
      text: 'Cubrimos conferencias, ferias, stands, charlas y premiaciones en Buenos Aires, CABA y GBA, con fotografía, video y piezas para redes.',
      links: [
        { label: 'Ver el servicio de eventos corporativos', href: '/eventos-corporativos-buenos-aires/' },
        { label: 'Ver video para eventos', href: '/video-para-eventos-buenos-aires/' },
      ],
    },
    about: { '@type': 'Event', name: 'Ekoparty 2026', startDate: '2026-10-07', endDate: '2026-10-09', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', location: { '@type': 'Place', name: 'Buenos Aires', address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' } }, url: 'https://ekoparty.org/' },
  },
  {
    slug: 'sesion-novios-recoleta-marcelo-noelia',
    folder: 'sesion-novios-recoleta',
    title: 'Sesión de novios en Recoleta: Marcelo y Noelia | Frame Estudio',
    description: 'Sesión de fotos de novios en Recoleta, Buenos Aires: Facultad de Derecho y Floralis Genérica. Fotos para save the date, invitaciones o la fiesta.',
    h1: 'Sesión de novios en Recoleta: Marcelo y Noelia',
    badge: 'Caso real · Sesión de novios',
    breadcrumbLabel: 'Sesión de novios en Recoleta',
    context: 'wedding',
    cta: 'Consultar sesión de novios',
    dateIso: '2026-10-18',
    dateLabel: '18 de octubre de 2026',
    location: 'Recoleta, Buenos Aires',
    eventType: 'Sesión de novios',
    service: 'Fotografía',
    intro: 'Antes del casamiento, muchas parejas eligen una sesión de fotos tranquila, sin el apuro del día de la boda. Con Marcelo y Noelia recorrimos las columnas y la escalinata de la Facultad de Derecho y la Floralis Genérica, en Recoleta, con dos cambios de ropa.',
    lead: 'sesion-novios-ramo-escalinata-facultad-derecho',
    layout: 'masonry',
    sections: [
      {
        id: 'facultad-de-derecho',
        title: 'Columnas y escalinata de la Facultad de Derecho',
        paragraphs: [
          'Las columnas de la Facultad de Derecho dan escala y una luz pareja aun en un día nublado. Trabajamos fotos caminando, abrazos en la escalinata y momentos más cercanos, con indicaciones simples para que la pareja se mueva con naturalidad.',
          'El primer cambio de ropa, en tonos claros, contrasta con la piedra gris y deja que la pareja sea el centro de la foto.',
        ],
        photos: ['sesion-novios-caminando-columnas-facultad-derecho', 'sesion-novios-upa-columnas-facultad-derecho', 'sesion-novios-abrazo-escalinata-facultad-derecho', 'sesion-novios-sentados-columnas-facultad-derecho', 'sesion-novios-frente-con-frente-recoleta', 'sesion-novios-mirada-desenfoque-recoleta'],
      },
      {
        id: 'floralis-generica',
        title: 'Floralis Genérica y el parque',
        paragraphs: [
          'Con el segundo cambio, en negro, fuimos a la Floralis Genérica y al parque de alrededor. El acero de la flor refleja el cielo y suma un fondo distinto sin salir de Recoleta.',
          'Una sesión así sirve para un save the date, las invitaciones, un cuadro o para proyectar en la fiesta.',
        ],
        photos: ['sesion-novios-abrazo-floralis-generica', 'sesion-novios-abrazo-frente-floralis-generica', 'sesion-novios-retrato-pareja-parque-recoleta'],
      },
    ],
    photos: [
      { file: 'sesion-novios-ramo-escalinata-facultad-derecho', alt: 'Novios abrazados con un ramo de flores blancas en la escalinata de la Facultad de Derecho', caption: 'Con ramo en la escalinata de la Facultad de Derecho.' },
      { file: 'sesion-novios-caminando-columnas-facultad-derecho', alt: 'Marcelo y Noelia caminando de la mano frente a las columnas de la Facultad de Derecho', caption: 'Caminando entre las columnas.', portrait: true },
      { file: 'sesion-novios-upa-columnas-facultad-derecho', alt: 'Marcelo levanta a Noelia en brazos frente a las columnas de la Facultad de Derecho', caption: 'Un momento espontáneo frente a la facultad.', portrait: true },
      { file: 'sesion-novios-abrazo-escalinata-facultad-derecho', alt: 'Novios abrazados y sonrientes en la escalinata de la Facultad de Derecho', caption: 'Retrato de la pareja en la escalinata.', portrait: true },
      { file: 'sesion-novios-sentados-columnas-facultad-derecho', alt: 'Pareja sentada junto a una columna, frente con frente, en una sesión de novios', caption: 'Frente con frente junto a una columna.' },
      { file: 'sesion-novios-frente-con-frente-recoleta', alt: 'Novios frente con frente tomados de las manos con la ciudad de fondo', caption: 'Un momento cercano con la ciudad de fondo.', portrait: true },
      { file: 'sesion-novios-mirada-desenfoque-recoleta', alt: 'Marcelo mira a Noelia, desenfocada en primer plano, durante la sesión de novios', caption: 'Juego de foco entre los dos.', portrait: true },
      { file: 'sesion-novios-abrazo-floralis-generica', alt: 'Pareja abrazada frente a la Floralis Genérica en Recoleta', caption: 'Frente a la Floralis Genérica.' },
      { file: 'sesion-novios-abrazo-frente-floralis-generica', alt: 'Abrazo de la pareja con los pétalos de la Floralis Genérica detrás', caption: 'El acero de la flor como fondo.', portrait: true },
      { file: 'sesion-novios-retrato-pareja-parque-recoleta', alt: 'Retrato de la pareja mirándose con árboles y edificios de Recoleta de fondo', caption: 'En el parque, con el segundo cambio de ropa.' },
    ],
    highlight: [
      'sesion-novios-caminando-columnas-facultad-derecho',
      'sesion-novios-ramo-escalinata-facultad-derecho',
      'sesion-novios-upa-columnas-facultad-derecho',
      'sesion-novios-abrazo-floralis-generica',
      'sesion-novios-frente-con-frente-recoleta',
      'sesion-novios-sentados-columnas-facultad-derecho',
    ],
    parent: { label: 'Casamientos', href: '/fotografia-video-casamientos-buenos-aires/' },
    previewLabel: 'Ver la sesión completa',
    closing: {
      title: '¿Están organizando su casamiento?',
      text: 'Podemos sumar una sesión de novios antes de la boda y cubrir el civil, la ceremonia y la fiesta con fotografía y video.',
      links: [
        { label: 'Ver fotografía y video para casamientos', href: '/fotografia-video-casamientos-buenos-aires/' },
        { label: 'Qué incluye la cobertura de un casamiento', href: '/blog/fotografo-video-casamiento-que-incluye/' },
        { label: 'Cuántas horas de cobertura contratar', href: '/blog/cuantas-horas-contratar-fotografo-evento/' },
      ],
    },
  },
];

export const getCasePhoto = (study: CaseStudy, file: string) => {
  const photo = study.photos.find(item => item.file === file);
  if (!photo) throw new Error(`Missing case photo ${file}`);
  return photo;
};
