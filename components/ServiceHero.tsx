import React from 'react';
import { type CTA_Context } from '../utils/whatsapp';
import { WhatsAppLink } from './WhatsAppLink';

interface Props {
  image: string;
  imageAlt: string;
  srcSet?: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  ctaContext: CTA_Context;
  secondaryCta?: { label: string; href: string };
}

export const ServiceHero: React.FC<Props> = ({
  image,
  imageAlt,
  srcSet,
  h1,
  subtitle,
  ctaLabel,
  ctaContext,
  secondaryCta,
}) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          srcSet={srcSet}
          alt={imageAlt}
          width={1536}
          height={1024}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center pt-28 pb-16">
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-6 max-w-5xl">
          {h1}
        </h1>

        <p className="text-zinc-300 text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg">
          <WhatsAppLink
            context={ctaContext}
            className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
          >
            {ctaLabel}
          </WhatsAppLink>

          {secondaryCta && secondaryCta.href.startsWith('https://wa.me/') && (
            <WhatsAppLink
              context={ctaContext}
              className="w-full sm:w-auto px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300 rounded-sm text-center"
            >
              {secondaryCta.label}
            </WhatsAppLink>
          )}
          {secondaryCta && !secondaryCta.href.startsWith('https://wa.me/') && (
            <a
              href={secondaryCta.href}
              className="w-full sm:w-auto px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300 rounded-sm text-center"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
