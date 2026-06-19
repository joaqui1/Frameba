import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { Check, Film, MapPin, Sparkles } from 'lucide-react';

const INTRO =
  'Filmación profesional para eventos sociales y corporativos en Buenos Aires, CABA, Capital Federal, GBA y Zona Norte. En FRAME realizamos cobertura audiovisual para fiestas, casamientos, 15 años, eventos empresariales y celebraciones privadas, con videos resumen, reels y piezas editadas listas para compartir.';

const SERVICE_INCLUDES = [
  'Filmación profesional del evento',
  'Video resumen o highlight',
  'Reels verticales para redes sociales',
  'Edición con música y ritmo audiovisual',
  'Entrega digital del material final',
];

const COVERAGE_ZONES = ['Buenos Aires', 'CABA', 'GBA', 'Zona Norte', 'San Isidro'];

const VIDEO_FAQ = [
  {
    question: '¿Cubren eventos en CABA y Capital Federal?',
    answer: 'Sí, realizamos filmación de eventos en CABA y distintas zonas de Buenos Aires.',
  },
  {
    question: '¿También trabajan en GBA y Zona Norte?',
    answer: 'Sí, cubrimos eventos en GBA y Zona Norte, incluyendo zonas como San Isidro y alrededores, según disponibilidad.',
  },
  {
    question: '¿Qué tipo de videos entregan?',
    answer: 'Podemos entregar video resumen, reels verticales para redes sociales y piezas editadas según el tipo de evento.',
  },
  {
    question: '¿Hacen video para fiestas y eventos sociales?',
    answer: 'Sí, realizamos video para fiestas, casamientos, 15 años, cumpleaños y celebraciones privadas.',
  },
  {
    question: '¿Hacen video para eventos corporativos?',
    answer: 'Sí, también cubrimos eventos empresariales, presentaciones, encuentros institucionales y eventos de marca.',
  },
  {
    question: '¿Cómo pido presupuesto?',
    answer: 'Podés escribirnos por WhatsApp indicando fecha, lugar, duración y tipo de evento.',
  },
];

function H2Block({
  title,
  children,
  altBg = false,
  eyebrow,
}: {
  title: string;
  children: React.ReactNode;
  altBg?: boolean;
  eyebrow?: string;
}) {
  return (
    <section className={altBg ? 'bg-zinc-900 py-24 border-y border-zinc-800' : 'bg-zinc-950 py-24'}>
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

export const VideoEventosPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        badge="Video para eventos"
        h1={
          <>
            Video para eventos en <span className="whitespace-nowrap">Buenos Aires</span>
          </>
        }
        subtitle={INTRO}
        ctaLabel="Consultar video para mi evento"
        ctaContext="video"
        imageBase="/images/hero-video-portada"
        imageAlt="Filmación de eventos sociales y corporativos en Puerto Madero, CABA y GBA - Frame Estudio"
        responsive
        heroPolish
        mobileObjectPosition="50% 64%"
        desktopObjectPosition="50% 50%"
      />

      <H2Block title="Qué incluye el servicio de video para eventos" eyebrow="Cobertura audiovisual">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Cubrimos los momentos principales del evento y entregamos material editado con una estética moderna,
          dinámica y profesional.
        </p>
        <div className="grid max-w-5xl gap-4 md:grid-cols-5">
          {SERVICE_INCLUDES.map((item, i) => (
            <div
              key={item}
              className="group border border-zinc-800/70 bg-zinc-900/45 p-5 transition-colors hover:border-brand-orange/50 md:min-h-[180px]"
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

      <H2Block title="Filmación para eventos sociales y corporativos" altBg eyebrow="Servicio">
        <div className="max-w-4xl border border-zinc-800/70 bg-zinc-950/55 p-7 md:p-10">
          <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange">
            <Film size={22} />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>
              Realizamos video para fiestas, casamientos, cumpleaños de 15, eventos empresariales, presentaciones,
              celebraciones privadas y encuentros sociales.
            </p>
            <p>
              El objetivo es registrar los momentos importantes del evento con una mirada moderna, cuidando el ritmo,
              la estética y la emoción del material final.
            </p>
          </div>
        </div>
      </H2Block>

      <H2Block title="Video para eventos en CABA, GBA y Zona Norte">
        <div className="grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Trabajamos en Buenos Aires, CABA, Capital Federal, Gran Buenos Aires y Zona Norte. También cubrimos
              eventos en zonas como San Isidro y alrededores, según disponibilidad de fecha.
            </p>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">
              Zonas de cobertura principales
            </p>
            <div className="flex flex-wrap gap-3">
              {COVERAGE_ZONES.map((zone) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300"
                >
                  <MapPin size={14} className="text-brand-orange" />
                  {zone}
                </span>
              ))}
            </div>
          </div>
          <div className="border-l border-zinc-800 pl-6 md:pl-10">
            <p className="font-display text-3xl font-black leading-tight text-white md:text-5xl">
              Cobertura audiovisual adaptada al lugar, la duración del evento y el tipo de material que necesitás
              entregar o compartir.
            </p>
          </div>
        </div>
      </H2Block>

      <H2Block title="Videos para redes, reels y cobertura completa" altBg>
        <div className="max-w-4xl border border-zinc-800 bg-zinc-950/60 p-7 md:p-10">
          <div className="mb-6 flex items-center gap-3 text-brand-orange">
            <Sparkles size={22} />
            <span className="text-xs font-bold uppercase tracking-[0.28em]">Entrega flexible</span>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>
              Además del video principal, podemos preparar piezas cortas en formato vertical para Instagram, TikTok o
              WhatsApp, ideales para compartir los momentos más importantes del evento.
            </p>
            <p>
              El material puede adaptarse al tipo de evento: desde un video resumen más emocional hasta reels breves,
              dinámicos y listos para publicar.
            </p>
          </div>
        </div>
      </H2Block>

      <H2Block title="Pedí presupuesto para tu evento">
        <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
            Contanos la fecha, lugar, duración del evento y tipo de cobertura que necesitás. Te respondemos por
            WhatsApp con una propuesta acorde al evento.
          </p>
          <WhatsAppLink
            context="video"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-brand-orange hover:text-white"
          >
            Pedir presupuesto
          </WhatsAppLink>
        </div>
      </H2Block>

      <section className="bg-zinc-900 py-24 border-y border-zinc-800">
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

      <WhatsAppCTASection
        title="Consultá disponibilidad para tu evento"
        subtitle="Escribinos por WhatsApp con fecha, zona y tipo de evento. Te respondemos con una propuesta de filmación a medida."
        ctaLabel="Consultar disponibilidad"
        context="video"
      />
    </>
  );
};
