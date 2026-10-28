import React from 'react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppLink } from './WhatsAppLink';
import { GOOGLE_BUSINESS_URL, PHONE_DISPLAY, PHONE_TEL } from '../utils/business';

export const Footer: React.FC = () => {
  const serviceLinks = [
    { label: '15 Años', href: '/fotografo-15-anos-caba-gba/' },
    { label: 'Book de fotos de 15 años', href: '/book-15-anos-buenos-aires/' },
    { label: 'Fotografía corporativa y LinkedIn', href: '/fotografia-corporativa-buenos-aires/' },
    { label: 'Sesión de fotos en Buenos Aires', href: '/sesion-de-fotos-buenos-aires/' },
    { label: 'Casamientos', href: '/fotografia-video-casamientos-buenos-aires/' },
    { label: 'Video para eventos', href: '/video-para-eventos-buenos-aires/' },
    { label: 'Eventos corporativos', href: '/eventos-corporativos-buenos-aires/' },
    { label: 'Guías para organizar tu evento', href: '/blog/' },
  ];

  return (
    <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <a href="/" className="inline-flex min-h-11 items-center">
              <BrandLogo />
            </a>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-xs">
              Fotografía y video para fiestas de 15, casamientos, eventos sociales y corporativos.
            </p>
          </div>

          <nav aria-label="Páginas de servicio y guías" className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Explorar</span>
            {serviceLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-1 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppLink
              context="contact"
              showIcon={false}
              className="block py-1 text-sm text-zinc-400 hover:text-white transition-colors text-left"
            >
              Contacto
            </WhatsAppLink>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="text-zinc-400 text-sm space-y-1">
              <p>Cubrimos eventos en CABA y el Gran Buenos Aires. Si tu evento es en otra zona, consultanos.</p>
              <p>
                <a href={PHONE_TEL} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Ver en Google
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} Frame Estudio. Todos los derechos reservados.
          </p>
          <nav aria-label="Otros idiomas" className="flex items-center gap-4 text-xs text-zinc-400">
            <a href="/en/buenos-aires-photographer/" hrefLang="en" lang="en" className="hover:text-white transition-colors">English</a>
            <a href="/pt/fotografo-em-buenos-aires/" hrefLang="pt-BR" lang="pt-BR" className="hover:text-white transition-colors">Português</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
