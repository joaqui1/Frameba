import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Heart, Camera, Film, Sun, Clock, Star } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { WhatsAppLink } from '../components/WhatsAppLink';

const WEDDING_MOMENTS = [
  { icon: <Sun size={20} />, label: 'Preparativos', desc: 'Preparativos, detalles, nervios y primeras fotos antes de salir.' },
  { icon: <Star size={20} />, label: 'Civil', desc: 'Firma, abrazos, arroz, brindis y retratos con las personas más cercanas.' },
  { icon: <Heart size={20} />, label: 'Ceremonia', desc: 'Entrada, votos, anillos, miradas y salida sin interrumpir el momento.' },
  { icon: <Camera size={20} />, label: 'Retratos', desc: 'Fotos de pareja, familia y amigos con dirección simple y natural.' },
  { icon: <Film size={20} />, label: 'Recepción', desc: 'Ambientación, entrada, discursos, brindis y primeros momentos de fiesta.' },
  { icon: <Clock size={20} />, label: 'Fiesta', desc: 'Baile, emoción, abrazos y cierre según las horas contratadas.' },
];

const WEDDING_APPROACH = [
  { icon: <Heart size={24} />, label: 'Momentos reales', desc: 'Buscamos gestos, miradas y emociones sin fabricar escenas.' },
  { icon: <Camera size={24} />, label: 'Dirección simple', desc: 'Cuando hace falta ordenar una foto, lo hacemos rápido y claro.' },
  { icon: <Film size={24} />, label: 'Video con ritmo', desc: 'Una pieza editada para volver al clima del día, no solo a verlo.' },
  { icon: <Clock size={24} />, label: 'Cobertura flexible', desc: 'Civil, ceremonia y fiesta pueden combinarse según tu plan.' },
];

export const CasamientosPage: React.FC = () => {
  return (
    <>
      <ServicePageHero
        badge="Casamientos"
        h1="Fotógrafo para casamiento en Buenos Aires"
        subtitle="Fotografía y video para casamientos y bodas en Buenos Aires, CABA y GBA. Cubrimos civil, ceremonia, retratos y fiesta con una mirada natural, sin convertir el día en una producción ni cortar lo que está pasando."
        ctaLabel="Consultar casamiento"
        ctaContext="wedding"
        imageBase="/images/hero-casamiento-portada"
        imageAlt="Fotografía para casamiento civil y recepción en Buenos Aires"
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
                Servicio de fotografía y video para bodas en Buenos Aires
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Capturamos lo que pasa de verdad: miradas, risas, abrazos, nervios. No armamos escenas ni interrumpimos momentos. Vos disfrutá, nosotros registramos.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                El resultado es un material que se siente real, con una edición cuidada y una estética que se mantiene en el tiempo.
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

      {/* ===== COVERAGE DETAILS ===== */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">
            Fotógrafo para boda civil y coberturas completas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {WEDDING_MOMENTS.map((item, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-5 hover:border-brand-orange/30 transition-colors">
                <div className="text-brand-orange mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-zinc-200 text-xs font-bold uppercase tracking-wide text-center mb-2">{item.label}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-sm text-center mt-10 leading-relaxed max-w-2xl mx-auto">
            Nos adaptamos al ritmo de tu casamiento. Realizamos cobertura fotográfica y de video para casamientos
            civiles, ceremonias y fiestas en Buenos Aires, CABA, GBA, San Isidro, Zona Norte y otras zonas según
            disponibilidad.
          </p>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
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

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="¿Estás organizando tu casamiento?"
        subtitle="Escribinos por WhatsApp con la fecha y zona. También realizamos cobertura como fotógrafo para bodas en Buenos Aires, CABA, GBA y Zona Norte, según disponibilidad de fecha."
        ctaLabel="Consultar disponibilidad"
        context="wedding"
      />
    </>
  );
};
