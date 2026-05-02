import React from 'react';

const WORLDS = [
  {
    title: "FOTO Y VIDEO PARA 15 AÑOS",
    description: "Previa, fiesta y pista con ritmo real.",
    details: "Fotografía y video para fiestas de 15 años en CABA y Buenos Aires: previa, entrada, baile, familia, amigos y momentos clave, sin posar de más.",
    image: "/images/fotografia-15-anos-caba-frame-1536.jpg",
    srcSet: "/images/fotografia-15-anos-caba-frame-768.jpg 768w, /images/fotografia-15-anos-caba-frame-1536.jpg 1536w",
    tag: "15 Años",
    alt: "Foto y video para fiesta de 15 años en CABA por FRAME Estudio"
  },
  {
    title: "CASAMIENTOS Y BODAS",
    description: "Natural, cercano y con emoción real.",
    details: "Fotografía y video para casamientos, bodas, civil, ceremonia y fiesta en Buenos Aires, con una mirada natural y cinematográfica.",
    image: "/images/fotografia-casamiento-buenos-aires-frame-1536.jpg",
    srcSet: "/images/fotografia-casamiento-buenos-aires-frame-768.jpg 768w, /images/fotografia-casamiento-buenos-aires-frame-1536.jpg 1536w",
    tag: "Cinematic",
    alt: "Fotografía y video para casamiento en Buenos Aires por FRAME Estudio"
  },
  {
    title: "EVENTOS CORPORATIVOS",
    description: "Claro, prolijo y listo para comunicar.",
    details: "Fotografía para empresas, video para eventos corporativos, lanzamientos, conferencias, fiestas de empresa y contenido audiovisual para marcas.",
    image: "/images/evento-corporativo-buenos-aires-frame-1536.jpg",
    srcSet: "/images/evento-corporativo-buenos-aires-frame-768.jpg 768w, /images/evento-corporativo-buenos-aires-frame-1536.jpg 1536w",
    tag: "Business",
    alt: "Fotografía y video para eventos corporativos en Buenos Aires por FRAME Estudio"
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="mundos" className="py-24 bg-zinc-950 relative scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              FOTOGRAFÍA Y VIDEO PARA EVENTOS
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            Cubrimos fiestas de 15, casamientos, bodas, eventos corporativos y contenido para marcas en CABA y Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WORLDS.map((world, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600"
            >
              {/* Image with hover zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={world.image} 
                  srcSet={world.srcSet}
                  alt={world.alt} 
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold uppercase text-white tracking-wider">{world.tag}</span>
                </div>

                <h3 className="font-display font-black text-3xl text-white mb-2 uppercase tracking-tighter">
                  {world.title}
                </h3>
                <p className="text-brand-orange font-medium text-sm mb-4 uppercase tracking-wide">
                  {world.description}
                </p>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {world.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};