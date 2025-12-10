import React from 'react';

// Using specific Unsplash images that match the "Cinematic/Flash/Party" vibe
const PHOTOS = [
  { url: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop", type: "landscape", cat: "Boda", alt: "Novios riendo natural en casamiento zona norte Buenos Aires" }, 
  { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop", type: "portrait", cat: "15 Años", alt: "Book de fotos 15 años urbano con luces neón y glitter" }, 
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", type: "landscape", cat: "Boda", alt: "Fotografía artística de boda civil en CABA elegante" }, 
  { url: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070&auto=format&fit=crop", type: "portrait", cat: "Social", alt: "Fotografía de fiesta en boliche Buenos Aires estilo paparazzi" }, 
  { url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop", type: "landscape", cat: "Corporativo", alt: "Evento empresarial networking en hotel de Buenos Aires" }, 
  { url: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop", type: "landscape", cat: "15 Años", alt: "Video de fiesta de 15 años entrada triunfal luces" }, 
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-display font-black text-4xl md:text-6xl text-white tracking-tighter mb-4">
            CAPTURES
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">
            Un mix de nuestros mejores frames
          </p>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden ${photo.type === 'landscape' ? 'aspect-video' : 'aspect-[3/4]'} bg-zinc-900 rounded-lg`}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest border border-white px-4 py-2">
                  {photo.cat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contacto" className="text-zinc-400 hover:text-brand-orange underline underline-offset-4 transition-colors">
            Ver galería completa en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};