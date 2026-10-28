import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { PHOTOSHOOTS } from '../pages/photoshootData.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://frameba.com.ar';
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
// Reuse the site's configured tracking without changing the existing pages.
const template = await readFile(path.join(root, 'index.html'), 'utf8');
const tracking = [...template.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)]
  .map(match => match[0]).filter(script => /googletagmanager|gtag\(/.test(script)).join('\n');
const trackingFallback = template.match(/<noscript>\s*<iframe[^>]*googletagmanager[\s\S]*?<\/noscript>/)?.[0] ?? '';
const alternates = PHOTOSHOOTS.map(page => `<link rel="alternate" hreflang="${page.lang}" href="${origin}${page.route}" />`).join('\n');
const languageNames = { es: 'Español', en: 'English', 'pt-BR': 'Português' };
const menuLabels = { es: 'Abrir menú', en: 'Open menu', 'pt-BR': 'Abrir menu' };
const navIds = ['sesiones', 'lugares', 'proceso'];
const heroPhotos = {
  skyline: '/images/home-atardecer-horizontal.webp',
  featured: '/images/photoshoot-dsc01546.webp',
  mobile: '/images/photoshoot-mobile-dsc01629.webp',
};
const homeDetails = {
  es: [
    ['Sesiones personales', 'Parejas, familias y viajeros'],
    ['Buenos Aires', 'Locaciones elegidas para vos'],
    ['Tu historia', 'Fotos naturales y cuidadas'],
  ],
  en: [
    ['Private photoshoots', 'Couples, families & travelers'],
    ['Buenos Aires', 'Locations chosen around you'],
    ['Your story', 'Natural, considered photographs'],
  ],
  'pt-BR': [
    ['Ensaios pessoais', 'Casais, famílias e viajantes'],
    ['Buenos Aires', 'Locais escolhidos para você'],
    ['Sua história', 'Fotos naturais e cuidadas'],
  ],
};
const photoLabels = {
  es: ['Retrato al atardecer con el skyline de Buenos Aires', 'Retrato personal junto a una escultura en Buenos Aires'],
  en: ['Portrait at sunset with the Buenos Aires skyline', 'Personal portrait beside a sculpture in Buenos Aires'],
  'pt-BR': ['Retrato ao pôr do sol com o skyline de Buenos Aires', 'Retrato pessoal junto a uma escultura em Buenos Aires'],
};

for (const page of PHOTOSHOOTS) {
  const url = origin + page.route;
  const whatsapp = `https://wa.me/5491170671050?text=${encodeURIComponent(page.message)}`;
  const cta = `<a class="button" href="${escape(whatsapp)}">${escape(page.cta)} <span aria-hidden="true">↗</span></a>`;
  const heroHeading = page.lang === 'es'
    ? 'Sesión de<span class="mobile-title-break"></span> fotos en<span class="mobile-title-break"></span> Buenos Aires'
    : escape(page.h1);
  const mobileRailLabel = { es: 'SESIÓN<br />DE FOTOS', en: 'PHOTO<br />SESSION', 'pt-BR': 'SESSÃO<br />DE FOTOS' }[page.lang];
  const graph = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${url}#page`, url, name: page.title, description: page.description, inLanguage: page.lang, mainEntity: { '@id': `${url}#service` } },
      { '@type': 'Service', '@id': `${url}#service`, url, name: page.h1, description: page.description, areaServed: { '@type': 'City', name: 'Buenos Aires' }, provider: { '@type': 'Organization', '@id': `${origin}/#business`, name: 'Frame Estudio', url: `${origin}/`, telephone: '+5491170671050' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: { es: 'Inicio', en: 'Home', 'pt-BR': 'Início' }[page.lang] ?? 'Inicio', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: page.h1, item: url },
      ] },
    ],
  };
  const html = `<!DOCTYPE html>
<html lang="${page.lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${url}" />
${alternates}
<link rel="alternate" hreflang="x-default" href="${origin}${PHOTOSHOOTS[0].route}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:locale" content="${page.locale}" />
<meta property="og:site_name" content="Frame Estudio" />
<meta property="og:image" content="${origin}/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(page.title)}" />
<meta name="twitter:description" content="${escape(page.description)}" />
<meta name="twitter:image" content="${origin}/og-image.png" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&amp;display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/styles/photoshoots.css" />
<script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>
${tracking}
</head>
<body>
${trackingFallback}
<a class="skip" href="#main">${escape(page.skip)}</a>
<header class="header wrap">
  <a class="brand" href="/" aria-label="${escape(page.home)}">FRAME<span>ESTUDIO</span></a>
  <nav class="section-nav" aria-label="${escape(page.explore)}">${page.nav.map((label, i) => `<a href="#${navIds[i]}">${escape(label)}</a>`).join('')}<a class="header-contact" href="${escape(whatsapp)}">${escape(page.cta)}</a></nav>
  <nav class="languages" aria-label="${escape(page.languageLabel)}">${PHOTOSHOOTS.map(alternate => `<a href="${alternate.route}" lang="${alternate.lang}" hreflang="${alternate.lang}"${page.lang === alternate.lang ? ' aria-current="page"' : ''}>${languageNames[alternate.lang]}</a>`).join('')}</nav>
  <details class="mobile-menu"><summary aria-label="${menuLabels[page.lang]}"><span></span><span></span><span class="sr-only">${menuLabels[page.lang]}</span></summary><nav aria-label="${escape(page.explore)}">${page.nav.map((label, i) => `<a href="#${navIds[i]}">${escape(label)}</a>`).join('')}<a href="${escape(whatsapp)}">${escape(page.cta)}</a><div class="mobile-languages" aria-label="${escape(page.languageLabel)}">${PHOTOSHOOTS.map(alternate => `<a href="${alternate.route}" lang="${alternate.lang}" hreflang="${alternate.lang}"${page.lang === alternate.lang ? ' aria-current="page"' : ''}>${languageNames[alternate.lang]}</a>`).join('')}</div></nav></details>
</header>
<main id="main">
  <section class="hero editorial-hero wrap">
    <img class="mobile-hero-photo" src="${heroPhotos.mobile}" alt="${escape(photoLabels[page.lang][0])}" width="1400" height="2491" fetchpriority="high" decoding="async" />
    <div class="mobile-hero-rail" aria-hidden="true"><span>${mobileRailLabel}</span></div>
    <div class="hero-copy">
      <p class="eyebrow"><span class="hero-index">01</span><span class="eyebrow-rule"></span>${escape(page.eyebrow)}</p>
      <h1>${heroHeading}</h1>
      <p class="intro">${escape(page.intro)}</p>
      <div class="actions">${cta}<a class="text-link" href="#sesiones">${escape(page.explore)} <span aria-hidden="true">↓</span></a></div>
    </div>
    <div class="editorial-gallery editorial-gallery--featured" aria-label="${escape(page.artFoot)}">
      <figure class="gallery-landscape"><img src="${heroPhotos.skyline}" alt="${escape(photoLabels[page.lang][0])}" width="1536" height="1024" fetchpriority="high" decoding="async" /></figure>
      <figure class="gallery-portrait gallery-portrait--featured"><img src="${heroPhotos.featured}" alt="${escape(photoLabels[page.lang][1])}" width="3480" height="6192" loading="eager" decoding="async" /></figure>
    </div>
    <ul class="details">${homeDetails[page.lang].map(([title, text]) => `<li><span>${escape(title)}</span><small>${escape(text)}</small></li>`).join('')}</ul>
  </section>
  ${page.sections.map((section, i) => `<section id="${section.id}" class="content-section${i % 2 ? ' tinted' : ''}"><div class="wrap"><div class="section-heading"><p class="eyebrow">0${i + 1} / ${escape(section.label)}</p><div><h2>${escape(section.title)}</h2><p class="section-intro">${escape(section.text)}</p></div></div>${section.cards ? `<div class="cards">${section.cards.map(([title, text]) => `<article><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join('')}</div>` : ''}</div></section>`).join('\n')}
  <section class="faq wrap"><p class="eyebrow">FRAME / FAQ</p><h2>${escape(page.faqTitle)}</h2><div class="questions">${page.faqs.map(([question, answer]) => `<details><summary>${escape(question)}</summary><p>${escape(answer)}</p></details>`).join('')}</div></section>
  <section class="closing"><div class="wrap"><p class="eyebrow">BUENOS AIRES / FRAME</p><h2>${escape(page.closing)}</h2><p>${escape(page.closingText)}</p>${cta}</div></section>
