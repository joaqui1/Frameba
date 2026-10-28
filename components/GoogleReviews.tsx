import React from 'react';
import { GoogleRating } from './GoogleRating';
import { GOOGLE_BUSINESS_URL } from '../utils/business';

/** Real Google reviews, quoted as written (trimmed only where marked with …). */
const REVIEWS = [
  { author: 'Laura Novitas', text: 'Excelente experiencia. Desde el primer momento fueron súper amables y atentos, y se notó el profesionalismo y el compromiso en cada detalle. […] ¡Muchas gracias por la excelente atención y por el hermoso trabajo!' },
  { author: 'Mateo Dávila', text: 'Buen precio. Muy buenas fotos, nos encantaron, todo super bien.' },
  { author: 'Matias Cerezuela', text: 'Excelente servicio!! Super recomendable.' },
];

export const GoogleReviews: React.FC = () => (
  <section className="frame-google-reviews" aria-labelledby="opiniones-google">
    <div className="container mx-auto px-6 md:px-12">
      <div className="frame-google-reviews-head">
        <h2 id="opiniones-google">Opiniones en Google</h2>
        <GoogleRating />
      </div>
      <div className="frame-google-reviews-list">
        {REVIEWS.map(review => (
          <figure key={review.author}>
            <blockquote><p>“{review.text}”</p></blockquote>
            <figcaption>{review.author}</figcaption>
          </figure>
        ))}
      </div>
      <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener" className="frame-google-reviews-more">Ver todas las reseñas en Google Maps</a>
    </div>
  </section>
);
