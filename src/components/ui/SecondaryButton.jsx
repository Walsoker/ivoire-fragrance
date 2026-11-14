import React from 'react';

/**
 * Bouton Secondaire d'Ivoire.Fragrance
 *
 * Variantes :
 * - 'gold'  : Bordure fine or `#B88635`, fond transparent, texte noir `#191714`
 * - 'black' : Bordure fine noire `#191714`, fond transparent, texte noir `#191714`
 *
 * États : repos, hover (fond plein et inversion du texte), focus visible clavier, active, disabled.
 */
export default function SecondaryButton({
  children,
  onClick,
  type = 'button',
  variant = 'gold',
  disabled = false,
  className = '',
  as: Component = 'button',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium px-5 sm:px-8 py-3 sm:py-4 bg-transparent cursor-pointer select-none transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635] focus-visible:ring-offset-2 active:scale-[0.97] active:duration-75 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed';

  const variantStyles = {
    gold:
      'border border-[#B88635] text-[#191714] hover:bg-[#191714] hover:border-[#191714] hover:text-[#FFFFFF]',
    black:
      'border border-[#191714] text-[#191714] hover:bg-[#191714] hover:text-[#FFFFFF]',
  };

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.gold} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </Component>
  );
}

