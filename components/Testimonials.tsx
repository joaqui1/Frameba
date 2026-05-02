import React from 'react';
import { Aperture, Film, Layers } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: <Aperture size={18} />,
    title: "Dirección justa",
    text: "Indicaciones breves, solo cuando hacen falta."
  },
  {
    icon: <Film size={18} />,
    title: "Ritmo real",
    text: "Seguimos el pulso de la fiesta, la ceremonia o la marca."
  },
  {
    icon: <Layers size={18} />,
    title: "Entrega clara",
    text: "Material listo para revivir, compartir o publicar."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#09090b_0%,#14100f_48%,#120d0c_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-900 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120d0c] to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-brand-orange">
              Cómo se siente la cobertura
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">
              Presente, estética y sin forzar nada.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-300 md:text-lg">
              Registramos lo importante sin apagar la energía del evento.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="group border-t border-white/10 pt-5 text-center">
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center bg-white text-zinc-950 transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
