import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle, MapPin, Mail, Clock, Smartphone } from 'lucide-react';

declare global {
  interface Window { 
    gtag: any;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleWhatsAppClick = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xkowqqlb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();

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
    <section id="contacto" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tighter">
            HABLEMOS.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 text-zinc-400 font-medium">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-orange" />
              <span>Buenos Aires (CABA & GBA)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-orange" />
              <span>Bahía Blanca</span>
            </div>
          </div>
        </div>

        {/* GRILLA 50/50 CON ALTURA INDEPENDIENTE (items-start) */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

          {/* === COLUMNA 1: INFO Y WHATSAPP === */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">¿Hablamos ya?</h3>
              <p className="text-zinc-400 leading-relaxed">
                Si tenés dudas puntuales, querés consultar disponibilidad urgente o simplemente preferís charlar directo, escribinos al WhatsApp.
              </p>
            </div>

            {/* Datos de contacto rápidos */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Horario de atención</p>
                  <p className="font-medium">Lunes a Sábado • 9:00 a 20:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                 <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Teléfono / WSP</p>
                  <p className="font-medium">+54 9 11 7067-1050</p>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <a 
              href="https://wa.me/5491170671050"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
            >
              <MessageCircle size={22} />
              Enviar WhatsApp
            </a>
          </div>

          {/* === COLUMNA 2: FORMULARIO === */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                <p className="text-zinc-400 mb-8 max-w-xs mx-auto">Tu mensaje llegó perfecto. Te vamos a responder en breve.</p>
                <button onClick={() => setStatus('idle')} className="text-brand-orange hover:text-white font-bold text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1">
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                   <h3 className="text-2xl font-bold text-white mb-2">Pedir Presupuesto</h3>
                   <p className="text-zinc-400 text-sm">Completá los datos y te armamos una propuesta.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <input 
                      type="text" name="nombre" placeholder="Tu nombre" required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                        <input 
                        type="date" name="fecha"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                        />
                         <select name="evento" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                            <option>Tipo...</option>
                            <option>Boda</option>
                            <option>15 Años</option>
                            <option>Empresa</option>
                            <option>Otro</option>
                        </select>
                    </div>

                    <input 
                        type="email" name="email" placeholder="Tu email" required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <textarea 
                    name="mensaje" rows={4} placeholder="Contanos qué necesitas..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  ></textarea>

                  {status === 'error' && (
                    <div className="text-red-400 text-sm bg-red-950/20 p-3 rounded border border-red-900/30 flex items-center gap-2">
                      <AlertCircle size={16} /> Hubo un error.
                    </div>
                  )}

                  <button 
                    type="submit" disabled={status === 'submitting'}
                    className="w-full bg-white text-zinc-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-brand-orange hover:text-white"
                  >
                    {status === 'submitting' ? 'Enviando...' : (
                      <>ENVIAR CONSULTA <Send size={18} /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};