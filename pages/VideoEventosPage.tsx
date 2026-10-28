import React, { useState } from 'react';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { RelatedServices } from '../components/RelatedServices';
import { HowWeWork } from '../components/HowWeWork';
import { Check, Film, Play, Sparkles } from 'lucide-react';

const CTA_LABEL = 'Consultar video para mi evento';

const linkClass = 'font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange';

const SERVICE_INCLUDES = [
  'Filmación de los momentos principales',
  'Video resumen editado con música',
  'Reels verticales para Instagram, TikTok o WhatsApp',
  'Clips cortos de los momentos clave',
  'Entrega digital lista para compartir',
];

const VIDEOS = [
  { id: 'D-h5rOfkN8U', title: 'Reel de evento 1' },
  { id: 'ufyNKEbTxdI', title: 'Reel de evento 2' },
];

export const VIDEO_FAQ = [
  {
    question: '¿Qué tipo de videos entregan?',
    answer: 'Un video resumen editado con música y, si lo necesitás, reels verticales y clips cortos para redes. Definimos el formato según el tipo de evento.',
  },
  {
    question: '¿Pueden hacer foto y video en el mismo evento?',
    answer: 'Sí. Podés contratar solo video o sumarlo a la cobertura de fotos, con el mismo equipo coordinado.',
  },
  {
    question: '¿Cuánto tardan en entregar el video?',
    answer: 'Depende de la duración del evento y de las piezas que pidas. Al cotizar te damos una referencia clara de tiempos.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'En CABA, Gran Buenos Aires, San Isidro y Zona Norte. Para otras zonas, consultanos según la fecha.',
  },
];

function H2Block({
  id,
  title,
  children,
  altBg = false,
  eyebrow,
  className = '',
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  altBg?: boolean;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`home-editorial-section${altBg ? ' home-editorial-section--soft' : ''} ${className}`.trim()}>
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

/** Shows the YouTube thumbnail and only loads the player when someone clicks play. */
function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="frame-video-reel">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Reproducir ${title.toLowerCase()}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`Vista previa del video: ${title}`} width={480} height={360} loading="lazy" decoding="async" />
          <span className="frame-video-reel-play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
        </button>
      )}
    </figure>
  );
}

