import { z } from 'zod';

export const consultationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
  interest: z.enum(['buying', 'selling', 'both', 'exploring']),
  message: z.string().optional(),
});

export const valuationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email({ message: 'Please enter a valid email' }),
  address: z.string().min(5, 'Please enter your property address'),
  phone: z.string().optional(),
});

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
  interest: z.enum(['buying', 'selling', 'both', 'exploring']),
  priceRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
export type ValuationFormData = z.infer<typeof valuationSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
