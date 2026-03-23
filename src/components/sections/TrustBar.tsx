'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';
import StatCounter from '@/components/ui/StatCounter';
import { stats } from '@/data/siteData';

export default function TrustBar() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUp}>
            <StatCounter {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
