declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackWhatsAppClick(ctaContext: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'click_whatsapp',
    cta_context: ctaContext,
    page_location: window.location.pathname,
  });
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
