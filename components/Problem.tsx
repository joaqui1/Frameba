import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WORLDS = [
  {
    title: "SOCIAL & 15 AÑOS",
    description: "Vibrante. Fashion. High Energy.",
    details: "Cobertura estilo aftermovie y videoclip, capturando la energía de la fiesta y la previa con estética moderna.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1974&auto=format&fit=crop", 
    tag: "Trending",
    alt: "Fiesta de 15 años en Buenos Aires brindis con copas y luces de boliche"
  },
  {
    title: "BODAS DE AUTOR",
    description: "Documental. Crudo. Emotivo.",
    details: "Capturamos miradas cómplices, la emoción real y la fiesta descontrolada con una mirada cinematográfica.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", 
    tag: "Cinematic",
    alt: "Fotografía documental de bodas en Buenos Aires pareja riendo natural con flash"
  },
  {
    title: "CORPORATIVO & BRANDS",
    description: "Nítido. Dinámico. Profesional.",
    details: "Contenido para redes, lanzamientos de producto y eventos que destacan la identidad de tu marca.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop", 
    tag: "Business",
    alt: "Cobertura audiovisual para evento corporativo de empresa en Capital Federal"
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="mundos" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              NUESTRAS ESPECIALIDADES
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            Tenemos equipos especializados para cada tipo de evento, asegurando el tono visual perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WORLDS.map((world, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600"
            >
              {/* Image with hover zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={world.image} 
                  alt={world.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold uppercase text-white tracking-wider">{world.tag}</span>
                </div>

                <h3 className="font-display font-black text-3xl text-white mb-2 uppercase tracking-tighter">
                  {world.title}
                </h3>
                <p className="text-brand-orange font-medium text-sm mb-4 uppercase tracking-wide">
                  {world.description}
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {world.details}
                  </p>
                  <a href="#contacto" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-brand-orange transition-colors">
                    Consultar <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};