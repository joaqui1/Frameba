import React from 'react';
import { WhatsAppLink } from './WhatsAppLink';

export const Footer: React.FC = () => {
  const serviceLinks = [
    { label: '15 Años', href: '/fotografo-15-anos-caba-gba/' },
    { label: 'Casamientos', href: '/fotografia-video-casamientos-buenos-aires/' },
    { label: 'Video para eventos', href: '/video-para-eventos-buenos-aires/' },
    { label: 'Eventos corporativos', href: '/eventos-corporativos-buenos-aires/' },
  ];

  return (
    <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <a href="/" className="font-display font-black text-2xl text-white tracking-tighter">
              FRAME<span className="text-brand-orange">.</span>
            </a>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed max-w-xs">
              Fotografía y video para eventos en CABA y Buenos Aires. 15 años, casamientos, eventos sociales y corporativos.
            </p>
          </div>

          <nav aria-label="Páginas de servicio" className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">Servicios</span>
            {serviceLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppLink
              context="contact"
              showIcon={false}
              className="text-sm text-zinc-400 hover:text-white transition-colors text-left"
            >
              Contacto
            </WhatsAppLink>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="text-zinc-500 text-sm space-y-1">
              <p>Buenos Aires, Argentina</p>
              <p>CABA · GBA · Zona Norte · Zona Sur</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} FRAME Estudio. Todos los derechos reservados.
          </p>
          <p className="text-zinc-700 text-xs">
            Fotografía y video para eventos en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};
