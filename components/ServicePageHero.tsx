import React from 'react';
import { MessageCircle } from 'lucide-react';
import { onWhatsAppLinkClick } from '../utils/whatsappClick';
import { isWhatsAppUrl, openWhatsAppUrl } from '../utils/whatsapp';

const HERO_IMG_CLASS_DEFAULT =
  'absolute inset-0 h-full w-full object-cover object-center blur-[3px] opacity-50';

const HERO_IMG_CLASS_POLISHED =
  'absolute inset-0 h-full w-full object-cover object-center blur-[2px] opacity-[0.57]';

interface Props {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  onCtaClick?: () => void;
  secondaryCta?: { label: string; href: string; onClick?: () => void };
  /** Base path without extension, e.g. /images/hero-casamiento-portada */
  imageBase: string;
  imageAlt: string;
  /** Desktop + mobile art direction: uses {base}-desktop.* and {base}-mobile.* */
  responsive?: boolean;
  /** Lighter photo + vignette overlay (Corporativos, 15 años, Casamientos) */
  heroPolish?: boolean;
}

export const ServicePageHero: React.FC<Props> = ({
  badge,
  h1,
  subtitle,
  ctaLabel,
  ctaHref,
  onCtaClick,
  secondaryCta,
  imageBase,
  imageAlt,
  responsive = false,
  heroPolish = false,
}) => {
  const desktopBase = `${imageBase}-desktop`;
  const mobileBase = `${imageBase}-mobile`;
  const heroImgClass = heroPolish ? HERO_IMG_CLASS_POLISHED : HERO_IMG_CLASS_DEFAULT;

  return (
    <section className="relative h-[80vh] min-h-[520px] max-h-[820px] w-full overflow-hidden border-b border-zinc-800/60 bg-zinc-950">
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
                width={900}
                height={1125}
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={heroImgClass}
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
              />
            </>
          )}
        </picture>
        {heroPolish ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.32)_48%,rgba(9,9,11,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_42%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_40%)]" />
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
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!isWhatsAppUrl(ctaHref)) {
                  onCtaClick?.();
                  return;
                }
                e.preventDefault();
                onCtaClick?.();
                openWhatsAppUrl(ctaHref);
              }}
              className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-brand-orange hover:text-white"
            >
              <MessageCircle size={18} />
              {ctaLabel}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target={isWhatsAppUrl(secondaryCta.href) ? '_blank' : undefined}
                rel={isWhatsAppUrl(secondaryCta.href) ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!isWhatsAppUrl(secondaryCta.href)) return;
                  e.preventDefault();
                  secondaryCta.onClick?.();
                  openWhatsAppUrl(secondaryCta.href);
                }}
                className={
                  heroPolish
                    ? 'inline-flex items-center justify-center gap-2.5 rounded-sm border border-zinc-500/40 bg-white/[0.04] px-7 py-3.5 font-semibold uppercase tracking-wide text-zinc-100 transition-all duration-300 hover:border-zinc-400/60 hover:bg-white/[0.08] hover:text-white'
                    : 'inline-flex items-center justify-center gap-2.5 rounded-sm border border-zinc-700 px-8 py-4 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/5'
                }
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
