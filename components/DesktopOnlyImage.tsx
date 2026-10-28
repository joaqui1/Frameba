import React from 'react';

/**
 * Imagen que solo se muestra en desktop (en mobile su contenedor está oculto por CSS).
 * El <source> con un GIF vacío evita que el celular descargue el archivo grande;
 * en desktop se usa la imagen original, sin recompresión.
 */
const EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export const DesktopOnlyImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <picture style={{ display: 'contents' }}>
    <source media="(max-width: 767px)" srcSet={EMPTY_GIF} />
    <img {...props} />
  </picture>
);
