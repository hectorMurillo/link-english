import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppBubble: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { isEn } = useLanguage();

  const waUrl = `https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
    isEn
      ? 'Hello, I am interested in Link English classes with Pearson backing. Can you give me more information?'
      : SITE_CONFIG.defaultWhatsAppMessage
  )}`;

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Optional Help Balloon */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-slate-700/80 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl backdrop-blur-md">
          <span>{isEn ? 'Questions about classes? Message us!' : '¿Dudas sobre los cursos? ¡Escríbenos!'}</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label={isEn ? 'Close WhatsApp tip' : 'Cerrar sugerencia de WhatsApp'}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isEn ? 'Chat with Link English on WhatsApp' : 'Chatear con Link English por WhatsApp'}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-500 group-hover:rotate-6 transition-transform" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-green-300 border-2 border-slate-900" />
      </a>
    </aside>
  );
};
