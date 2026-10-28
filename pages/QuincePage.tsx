import React from 'react';
import { Camera, Film, Clock, Sparkles, Music, Users, Heart, Star, UsersRound } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { RelatedServices } from '../components/RelatedServices';
import { DesktopOnlyImage } from '../components/DesktopOnlyImage';

const INTRO =
  'Fotos, video y reels de tu fiesta de 15, y un book antes de la fiesta. Una estética moderna, natural y cuidada.';

const CTA_LABEL = 'Pedir presupuesto';

const linkClass = 'font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange';

const QUINCE_MOMENTS = [
  {
    icon: <Sparkles size={20} />,
    time: 'Previa',
    title: 'Preparativos',
    desc: 'Vestido, maquillaje, detalles y brindis con amigas y familia.',
  },
  {
    icon: <Star size={20} />,
    time: 'Entrada',
    title: 'Llegada y vals',
    desc: 'La entrada, el vals y los saludos, tal como se viven.',
  },
  {
    icon: <Heart size={20} />,
    time: 'Familia',
    title: 'Retratos en familia',
    desc: 'Fotos con familia, amigas y amigos para que estén todos los que querés.',
  },
  {
    icon: <Music size={20} />,
    time: 'Pista',
    title: 'La fiesta en movimiento',
    desc: 'Luces, abrazos y baile hasta el cierre de la cobertura.',
  },
];

const QUINCE_INCLUDES = [
  { icon: <Camera size={18} />, title: 'Fotografía del evento', desc: 'Todos los momentos de la noche, de la previa al cierre.' },
  { icon: <Film size={18} />, title: 'Video y reels', desc: 'Video resumen y piezas cortas para redes, si las sumás.' },
  { icon: <Users size={18} />, title: 'Book de 15 años', desc: 'Una sesión previa para tener fotos cuidadas antes de la fiesta.' },
  { icon: <Clock size={18} />, title: 'Horario a medida', desc: 'Las horas se definen según el cronograma de la fiesta.' },
];

export const FAQ_ITEMS = [
  {
    question: '¿Puedo contratar solo fotos o sumar video y reels?',
    answer: 'Sí. Podés contratar solo fotografía o sumarle video resumen y reels. En la cotización detallamos qué piezas incluye cada propuesta.',
  },
  {
    question: '¿Cómo se organizan las fotos importantes?',
    answer: 'Antes de la fiesta repasamos el cronograma con vos y anotamos entrada, vals, brindis, shows, torta y retratos familiares, con sus horarios.',
  },
  {
    question: '¿Cuándo se hace el book de 15 años?',
    answer: 'Unas semanas antes de la fiesta, en exteriores o en una locación que elegimos juntos. Podés contratarlo solo o junto con la cobertura.',
  },
  {
    question: '¿Qué datos necesito para pedir presupuesto?',
    answer: 'La fecha, el salón o la zona, las horas estimadas y si buscás fotos, video, book o reels.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'En CABA y el Gran Buenos Aires. Si tu salón queda en otra zona, consultanos.',
  },
];

function QuinceEditorialHero() {
  return (
    <section data-page-hero className="home-editorial-hero quince-editorial-hero">
      <div className="home-editorial-main">
        <div className="quince-mobile-cover" aria-hidden="true" />
        <div className="home-editorial-copy">
          <div className="home-editorial-eyebrow" aria-hidden="true">
            <span className="home-editorial-index">
              <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false"><path d="M 98 16 A 62 62 0 0 0 28 116" /></svg>
              <span className="home-editorial-index-dot" />
              <span>01</span>
            </span>
            <span className="home-editorial-rule" />
            <span>Fotografía y video para 15 años</span>
          </div>
          <div className="quince-mobile-copy-block">
            <h1 className="home-editorial-title">
              Fotógrafo<br />para 15 años<br /><span>en Buenos Aires</span>
            </h1>
            <p className="home-editorial-description">
              {INTRO}
            </p>
            <WhatsAppLink context="quince" showIcon={false} className="home-editorial-cta">
              <span className="quince-cta-desktop">{CTA_LABEL} por WhatsApp</span>
              <span className="quince-cta-mobile">{CTA_LABEL}</span>
              <span aria-hidden="true">⟶</span>
            </WhatsAppLink>
            <GoogleRating className="frame-hero-rating" />
          </div>
        </div>

        <div className="home-editorial-gallery" aria-label="Book de 15 años en un mercado de Buenos Aires">
          <figure className="home-editorial-photo home-editorial-photo--lead quince-editorial-photo--lead">
            <DesktopOnlyImage src="/images/quince-mercado-primer-plano.webp" alt="Retrato sonriente durante una sesión de 15 años en un mercado" width={1280} height={1920} fetchPriority="high" decoding="async" />
          </figure>
          <figure className="home-editorial-photo quince-editorial-photo--side-portrait">
            <DesktopOnlyImage src="/images/quince-mercado-retrato-vertical.webp" alt="Retrato de 15 años en un puesto del mercado histórico" width={1280} height={1920} loading="eager" decoding="async" />
          </figure>
        </div>
        <aside className="home-editorial-notes" aria-label="Detalles de la sesión">
          <p><span>01 / Historia</span><span>Hecha a tu manera</span></p>
          <p><span>02 / Retrato</span><span>Con tu estilo</span></p>
          <p><span>03 / Book de 15</span><span>Buenos Aires como escenario</span></p>
        </aside>
      </div>

      <div className="home-editorial-footer">
        <div><UsersRound className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Cobertura completa</span><small>Previa, entrada, vals y pista</small></div>
        <div><Film className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Foto y video</span><small>Reels, resumen y book</small></div>
        <div><Camera className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Planificación</span><small>Antes de la fiesta</small></div>
      </div>
    </section>
  );
}