</main>
<footer class="wrap footer"><a class="brand" href="/" aria-label="${escape(page.home)}">FRAME<span>ESTUDIO</span></a><p>${escape(page.footer)}</p>${page.lang === 'es' ? '<nav class="footer-related" aria-label="Otras sesiones"><a href="/book-15-anos-buenos-aires/">Book de fotos de 15 años</a><a href="/fotografia-corporativa-buenos-aires/">Fotografía corporativa y LinkedIn</a><a href="/casos/sesion-novios-recoleta-marcelo-noelia/">Sesión de novios en Recoleta</a></nav>' : ''}<a href="${escape(whatsapp)}">WhatsApp ↗</a></footer>
</body>
</html>
`;
  const directory = path.join(root, page.route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}

// Append only the new URLs. Existing entries and their lastmod values stay intact.
const sitemapFile = path.join(root, 'public/sitemap.xml');
let sitemap = await readFile(sitemapFile, 'utf8');
for (const page of PHOTOSHOOTS) {
  if (!sitemap.includes(`<loc>${origin}${page.route}</loc>`)) {
    sitemap = sitemap.replace('</urlset>', `   <url><loc>${origin}${page.route}</loc><lastmod>2026-09-18</lastmod></url>\n</urlset>`);
  }
}
await writeFile(sitemapFile, sitemap);
console.log(`Prerendered ${PHOTOSHOOTS.length} localized photoshoot pages.`);
