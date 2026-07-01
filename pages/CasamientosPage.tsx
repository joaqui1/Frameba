import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Heart, Camera, Film, Sun, Clock, Star } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const WEDDING_MOMENTS = [
  { icon: <Sun size={20} />, label: 'Preparativos', desc: 'Detalles, nervios, primeras fotos y momentos previos antes de salir.' },
  { icon: <Star size={20} />, label: 'Civil', desc: 'Firma, abrazos, arroz, brindis y retratos con las personas más cercanas.' },
  { icon: <Heart size={20} />, label: 'Ceremonia', desc: 'Entrada, votos, anillos, miradas y salida sin interrumpir el momento.' },
  { icon: <Camera size={20} />, label: 'Retratos', desc: 'Fotos de pareja, familia y amigos con dirección simple y natural.' },
  { icon: <Film size={20} />, label: 'Recepción', desc: 'Ambientación, entrada, discursos, brindis y primeros momentos de fiesta.' },
  { icon: <Clock size={20} />, label: 'Fiesta', desc: 'Baile, emoción, abrazos y cierre según las horas contratadas.' },
];

const WEDDING_APPROACH = [
  { icon: <Heart size={24} />, label: 'Momentos reales', desc: 'Buscamos gestos, miradas y emociones sin fabricar escenas.' },
  { icon: <Camera size={24} />, label: 'Dirección simple', desc: 'Cuando hace falta ordenar una foto, lo hacemos rápido y claro.' },
  { icon: <Film size={24} />, label: 'Foto y video', desc: 'Podés contratar fotografía, video o una cobertura combinada.' },
  { icon: <Clock size={24} />, label: 'Cobertura flexible', desc: 'Civil, ceremonia y fiesta pueden combinarse según tu plan.' },
];

const FAQ_ITEMS = [
  {
    question: '¿Hacen fotografía y video para casamientos?',
    answer: 'Sí, realizamos cobertura de fotografía, video o ambas opciones para casamientos, bodas civiles, ceremonias y fiestas.',
  },
  {
    question: '¿Cubren casamiento civil y fiesta?',
    answer: 'Sí, podemos cubrir civil, ceremonia, recepción, retratos y fiesta según la duración y el tipo de cobertura que necesites.',
  },
  {
    question: '¿Trabajan en CABA, GBA, San Isidro y Zona Norte?',
    answer: 'Sí, trabajamos en Buenos Aires, CABA, Capital Federal, GBA, San Isidro, Zona Norte y otras zonas según disponibilidad de fecha.',
  },
  {
    question: '¿Se puede contratar solo fotografía o también video?',
    answer: 'Sí, se puede consultar por fotografía sola, video solo o cobertura completa de foto y video para el casamiento.',
  },
  {
    question: '¿Cómo se calcula el presupuesto para un casamiento?',
    answer: 'Depende de la fecha, locaciones, duración, cantidad de horas, si necesitás civil, ceremonia, fiesta, fotografía, video o ambos, y el tipo de entrega final.',
  },
  {
    question: '¿Cuánto tardan en entregar el material?',
    answer: 'El plazo de entrega depende del tipo de cobertura y cantidad de material. Al cotizar te indicamos una referencia clara de tiempos de entrega.',
  },
];

export const CasamientosPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        badge="Casamientos"
        h1="Fotógrafos para casamientos en Buenos Aires"
        subtitle="Fotografía y video para casamientos, bodas civiles, ceremonias y fiestas en Buenos Aires, CABA, Capital Federal y GBA. Cobertura natural, simple y cuidada para registrar el día sin cortar lo que está pasando."
        ctaLabel="Consultar casamiento"
        ctaContext="wedding"
        imageBase="/images/hero-casamiento-portada"
        imageAlt="Fotografía y video para casamiento en Buenos Aires"
        responsive
        heroPolish
        mobileObjectPosition="50% 62%"
        desktopObjectPosition="50% 50%"
      />

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra mirada</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Fotografía y video para casamientos y bodas
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Cubrimos casamientos con una mirada natural y documental: momentos reales, retratos simples,
                detalles, ceremonia, fiesta y todo lo que pasa alrededor sin convertir el día en una producción.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Podés consultar por fotografía, video o una cobertura combinada de foto y video para casamiento,
                según la fecha, las locaciones, la duración y el tipo de entrega que necesites.
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
            Cobertura de civil, ceremonia y fiesta
          </h2>
          <p className="text-zinc-400 text-sm md:text-base text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Realizamos cobertura fotográfica y de video para casamientos civiles, bodas, ceremonias, recepciones y fiestas.
            Nos adaptamos al ritmo del evento para registrar lo importante sin invadir.
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

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1fr] gap-10 items-start">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Zonas</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                Casamientos en CABA, GBA, San Isidro y Zona Norte
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Trabajamos en Buenos Aires, CABA, Capital Federal, Gran Buenos Aires, San Isidro, Vicente López,
                Zona Norte y otras zonas según disponibilidad de fecha. Si ya tienen fecha y locación, podemos
                confirmar logística y horarios para armar una propuesta acorde.
              </p>
            </div>
            <div className="border border-zinc-800/60 bg-zinc-900/45 rounded-xl p-6">
              <h3 className="font-display font-bold text-xl text-white mb-4">Qué datos ayudan para cotizar</h3>
              <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                <li>Fecha del casamiento y zona o locación.</li>
                <li>Si necesitan civil, ceremonia, recepción, fiesta o cobertura completa.</li>
                <li>Cantidad aproximada de horas de cobertura.</li>
                <li>Si buscan fotografía, video o foto y video.</li>
                <li>Tipo de entrega: fotos editadas, video resumen, clips o material adicional.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HowWeWork
        steps={[
          { number: '01', title: 'Nos cuentan su fecha', description: 'Vemos disponibilidad, locaciones, horarios y tipo de cobertura.' },
          { number: '02', title: 'Armamos la propuesta', description: 'Definimos civil, ceremonia, fiesta, foto, video y cantidad de horas.' },
          { number: '03', title: 'Ordenamos el cronograma', description: 'Marcamos momentos importantes para llegar preparados sin invadir.' },
          { number: '04', title: 'Entregamos la historia editada', description: 'Fotos y video con una selección cuidada para revivir el casamiento.' },
        ]}
      />

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid max-w-5xl gap-8 md:grid-cols-[1fr_auto] md:items-center mx-auto">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Presupuesto</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
                Presupuesto para fotógrafo de casamiento
              </h2>
              <p className="text-zinc-400 leading-relaxed md:text-lg">
                El presupuesto depende de la fecha, la duración de la cobertura, las locaciones, si necesitás civil,
                ceremonia, fiesta, fotografía, video o ambos, y el tipo de entrega final. Escribinos por WhatsApp con
                esos datos y te pasamos una propuesta acorde al casamiento.
              </p>
            </div>
            <WhatsAppLink
              context="wedding"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all hover:bg-brand-orange hover:text-white"
            >
              Pedir presupuesto
            </WhatsAppLink>
          </div>
        </div>
      </section>

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

      <WhatsAppCTASection
        title="¿Estás organizando tu casamiento?"
        subtitle="Escribinos por WhatsApp con la fecha y zona. Realizamos fotografía y video para casamientos en Buenos Aires, CABA, GBA, San Isidro y Zona Norte, según disponibilidad."
        ctaLabel="Consultar disponibilidad"
        context="wedding"
      />
    </>
  );
};
