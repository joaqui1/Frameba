import React from 'react';
import { Send } from 'lucide-react';

// Esto evita que TypeScript marque error porque no conoce 'gtag'
declare global {
  interface Window { gtag: any; }
}

export const Contact: React.FC = () => {

  const handleSubmit = () => {
    // Dispara la conversión cuando el usuario intenta enviar el formulario
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-17522815085/maHaCPnNk5kbEO3gw6NB',
          'transaction_id': ''
      });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Text Block */}
        <div className="lg:w-1/2 lg:mt-[120px] lg:ml-[30px] text-center lg:text-center">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tighter">
            HABLEMOS.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
            Si buscas calidad, creatividad y buena onda, estás en el lugar correcto. Contanos tu idea y la hacemos realidad.
          </p>
          
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span>Buenos Aires (CABA & GBA)</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span>Bahía Blanca</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form 
            action="mailto:joaquinvallascianiii@hotmail.com" 
            method="post" 
            encType="text/plain"
            onSubmit={handleSubmit} // <-- AQUÍ ESTÁ EL SEGUIMIENTO
            className="space-y-6 bg-zinc-950 p-8 rounded-xl border border-zinc-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Fecha</label>
                <input 
                  type="date" 
                  name="fecha"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Email</label>
              <input 
                type="email" 
                name="email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="hola@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Tipo de Evento</label>
              <select name="evento" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                <option>Seleccionar...</option>
                <option>Boda</option>
                <option>15 Años</option>
                <option>Corporativo / Marca</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Tu Consulta</label>
              <textarea 
                name="mensaje"
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                placeholder="Contanos más sobre lo que buscas..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-zinc-950 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 mt-4">
              Enviar Consulta <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};