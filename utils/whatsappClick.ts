import type { MouseEvent } from 'react';
import { trackWhatsAppClick } from './analytics';
import { isWhatsAppUrl, type CTA_Context } from './whatsapp';

export function onWhatsAppLinkClick(
  _e: MouseEvent<HTMLAnchorElement>,
  url: string,
  trackContext?: CTA_Context,
): void {
  if (!isWhatsAppUrl(url)) return;

  try {
    if (trackContext) trackWhatsAppClick(trackContext);
  } catch {
    // Analytics must never block navigation.
  }
}
