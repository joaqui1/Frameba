import React from 'react';
import { Briefcase, Building, Camera, Check, Film, FileText, Linkedin, MapPin, Megaphone, MessageCircle, Send, Smartphone, Users } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { RelatedServices } from '../components/RelatedServices';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { CaseHighlight } from '../components/CaseHighlight';
import { CASES } from './casesData';

const EKOPARTY_CASE = CASES.find(item => item.slug === 'ekoparty-2026-cobertura-foto-video')!;

const CTA_LABEL = 'Solicitar cobertura';

const linkClass = 'font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange';

const COVERAGE_INCLUDES = [
  { icon: <Camera size={18} />, title: 'Fotografía del evento', desc: 'Speakers, público, networking, ambientación, marca y equipo.' },
  { icon: <Film size={18} />, title: 'Video resumen', desc: 'Una pieza editada que cuenta lo más importante del evento.' },
  { icon: <Smartphone size={18} />, title: 'Reels y clips', desc: 'Piezas verticales y breves con los momentos clave.' },
  { icon: <Send size={18} />, title: 'Entrega organizada', desc: 'Material editado y ordenado según los entregables acordados.' },
];

const EVENT_TYPES = [
  { icon: <Megaphone size={20} />, label: 'Conferencias' },
  { icon: <Users size={20} />, label: 'Congresos' },
  { icon: <MessageCircle size={20} />, label: 'Charlas' },
  { icon: <FileText size={20} />, label: 'Presentaciones' },
  { icon: <Briefcase size={20} />, label: 'Lanzamientos' },
  { icon: <Building size={20} />, label: 'Jornadas internas' },
  { icon: <Camera size={20} />, label: 'Activaciones de marca' },
  { icon: <Megaphone size={20} />, label: 'Premiaciones' },
  { icon: <Building size={20} />, label: 'Inauguraciones' },
  { icon: <Users size={20} />, label: 'Capacitaciones' },
  { icon: <MessageCircle size={20} />, label: 'Workshops' },
  { icon: <Camera size={20} />, label: 'Stands en ferias' },
  { icon: <Briefcase size={20} />, label: 'Fiestas de fin de año' },
];

const COMMUNICATION_USES = [
  { icon: <Megaphone size={22} />, title: 'Redes sociales', desc: 'Fotos, reels y clips para publicar después del evento.' },
  { icon: <Linkedin size={22} />, title: 'LinkedIn', desc: 'Material profesional para comunicar hitos, equipos y novedades de empresa.' },
  { icon: <Building size={22} />, title: 'Web institucional', desc: 'Imágenes y videos para actualizar la presencia digital de la marca.' },
  { icon: <FileText size={22} />, title: 'Prensa', desc: 'Material visual para notas, comunicados y cobertura posterior.' },
  { icon: <Users size={22} />, title: 'Comunicación interna', desc: 'Contenido para newsletters, presentaciones y equipos internos.' },
  { icon: <Briefcase size={22} />, title: 'Archivo de marca', desc: 'Registro organizado para futuras piezas comerciales o institucionales.' },
];

