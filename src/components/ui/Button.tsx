'use client';

import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-heading font-semibold tracking-wider uppercase transition-all duration-300',
          // Sizes
          size === 'sm' && 'px-5 py-2.5 text-xs',
          size === 'md' && 'px-8 py-3.5 text-sm',
          size === 'lg' && 'px-10 py-4 text-base',
          // Variants
          variant === 'primary' &&
            'bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg',
          variant === 'secondary' &&
            'bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg',
          variant === 'outline' &&
            'border-2 border-gold text-gold hover:bg-gold hover:text-white',
          variant === 'ghost' &&
            'text-navy hover:text-gold hover:bg-navy/5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
