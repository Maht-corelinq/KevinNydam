'use client';

import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/siteData';

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-20 md:py-28 bg-stone overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Client Testimonials
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl text-navy">
            What Clients Are Saying
          </motion.h2>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="w-2.5 h-2.5 rounded-full bg-navy/20 hover:bg-gold transition-colors"
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
