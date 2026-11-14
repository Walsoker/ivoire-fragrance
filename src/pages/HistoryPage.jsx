import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { EditorialLink } from '../components/ui';

/**
 * Page Notre Histoire — /notre-histoire
 * 
 * Conforme au cahier des charges (Section 4.5) :
 * - Présenter la démarche, les valeurs et l'identité de la boutique
 * - Ne pas inventer de date de création, d'origine ou de fausse promesse commerciale
 */
export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#191714] flex flex-col selection:bg-[#B88635] selection:text-white">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* En-tête éditorial */}
          <div className="space-y-6 pb-16 border-b border-[#E7DED0]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B88635]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#746B60] font-medium">
                Démarche & Philosophie
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#191714] font-normal leading-tight">
              L'Élégance à fleur de peau
            </h1>
            <p className="text-[#746B60] text-lg font-light leading-relaxed">
              Ivoire.Fragrance est née d'une passion pour les sillages d’exception, où chaque note raconte une émotion et affirme une présence.
            </p>
          </div>

          {/* Corps de l'histoire éditoriale */}
          <div className="py-16 space-y-12">
            
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#191714]">
                Une sélection guidée par l'exigence
              </h2>
              <p className="text-[#746B60] leading-relaxed font-light">
                Plutôt que d'accumuler des centaines de références hétérogènes, Ivoire.Fragrance fait le choix délibéré d'une sélection resserrée autour de maisons prestigieuses : <strong>Oud Nuclear</strong>, <strong>Iris Oud</strong> et <strong>Imaginari</strong>. Chaque parfum retenu fait l'objet d'une attention rigoureuse quant à sa qualité olfactive, sa persistance et l’équilibre de ses accords.
              </p>
            </section>

            <section className="space-y-4 border-t border-[#E7DED0] pt-12">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#191714]">
                L'art de la relation directe
              </h2>
              <p className="text-[#746B60] leading-relaxed font-light">
                Le choix d'un parfum est un acte intime. C’est pourquoi notre expérience privilégie l’échange direct via WhatsApp, permettant à chaque amateur de fragrance de dialoguer avec nos conseillers, d’obtenir des recommandations sur mesure et de finaliser sa commande en toute sérénité.
              </p>
            </section>

            <section className="space-y-4 border-t border-[#E7DED0] pt-12">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#191714]">
                Authenticité et respect du sillage
              </h2>
              <p className="text-[#746B60] leading-relaxed font-light">
                Tous nos flacons sont rigoureusement conditionnés et scellés pour préserver intacte la pureté des huiles et des essences. De la préparation de votre commande jusqu’à sa remise en main propre, chaque étape est pensée pour faire honneur à l'univers de la haute parfumerie.
              </p>
            </section>

            {/* Bloc de contact direct */}
            <div className="bg-[#FDFBF7] p-8 border border-[#E7DED0] space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88635] font-semibold block">
                Contact & Échange
              </span>
              <h3 className="font-serif text-2xl text-[#191714]">
                Une question sur nos collections ?
              </h3>
              <p className="text-sm text-[#746B60] font-light">
                Nos conseillers sont disponibles pour vous répondre au <strong>+225 07 49 41 88 73</strong>.
              </p>
              <div className="pt-2">
                <EditorialLink href="https://wa.me/2250749418873">
                  Démarrer une conversation sur WhatsApp
                </EditorialLink>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

