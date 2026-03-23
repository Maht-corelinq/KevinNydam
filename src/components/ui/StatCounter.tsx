'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Stat } from '@/types';

export default function StatCounter({ label, value, suffix, prefix }: Stat) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(value, 2000, isInView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-white/80 font-body">
        {label}
      </div>
    </div>
  );
}
