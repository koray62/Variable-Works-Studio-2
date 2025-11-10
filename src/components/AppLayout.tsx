import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import ProcessFlow from './ProcessFlow';
import Modules from './Modules';
import VariableLevels from './VariableLevels';
import PlatformFeatures from './PlatformFeatures';
import UseCases from './UseCases';
import Benefits from './Benefits';
import TechnicalSuperiority from './TechnicalSuperiority';
import FAQ from './FAQ';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { ChatbotWidget } from './ChatbotWidget';


export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProcessFlow />
      <Modules />
      <VariableLevels />
      <PlatformFeatures />
      <UseCases />
      <Benefits />
      <TechnicalSuperiority />
      <FAQ />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <ChatbotWidget />
    </div>
  );
}

