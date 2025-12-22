import React from 'react';
import { MessageCircle } from 'lucide-react';

// Declaramos la función que pusimos en el index.html
declare global {
  interface Window { 
    gtag_report_conversion: (url: string) => boolean;
  }
}

export const WhatsAppButton: React.FC = () => {
  // Definimos el número y la URL aquí para usarlos en ambos lados
  const whatsappUrl = "https://wa.me/5491170671050";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Evitamos que el enlace te lleve a WhatsApp inmediatamente
    e.preventDefault();

    // 2. Intentamos disparar la conversión usando la función del index.html
    if (typeof window.gtag_report_conversion === 'function') {
      // Esta función reporta a Google Y LUEGO redirige a la URL
      window.gtag_report_conversion(whatsappUrl);
    } else {
      // 3. Si hay bloqueador de anuncios o falló la carga, abrimos igual
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} // <-- Ahora maneja el evento correctamente
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-zinc-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat Directo
      </span>
    </a>
  );
};