import React from 'react';
import { Award, BookCheck, Globe2, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const PearsonBacking: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].pearson;

  const highlights = isEn
    ? [
        'Curricula and materials aligned with Pearson global framework',
        'Global Scale of English (GSE) measuring verifiable milestone progress',
        'Comprehensive training targeting business communicative competencies',
        'International academic assurance for your résumé and career path',
      ]
    : [
        'Materiales y progresiones pedagógicas alineadas al marco global de Pearson',
        'Escala Global de Inglés (GSE) para medir avances reales y medibles',
        'Preparación integral con enfoque en competencias comunicativas de negocios',
        'Garantía de calidad académica internacional para tu currículum',
      ];

  return (
    <section
      id="pearson"
      className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 relative overflow-hidden border-t border-b border-slate-800"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/40 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Award className="w-4 h-4 text-blue-400" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {t.title}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {isEn ? (
                  <>
                    We base our syllabus and placement assessments on global standards from{' '}
                    <a
                      href={SITE_CONFIG.pearsonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold inline-flex items-center gap-1"
                    >
                      Pearson (pearson.com) <ExternalLink className="w-3.5 h-3.5" />
                    </a>{' '}
                    and the Global Scale of English (GSE), ensuring high-value communicative skills for your career.
                  </>
                ) : (
                  <>
                    Basamos nuestros programas y evaluaciones en los estándares globales de{' '}
                    <a
                      href={SITE_CONFIG.pearsonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold inline-flex items-center gap-1"
                    >
                      Pearson (pearson.com) <ExternalLink className="w-3.5 h-3.5" />
                    </a>{' '}
                    y la Escala Global de Inglés (GSE), garantizando habilidades comunicativas de alto valor curricular.
                  </>
                )}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#datos"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shadow-md"
                >
                  {t.cta1}
                </a>
                <a
                  href={SITE_CONFIG.pearsonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.cta2}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border border-slate-700 p-8 rounded-2xl shadow-xl text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
                  <Globe2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                    {isEn ? 'Global Quality Benchmark' : 'Estándar de Calidad Global'}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t.gseTitle}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.gseDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 grid grid-cols-2 gap-4 text-left">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mb-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{t.statProgression}</span>
                    </div>
                    <div className="text-[11px] text-slate-300">{t.statProgressionDesc}</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                      <BookCheck className="w-3.5 h-3.5" />
                      <span>{t.statCertification}</span>
                    </div>
                    <div className="text-[11px] text-slate-300">{t.statCertificationDesc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
