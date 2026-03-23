'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="text-gold text-sm uppercase tracking-[0.3em] font-body font-semibold mb-6"
        >
          Compass — Denver, Colorado
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-4"
        >
          Kevin Nydam
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="font-accent text-xl md:text-2xl text-white/80 italic mb-10"
        >
          Broker Associate — Your Trusted Guide in Denver Real Estate
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenConsultation}
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: [0.19, 1, 0.22, 1] }}
        >
          <ChevronDown className="text-white/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
