import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, type CTA_Context } from '../utils/whatsapp';
import { onWhatsAppLinkClick } from '../utils/whatsappClick';

interface Props {
  context?: CTA_Context;
  label?: string;
  hidden?: boolean;
}

const CTA_LABELS: Record<CTA_Context, string> = {
  general: 'Consultar fecha por WhatsApp',
  quince: 'Estoy organizando un 15',
  wedding: 'Consultar casamiento',
  corporate: 'Solicitar cobertura',
  video: 'Consultar video para mi evento',
  portfolio: 'Quiero este estilo',
  contact: 'Pedir propuesta por WhatsApp',
};

export const StickyWhatsAppBar: React.FC<Props> = ({ context = 'general', label, hidden }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('[data-page-hero]');
    const finalCta = document.querySelector('[data-page-final-cta]');

    let heroInView = Boolean(hero);
    let finalCtaInView = false;

    const updateVisibility = () => {
      if (hero) {
        setShowBar(!heroInView && !finalCtaInView);
        return;
      }

      setShowBar(window.scrollY > 200 && !finalCtaInView);
    };

    const observers: IntersectionObserver[] = [];

    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroInView = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0 }
      );
      heroObserver.observe(hero);
      observers.push(heroObserver);
    }

    if (finalCta) {
      const finalCtaObserver = new IntersectionObserver(
        ([entry]) => {
          finalCtaInView = entry.isIntersecting;
          updateVisibility();
        },
        { threshold: 0 }
      );
      finalCtaObserver.observe(finalCta);
      observers.push(finalCtaObserver);
    }

    if (!hero) {
      const onScroll = () => updateVisibility();
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      updateVisibility();

      return () => {
        window.removeEventListener('scroll', onScroll);
        observers.forEach((observer) => observer.disconnect());
      };
    }

    updateVisibility();

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const displayLabel = label || CTA_LABELS[context] || CTA_LABELS.general;
  const whatsappUrl = getWhatsAppUrl(context);
  const isVisible = !hidden && showBar;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800/50 px-4 py-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => onWhatsAppLinkClick(e, whatsappUrl, context)}
          className="flex items-center justify-center gap-2.5 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-green-900/20"
        >
          <MessageCircle size={20} />
          <span className="text-sm uppercase tracking-wide">{displayLabel}</span>
        </a>
      </div>
    </div>
  );
};
