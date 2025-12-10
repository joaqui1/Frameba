import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Mundos', href: '#mundos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Bold & Industrial */}
        <a href="#" className="relative z-50 group">
          <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white">
            FRAME<span className="text-brand-orange">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto"
            className="px-6 py-2 bg-white text-zinc-950 text-sm font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300"
          >
            Cotizar Ahora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-3xl font-display font-bold text-zinc-500 hover:text-white transition-colors tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};