export interface Listing {
  id: string;
  address: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  compassUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  context: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface AreaServed {
  name: string;
  description?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface LeadSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  leadType: 'consultation' | 'valuation' | 'contact';
  leadSource: string;
  interest?: 'buying' | 'selling' | 'both' | 'exploring';
  priceRange?: string;
  timeline?: string;
  address?: string;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface UTMParams {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
}
