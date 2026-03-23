'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import AboutKevin from '@/components/sections/AboutKevin';
import ServicesSplit from '@/components/sections/ServicesSplit';
import FeaturedListings from '@/components/sections/FeaturedListings';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CompassConcierge from '@/components/sections/CompassConcierge';
import MarketExpertise from '@/components/sections/MarketExpertise';
import ValuationCTA from '@/components/sections/ValuationCTA';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import ConsultationModal from '@/components/forms/ConsultationModal';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationInterest, setConsultationInterest] = useState<'buying' | 'selling' | 'both' | 'exploring' | undefined>();
  const [consultationSource, setConsultationSource] = useState('hero_cta');

  const openConsultation = (interest?: 'buying' | 'selling', source?: string) => {
    setConsultationInterest(interest);
    setConsultationSource(source || 'hero_cta');
    setConsultationOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection onOpenConsultation={() => openConsultation()} />
        <TrustBar />
        <AboutKevin onOpenConsultation={() => openConsultation()} />
        <ServicesSplit
          onOpenConsultation={(type) =>
            openConsultation(type, type === 'buying' ? 'buyer_cta' : 'seller_cta')
          }
        />
        <FeaturedListings />
        <TestimonialsCarousel />
        <CompassConcierge
          onOpenConsultation={() => openConsultation('selling', 'concierge_cta')}
        />
        <MarketExpertise />
        <ValuationCTA />
        <ContactSection />
      </main>
      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultInterest={consultationInterest}
        leadSource={consultationSource}
      />
      <StickyMobileCTA />
    </>
  );
}