function SectionBlock({
  title,
  children,
  eyebrow,
  altBg = false,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  altBg?: boolean;
  className?: string;
}) {
  return (
    <section className={`home-editorial-section ${className} ${altBg ? 'home-editorial-section--soft bg-zinc-900 border-y border-zinc-800/50' : 'bg-zinc-950'} py-20`.trim()}>
      <div className="container mx-auto px-6 md:px-12">
        {eyebrow && (
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</span>
        )}
        <h2 className="font-display mb-8 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export const QuincePage: React.FC = () => {
  return (
    <>
      <QuinceEditorialHero />

      <SectionBlock title="Cómo cubrimos tu fiesta" eyebrow="Cobertura" className="home-editorial-includes home-editorial-moments">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Cada fiesta tiene su propio ritmo. Coordinamos la cobertura con vos para que el registro acompañe la celebración sin interrumpirla.
        </p>
        <h3 className="font-display mb-6 text-2xl font-bold text-white">Los momentos de la noche</h3>
        <div className="home-editorial-timeline mb-14 max-w-3xl">
          {QUINCE_MOMENTS.map((item, i) => (
            <div key={item.title} className="group mb-8 flex gap-5 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-brand-orange transition-all group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                  {item.icon}
                </div>
                {i < QUINCE_MOMENTS.length - 1 && <div className="mt-2 h-full w-px bg-zinc-800/50" />}
              </div>
              <div className="pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">{item.time}</span>
                <h4 className="mt-0.5 font-display font-bold text-white">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-display mb-6 text-2xl font-bold text-white">Una cobertura a medida</h3>
        <div className="grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUINCE_INCLUDES.map((item) => (
            <div
              key={item.title}
              className="home-editorial-detail-card border border-zinc-800/60 bg-zinc-900/45 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mb-4 text-brand-orange">{item.icon}</div>
              <h4 className="mb-2 font-display text-lg font-bold text-zinc-900">{item.title}</h4>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Book de 15 años y sesión previa" className="home-editorial-book">
        <div className="max-w-5xl border border-zinc-800/70 bg-zinc-900/45 p-6 md:p-9">
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Una sesión tranquila, sin el ritmo de la fiesta, con tiempo para probar looks y lugares de Buenos Aires.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Fotos de sesiones de book de 15 años">
            <figure className="group overflow-hidden bg-zinc-900">
              <img src="/images/book-15-sunset.webp" alt="Sesión de 15 años al atardecer" width={1800} height={1200} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]" />
            </figure>
            <figure className="group overflow-hidden bg-zinc-900">
              <img src="/images/book-15-dsc01068.webp" alt="Retrato de book de 15 años en el mercado" width={1280} height={1920} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]" />
            </figure>
            <figure className="group overflow-hidden bg-zinc-900 sm:col-span-2 lg:col-span-1">
              <img src="/images/book-15-market.webp" alt="Retrato de cuerpo entero durante un book de 15 años" width={1800} height={1200} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]" />
            </figure>
          </div>
          <a href="/book-15-anos-buenos-aires/" className="mt-7 inline-block py-2 text-sm font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange">Conocé el book de fotos de 15 años</a>
        </div>
      </SectionBlock>

      <HowWeWork
        className="home-editorial-process"
        steps={[
          { number: '01', title: 'Nos contás fecha y salón', description: 'Vemos disponibilidad, zona, horarios y momentos principales del 15.' },
          { number: '02', title: 'Definimos foto, video o ambos', description: 'Armamos una propuesta según lo que quieras recibir.' },
          { number: '03', title: 'Coordinamos el cronograma', description: 'Repasamos la noche con vos para llegar preparados.' },
          { number: '04', title: 'Recibís el material editado', description: 'Fotos y video organizados para guardar, compartir y revivir la noche.' },
        ]}
      />

      <section className="home-editorial-section home-editorial-section--soft home-editorial-faq bg-zinc-900 py-20 border-y border-zinc-800/50">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
            Dudas comunes
          </span>
          <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-white md:text-4xl">
            Preguntas frecuentes sobre fotografía para 15 años
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} className="border border-zinc-800 bg-zinc-950/60 p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-zinc-400">
            Antes de pedir presupuesto, mirá la <a href="/blog/cuanto-cuesta-fotografo-15-anos-buenos-aires/" className={linkClass}>guía de precios para 15 años</a>,
            las <a href="/blog/fotos-que-no-pueden-faltar-fiesta-15/" className={linkClass}>fotos que no pueden faltar</a> y
            cómo trabajamos el <a href="/video-para-eventos-buenos-aires/" className={linkClass}>video para la fiesta</a>.
          </p>
        </div>
      </section>

      <WhatsAppCTASection
        title="¿Estás organizando un 15?"
        subtitle="Escribinos por WhatsApp con la fecha, el salón y qué te gustaría recibir. Te armamos una propuesta a medida."
        ctaLabel={CTA_LABEL}
        context="quince"
      />

      <RelatedServices current="/fotografo-15-anos-caba-gba/" />
    </>
  );
};
