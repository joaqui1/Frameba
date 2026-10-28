import React from 'react';
import { Camera, UsersRound, CalendarDays } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { GoogleReviews } from '../components/GoogleReviews';

const SERVICE_CARDS = [
  {
    title: 'Video para eventos en Buenos Aires',
    description: 'Filmación profesional para eventos sociales y corporativos.',
    image: '/images/home-video-card-1536.webp',
    srcSet: '/images/home-video-card-1536.webp 1536w, /images/home-video-card-2048.webp 2048w',
    alt: 'Filmación profesional para evento social en Buenos Aires',
    href: '/video-para-eventos-buenos-aires/',
    tag: 'Video',
    mobilePosition: '50% 26%',
    desktopPosition: '50% 50%',
    imageClassName: 'home-service-card-image--video',
  },
  {
    title: 'Foto y video para 15 años',
    description: 'Cobertura de fiestas de 15 con fotos, video y material editado para compartir.',
    image: '/images/home-quince-card-1536.webp',
    srcSet: '/images/home-quince-card-1536.webp 1536w, /images/home-quince-card-2048.webp 2048w',
    alt: 'Fotografía y video para fiesta de 15 años',
    href: '/fotografo-15-anos-caba-gba/',
    tag: '15 Años',
    mobilePosition: '52% 48%',
    desktopPosition: '52% 50%',
  },
  {
    title: 'Fotografía y video para casamientos',
    description: 'Registro natural de la ceremonia, la fiesta y los momentos principales.',
    image: '/images/home-wedding-card-1536.webp',
    srcSet: '/images/home-wedding-card-1536.webp 1536w, /images/home-wedding-card-2048.webp 2048w',
    alt: 'Fotografía para casamiento en Buenos Aires',
    href: '/fotografia-video-casamientos-buenos-aires/',
    tag: 'Bodas',
    mobilePosition: '48% 48%',
    desktopPosition: '50% 50%',
  },
  {
    title: 'Foto y video para eventos corporativos',
    description: 'Cobertura para eventos de empresa, presentaciones y contenido institucional.',
    image: '/images/home-corporate-card-1536.webp',
    srcSet: '/images/home-corporate-card-1536.webp 1536w, /images/home-corporate-card-2048.webp 2048w',
    alt: 'Cobertura audiovisual para evento corporativo',
    href: '/eventos-corporativos-buenos-aires/',
    tag: 'Empresas',
    mobilePosition: '50% 66%',
    desktopPosition: '50% 64%',
    imageClassName: 'home-service-card-image--corporate',
  },
];

const CTA_LABEL = 'Pedir presupuesto';

export const HOME_FAQ = [
  {
    question: '¿Qué incluye la cobertura de un evento?',
    answer: 'La cobertura fotográfica, la selección y edición del material y la entrega digital. Si sumás video, también un video resumen y reels.',
  },
  {
    question: '¿Hacen foto y video en el mismo evento?',
    answer: 'Sí. Podés contratar fotografía, video o los dos con el mismo equipo coordinado.',
  },
  {
    question: '¿Por qué contratar un fotógrafo profesional para un evento?',
    answer: 'Porque ayuda a registrar momentos importantes con criterio de luz, encuadre, timing y edición, sin depender de fotos improvisadas.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'En CABA, Gran Buenos Aires y Zona Norte. Para otras zonas, consultanos según la fecha.',
  },
];

function imagePositionStyle(mobilePosition: string, desktopPosition: string): React.CSSProperties {
  return {
    '--frame-mobile-position': mobilePosition,
    '--frame-desktop-position': desktopPosition,
  } as React.CSSProperties;
}


type SketchName = 'camera' | 'eye' | 'sliders' | 'gallery';

