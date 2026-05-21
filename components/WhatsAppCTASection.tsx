import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, type CTA_Context } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  context?: CTA_Context;
}

export const WhatsAppCTASection: React.FC<Props> = ({
  title = 'Hablemos de tu evento',
  subtitle = 'Escribinos por WhatsApp con el tipo de evento, fecha estimada y zona. Te respondemos en el día.',
  ctaLabel = 'Consultar por WhatsApp',
  context = 'general',
}) => {
  const handleClick = () => {
    trackWhatsAppClick(context);
  };

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
            {subtitle}
          </p>
          <a
            href={getWhatsAppUrl(context)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-green-900/20 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
