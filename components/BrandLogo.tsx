import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  return (
    <span className={`inline-flex flex-col items-center gap-1.5 md:gap-2 text-white ${className}`}>
      <span className="font-display font-bold text-[1.75rem] md:text-[2.125rem] leading-none tracking-tighter uppercase">
        Frame
      </span>
      <span className="font-display font-light text-[0.6rem] md:text-[0.68rem] leading-none tracking-[0.38em] uppercase pl-[0.38em]">
        Estudio
      </span>
    </span>
  );
};
