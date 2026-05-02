import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Mundos", href: "/#mundos" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Contacto", href: "/#contacto" }
  ];

  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-10 items-start">
        <div className="text-center lg:text-left">
          <a href="/" className="font-display font-black text-2xl text-white tracking-tighter">FRAME<span className="text-brand-orange">.</span></a>
          <p className="text-zinc-500 text-xs mt-2 uppercase tracking-wide">Buenos Aires, Argentina</p>
        </div>

        <nav aria-label="Secciones" className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-center lg:justify-start">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-6">
          <a href="#" aria-label="Instagram" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Youtube size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Facebook size={20} />
          </a>
          </div>

          <div className="text-zinc-600 text-xs">
            <p>© {new Date().getFullYear()} FRAME ESTUDIO.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
