import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <span className="font-display font-black text-2xl text-white tracking-tighter">FRAME<span className="text-brand-orange">.</span></span>
          <p className="text-zinc-500 text-xs mt-2 uppercase tracking-wide">Buenos Aires, Argentina</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Youtube size={20} />
          </a>
          <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-brand-orange transition-all">
            <Facebook size={20} />
          </a>
        </div>

        <div className="text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} FRAME ESTUDIO.</p>
        </div>
      </div>
    </footer>
  );
};