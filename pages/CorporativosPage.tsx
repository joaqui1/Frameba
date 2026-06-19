import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Briefcase, Building, Camera, Film, FileText, Linkedin, MapPin, Megaphone, MessageCircle, Send, Users } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const INTRO =
  'Cobertura audiovisual para empresas, conferencias, lanzamientos, presentaciones, jornadas internas y eventos institucionales en Buenos Aires, CABA y GBA. En FRAME realizamos fotografía, video, reels y piezas editadas para comunicación interna, redes, prensa y archivo de marca.';

const COVERAGE_INCLUDES = [
  { icon: <Camera size={18} />, title: 'Fotografía del evento', desc: 'Registro profesional de momentos clave, ambientación, equipo, speakers y público.' },
  { icon: <Film size={18} />, title: 'Video resumen o highlight', desc: 'Pieza editada para comunicar lo más importante del evento de forma clara y dinámica.' },
  { icon: <Linkedin size={18} />, title: 'Reels para redes y LinkedIn', desc: 'Clips breves para compartir en redes sociales, LinkedIn o canales internos.' },
  { icon: <Users size={18} />, title: 'Registro de speakers, público y equipo', desc: 'Cobertura de personas, marca, networking y momentos clave de la jornada.' },
  { icon: <Send size={18} />, title: 'Entrega digital del material editado', desc: 'Archivos organizados y listos para usar en comunicación, prensa, redes o archivo.' },
];

const EVENT_TYPES = [
  { icon: <Megaphone size={20} />, label: 'Conferencias' },
  { icon: <Users size={20} />, label: 'Congresos' },
  { icon: <MessageCircle size={20} />, label: 'Charlas' },
  { icon: <FileText size={20} />, label: 'Presentaciones' },
  { icon: <Briefcase size={20} />, label: 'Lanzamientos' },
  { icon: <Building size={20} />, label: 'Jornadas internas' },
  { icon: <Camera size={20} />, label: 'Eventos de marca' },
  { icon: <Megaphone size={20} />, label: 'Premiaciones' },
  { icon: <Building size={20} />, label: 'Inauguraciones' },
];

const COMMUNICATION_USES = [
  { icon: <Megaphone size={22} />, title: 'Redes sociales', desc: 'Fotos, reels y clips para publicar después del evento.' },
  { icon: <Linkedin size={22} />, title: 'LinkedIn', desc: 'Material profesional para comunicar hitos, equipos y novedades de empresa.' },
  { icon: <Building size={22} />, title: 'Web institucional', desc: 'Imágenes y videos para actualizar la presencia digital de la marca.' },
  { icon: <FileText size={22} />, title: 'Prensa', desc: 'Material visual para notas, comunicados y cobertura posterior.' },
  { icon: <Users size={22} />, title: 'Comunicación interna', desc: 'Contenido para newsletters, presentaciones y equipos internos.' },
  { icon: <Briefcase size={22} />, title: 'Archivo de marca', desc: 'Registro organizado para futuras piezas comerciales o institucionales.' },
];

const FAQ_ITEMS = [
  {
    question: '¿Hacen fotografía para eventos corporativos?',
    answer: 'Sí, realizamos fotografía para eventos de empresa, conferencias, presentaciones, lanzamientos, jornadas internas y eventos institucionales.',
  },
  {
    question: '¿También hacen video para eventos corporativos?',
    answer: 'Sí, podemos entregar video resumen, reels, piezas editadas para redes, comunicación interna o material institucional.',
  },
  {
    question: '¿Cubren eventos en CABA y GBA?',
    answer: 'Sí, trabajamos en Buenos Aires, CABA, Gran Buenos Aires y otras zonas según disponibilidad.',
  },
  {
    question: '¿Organizan eventos corporativos?',
    answer: 'No organizamos el evento completo. Nos enfocamos en la cobertura audiovisual: fotografía, video y material editado del evento.',
  },
  {
    question: '¿Qué datos necesitan para cotizar?',
    answer: 'Fecha, lugar, duración, tipo de evento, cantidad aproximada de asistentes y tipo de entrega que necesitás.',
  },
];

