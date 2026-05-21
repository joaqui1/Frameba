import React from 'react';
import { ServicePageHero } from '../components/ServicePageHero';
import { Briefcase, Image, Clock, Megaphone, Users, Building, FileText } from 'lucide-react';
import { HowWeWork } from '../components/HowWeWork';
import { WhatsAppCTASection } from '../components/WhatsAppCTASection';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

const EVENT_TYPES = [
  { icon: <Megaphone size={20} />, label: 'Lanzamientos', desc: 'Productos, marcas y campañas' },
  { icon: <Users size={20} />, label: 'Conferencias', desc: 'Speakers, panels y congresos' },
  { icon: <Building size={20} />, label: 'Fiestas de empresa', desc: 'Fin de año, aniversarios, teambuilding' },
  { icon: <Image size={20} />, label: 'Activaciones', desc: 'Marca, stand y experiencias' },
  { icon: <FileText size={20} />, label: 'Jornadas internas', desc: 'Capacitaciones y eventos cerrados' },
  { icon: <Briefcase size={20} />, label: 'Institucionales', desc: 'Actos, inauguraciones y hitos' },
];

const CORPORATE_USES = [
  { icon: <Megaphone size={24} />, title: 'Redes y prensa', desc: 'Imágenes y clips para publicar rápido después del evento o enviar a medios.' },
  { icon: <FileText size={24} />, title: 'Comunicación interna', desc: 'Material para newsletters, presentaciones, reportes y equipos internos.' },
  { icon: <Image size={24} />, title: 'Marca y archivo', desc: 'Registro prolijo para web, portfolio institucional y futuras piezas comerciales.' },
];

const CORPORATE_STANDARDS = [
  'Cobertura puntual y coordinada con producción o marketing',
  'Tomas de speakers, público, networking, marca y ambientación',
  'Edición cuidada para que el material represente bien a la empresa',
  'Entrega organizada por carpetas, selección o prioridad de uso',
];

export const CorporativosPage: React.FC = () => {
  const handleClick = () => trackWhatsAppClick('corporate');

  return (
    <>
      <ServicePageHero
        badge="Corporativos"
        h1="Fotografía para eventos corporativos y video institucional"
        subtitle="Conferencias, lanzamientos, activaciones y fiestas de empresa con material claro, prolijo y listo para comunicar en redes, prensa o canales internos."
        ctaLabel="Solicitar cobertura"
        ctaHref={getWhatsAppUrl('corporate')}
        onCtaClick={handleClick}
        secondaryCta={{ label: 'Pedir presupuesto', href: '/contacto/' }}
        imageBase="/images/hero-corporativos-portada"
        imageAlt="Cobertura de video para eventos corporativos en Puerto Madero y conferencias en CABA por FRAME Estudio"
        responsive
        heroPolish
      />

      {/* ===== CORPORATE APPROACH ===== */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra mirada</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Video institucional para empresas en Buenos Aires y videos corporativos
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Cubrimos speakers, público, networking, ambientación y presencia de marca con criterio de comunicación. La idea es que el material sirva después del evento.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Antes de cubrir coordinamos prioridades para saber qué momentos, personas y formatos necesita tu equipo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CORPORATE_USES.map((item, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-6 text-center group hover:border-zinc-700 transition-colors">
                  <div className="text-brand-orange mb-3 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
              ))}
              <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-6 text-center group hover:border-zinc-700 transition-colors">
                <div className="text-brand-orange mb-3 flex justify-center group-hover:scale-110 transition-transform"><Clock size={24} /></div>
                <h3 className="text-white font-bold text-sm mb-1">Entrega ágil</h3>
                <p className="text-zinc-500 text-xs">Material organizado según prioridad de uso y tiempos del equipo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Grabación de eventos empresariales, congresos y conferencias de prensa
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Cada evento tiene un objetivo distinto. Cubrimos el registro pensando en dónde se va a usar el material después.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {EVENT_TYPES.map((item, i) => (
              <div key={i} className="bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-brand-orange group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold text-base">{item.label}</h3>
                </div>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-14 text-center">
            Foto y video que tu empresa puede usar
          </h2>

          <div className="space-y-6">
            {CORPORATE_USES.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-8 hover:border-zinc-700 transition-colors">
                <div className="text-brand-orange shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 text-sm text-center mt-10">
            Cubrimos eventos corporativos en CABA, Buenos Aires y Gran Buenos Aires. Emitimos factura.
          </p>
          <p className="text-zinc-400 text-sm mt-8 text-center max-w-2xl mx-auto">
            Brindamos cobertura técnica en Puerto Madero, Palermo y locaciones clave de Zona Norte.
          </p>
        </div>
      </section>

      {/* ===== CORPORATE STANDARDS ===== */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Forma de trabajo</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
                Cobertura audiovisual estratégica para equipos de marketing, prensa y producción.
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Antes del evento coordinamos prioridades: qué logos mostrar, qué personas cubrir, qué momentos no pueden faltar y qué formato de entrega necesita la empresa.
              </p>
            </div>
            <div className="grid gap-3">
              {CORPORATE_STANDARDS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-5">
                  <span className="text-brand-orange font-display font-black text-xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <HowWeWork
        steps={[
          { number: '01', title: 'Nos pasan el brief', description: 'Evento, fecha, locación, horarios, marca y prioridades de comunicación.' },
          { number: '02', title: 'Definimos la cobertura', description: 'Acordamos foto, video, cantidad de horas, entregables y tiempos.' },
          { number: '03', title: 'Cubrimos los momentos clave', description: 'Speakers, público, networking, ambientación, producto y equipo.' },
          { number: '04', title: 'Entregamos material usable', description: 'Archivos editados y organizados para redes, prensa, web o comunicación interna.' },
        ]}
      />

      {/* ===== FINAL CTA ===== */}
      <WhatsAppCTASection
        title="¿Tenés un evento corporativo?"
        subtitle="Escribinos por WhatsApp con los detalles del evento. Te armamos una propuesta a medida."
        ctaLabel="Solicitar cobertura"
        context="corporate"
      />
    </>
  );
};
