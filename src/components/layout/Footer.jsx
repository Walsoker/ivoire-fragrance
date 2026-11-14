import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_PHONE_NUMBER } from '../../utils/whatsapp';

/**
 * Icône TikTok stylisée respectant le design system (fine, épurée, monochrome/dorée)
 */
function TikTokIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

/**
 * Icône Instagram fine et élégante
 */
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Icône Facebook fine et élégante
 */
function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/**
 * Footer d'Ivoire.Fragrance
 */
export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ivoire.fragrance?_r=1&_t=ZS-9BNo0fnNYTx',
      icon: TikTokIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ivoire_fragrance?vrfl=MWxjbHY0dDhucXU1dQ%3D%3D&utm_source=qr',
      icon: InstagramIcon,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1QP9yc8YkV/?mibextid=wwXIfr',
      icon: FacebookIcon,
    },
  ];

  return (
    <footer className="bg-[#171512] text-[#FDFBF7] pt-20 pb-12 border-t border-[#191714]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#746B60]/20">
          
          {/* Colonne 1 : Identité & Philosophie */}
          <div className="md:col-span-5 space-y-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
            >
              <img
                src="/images/logo/logo_ivoirefragrance.jpeg"
                alt="Ivoire.Fragrance"
                className="h-10 w-auto object-contain rounded-sm border border-[#E7DED0]/20"
              />
              <span className="font-serif text-2xl tracking-wide font-medium text-[#FDFBF7]">
                Ivoire<span className="text-[#B88635]">.</span>Fragrance
              </span>
            </Link>
            <p className="text-[#A8A096] text-sm leading-relaxed max-w-sm font-light">
              Maison de haute parfumerie présentant les univers signatures de Fragrance World (Oud Nuclear), Born in France (Iris Oud) et Jacques Yves (Imaginari).
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#D7B879]">
                Abidjan — Côte d'Ivoire
              </span>
            </div>

            {/* Réseaux Sociaux Officiels */}
            <div className="pt-4 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#746B60] block font-medium">
                Nous suivre
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#746B60]/40 flex items-center justify-center text-[#E7DED0] hover:text-[#B88635] hover:border-[#B88635] hover:bg-[#1F1C18] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
                      aria-label={`Suivre Ivoire.Fragrance sur ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation secondaire */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D7B879] font-medium block">
              Navigation
            </span>
            <ul className="space-y-3 text-sm font-light text-[#E7DED0]">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#B88635] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/marques"
                  className="hover:text-[#B88635] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
                >
                  Nos Maisons & Marques
                </Link>
              </li>
              <li>
                <Link
                  to="/notre-histoire"
                  className="hover:text-[#B88635] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
                >
                  Notre démarche & histoire
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Commande WhatsApp */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D7B879] font-medium block">
              Commandes & Conseil
            </span>
            <p className="text-[#A8A096] text-sm leading-relaxed font-light">
              Chaque parfum est réservé et préparé sur mesure. Les commandes et demandes de conseils sont finalisées directement avec nos conseillers.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[#746B60]/40 px-5 py-3 hover:border-[#B88635] hover:bg-[#191714] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B88635]"
              >
                <MessageCircle size={16} strokeWidth={1.5} className="text-[#25D366]" />
                <span className="text-xs uppercase tracking-[0.15em] text-[#FDFBF7] group-hover:text-[#D7B879] transition-colors">
                  +225 07 49 41 88 73
                </span>
                <ArrowUpRight size={14} className="text-[#746B60] group-hover:text-[#D7B879] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne inférieure : Copyright & Mentions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#746B60] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Ivoire.Fragrance. Tous droits réservés.
          </p>
          <p className="tracking-wide text-[11px]">
            Conçu pour une expérience de parfumerie éditoriale et exclusive.
          </p>
        </div>
      </div>
    </footer>
  );
}
