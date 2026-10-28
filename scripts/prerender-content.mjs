import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

// Render the same components and data used in the browser, including all article content.
const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://frameba.com.ar';
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });

try {
  const { OPENING_HOURS_SPECIFICATION } = await server.ssrLoadModule('/utils/business.ts');
  const { Layout } = await server.ssrLoadModule('/components/Layout.tsx');
  const { BLOG_ARTICLES } = await server.ssrLoadModule('/pages/blogData.ts');
  const { NEW_SERVICES } = await server.ssrLoadModule('/pages/newServicesData.ts');
  const { BlogArticlePage } = await server.ssrLoadModule('/pages/BlogArticlePage.tsx');
  const { BlogIndexPage } = await server.ssrLoadModule('/pages/BlogIndexPage.tsx');
  const { NewServicePage } = await server.ssrLoadModule('/pages/NewServicePage.tsx');
  const { CASES, casePhotoUrl, getCasePhoto } = await server.ssrLoadModule('/pages/casesData.ts');
  const { CasePage } = await server.ssrLoadModule('/pages/CasePage.tsx');
  const template = await readFile(path.join(root, 'index.html'), 'utf8');
  const tracking = [...template.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].map(match => match[0]).filter(script => /googletagmanager|gtag\(/.test(script)).join('\n');
  const business = { '@type': 'Organization', '@id': `${origin}/#business`, name: 'Frame Estudio', url: `${origin}/`, logo: `${origin}/og-image.png`, telephone: '+5491170671050' };
  // parent: { name, url } para páginas hijas de un silo (ej. Book de 15 -> 15 años).
  const breadcrumb = (url, label, article = false, parent = null) => {
    const middle = article ? { name: 'Guías', url: `${origin}/blog/` } : parent;
    return { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${origin}/` },
      ...(middle ? [{ '@type': 'ListItem', position: 2, name: middle.name, item: middle.url }] : []),
      { '@type': 'ListItem', position: middle ? 3 : 2, name: label, item: url },
    ] };
  };
  const render = (Component, props, context, label, homeEditorial = false) => renderToString(React.createElement(Layout, { ctaContext: context, ctaLabel: label, homeEditorial }, React.createElement(Component, props)));
  const generatedPaths = [];
  async function emit({ route, title, description, content, entry, data = '', graph, type = 'website', image = `${origin}/og-image.png` }) {
    const url = origin + route;
    const html = `<!DOCTYPE html>
<html lang="es-AR"><head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="${type}" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${escape(title)}" />
<meta property="og:description" content="${escape(description)}" />
<meta property="og:image" content="${escape(image)}" />
<meta property="og:locale" content="es_AR" />
<meta property="og:site_name" content="Frame Estudio" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(title)}" />
<meta name="twitter:description" content="${escape(description)}" />
<meta name="twitter:image" content="${escape(image)}" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=Manrope:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/styles/main.css" />
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [business, ...graph] }).replaceAll('<', '\\u003c')}</script>
${tracking}
</head><body ${data} class="bg-zinc-950 text-white antialiased">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2QT5C76" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div id="root">${content}</div>
<script type="module" src="${entry}"></script>
</body></html>
`;
    const directory = path.join(root, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
    generatedPaths.push(route);
  }
  for (const service of NEW_SERVICES) {
    const route = `/${service.slug}/`;
    await emit({ route, title: service.title, description: service.description, data: `data-service-slug="${service.slug}"`,
      entry: '/pages/new-service.tsx', content: render(NewServicePage, { service }, service.context, service.cta, ['book-15-anos-buenos-aires', 'fotografia-corporativa-buenos-aires'].includes(service.slug)),
      image: service.cover ? origin + service.cover.src : undefined,
      graph: [
        { '@type': 'Service', name: service.h1, description: service.description, url: origin + route, provider: { '@id': business['@id'] }, areaServed: ['Buenos Aires', 'Ciudad Autónoma de Buenos Aires', 'Gran Buenos Aires'] },
        breadcrumb(origin + route, service.h1, false, service.parent ? { name: service.parent.label, url: origin + service.parent.href } : null),
      ],
    });
  }
  // Real event case studies: /casos/<slug>/, children of their service page.
  const caseImages = {};
  for (const study of CASES) {
    const route = `/casos/${study.slug}/`;
    const leadPhoto = study.lead ? getCasePhoto(study, study.lead) : study.photos[0];
    const images = [leadPhoto, ...study.photos.filter(photo => photo !== leadPhoto)].map(photo => origin + casePhotoUrl(study.folder, photo));
    caseImages[route] = images;
    await emit({ route, title: study.title, description: study.description, type: 'article',
      data: `data-case-slug="${study.slug}"`, entry: '/pages/case.tsx',
      content: render(CasePage, { study }, study.context, study.cta, true),
      image: images[0],
      graph: [
        { '@type': 'Article', headline: study.h1, description: study.description, image: images, datePublished: '2026-10-22', dateModified: '2026-10-22', inLanguage: 'es-AR', mainEntityOfPage: origin + route, author: { '@id': business['@id'] }, publisher: { '@id': business['@id'] },
          ...(study.about ? { about: study.about } : {}) },
        breadcrumb(origin + route, study.breadcrumbLabel, false, study.parent ? { name: study.parent.label, url: origin + study.parent.href } : null),
      ],
    });
  }
  for (const article of BLOG_ARTICLES) {
    const route = `/blog/${article.slug}/`;
    await emit({ route, title: article.seoTitle ?? `${article.title} | Frame Estudio`, description: article.description, type: 'article',
      data: `data-article-slug="${article.slug}"`, entry: '/pages/blogArticle.tsx',
      content: render(BlogArticlePage, { article }, article.ctaContext, article.ctaLabel, true),
      image: origin + article.image,
      graph: [
        { '@type': 'BlogPosting', headline: article.title, description: article.description, image: origin + article.image, datePublished: article.publishedIso, dateModified: article.modifiedIso ?? article.publishedIso, inLanguage: 'es-AR', mainEntityOfPage: origin + route, author: { '@id': business['@id'] }, publisher: { '@id': business['@id'] } },
        breadcrumb(origin + route, article.shortTitle, true),
      ],
    });
  }
  await emit({ route: '/blog/', title: 'Guías de fotografía y video para eventos | Frame Estudio',
    description: 'Guías de FRAME para planificar fotos y video: precios, horas de cobertura, ideas para books de 15 y consejos para casamientos y eventos en Buenos Aires.',
    entry: '/pages/blog.tsx', content: render(BlogIndexPage, {}, 'general', 'Consultar cobertura', true),
    graph: [{ '@type': 'CollectionPage', name: 'Guías de fotografía y video para eventos', url: `${origin}/blog/`, hasPart: BLOG_ARTICLES.map(article => ({ '@type': 'BlogPosting', headline: article.title, url: `${origin}/blog/${article.slug}/` })) }, breadcrumb(`${origin}/blog/`, 'Guías')],
  });
  const modifiedPages = [
    { route: '/', title: 'Fotógrafo para eventos en Buenos Aires | Frame Estudio', modulePath: '/pages/HomePage.tsx', exportName: 'HomePage', context: 'general', label: 'Consultar fecha por WhatsApp', homeEditorial: true },
    { route: '/fotografo-15-anos-caba-gba/', title: 'Fotógrafo para 15 años en Buenos Aires | Frame Estudio', modulePath: '/pages/QuincePage.tsx', exportName: 'QuincePage', context: 'quince', label: 'Estoy organizando un 15', homeEditorial: true },
    { route: '/eventos-corporativos-buenos-aires/', title: 'Fotografía y video para eventos corporativos en Buenos Aires', modulePath: '/pages/CorporativosPage.tsx', exportName: 'CorporativosPage', context: 'corporate', label: 'Solicitar cobertura' },
    { route: '/fotografia-video-casamientos-buenos-aires/', title: 'Fotógrafo para casamientos en Buenos Aires | Frame Estudio', modulePath: '/pages/CasamientosPage.tsx', exportName: 'CasamientosPage', context: 'wedding', label: 'Consultar casamiento', metaDescription: 'Fotografía y video para casamientos, bodas civiles, ceremonias y fiestas en Buenos Aires, CABA, Capital Federal y GBA. Consultá disponibilidad.', schemaDescription: 'Fotografía y video para casamientos, bodas civiles, ceremonias y fiestas.' },
    { route: '/video-para-eventos-buenos-aires/', title: 'Video para eventos en Buenos Aires | Frame Estudio', modulePath: '/pages/VideoEventosPage.tsx', exportName: 'VideoEventosPage', context: 'video', label: 'Consultar video para mi evento', metaDescription: 'Filmación profesional para eventos sociales y corporativos en Buenos Aires, CABA, Capital Federal, GBA y Zona Norte. Videos resumen, reels y cobertura audiovisual.' },
    { route: '/contacto/', title: 'Contacto y Presupuesto | Frame Estudio', modulePath: '/pages/ContactoPage.tsx', exportName: 'ContactoPage', context: 'contact', label: 'Pedir propuesta por WhatsApp', metaDescription: 'Consultá por fotografía y video para eventos en CABA y Buenos Aires. Escribinos por WhatsApp y contanos tipo de evento, fecha y zona.' },
  ];
  for (const page of modifiedPages) {
    const { route, modulePath, exportName, context, label } = page;
    const file = path.join(root, route.slice(1), 'index.html');
    let html = await readFile(file, 'utf8');
    const module = await server.ssrLoadModule(modulePath);
    const content = render(module[exportName], {}, context, label, page.homeEditorial ?? false);
    if (page.title) {
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(page.title)}</title>`);
      for (const selector of ['property="og:title"', 'name="twitter:title"']) {
        const metaPattern = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*(")`, 'g');
        html = html.replace(metaPattern, (_match, prefix, suffix) => `${prefix}${escape(page.title)}${suffix}`);
      }
    }
    const rootPattern = /<div id="root">[\s\S]*?<\/div>(\s*<script type="module")/;
    if (!rootPattern.test(html)) throw new Error(`Missing root boundary in ${route}`);
    html = html.replace(rootPattern, () => `<div id="root">${content}</div>\n  <script type="module"`);
    if (page.metaDescription) {
      for (const selector of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
        const metaPattern = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*(")`, 'g');
        html = html.replace(metaPattern, (_match, prefix, suffix) => `${prefix}${escape(page.metaDescription)}${suffix}`);
      }
    }
    html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (_match, opening, raw, closing) => {
      const schema = JSON.parse(raw);
      for (const item of schema['@graph'] ?? []) {
        if (item.openingHoursSpecification) item.openingHoursSpecification = OPENING_HOURS_SPECIFICATION;
        if (item['@type'] === 'Service' && item.areaServed) {
          item.areaServed = ['CABA', 'Gran Buenos Aires'];
          if (page.schemaDescription) item.description = page.schemaDescription;
        }
      }
      return `${opening}${JSON.stringify(schema).replaceAll('<', '\\u003c')}${closing}`;
    });
    html = html.replace(/<style>\s*html\.js #root > main\s*\{[^}]*\}\s*<\/style>/g, '');
    if (!html.includes('href="/styles/main.css"')) html = html.replace('</head>', '<link rel="stylesheet" href="/styles/main.css" />\n</head>');
    await writeFile(file, html.replace(/[\t ]+$/gm, ''));
  }
  let sitemap = await readFile(path.join(root, 'public/sitemap.xml'), 'utf8');
  for (const route of generatedPaths) {
    if (!sitemap.includes(`<loc>${origin}${route}</loc>`)) {
      sitemap = sitemap.replace('</urlset>', `   <url><loc>${origin}${route}</loc><lastmod>2026-09-12</lastmod></url>\n</urlset>`);
    }
  }
  const modifiedRoutes = ['/', '/blog/', '/fotografo-15-anos-caba-gba/', '/eventos-corporativos-buenos-aires/', '/blog/cuanto-cuesta-fotografo-15-anos-buenos-aires/'];
  sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, entry => modifiedRoutes.some(route => entry.includes(`<loc>${origin}${route}</loc>`)) ? entry.replace(/<lastmod>[^<]+<\/lastmod>/, '<lastmod>2026-09-12</lastmod>') : entry);
  // Pages changed after 2026-09-12 keep their real date, and case pages list their photos for Google Images.
  const LASTMOD_OVERRIDES = { '/eventos-corporativos-buenos-aires/': '2026-10-22', '/fotografia-video-casamientos-buenos-aires/': '2026-10-22', '/blog/fotografo-video-casamiento-que-incluye/': '2026-10-22', '/sesion-de-fotos-buenos-aires/': '2026-10-22', ...Object.fromEntries(Object.keys(caseImages).map(route => [route, '2026-10-22'])) };
  sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, entry => {
    const route = Object.keys(LASTMOD_OVERRIDES).find(item => entry.includes(`<loc>${origin}${item}</loc>`));
    return route ? entry.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${LASTMOD_OVERRIDES[route]}</lastmod>`) : entry;
  });
  const imageRoutes = { ...caseImages, ...Object.fromEntries(Object.entries(CASES.reduce((byParent, study) => ({ ...byParent, [study.parent.href]: [...(byParent[study.parent.href] ?? []), ...study.highlight.map(file => origin + casePhotoUrl(study.folder, getCasePhoto(study, file)))] }), {}))) };
  if (!sitemap.includes('xmlns:image=')) sitemap = sitemap.replace('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
  sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, entry => {
    const route = Object.keys(imageRoutes).find(item => entry.includes(`<loc>${origin}${item}</loc>`));
    if (!route) return entry;
    const clean = entry.replace(/<image:image>[\s\S]*?<\/image:image>/g, '').replace(/\s*<\/url>$/, '');
    return `${clean}${imageRoutes[route].map(url => `<image:image><image:loc>${url}</image:loc></image:image>`).join('')}</url>`;
  });
  await writeFile(path.join(root, 'public/sitemap.xml'), sitemap);
  console.log(`Prerendered ${generatedPaths.length} content pages and 3 linked service pages.`);
} finally {
  await server.close();
}