/** Hand-drawn line icons in the same style as the guide covers. */
function ApproachSketch({ name }: { name: SketchName }) {
  const drawing = {
    camera: (
      <>
        <path d="M40 46h12l6-9h24l6 9h14a5 5 0 0 1 5 5v41a5 5 0 0 1-5 5H40a5 5 0 0 1-5-5V51a5 5 0 0 1 5-5Z" />
        <path d="M41 47h11l6-9h24l6 9h13" opacity=".35" transform="translate(.8 .7)" />
        <circle cx="70" cy="71" r="17" />
        <circle cx="70" cy="71" r="12.5" opacity=".5" />
        <path d="M93 53h7M42 42h7" />
      </>
    ),
    eye: (
      <>
        <path d="M30 71c12-15 26-22 40-22s28 7 40 22c-12 15-26 22-40 22S42 86 30 71Z" />
        <path d="M31 71c12-14 25-21 39-21s27 7 39 21" opacity=".35" transform="translate(.6 .8)" />
        <circle cx="70" cy="71" r="14" />
        <circle cx="70" cy="71" r="10" opacity=".5" />
      </>
    ),
    sliders: (
      <>
        <path d="M38 53h28m10 0h36M38 71h14m10 0h50M38 89h40m10 0h24" />
        <path d="M39 54h26m12 0h34" opacity=".3" transform="translate(0 .8)" />
        <circle cx="71" cy="53" r="5" />
        <circle cx="57" cy="71" r="5" />
        <circle cx="83" cy="89" r="5" />
      </>
    ),
    gallery: (
      <>
        <path d="M44 84V44a3 3 0 0 1 3-3h52a3 3 0 0 1 3 3v6" opacity=".7" />
        <rect x="52" y="51" width="62" height="47" rx="3" />
        <path d="M53 52h60" opacity=".35" transform="translate(.6 .8)" />
        <circle cx="98" cy="64" r="5" />
        <path d="M56 94l15-17 13 11 9-8 19 15" />
      </>
    ),
  }[name];
  return (
    <svg viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <circle className="home-approach-sketch-halo" cx="44" cy="40" r="28" />
      <path className="home-approach-sketch-rule" d="M24 44v58" />
      <circle className="home-approach-sketch-dot" cx="118" cy="30" r="2.3" />
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        {drawing}
      </g>
    </svg>
  );
}

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section data-page-hero className="home-editorial-hero">
        <div className="home-editorial-main">
          <div className="home-editorial-copy">
            <div className="home-editorial-eyebrow" aria-hidden="true">
              <span className="home-editorial-index">
                <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false">
                  <path d="M 98 16 A 62 62 0 0 0 28 116" />
                </svg>
                <span className="home-editorial-index-dot" />
                <span>01</span>
              </span>
              <span className="home-editorial-rule" />
              <span>Fotografía de eventos</span>
            </div>
            <h1 className="home-editorial-title">
              Fotógrafo <br />
              <span>para eventos{' '}</span>
              <br />
              <span>en Buenos Aires</span>
            </h1>

            <p className="home-editorial-description">
              Servicio de fotografía para eventos sociales, empresariales y celebraciones privadas. En FRAME realizamos
              coberturas con una estética moderna, natural y cuidada.
            </p>

            <WhatsAppLink
              context="general"
              showIcon={false}
              className="home-editorial-cta"
            >
              <span className="home-editorial-cta-desktop-label">{CTA_LABEL} por WhatsApp</span>
              <span className="home-editorial-cta-mobile-label">{CTA_LABEL}</span>
              <span className="home-editorial-cta-arrow" aria-hidden="true">⟶</span>
            </WhatsAppLink>
            <GoogleRating className="frame-hero-rating" />
          </div>

          <div className="home-editorial-gallery" aria-label="Fotografías de eventos en Buenos Aires">
            <figure className="home-editorial-photo home-editorial-photo--lead">
              <img src="/images/home-editorial-01.webp" alt="Retrato al atardecer en Buenos Aires" width={1400} height={2491} fetchPriority="high" decoding="async" />
            </figure>
            <div className="home-editorial-side-photos">
              <figure className="home-editorial-photo home-editorial-photo--top">
                <img src="/images/home-floralis-horizontal.webp" alt="Conferencista durante una presentación ante el público" width={1536} height={1024} loading="eager" decoding="async" />
              </figure>
              <figure className="home-editorial-photo home-editorial-photo--bottom">
                <img src="/images/home-atardecer-horizontal.webp" alt="Pareja de novios frente a una fachada neoclásica en Buenos Aires" width={1536} height={1024} loading="eager" decoding="async" />
              </figure>
            </div>
          </div>

          <aside className="home-editorial-notes" aria-label="Detalles de las fotografías">
            <p><span>01 / Mirada</span><span>Para tus historias</span></p>
            <p><span>02 / Floralis</span><span>Buenos Aires, noche 2026</span></p>
            <p><span>03 / Atardecer</span><span>En la ciudad</span></p>
          </aside>
        </div>

        <div className="home-editorial-footer" aria-hidden="true">
          <div>
            <UsersRound className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Eventos sociales</span><small>Bodas, 15 años, cumpleaños</small>
          </div>
          <div>
            <CalendarDays className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Eventos corporativos</span><small>Marcas, lanzamientos, experiencias</small>
          </div>
          <div>
            <Camera className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Foto y video</span><small>Una cobertura a tu medida</small>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section id="servicios" className="home-editorial-section home-editorial-services py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Servicios</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Fotografía profesional para eventos</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Elegí el tipo de evento para ver cómo lo cubrimos, qué incluye y trabajos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICE_CARDS.map((card, i) => (
              <article key={i} className="group relative h-[480px] w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={card.image}
                    srcSet={card.srcSet}
                    alt={card.alt}
                    width={1536}
                    height={2110}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    decoding="async"
                    className={`frame-art-directed h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70 ${card.imageClassName ?? ''}`}
                    style={imagePositionStyle(card.mobilePosition, card.desktopPosition)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent"></div>
                </div>
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-[10px] font-bold uppercase text-white tracking-wider">{card.tag}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">
                    <a href={card.href} className="hover:text-brand-orange transition-colors">
                      {card.title}
                    </a>
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS ===== */}
      <section className="home-editorial-section home-editorial-approach py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra mirada</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Fotografía para recordar lo que pasó, no solo cómo se veía.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Buscamos momentos reales y fotos bien resueltas, para que el recuerdo se parezca a lo que viviste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800/50 pt-16">
            {[
              { icon: 'camera' as const, title: 'Imagen cuidada', desc: 'Luz, encuadre y color bien resueltos.' },
              { icon: 'eye' as const, title: 'Registro natural', desc: 'Momentos reales, sin frenar la fiesta ni invadir.' },
              { icon: 'sliders' as const, title: 'Edición con intención', desc: 'Selección ágil, ritmo claro y estética consistente.' },
              { icon: 'gallery' as const, title: 'Material organizado', desc: 'Fotos listas para compartir, guardar o usar.' },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="home-approach-sketch" aria-hidden="true"><ApproachSketch name={feat.icon} /></div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <HowWeWork className="home-editorial-process" />

      <GoogleReviews />

      {/* ===== FAQ ===== */}

      <section className="home-editorial-section home-editorial-faq py-24 bg-zinc-950">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
            Dudas comunes
          </span>
          <h2 className="font-display mb-12 text-3xl font-bold leading-tight text-white md:text-4xl">
            Preguntas frecuentes sobre fotografía para eventos
          </h2>
          <div className="space-y-4">
            {HOME_FAQ.map((item) => (
              <article key={item.question} className="border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="Consultá disponibilidad para tu evento"
        subtitle="Contanos la fecha, la zona y el tipo de evento. Te respondemos por WhatsApp con una propuesta a medida."
        ctaLabel={CTA_LABEL}
        context="general"
      />
    </>
  );
};
