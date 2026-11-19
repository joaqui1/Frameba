import React from 'react';
import { ArrowUpRight, Clock, Smartphone, CalendarDays } from 'lucide-react';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { RelatedServices } from '../components/RelatedServices';
import { GoogleRating } from '../components/GoogleRating';
import { OPENING_HOURS_LABEL, PHONE_DISPLAY, PHONE_TEL } from '../utils/business';

/** Fine-line stationery and camera, in the guides' paper-and-ink language. */
const ContactIllustration: React.FC = () => (
  <svg viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <path d="M72 218c90-19 163-22 249-15 64 5 123 4 197-10" strokeWidth=".65" opacity=".35" />
      <g transform="rotate(-12 140 100)">
        <path d="M61 58h159v99H61z" />
        <path d="m62 59 78 62 79-62M62 155l56-49m101 49-56-49" />
        <path d="M66 62h149v91" opacity=".2" />
      </g>
      <path d="M179 110h49l17-25h100l18 25h48a9 9 0 0 1 9 9v83a9 9 0 0 1-9 9H179a9 9 0 0 1-9-9v-83a9 9 0 0 1 9-9Z" fill="var(--home-paper)" />
      <path d="M178 114h51l18-25h96l18 25h49a6 6 0 0 1 6 6v81" opacity=".25" />
      <path d="M171 133h72m92 0h84M171 187h70m96 0h82M251 92h87v14h-87z" opacity=".65" />
      <circle cx="289" cy="159" r="46" />
      <circle cx="289" cy="159" r="39" opacity=".55" />
      <circle cx="289" cy="159" r="29" />
      <path d="M269 153c2-9 8-15 18-17m-21 23v4" opacity=".55" />
      <rect x="187" y="118" width="29" height="8" rx="1" />
      <circle cx="384" cy="123" r="4" />
      <path d="M365 100h30v10m-210-9h27v9M180 143v33m5-33v33m5-33v33" opacity=".7" />
      <path d="M428 207c9-45 27-82 57-112m-41 63c-12-7-17-18-15-33 13 8 18 19 15 33Zm11-24c16 1 28-6 35-21-17 1-28 8-35 21Zm13-23c-6-12-5-24 4-35 7 13 6 25-4 35Zm16-15c16-3 26-13 29-29-16 4-26 14-29 29Zm-49 86c17 3 30-2 40-16-17-2-30 3-40 16Z" />
      <path d="M239 65c17-10 38-12 57-6m12 4 8 3" strokeDasharray="2 5" opacity=".45" />
    </g>
    <g stroke="#8d4e35" strokeWidth="1" strokeLinecap="round">
      <path d="M359 54v12m-6-6h12M109 190v8m-4-4h8m389-43 8-5" />
      <circle cx="389" cy="78" r="1.6" fill="#8d4e35" stroke="none" />
      <circle cx="93" cy="161" r="1.4" fill="#8d4e35" stroke="none" />
    </g>
  </svg>
);

export const ContactoPage: React.FC = () => (
  <>
    <section data-page-hero className="frame-contact">
      <div className="frame-contact__inner">
        <nav aria-label="Breadcrumb" className="frame-contact__breadcrumb">
          <a href="/">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">Contacto</span>
        </nav>

        <div className="frame-contact__grid">
          <div className="frame-contact__intro">
            <span className="frame-contact__eyebrow">FRAME / Buenos Aires</span>
            <h1>Hablemos de<br /><em>tu evento.</em></h1>
            <p className="frame-contact__description">Escribinos por WhatsApp con el tipo de evento, fecha y zona. Te respondemos en el día con una propuesta a medida.</p>
            <WhatsAppLink context="contact" showIcon={false} className="home-editorial-cta frame-contact__quick-cta">
              Pedir propuesta<ArrowUpRight size={19} strokeWidth={1.3} aria-hidden />
            </WhatsAppLink>
            <GoogleRating className="frame-hero-rating" />
            <div className="frame-contact__illustration" aria-hidden="true">
              <ContactIllustration />
              <span>Una mirada. Tu historia.</span>
            </div>
          </div>

          <div className="frame-contact__details" aria-labelledby="contact-whatsapp-title">
            <span className="frame-contact__eyebrow">Una propuesta a tu medida</span>
            <h2 id="contact-whatsapp-title">Contanos<br /><em>tu idea.</em></h2>
            <p>Escribinos por WhatsApp para consultar disponibilidad y recibir una propuesta para tu evento.</p>

            <dl className="frame-contact__info">
              <div>
                <Clock size={21} strokeWidth={1.3} aria-hidden />
                <dt>Horario de atención</dt>
                <dd>{OPENING_HOURS_LABEL}</dd>
              </div>
              <div>
                <Smartphone size={21} strokeWidth={1.3} aria-hidden />
                <dt>Teléfono / WhatsApp</dt>
                <dd><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <CalendarDays size={21} strokeWidth={1.3} aria-hidden />
                <dt>Logística del evento</dt>
                <dd>Contanos dónde será para coordinar los detalles.</dd>
              </div>
            </dl>

            <WhatsAppLink context="contact" showIcon={false} className="home-editorial-cta frame-contact__cta">
              <span>Pedir propuesta por WhatsApp</span><ArrowUpRight size={19} strokeWidth={1.3} aria-hidden />
            </WhatsAppLink>
            <p className="frame-contact__note">Para empezar: tipo de evento, fecha y zona.</p>
          </div>
        </div>
      </div>
    </section>
    <RelatedServices />
  </>
);
