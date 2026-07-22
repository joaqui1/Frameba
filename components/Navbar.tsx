import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppLink } from './WhatsAppLink';

const NAV_ITEMS = [
  { label: '15 Años', href: '/fotografo-15-anos-caba-gba/' },
  { label: 'Casamientos', href: '/fotografia-video-casamientos-buenos-aires/' },
  { label: 'Video', href: '/video-para-eventos-buenos-aires/' },
  { label: 'Corporativos', href: '/eventos-corporativos-buenos-aires/' },
];

interface NavbarProps {
  onMenuOpenChange?: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    onMenuOpenChange?.(isOpen);
  }, [isOpen, onMenuOpenChange]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[110] transition-all duration-500 border-b ${
          isOpen
            ? 'bg-zinc-950 border-zinc-800/60 py-3'
            : scrolled
              ? 'bg-zinc-950/95 backdrop-blur-md border-zinc-800/60 py-3'
              : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="/" className="group inline-flex min-h-11 items-center" aria-label="Frame Estudio — Inicio" onClick={closeMenu}>
            <BrandLogo />
          </a>

          <nav className="hidden md:flex gap-5 lg:gap-7 items-center" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs lg:text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink
              context="contact"
              showIcon={false}
              className="px-5 lg:px-6 py-2.5 bg-white text-zinc-950 text-xs lg:text-sm font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm"
            >
              Contacto
            </WhatsAppLink>
            <WhatsAppLink
              context="contact"
              showIcon={false}
              className="hidden xl:inline-flex px-6 py-2.5 bg-brand-orange text-white text-sm font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 rounded-sm"
            >
              Cotizar Ahora
            </WhatsAppLink>
          </nav>

          <button
            type="button"
            className="md:hidden -mr-2 text-white p-2.5 rounded-sm hover:bg-zinc-800/60 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div id="mobile-nav-panel" className="fixed inset-0 z-[100] md:hidden" aria-hidden="false">
          <button
            type="button"
            className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />

          <div className="relative z-10 flex h-full flex-col pt-[4.5rem] pb-6 px-6 pointer-events-none">
            <nav
              className="flex-1 overflow-y-auto overscroll-contain py-4 pointer-events-auto"
              aria-label="Menú móvil"
            >
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="/"
                    className="block rounded-lg px-3 py-3.5 text-lg font-display font-semibold text-white hover:bg-zinc-900 transition-colors tracking-tight"
                    onClick={closeMenu}
                  >
                    Inicio
                  </a>
                </li>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-3.5 text-lg font-display font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors tracking-tight"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <WhatsAppLink
                    context="contact"
                    showIcon={false}
                    onNavigate={closeMenu}
                    className="block rounded-lg px-3 py-3.5 text-lg font-display font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors tracking-tight"
                  >
                    Contacto
                  </WhatsAppLink>
                </li>
              </ul>
            </nav>

            <div className="shrink-0 border-t border-zinc-800/80 pt-5 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-auto">
              <WhatsAppLink
                context="contact"
                showIcon={false}
                onNavigate={closeMenu}
                className="flex w-full items-center justify-center rounded-sm bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-orange-600 transition-colors"
              >
                Cotizar Ahora
              </WhatsAppLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
