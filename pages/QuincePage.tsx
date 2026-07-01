import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Camera, Film, Clock, Sparkles, Music, Users, Heart, Star, MapPin } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const INTRO =
  'Fotografía y video para fiestas de 15 años en Buenos Aires, CABA y GBA. Cubrimos previa, entrada, vals, familia, pista, book de 15 y reels con una estética moderna, natural y cuidada.';

const QUINCE_MOMENTS = [
  {
    icon: <Sparkles size={20} />,
    time: 'Previa',
    title: 'Preparativos con amigas y familia.',
    desc: 'Maquillaje, vestido, detalles, brindis y esos minutos donde empieza a sentirse la noche.',
  },
  {
    icon: <Star size={20} />,
    time: 'Entrada',
    title: 'La llegada, el vals, los saludos y los momentos importantes sin cortar la emoción del evento.',
    desc: '',
  },
  {
    icon: <Heart size={20} />,
    time: 'Familia',
    title: 'Retratos con familia, amigas, amigos y personas clave para que nadie quede afuera.',
    desc: '',
  },
  {
    icon: <Music size={20} />,
    time: 'Pista',
    title: 'Movimiento, luces, abrazos y la energía real de la fiesta hasta el cierre contratado.',
    desc: '',
  },
];

const QUINCE_INCLUDES = [
  { icon: <Camera size={18} />, title: 'Fotografía del evento', desc: 'Cobertura de previa, entrada, familia, baile, pista y momentos principales.' },
  { icon: <Film size={18} />, title: 'Video y reels', desc: 'Video resumen y piezas cortas para redes, según la propuesta elegida.' },
  { icon: <Users size={18} />, title: 'Book de 15 años', desc: 'Sesión previa o en exteriores para sumar fotos cuidadas antes de la fiesta.' },
  { icon: <Clock size={18} />, title: 'Horario a medida', desc: 'Definimos la cantidad de horas según el cronograma y el tipo de entrega.' },
];

const FAQ_ITEMS = [
  {
    question: '¿Qué incluye una cobertura de fotografía para 15 años?',
    answer: 'Puede incluir previa, entrada, vals, familia, pista y momentos principales de la fiesta, según el cronograma del evento.',
  },
  {
    question: '¿Hacen foto y video para fiestas de 15?',
    answer: 'Sí, podemos cubrir fiestas de 15 con fotografía, video resumen, reels y piezas editadas para compartir.',
  },
  {
    question: '¿Se puede sumar book de 15 años?',
    answer: 'Sí, el book de 15 puede hacerse antes de la fiesta, en exteriores o en una locación a definir.',
  },
  {
    question: '¿Cubren previa, entrada, vals, familia y pista?',
    answer: 'Sí, podemos organizar la cobertura alrededor de esos momentos para registrar la historia completa del evento.',
  },
  {
    question: '¿Trabajan en CABA y GBA?',
    answer: 'Sí, trabajamos en Buenos Aires, CABA y Gran Buenos Aires, sujeto a disponibilidad de fecha y logística.',
  },
  {
    question: '¿Cómo se calcula un presupuesto de fotografía y video para 15 años?',
    answer: 'Se calcula según fecha, duración, zona, horas de cobertura, tipo de entrega y si se suma fotografía, video, book o reels.',
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

export const QuincePage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        badge="15 años"
        h1="Fotógrafo para 15 años en Buenos Aires"
        subtitle={INTRO}
        ctaLabel="Estoy organizando un 15"
        ctaContext="quince"
        imageBase="/images/hero-quince-portada"
        imageAlt="Fotógrafo para 15 años en Buenos Aires"
        responsive
        heroPolish
        mobileObjectPosition="52% 58%"
        desktopObjectPosition="50% 48%"
      />

      <SectionBlock title="Foto y video para fiestas de 15 años" eyebrow="Cobertura completa">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Armamos la cobertura según el cronograma de la fiesta y el tipo de material que querés recibir: fotografía,
          video, book de 15 años, reels o una entrega combinada.
        </p>
        <div className="grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUINCE_INCLUDES.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-800/60 bg-zinc-900/45 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mb-4 text-brand-orange">{item.icon}</div>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Cobertura de previa, entrada, vals, familia y pista" altBg eyebrow="Momentos del evento">
        <div className="max-w-3xl">
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
                <p className="mt-0.5 text-sm leading-relaxed text-zinc-500">
                  <span className="font-display text-lg font-bold text-white">{item.title}</span>
                  {item.desc ? ` ${item.desc}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Book de 15 años y sesión previa">
        <div className="max-w-4xl border border-zinc-800/70 bg-zinc-900/45 p-7 md:p-10">
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
            El book puede hacerse antes de la fiesta, en exteriores o en una locación a definir, y combinarse con la
            cobertura del evento, video resumen o reels.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Fotógrafo para 15 años en CABA y GBA" altBg>
        <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Trabajamos en Buenos Aires, CABA, Gran Buenos Aires y otras zonas según disponibilidad de fecha. Contanos
            dónde es la fiesta para confirmar logística y horarios.
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

      <SectionBlock title="Presupuesto para fotografía y video de 15 años">
        <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
            El presupuesto depende de la fecha, la duración, la zona, el tipo de cobertura y la entrega final. Podemos
            armar una propuesta para fotografía, video, book, reels o cobertura completa de la fiesta.
          </p>
          <WhatsAppLink
            context="quince"
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
        </div>
      </section>

      <HowWeWork
        steps={[
          { number: '01', title: 'Nos contás fecha y salón', description: 'Vemos disponibilidad, zona, horarios y momentos principales del 15.' },
          { number: '02', title: 'Definimos foto, video o ambos', description: 'Armamos una propuesta según previa, fiesta, pista y entrega esperada.' },
          { number: '03', title: 'Coordinamos el cronograma', description: 'Anotamos entrada, vals, brindis, shows, torta y fotos importantes.' },
          { number: '04', title: 'Recibís el material editado', description: 'Fotos y video organizados para guardar, compartir y revivir la noche.' },
        ]}
      />

      <WhatsAppCTASection
        title="¿Estás organizando un 15?"
        subtitle="Escribinos por WhatsApp con la fecha, zona y tipo de cobertura. Te armamos una propuesta de foto y video a medida."
        ctaLabel="Consultar disponibilidad"
        context="quince"
      />
    </>
  );
};
