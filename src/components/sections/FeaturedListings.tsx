'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';
import ListingCard from '@/components/ui/ListingCard';
import { listings, siteConfig } from '@/data/siteData';
import { ExternalLink } from 'lucide-react';

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Current Properties
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl text-navy">
            Kevin&apos;s Current Listings
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={siteConfig.compassProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-heading text-sm font-semibold uppercase tracking-wider transition-colors"
          >
            View All Listings on Compass <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
