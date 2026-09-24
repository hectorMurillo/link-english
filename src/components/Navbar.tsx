import React, { useState } from 'react';
import { Menu, X, MessageSquare, Sparkles, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation, NavView } from '../context/NavigationContext';
import { TRANSLATIONS } from '../data/translations';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isEn } = useLanguage();
  const { currentView, navigateTo } = useNavigation();
  const tNav = TRANSLATIONS[language].nav;

  const closeMenu = () => setMobileMenuOpen(false);

  interface NavItem {
    label: string;
    view: NavView;
    href: string;
  }

  const navLinks: NavItem[] = [
    { label: tNav.home || (isEn ? 'Home' : 'Inicio'), view: 'inicio', href: '#inicio' },
    { label: tNav.courses, view: 'cursos', href: '#cursos' },
    { label: tNav.convenios, view: 'convenios', href: '#convenios' },
    { label: tNav.pearson, view: 'pearson', href: '#pearson' },
    { label: tNav.awards, view: 'awards', href: '#awards' },
    { label: tNav.teachers, view: 'maestros', href: '#maestros' },
    { label: tNav.blog, view: 'blog', href: '#blog' },
    { label: tNav.faq, view: 'faq', href: '#faq' },
  ];

  const handleNavClick = (view: NavView, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(view);
    closeMenu();
  };

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={(e) => handleNavClick('inicio', e)}
            className="flex items-center gap-2.5 group focus:outline-none cursor-pointer text-left"
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
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  type="button"
                  onClick={(e) => handleNavClick(item.view, e)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-semibold ring-1 ring-blue-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Actions & Subtle Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            {/* Subtle ES / EN Toggle */}
            <div
              className="inline-flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5 text-xs font-semibold"
              aria-label="Seleccionar idioma / Select language"
            >
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 cursor-pointer ${
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
                className={`px-2.5 py-1 rounded-full transition-all duration-150 cursor-pointer ${
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
            <button
              type="button"
              onClick={(e) => handleNavClick('faq', e)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-blue-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{tNav.assessmentBtn}</span>
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center lg:hidden gap-2">
            {/* Mobile Subtle Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(isEn ? 'es' : 'en')}
              className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-300 flex items-center gap-1 cursor-pointer"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{isEn ? 'EN' : 'ES'}</span>
            </button>

            <button
              type="button"
              onClick={(e) => handleNavClick('faq', e)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer"
            >
              {isEn ? 'Assess' : 'Diagnóstico'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/80 focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 py-4 space-y-1.5 backdrop-blur-2xl">
          {navLinks.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                type="button"
                onClick={(e) => handleNavClick(item.view, e)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    {isEn ? 'Active' : 'Actual'}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-800 flex items-center justify-between gap-3">
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
            <button
              type="button"
              onClick={(e) => handleNavClick('faq', e)}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{tNav.assessmentBtn}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
