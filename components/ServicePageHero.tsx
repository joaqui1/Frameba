import React from 'react';
import { type CTA_Context } from '../utils/whatsapp';
import { WhatsAppLink } from './WhatsAppLink';

/** Mobile: sin blur y más luz. Desktop: blur suave + overlays más marcados. */
const HERO_IMG_BASE = 'frame-art-directed absolute inset-0 h-full w-full object-cover';
const HERO_IMG_DEFAULT =
  `${HERO_IMG_BASE} blur-[3px] opacity-[0.52] md:blur-[4px] md:opacity-[0.42]`;
const HERO_IMG_POLISHED =
  `${HERO_IMG_BASE} blur-[3px] opacity-[0.56] md:blur-[4px] md:opacity-[0.45]`;

const MOBILE_WIDTH = 900;
const MOBILE_HEIGHT = 1600;

interface Props {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  ctaContext: CTA_Context;
  secondaryCta?: { label: string; context: CTA_Context };
  /** Base path without extension, e.g. /images/hero-casamiento-portada */
  imageBase: string;
  imageAlt: string;
  /** Desktop + mobile art direction: uses {base}-desktop.* and {base}-mobile.* */
  responsive?: boolean;
  /** Lighter photo + vignette overlay (Corporativos, 15 años, Casamientos) */
  heroPolish?: boolean;
  mobileObjectPosition?: string;
  desktopObjectPosition?: string;
}

export const ServicePageHero: React.FC<Props> = ({
  badge,
  h1,
  subtitle,
  ctaLabel,
  ctaContext,
  secondaryCta,
  imageBase,
  imageAlt,
  responsive = false,
  heroPolish = false,
  mobileObjectPosition = '50% 50%',
  desktopObjectPosition = '50% 50%',
}) => {
  const desktopBase = `${imageBase}-desktop`;
  const mobileBase = `${imageBase}-mobile`;
  const heroImgClass = heroPolish ? HERO_IMG_POLISHED : HERO_IMG_DEFAULT;
  const imageStyle = {
    '--frame-mobile-position': mobileObjectPosition,
    '--frame-desktop-position': desktopObjectPosition,
  } as React.CSSProperties;

  return (
    <section data-page-hero className="relative h-[74svh] min-h-[560px] max-h-[680px] w-full overflow-hidden border-b border-zinc-800/60 bg-zinc-950 md:h-[80vh] md:min-h-[520px] md:max-h-[820px]">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture className="absolute inset-0 block h-full w-full">
          {responsive ? (
            <>
              <source
                media="(min-width: 768px)"
                type="image/webp"
                srcSet={`${desktopBase}.webp`}
              />
              <source media="(max-width: 767px)" type="image/webp" srcSet={`${mobileBase}.webp`} />
              <source media="(min-width: 768px)" srcSet={`${desktopBase}.jpg`} />
              <img
                src={`${mobileBase}.jpg`}
                alt={imageAlt}
                width={MOBILE_WIDTH}
                height={MOBILE_HEIGHT}
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={heroImgClass}
                style={imageStyle}
              />
            </>
          ) : (
            <>
              <source
                type="image/webp"
                srcSet={`${imageBase}-768.webp 768w, ${imageBase}.webp 1920w`}
                sizes="100vw"
              />
              <img
                src={`${imageBase}.jpg`}
                srcSet={`${imageBase}-768.jpg 768w, ${imageBase}.jpg 1920w`}
                alt={imageAlt}
                width={1920}
                height={1080}
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={heroImgClass}
                style={imageStyle}
              />
            </>
          )}
        </picture>
        {heroPolish ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/20 md:via-zinc-950/68 md:to-zinc-950/38" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.1)_0%,rgba(9,9,11,0.42)_52%,rgba(9,9,11,0.86)_100%)] md:bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.16)_0%,rgba(9,9,11,0.54)_48%,rgba(9,9,11,0.92)_100%)]" />
            <div className="absolute inset-0 bg-zinc-950/10 md:bg-zinc-950/15" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/25 md:via-zinc-950/75 md:to-zinc-950/48" />
            <div className="absolute inset-0 bg-zinc-950/10 md:bg-zinc-950/15" />
          </>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 pb-8 pt-28 md:px-12">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-brand-orange">{badge}</span>
          <h1 className="font-display mx-auto mb-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
            {h1}
          </h1>
          <p className="mx-auto mb-9 max-w-2xl text-base font-light leading-relaxed text-zinc-300 md:text-lg">{subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppLink
              context={ctaContext}
              className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-brand-orange hover:text-white"
            >
              {ctaLabel}
            </WhatsAppLink>
            {secondaryCta && (
              <WhatsAppLink
                context={secondaryCta.context}
                className={
                  heroPolish
                    ? 'inline-flex items-center justify-center gap-2.5 rounded-sm border border-zinc-500/40 bg-white/[0.04] px-7 py-3.5 font-semibold uppercase tracking-wide text-zinc-100 transition-all duration-300 hover:border-zinc-400/60 hover:bg-white/[0.08] hover:text-white'
                    : 'inline-flex items-center justify-center gap-2.5 rounded-sm border border-zinc-700 px-8 py-4 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/5'
                }
              >
                {secondaryCta.label}
              </WhatsAppLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
