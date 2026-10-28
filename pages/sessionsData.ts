export interface SessionPhoto {
  file: string;
  alt: string;
  portrait: boolean;
}

export interface SessionStory {
  slug: string;
  folder: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photos: SessionPhoto[];
}

const PORTRAIT = { widths: [640, 1124] as const, height: 2000 };
const LANDSCAPE = { widths: [800, 1600] as const, height: 899 };

export const sessionPhotoSize = (photo: SessionPhoto) => {
  const spec = photo.portrait ? PORTRAIT : LANDSCAPE;
  return { width: spec.widths[1], height: spec.height, widths: spec.widths };
};
export const sessionPhotoSrc = (story: SessionStory, photo: SessionPhoto, width: number) => `/images/${story.folder}/${photo.file}-${width}.webp`;

/** Real couple session (not a wedding day). Keep it labeled as a session wherever it is shown. */
export const WEDDING_COUPLE_SESSION: SessionStory = {
  slug: 'sesion-novios-recoleta',
  folder: 'sesion-novios-recoleta',
  eyebrow: 'Sesión de novios',
  title: 'Sesión de novios en Recoleta: Marcelo y Noelia',
  paragraphs: [
    'Antes del casamiento, muchas parejas eligen una sesión de fotos tranquila, sin el apuro del día de la boda. Con Marcelo y Noelia recorrimos las columnas y la escalinata de la Facultad de Derecho y la Floralis Genérica, con dos cambios de ropa.',
    'La idea fue la misma que en una cobertura: poca pose, indicaciones simples y tiempo para que aparezcan los gestos propios de la pareja. Una sesión así sirve para un save the date, las invitaciones o para proyectar en la fiesta.',
  ],
  photos: [
    { file: 'sesion-novios-caminando-columnas-facultad-derecho', alt: 'Marcelo y Noelia caminando de la mano frente a las columnas de la Facultad de Derecho', portrait: true },
    { file: 'sesion-novios-ramo-escalinata-facultad-derecho', alt: 'Novios abrazados con un ramo de flores blancas en la escalinata de la Facultad de Derecho', portrait: false },
    { file: 'sesion-novios-upa-columnas-facultad-derecho', alt: 'Marcelo levanta a Noelia en brazos frente a las columnas de la Facultad de Derecho', portrait: true },
    { file: 'sesion-novios-sentados-columnas-facultad-derecho', alt: 'Pareja sentada junto a una columna, frente con frente, en una sesión de novios', portrait: false },
    { file: 'sesion-novios-abrazo-escalinata-facultad-derecho', alt: 'Novios abrazados y sonrientes en la escalinata de la Facultad de Derecho', portrait: true },
    { file: 'sesion-novios-abrazo-floralis-generica', alt: 'Pareja abrazada frente a la Floralis Genérica en Recoleta', portrait: false },
    { file: 'sesion-novios-frente-con-frente-recoleta', alt: 'Novios frente con frente tomados de las manos con la ciudad de fondo', portrait: true },
    { file: 'sesion-novios-retrato-pareja-parque-recoleta', alt: 'Retrato de la pareja mirándose con árboles y edificios de Recoleta de fondo', portrait: false },
    { file: 'sesion-novios-abrazo-frente-floralis-generica', alt: 'Abrazo de la pareja con los pétalos de la Floralis Genérica detrás', portrait: true },
    { file: 'sesion-novios-mirada-desenfoque-recoleta', alt: 'Marcelo mira a Noelia, desenfocada en primer plano, durante la sesión de novios', portrait: true },
  ],
};
