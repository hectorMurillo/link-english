import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../data/siteData';
import { SocialIcons } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <img
              src={SITE_CONFIG.logoUrl}
              alt="Link English Logo"
              className="h-12 w-auto object-contain rounded-md border border-slate-700/60 shadow-sm transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Graceful fallback to styled brand text if external host is slow
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Link English
              </span>
              <span className="text-[10px] tracking-wider uppercase text-blue-400 font-semibold">
                Inglés Laboral Dinámico
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800/60 transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Side: Social + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <SocialIcons className="hidden xl:flex border-r border-slate-800 pr-4 mr-1" />
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
                SITE_CONFIG.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.phoneNumberFormatted}</span>
            </a>
            <a
              href="#datos"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Diagnóstico Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href="#datos"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Diagnóstico
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-slate-200 hover:text-white hover:bg-slate-800 px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Síguenos:</span>
              <SocialIcons />
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
                SITE_CONFIG.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: {SITE_CONFIG.phoneNumberFormatted}</span>
            </a>

            <a
              href="#datos"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Diagnóstico Gratis</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
