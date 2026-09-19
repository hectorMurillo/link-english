import React from 'react';
import { Users, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const About: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].about;

  const statsList = [
    {
      value: '150+',
      label: isEn ? 'Active Students' : 'Alumnos activos',
      description: isEn ? 'Transforming workplace opportunities' : 'Transformando sus oportunidades laborales',
    },
    {
      value: '5+',
      label: isEn ? 'Years Experience' : 'Años de experiencia',
      description: isEn ? 'Training professionals and teams' : 'Capacitando a profesionales y empresas',
    },
    {
      value: '100%',
      label: isEn ? 'Practical Focus' : 'Enfoque práctico',
      description: isEn ? 'Real business situations & dialogues' : 'Orientado a conversaciones y negocios reales',
    },
    {
      value: 'Pearson',
      label: isEn ? 'Academic Backing' : 'Respaldo Académico',
      description: isEn ? 'Global standards via pearson.com' : 'Metodología y estándares pearson.com',
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {isEn ? (
                <>
                  Learn English in an{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    engaging, accessible way.
                  </span>
                </>
              ) : (
                <>
                  Aprende inglés de forma{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    divertida y a tu alcance.
                  </span>
                </>
              )}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.descPart1}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  {t.f1Title}: {t.f1Desc}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  {t.f2Title}: {t.f2Desc}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  {t.f3Title}: {t.f3Desc}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  {t.f4Title}: {t.f4Desc}
                </span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statsList.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-4 text-center hover:border-blue-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-70" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=763,fit=crop/YZ9joPGJwyT20D5J/1-1-YbN4vwOn0Oi61eeN.webp"
                  alt="Link English student learning"
                  className="w-full h-auto object-cover object-center aspect-square transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white leading-none">150+ {isEn ? 'Students' : 'Alumnos'}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        {isEn ? 'Active workforce community' : 'Actualmente en formación'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      {isEn ? 'Active Community' : 'Comunidad Activa'}
                    </span>
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
