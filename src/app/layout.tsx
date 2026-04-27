import type { Metadata } from "next";
import { cinzel, lato, cormorantGaramond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nydamhomes.com'),
  title: "Kevin Nydam | Denver Real Estate | Compass Broker Associate",
  description: "Kevin Nydam is a trusted Compass Broker Associate in Denver, CO. Whether buying or selling, Kevin delivers expert guidance, market knowledge, and a personal touch to every transaction.",
  keywords: ['Denver real estate', 'Denver realtor', 'Compass broker', 'Denver homes for sale', 'sell my home Denver', 'Kevin Nydam', 'Colorado real estate agent'],
  openGraph: {
    title: "Kevin Nydam | Denver Real Estate | Compass",
    description: "Trusted Compass Broker Associate helping buyers and sellers navigate the Denver real estate market.",
    type: 'website',
    locale: 'en_US',
    siteName: "Kevin Nydam Real Estate",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kevin Nydam | Denver Real Estate | Compass",
    description: "Trusted Compass Broker Associate helping buyers and sellers navigate the Denver real estate market.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Kevin Nydam" }],
};

const realEstateAgentJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Kevin Nydam',
  jobTitle: 'Broker Associate',
  worksFor: {
    '@type': 'RealEstateOrganization',
    name: 'Compass',
    url: 'https://www.compass.com',
  },
  url: 'https://nydamhomes.com',
  telephone: '+1-303-900-2018',
  email: 'kevin.nydam@compass.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Denver' },
    { '@type': 'City', name: 'Littleton' },
    { '@type': 'City', name: 'Aurora' },
    { '@type': 'City', name: 'Greenwood Village' },
    { '@type': 'City', name: 'Centennial' },
    { '@type': 'City', name: 'Highlands Ranch' },
  ],
  description: 'Kevin Nydam is a Compass Broker Associate in Denver, CO with expertise in residential real estate for buyers and sellers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable} ${cormorantGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentJsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
