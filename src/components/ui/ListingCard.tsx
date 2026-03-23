'use client';

import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';
import { Bed, Bath, Maximize, ExternalLink, Home } from 'lucide-react';
import type { Listing } from '@/types';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ListingCard({ address, city, price, bedrooms, bathrooms, sqft, imageUrl, compassUrl }: Listing) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-56 bg-gradient-to-br from-navy/5 to-navy/15 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 z-10"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Home size={40} className="text-navy/15" />
        </div>
        <div className="absolute top-4 left-4 bg-navy/90 text-white px-4 py-1.5 font-heading text-lg font-semibold z-20">
          {formatPrice(price)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg text-navy mb-1">{address}</h3>
        <p className="text-charcoal/60 text-sm mb-3">{city}, CO</p>
        <div className="flex items-center gap-4 text-sm text-charcoal/70 mb-4">
          <span className="flex items-center gap-1">
            <Bed size={16} /> {bedrooms} bd
          </span>
          <span className="flex items-center gap-1">
            <Bath size={16} /> {bathrooms} ba
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={16} /> {sqft.toLocaleString()} sqft
          </span>
        </div>
        <a
          href={compassUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-dark text-sm font-semibold uppercase tracking-wider transition-colors"
        >
          View on Compass <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
}
