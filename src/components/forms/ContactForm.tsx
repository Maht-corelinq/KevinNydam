'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { useUTM } from '@/hooks/useUTM';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const utm = useUTM();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          leadSource: 'contact_form',
          ...utm,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call Kevin directly.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-10 text-center shadow-md">
        <CheckCircle className="text-gold mx-auto mb-4" size={48} />
        <h3 className="font-heading text-2xl text-navy mb-2">Thank You!</h3>
        <p className="text-charcoal/70">Kevin will be in touch within 24 hours.</p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-stone bg-white rounded text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors";
  const labelClasses = "block text-sm font-semibold text-navy mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-8 shadow-md space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>First Name *</label>
          <input {...register('firstName')} className={cn(inputClasses, errors.firstName && 'border-red-400')} />
          {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className={labelClasses}>Last Name *</label>
          <input {...register('lastName')} className={cn(inputClasses, errors.lastName && 'border-red-400')} />
          {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Email *</label>
        <input type="email" {...register('email')} className={cn(inputClasses, errors.email && 'border-red-400')} />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClasses}>Phone</label>
        <input type="tel" {...register('phone')} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses}>I&apos;m Interested In *</label>
        <select {...register('interest')} className={cn(inputClasses, errors.interest && 'border-red-400')}>
          <option value="">Select...</option>
          <option value="buying">Buying a Home</option>
          <option value="selling">Selling a Home</option>
          <option value="both">Both Buying & Selling</option>
          <option value="exploring">Just Exploring</option>
        </select>
        {errors.interest && <p className={errorClasses}>{errors.interest.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Price Range</label>
          <select {...register('priceRange')} className={inputClasses}>
            <option value="">Select...</option>
            <option value="under-300k">Under $300K</option>
            <option value="300k-500k">$300K - $500K</option>
            <option value="500k-750k">$500K - $750K</option>
            <option value="750k-1m">$750K - $1M</option>
            <option value="over-1m">Over $1M</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Timeline</label>
          <select {...register('timeline')} className={inputClasses}>
            <option value="">Select...</option>
            <option value="asap">ASAP</option>
            <option value="1-3months">1-3 Months</option>
            <option value="3-6months">3-6 Months</option>
            <option value="6-12months">6-12 Months</option>
            <option value="just-looking">Just Looking</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea {...register('message')} rows={4} className={inputClasses} placeholder="Tell Kevin about your real estate goals..." />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
