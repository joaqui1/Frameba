import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

declare global {
  interface Window { gtag: any; }
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 1. Evitamos que la página recargue o cambie
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');

    try {
      // 2. Enviamos los datos a Formspree usando fetch (en segundo plano)
      const response = await fetch("https://formspree.io/f/xkowqqlb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Limpiamos el formulario

        // 3. Si todo salió bien, avisamos a Google Ads
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
              'send_to': 'AW-17522815085/ym6kCNSov9UbEO3gw6NB',
          });
        }

      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Bloque de Texto (Izquierda) */}
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

        {/* Bloque del Formulario (Derecha) */}
        <div className="lg:w-1/2">
          
          {/* Muestra mensaje de éxito si ya se envió */}
          {status === 'success' ? (
            <div className="bg-zinc-950 p-12 rounded-xl border border-green-500/30 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-zinc-400">Gracias por escribirnos. Te vamos a responder lo antes posible.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm text-brand-orange hover:text-white transition-colors uppercase font-bold tracking-widest"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            // Si no se ha enviado, muestra el formulario normal
            <form 
              onSubmit={handleSubmit}
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

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                  <AlertCircle size={16} />
                  Hubo un error al enviar. Por favor intenta de nuevo.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-zinc-950 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : (
                  <>Enviar Consulta <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};