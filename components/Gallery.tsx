import React from 'react';

interface GalleryImage {
  src: string;
  srcSet?: string;
  alt: string;
  aspect?: 'video' | 'square' | 'portrait';
}

interface Props {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

function toWebpPath(path: string): string {
  return path.replace(/\.jpe?g$/i, '.webp');
}

function toWebpSrcSet(srcSet?: string): string | undefined {
  return srcSet?.replace(/\.jpe?g/gi, '.webp');
}

export const Gallery: React.FC<Props> = ({ images, title, subtitle }) => {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-zinc-400 text-sm md:text-base">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => {
            const isJpeg = /\.jpe?g$/i.test(img.src);
            const webpSrcSet = isJpeg ? toWebpSrcSet(img.srcSet) : undefined;
            const imgHeight =
              img.aspect === 'portrait' ? 1067 : img.aspect === 'square' ? 800 : 450;
            const imgProps = {
              alt: img.alt,
              width: 800,
              height: imgHeight,
              sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
              loading: 'lazy' as const,
              decoding: 'async' as const,
              className:
                'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100',
            };

            return (
              <div
                key={i}
                className={`relative group overflow-hidden bg-zinc-900 rounded-lg ${
                  img.aspect === 'portrait'
                    ? 'aspect-[3/4]'
                    : img.aspect === 'square'
                      ? 'aspect-square'
                      : 'aspect-video'
                }`}
              >
                {isJpeg ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={webpSrcSet ?? toWebpPath(img.src)}
                    />
                    <img src={img.src} srcSet={img.srcSet} {...imgProps} />
                  </picture>
                ) : (
                  <img src={img.src} srcSet={img.srcSet} {...imgProps} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
