import React from 'react';
import { MessageCircle } from 'lucide-react';

// Declaramos la función con el parámetro opcional
declare global {
  interface Window { 
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5491170671050";

  const handleClick = () => {
    // Solo avisamos a Google si la función existe.
    // Pasamos undefined (vacío) para que Google cuente el clic 
    // pero NO intente redirigir la página, ya que de eso se encarga el <a>
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} 
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