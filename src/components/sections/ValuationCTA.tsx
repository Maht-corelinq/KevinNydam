'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';
import ValuationForm from '@/components/forms/ValuationForm';

export default function ValuationCTA() {
  return (
    <section id="valuation" className="py-20 md:py-24 bg-navy relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl text-white mb-4">
            What&apos;s Your Home Worth?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/70 mb-10 max-w-xl mx-auto">
            Get a complimentary market analysis from Kevin. Enter your address below and he&apos;ll
            provide a personalized valuation of your property.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <ValuationForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
