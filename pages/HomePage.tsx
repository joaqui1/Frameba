import React from 'react';
import { Film, Aperture, Clock, Zap, MapPin, ArrowRight } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const SERVICE_CARDS = [
  {
    title: '15 Años',
    description: 'Previa, fiesta y pista con ritmo real. Fotografía y video para tu fiesta de 15.',
    image: '/images/fotografia-15-anos-caba-frame-1536.webp',
    srcSet: '/images/fotografia-15-anos-caba-frame-768.webp 768w, /images/fotografia-15-anos-caba-frame-1536.webp 1024w',
    alt: 'Fotografía y video para fiesta de 15 años en CABA, San Isidro y Pilar por FRAME Estudio',
    href: '/fotografo-15-anos-caba-gba/',
    tag: '15 Años',
    mobilePosition: '52% 48%',
    desktopPosition: '52% 50%',
  },
  {
    title: 'Casamientos',
    description: 'Natural, cercano y con emoción real. Cobertura de civil, ceremonia y fiesta.',
    image: '/images/fotografia-casamiento-buenos-aires-frame-1536.webp',
    srcSet: '/images/fotografia-casamiento-buenos-aires-frame-768.webp 768w, /images/fotografia-casamiento-buenos-aires-frame-1536.webp 1024w',
    alt: 'Fotografía de boda y casamiento en Palermo y Buenos Aires por FRAME Estudio',
    href: '/fotografia-video-casamientos-buenos-aires/',
    tag: 'Bodas',
    mobilePosition: '48% 48%',
    desktopPosition: '50% 50%',
  },
  {
    title: 'Video',
    description: 'Filmación de fiestas y eventos sociales o corporativos. Resumen, reels y video completo.',
    image: '/images/video-eventos-buenos-aires-frame-1536.webp',
    srcSet: '/images/video-eventos-buenos-aires-frame-768.webp 768w, /images/video-eventos-buenos-aires-frame-1536.webp 1024w',
    alt: 'Filmación y video para eventos en Puerto Madero, CABA y GBA por FRAME Estudio',
    href: '/video-para-eventos-buenos-aires/',
    tag: 'Video',
    mobilePosition: '50% 52%',
    desktopPosition: '50% 50%',
  },
  {
    title: 'Corporativos',
    description: 'Claro, prolijo y listo para comunicar. Foto y video para eventos de empresa.',
    image: '/images/evento-corporativo-buenos-aires-frame-1536.webp',
    srcSet: '/images/evento-corporativo-buenos-aires-frame-768.webp 768w, /images/evento-corporativo-buenos-aires-frame-1536.webp 1024w',
    alt: 'Cobertura de video para eventos corporativos en Puerto Madero y CABA por FRAME Estudio',
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
              alt="Fotografía y video profesional para eventos sociales nocturnos en CABA y Buenos Aires — FRAME Estudio"
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
            FOTOGRAFÍA Y VIDEO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
              PARA EVENTOS
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
              EN BUENOS AIRES.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Coberturas para <span className="text-white font-medium">15 años, casamientos, video y eventos corporativos</span>{' '}
            con una estética moderna, cuidada y natural.
          </p>

          <WhatsAppLink
            context="general"
            className="w-full md:w-auto px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2 min-w-[160px]"
          >
            Consultar por mi fecha
          </WhatsAppLink>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section id="servicios" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Servicios</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Qué cubrimos</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Foto y video para distintos tipos de eventos en CABA y Buenos Aires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICE_CARDS.map((card, i) => (
              <a key={i} href={card.href} className="group relative h-[480px] w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600 block">
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
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">{card.title}</h3>
                  <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{card.description}</p>
                  <span className="text-brand-orange text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ver más <ArrowRight size={14} />
                  </span>
                </div>
              </a>
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
              Foto y video para recordar lo que pasó, no solo cómo se veía.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Cubrimos fiestas de 15, casamientos, video para eventos, corporativos y eventos sociales en CABA y Buenos Aires con foto y video claros, naturales y bien editados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800/50 pt-16">
            {[
              { icon: <Film size={32} />, title: 'Imagen cuidada', desc: 'Luz, encuadre, color y sonido bien resueltos.' },
              { icon: <Aperture size={32} />, title: 'Registro natural', desc: 'Momentos reales, sin frenar la fiesta ni invadir.' },
              { icon: <Zap size={32} />, title: 'Edición con intención', desc: 'Selección ágil, ritmo claro y estética consistente.' },
              { icon: <Clock size={32} />, title: 'Material organizado', desc: 'Fotos y videos listos para compartir, guardar o usar.' },
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
            <span className="text-zinc-400 font-medium">Cobertura en Buenos Aires</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cubrimos eventos en CABA, Gran Buenos Aires, Zona Norte, Zona Sur y Zona Oeste. Consultanos por coberturas en otras zonas.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="¿Tenés un evento?"
        subtitle="Escribinos por WhatsApp con el tipo de evento, fecha y zona. Te respondemos en el día con una propuesta a medida."
        ctaLabel="Pedir propuesta por WhatsApp"
        context="general"
      />
    </>
  );
};
