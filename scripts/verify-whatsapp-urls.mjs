/**
 * Verifica que cada contexto de CTA genere URL wa.me válida.
 */
const WHATSAPP_NUMBER = '5491170671050';
const CONTEXTS = ['general', 'quince', 'wedding', 'corporate', 'video', 'portfolio', 'contact'];
const MESSAGES = {
  general: 'Hola FRAME, estoy buscando cobertura de foto y video para un evento. ¿Me pasan información?',
  quince: 'Hola FRAME, estoy organizando un 15 y quería consultar disponibilidad. La fecha/zona es:',
  wedding: 'Hola FRAME, estoy organizando un casamiento y quería consultar disponibilidad. La fecha/zona es:',
  corporate: 'Hola FRAME, necesito cobertura de foto y video para un evento corporativo. La fecha/zona es:',
  video: 'Hola FRAME, necesito video para un evento. La fecha, zona y tipo de evento es:',
  portfolio: 'Hola FRAME, me gustó este estilo y quería consultar por una cobertura similar.',
  contact: 'Hola FRAME, quiero consultar por fotografía y video para un evento.',
};

let failed = false;
for (const ctx of CONTEXTS) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[ctx])}`;
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== 'wa.me' || !parsed.searchParams.get('text')) {
      console.error(`FAIL ${ctx}: URL inválida`, url);
      failed = true;
    } else {
      console.log(`OK ${ctx}`);
    }
  } catch (e) {
    console.error(`FAIL ${ctx}:`, e.message);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
