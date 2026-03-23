import { siteConfig } from '@/data/siteData';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 text-white/70">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="font-heading text-xl text-white mb-2">{siteConfig.name}</h3>
            <p className="text-sm">
              {siteConfig.title} | {siteConfig.company}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 text-sm hover:text-gold transition-colors">
              <Phone size={14} /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm hover:text-gold transition-colors">
              <Mail size={14} /> {siteConfig.email}
            </a>
          </div>

          {/* Links */}
          <div className="space-y-2 text-sm">
            <a href={siteConfig.compassProfile} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">
              Compass Profile
            </a>
            <a href={siteConfig.compassConcierge} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">
              Compass Concierge
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-white/40 space-y-2">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p>
            {siteConfig.name} is a licensed Broker Associate affiliated with Compass. Compass is a licensed real estate broker.
            Equal Housing Opportunity.
          </p>
          <p>
            All material is intended for informational purposes only and is compiled from sources deemed reliable but is subject to errors,
            omissions, changes in price, condition, sale, or withdrawal without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
