import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/Problem'; // Maps to BentoGrid content
import { Differentiators } from './components/Experience'; // Maps to Differentiators content
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  
  // Lógica para detectar #contacto en la URL y scrollear
  useEffect(() => {
    // Verificamos si hay un # en la URL (ej: #contacto)
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Quitamos el '#'
      
      // Esperamos 500ms para asegurar que React haya "dibujado" la sección Contact
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        <Differentiators />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;