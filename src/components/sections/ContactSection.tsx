'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '@/lib/animations';
import ContactForm from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/siteData';
import { Phone, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-navy">
            Ready to Make a Move?
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-5 gap-12"
        >
          {/* Form */}
          <motion.div variants={fadeInLeft} className="md:col-span-3">
            <ContactForm />
          </motion.div>

          {/* Contact card */}
          <motion.div variants={fadeInRight} className="md:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-md sticky top-24">
              <div className="w-20 h-20 bg-gradient-to-br from-navy/10 to-navy/20 rounded-full mx-auto mb-6 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center z-10"
                  style={{ backgroundImage: 'url(/images/kevin-headshot.jpg)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading text-navy/30">KN</span>
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl text-navy">{siteConfig.name}</h3>
                <p className="text-sm text-charcoal/60">{siteConfig.title} | {siteConfig.company}</p>
              </div>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.compassProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors text-sm"
                >
                  <ExternalLink size={16} className="text-gold" />
                  View Compass Profile
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
