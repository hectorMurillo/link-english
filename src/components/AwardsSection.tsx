import React, { useState, useMemo } from 'react';
import { Link as LinkIcon, Sparkles, MessageCircle, X, CheckCircle } from 'lucide-react';
import { AWARDS_DATA } from '../data/awardsData';
import { AwardCategory, AwardItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { SITE_CONFIG } from '../data/siteData';

const CATEGORIES: AwardCategory[] = [
  'all',
  'stationery',
  'technology',
  'boardgames',
  'discounts',
  'gift-cards',
];

export const AwardsSection: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].awards;

  const [activeCategory, setActiveCategory] = useState<AwardCategory>('all');
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const filteredAwards = useMemo(() => {
    if (activeCategory === 'all') return AWARDS_DATA;
    return AWARDS_DATA.filter((award) => award.category === activeCategory);
  }, [activeCategory]);

  const handleBuyClick = (award: AwardItem) => {
    setSelectedAward(award);
  };

  const getWaMessage = (award: AwardItem) => {
    const itemName = isEn ? award.nameEn : award.name;
    return isEn
      ? `Hello! I would like to redeem my Link Dollars for: ${itemName} (${award.cost} Link Dollars).`
      : `¡Hola! Me gustaría canjear mis Link Dollars por: ${itemName} (${award.cost} Link Dollars).`;
  };

  return (
    <section
      id="awards"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 relative overflow-hidden border-t border-slate-800"
    >
      {/* Subtle watermark dollar bill background aesthetic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-around font-black text-9xl text-white">
        <span>$1</span>
        <span>LINK</span>
        <span>$1</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header matching the reference screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <LinkIcon className="w-5 h-5 -rotate-45" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.title}
            </h2>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">
            {isEn ? (
              <>
                Turn your <span className="text-blue-400">Link Dollars</span> into real rewards.
              </>
            ) : (
              <>
                Convierte tus <span className="text-blue-400">Link Dollars</span> en premios reales.
              </>
            )}
          </h3>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Filter Tabs matching the screenshot pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const label = t.categories[cat];

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-12">
          {filteredAwards.map((item) => {
            const title = isEn ? item.nameEn : item.name;

            return (
              <div
                key={item.id}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-blue-500/10"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded-md">
                      {isEn ? item.badgeEn : item.badge}
                    </span>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-3.5 sm:p-4 text-center flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm mb-1 leading-snug line-clamp-2">
                      {title}
                    </h4>
                    <p className="text-blue-400 font-extrabold text-xs sm:text-sm mb-3">
                      {item.cost.toLocaleString()} Link Dollars
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBuyClick(item)}
                    className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs py-2 px-3 rounded-xl transition-colors shadow-sm"
                  >
                    {t.buyBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner matching the bottom callout of the reference screenshot */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-800/60 to-slate-900/80 border border-blue-500/30 p-5 sm:p-6 text-center backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-1 text-blue-400 font-bold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span>{t.calloutTitle}</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm">
            {isEn ? (
              <>
                Participate in class and complete our <span className="text-amber-400 font-semibold">challenges</span>!
              </>
            ) : (
              <>
                ¡Participa activamente en clase y completa nuestros <span className="text-amber-400 font-semibold">retos</span>!
              </>
            )}
          </p>
        </div>
      </div>

      {/* Redemption / Buy Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-left">
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">
                  {t.redeemedTitle}
                </h4>
                <p className="text-xs text-blue-400 font-semibold">
                  {isEn ? selectedAward.nameEn : selectedAward.name} • {selectedAward.cost} Link Dollars
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.redeemedDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
                  getWaMessage(selectedAward)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedAward(null)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.openWhatsApp}</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white rounded-xl border border-slate-700"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
