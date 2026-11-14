import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * EditorialLink d'Ivoire.Fragrance
 *
 * Lien éditorial textuel avec soulignement discret et flèche directionnelle fine.
 * États : repos, hover (la flèche glisse de 2px en diagonale, le soulignement s'anime),
 * focus clavier accessible, active.
 */
export default function EditorialLink({
  children,
  to,
  href,
  className = '',
  showArrow = true,
  disabled = false,
  onClick,
  ...props
}) {
  const isExternal = Boolean(href);
  const Component = isExternal ? 'a' : to ? Link : 'button';

  const baseStyles =
    'group relative inline-flex items-center gap-1.5 text-xs md:text-sm font-sans tracking-[0.15em] uppercase text-[#191714] font-medium cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635] focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed select-none';

  return (
    <Component
      to={to}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      <span className="relative pb-0.5">
        {children}
        {/* Soulignement discret et élégant */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B88635] origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0" />
      </span>
      {showArrow && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="text-[#B88635] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Component>
  );
}

