import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PillarsSection } from '@/components/PillarsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { RealCutsGallery } from '@/components/RealCutsGallery';
import { AmbienceSection } from '@/components/AmbienceSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LocationSection } from '@/components/LocationSection';
import { InstagramSection } from '@/components/InstagramSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060607] text-[#f4f4f5] selection:bg-white selection:text-black">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ServicesSection />
      <RealCutsGallery />
      <AmbienceSection />
      <TestimonialsSection />
      <LocationSection />
      <InstagramSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
