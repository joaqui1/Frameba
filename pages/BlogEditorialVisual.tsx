import React from 'react';
import { Clock3, Heart, Images, ReceiptText, Sparkles, type LucideIcon } from 'lucide-react';

type VisualMode = 'card' | 'featured' | 'hero' | 'collage';

interface Props {
  number: string;
  category?: string;
  title?: string;
  mode?: VisualMode;
  className?: string;
}

const VISUAL_META: Record<string, { label: string; icon: LucideIcon; glow: string }> = {
  '01': {
    label: 'Presupuesto',
    icon: ReceiptText,
    glow: 'radial-gradient(circle at 75% 42%, rgba(255,69,0,0.30), transparent 34%)',
  },
  '02': {
    label: 'Casamientos',
    icon: Heart,
    glow: 'radial-gradient(circle at 34% 38%, rgba(255,69,0,0.24), transparent 32%)',
  },
  '03': {
    label: 'Planificación',
    icon: Clock3,
    glow: 'radial-gradient(circle at 52% 52%, rgba(255,69,0,0.22), transparent 35%)',
  },
  '04': {
    label: 'Fotografía',
    icon: Images,
    glow: 'radial-gradient(circle at 66% 36%, rgba(255,69,0,0.24), transparent 34%)',
  },
};

function BudgetPattern() {
  return (
    <>
      <div className="absolute right-[9%] top-[14%] h-[68%] w-[44%] rotate-[8deg] border border-zinc-700/70 bg-zinc-900/35 shadow-2xl shadow-black/30">
        <div className="absolute inset-x-6 top-7 h-px bg-brand-orange/70" />
        <div className="absolute left-6 top-12 font-display text-5xl font-black text-white/85 md:text-7xl">$</div>
        <div className="absolute inset-x-6 bottom-7 space-y-3">
          {[78, 54, 66, 42].map((width, index) => (
            <div key={width} className="flex items-center gap-3">
              <span className="font-display text-[10px] font-black text-brand-orange/70">0{index + 1}</span>
              <span className="h-px bg-zinc-600/70" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -left-10 bottom-[16%] h-28 w-[58%] -rotate-[9deg] border-y border-brand-orange/35 bg-brand-orange/[0.055]" />
    </>
  );
}

function WeddingPattern() {
  return (
    <>
      <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full border border-zinc-500/45 md:h-64 md:w-64" />
      <div className="absolute left-[38%] top-[34%] h-44 w-44 rounded-full border border-brand-orange/55 bg-brand-orange/[0.035] md:h-56 md:w-56" />
      <div className="absolute left-[31%] top-[28%] h-[54%] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/35 to-transparent" />
      <div className="absolute right-[12%] top-[13%] font-display text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-500 [writing-mode:vertical-rl]">
        ceremonia · retratos · fiesta
      </div>
    </>
  );
}

function TimePattern() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-600/55 md:h-72 md:w-72">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-2 w-px origin-[0_0] bg-zinc-400/60"
            style={{ transform: `rotate(${index * 30}deg) translateY(-118px)` }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-[34%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-[38deg] bg-brand-orange" />
        <span className="absolute left-1/2 top-1/2 h-[26%] w-px origin-bottom -translate-x-1/2 -translate-y-full -rotate-[82deg] bg-white/70" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_30px_rgba(255,69,0,0.65)]" />
      </div>
      <div className="absolute inset-x-[8%] bottom-[13%] flex justify-between font-display text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
        <span>inicio</span><span>momento</span><span>cierre</span>
      </div>
    </>
  );
}

function PhotosPattern() {
  return (
    <>
      <div className="absolute inset-x-[10%] top-[17%] grid grid-cols-5 gap-2 md:gap-3">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-[4/5] border ${index === 7 ? 'border-brand-orange/70 bg-brand-orange/15' : 'border-zinc-700/65 bg-zinc-900/55'}`}
          >
            <span className={`block p-2 font-display text-[9px] font-black ${index === 7 ? 'text-brand-orange' : 'text-zinc-600'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[10%] right-[8%] h-px w-[45%] bg-gradient-to-l from-brand-orange/80 to-transparent" />
    </>
  );
}

export const BlogEditorialVisual: React.FC<Props> = ({
  number,
  category,
  title,
  mode = 'card',
  className = 'relative',
}) => {
  const meta = VISUAL_META[number] ?? { label: 'Guía', icon: Sparkles, glow: VISUAL_META['01'].glow };
  const Icon = meta.icon;
  const isHero = mode === 'hero';
  const isCompact = mode === 'collage';

  return (
    <div className={`isolate overflow-hidden bg-zinc-950 ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: isCompact ? '28px 28px' : '42px 42px',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: meta.glow }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-black/55" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent" />

      <div className={isHero ? 'opacity-55' : 'opacity-100'}>
        {number === '01' && <BudgetPattern />}
        {number === '02' && <WeddingPattern />}
        {number === '03' && <TimePattern />}
        {number === '04' && <PhotosPattern />}
      </div>

      <div className={`absolute flex items-center gap-3 ${isCompact ? 'left-4 top-4' : 'left-5 top-5 md:left-7 md:top-7'}`}>
        <span className="flex h-9 w-9 items-center justify-center border border-brand-orange/45 bg-zinc-950/70 text-brand-orange backdrop-blur-sm">
          <Icon size={isCompact ? 15 : 17} strokeWidth={1.7} />
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-zinc-400">
          {category?.split(' · ')[0] ?? meta.label}
        </span>
      </div>

      {title && !isHero && (
        <div className={`absolute z-10 ${isCompact ? 'bottom-4 left-4 right-4' : 'bottom-6 left-6 right-20 md:bottom-8 md:left-8 md:right-28'}`}>
          <p className={`font-display font-bold leading-[1.02] text-white/90 ${isCompact ? 'text-sm' : mode === 'featured' ? 'max-w-xl text-2xl md:text-4xl' : 'max-w-sm text-lg md:text-2xl'}`}>
            {title}
          </p>
        </div>
      )}

      <span className={`absolute font-display font-black leading-none text-white/[0.075] ${isCompact ? 'bottom-2 right-3 text-6xl' : isHero ? '-bottom-10 right-[4%] text-[220px] md:text-[360px]' : 'bottom-2 right-4 text-8xl md:text-9xl'}`}>
        {number}
      </span>
    </div>
  );
};
