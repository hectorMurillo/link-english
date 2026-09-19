import React, { useState, useMemo } from 'react';
import { Users, GraduationCap, Briefcase, Sparkles, Search, CheckCircle2 } from 'lucide-react';
import { TEACHERS_DATA } from '../data/teachersData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

type FilterCategory = 'all' | 'directiva' | 'docente';

export const Teachers: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].teachers;

  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = useMemo(() => {
    return TEACHERS_DATA.filter((teacher) => {
      const matchesCategory =
        activeCategory === 'all' || teacher.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        teacher.name.toLowerCase().includes(q) ||
        teacher.tag.toLowerCase().includes(q) ||
        teacher.academic.toLowerCase().includes(q) ||
        teacher.experience.toLowerCase().includes(q) ||
        teacher.quote.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="maestros" className="py-20 lg:py-28 bg-slate-900/70 text-slate-100 relative border-t border-slate-800">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-blue-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.allTab} ({TEACHERS_DATA.length})
            </button>

            <button
              onClick={() => setActiveCategory('directiva')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'directiva'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.directivaTab} (3)
            </button>

            <button
              onClick={() => setActiveCategory('docente')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'docente'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.docentesTab} (11)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search teacher, degree...' : 'Buscar maestro, carrera...'}
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group bg-slate-950/80 rounded-3xl border border-slate-800/90 hover:border-blue-500/40 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div>
                {/* Header: Photo and Tag */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-500 shadow-md">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover rounded-full bg-slate-900"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300';
                        }}
                      />
                    </div>
                    <span
                      title={t.verifiedTag}
                      className="absolute bottom-0 right-0 p-1 bg-blue-600 text-white rounded-full shadow-md border-2 border-slate-950"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-[11px] font-extrabold tracking-wider uppercase mb-1">
                      {isEn ? teacher.tagEn : teacher.tag}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate" title={teacher.name}>
                      {teacher.name}
                    </h3>

                    {teacher.role && (
                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                        {isEn ? teacher.roleEn : teacher.role}
                      </p>
                    )}
                  </div>
                </div>

                {/* Academic Background */}
                <div className="mb-4 bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-blue-400 text-[11px] font-extrabold tracking-wider uppercase mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{t.academicLabel}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {isEn ? teacher.academicEn : teacher.academic}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-5 bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-blue-400 text-[11px] font-extrabold tracking-wider uppercase mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{t.experienceLabel}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {isEn ? teacher.experienceEn : teacher.experience}
                  </p>
                </div>
              </div>

              {/* Authentic Handwritten Quote */}
              <div className="pt-4 border-t border-slate-800/90 mt-auto">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <p className="font-['Dancing_Script',cursive] text-lg sm:text-xl text-amber-200/95 leading-snug">
                    {isEn ? teacher.quoteEn : teacher.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12 bg-slate-950/60 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              {isEn
                ? 'No teachers matched your search criteria.'
                : 'No se encontraron maestros con ese criterio de búsqueda.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline font-semibold"
            >
              {isEn ? 'Reset filters' : 'Restablecer filtros'}
            </button>
          </div>
        )}

        {/* Bottom Banner Call To Action */}
        <div className="mt-14 sm:mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t.ctaTitle}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {t.ctaDesc}
            </p>
          </div>

          <a
            href="#datos"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            {t.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
};
