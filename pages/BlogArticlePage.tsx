import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';
import { BLOG_ARTICLES, type BlogArticle } from './blogData';
import { BlogEditorialVisual } from './BlogEditorialVisual';
import { WhatsAppLink } from '../components/WhatsAppLink';

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <a href={`/blog/${article.slug}/`} className="group overflow-hidden border border-zinc-800 bg-zinc-900/60 transition hover:border-zinc-700">
      <div className="relative h-56 overflow-hidden">
        <BlogEditorialVisual
          number={article.number}
          category={article.category}
          title={article.shortTitle}
          mode="card"
          className="absolute inset-0 transition duration-700 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">{article.category}</span>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-brand-orange">{article.shortTitle}</h3>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">Leer guía <ArrowUpRight size={15} className="text-brand-orange" /></span>
      </div>
    </a>
  );
}

export const BlogArticlePage: React.FC<{ article: BlogArticle }> = ({ article }) => {
  const related = article.relatedSlugs
    .map((slug) => BLOG_ARTICLES.find((item) => item.slug === slug))
    .filter((item): item is BlogArticle => Boolean(item));

  const quickAnswerHtml = article.slug === 'cuanto-cuesta-fotografo-15-anos-buenos-aires'
    ? '<p>Como referencia de <strong>julio de 2026</strong>, en FRAME: <strong>Fiesta: aproximadamente $500.000</strong>.</p><p>El valor final depende de horas, ubicación, equipo y entregas.</p>'
    : article.quickAnswerHtml;

  return (
    <>
      <article>
        <header className="relative min-h-[760px] overflow-hidden border-b border-zinc-800/60 bg-zinc-950 md:min-h-[820px]">
          <BlogEditorialVisual
            number={article.number}
            category={article.category}
            mode="hero"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/58 to-zinc-950/22" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.30)_55%,rgba(9,9,11,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange/55 to-transparent" />
          <div className="container relative z-10 mx-auto flex min-h-[760px] flex-col justify-end px-6 pb-20 pt-36 md:min-h-[820px] md:px-12 md:pb-24">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
              <a href="/" className="transition hover:text-white">Inicio</a><span className="text-zinc-700">/</span>
              <a href="/blog/" className="transition hover:text-white">Guías</a><span className="text-zinc-700">/</span>
              <span className="text-brand-orange">{article.category.split(' · ')[0]}</span>
            </nav>
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-5xl">
                <span className="mb-5 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{article.category}</span>
                <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[76px]">{article.title}</h1>
                <p className="mt-7 max-w-3xl text-base font-light leading-relaxed text-zinc-300 md:text-xl">{article.intro}</p>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-zinc-400">
                  <span className="inline-flex items-center gap-2"><Clock3 size={15} className="text-brand-orange" />{article.readingTime}</span>
                  <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-brand-orange" />{article.updatedLabel}</span>
                </div>
              </div>
              <div className="hidden h-36 w-36 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-zinc-950/50 font-display text-6xl font-black text-brand-orange backdrop-blur-md lg:flex">{article.number}</div>
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

              <div>
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
                <div className="mt-12 flex flex-col justify-between gap-4 border-y border-zinc-800 py-6 sm:flex-row sm:items-center">
                  <a href="/blog/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 transition hover:text-white"><ArrowLeft size={16} className="text-brand-orange" />Volver a todas las guías</a>
                  <a href={article.serviceHref} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:text-brand-orange">{article.serviceLabel}<ArrowRight size={16} className="text-brand-orange" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

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

      <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-28">
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
        </div>
      </section>
    </>
  );
};
