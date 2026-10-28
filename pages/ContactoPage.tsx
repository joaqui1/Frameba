import React from 'react';
import { Clock, Smartphone, CalendarDays } from 'lucide-react';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { RelatedServices } from '../components/RelatedServices';
import { OPENING_HOURS_LABEL } from '../utils/business';

export const ContactoPage: React.FC = () => {
  return (
    <>
      <section data-page-hero className="pt-32 pb-16 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Hablemos de tu evento
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Escribinos por WhatsApp con el tipo de evento, fecha y zona. Te respondemos en el día con una propuesta a medida.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Consultá por WhatsApp</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Para consultar disponibilidad o pedir presupuesto, escribinos directo. Es la forma más rápida de coordinar.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Horario de atención</p>
                  <p className="font-medium">{OPENING_HOURS_LABEL}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Teléfono / WhatsApp</p>
                  <p className="font-medium">+54 9 11 7067-1050</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Logística del evento</p>
                  <p className="font-medium">Contanos dónde será para coordinar los detalles.</p>
                </div>
              </div>
            </div>

            <WhatsAppLink
              context="contact"
              iconSize={22}
              className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/20 hover:-translate-y-1"
            >
              Pedir propuesta por WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <RelatedServices />
    </>
  );
};
