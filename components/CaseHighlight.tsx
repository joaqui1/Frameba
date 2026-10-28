import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CasePhoto } from './CasePhoto';
import { ReviewCard } from './ReviewCard';
import { getCasePhoto, type CaseStudy } from '../pages/casesData';

/** Preview of a real job on its service page: a few photos, the client's review and a link to the full case. */
export const CaseHighlight: React.FC<{ study: CaseStudy; title: string; text: string }> = ({ study, title, text }) => (
  <section className="frame-corporate-content-section frame-case-highlight" aria-labelledby={`caso-${study.slug}`}>
    <div className="container mx-auto px-6 md:px-12">
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Caso real{study.dateLabel ? ` · ${study.dateLabel}` : ''}</span>
      <h2 id={`caso-${study.slug}`} className="frame-corporate-content-title font-display mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      <p className="mb-10 max-w-3xl text-base leading-relaxed md:text-lg">{text}</p>
      <div className={study.layout === 'masonry' ? 'frame-session-masonry' : 'frame-case-grid frame-case-grid--highlight'}>
        {study.highlight.map((file, index) => (
          <CasePhoto
            key={file}
            folder={study.folder}
            photo={getCasePhoto(study, file)}
            className={study.layout === 'masonry' ? 'frame-session-photo' : index === 0 ? 'frame-case-photo--wide' : ''}
            sizes={study.layout !== 'masonry' && index === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
          />
        ))}
      </div>
      <div className="frame-case-highlight-footer">
        {study.review && <ReviewCard review={study.review} />}
        <a href={`/casos/${study.slug}/`} className="frame-case-more">
          {study.previewLabel} <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);
