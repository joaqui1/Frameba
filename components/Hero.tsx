import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* Background with dynamic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
          alt="Videógrafo profesional filmando evento social nocturno en Buenos Aires con luces de cine" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        {/* Gradientes para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-zinc-950/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-20">
        
        {/* H1 OPTIMIZADO PARA SEO Y VISUAL */}
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tighter mb-8 max-w-6xl mx-auto">
          NO HACEMOS VIDEOS. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
            CONTAMOS TU HISTORIA.
          </span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Productora audiovisual en Buenos Aires especializada en <span className="text-white font-medium">Bodas, 15 Años y Eventos Corporativos</span>.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-3xl">
          <a 
            href="#contacto"
            className="w-full md:w-auto px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm min-w-[160px]"
          >
            Contactanos
          </a>

          <a 
            href="#mundos"
            className="w-full md:w-auto px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300 rounded-sm flex items-center justify-center gap-2 min-w-[160px]"
          >
            <Play size={16} className="fill-current" /> Qué hacemos
          </a>

          <a 
            href="#nosotros"
            className="w-full md:w-auto px-8 py-4 border border-transparent text-zinc-400 hover:text-white font-bold uppercase tracking-wider transition-all duration-300 rounded-sm flex items-center justify-center gap-2 min-w-[160px]"
          >
            Quiénes somos
          </a>
        </div>
      </div>
    </section>
  );
};