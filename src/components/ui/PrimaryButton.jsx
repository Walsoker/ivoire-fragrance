import React from 'react';

/**
 * Bouton Principal d'Ivoire.Fragrance
 *
 * Variantes :
 * - 'black' : Fond noir profond `#191714`, texte clair, survol or champagne `#B88635`
 * - 'gold'  : Fond or champagne `#B88635`, texte clair, survol noir profond `#191714`
 *
 * États gérés : repos, hover, focus clavier accessible (visible ring), active (press 1px), disabled.
 */
export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  variant = 'black',
  disabled = false,
  className = '',
  as: Component = 'button',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium px-5 sm:px-8 py-3 sm:py-4 cursor-pointer select-none transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635] focus-visible:ring-offset-2 active:scale-[0.97] active:duration-75 disabled:opacity-45 disabled:pointer-events-none disabled:cursor-not-allowed';

  const variantStyles = {
    black:
      'bg-[#191714] text-[#FDFBF7] border border-[#191714] hover:bg-[#B88635] hover:border-[#B88635] hover:text-[#FFFFFF]',
    gold:
      'bg-[#B88635] text-[#FFFFFF] border border-[#B88635] hover:bg-[#191714] hover:border-[#191714] hover:text-[#FDFBF7]',
  };

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.black} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </Component>
  );
}

