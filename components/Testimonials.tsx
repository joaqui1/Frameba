import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  event: string;
  quote: string;
}

interface Props {
  testimonials: Testimonial[];
}

/**
 * TODO: Replace placeholder testimonials with real client quotes.
 * Do not publish fake testimonials — use this component only with confirmed, genuine reviews.
 */
export const TestimonialsSection: React.FC<Props> = ({ testimonials }) => {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">
            Testimonios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-8 relative"
            >
              <Quote size={24} className="text-brand-orange/30 mb-4" />
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-zinc-500 text-xs">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
