import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { FAQ } from '../components/FAQ';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import {
  Film,
  PartyPopper,
  Briefcase,
  Clapperboard,
  Package,
  Send,
  MapPin,
  Play,
  Users,
  Mic2,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { onWhatsAppLinkClick } from '../utils/whatsappClick';
import { trackWhatsAppClick } from '../utils/analytics';

const INTRO =
  'Video profesional y filmación de eventos sociales y corporativos en Buenos Aires, CABA, GBA y Zona Norte.';

const SOCIAL_VIDEO = [
  {
    icon: <PartyPopper size={20} />,
    title: 'Fiestas de 15',
    desc: 'Entrada, vals, pista y momentos con familia y amigas. Video con ritmo real de la noche.',
  },
  {
    icon: <Users size={20} />,
    title: 'Casamientos y bodas',
    desc: 'Civil, ceremonia, brindis y fiesta. Registro cercano sin convertir el día en una producción.',
  },
  {
    icon: <Mic2 size={20} />,
    title: 'Eventos sociales',
    desc: 'Cumpleaños, aniversarios, fiestas privadas y celebraciones con cobertura audiovisual clara.',
  },
];

const CORPORATE_VIDEO = [
  {
    icon: <Briefcase size={20} />,
    title: 'Conferencias y congresos',
    desc: 'Speakers, paneles, público y ambientación para comunicación interna o externa.',
  },
  {
    icon: <Clapperboard size={20} />,
    title: 'Lanzamientos y activaciones',
    desc: 'Producto, marca, experiencias en vivo y material listo para redes o prensa.',
  },
  {
    icon: <Users size={20} />,
    title: 'Fiestas de empresa',
    desc: 'Fin de año, aniversarios y encuentros corporativos con una pieza usable después del evento.',
  },
];

const PARTY_FILMING = [
  'Previa y preparativos cuando el cronograma lo incluye',
  'Entrada, recepción y momentos protocolares',
  'Pista, shows, brindis y reacciones del público',
  'Detalle de ambientación, mesas, decoración y luces',
  'Cierre según horas contratadas, sin cortar la fiesta',
];

const FILMMAKER_POINTS = [
  {
    icon: <Film size={24} />,
    title: 'Mirada documental',
    desc: 'Registramos lo que pasa sin armar escenas ni frenar la dinámica del evento.',
  },
  {
    icon: <Clapperboard size={24} />,
    title: 'Criterio social y corporativo',
    desc: 'Adaptamos la cobertura a fiestas, casamientos, lanzamientos o conferencias según el objetivo.',
  },
  {
    icon: <Package size={24} />,
    title: 'Material usable',
    desc: 'Piezas pensadas para compartir, comunicar en redes o integrar en presentaciones de marca.',
  },
];

const INCLUDES = [
  {
    icon: <Film size={24} />,
    title: 'Filmación profesional',
    desc: 'Cobertura con cámaras dedicadas, audio cuidado y encuadre pensado para eventos.',
  },
  {
    icon: <Clapperboard size={24} />,
    title: 'Dirección en el momento',
    desc: 'Priorizamos momentos fuertes sin detener la celebración ni la agenda del evento.',
  },
  {
    icon: <Package size={24} />,
    title: 'Edición y selección',
    desc: 'Armamos una pieza con ritmo, música y estructura para volver a sentir el evento.',
  },
  {
    icon: <Send size={24} />,
    title: 'Entrega organizada',
    desc: 'Archivos listos para compartir, publicar o guardar según lo acordado en la propuesta.',
  },
];

const DELIVERY_TYPES = [
  {
    title: 'Video resumen',
    desc: 'Pieza corta y dinámica con los mejores momentos. Ideal para revivir la noche y compartir rápido.',
  },
  {
    title: 'Reels',
    desc: 'Clips verticales u horizontales pensados para Instagram, TikTok y redes de tu evento o marca.',
  },
  {
    title: 'Video completo',
    desc: 'Recorrido más amplio del evento, con más contexto y momentos clave ordenados con intención.',
  },
];

const COVERAGE_ZONES = [
  'Ciudad Autónoma de Buenos Aires (CABA)',
  'Capital Federal',
  'Gran Buenos Aires (GBA)',
  'Zona Norte',
  'Zona Sur y Zona Oeste',
  'Otras zonas del AMBA — consultanos disponibilidad',
];

const VIDEO_FAQ = [
  {
    question: '¿Hacen solo video o también foto?',
    answer:
      'Ofrecemos cobertura de video, foto o ambos según el evento. En esta página nos enfocamos en filmación y entrega audiovisual; si necesitás pack completo, lo armamos en la propuesta.',
  },
  {
    question: '¿Cuánto dura el video resumen?',
    answer:
      'Depende del tipo de evento y las horas de cobertura. Lo definimos en el brief para que tenga ritmo y no se sienta ni muy corto ni eterno.',
  },
  {
    question: '¿En cuánto tiempo entregan el material?',
    answer:
      'Los plazos varían según temporada, duración del evento y tipo de entrega. Al consultar por WhatsApp te pasamos tiempos estimados según tu fecha.',
  },
  {
    question: '¿Trabajan con empresas y eventos corporativos?',
    answer:
      'Sí. Cubrimos conferencias, lanzamientos, activaciones y fiestas de empresa con material útil para marketing, prensa o comunicación interna.',
  },
  {
    question: '¿Pueden filmar en salones de CABA y Zona Norte?',
    answer:
      'Sí, cubrimos eventos en CABA, Capital Federal, GBA y Zona Norte. Contanos la locación y la fecha para confirmar logística.',
  },
];

function H2Block({
  title,
  children,
  className = 'py-24 bg-zinc-950',
  altBg = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  altBg?: boolean;
}) {
  const bg = altBg ? 'py-24 bg-zinc-900 border-y border-zinc-800' : className;
  return (
    <section className={bg}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-10 leading-tight max-w-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ items }: { items: { icon: React.ReactNode; title: string; desc: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 transition-colors group"
        >
          <div className="text-brand-orange mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
          <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export const VideoEventosPage: React.FC = () => {
  const handleClick = () => trackWhatsAppClick('video');
  const videoWhatsAppUrl = getWhatsAppUrl('video');

  return (
    <>
      <ServicePageHero
        badge="Video para eventos"
        h1="Video para eventos en Buenos Aires"
        subtitle={INTRO}
        ctaLabel="Consultar video para mi evento"
        ctaHref={getWhatsAppUrl('video')}
        onCtaClick={handleClick}
        imageBase="/images/hero-video-portada"
        imageAlt="Filmación de eventos sociales y corporativos en Puerto Madero, CABA y GBA — FRAME Estudio"
        responsive
        heroPolish
      />

      <H2Block title="Servicio de filmación de eventos y fiestas profesionales" altBg={false}>
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">
          Registramos la noche y los momentos clave con criterio documental y ritmo de edición, sin frenar la
          celebración.
        </p>
        <ul className="space-y-3 max-w-3xl">
          {PARTY_FILMING.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl px-5 py-4"
            >
              <span className="text-brand-orange font-display font-black text-lg leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </H2Block>

      <H2Block title="Filmmaker para eventos sociales y corporativos" altBg>
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-10">
          Somos filmmakers para eventos en Buenos Aires: cubrimos fiestas, casamientos, lanzamientos y
          encuentros corporativos con una mirada cercana, profesional y pensada para el uso del material
          después del evento.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl">
          {FILMMAKER_POINTS.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors group"
            >
              <div className="text-brand-orange mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </H2Block>

      <H2Block title="Video para eventos sociales">
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-10">
          Fiestas, celebraciones y momentos que merecen quedar en movimiento, con una mirada cercana y
          profesional.
        </p>
        <CardGrid items={SOCIAL_VIDEO} />
        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl mt-10">
          También cubrimos{' '}
          <a href="/fotografo-15-anos-caba-gba/" className="text-white underline-offset-4 hover:underline">
            fiestas de 15
          </a>{' '}
          y{' '}
          <a href="/fotografia-video-casamientos-buenos-aires/" className="text-white underline-offset-4 hover:underline">
            casamientos
          </a>{' '}
          con video pensado para la emoción del día y la energía de la fiesta.
        </p>
      </H2Block>

      <H2Block title="Video para eventos corporativos" altBg>
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-10">
          Material claro y útil para equipos de marketing, comunicación, prensa o producción.
        </p>
        <CardGrid items={CORPORATE_VIDEO} />
        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl mt-10">
          Más detalle en nuestra página de{' '}
          <a href="/eventos-corporativos-buenos-aires/" className="text-white underline-offset-4 hover:underline">
            eventos corporativos
          </a>
          .
        </p>
      </H2Block>

      <H2Block title="¿Qué incluye nuestro servicio de producción de video profesional?">
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
          {INCLUDES.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="text-brand-orange shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </H2Block>

      <H2Block title="Formatos de entrega: Clips de LinkedIn, Reels de alto impacto y videos completos" altBg>
        <div className="space-y-4 max-w-4xl">
          {DELIVERY_TYPES.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 items-start bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <Play size={20} className="text-brand-orange shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </H2Block>

      <H2Block title="Presupuestos y tarifas de producción de video">
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">
          Cada evento es distinto: fecha, zona, horas de cobertura, tipo de entrega y si necesitás solo video o
          también foto. Te armamos un presupuesto a medida según tu evento en CABA, GBA o Zona Norte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={videoWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => onWhatsAppLinkClick(e, videoWhatsAppUrl, 'video')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-brand-orange hover:text-white transition-all"
          >
            <MessageCircle size={18} />
            Pedir presupuesto por WhatsApp
          </a>
          <a
            href="/contacto/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:border-white hover:bg-white/5 transition-all"
          >
            Formulario de contacto
          </a>
        </div>
      </H2Block>

      <H2Block title="Grabación de video para eventos con drones en Buenos Aires, CABA, Federal y GBA" altBg>
        <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">
          Filmamos eventos en la Ciudad de Buenos Aires, Capital Federal, Gran Buenos Aires y Zona Norte. Contanos
          la locación de tu fiesta o evento corporativo para confirmar disponibilidad.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          {COVERAGE_ZONES.map((zone) => (
            <li
              key={zone}
              className="flex items-start gap-3 bg-zinc-950/60 border border-zinc-800/50 rounded-xl px-4 py-3 text-sm text-zinc-300"
            >
              <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
              {zone}
            </li>
          ))}
        </ul>
      </H2Block>

      <FAQ items={VIDEO_FAQ} title="Preguntas frecuentes" />

      <WhatsAppCTASection
        title="Consultá disponibilidad para tu evento"
        subtitle="Escribinos por WhatsApp con fecha, zona y tipo de evento. Te respondemos con una propuesta de filmación a medida."
        ctaLabel="Consultar disponibilidad"
        context="video"
      />
    </>
  );
};
