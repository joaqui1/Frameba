import type { MouseEvent } from 'react';
import { trackWhatsAppClick } from './analytics';
import { isWhatsAppUrl, openWhatsAppUrl, type CTA_Context } from './whatsapp';

export function onWhatsAppLinkClick(
  e: MouseEvent<HTMLAnchorElement>,
  url: string,
  trackContext?: CTA_Context,
): void {
  if (!isWhatsAppUrl(url)) return;

  e.preventDefault();
  if (trackContext) trackWhatsAppClick(trackContext);
  openWhatsAppUrl(url);
}
