import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<Props> = ({ items, title = 'Preguntas frecuentes' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">
          {title}
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => {
            const panelId = `faq-panel-${i}`;
            return (
            <div
              key={i}
              className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
                aria-controls={panelId}
              >
                <span className="font-medium text-white text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-zinc-500 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={panelId}
                className={`faq-content ${openIndex === i ? 'open' : ''}`}
                style={{ maxHeight: openIndex === i ? '320px' : '0' }}
              >
                <p className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
