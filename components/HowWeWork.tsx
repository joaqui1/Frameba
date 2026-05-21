import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  steps?: Step[];
}

const DEFAULT_STEPS: Step[] = [
  {
    number: '01',
    title: 'Contanos tu evento',
    description: 'Tipo de evento, fecha estimada y zona. Respondemos por WhatsApp en el día.',
  },
  {
    number: '02',
    title: 'Te recomendamos la cobertura',
    description: 'Armamos una propuesta a medida según lo que necesitás: foto, video o ambos.',
  },
  {
    number: '03',
    title: 'Coordinamos los detalles',
    description: 'Definimos horarios, locaciones y momentos clave para cubrir.',
  },
  {
    number: '04',
    title: 'Recibís tu material editado',
    description: 'Fotos y videos editados, listos para compartir, guardar y publicar.',
  },
];

export const HowWeWork: React.FC<Props> = ({ steps = DEFAULT_STEPS }) => {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">
            Proceso
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Cómo trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl font-display font-black text-zinc-800 group-hover:text-brand-orange/30 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-12 h-px bg-zinc-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
