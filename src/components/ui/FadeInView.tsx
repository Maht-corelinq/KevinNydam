'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';
import type { ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function FadeInView({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: FadeInViewProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={className}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
