import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import type { CaseReview } from '../pages/casesData';

/** A real, public Google review. Shown as-is with a link to the source; never invent or edit reviews. */
export const ReviewCard: React.FC<{ review: CaseReview; className?: string }> = ({ review, className = '' }) => (
  <figure className={`frame-case-review ${className}`}>
    <div className="frame-case-review-stars" aria-label={`${review.rating} de 5 estrellas`}>
      {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}
    </div>
    <blockquote>
      <p>“{review.excerpt}”</p>
    </blockquote>
    <figcaption>
      <span className="frame-case-review-author">{review.author}</span>
      <span className="frame-case-review-meta">{review.source} · {review.when}</span>
      <a href={review.url} target="_blank" rel="noopener" className="frame-case-review-link">
        Leer la reseña completa en Google <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </figcaption>
  </figure>
);
