import React from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { BLOG_ARTICLES, type BlogArticle } from './blogData';
import { BlogEditorialVisual } from './BlogEditorialVisual';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <a href={`/blog/${article.slug}/`} className="guide-related-card group" aria-label={article.shortTitle}>
      <div className="guide-related-card__image">
        <BlogEditorialVisual
          number={article.number}
          category={article.category}
          mode="card"
          className="absolute inset-0 transition duration-700 group-hover:scale-[1.025]"
        />
      </div>
      <div className="guide-related-card__copy">
        <span className="guide-category">{article.category}</span>
        <h3>{article.shortTitle}</h3>
        <span className="guide-read-link">Leer guía <ArrowUpRight size={15} aria-hidden /></span>
      </div>
    </a>
  );
}

export const BlogArticlePage: React.FC<{ article: BlogArticle }> = ({ article }) => {
  const related = article.relatedSlugs
    .map((slug) => BLOG_ARTICLES.find((item) => item.slug === slug))
    .filter((item): item is BlogArticle => Boolean(item));

  const quickAnswerHtml = article.quickAnswerHtml;

  return (
    <div className="frame-guide-article">
      <article>
        <header data-page-hero className="guide-article-masthead">
          <div className="guide-article-masthead__inner">
            <nav aria-label="Breadcrumb" className="guide-breadcrumb">
              <a href="/">Inicio</a><span>/</span>
              <a href="/blog/">Guías</a><span>/</span>
              <span>{article.category.split(' · ')[0]}</span>
            </nav>
            <div className="guide-article-cover-grid">
              <div className="guide-article-cover-copy">
                <span className="guide-eyebrow"><span>GUÍA {article.number}</span><i />{article.category}</span>
                <h1>{article.title}</h1>
                <p>{article.intro}</p>
                <div className="guide-meta">
                  <span><Clock3 size={14} aria-hidden />{article.readingTime}</span>
                  <span><CalendarDays size={14} aria-hidden />{article.updatedLabel}</span>
                </div>
              </div>
              <figure className="guide-article-cover-figure">
                <BlogEditorialVisual
                  number={article.number}
                  category={article.category}
                  mode="hero"
                  className="relative"
                />
                <figcaption><span>FRAME / CUADERNO</span><span>{article.number} — {article.category.split(' · ')[0]}</span></figcaption>
              </figure>
            </div>
          </div>
        </header>

        <section className="relative bg-zinc-950">
          <div className="container mx-auto px-6 md:px-12">
            <div className="relative z-20 mx-auto -translate-y-10 border border-brand-orange/25 bg-zinc-900/95 p-7 shadow-2xl shadow-black/40 backdrop-blur-md md:-translate-y-14 md:p-10 lg:max-w-5xl">
              <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-orange">FRAME recomienda</span>
                  <h2 className="mt-3 font-display text-2xl font-black text-white">{article.quickAnswerTitle}</h2>
                </div>
                <div className="article-quick-answer text-sm leading-relaxed text-zinc-300 md:text-base" dangerouslySetInnerHTML={{ __html: quickAnswerHtml }} />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 pb-24 md:px-12 md:pb-32">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-center">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-l border-zinc-800 pl-6">
                  <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">En esta guía</span>
                  <nav aria-label="Índice del artículo" className="space-y-4">
                    {article.toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="block text-sm leading-snug text-zinc-500 transition hover:text-brand-orange">{item.label}</a>
                    ))}
                  </nav>
                  <a href={article.serviceHref} className="mt-8 inline-flex items-center gap-2 border-t border-zinc-800 pt-6 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-300 transition hover:text-brand-orange">{article.serviceLabel}<ArrowRight size={15} /></a>
                </div>
              </aside>

              <div className="min-w-0">
                <details className="mb-8 border border-zinc-800 bg-zinc-900/50 p-5 lg:hidden">
                  <summary className="cursor-pointer text-sm font-bold text-white marker:text-brand-orange">En esta guía</summary>
                  <nav aria-label="Índice móvil del artículo" className="mt-4 space-y-3">{article.toc.map(item => <a key={item.id} href={`#${item.id}`} className="block py-1 text-sm text-zinc-300 hover:text-brand-orange">{item.label}</a>)}</nav>
                </details>
                <div className="article-copy" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
                {article.faqs.length > 0 && (
                  <div className="mt-10 space-y-4">
                    {article.faqs.map((faq) => (
                      <article key={faq.question} className="border border-zinc-800 bg-zinc-900/45 p-6 md:p-7">
                        <h3 className="font-display text-lg font-bold text-white">{faq.question}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>

      <section data-page-final-cta className="relative overflow-hidden bg-zinc-950 py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,69,0,0.13),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Consultar fecha</span>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-tight text-white md:text-6xl">{article.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">{article.ctaText}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={article.serviceHref}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-sm bg-brand-orange px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-orange-600"
            >
              {article.serviceLabel}<ArrowRight size={17} />
            </a>
            <WhatsAppLink
              context={article.ctaContext}
              className="inline-flex min-w-[220px] items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-zinc-200"
            >
              {article.ctaLabel}
            </WhatsAppLink>
          </div>
          <GoogleRating />
        </div>
      </section>

      <section className="border-y border-zinc-800/60 bg-zinc-900 py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Seguir leyendo</span>
              <h2 className="font-display text-3xl font-black text-white md:text-5xl">Guías relacionadas</h2>
            </div>
            <a href="/blog/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 transition hover:text-white">Ver todas <ArrowRight size={16} className="text-brand-orange" /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
          </div>
        </div>
      </section>

    </div>
  );
};
