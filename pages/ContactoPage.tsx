import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle, MapPin, Clock, Smartphone } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick, trackFormSubmit } from '../utils/analytics';

export const ContactoPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleWhatsAppClick = () => trackWhatsAppClick('contact');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xkowqqlb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        trackFormSubmit('/contacto');

        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-17522815085/ym6kCNSov9UbEO3gw6NB',
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Hablemos de tu evento
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Escribinos por WhatsApp o completá el formulario. Te respondemos en el día con una propuesta a medida.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            {/* WhatsApp Column */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Vía rápida: WhatsApp</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Si querés consultar disponibilidad, pedir presupuesto o contarnos qué tipo de cobertura necesitás, escribinos directo por WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Horario de atención</p>
                    <p className="font-medium">Lunes a Sábado · 9:00 a 20:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Teléfono / WhatsApp</p>
                    <p className="font-medium">+54 9 11 7067-1050</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Cobertura</p>
                    <p className="font-medium">CABA · GBA · Zona Norte · Sur · Oeste</p>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('contact')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                Pedir propuesta por WhatsApp
              </a>

              <p className="text-zinc-500 text-xs mt-4 text-center">
                Envianos tipo de evento, fecha estimada y zona.
              </p>
            </div>

            {/* Form Column */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Recibido!</h3>
                  <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
                    Tu mensaje llegó perfecto. Te vamos a responder en breve.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-orange hover:text-white font-bold text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Formulario de contacto</h2>
                  <p className="text-zinc-400 text-sm mb-6">
                    Completá los datos y te armamos una propuesta para tu cobertura.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        name="fecha"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                      />
                      <select
                        name="evento"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                      >
                        <option>Tipo de evento</option>
                        <option>Fiesta de 15</option>
                        <option>Book de 15</option>
                        <option>Casamiento / Boda</option>
                        <option>Evento corporativo</option>
                        <option>Evento social</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                    <textarea
                      name="mensaje"
                      rows={4}
                      placeholder="Contanos qué necesitás: fecha, lugar, tipo de evento y si buscás foto, video o ambos..."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    ></textarea>

                    {status === 'error' && (
                      <div className="text-red-400 text-sm bg-red-950/20 p-3 rounded border border-red-900/30 flex items-center gap-2">
                        <AlertCircle size={16} /> Hubo un error. Intentá de nuevo o escribinos por WhatsApp.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-white text-zinc-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-brand-orange hover:text-white"
                    >
                      {status === 'submitting' ? (
                        'Enviando...'
                      ) : (
                        <>
                          ENVIAR CONSULTA <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
