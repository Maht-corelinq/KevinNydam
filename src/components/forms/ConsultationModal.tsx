'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { consultationSchema, type ConsultationFormData } from '@/lib/validations';
import { useUTM } from '@/hooks/useUTM';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: 'buying' | 'selling' | 'both' | 'exploring';
  leadSource?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultInterest,
  leadSource = 'hero_cta',
}: ConsultationModalProps) {
  const utm = useUTM();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  useEffect(() => {
    if (defaultInterest) {
      setValue('interest', defaultInterest);
    }
  }, [defaultInterest, setValue]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError('');
      reset();
    }
  }, [isOpen, reset]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const onSubmit = async (data: ConsultationFormData) => {
    setError('');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          leadSource,
          ...utm,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call Kevin directly.');
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-stone bg-white rounded text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors";
  const labelClasses = "block text-sm font-semibold text-navy mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="relative bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-gold mx-auto mb-4" size={48} />
                <h3 className="font-heading text-2xl text-navy mb-2">You&apos;re All Set!</h3>
                <p className="text-charcoal/70 mb-6">Kevin will reach out within 24 hours to schedule your consultation.</p>
                <Button variant="outline" onClick={onClose}>Close</Button>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl text-navy mb-2">Schedule a Consultation</h2>
                <p className="text-charcoal/60 text-sm mb-6">
                  Pick a time on Kevin&apos;s calendar below, or send a note instead.
                </p>

                {/* Embedded booking calendar (CoreLinq) */}
                <div className="mb-6 -mx-2 sm:mx-0 border border-stone rounded overflow-hidden bg-white">
                  <iframe
                    src="https://corelinq-platform.vercel.app/book/kevin-nydam/consultation"
                    title="Book a 30-minute consultation with Kevin Nydam"
                    className="w-full"
                    style={{ height: 720, border: 0 }}
                    loading="lazy"
                  />
                </div>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-wide">
                    <span className="bg-white px-3 text-charcoal/50">or send a note instead</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                  <div>
                    <label className={labelClasses}>Anything else Kevin should know?</label>
                    <textarea {...register('message')} rows={3} className={inputClasses} />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Request Consultation'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
