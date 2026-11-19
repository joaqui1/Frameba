// Static pages do not hydrate the React WhatsAppLink component.
document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href^="https://wa.me/"]');
  if (!link) return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_whatsapp',
      cta_context: document.body.dataset.whatsappContext,
      page_location: window.location.pathname,
    });
  } catch {
    // Analytics must never block navigation.
  }
});
