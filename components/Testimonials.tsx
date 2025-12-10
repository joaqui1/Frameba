import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    text: "Literalmente parecen una película de Netflix. Mis 15 fueron un boliche y el video transmite exactamente esa energía. Nada de cosas cursis.",
    author: "Sofi G.",
    event: "15 Años en Puerto Salguero"
  },
  {
    text: "Contratamos a FRAME para nuestro evento corporativo. Entendieron el branding al toque. Material súper usable para LinkedIn.",
    author: "Marcos L.",
    event: "Evento Corporativo Globant"
  },
  {
    text: "Odiamos posar. Ellos nos dijeron 'hagan la suya'. Las fotos salieron increíbles, naturales y con una luz espectacular. Unos genios.",
    author: "Cami & Nico",
    event: "Boda en Astilleros Milberg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-10 text-center">Lo que dicen de nosotros</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50">
              <div className="flex gap-1 mb-4 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-white font-bold text-sm">{review.author}</h4>
                <p className="text-zinc-500 text-xs">{review.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};