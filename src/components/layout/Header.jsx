import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE_NUMBER } from '../../utils/whatsapp';

/**
 * Header d'Ivoire.Fragrance
 *
 * Éléments :
 * - Logo officiel imagé à gauche (/images/logo/logo_ivoirefragrance.jpeg)
 * - Liens de navigation centrés (Accueil, Maisons & Marques, Notre histoire)
 * - Bouton WhatsApp direct et déclencheur menu mobile à droite
 * - Menu mobile plein écran compact et fluide
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Verrouiller le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Maisons', path: '/marques' },
    { name: 'Notre histoire', path: '/notre-histoire' },
  ];

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    'Bonjour Ivoire.Fragrance, je souhaite avoir des renseignements sur vos collections de parfums.'
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F1E7]/95 backdrop-blur-md border-b border-[#E7DED0] py-3 shadow-sm'
            : 'bg-[#F7F1E7]/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo gauche avec image officielle */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
            aria-label="Ivoire.Fragrance Accueil"
          >
            <img
              src="/images/logo/logo_ivoirefragrance.jpeg"
              alt="Ivoire.Fragrance"
              className="h-10 sm:h-12 w-auto object-contain rounded-sm border border-[#E7DED0]/60 shadow-xs group-hover:scale-102 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.06em] font-medium text-[#191714] transition-colors group-hover:text-[#B88635]">
                Ivoire<span className="text-[#B88635]">.</span>Fragrance
              </span>
              <span className="font-sans text-[8.5px] uppercase tracking-[0.28em] text-[#746B60] -mt-0.5">
                Haute Parfumerie
              </span>
            </div>
          </Link>

          {/* Navigation centrale desktop */}
          <nav
            className="hidden md:flex items-center space-x-10"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-300 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635] ${
                    isActive
                      ? 'text-[#191714] font-medium'
                      : 'text-[#746B60] hover:text-[#191714]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B88635]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action droite desktop : Contact WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#E7DED0] bg-[#FDFBF7] hover:bg-[#191714] hover:text-[#FFFFFF] hover:border-[#191714] px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] text-[#191714] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635]"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle size={15} strokeWidth={1.75} className="text-[#B88635]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Commandes Mobile : WhatsApp + Toggle Menu */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#191714] hover:text-[#B88635] border border-[#E7DED0] bg-[#FDFBF7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={1.75} className="text-[#B88635]" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#191714] border border-[#E7DED0] bg-[#FDFBF7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88635]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran compact & sobre */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-30 bg-[#F7F1E7] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-200"
        >
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#746B60] block border-b border-[#E7DED0] pb-3">
              Navigation
            </span>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-serif text-3xl tracking-wide transition-colors ${
                      isActive ? 'text-[#B88635] italic font-semibold' : 'text-[#191714]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E7DED0] space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#746B60] block">
              Commande & Conseil direct
            </span>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#191714] text-[#FDFBF7] py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-[#B88635]"
            >
              <MessageCircle size={16} strokeWidth={1.75} className="text-[#D7B879]" />
              <span>Contacter sur WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-[#746B60]">
              +225 07 49 41 88 73
            </p>
          </div>
        </div>
      )}
    </>
  );
}
