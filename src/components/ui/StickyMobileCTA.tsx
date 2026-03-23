'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 bg-gold text-white py-3 rounded font-heading text-sm font-semibold uppercase tracking-wider"
      >
        <Phone size={16} /> Call
      </a>
      <button
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex-1 flex items-center justify-center gap-2 border-2 border-gold text-gold py-3 rounded font-heading text-sm font-semibold uppercase tracking-wider"
      >
        <MessageSquare size={16} /> Contact
      </button>
    </div>
  );
}
