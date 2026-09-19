import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { SocialIcons } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const tNav = TRANSLATIONS[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: tNav.courses, href: '#cursos' },
    { label: tNav.convenios, href: '#convenios' },
    { label: tNav.pearson, href: '#pearson' },
    { label: tNav.awards, href: '#awards' },
    { label: tNav.teachers, href: '#maestros' },
    { label: tNav.blog, href: '#blog' },
    { label: tNav.faq, href: '#faq' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-950 to-[#00134d] text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Link English Logo"
                className="h-12 w-auto object-contain rounded-md bg-white p-1 border border-blue-400/40"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Link English
                </span>
                <p className="text-xs text-blue-300">
                  {isEn ? 'Dynamic Workplace English Courses' : 'Cursos de inglés laboral dinámicos'}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                {isEn ? 'Connect with us on social media' : 'Conéctate en nuestras redes'}
              </span>
              <SocialIcons iconClassName="w-5 h-5" />
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700/60 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#datos"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-block"
                >
                  {isEn ? 'Free Assessment & Placement' : 'Diagnóstico y entrevista gratis'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-700/60 pb-2">
              {t.contact}
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:+${SITE_CONFIG.phoneNumberRaw}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.phoneNumberFormatted}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors break-all"
              >
                <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-blue-900/50 text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.city}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
                  SITE_CONFIG.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-semibold py-2.5 px-4 rounded-xl border border-blue-400/30 transition-colors"
              >
                <span>{isEn ? 'Chat with an educational advisor' : 'Chatear con un asesor educativo'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Link English. {t.rights}</p>

          <div className="flex items-center gap-4">
            <span>{isEn ? 'Workplace English • Dynamic Live Classes' : 'Enfoque laboral • Clases dinámicas'}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
              aria-label={isEn ? 'Scroll to top' : 'Volver al inicio'}
            >
              <ArrowUp className="w-4 h-4" />
              <span>{isEn ? 'Top' : 'Arriba'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
