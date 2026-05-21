declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export function trackWhatsAppClick(ctaContext: string): void {
  // Push to dataLayer for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'click_whatsapp',
    cta_context: ctaContext,
    page_location: window.location.pathname,
  });

  // Fire Google Ads conversion if available
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion();
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
