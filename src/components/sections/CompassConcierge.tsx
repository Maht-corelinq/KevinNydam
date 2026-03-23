'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, fadeIn, viewportConfig } from '@/lib/animations';
import { conciergeServices, siteConfig } from '@/data/siteData';
import { Check, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface CompassConciergeProps {
  onOpenConsultation: () => void;
}

export default function CompassConcierge({ onOpenConsultation }: CompassConciergeProps) {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content */}
            <div>
              <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                Exclusive Seller Advantage
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl text-navy mb-6">
                Sell for More with Compass Concierge
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-charcoal/80 leading-relaxed mb-4">
                Compass Concierge is the hassle-free way to sell your home faster and for a higher price.
                Compass fronts the cost of home improvements that can increase your home&apos;s value — with no
                upfront costs, no interest, and no fees until your home sells.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-charcoal/80 leading-relaxed mb-8">
                From staging and painting to flooring and landscaping, Kevin will guide you through
                which improvements will give you the highest return on investment.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Button variant="primary" onClick={onOpenConsultation}>
                  Learn How Concierge Can Help
                </Button>
                <a
                  href={siteConfig.compassConcierge}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-gold hover:text-gold-dark text-sm font-heading font-semibold uppercase tracking-wider transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            {/* Services grid */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="font-heading text-xl text-navy mb-6">Covered Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {conciergeServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-sm text-charcoal/80">
                    <Check size={14} className="text-gold shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-stone">
                <p className="text-xs text-charcoal/50 italic">
                  No upfront costs &bull; No interest &bull; Deducted at closing
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
