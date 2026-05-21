const WHATSAPP_NUMBER = '5491170671050';

type CTA_Context = 'general' | 'quince' | 'wedding' | 'corporate' | 'video' | 'portfolio' | 'contact';

const MESSAGES: Record<CTA_Context, string> = {
  general: 'Hola FRAME, estoy buscando cobertura de foto y video para un evento. ¿Me pasan información?',
  quince: 'Hola FRAME, estoy organizando un 15 y quería consultar disponibilidad. La fecha/zona es:',
  wedding: 'Hola FRAME, estoy organizando un casamiento y quería consultar disponibilidad. La fecha/zona es:',
  corporate: 'Hola FRAME, necesito cobertura de foto y video para un evento corporativo. La fecha/zona es:',
  video: 'Hola FRAME, necesito video para un evento. La fecha, zona y tipo de evento es:',
  portfolio: 'Hola FRAME, me gustó este estilo y quería consultar por una cobertura similar.',
  contact: 'Hola FRAME, quiero consultar por fotografía y video para un evento.',
};

export function getWhatsAppUrl(context: CTA_Context = 'general'): string {
  const text = encodeURIComponent(MESSAGES[context] || MESSAGES.general);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER;
}

export type { CTA_Context };
