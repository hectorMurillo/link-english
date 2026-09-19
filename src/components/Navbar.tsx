import React, { useState } from 'react';
import { Menu, X, MessageSquare, Sparkles, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isEn } = useLanguage();
  const tNav = TRANSLATIONS[language].nav;

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: tNav.courses, href: '#cursos' },
    { label: tNav.convenios, href: '#convenios' },
    { label: tNav.pearson, href: '#pearson' },
    { label: tNav.awards, href: '#awards' },
    { label: tNav.teachers, href: '#maestros' },
    { label: tNav.faq, href: '#faq' },
  ];

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <img
              src={SITE_CONFIG.logoUrl}
              alt="Link English"
              className="h-9 w-auto object-contain rounded-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Link English
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white px-3.5 py-1.5 text-sm font-medium rounded-full hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions & Subtle Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Subtle ES / EN Toggle */}
            <div
              className="inline-flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5 text-xs font-semibold"
              aria-label="Seleccionar idioma / Select language"
            >
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  !isEn
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  isEn
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Assessment CTA */}
            <a
              href="#datos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-blue-500/25 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{tNav.assessmentBtn}</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center sm:hidden gap-2">
            {/* Mobile Subtle Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(isEn ? 'es' : 'en')}
              className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-300 flex items-center gap-1"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{isEn ? 'EN' : 'ES'}</span>
            </button>

            <a
              href="#datos"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              {isEn ? 'Assess' : 'Diagnóstico'}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/80 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-2 backdrop-blur-2xl">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block text-slate-200 hover:text-white hover:bg-slate-800/60 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{isEn ? 'Language:' : 'Idioma:'}</span>
            </span>
            <div className="inline-flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full ${
                  !isEn ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full ${
                  isEn ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#datos"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{tNav.assessmentBtn}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