function SectionBlock({
  title,
  children,
  eyebrow,
  altBg = false,
}: {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  altBg?: boolean;
}) {
  return (
    <section className={altBg ? 'bg-zinc-900 py-20 border-y border-zinc-800/50' : 'bg-zinc-950 py-20'}>
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

export const CorporativosPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        badge="Corporativos"
        h1="Fotografía y video para eventos corporativos en Buenos Aires"
        subtitle={INTRO}
        ctaLabel="Solicitar cobertura"
        ctaContext="corporate"
        imageBase="/images/hero-corporativos-portada"
        imageAlt="Cobertura audiovisual para evento corporativo en CABA"
        responsive
        heroPolish
        mobileObjectPosition="50% 62%"
        desktopObjectPosition="50% 50%"
      />

      <SectionBlock title="Qué incluye la cobertura audiovisual corporativa" eyebrow="Servicio para empresas">
        <div className="grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {COVERAGE_INCLUDES.map((item) => (
            <article
              key={item.title}
              className="border border-zinc-800/60 bg-zinc-900/45 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mb-4 text-brand-orange">{item.icon}</div>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Eventos corporativos que cubrimos" altBg>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Nos adaptamos al tipo de evento y al objetivo de comunicación: desde una jornada interna hasta un lanzamiento,
          una conferencia o una presentación institucional.
        </p>
        <div className="grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {EVENT_TYPES.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 border border-zinc-800/60 bg-zinc-950/60 px-4 py-4 text-sm font-bold text-white transition-colors hover:border-zinc-700"
            >
              <span className="text-brand-orange">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Material para comunicación de empresa" eyebrow="Después del evento">
        <div className="grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNICATION_USES.map((item) => (
            <article
              key={item.title}
              className="flex gap-5 border border-zinc-800/60 bg-zinc-900/45 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mt-1 shrink-0 text-brand-orange">{item.icon}</div>
              <div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Cobertura en CABA, GBA y Buenos Aires" altBg>
        <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Trabajamos en Buenos Aires, CABA, Gran Buenos Aires y otras zonas según disponibilidad de fecha. Contanos
            dónde es el evento para confirmar logística, horarios y tipo de cobertura.
          </p>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">
              Zonas principales de cobertura
            </p>
            <div className="flex flex-wrap gap-3">
              {['Buenos Aires', 'CABA', 'GBA'].map((zone) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300"
                >
                  <MapPin size={14} className="text-brand-orange" />
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Presupuesto para eventos corporativos">
        <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
            El presupuesto depende de la fecha, el lugar, la duración del evento, la cantidad aproximada de asistentes,
            el tipo de cobertura y los entregables que necesitás. Escribinos por WhatsApp con esos datos y te pasamos
            una propuesta acorde al evento.
          </p>
          <WhatsAppLink
            context="corporate"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-brand-orange hover:text-white"
          >
            Pedir presupuesto
          </WhatsAppLink>
        </div>
      </SectionBlock>

      <section className="bg-zinc-900 py-20 border-y border-zinc-800/50">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
            Dudas comunes
          </span>
          <h2 className="font-display mb-10 text-3xl font-bold leading-tight text-white md:text-4xl">
            Preguntas frecuentes sobre eventos corporativos
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} className="border border-zinc-800 bg-zinc-950/60 p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork
        steps={[
          { number: '01', title: 'Nos pasan el brief', description: 'Evento, fecha, locación, horarios, marca y prioridades de comunicación.' },
          { number: '02', title: 'Definimos la cobertura', description: 'Acordamos foto, video, cantidad de horas, entregables y tiempos.' },
          { number: '03', title: 'Cubrimos los momentos clave', description: 'Speakers, público, networking, ambientación, producto y equipo.' },
          { number: '04', title: 'Entregamos material usable', description: 'Archivos editados y organizados para redes, prensa, web o comunicación interna.' },
        ]}
      />

      <WhatsAppCTASection
        title="¿Tenés un evento corporativo?"
        subtitle="Escribinos por WhatsApp con fecha, lugar, duración y tipo de entrega. Te armamos una propuesta de foto y video a medida."
        ctaLabel="Solicitar cobertura"
        context="corporate"
      />
    </>
  );
};
