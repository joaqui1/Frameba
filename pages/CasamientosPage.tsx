import React from 'react';
import { Heart, Camera, Film, Sun, Clock, Star, Wine, Music, UsersRound, CalendarDays } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { RelatedServices } from '../components/RelatedServices';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { GoogleRating } from '../components/GoogleRating';
import { CaseHighlight } from '../components/CaseHighlight';
import { CASES } from './casesData';

const COUPLE_SESSION_CASE = CASES.find(item => item.slug === 'sesion-novios-recoleta-marcelo-noelia')!;

const CTA_LABEL = 'Consultar casamiento';

const linkClass = 'font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange';

const WEDDING_MOMENTS = [
  { icon: <Sun size={20} />, label: 'Preparativos', desc: 'Detalles, nervios y las primeras fotos antes de salir.' },
  { icon: <Star size={20} />, label: 'Civil', desc: 'Firma, abrazos, arroz y retratos con los más cercanos.' },
  { icon: <Heart size={20} />, label: 'Ceremonia', desc: 'Entrada, votos, anillos y salida.' },
  { icon: <Camera size={20} />, label: 'Retratos', desc: 'Fotos de pareja, familia y amigos.' },
  { icon: <Wine size={20} />, label: 'Recepción', desc: 'Ambientación, entrada, discursos y brindis.' },
  { icon: <Music size={20} />, label: 'Fiesta', desc: 'Baile, abrazos y cierre según las horas contratadas.' },
];

const WEDDING_APPROACH = [
  { icon: <Heart size={24} />, label: 'Momentos reales', desc: 'Gestos y emociones tal como pasan, sin escenas armadas.' },
  { icon: <Camera size={24} />, label: 'Dirección simple', desc: 'Retratos y fotos de grupo resueltos en pocos minutos.' },
  { icon: <Film size={24} />, label: 'Foto y video', desc: 'Mismo equipo y misma mirada, coordinados entre sí.' },
  { icon: <Clock size={24} />, label: 'Cobertura flexible', desc: 'Contratan solo las horas y los momentos que necesitan.' },
];

export const FAQ_ITEMS = [
  {
    question: '¿Podemos contratar solo fotografía o también video?',
    answer: 'Sí. Pueden contratar fotografía sola, video solo o las dos cosas con el mismo equipo.',
  },
  {
    question: '¿Cubren solo el civil o también la fiesta?',
    answer: 'Las dos cosas. Se puede contratar solo el civil, solo la fiesta o el día completo, desde los preparativos hasta el cierre.',
  },
  {
    question: '¿Hacen sesión de novios antes del casamiento?',
    answer: 'Sí. Es una sesión tranquila, sin el apuro del día de la boda, y sirve para conocernos y que lleguen más sueltos frente a la cámara.',
  },
  {
    question: '¿Cuánto tardan en entregar el material?',
    answer: 'Depende del tipo de cobertura y de la cantidad de material. Al cotizar les damos una referencia clara de los tiempos de entrega.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'En CABA, Gran Buenos Aires, San Isidro, Vicente López y Zona Norte. Para otras zonas, consúltennos según la fecha.',
  },
];

const QUOTE_DATA = [
  'Fecha y locación.',
  'Qué momentos quieren cubrir.',
  'Cantidad aproximada de horas.',
  'Si buscan fotos, video o los dos.',
  'Tipo de entrega: fotos editadas, video resumen o clips.',
];

