import React from 'react';

export const DesarrolloWebPage: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-5xl border border-zinc-800/70 bg-zinc-900/30 px-6 py-14 md:px-12 md:py-20">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
            FRAME Estudio
          </span>

          <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.05] text-white md:text-6xl">
            Desarrollo web junto a Altura Software
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>
              La experiencia digital de FRAME fue desarrollada junto a{' '}
              <a
                href="https://www.alturadev.com/proyectos/frame-estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-brand-orange hover:decoration-brand-orange"
              >
                Altura Software
              </a>
              , con foco en una presencia visual premium, rendimiento y una estructura preparada para acompañar el crecimiento del estudio.
            </p>

            <p className="text-sm text-zinc-500">
              Diseño y desarrollo web realizado en colaboración con Altura Software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
