'use client';

import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

export default function TestimonialCard({ quote, clientName, context, rating }: Testimonial) {
  return (
    <div className="embla__slide bg-white rounded-lg p-8 shadow-md flex flex-col shrink-0 mx-3" style={{ flexBasis: 'min(420px, 85vw)' }}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="font-accent text-lg italic text-charcoal leading-relaxed mb-6 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <div className="font-heading text-sm font-semibold text-navy">{clientName}</div>
        <div className="text-xs text-charcoal/60">{context}</div>
      </div>
    </div>
  );
}
