import React from 'react';

// Using specific Unsplash images that match the "Cinematic/Flash/Party" vibe
const PHOTOS = [
  {
    url: "/images/fotografia-casamiento-buenos-aires-frame-1536.jpg",
    srcSet: "/images/fotografia-casamiento-buenos-aires-frame-768.jpg 768w, /images/fotografia-casamiento-buenos-aires-frame-1536.jpg 1536w",
    type: "landscape",
    cat: "Boda",
    alt: "Fotografía de casamiento en Buenos Aires por FRAME Estudio"
  },
  {
    url: "/images/fotografia-15-anos-caba-frame-1536.jpg",
    srcSet: "/images/fotografia-15-anos-caba-frame-768.jpg 768w, /images/fotografia-15-anos-caba-frame-1536.jpg 1536w",
    type: "landscape",
    cat: "15 Años",
    alt: "Fotografía de fiesta de 15 años en CABA por FRAME Estudio"
  },
  {
    url: "/images/evento-corporativo-buenos-aires-frame-1536.jpg",
    srcSet: "/images/evento-corporativo-buenos-aires-frame-768.jpg 768w, /images/evento-corporativo-buenos-aires-frame-1536.jpg 1536w",
    type: "landscape",
    cat: "Corporativo",
    alt: "Cobertura de evento corporativo en Buenos Aires por FRAME Estudio"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white tracking-tighter mb-4">
            CAPTURES
          </h1>
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
                srcSet={photo.srcSet}
                alt={photo.alt} 
                width={photo.type === 'landscape' ? 1200 : 900}
                height={photo.type === 'landscape' ? 675 : 1200}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                loading="lazy"
                decoding="async"
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
          <a href="/#contacto" className="text-zinc-400 hover:text-brand-orange underline underline-offset-4 transition-colors">
            Ver galería completa en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
