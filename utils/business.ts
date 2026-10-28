export const BUSINESS_NAME = 'Frame Estudio';

export const PHONE_E164 = '+5491170671050';
export const PHONE_DISPLAY = '+54 9 11 7067-1050';
export const PHONE_TEL = 'tel:+5491170671050';

export const OPENING_HOURS_LABEL = 'Lunes a Sábado · 9:00 a 20:00';
export const OPENING_HOURS_SPECIFICATION = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '09:00',
  closes: '20:00',
};

/** Perfil de Google Business en Maps (CID extraído del knowledge panel). */
export const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps?cid=14896937321842328795';

/** Calificación pública en Google Maps. Actualizar cuando cambie en la ficha (no redondear ni inflar). */
export const GOOGLE_RATING = { value: '5,0', count: 18 };
