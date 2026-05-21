declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export function trackWhatsAppClick(ctaContext: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'click_whatsapp',
    cta_context: ctaContext,
    page_location: window.location.pathname,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17522815085/y71yCIrDv9UbEO3gw6NB',
    });
  }
}

export function trackFormSubmit(pageLocation: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submit',
    page_location: pageLocation,
  });
}

export function trackPortfolioView(pageLocation: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'view_portfolio',
    page_location: pageLocation,
  });
}

export function trackScroll90(pageLocation: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'scroll_90',
    page_location: pageLocation,
  });
}
