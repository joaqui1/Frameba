import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  srcSet?: string;
  alt: string;
  href: string;
  tag: string;
}

interface Props {
  cards: ServiceCard[];
}

export const ServiceCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">
              Servicios
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
              Qué cubrimos
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            Foto y video para distintos tipos de eventos en CABA y Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="group relative h-[480px] w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600 block"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.image}
                  srcSet={card.srcSet}
                  alt={card.alt}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold uppercase text-white tracking-wider">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <span className="text-brand-orange text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver más <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
