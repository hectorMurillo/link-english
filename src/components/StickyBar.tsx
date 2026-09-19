import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].sticky;

  if (!isVisible) return null;

  return (
    <div
      id="top-promo-bar"
      className="bg-blue-900/90 border-b border-blue-700/50 text-slate-100 text-xs py-1.5 px-3 z-50 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 text-center sm:text-left">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{t.message}</span>
          <a
            href="#datos"
            className="hidden sm:inline-flex items-center gap-0.5 text-blue-300 hover:text-white font-medium ml-1 underline underline-offset-2"
          >
            {t.cta} <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar aviso"
          className="text-slate-400 hover:text-white p-0.5 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
