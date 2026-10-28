import React from 'react';
import { Check } from 'lucide-react';

const PACKS = [
  {
    name: "ESSENTIAL",
    subtitle: "Cobertura Fundamental",
    features: ["1 Fotógrafo Senior", "1 Videógrafo", "Video Resumen (3-5 min)", "500 Fotos Editadas", "Entrega Digital"],
    highlight: false
  },
  {
    name: "CINEMA",
    subtitle: "La Experiencia Completa",
    features: ["2 Fotógrafos", "2 Videógrafos + Drone", "Película Principal (15 min)", "Teaser Instagram (1 min)", "800+ Fotos Editadas"],
    highlight: true
  },
  {
    name: "ALL IN",
    subtitle: "Contenido Ilimitado",
    features: ["Equipo Completo (3+3)", "Same Day Edit (Video en vivo)", "Content Creator para Redes", "Entrega Express 48hs", "Photobook Premium"],
    highlight: false
  }
];

export const Packages: React.FC = () => {
  return (
    <section id="packs" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">EXPERIENCIAS</h2>
          <p className="text-zinc-400">Diseñamos la cobertura según la magnitud de tu evento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKS.map((pack, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 border ${
                pack.highlight 
                  ? 'border-brand-orange bg-zinc-800/50' 
                  : 'border-zinc-800 bg-zinc-950'
              } flex flex-col transition-transform hover:-translate-y-2`}
            >
              {pack.highlight && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Más Elegido
                </div>
              )}
              
              <h3 className="font-display font-black text-3xl text-white mb-2">{pack.name}</h3>
              <p className="text-zinc-500 text-sm mb-8">{pack.subtitle}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pack.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check size={16} className="text-brand-orange mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href="#contacto"
                className={`w-full py-3 text-center text-sm font-bold uppercase tracking-wider border transition-all ${
                  pack.highlight
                    ? 'bg-brand-orange border-brand-orange text-white hover:bg-orange-600'
                    : 'border-zinc-700 text-white hover:bg-white hover:text-black'
                }`}
              >
                Consultar Valor
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};