import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigation, NavView } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

interface ViewHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  parentView?: NavView;
}

export const ViewHeader: React.FC<ViewHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
}) => {
  const { navigateTo } = useNavigation();
  const { isEn } = useLanguage();

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-b border-slate-800/80 pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
          <button
            type="button"
            onClick={() => navigateTo('inicio')}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEn ? 'Home' : 'Inicio'}</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-medium">{title}</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {badgeIcon}
          <span>{badge}</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
