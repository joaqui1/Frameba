import React from 'react';

type Link = { href: string; label: string };

const MAIN_SERVICES: Link[] = [
  { href: '/fotografo-15-anos-caba-gba/', label: 'Fotógrafo para 15 años' },
  { href: '/fotografia-video-casamientos-buenos-aires/', label: 'Fotografía y video para casamientos' },
  { href: '/video-para-eventos-buenos-aires/', label: 'Video para eventos' },
  { href: '/eventos-corporativos-buenos-aires/', label: 'Cobertura de eventos corporativos' },
];

// Links por silo: primero las páginas hijas y guías del mismo tema, después los servicios vecinos.
const SILO_LINKS: Record<string, Link[]> = {
  '/fotografo-15-anos-caba-gba/': [
    { href: '/book-15-anos-buenos-aires/', label: 'Book de fotos de 15 años' },
    { href: '/blog/cuanto-cuesta-fotografo-15-anos-buenos-aires/', label: 'Cuánto cuesta un fotógrafo de 15' },
    { href: '/blog/ideas-sesion-fotos-15-anos/', label: 'Ideas para tu sesión de 15' },
    { href: '/video-para-eventos-buenos-aires/', label: 'Video para tu fiesta de 15' },
  ],
  '/fotografia-video-casamientos-buenos-aires/': [
    { href: '/blog/fotografo-video-casamiento-que-incluye/', label: 'Qué incluye la cobertura de un casamiento' },
    { href: '/video-para-eventos-buenos-aires/', label: 'Video para casamientos' },
    { href: '/blog/cuantas-horas-contratar-fotografo-evento/', label: 'Cuántas horas de cobertura contratar' },
  ],
  '/eventos-corporativos-buenos-aires/': [
    { href: '/fotografia-corporativa-buenos-aires/', label: 'Fotografía corporativa y LinkedIn' },
    { href: '/video-para-eventos-buenos-aires/', label: 'Video institucional para eventos' },
    { href: '/blog/cuanto-cuesta-fotografo-eventos-buenos-aires/', label: 'Cuánto cuesta un fotógrafo para eventos' },
  ],
  '/video-para-eventos-buenos-aires/': [
    { href: '/fotografia-video-casamientos-buenos-aires/', label: 'Foto y video para casamientos' },
    { href: '/blog/fotografo-video-casamiento-que-incluye/', label: 'Qué incluye el video de un casamiento' },
    { href: '/fotografo-15-anos-caba-gba/', label: 'Foto y video para fiestas de 15' },
    { href: '/eventos-corporativos-buenos-aires/', label: 'Cobertura de eventos corporativos' },
  ],
};

export const RelatedServices: React.FC<{ current?: string }> = ({ current }) => {
  const links = (current && SILO_LINKS[current]) || MAIN_SERVICES.filter((service) => service.href !== current);
  return (
    <nav aria-label="Para seguir planificando" className="border-t border-zinc-800/60 bg-zinc-950 py-12">
      <div className="container mx-auto max-w-4xl px-6 md:px-12">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Para seguir planificando</span>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="py-2 text-sm font-bold text-white underline decoration-brand-orange underline-offset-8 hover:text-brand-orange">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
