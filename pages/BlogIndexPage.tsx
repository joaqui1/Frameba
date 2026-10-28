import React from 'react';
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { BLOG_ARTICLES } from './blogData';
import { BlogEditorialVisual } from './BlogEditorialVisual';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';

const FEATURED = BLOG_ARTICLES[0];
const SECONDARY = BLOG_ARTICLES.slice(1);
const MOSAIC = [BLOG_ARTICLES[3], BLOG_ARTICLES[1], BLOG_ARTICLES[5]].filter(Boolean);

function ArticleMeta({ readingTime, updatedLabel }: { readingTime: string; updatedLabel: string }) {
  return (
    <div className="guide-meta">
      <span><Clock3 size={14} aria-hidden />{readingTime}</span>
      <span><CalendarDays size={14} aria-hidden />{updatedLabel.replace('Actualizado el ', '')}</span>
    </div>
  );
}

export const BlogIndexPage: React.FC = () => (
  <div className="frame-guide-index">
    <section data-page-hero className="guide-index-masthead">
      <div className="guide-index-masthead__inner">
        <div className="guide-index-intro">
          <span className="guide-eyebrow"><span>FRAME</span><i />Cuaderno de ideas</span>
          <h1>Guías de <em>fotografía y video</em><br />para eventos</h1>
          <p>Ideas prácticas para llegar a tu evento con las decisiones importantes resueltas: tiempos, fotos, video y presupuesto.</p>
          <div className="guide-index-tags" aria-label="Temas de las guías">
            {['15 años', 'Casamientos', 'Eventos', 'Planificación'].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="guide-index-mosaic" aria-label="Fotografías de las guías">
          {MOSAIC.map((article, index) => (
            <figure key={article.slug} className={`guide-index-mosaic__tile guide-index-mosaic__tile--${index + 1}`}>
              <BlogEditorialVisual
                number={article.number}
                category={article.category}
                mode="collage"
                className="absolute inset-0"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="guide-index-library">
      <div className="guide-index-library__inner">
        <div className="guide-section-heading">
          <div>
            <span className="guide-eyebrow"><span>01—06</span><i />Lecturas FRAME</span>
            <h2>Una buena cobertura<br /><em>empieza antes.</em></h2>
          </div>
          <p>Experiencias reales convertidas en respuestas claras para organizar tu fecha con más tranquilidad.</p>
        </div>

        <a href={`/blog/${FEATURED.slug}/`} className="guide-featured-card group" aria-label={FEATURED.title}>
          <div className="guide-featured-card__image">
            <BlogEditorialVisual
              number={FEATURED.number}
              category={FEATURED.category}
              mode="featured"
              className="absolute inset-0 transition duration-700 group-hover:scale-[1.025]"
            />
            <span className="guide-featured-card__stamp">Lectura destacada</span>
          </div>
          <div className="guide-featured-card__copy">
            <span className="guide-category">{FEATURED.category}</span>
            <h3>{FEATURED.title}</h3>
            <p>{FEATURED.intro}</p>
            <ArticleMeta readingTime={FEATURED.readingTime} updatedLabel={FEATURED.updatedLabel} />
            <span className="guide-read-link">Leer la guía <ArrowUpRight size={17} aria-hidden /></span>
          </div>
        </a>

        <div className="guide-article-grid">
          {SECONDARY.map((article) => (
            <a key={article.slug} href={`/blog/${article.slug}/`} className="guide-article-card group" aria-label={article.title}>
              <div className="guide-article-card__image">
                <BlogEditorialVisual
                  number={article.number}
                  category={article.category}
                  mode="card"
                  className="absolute inset-0 transition duration-700 group-hover:scale-[1.035]"
                />
              </div>
              <div className="guide-article-card__copy">
                <span className="guide-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.intro}</p>
                <ArticleMeta readingTime={article.readingTime} updatedLabel={article.updatedLabel} />
                <span className="guide-read-link">Leer guía <ArrowUpRight size={15} aria-hidden /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section data-page-final-cta className="guide-index-cta">
      <span className="guide-eyebrow"><span>FRAME / EVENTOS</span><i />Tu fecha</span>
      <h2>La guía orienta.<br /><em>Tu historia es única.</em></h2>
      <p>Contanos qué estás organizando y vemos juntos qué cobertura tiene sentido para vos.</p>
      <WhatsAppLink context="general" className="guide-cta-link">Consultar mi evento <ArrowUpRight size={17} aria-hidden /></WhatsAppLink>
      <GoogleRating />
    </section>

    <section className="guide-index-values">
      <div className="guide-index-values__inner">
        {[
          ['01', 'Decisiones claras', 'Entendé qué incluye cada servicio antes de comparar propuestas.'],
          ['02', 'Mejor planificación', 'Ubicá cada momento en un cronograma que funcione para vos.'],
          ['03', 'Recuerdos completos', 'Elegí qué registrar y dejá espacio para lo espontáneo.'],
        ].map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>

  </div>
);
