import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Camera, Film, Clock, Sparkles, Music, Users, Heart, Star } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

const QUINCE_MOMENTS = [
  { icon: <Sparkles size={20} />, time: 'Previa', title: 'Preparativos con amigas y familia', desc: 'Maquillaje, vestido, detalles y esos minutos donde empieza a sentirse la noche.' },
  { icon: <Star size={20} />, time: 'Entrada', title: 'Llegada, recepción y vals', desc: 'Los momentos más esperados, registrados sin cortar la emoción ni ordenar de más.' },
  { icon: <Heart size={20} />, time: 'Familia', title: 'Fotos importantes', desc: 'Retratos con familia, amigas, amigos y personas clave para que nadie quede afuera.' },
  { icon: <Music size={20} />, time: 'Fiesta', title: 'Pista, shows y diversión', desc: 'Movimiento, luces, abrazos y la energía real de la fiesta hasta el cierre contratado.' },
];

const QUINCE_DELIVERABLES = [
  { icon: <Camera size={18} />, title: 'Fotos editadas', desc: 'Seleccionadas, corregidas y listas para descargar o compartir.' },
  { icon: <Film size={18} />, title: 'Video resumen', desc: 'Una pieza dinámica con los momentos fuertes de la noche.' },
  { icon: <Users size={18} />, title: 'Cobertura familiar', desc: 'Registro de familia, amigas, amigos, entrada, vals y brindis.' },
  { icon: <Clock size={18} />, title: 'Horario a medida', desc: 'Definimos la cantidad de horas según el cronograma de tu fiesta.' },
];

export const QuincePage: React.FC = () => {
  const handleClick = () => trackWhatsAppClick('quince');

  return (
    <>
      {/* ===== HERO — Portada con imagen ===== */}
      <ServicePageHero
        badge="15 Años"
        h1="Fotografía y video para fiestas de 15 años"
        subtitle="Una cobertura pensada para tu fiesta: preparativos, entrada, vals, familia, amigas, amigos y pista. Foto y video con energía real, sin hacer que la noche se sienta posada."
        ctaLabel="Estoy organizando un 15"
        ctaHref={getWhatsAppUrl('quince')}
        onCtaClick={handleClick}
        imageBase="/images/hero-quince-portada"
        imageAlt="Fotografía y video para fiesta de 15 años en salón de CABA y GBA por FRAME Estudio"
        responsive
        heroPolish
      />

      {/* ===== TIMELINE — Recorrido de la fiesta ===== */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              Cobertura de fotografía y filmación para cumpleaños de 15
            </h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              No todos los 15 son iguales. Armamos la cobertura según el cronograma y lo que querés recordar.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {QUINCE_MOMENTS.map((item, i) => (
              <div key={i} className="flex gap-5 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all shrink-0">
                    {item.icon}
                  </div>
                  {i < QUINCE_MOMENTS.length - 1 && <div className="w-px h-full bg-zinc-800/50 mt-2"></div>}
                </div>
                <div className="pb-4">
                  <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest">{item.time}</span>
                  <h3 className="font-display font-bold text-lg text-white mt-0.5 mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-10 text-center">
            Book de 15 años en exteriores y sesiones previas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {QUINCE_DELIVERABLES.map((item, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-800/40 rounded-lg px-4 py-5 hover:border-zinc-700 transition-colors">
                <div className="text-brand-orange shrink-0 mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <HowWeWork
        steps={[
          { number: '01', title: 'Nos contás fecha y salón', description: 'Vemos disponibilidad, zona, horarios y momentos principales del 15.' },
          { number: '02', title: 'Definimos foto, video o ambos', description: 'Armamos una propuesta según previa, fiesta, pista y entrega esperada.' },
          { number: '03', title: 'Coordinamos el cronograma', description: 'Anotamos entrada, vals, brindis, shows, torta y fotos importantes.' },
          { number: '04', title: 'Recibís el material editado', description: 'Fotos y video organizados para guardar, compartir y revivir la noche.' },
        ]}
      />

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="¿Estás organizando un 15?"
        subtitle="Escribinos por WhatsApp con la fecha y zona de la fiesta. Te armamos una propuesta a medida."
        ctaLabel="Consultar disponibilidad"
        context="quince"
      />
    </>
  );
};
