'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { valuationSchema, type ValuationFormData } from '@/lib/validations';
import { useUTM } from '@/hooks/useUTM';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

export default function ValuationForm() {
  const utm = useUTM();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
  });

  const onSubmit = async (data: ValuationFormData) => {
    setError('');
    try {
      const res = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          leadSource: 'valuation_band',
          ...utm,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="text-gold mx-auto mb-3" size={40} />
        <h3 className="font-heading text-xl text-white mb-1">Request Received!</h3>
        <p className="text-white/70 text-sm">Kevin will send your personalized valuation shortly.</p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-white/30 bg-white/15 text-white placeholder-white/60 rounded text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors backdrop-blur-sm";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <input
          {...register('firstName')}
          placeholder="First Name *"
          className={cn(inputClasses, errors.firstName && 'border-red-400')}
        />
        <input
          {...register('lastName')}
          placeholder="Last Name *"
          className={cn(inputClasses, errors.lastName && 'border-red-400')}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <input
          {...register('address')}
          placeholder="Property Address *"
          className={cn('md:col-span-2', inputClasses, errors.address && 'border-red-400')}
        />
        <input
          type="email"
          {...register('email')}
          placeholder="Email *"
          className={cn(inputClasses, errors.email && 'border-red-400')}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="tel"
          {...register('phone')}
          placeholder="Phone (optional)"
          className={cn('md:col-span-2', inputClasses)}
        />
        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Get My Valuation'}
        </Button>
      </div>
      {(errors.firstName || errors.lastName || errors.email || errors.address) && (
        <p className="text-red-300 text-xs mt-2">Please fill in all required fields.</p>
      )}
      {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
    </form>
  );
}
