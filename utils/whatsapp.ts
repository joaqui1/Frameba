const WHATSAPP_NUMBER = '5491170671050';

type CTA_Context = 'general' | 'quince' | 'wedding' | 'corporate' | 'video' | 'portfolio' | 'contact';

const MESSAGES: Record<CTA_Context, string> = {
  general: 'Hola Frame Estudio, estoy buscando cobertura de foto y video para un evento. ¿Me pasan información?',
  quince: 'Hola Frame Estudio, estoy organizando un 15 y quería consultar disponibilidad. La fecha/zona es:',
  wedding: 'Hola Frame Estudio, estoy organizando un casamiento y quería consultar disponibilidad. La fecha/zona es:',
  corporate: 'Hola Frame Estudio, necesito cobertura de foto y video para un evento corporativo. La fecha/zona es:',
  video: 'Hola Frame Estudio, necesito video para un evento. La fecha, zona y tipo de evento es:',
  portfolio: 'Hola Frame Estudio, me gustó este estilo y quería consultar por una cobertura similar.',
  contact: 'Hola Frame Estudio, quiero consultar por fotografía y video para un evento.',
};

export function getWhatsAppUrl(context: CTA_Context = 'general'): string {
  const text = encodeURIComponent(MESSAGES[context] || MESSAGES.general);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function isWhatsAppUrl(url: string): boolean {
  return /^https:\/\/wa\.me\//i.test(url);
}

/** Abre WhatsApp (móvil: misma pestaña; desktop: nueva pestaña). */
export function openWhatsAppUrl(url: string): void {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.assign(url);
    return;
  }
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.assign(url);
}

export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER;
}

export type { CTA_Context };
