'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from '@/lib/animations';
import { areasServed } from '@/data/siteData';

export default function MarketExpertise() {
  return (
    <section className="py-20 md:py-28 bg-stone">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Local Expertise
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl text-navy mb-4">
            Deep Roots in Colorado
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-charcoal/70 max-w-2xl mx-auto mb-12">
            Born and raised in Colorado, Kevin brings unmatched local knowledge to every transaction.
            Whether you&apos;re looking in Denver&apos;s urban core or the surrounding suburbs, Kevin knows
            the neighborhoods, the schools, and the market trends.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-3"
        >
          {areasServed.map((area) => (
            <motion.span
              key={area.name}
              variants={scaleIn}
              className="px-5 py-2.5 bg-white text-navy font-heading text-sm font-medium rounded-full shadow-sm border border-navy/10 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              {area.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
