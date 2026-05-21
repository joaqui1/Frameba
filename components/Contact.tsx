import React from 'react';
import { MapPin, Clock, Smartphone } from 'lucide-react';
import { WhatsAppLink } from './WhatsAppLink';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#120d0c_0%,#0e0c0c_30%,#09090b_72%)]"></div>
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#120d0c] to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tighter">
            HABLEMOS DE TU EVENTO.
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-zinc-400 font-medium">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-orange" />
              <span>Buenos Aires (CABA & GBA)</span>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">¿Hablamos ya?</h3>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Escribinos por WhatsApp para consultar disponibilidad, pedir presupuesto o contarnos qué cobertura necesitás.
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
          </div>

          <WhatsAppLink
            context="contact"
            iconSize={22}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
          >
            Pedir presupuesto por WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
};
