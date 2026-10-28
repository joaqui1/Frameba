import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { StickyWhatsAppBar } from './StickyWhatsAppBar';
import type { CTA_Context } from '../utils/whatsapp';

interface Props {
  children: React.ReactNode;
  ctaContext?: CTA_Context;
  ctaLabel?: string;
  homeEditorial?: boolean;
}

export const Layout: React.FC<Props> = ({ children, ctaContext = 'general', ctaLabel, homeEditorial = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`bg-zinc-950 min-h-screen text-white font-sans antialiased${homeEditorial ? ' home-editorial-page' : ''}`}>
      <Navbar onMenuOpenChange={setMobileMenuOpen} homeEditorial={homeEditorial} ctaContext={ctaContext === 'general' ? 'contact' : ctaContext} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton context={ctaContext} />
      <StickyWhatsAppBar context={ctaContext} label={ctaLabel} hidden={mobileMenuOpen} />
    </div>
  );
};
