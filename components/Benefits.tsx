import React from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Props {
  benefits: Benefit[];
  sectionTitle?: string;
}

export const Benefits: React.FC<Props> = ({ benefits, sectionTitle }) => {
  return (
    <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
      <div className="container mx-auto px-6 md:px-12">
        {sectionTitle && (
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-12 text-center">
            {sectionTitle}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-5 p-4 bg-zinc-800 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{b.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
