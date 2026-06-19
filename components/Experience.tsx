import React from 'react';
import { Zap, Aperture, Clock, Film } from 'lucide-react';

const FEATURES = [
  {
    icon: <Film size={32} />,
    title: "Imagen cuidada",
    desc: "Luz, encuadre, color y sonido bien resueltos."
  },
  {
    icon: <Aperture size={32} />,
    title: "Registro natural",
    desc: "Momentos reales, sin frenar la fiesta ni invadir."
  },
  {
    icon: <Zap size={32} />,
    title: "Edición con intención",
    desc: "Selección ágil, ritmo claro y estética consistente."
  },
  {
    icon: <Clock size={32} />,
    title: "Material organizado",
    desc: "Fotos y videos listos para compartir, guardar o usar."
  }
];

export const Differentiators: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-zinc-900 border-y border-zinc-800 scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Text / Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            Nuestra mirada
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Foto y video para recordar lo que pasó, no solo cómo se veía.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Cubrimos fiestas de 15, casamientos y bodas, eventos corporativos y eventos sociales en CABA y Buenos Aires con foto y video claros, naturales y bien editados. Registramos lo importante sin interrumpir el momento ni forzar poses.
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