export const VideoEventosPage: React.FC = () => {
  return (
    <>
      <section data-page-hero className="home-editorial-hero frame-book-editorial-hero frame-video-editorial-hero">
        <div className="frame-video-mobile-cover" aria-hidden="true"><img src="/images/video-eventos-dsc02772-vertical.webp" alt="Presentación en escenario durante un evento en Buenos Aires" width={4200} height={2360} fetchPriority="high" decoding="async" /></div>
        <div className="home-editorial-main frame-book-editorial-main">
          <div className="home-editorial-copy frame-book-editorial-copy">
            <nav aria-label="Breadcrumb" className="frame-book-breadcrumb">
              <a href="/">Inicio</a><span aria-hidden="true">/</span><span>Video para eventos</span>
            </nav>
            <div className="home-editorial-eyebrow" aria-hidden="true">
              <span className="home-editorial-index">
                <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false"><path d="M 98 16 A 62 62 0 0 0 28 116" /></svg>
                <span className="home-editorial-index-dot" /><span>01</span>
              </span>
              <span className="home-editorial-rule" /><span>Video social y corporativo</span>
            </div>
            <h1 className="home-editorial-title frame-book-editorial-title">Video para eventos en <span className="whitespace-nowrap">Buenos Aires</span></h1>
            <p className="home-editorial-description frame-book-editorial-description">
              Filmamos fiestas, casamientos, 15 años y eventos de empresa, y entregamos un video resumen y reels listos para compartir.
            </p>
            <div className="frame-book-editorial-actions">
              <WhatsAppLink context="video" showIcon={false} className="home-editorial-cta">
                {CTA_LABEL}<span aria-hidden="true">⟶</span>
              </WhatsAppLink>
              <a href="#incluye" className="frame-book-editorial-secondary">Conocé la cobertura <span aria-hidden="true">↓</span></a>
            </div>
            <GoogleRating className="frame-hero-rating" />
          </div>

          <div className="home-editorial-gallery frame-book-editorial-gallery frame-video-editorial-gallery" aria-label="Cobertura de video en eventos">
            <figure className="home-editorial-photo home-editorial-photo--lead">
              <img src="/images/video-eventos-dsc02772-vertical.webp" alt="Presentación en escenario durante un evento con público" width={4200} height={2360} fetchPriority="high" decoding="async" />
            </figure>
            <div className="home-editorial-side-photos">
              <figure className="home-editorial-photo home-editorial-photo--top">
                <img src="/images/video-eventos-dsc03063.webp" alt="Equipo premiado en un evento tecnológico" width={1800} height={1012} loading="eager" decoding="async" />
              </figure>
              <figure className="home-editorial-photo home-editorial-photo--bottom">
                <img src="/images/video-eventos-dsc02748.webp" alt="Expositor en escenario durante una conferencia" width={1800} height={1012} loading="eager" decoding="async" />
              </figure>
            </div>
          </div>
          <aside className="home-editorial-notes frame-book-editorial-notes" aria-label="Detalles de la cobertura">
            <p><span>01 / Historia</span><span>En movimiento</span></p>
            <p><span>02 / Edición</span><span>Con ritmo propio</span></p>
            <p><span>03 / Eventos</span><span>Sociales y empresas</span></p>
          </aside>
        </div>

        <div className="home-editorial-footer frame-book-editorial-footer">
          <div><Check className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Solo video o con fotos</span></div>
          <div><Film className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Video resumen y reels</span></div>
          <div><Sparkles className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Cada momento, bien contado</span></div>
        </div>
      </section>

      <H2Block id="incluye" title="Qué incluye la cobertura de video" eyebrow="Cobertura" altBg>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Armamos la entrega según el evento: un video resumen más emocional para una fiesta, o piezas cortas y
          dinámicas para comunicar un evento de empresa.
        </p>
        <div className="grid max-w-5xl gap-4 md:grid-cols-5">
          {SERVICE_INCLUDES.map((item, i) => (
            <div
              key={item}
              className="frame-video-includes-card group border border-zinc-800/70 bg-zinc-900/45 p-5 transition-colors hover:border-brand-orange/50 md:min-h-[180px]"
            >
              <span className="mb-8 block font-display text-sm font-black text-brand-orange">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Check size={18} className="mb-4 text-zinc-500 transition-colors group-hover:text-brand-orange" />
              <p className="text-sm font-medium leading-relaxed text-zinc-200">{item}</p>
            </div>
          ))}
        </div>
      </H2Block>

      <H2Block title="Para qué eventos filmamos" eyebrow="Eventos">
        <div className="grid max-w-5xl gap-4 md:grid-cols-2">
          <div className="frame-video-content-card border border-zinc-800/70 bg-zinc-950/55 p-7 md:p-8">
            <h3 className="font-display mb-4 text-xl font-bold text-white">Sociales</h3>
            <p className="text-base leading-relaxed text-zinc-400">
              <a href="/fotografia-video-casamientos-buenos-aires/" className={linkClass}>Casamientos</a>,
              {' '}<a href="/fotografo-15-anos-caba-gba/" className={linkClass}>fiestas de 15</a>, cumpleaños y
              celebraciones privadas. Un video resumen para revivir la noche y reels para compartir al día siguiente.
            </p>
          </div>
          <div className="frame-video-content-card border border-zinc-800/70 bg-zinc-950/55 p-7 md:p-8">
            <h3 className="font-display mb-4 text-xl font-bold text-white">Corporativos</h3>
            <p className="text-base leading-relaxed text-zinc-400">
              Conferencias, presentaciones, lanzamientos y eventos de marca. Piezas para LinkedIn, prensa y
              comunicación interna. Mirá la <a href="/eventos-corporativos-buenos-aires/" className={linkClass}>cobertura de eventos corporativos</a>.
            </p>
          </div>
        </div>
      </H2Block>

      <HowWeWork className="frame-video-process-section" />

      <section className="home-editorial-faq">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
            Dudas comunes
          </span>
          <h2 className="font-display mb-12 text-3xl font-bold leading-tight text-white md:text-4xl">
            Preguntas frecuentes sobre video para eventos
          </h2>
          <div className="space-y-4">
            {VIDEO_FAQ.map((item) => (
              <article key={item.question} className="border border-zinc-800 bg-zinc-950/60 p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <H2Block id="videos" title="Mirá cómo filmamos" eyebrow="Nuestro trabajo">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Dos reels de eventos que cubrimos, en el formato vertical que se comparte en redes.
        </p>
        <div className="frame-video-reels">
          {VIDEOS.map(video => <VideoCard key={video.id} {...video} />)}
        </div>
      </H2Block>

      <WhatsAppCTASection
        title="Consultá disponibilidad para tu evento"
        subtitle="Escribinos por WhatsApp con la fecha, el lugar, la duración y el tipo de evento. Te respondemos con una propuesta de filmación a medida."
        ctaLabel={CTA_LABEL}
        context="video"
      />

      <RelatedServices current="/video-para-eventos-buenos-aires/" />
    </>
  );
};
