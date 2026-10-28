import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { CasePhoto } from '../components/CasePhoto';
import { ReviewCard } from '../components/ReviewCard';
import { getCasePhoto, type CaseStudy } from './casesData';

export function CasePage({ study }: { study: CaseStudy }) {
  const lead = study.lead ? getCasePhoto(study, study.lead) : study.photos[0];
  const facts = [
    { label: 'Tipo', value: study.eventType },
    { label: 'Fecha', value: study.dateLabel },
    { label: 'Lugar', value: study.location },
    { label: 'Servicio', value: study.service },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));
  return <>
    <section data-page-hero className="frame-case-hero">
      <div className="container mx-auto px-6 md:px-12">
        <nav aria-label="Breadcrumb" className="frame-case-breadcrumb">
          <a href="/">Inicio</a><span aria-hidden="true">/</span><a href={study.parent.href}>{study.parent.label}</a><span aria-hidden="true">/</span><span>{study.breadcrumbLabel}</span>
        </nav>
        <span className="frame-case-eyebrow">{study.badge}</span>
        <h1 className="frame-case-title">{study.h1}</h1>
        <p className="frame-case-intro">{study.intro}</p>
        <dl className="frame-case-facts">
          {facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
        <div className="frame-case-actions">
          <WhatsAppLink context={study.context} showIcon={false} className="home-editorial-cta">
            {study.cta}<span aria-hidden="true">⟶</span>
          </WhatsAppLink>
          <a href={`#${study.sections[0].id}`} className="frame-case-secondary">Ver el evento <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
        <GoogleRating className="frame-hero-rating" />
        <CasePhoto folder={study.folder} photo={lead} priority caption className="frame-case-lead" sizes="(min-width: 1280px) 1200px, 100vw" />
      </div>
    </section>

    {study.sections.map((section, sectionIndex) => (
      <section key={section.id} id={section.id} className={`frame-corporate-content-section frame-case-section scroll-mt-24${sectionIndex % 2 ? ' frame-corporate-content-section--soft' : ''}`}>
        <div className="container mx-auto px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{String(sectionIndex + 1).padStart(2, '0')}</span>
          <h2 className="frame-corporate-content-title font-display mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">{section.title}</h2>
          <div className="mb-10 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {section.photos && <div className={study.layout === 'masonry' ? 'frame-session-masonry' : 'frame-case-grid'}>
            {section.photos.filter(file => file !== lead.file).map(file => (
              <CasePhoto key={file} folder={study.folder} photo={getCasePhoto(study, file)} caption className={study.layout === 'masonry' ? 'frame-session-photo' : ''} sizes={study.layout === 'masonry' ? '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'} />
            ))}
          </div>}
        </div>
      </section>
    ))}

    {study.review && <section className="frame-corporate-content-section frame-case-section">
      <div className="container mx-auto px-6 md:px-12">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">La opinión del cliente</span>
        <h2 className="frame-corporate-content-title font-display mb-8 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">Qué dijo el cliente</h2>
        <ReviewCard review={study.review} className="frame-case-review--large" />
      </div>
    </section>}

    <WhatsAppCTASection
      title="Contanos de tu próximo evento"
      subtitle="Escribinos por WhatsApp con la fecha, el lugar y qué necesitás: fotos, video o ambos. Te armamos una propuesta a medida."
      ctaLabel={study.cta}
      context={study.context}
    />

    <section className="frame-corporate-content-section frame-corporate-content-section--soft frame-case-section">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="frame-corporate-content-title font-display mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">{study.closing.title}</h2>
        <p className="mb-8 max-w-3xl text-base leading-relaxed md:text-lg">{study.closing.text}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {study.closing.links.map(link => <a key={link.href} href={link.href} className="frame-case-more">{link.label} <ArrowRight size={16} aria-hidden="true" /></a>)}
        </div>
      </div>
    </section>

  </>;
}
