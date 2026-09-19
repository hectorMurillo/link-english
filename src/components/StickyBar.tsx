import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id="top-promo-bar"
      className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 shadow-md border-b border-blue-500/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
          </span>
          <span className="inline-flex items-center gap-1 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 inline shrink-0" />
            <span>
              <strong>¡Felicidades!</strong> Ya tienes una{' '}
              <span className="underline decoration-yellow-400 decoration-2 underline-offset-2 font-semibold">
                entrevista GRATUITA
              </span>{' '}
              y diagnóstico de nivel
            </span>
          </span>
          <a
            href="#datos"
            className="hidden md:inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 transition-colors px-2.5 py-0.5 rounded-full font-medium text-xs ml-2 text-white border border-white/20"
          >
            Aprovechar hoy <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar aviso"
          className="text-white/70 hover:text-white p-1 rounded transition-colors shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
