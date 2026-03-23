'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteData';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-heading text-lg text-white font-medium tracking-wider">
          {siteConfig.name}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/80 hover:text-gold text-sm uppercase tracking-wider transition-colors">About</a>
          <a href="#services" className="text-white/80 hover:text-gold text-sm uppercase tracking-wider transition-colors">Services</a>
          <a href="#listings" className="text-white/80 hover:text-gold text-sm uppercase tracking-wider transition-colors">Listings</a>
          <a href="#contact" className="text-white/80 hover:text-gold text-sm uppercase tracking-wider transition-colors">Contact</a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
          >
            <Phone size={14} /> {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