export const CasamientosPage: React.FC = () => {
  return (
    <div className="casamientos-editorial-page">
      <section data-page-hero className="home-editorial-hero casamientos-editorial-hero">
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
              <span>Fotografía y video para casamientos</span>
            </div>

            <h1 className="home-editorial-title">
              Fotógrafos <br />
              para casamientos <br />
              <span>en Buenos Aires</span>
            </h1>

            <p className="home-editorial-description">
              Fotografía y video para su casamiento: civil, ceremonia y fiesta. Una cobertura natural y cuidada que registra el día sin interrumpir lo que está pasando.
            </p>

            <WhatsAppLink context="wedding" showIcon={false} className="home-editorial-cta">
              <span>{CTA_LABEL}</span>
              <span className="home-editorial-cta-arrow" aria-hidden="true">⟶</span>
            </WhatsAppLink>
            <GoogleRating className="frame-hero-rating" />
          </div>

          <div className="home-editorial-gallery" aria-label="Fotografías de una sesión de novios en Buenos Aires">
            <figure className="home-editorial-photo home-editorial-photo--lead">
              <picture>
                <source media="(max-width: 767px)" srcSet="/images/wedding-dsc03959-mobile.webp" type="image/webp" />
                <img src="/images/wedding-dsc03950.webp" alt="Sesión de novios: pareja caminando frente a las columnas de la Facultad de Derecho" width={1536} height={2733} fetchPriority="high" decoding="async" />
              </picture>
            </figure>
            <div className="home-editorial-side-photos">
              <figure className="home-editorial-photo home-editorial-photo--top">
                <img src="/images/wedding-dsc04240.webp" alt="Sesión de novios con ramo en la escalinata de la Facultad de Derecho" width={1920} height={1079} loading="eager" decoding="async" />
              </figure>
              <figure className="home-editorial-photo home-editorial-photo--bottom">
                <img src="/images/wedding-dsc04292.webp" alt="Sesión de novios frente a la Floralis Genérica en Recoleta" width={1920} height={1079} loading="eager" decoding="async" />
              </figure>
            </div>
          </div>

          <aside className="home-editorial-notes" aria-label="Detalles de la cobertura">
            <p><span>01 / Mirada</span><span>Para su historia</span></p>
            <p><span>02 / Celebración</span><span>Momentos reales</span></p>
            <p><span>03 / Buenos Aires</span><span>En cada detalle</span></p>
          </aside>
        </div>

        <div className="home-editorial-footer" aria-hidden="true">
          <div>
            <UsersRound className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Cobertura a medida</span><small>Ustedes eligen los momentos</small>
          </div>
          <div>
            <CalendarDays className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Planificación</span><small>Un cronograma a su medida</small>
          </div>
          <div>
            <Camera className="home-editorial-footer-icon" size={28} strokeWidth={1.2} />
            <span>Foto y video</span><small>Una historia para recordar</small>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra mirada</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Su casamiento, contado como pasó
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                No convertimos el día en una producción. Seguimos el ritmo del evento, nos anticipamos a los momentos
                importantes y dejamos que el casamiento suceda. Cuando hace falta ordenar una foto, la resolvemos rápido
                y volvemos a lo que está pasando.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Si quieren sumar filmación, miren cómo trabajamos el <a href="/video-para-eventos-buenos-aires/" className={linkClass}>video para casamientos y eventos</a>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {WEDDING_APPROACH.map((item, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-6 text-center group hover:border-zinc-700 transition-colors">
                  <div className="text-brand-orange mb-3 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.label}</h3>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 text-center">
            Qué momentos cubrimos
          </h2>
          <p className="text-zinc-400 text-sm md:text-base text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Ustedes eligen qué quieren registrar y armamos la cobertura según el cronograma del día.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {WEDDING_MOMENTS.map((item, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-5 hover:border-brand-orange/30 transition-colors">
                <div className="text-brand-orange mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-zinc-200 text-xs font-bold uppercase tracking-wide text-center mb-2">{item.label}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseHighlight
        study={COUPLE_SESSION_CASE}
        title="Sesión de novios en Recoleta: Marcelo y Noelia"
        text="Antes del casamiento, muchas parejas eligen una sesión de fotos tranquila, sin el apuro del día de la boda. Con Marcelo y Noelia recorrimos la Facultad de Derecho y la Floralis Genérica, con dos cambios de ropa."
      />

      <HowWeWork
        steps={[
          { number: '01', title: 'Nos cuentan su fecha', description: 'Vemos disponibilidad, locaciones y horarios.' },
          { number: '02', title: 'Armamos la propuesta', description: 'Definimos momentos, horas y si suman video.' },
          { number: '03', title: 'Ordenamos el cronograma', description: 'Marcamos los momentos clave para llegar preparados.' },
          { number: '04', title: 'Entregamos la historia editada', description: 'Una selección cuidada para revivir el casamiento.' },
        ]}
      />

      <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Dudas comunes</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-10 leading-tight">
            Preguntas frecuentes sobre fotógrafos para casamientos
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} className="border border-zinc-800 bg-zinc-950/60 rounded-xl p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-page-final-cta className="casamientos-budget-section py-20 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center mx-auto">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Presupuesto</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
                ¿Están organizando su casamiento?
              </h2>
              <p className="text-zinc-400 leading-relaxed md:text-lg mb-6">
                El presupuesto depende de la cobertura que elijan. Escríbannos por WhatsApp con estos datos y les
                pasamos una propuesta.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Antes de comparar propuestas, lean <a href="/blog/fotografo-video-casamiento-que-incluye/" className="casamientos-inline-link">qué incluye la cobertura de un casamiento</a> y
                {' '}<a href="/blog/cuantas-horas-contratar-fotografo-evento/" className="casamientos-inline-link">cuántas horas conviene contratar</a>.
              </p>
            </div>
            <div className="casamientos-quote-card p-6 md:p-8">
              <h3 className="font-display font-bold text-xl mb-4">Qué nos sirve saber</h3>
              <ul className="space-y-2 text-sm leading-relaxed mb-8 list-disc pl-5">
                {QUOTE_DATA.map(item => <li key={item}>{item}</li>)}
              </ul>
              <WhatsAppLink
                context="wedding"
                className="flex w-full items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all"
              >
                {CTA_LABEL}
              </WhatsAppLink>
              <GoogleRating />
            </div>
          </div>
        </div>
      </section>

      <RelatedServices current="/fotografia-video-casamientos-buenos-aires/" />
    </div>
  );
};
