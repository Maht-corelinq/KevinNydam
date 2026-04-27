import type { Listing, Testimonial, Stat, AreaServed } from '@/types';

export const siteConfig = {
  name: 'Kevin Nydam',
  title: 'Broker Associate',
  company: 'Compass',
  phone: '(978) 648-3237',
  phoneRaw: '+19786483237',
  email: 'kevin.nydam@compass.com',
  compassProfile: 'https://www.compass.com/agents/kevin-nydam/',
  compassConcierge: 'https://www.compass.com/concierge/kevin-nydam',
  license: 'Colorado Licensed Broker Associate',
};

export const stats: Stat[] = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Homes Sold', value: 150, suffix: '+' },
  { label: 'Total Volume', value: 75, prefix: '$', suffix: 'M+' },
  { label: 'Star Rating', value: 5, suffix: '.0' },
];

export const aboutBio = {
  headline: "Your Trusted Partner in Denver Real Estate",
  paragraphs: [
    "Kevin Nydam isn't just a real estate agent — he's the person you trust to guide one of the biggest decisions of your life. A Colorado native with deep roots in the Denver metro area, Kevin brings the kind of local knowledge and genuine care that turns clients into lifelong friends.",
    "Kevin's path to real estate was shaped by resilience. As a leukemia survivor, he learned the value of determination, perspective, and making every moment count. That same drive fuels his commitment to going above and beyond for every client — whether you're a first-time buyer navigating a competitive market or a seller looking to maximize your home's value.",
    "When he's not helping clients find their dream home, you'll find Kevin on the tennis court, carving through Colorado powder on his snowboard, cheering on the Avalanche, or exploring new destinations around the world.",
  ],
  interests: [
    { icon: 'tennis', label: 'Tennis' },
    { icon: 'snowboard', label: 'Snowboarding' },
    { icon: 'hockey', label: 'Hockey' },
    { icon: 'travel', label: 'Travel' },
  ],
};

export const buyerServices = [
  'Personalized home search tailored to your lifestyle and budget',
  'Expert negotiation to get you the best deal',
  'Market analysis and neighborhood insights',
  'Guidance through inspections, appraisals, and closing',
  'Access to off-market and coming-soon listings through Compass',
];

export const sellerServices = [
  'Strategic pricing backed by comprehensive market data',
  'Professional staging and marketing through Compass Concierge',
  'Maximum exposure through Compass\'s national network',
  'Expert negotiation to maximize your sale price',
  'Seamless transaction management from listing to closing',
];

export const listings: Listing[] = [
  {
    id: '1',
    address: '2314 Dexter St',
    city: 'Denver',
    price: 840000,
    bedrooms: 3,
    bathrooms: 4,
    sqft: 1896,
    imageUrl: '/images/listing-1.jpg',
    compassUrl: 'https://www.compass.com/listing/2314-dexter-street-denver-co-80207/1670686055706745737/',
  },
  {
    id: '2',
    address: '935 Pennsylvania St #8',
    city: 'Denver',
    price: 675000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1851,
    imageUrl: '/images/listing-2.jpg',
    compassUrl: 'https://www.compass.com/listing/935-pennsylvania-street-number-8-denver-co-80203/1656506814940498025/',
  },
  {
    id: '3',
    address: '23515 E Platte Dr #9D',
    city: 'Aurora',
    price: 349000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1258,
    imageUrl: '/images/listing-3.jpg',
    compassUrl: 'https://www.compass.com/listing/23515-east-platte-drive-unit-9d-aurora-co-80016/1658064137735698441/',
  },
  {
    id: '4',
    address: '310 S 4th Ct',
    city: 'Deer Trail',
    price: 285000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1218,
    imageUrl: '/images/listing-4.jpg',
    compassUrl: 'https://www.compass.com/listing/310-south-4th-court-deer-trail-co-80105/1636668723389289305/',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Kevin made our first home purchase feel effortless. His knowledge of the Denver market and his patience with our questions made all the difference. We couldn't have asked for a better agent.",
    clientName: 'Sarah & James M.',
    context: 'First-time Homebuyers, Denver',
    rating: 5,
  },
  {
    id: '2',
    quote: "We interviewed several agents before choosing Kevin, and it was the best decision we made. He sold our home in just 10 days, above asking price. His marketing strategy through Compass was incredible.",
    clientName: 'Michael R.',
    context: 'Home Seller, Greenwood Village',
    rating: 5,
  },
  {
    id: '3',
    quote: "Kevin isn't just an agent — he's a trusted advisor. He took the time to understand exactly what we were looking for and found us a home we didn't even know existed. Highly recommend.",
    clientName: 'David & Lisa K.',
    context: 'Relocating Family, Littleton',
    rating: 5,
  },
  {
    id: '4',
    quote: "Working with Kevin was a game-changer. His Compass Concierge program helped us stage and update our home before listing, and we ended up selling for significantly more than we expected.",
    clientName: 'Jennifer T.',
    context: 'Home Seller, Centennial',
    rating: 5,
  },
];

export const areasServed: AreaServed[] = [
  { name: 'Denver' },
  { name: 'Littleton' },
  { name: 'Aurora' },
  { name: 'Greenwood Village' },
  { name: 'Centennial' },
  { name: 'Highlands Ranch' },
  { name: 'Parker' },
  { name: 'Castle Rock' },
  { name: 'Lakewood' },
  { name: 'Englewood' },
  { name: 'Lone Tree' },
  { name: 'Cherry Creek' },
];

export const conciergeServices = [
  'Home Staging',
  'Interior Painting',
  'Flooring Updates',
  'Landscaping',
  'Deep Cleaning',
  'Roof Repair',
  'Plumbing Updates',
  'Electrical Work',
  'Kitchen Improvements',
  'Bathroom Renovations',
];
