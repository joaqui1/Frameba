import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, type CTA_Context } from '../utils/whatsapp';
import { onWhatsAppLinkClick } from '../utils/whatsappClick';

interface Props {
  context: CTA_Context;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconSize?: number;
  onNavigate?: () => void;
}

/** Enlace a WhatsApp con href correcto y tracking que no bloquea la navegación. */
export const WhatsAppLink: React.FC<Props> = ({
  context,
  children,
  className = '',
  showIcon = true,
  iconSize = 18,
  onNavigate,
}) => {
  const url = getWhatsAppUrl(context);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        onWhatsAppLinkClick(e, url, context);
        onNavigate?.();
      }}
      className={className}
    >
      {showIcon && <MessageCircle size={iconSize} aria-hidden />}
      {children}
    </a>
  );
};
