import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_BUSINESS_URL, GOOGLE_RATING } from '../utils/business';

/** Discreet, verifiable rating line that links to the Google Business Profile. Visible text only (no review schema). */
export const GoogleRating: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={GOOGLE_BUSINESS_URL}
    target="_blank"
    rel="noopener"
    className={`frame-google-rating ${className}`}
    aria-label={`${GOOGLE_RATING.value} de 5 estrellas en ${GOOGLE_RATING.count} reseñas de Google. Ver reseñas en Google Maps`}
  >
    <span className="frame-google-rating-stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={12} fill="currentColor" strokeWidth={0} />)}
    </span>
    <span aria-hidden="true">{GOOGLE_RATING.value} · {GOOGLE_RATING.count} reseñas en Google</span>
  </a>
);
