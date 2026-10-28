import React from 'react';
import { ArrowDown, ArrowUpRight, Aperture, Camera, Check, Sparkles } from 'lucide-react';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { DesktopOnlyImage } from '../components/DesktopOnlyImage';
import type { NewService } from './newServicesData';

export function NewServicePage({ service }: { service: NewService }) {
  const isBook = service.context === 'book';
  const isEditorialService = isBook || service.slug === 'fotografia-corporativa-buenos-aires';
  const gallery = service.bookGallery ?? service.corporateGallery;
  return <>
    {gallery ? <section data-page-hero className={'home-editorial-hero frame-book-editorial-hero ' + (isBook ? '' : 'frame-corporate-editorial-hero')}>
      {(isBook ? service.cover?.mobileSrc : service.corporateGallery?.lead.src) && <div className="frame-book-mobile-cover" aria-hidden="true"><img src={isBook ? service.cover!.mobileSrc! : service.corporateGallery!.lead.src} alt={isBook ? (service.bookGallery?.portrait?.src === service.cover!.mobileSrc ? service.bookGallery!.portrait!.alt : service.cover!.alt) : service.corporateGallery!.lead.alt} width={gallery!.lead.width} height={gallery!.lead.height} fetchPriority="high" decoding="async" /></div>}
      <div className="home-editorial-main frame-book-editorial-main">
        <div className="home-editorial-copy frame-book-editorial-copy">
          <nav aria-label="Breadcrumb" className="frame-book-breadcrumb">
            <a href="/">Inicio</a><span aria-hidden="true">/</span><a href={service.parent.href}>{service.parent.label}</a><span aria-hidden="true">/</span><span>{service.breadcrumbLabel}</span>
          </nav>
          <div className="home-editorial-eyebrow" aria-hidden="true">
            <span className="home-editorial-index">
              <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false"><path d="M 98 16 A 62 62 0 0 0 28 116" /></svg>
              <span className="home-editorial-index-dot" /><span>01</span>
            </span>
            <span className="home-editorial-rule" /><span>{service.badge}</span>
          </div>
          <h1 className="home-editorial-title frame-book-editorial-title">{service.h1}</h1>
          <p className="home-editorial-description frame-book-editorial-description">{service.intro}</p>
          <div className="frame-book-editorial-actions">
            <WhatsAppLink context={service.context} showIcon={false} className="home-editorial-cta">
              {service.cta}<span aria-hidden="true">⟶</span>
            </WhatsAppLink>
            <a href={`#${service.sections[0].id}`} className="frame-book-editorial-secondary">Conocé la sesión <ArrowDown size={15} /></a>
          </div>
          <GoogleRating className="frame-hero-rating" />
        </div>

        <div className="home-editorial-gallery frame-book-editorial-gallery" aria-label={isBook ? 'Fotos para book de 15 años' : 'Retratos profesionales y fotografía corporativa'}>
          <figure className="home-editorial-photo home-editorial-photo--lead" style={{ '--corporate-photo': 'url(' + gallery.lead.src + ')' } as React.CSSProperties}>
            <DesktopOnlyImage src={gallery.lead.src} alt={gallery.lead.alt} width={gallery.lead.width} height={gallery.lead.height} fetchPriority="high" decoding="async" />
          </figure>
          {service.bookGallery ? (
            <figure className="home-editorial-photo frame-book-editorial-side-portrait">
              <img src={service.bookGallery.portrait.src} alt={service.bookGallery.portrait.alt} width={service.bookGallery.portrait.width} height={service.bookGallery.portrait.height} loading="eager" decoding="async" />
            </figure>
          ) : service.corporateGallery ? (
            service.corporateGallery.portrait ? (
              <figure className="home-editorial-photo home-editorial-photo--side-portrait">
                <img src={service.corporateGallery.portrait.src} alt={service.corporateGallery.portrait.alt} width={service.corporateGallery.portrait.width} height={service.corporateGallery.portrait.height} loading="eager" decoding="async" />
              </figure>
            ) : (
              <div className="home-editorial-side-photos">
                <figure className="home-editorial-photo home-editorial-photo--top" style={{ '--corporate-photo': 'url(' + service.corporateGallery.top.src + ')' } as React.CSSProperties}>
                  <img src={service.corporateGallery.top.src} alt={service.corporateGallery.top.alt} width={service.corporateGallery.top.width} height={service.corporateGallery.top.height} loading="eager" decoding="async" />
                </figure>
                <figure className="home-editorial-photo home-editorial-photo--bottom" style={{ '--corporate-photo': 'url(' + service.corporateGallery.bottom.src + ')' } as React.CSSProperties}>
                  <img src={service.corporateGallery.bottom.src} alt={service.corporateGallery.bottom.alt} width={service.corporateGallery.bottom.width} height={service.corporateGallery.bottom.height} loading="eager" decoding="async" />
                </figure>
              </div>
            )
          ) : null}
        </div>
        <aside className="home-editorial-notes frame-book-editorial-notes" aria-label={isBook ? 'Detalles del book' : 'Detalles de fotografía corporativa'}>
          <p><span>01 / {isBook ? 'Sesión' : 'Retratos'}</span><span>{isBook ? 'Hecha a tu manera' : 'Profesionales'}</span></p>
          <p><span>02 / {isBook ? 'Retratos' : 'LinkedIn y CV'}</span><span>{isBook ? 'Con tu estilo' : 'Para tu perfil'}</span></p>
          <p><span>03 / {isBook ? 'Locación' : 'Equipos'}</span><span>{isBook ? 'Que te represente' : 'Para tu empresa'}</span></p>
        </aside>
      </div>

      <div className="home-editorial-footer frame-book-editorial-footer">
        <div><Check className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>{isBook ? 'Planificación de la sesión' : 'Retratos profesionales'}</span></div>
        <div><Camera className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>{isBook ? 'Fotografías editadas' : 'LinkedIn y equipos'}</span></div>
        <div><Sparkles className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Enfoque personalizado</span></div>
      </div>
    </section> : <section data-page-hero className="relative isolate overflow-hidden border-b border-zinc-800/60 bg-zinc-950 pb-16 pt-32 md:pb-24 md:pt-44">
      {service.cover ? <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${isBook ? 'frame-book-backdrop' : ''}`}>
        <picture className="absolute inset-0 block h-full w-full">
          {service.cover.mobileSrc && <source media="(max-width: 767px)" srcSet={service.cover.mobileSrc} type="image/webp" />}
          <img src={service.cover.src} alt={service.cover.alt} style={{ '--frame-mobile-position': service.cover.mobilePosition ?? 'center', '--frame-desktop-position': service.cover.position ?? 'center' } as React.CSSProperties} className={`${isBook ? 'frame-book-image' : 'frame-art-directed absolute inset-0 h-full w-full object-contain blur-[3px] opacity-[0.64] md:blur-[4px] md:opacity-[0.52]'}`} width={isBook ? 1800 : 1672} height={isBook ? 2700 : 941} loading="eager" fetchPriority="high" decoding="async" />
        </picture>
        <div className={`absolute inset-0 ${isBook ? 'frame-book-scrim' : 'bg-gradient-to-t from-zinc-950/90 via-zinc-950/34 to-zinc-950/10 md:via-zinc-950/52 md:to-zinc-950/22'}`} />
        <div className={`absolute inset-0 ${isBook ? 'frame-book-vignette' : 'bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.04)_0%,rgba(9,9,11,0.24)_54%,rgba(9,9,11,0.72)_100%)] md:bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.08)_0%,rgba(9,9,11,0.38)_50%,rgba(9,9,11,0.82)_100%)]'}`} />
        {!isBook && <div className="absolute inset-0 bg-zinc-950/5 md:bg-zinc-950/10" />}
      </div> : <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_35%,rgba(255,69,0,0.12),transparent_55%)]" />}
      <div className="container mx-auto px-6 md:px-12">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <a href="/" className="hover:text-white">Inicio</a><span aria-hidden="true">/</span>
          <a href={service.parent.href} className="hover:text-white">{service.parent.label}</a><span aria-hidden="true">/</span>
          <span className="text-brand-orange">{service.breadcrumbLabel}</span>
        </nav>
        <div className={`grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] ${isBook ? 'frame-book-hero-grid' : ''}`}>
          <div>
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">{service.badge}</span>
            <h1 className={`max-w-4xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl ${isBook ? 'frame-book-hero-title' : ''}`}>{service.h1}</h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{service.intro}</p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <WhatsAppLink context={service.context} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-brand-orange hover:text-white">{service.cta}</WhatsAppLink>
              <a href={`#${service.sections[0].id}`} className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white">Conocé la sesión <ArrowDown size={16} className="text-brand-orange" /></a>
            </div>
          </div>
          {!service.cover && <div aria-hidden="true" className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm border border-zinc-800 bg-zinc-900/40 p-8 lg:flex lg:flex-col lg:justify-between">
            <div className="flex items-center justify-between text-brand-orange"><Aperture size={26} strokeWidth={1.2} /><span className="text-[10px] font-bold uppercase tracking-[0.24em]">FRAME / SESIONES</span></div>
            <div className="relative mx-2 flex aspect-square items-center justify-center border border-zinc-700">
              <span className="absolute -left-px -top-px h-9 w-9 border-l-2 border-t-2 border-brand-orange" /><span className="absolute -bottom-px -right-px h-9 w-9 border-b-2 border-r-2 border-brand-orange" />
              {isBook ? <span className="font-display text-[110px] font-black leading-none tracking-tighter text-zinc-200">15<span className="text-brand-orange">.</span></span> : <Camera size={100} strokeWidth={0.6} className="text-zinc-400" />}
            </div>
            <div className="border-t border-zinc-800 pt-5"><p className="font-display text-xl font-bold">{isBook ? 'Tu estilo. Tu momento.' : 'Personas detrás de la marca.'}</p><p className="mt-2 text-xs text-zinc-500">Una sesión planificada</p></div>
          </div>}
        </div>
        <div className={`mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-zinc-800/70 pt-6 text-xs text-zinc-400 ${isBook ? 'frame-book-benefits' : ''}`}>
          <span className="inline-flex items-center gap-2"><Check size={14} className="text-brand-orange" />Planificación de la sesión</span><span className="inline-flex items-center gap-2"><Check size={14} className="text-brand-orange" />Fotografías editadas</span><span className="inline-flex items-center gap-2"><Check size={14} className="text-brand-orange" />Enfoque personalizado</span>
        </div>
      </div>
    </section>}
    {service.sections.map((section, index) => <section key={section.id} id={section.id} className={`scroll-mt-24 py-16 md:py-24 ${isEditorialService ? `frame-book-page-section ${index % 2 ? 'frame-book-page-section--soft' : ''}` : index % 2 ? 'border-y border-zinc-800/60 bg-zinc-900' : 'bg-zinc-950'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">0{index + 1} / {section.eyebrow}</span>
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">{section.title}</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">{section.text}</p>
        {section.cards && <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${section.cards.length === 3 ? 'lg:grid-cols-3' : ''}`}>{section.cards.map(card => <article key={card.title} className={`${isEditorialService ? 'frame-book-page-card' : 'border border-zinc-800 bg-zinc-950/45'} p-6 md:p-8`}><h3 className="font-display text-xl font-bold">{card.title}</h3><p className="mt-4 text-sm leading-relaxed text-zinc-400">{card.text}</p></article>)}</div>}
        {section.link && <a href={section.link.href} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-zinc-200 underline decoration-brand-orange/60 underline-offset-8 transition hover:text-brand-orange">{section.link.label}<ArrowUpRight size={18} className="shrink-0 text-brand-orange" /></a>}
      </div>
    </section>)}
    <section className={`py-16 md:py-24 ${isEditorialService ? 'frame-book-page-faq' : 'bg-zinc-950'}`}><div className="container mx-auto max-w-5xl px-6 md:px-12">
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">Antes de reservar</span>
      <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes sobre {isBook ? 'el book de 15' : 'fotografía corporativa'}</h2>
      <div className="space-y-4">{service.faqs.map(faq => <details key={faq.question} className={`group p-6 ${isEditorialService ? 'frame-book-page-faq-item' : 'border border-zinc-800 bg-zinc-900/50 open:border-brand-orange/40'}`}><summary className="cursor-pointer font-display text-lg font-bold marker:text-brand-orange">{faq.question}</summary><p className="mt-4 text-sm leading-relaxed text-zinc-400">{faq.answer}</p></details>)}</div>
    </div></section>
    <WhatsAppCTASection title={isBook ? 'Empecemos a pensar tu book' : 'Planifiquemos tu próxima sesión'} subtitle={isBook ? 'Contanos cuándo es tu fiesta, qué locación tenés en mente y qué estilo te gusta.' : 'Contanos cuántas personas son, dónde harían las fotos y para qué las necesitan.'} ctaLabel={service.cta} context={service.context} />
    <section className={`py-16 ${isEditorialService ? 'frame-book-page-related' : 'border-y border-zinc-800/60 bg-zinc-900'}`}><div className="container mx-auto px-6 md:px-12"><h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">Para seguir planificando</h2><div className={`grid gap-4 ${service.related.length > 3 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}>{service.related.map(link => <a key={link.href} href={link.href} className={`group p-6 ${isEditorialService ? 'frame-book-page-related-card' : 'border border-zinc-800 bg-zinc-950/60 hover:border-brand-orange/50'}`}><h3 className="font-display text-xl font-bold group-hover:text-brand-orange">{link.label}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">{link.text}</p><ArrowUpRight size={20} className="mt-5 text-brand-orange" /></a>)}</div></div></section>
  </>;
}
