import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, type CTA_Context } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  context?: CTA_Context;
  label?: string;
  hidden?: boolean;
}

const CTA_LABELS: Record<CTA_Context, string> = {
  general: 'Consultar fecha por WhatsApp',
  quince: 'Estoy organizando un 15',
  wedding: 'Consultar casamiento',
  corporate: 'Solicitar cobertura corporativa',
  portfolio: 'Quiero este estilo',
  contact: 'Pedir propuesta por WhatsApp',
};

export const StickyWhatsAppBar: React.FC<Props> = ({ context = 'general', label, hidden }) => {
  if (hidden) return null;

  const displayLabel = label || CTA_LABELS[context] || CTA_LABELS.general;

  const handleClick = () => {
    trackWhatsAppClick(context);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800/50 px-4 py-3">
        <a
          href={getWhatsAppUrl(context)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center justify-center gap-2.5 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-green-900/20"
        >
          <MessageCircle size={20} />
          <span className="text-sm uppercase tracking-wide">{displayLabel}</span>
        </a>
      </div>
    </div>
  );
};
