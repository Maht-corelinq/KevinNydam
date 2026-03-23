'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { buyerServices, sellerServices } from '@/data/siteData';
import { Home, TrendingUp, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ServicesSplitProps {
  onOpenConsultation: (type: 'buying' | 'selling') => void;
}

export default function ServicesSplit({ onOpenConsultation }: ServicesSplitProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-stone overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            How Kevin Helps
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-navy">
            Expert Guidance for Every Journey
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Buyers */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg p-8 md:p-10 border-t-4 border-gold hover:scale-[1.02] transition-transform duration-300 shadow-sm"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Home className="text-gold" size={24} />
            </div>
            <h3 className="font-heading text-2xl text-navy mb-4">For Buyers</h3>
            <p className="text-charcoal/70 mb-6">
              Finding your dream home in Denver&apos;s competitive market takes expertise, strategy, and a dedicated partner in your corner.
            </p>
            <ul className="space-y-3 mb-8">
              {buyerServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={16} className="text-gold mt-0.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              onClick={() => onOpenConsultation('buying')}
            >
              Start Your Home Search
            </Button>
          </motion.div>

          {/* Sellers */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg p-8 md:p-10 border-t-4 border-gold hover:scale-[1.02] transition-transform duration-300 shadow-sm"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="text-gold" size={24} />
            </div>
            <h3 className="font-heading text-2xl text-navy mb-4">For Sellers</h3>
            <p className="text-charcoal/70 mb-6">
              Selling your home is a big decision. Kevin&apos;s strategic approach ensures you get the best price with the least stress.
            </p>
            <ul className="space-y-3 mb-8">
              {sellerServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={16} className="text-gold mt-0.5 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById('valuation')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Your Home&apos;s Value
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
