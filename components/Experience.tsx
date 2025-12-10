import React from 'react';
import { Zap, Aperture, Clock, Film } from 'lucide-react';

const FEATURES = [
  {
    icon: <Film size={32} />,
    title: "Cine 4K",
    desc: "Usamos cámaras de cine digital 4K y lentes prime. La misma tecnología que ves en tus series favoritas."
  },
  {
    icon: <Aperture size={32} />,
    title: "Registro Espontáneo",
    desc: "Nuestro estilo es 90% documental. No vamos a interrumpir tu fiesta para hacerte posar 20 minutos."
  },
  {
    icon: <Zap size={32} />,
    title: "Edición de Autor",
    desc: "Color grading de autor y montaje con ritmo. Nada de videos largos y aburridos."
  },
  {
    icon: <Clock size={32} />,
    title: "Entrega Rápida",
    desc: "Te entregamos un teaser de 1 minuto a las 48hs del evento para que rompas las redes."
  }
];

export const Differentiators: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Text / Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            Nuestra Historia
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Somos una productora audiovisual impulsada por la excelencia.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Con más de 5 años de experiencia, entendemos el peso de capturar un momento irrepetible. Combinamos narrativa cinematográfica con una visión moderna para entregarte un producto que no solo registra tu evento, sino que lo eleva. Recuerdos que vas a querer revivir en loop.
          </p>
        </div>

        {/* Icons / Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800/50 pt-16">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 bg-zinc-800 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};