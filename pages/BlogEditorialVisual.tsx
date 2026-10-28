import React from 'react';

type VisualMode = 'card' | 'featured' | 'hero' | 'collage';

interface Props {
  number: string;
  category?: string;
  mode?: VisualMode;
  className?: string;
}

/** Hand-drawn editorial illustrations for FRAME guide covers. */
export const BlogEditorialVisual: React.FC<Props> = ({
  number,
  category,
  mode = 'card',
  className = 'relative',
}) => {
  const topic = category?.split(' · ')[0] ?? 'Guía';
  const illustration = number === '01' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 102h120l-8 43H108l-8-43Z" />
        <path d="M111 103c4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0 4 5 8 5 12 0" />
        <path d="M117 72h86v30h-86V72Zm9 0c3 4 7 4 10 0 3 4 7 4 10 0 3 4 7 4 10 0 3 4 7 4 10 0 3 4 7 4 10 0" />
        <path d="M126 145v10m68-10v10m-81 0h96m-109 7c10-8 24-8 34 0m50 0c10-8 24-8 34 0" />
        <path d="M132 67V48m28 19V42m28 25V48" />
        <path d="M132 44c-6-6-5-12 0-17 5 5 6 11 0 17Zm28-5c-6-6-5-12 0-17 5 5 6 11 0 17Zm28 5c-6-6-5-12 0-17 5 5 6 11 0 17Z" />
        <path d="M74 92c1-10 6-16 16-18-2 10-8 16-16 18Zm167 15c8-5 16-4 22 3-9 4-17 3-22-3Z" />
      </g>
      <g fill="#8d4e35"><circle cx="87" cy="124" r="1.6"/><circle cx="230" cy="76" r="1.6"/><circle cx="102" cy="58" r="1.3"/></g>
      <path d="M81 65v-8m-4 4h8m157 91v-8m-4 4h8" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ) : number === '02' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-20 0)">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="137" cy="96" rx="40" ry="28" transform="rotate(-34 137 96)" />
        <ellipse cx="181" cy="96" rx="40" ry="28" transform="rotate(-34 181 96)" />
        <ellipse cx="137" cy="96" rx="35" ry="23" transform="rotate(-34 137 96)" opacity=".48" />
        <ellipse cx="181" cy="96" rx="35" ry="23" transform="rotate(-34 181 96)" opacity=".48" />
        <path d="M207 105c19-4 31-15 40-31m-32 39c19 1 35-4 49-16m-56 7c12-13 17-26 17-39m-23 28c-5-14-14-24-28-30" />
        <path d="M238 74c-2-11 2-18 12-22-1 11-5 18-12 22Zm14 19c4-10 11-14 21-12-6 9-13 13-21 12Zm-31 12c-8-8-9-16-4-25 6 9 7 17 4 25Z" />
      </g>
      <g fill="#8d4e35"><circle cx="87" cy="128" r="1.8"/><circle cx="230" cy="52" r="1.7"/><circle cx="105" cy="63" r="1.2"/></g>
      <path d="M94 145 80 153m152-91 9-10" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  ) : number === '03' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <rect x="70" y="51" width="104" height="91" rx="2" />
        <path d="M70 74h104M93 43v17m58-17v17" />
        <circle cx="122" cy="105" r="22" />
        <path d="M122 92v14l11 7m47 4c14-2 25-10 31-23m-25 2c8-8 11-16 10-26m-9 42c10 6 20 8 31 5m-17-41c7 3 12 8 15 16" />
        <path d="M209 67c-2-9 1-15 9-19 0 9-3 15-9 19Zm13 25c5-7 11-9 19-6-6 7-12 9-19 6Zm-1 23c-7-4-10-10-8-18 6 5 9 11 8 18Z" />
      </g>
      <g fill="#8d4e35"><circle cx="208" cy="133" r="1.8"/><circle cx="190" cy="54" r="1.4"/><circle cx="91" cy="155" r="1.4"/></g>
      <path d="M191 41v-8m-4 4h8M225 141v-7m-3.5 3.5h7" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ) : number === '04' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M77 77h31l10-15h76l11 15h25a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8H77a8 8 0 0 1-8-8V85a8 8 0 0 1 8-8Z" />
        <circle cx="151" cy="111" r="28" /><circle cx="151" cy="111" r="20" opacity=".56" />
        <circle cx="206" cy="91" r="4" /><path d="M99 67 91 54m110 3 12-12m-3 23 17-3" />
        <path d="M226 57c1-8 5-12 13-13-3 8-7 12-13 13Zm2 13c7-4 13-3 18 3-8 3-14 2-18-3Z" />
      </g>
      <g fill="#8d4e35"><circle cx="57" cy="99" r="1.5"/><circle cx="247" cy="105" r="1.7"/><circle cx="115" cy="48" r="1.2"/></g>
      <path d="M56 127c7-4 12-4 18-1m169-55 8-5" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ) : number === '05' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M104 91c-13-10-14-34-2-46 10-10 27-8 34 5 9 17-6 35-17 44-3 3-10 3-15-3Zm45-19c-9-12-5-35 8-43 12-7 26-1 29 13 4 17-14 32-27 37-4 2-8-2-10-7Zm38 26c-7-15 1-35 15-39 13-4 24 5 23 19-1 17-21 27-34 29-3 0-4-4-4-9Z" />
        <path d="m115 96-3 7 8-2m48-20-2 8 8-4m40 4 1 8 7-6m-99 4c8 31 18 51 34 67m15-73c-1 31-4 52-15 74m54-64c-5 24-15 43-34 61" />
        <path d="M143 147c-8-7-17-8-26-4 8 7 16 9 26 4Zm5 13c7-9 15-12 25-9-7 9-15 12-25 9Zm39-22c7-9 15-11 24-7-7 8-15 10-24 7Z" />
      </g>
      <g fill="#8d4e35"><circle cx="83" cy="70" r="1.7"/><circle cx="230" cy="60" r="1.4"/><circle cx="169" cy="39" r="1.5"/></g>
      <path d="M80 52v-9m-4.5 4.5h9m159 47v-8m-4 4h8" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ) : number === '06' ? (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="m87 73 118-26 24 74-118 27-24-75Z" />
        <path d="m94 78 108-24 19 63-108 24-19-63Z" opacity=".52" />
        <path d="m139 72 18 11 22-24-17 28-23-15Zm-15 52c12-3 20-9 25-19m-29 11 10 12m-14-7 18-7" />
        <path d="M232 57c-2-10 2-17 11-21-1 10-5 17-11 21Zm10 17c7-5 14-4 20 2-8 4-15 3-20-2Zm-42-30c4-9 10-12 20-11-5 9-11 13-20 11Z" />
        <path d="M112 52c2-9 7-13 16-14-3 9-8 14-16 14Z" />
      </g>
      <g fill="#8d4e35"><circle cx="77" cy="116" r="1.5"/><circle cx="244" cy="119" r="1.5"/><circle cx="132" cy="42" r="1.4"/></g>
      <path d="M76 91v-8m-4 4h8m166 48v-7m-3.5 3.5h7" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M95 133c-13-4-20-15-19-29 2-14 15-24 29-21 12 2 18 16 16 29-2 14-13 25-26 21Zm52-42c-13-2-22-13-20-26 2-14 14-23 27-19 13 3 18 17 15 29-3 13-11 19-22 16Zm53 42c-12-3-18-15-15-28 3-13 14-20 26-16 11 4 15 16 11 28-4 12-12 18-22 16Z" />
        <path d="m107 134 5 10-9-3m32-50 5 9-9-3m55 30 4 10-9-4m-70 2 24 34m-1-75 17 39m52 4-23 33" />
        <path d="M223 77c1-11 6-17 17-20-3 11-8 17-17 20Zm12 14c8-5 16-4 22 3-9 4-17 3-22-3Zm-24-27c-6-8-6-16 0-24 5 9 5 17 0 24Z" />
        <path d="M157 57V43m-7 7h14" />
      </g>
      <g fill="#8d4e35"><circle cx="67" cy="92" r="1.5"/><circle cx="237" cy="122" r="1.8"/><circle cx="185" cy="42" r="1.3"/></g>
      <path d="M72 67v-8m-4 4h8m166 93v-8m-4 4h8" stroke="#8d4e35" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className={`frame-guide-visual frame-guide-visual--${mode} ${className}`} aria-hidden="true">
      <div className="frame-guide-visual__paper">
        <span className="frame-guide-visual__rule" />
        <span className={`frame-guide-illustration frame-guide-illustration--${number}`}>
          {illustration}
        </span>
        <span className="frame-guide-visual__number">{number}</span>
        <span className="frame-guide-visual__category">{topic}</span>
        <span className="frame-guide-visual__short-rule" />
        <span className="frame-guide-visual__footer">Foto · Planificación · Entrega</span>
      </div>
    </div>
  );
};
