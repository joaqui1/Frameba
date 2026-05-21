import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, type CTA_Context } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  context?: CTA_Context;
}

export const WhatsAppButton: React.FC<Props> = ({ context = 'general' }) => {
  const handleClick = () => {
    trackWhatsAppClick(context);
  };

  return (
    <a
      href={getWhatsAppUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-8 right-6 z-50 group hidden md:flex items-center justify-center bg-brand-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-110"
      aria-label="Consultar por WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute right-full mr-3 bg-white text-zinc-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat Directo
      </span>
    </a>
  );
};