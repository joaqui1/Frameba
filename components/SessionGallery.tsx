import React from 'react';
import { ArrowRight } from 'lucide-react';
import { sessionPhotoSize, sessionPhotoSrc, type SessionStory } from '../pages/sessionsData';

/** Gallery of a real photo session, with mixed portrait/landscape photos and responsive WebP sources. */
export const SessionGallery: React.FC<{ story: SessionStory; moreHref?: string; moreLabel?: string }> = ({ story, moreHref, moreLabel }) => (
  <section id={story.slug} className="frame-corporate-content-section frame-session-gallery scroll-mt-24" aria-labelledby={`${story.slug}-title`}>
    <div className="container mx-auto px-6 md:px-12">
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{story.eyebrow}</span>
      <h2 id={`${story.slug}-title`} className="frame-corporate-content-title font-display mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">{story.title}</h2>
      <div className="mb-10 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
        {story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="frame-session-masonry">
        {story.photos.map(photo => {
          const size = sessionPhotoSize(photo);
          return (
            <figure key={photo.file} className="frame-session-photo">
              <img
                src={sessionPhotoSrc(story, photo, size.widths[1])}
                srcSet={size.widths.map(width => `${sessionPhotoSrc(story, photo, width)} ${width}w`).join(', ')}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={photo.alt}
                width={size.width}
                height={size.height}
                loading="lazy"
                decoding="async"
              />
            </figure>
          );
        })}
      </div>
      {moreHref && moreLabel && (
        <a href={moreHref} className="frame-case-more mt-10">{moreLabel} <ArrowRight size={16} aria-hidden="true" /></a>
      )}
    </div>
  </section>
);
