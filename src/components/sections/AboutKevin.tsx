'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '@/lib/animations';
import { aboutBio } from '@/data/siteData';
import Button from '@/components/ui/Button';
import { CircleDot, Mountain, Trophy, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const interestIcons: Record<string, LucideIcon> = {
  tennis: CircleDot,
  snowboard: Mountain,
  hockey: Trophy,
  travel: Plane,
};

interface AboutKevinProps {
  onOpenConsultation: () => void;
}

export default function AboutKevin({ onOpenConsultation }: AboutKevinProps) {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Photo */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="aspect-[3/4] bg-stone rounded-lg overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: 'url(/images/kevin-headshot.jpg)' }}
              />
              {/* Placeholder shown until real photo is added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy/5 to-navy/15">
                <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <span className="text-4xl text-navy/30">KN</span>
                </div>
                <span className="text-navy/25 font-heading text-sm uppercase tracking-widest">Photo Coming Soon</span>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-lg -z-10" />
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeInRight}>
            <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              About Kevin
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
              {aboutBio.headline}
            </h2>
            {aboutBio.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-charcoal/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Interests */}
            <div className="flex gap-8 mt-6 mb-8">
              {aboutBio.interests.map((interest) => {
                const Icon = interestIcons[interest.icon];
                return (
                  <div key={interest.icon} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="text-xs text-charcoal/60 uppercase tracking-wider">
                      {interest.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button variant="primary" onClick={onOpenConsultation}>
              Let&apos;s Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