export const FAQ_ITEMS = [
  {
    question: '¿Puedo contratar solo fotos o solo video?',
    answer: 'Sí. Podés contratar fotografía, video o los dos con el mismo equipo coordinado.',
  },
  {
    question: '¿Qué datos necesitan para cotizar?',
    answer: 'Fecha, lugar, duración, tipo de evento, cantidad aproximada de asistentes y qué entregables necesitás.',
  },
  {
    question: '¿Cuánto tardan en entregar el material?',
    answer: 'Depende de la duración del evento y de los entregables. Al cotizar te damos una referencia clara de tiempos.',
  },
  {
    question: '¿Cubren fiestas de fin de año de empresa?',
    answer: 'Sí. Registramos discursos, brindis, reconocimientos internos, fotos de equipo y la fiesta, y podemos sumar un video resumen para compartir con todo el equipo. Noviembre y diciembre concentran muchas fechas, así que conviene consultar disponibilidad con anticipación.',
  },
  {
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer: 'Sí. Cubrimos desde jornadas internas y presentaciones chicas hasta congresos y eventos empresariales con stand, escenario y varios espacios en simultáneo. La propuesta se arma según el evento.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'En CABA y Gran Buenos Aires. Para otras zonas, consultanos según la fecha.',
  },
];

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
    <section className={`frame-corporate-content-section${altBg ? ' frame-corporate-content-section--soft' : ''} ${className}`.trim()}>
      <div className="container mx-auto px-6 md:px-12">
        {eyebrow && (
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</span>
        )}
        <h2 className="frame-corporate-content-title font-display mb-8 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export const CorporativosPage: React.FC = () => {
  return (
    <>
      <section data-page-hero className="home-editorial-hero frame-book-editorial-hero frame-video-editorial-hero">
        <div className="frame-video-mobile-cover" aria-hidden="true">
          <img src="/images/video-eventos-dsc02772-vertical.webp" alt="Presentación en escenario durante un evento corporativo en Buenos Aires" width={2560} height={1438} fetchPriority="high" decoding="async" />
        </div>
        <div className="home-editorial-main frame-book-editorial-main">
          <div className="home-editorial-copy frame-book-editorial-copy">
            <nav aria-label="Breadcrumb" className="frame-book-breadcrumb">
              <a href="/">Inicio</a><span aria-hidden="true">/</span><span>Eventos corporativos</span>
            </nav>
            <div className="home-editorial-eyebrow" aria-hidden="true">
              <span className="home-editorial-index">
                <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false"><path d="M 98 16 A 62 62 0 0 0 28 116" /></svg>
                <span className="home-editorial-index-dot" /><span>01</span>
              </span>
              <span className="home-editorial-rule" /><span>Foto y video para empresas</span>
            </div>
            <h1 className="home-editorial-title frame-book-editorial-title frame-corporate-events-title">Fotógrafo para eventos corporativos <span>en Buenos Aires</span></h1>
            <p className="home-editorial-description frame-book-editorial-description">
              Foto, video y reels de conferencias, lanzamientos y eventos de empresa, con material listo para comunicar.
            </p>
            <div className="frame-book-editorial-actions">
              <WhatsAppLink context="corporate" showIcon={false} className="home-editorial-cta">
                {CTA_LABEL}<span aria-hidden="true">⟶</span>
              </WhatsAppLink>
              <a href="#cobertura" className="frame-book-editorial-secondary">Conocé el servicio <span aria-hidden="true">↓</span></a>
            </div>
            <GoogleRating className="frame-hero-rating" />
          </div>

          <div className="home-editorial-gallery frame-book-editorial-gallery frame-video-editorial-gallery frame-corporate-events-gallery" aria-label="Cobertura audiovisual de eventos corporativos">
            <figure className="home-editorial-photo home-editorial-photo--lead">
              <img src="/images/video-eventos-dsc02772-vertical.webp" alt="Presentación en escenario durante un evento con público" width={2560} height={1438} fetchPriority="high" decoding="async" />
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
            <p><span>01 / Empresa</span><span>Tu historia</span></p>
            <p><span>02 / Cobertura</span><span>Foto y video</span></p>
            <p><span>03 / Entrega</span><span>Lista para comunicar</span></p>
          </aside>
        </div>

        <div className="home-editorial-footer frame-book-editorial-footer">
          <div><Check className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Eventos y equipos</span></div>
          <div><Film className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Foto, video y reels</span></div>
          <div><MapPin className="home-editorial-footer-icon" size={24} strokeWidth={1.2} /><span>Coordinación a medida</span></div>
        </div>
      </section>

      <div id="cobertura" className="scroll-mt-24">
      <SectionBlock title="Qué incluye la fotografía y el video para eventos de empresa" eyebrow="Servicio para empresas">
        <div className="grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COVERAGE_INCLUDES.map((item) => (
            <article
              key={item.title}
              className="frame-corporate-content-card border border-zinc-800/60 bg-zinc-900/45 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mb-4 text-brand-orange">{item.icon}</div>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
      </div>
      <CaseHighlight
        study={EKOPARTY_CASE}
        title="Ekoparty 2026: foto y video para una empresa de ciberseguridad"
        text="Cubrimos la participación de una empresa en Ekoparty, una de las conferencias de hacking y ciberseguridad más importantes de Latinoamérica: su stand, charlas, la competencia CTF y la premiación en el escenario principal."
      />

      <SectionBlock title="Fotos y video para fiestas de fin de año de empresa" eyebrow="Noviembre y diciembre">
        <div className="grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              La fiesta de fin de año es uno de los pocos momentos en que todo el equipo está junto. Registramos el evento
              para que quede como recuerdo y como material para comunicar el cierre del año: en redes, en LinkedIn o puertas adentro.
            </p>
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              Podés contratar solo fotos, solo video o los dos. Como estas semanas concentran muchas fechas, conviene escribirnos
              apenas tengas el día y el lugar confirmados.
            </p>
          </div>
          <ul className="frame-corporate-checklist grid gap-3 text-sm">
            {[
              'Discursos, brindis y reconocimientos internos',
              'Fotos grupales por área y del equipo completo',
              'Ambientación, marca y detalles del lugar',
              'La fiesta y los momentos espontáneos',
              'Video resumen y clips verticales para compartir',
            ].map((item) => (
              <li key={item} className="frame-corporate-content-card flex items-start gap-3 border border-zinc-800/60 bg-zinc-900/45 px-4 py-3">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      <SectionBlock title="Eventos que cubrimos y cómo comunicar cada uno" eyebrow="Una cobertura, múltiples usos" altBg>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Adaptamos el registro al formato de cada evento empresarial y a lo que tu empresa necesita comunicar después.
        </p>
        <h3 className="mb-5 font-display text-xl font-bold text-white">Tipos de evento</h3>
        <div className="mb-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {EVENT_TYPES.map((item) => (
            <div
              key={item.label}
              className="frame-corporate-event-type flex items-center gap-3 border border-zinc-800/60 bg-zinc-900/45 px-4 py-4 text-sm font-bold text-white transition-colors hover:border-zinc-700"
            >
              <span className="text-brand-orange">{item.icon}</span>
              <span className="min-w-0 hyphens-auto leading-snug">{item.label}</span>
            </div>
          ))}
        </div>
        <h3 className="mb-5 font-display text-xl font-bold text-white">Material para comunicar después del evento</h3>
        <div className="grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNICATION_USES.map((item) => (
            <article
              key={item.title}
              className="frame-corporate-content-card flex gap-5 border border-zinc-800/60 bg-zinc-950/60 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mt-1 shrink-0 text-brand-orange">{item.icon}</div>
              <div>
                <h4 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-400">
          ¿Necesitás fotos de perfil o retratos del equipo? Organizamos una sesión aparte de
          {' '}<a href="/fotografia-corporativa-buenos-aires/" className={linkClass}>fotografía corporativa y retratos para LinkedIn</a>.
        </p>
      </SectionBlock>

      <HowWeWork
        className="home-editorial-process"
        steps={[
          { number: '01', title: 'Nos pasás el brief', description: 'Evento, fecha, locación, horarios y prioridades de comunicación.' },
          { number: '02', title: 'Definimos la cobertura', description: 'Foto, video, horas, entregables y tiempos.' },
          { number: '03', title: 'Cubrimos el evento', description: 'Nos movemos con el cronograma sin interrumpir la agenda.' },
          { number: '04', title: 'Entregamos material usable', description: 'Archivos editados y organizados para cada canal.' },
        ]}
      />

      <section className="frame-corporate-editorial-faq">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
            Dudas comunes
          </span>
          <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-white md:text-4xl">
            Preguntas frecuentes sobre fotografía y video para eventos corporativos
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} className="frame-corporate-content-card border border-zinc-800 bg-zinc-950/60 p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-zinc-400">
            Para llegar con todo claro, mirá <a href="/blog/cuanto-cuesta-fotografo-eventos-buenos-aires/" className="font-bold text-zinc-900 underline decoration-brand-orange underline-offset-8 hover:text-brand-orange">cuánto cuesta un fotógrafo para eventos</a> y
            {' '}<a href="/blog/cuantas-horas-contratar-fotografo-evento/" className="font-bold text-zinc-900 underline decoration-brand-orange underline-offset-8 hover:text-brand-orange">cuántas horas de cobertura conviene contratar</a>.
          </p>
        </div>
      </section>

      <WhatsAppCTASection
        title="¿Tenés un evento corporativo?"
        subtitle="Escribinos por WhatsApp con la fecha, el lugar y qué necesitás comunicar. Te armamos una propuesta de cobertura a medida."
        ctaLabel={CTA_LABEL}
        context="corporate"
      />

      <RelatedServices current="/eventos-corporativos-buenos-aires/" />
    </>
  );
};
