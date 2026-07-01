import React from 'react';
import { Film, Aperture, Clock, Zap, MapPin } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const SERVICE_CARDS = [
  {
    title: 'Video para eventos en Buenos Aires',
    description: 'Filmación para eventos sociales y corporativos en CABA y GBA.',
    image: '/images/video-eventos-buenos-aires-frame-1536.webp',
    srcSet: '/images/video-eventos-buenos-aires-frame-768.webp 768w, /images/video-eventos-buenos-aires-frame-1536.webp 1024w',
    alt: 'Filmación profesional para evento social en Buenos Aires',
    href: '/video-para-eventos-buenos-aires/',
    tag: 'Video',
    mobilePosition: '50% 52%',
    desktopPosition: '50% 50%',
  },
  {
    title: 'Foto y video para 15 años',
    description: 'Cobertura de fiestas de 15 con fotos, video y material editado para compartir.',
    image: '/images/fotografia-15-anos-caba-frame-1536.webp',
    srcSet: '/images/fotografia-15-anos-caba-frame-768.webp 768w, /images/fotografia-15-anos-caba-frame-1536.webp 1024w',
    alt: 'Fotografía y video para fiesta de 15 años en CABA',
    href: '/fotografo-15-anos-caba-gba/',
    tag: '15 Años',
    mobilePosition: '52% 48%',
    desktopPosition: '52% 50%',
  },
  {
    title: 'Fotografía y video para casamientos',
    description: 'Registro natural de la ceremonia, la fiesta y los momentos principales.',
    image: '/images/fotografia-casamiento-buenos-aires-frame-1536.webp',
    srcSet: '/images/fotografia-casamiento-buenos-aires-frame-768.webp 768w, /images/fotografia-casamiento-buenos-aires-frame-1536.webp 1024w',
    alt: 'Fotografía para casamiento en Buenos Aires',
    href: '/fotografia-video-casamientos-buenos-aires/',
    tag: 'Bodas',
    mobilePosition: '48% 48%',
    desktopPosition: '50% 50%',
  },
  {
    title: 'Foto y video para eventos corporativos',
    description: 'Cobertura para eventos de empresa, presentaciones y contenido institucional.',
    image: '/images/evento-corporativo-buenos-aires-frame-1536.webp',
    srcSet: '/images/evento-corporativo-buenos-aires-frame-768.webp 768w, /images/evento-corporativo-buenos-aires-frame-1536.webp 1024w',
    alt: 'Cobertura audiovisual para evento corporativo en CABA',
    href: '/eventos-corporativos-buenos-aires/',
    tag: 'Empresas',
    mobilePosition: '50% 58%',
    desktopPosition: '50% 56%',
  },
];

function imagePositionStyle(mobilePosition: string, desktopPosition: string): React.CSSProperties {
  return {
    '--frame-mobile-position': mobilePosition,
    '--frame-desktop-position': desktopPosition,
  } as React.CSSProperties;
}

export const HomePage: React.FC = () => {
  const heroImageStyle = imagePositionStyle('50% 58%', '50% 50%');

  return (
    <>
      {/* Hero */}
    <section data-page-hero className="relative flex h-[78svh] min-h-[620px] max-h-[720px] w-full items-center justify-center overflow-hidden bg-zinc-950 md:h-screen md:min-h-[700px] md:max-h-none">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet="/images/hero-home.webp"
            />
            <source
              media="(max-width: 767px)"
              type="image/webp"
              srcSet="/images/hero-home-mobile.webp"
            />
            <source media="(min-width: 768px)" srcSet="/images/hero-home.jpg" />
            <img
              src="/images/hero-home-mobile.jpg"
              alt="Fotografía profesional para eventos sociales nocturnos en CABA y Buenos Aires — Frame Estudio"
              width={900}
              height={1600}
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="frame-art-directed w-full h-full object-cover opacity-[0.78] max-md:opacity-[0.82] md:opacity-60 md:mix-blend-overlay"
              style={heroImageStyle}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent md:via-zinc-950/50" />
          <div className="absolute inset-0 bg-zinc-950/25 md:bg-zinc-950/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] md:leading-[0.9] tracking-normal mb-8 max-w-6xl mx-auto">
            Fotógrafo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
              para eventos{' '}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
              en Buenos Aires
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            En FRAME realizamos fotografía profesional para eventos sociales y corporativos en Buenos Aires, CABA y GBA.
            Cubrimos fiestas de 15, casamientos y bodas, eventos empresariales y celebraciones privadas con una estética
            moderna, profesional y cercana.
          </p>

          <WhatsAppLink
            context="general"
            className="w-full md:w-auto px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2 min-w-[160px]"
          >
            Pedir presupuesto por WhatsApp
          </WhatsAppLink>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section id="servicios" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Servicios</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Servicios para eventos</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Coberturas pensadas para cada tipo de evento, con material listo para guardar, compartir o comunicar.
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
                    width={1024}
                    height={1536}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    decoding="async"
                    className="frame-art-directed h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                    style={imagePositionStyle(card.mobilePosition, card.desktopPosition)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
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
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra mirada</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Fotografía para recordar lo que pasó, no solo cómo se veía.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Cubrimos fiestas de 15, casamientos, eventos corporativos y eventos sociales en CABA, GBA y Buenos Aires, con fotografías claras, naturales y bien editadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800/50 pt-16">
            {[
              { icon: <Film size={32} />, title: 'Imagen cuidada', desc: 'Luz, encuadre y color bien resueltos.' },
              { icon: <Aperture size={32} />, title: 'Registro natural', desc: 'Momentos reales, sin frenar la fiesta ni invadir.' },
              { icon: <Zap size={32} />, title: 'Edición con intención', desc: 'Selección ágil, ritmo claro y estética consistente.' },
              { icon: <Clock size={32} />, title: 'Material organizado', desc: 'Fotos listas para compartir, guardar o usar.' },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-6 p-4 bg-zinc-800 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">{feat.icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <HowWeWork />

      {/* ===== LOCAL COVERAGE ===== */}
      <section className="py-16 bg-zinc-900/50 border-y border-zinc-800/30">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={18} className="text-brand-orange" />
            <h2 className="text-zinc-200 font-display font-bold text-2xl md:text-3xl">
              Cobertura en CABA, GBA y Buenos Aires
            </h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Trabajamos en Buenos Aires, CABA, Capital Federal, Gran Buenos Aires, Zona Norte y otras zonas según disponibilidad de fecha.
            Si tenés un evento, podés escribirnos con el lugar, fecha y tipo de cobertura que necesitás.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="Consultá disponibilidad para tu evento"
        subtitle="Contanos la fecha, zona, duración y tipo de evento. Te respondemos por WhatsApp con una propuesta de fotografía acorde a lo que necesitás."
        ctaLabel="Consultar disponibilidad"
        context="general"
      />
    </>
  );
};
