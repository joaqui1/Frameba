import React from 'react';
import { MessageCircle } from 'lucide-react';

// Esto evita que TypeScript marque error porque no conoce 'gtag'
declare global {
  interface Window { gtag: any; }
}

export const WhatsAppButton: React.FC = () => {
  
  const handleClick = () => {
    // Dispara la conversión a Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-17522815085/maHaCPnNk5kbEO3gw6NB',
          'transaction_id': ''
      });
    }
  };

  return (
    <a
      href="https://wa.me/5491170671050"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} // <-- AQUÍ OCURRE LA MAGIA
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