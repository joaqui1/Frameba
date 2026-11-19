import React from 'react';
import { Camera, CalendarDays, UsersRound } from 'lucide-react';
import { CASES, casePhotoSrc, casePhotoSrcSet, casePhotoSize, getCasePhoto } from './casesData';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { GoogleRating } from '../components/GoogleRating';

export const CasesIndexPage: React.FC = () => (
  <>
    <section data-page-hero className="home-editorial-hero frame-cases-hero">
      <div className="home-editorial-main">
        <div className="home-editorial-copy">
          <div className="home-editorial-eyebrow" aria-hidden="true">
            <span className="home-editorial-index"><svg viewBox="0 0 144 144" aria-hidden="true" focusable="false"><path d="M 98 16 A 62 62 0 0 0 28 116" /></svg><span className="home-editorial-index-dot" /><span>01</span></span>
            <span className="home-editorial-rule" /><span>Historias reales</span>
          </div>
          <h1 className="home-editorial-title">Casos de <br />foto y video <br /><span>en Buenos Aires</span></h1>
          <p className="home-editorial-description">Conocé trabajos reales de Frame Estudio: fotografía y video en eventos, graduaciones y sesiones de fotos en Buenos Aires.</p>
          <a href="#trabajos" className="home-editorial-cta">Explorar los casos <span className="home-editorial-cta-arrow" aria-hidden="true">⟶</span></a>
          <GoogleRating className="frame-hero-rating" />
        </div>
        <div className="home-editorial-gallery" aria-label="Fotografías de nuestros trabajos">
          <figure className="home-editorial-photo home-editorial-photo--lead"><img src="/images/sesion-novios-recoleta/sesion-novios-caminando-columnas-facultad-derecho-1124.webp" alt="Marcelo y Noelia caminando frente a la Facultad de Derecho" width={1124} height={2000} fetchPriority="high" decoding="async" /></figure>
          <div className="home-editorial-side-photos">
            <figure className="home-editorial-photo home-editorial-photo--top"><img src="/images/ekoparty-2026/ekoparty-2026-premiacion-ctf-primer-puesto-1600.webp" alt="Premiación de la competencia CTF en Ekoparty" width={1600} height={899} loading="eager" decoding="async" /></figure>
            <figure className="home-editorial-photo home-editorial-photo--bottom"><img src="/images/graduacion-universidad-palermo-hilton/graduado-toga-diploma-escenario-1600.webp" alt="Graduado con el portadiploma frente al escenario de la Universidad de Palermo" width={1600} height={899} loading="eager" decoding="async" /></figure>
          </div>
        </div>
        <aside className="home-editorial-notes" aria-label="Detalles de los trabajos"><p><span>01 / Historias</span><span>Momentos reales</span></p><p><span>02 / Eventos</span><span>Buenos Aires</span></p><p><span>03 / Mirada</span><span>Foto y video</span></p></aside>
      </div>
      <div className="home-editorial-footer" aria-hidden="true">
        <div><UsersRound className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Historias reales</span><small>Personas y momentos</small></div>
        <div><CalendarDays className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Eventos y sesiones</span><small>En Buenos Aires</small></div>
        <div><Camera className="home-editorial-footer-icon" size={28} strokeWidth={1.2} /><span>Foto y video</span><small>Una mirada para cada historia</small></div>
      </div>
    </section>
    <section id="trabajos" className="home-editorial-section home-editorial-services frame-cases-list py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl"><span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Casos reales</span><h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Trabajos reales de fotografía y video</h2><p className="text-zinc-400 text-sm md:text-base leading-relaxed">Explorá nuestros trabajos de eventos, graduaciones y sesiones en Buenos Aires. En cada caso encontrarás fotos y detalles de la cobertura.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((study) => {
            const photo = study.lead ? getCasePhoto(study, study.lead) : study.photos[0];
            const size = photo ? casePhotoSize(photo) : undefined;
            const cardImage = study.slug === 'video-resumen-fiesta-cena-shows-en-vivo' ? '/images/casos-portada-evento-nh.webp' : undefined;
            return <article key={study.slug} className="group relative w-full overflow-hidden border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600">
              <div className="absolute inset-0 z-0 overflow-hidden"><img src={cardImage ?? (photo ? casePhotoSrc(study.folder, photo.file, size!.width) : study.video?.thumbnail)} srcSet={!cardImage && photo ? casePhotoSrcSet(study.folder, photo) : undefined} sizes="(min-width: 768px) 50vw, 100vw" alt={cardImage ? "Foto grupal en un evento" : (photo?.alt ?? study.h1)} width={cardImage ? 1600 : (size?.width ?? 480)} height={cardImage ? 899 : (size?.height ?? 360)} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" /></div>
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end"><div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20"><span className="text-[10px] font-bold uppercase text-white tracking-wider">{study.eventType}</span></div><h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter"><a href={`/casos/${study.slug}/`} className="hover:text-brand-orange transition-colors">{study.h1}</a></h3><p className="text-zinc-300 text-sm leading-relaxed">{study.location ? `${study.location} · ` : ""}{study.service}</p><a href={`/casos/${study.slug}/`} className="frame-cases-link">Ver el caso completo <span aria-hidden="true">⟶</span></a></div>
            </article>;
          })}
        </div>
      </div>
    </section>
    <WhatsAppCTASection title="Contemos tu historia" subtitle="Contanos qué estás organizando y pensamos juntos cómo registrarlo." ctaLabel="Consultar por mi evento" />
  </>
);
