import React from 'react';
import { casePhotoSize, casePhotoSrc, casePhotoSrcSet, type CasePhoto as Photo } from '../pages/casesData';

interface Props {
  folder: string;
  photo: Photo;
  sizes: string;
  caption?: boolean;
  priority?: boolean;
  className?: string;
}

/** Responsive WebP photo (two widths), real <img> in the HTML so Google can index it. */
export const CasePhoto: React.FC<Props> = ({ folder, photo, sizes, caption = false, priority = false, className = '' }) => {
  const size = casePhotoSize(photo);
  return (
    <figure className={`frame-case-photo${photo.portrait ? ' frame-case-photo--portrait' : ''} ${className}`}>
      <img
        src={casePhotoSrc(folder, photo.file, size.widths[1])}
        srcSet={casePhotoSrcSet(folder, photo)}
        sizes={sizes}
        alt={photo.alt}
        width={size.width}
        height={size.height}
        {...(priority ? { fetchPriority: 'high' as const, loading: 'eager' as const } : { loading: 'lazy' as const })}
        decoding="async"
      />
      {caption && photo.caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
};
