import React from 'react';
import { ArrowUpRight, CalendarDays, Camera, Clock3, Sparkles } from 'lucide-react';
import { BLOG_ARTICLES } from './blogData';
import { WhatsAppLink } from '../components/WhatsAppLink';

const FEATURED = BLOG_ARTICLES[0];
const SECONDARY = BLOG_ARTICLES.slice(1);

function ArticleMeta({ readingTime, updatedLabel }: { readingTime: string; updatedLabel: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
      <span className="inline-flex items-center gap-2"><Clock3 size={14} className="text-brand-orange" />{readingTime}</span>
      <span className="inline-flex items-center gap-2"><CalendarDays size={14} className="text-brand-orange" />{updatedLabel.replace('Actualizado el ', '')}</span>
    </div>
  );
}

export const BlogIndexPage: React.FC = () => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-800/60 bg-zinc-950 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(255,69,0,0.12),transparent_48%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid items-end gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange">
                <Sparkles size={13} /> Guías de FRAME
              </span>
              <h1 className="font-display text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-8xl">
                Elegir mejor.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700">Recordar más.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-zinc-400 md:text-xl">
                Consejos escritos desde la experiencia de cubrir eventos: presupuestos, tiempos, momentos importantes y decisiones que conviene resolver antes de la fecha.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                {['15 años', 'Casamientos', 'Planificación', 'Fotografía'].map((tag) => (
                  <span key={tag} className="border border-zinc-800 bg-zinc-900/60 px-4 py-2">{tag}</span>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[480px] lg:block" aria-hidden="true">
              <div className="absolute left-0 top-14 h-[330px] w-[58%] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40">
                <img src="/images/hero-quince-portada-desktop.webp" alt="" className="h-full w-full object-cover opacity-75" style={{ objectPosition: '50% 48%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 font-display text-5xl font-black text-white/20">01</span>
              </div>
              <div className="absolute right-0 top-0 h-[260px] w-[48%] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40">
                <img src="/images/hero-casamiento-portada-desktop.webp" alt="" className="h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <span className="absolute bottom-4 right-5 font-display text-4xl font-black text-white/20">02</span>
              </div>
              <div className="absolute bottom-0 right-8 h-[210px] w-[44%] overflow-hidden border border-brand-orange/30 bg-zinc-900 shadow-2xl shadow-black/50">
                <img src="/images/hero-home.webp" alt="" className="h-full w-full object-cover opacity-65" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <span className="absolute bottom-4 left-5 font-display text-4xl font-black text-brand-orange/50">03</span>
              </div>
              <div className="absolute left-[46%] top-[43%] flex h-24 w-24 items-center justify-center rounded-full border border-brand-orange/40 bg-zinc-950 text-brand-orange shadow-xl shadow-black/40">
                <Camera size={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-zinc-800 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Últimas guías</span>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Información útil antes del evento</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:text-right">
              Sin fórmulas vacías ni listas copiadas: cada nota responde dudas reales que aparecen al organizar una cobertura.
            </p>
          </div>

          <a href={`/blog/${FEATURED.slug}/`} className="group relative mb-8 grid min-h-[620px] overflow-hidden border border-zinc-800 bg-zinc-900 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
              <img
                src={FEATURED.image}
                alt={FEATURED.imageAlt}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-80"
                style={{ objectPosition: FEATURED.imagePosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-zinc-950/10 lg:to-zinc-950" />
              <div className="absolute left-6 top-6 border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">Destacada</div>
              <span className="absolute bottom-4 left-6 font-display text-[120px] font-black leading-none text-white/10 md:text-[180px]">01</span>
            </div>
            <div className="relative flex flex-col justify-center p-8 md:p-14 lg:p-16">
              <span className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">{FEATURED.category}</span>
              <h3 className="font-display text-3xl font-black leading-tight text-white transition-colors group-hover:text-brand-orange md:text-5xl">{FEATURED.title}</h3>
              <p className="mt-6 text-base leading-relaxed text-zinc-400">{FEATURED.intro}</p>
              <div className="mt-8"><ArticleMeta readingTime={FEATURED.readingTime} updatedLabel={FEATURED.updatedLabel} /></div>
              <span className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">Leer la guía <ArrowUpRight size={18} className="text-brand-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </div>
          </a>

          <div className="grid gap-8 lg:grid-cols-3">
            {SECONDARY.map((article, index) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}/`}
                className={`group flex overflow-hidden border border-zinc-800 bg-zinc-900/60 transition hover:border-zinc-700 ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]' : 'flex-col'}`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'min-h-[360px]' : 'h-72'}`}>
                  <img src={article.image} alt={article.imageAlt} className="h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-78" style={{ objectPosition: article.imagePosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span className="absolute bottom-4 right-5 font-display text-7xl font-black text-white/15">{article.number}</span>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">{article.category}</span>
                  <h3 className="font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-brand-orange md:text-3xl">{article.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">{article.intro}</p>
                  <div className="mt-7"><ArticleMeta readingTime={article.readingTime} updatedLabel={article.updatedLabel} /></div>
                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-200">Leer guía <ArrowUpRight size={16} className="text-brand-orange" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800/60 bg-zinc-900 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ['01', 'Decisiones más claras', 'Entendé qué incluye cada servicio antes de comparar propuestas.'],
              ['02', 'Cronogramas mejor armados', 'Ubicá las horas alrededor de los momentos que realmente importan.'],
              ['03', 'Recuerdos más completos', 'Evitá olvidos sin convertir el evento en una lista interminable de poses.'],
            ].map(([number, title, text]) => (
              <article key={number} className="border-l border-zinc-700 pl-6">
                <span className="font-display text-sm font-black text-brand-orange">{number}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-950 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,69,0,0.12),transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center md:px-12">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Tu evento</span>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-tight text-white md:text-6xl">La guía ayuda. El cronograma real define la cobertura.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">Contanos fecha, zona y tipo de evento. Te orientamos sobre horas, equipo y entrega sin sumar cosas que no necesitás.</p>
          <WhatsAppLink context="general" className="mt-9 inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-brand-orange hover:text-white">Consultar mi evento</WhatsAppLink>
        </div>
      </section>
    </>
  );
};
