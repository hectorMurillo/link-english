import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Courses: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].courses;

  const coursesList = [
    {
      id: 'enfoque-profesional',
      title: isEn ? 'Professional & 1-on-1 Focus' : 'Enfoque Profesional e Individual',
      badge: isEn ? '100% Personalized' : '100% Personalizado',
      description: isEn
        ? 'Our team consists of certified experts committed to effective English instruction tailored to your pace, industry, and schedule.'
        : 'Nuestro equipo está compuesto por expertos comprometidos con la enseñanza eficaz del idioma inglés adaptada a tu ritmo, objetivos y agenda.',
      image:
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=643,fit=crop/YZ9joPGJwyT20D5J/blog1-2-mP4MbBX0gLSvK4zn.jpg',
      features: isEn
        ? [
            'Job interview simulations and executive roleplay',
            'Corporate decks, pitches, and business emails',
            'Specialized technical vocabulary for your sector',
            'Flexible 1-on-1 schedule with dedicated instructors',
          ]
        : [
            'Entrevistas de trabajo en inglés y roleplay',
            'Presentaciones corporativas y reportes',
            'Vocabulario técnico de tu industria',
            'Horarios flexibles 1 a 1 con docentes dedicados',
          ],
      idealFor: isEn
        ? 'Professionals, executives, and leaders with tight schedules'
        : 'Profesionales, ejecutivos y personas con horarios específicos',
    },
    {
      id: 'enfoque-grupal',
      title: isEn ? 'Group & Corporate Team Programs' : 'Enfoques Grupales y de Equipo',
      badge: isEn ? 'Collaborative & Dynamic' : 'Colaborativo y Dinámico',
      description: isEn
        ? 'Group cohort trainings organized by common interests and proficiency levels, maximizing interactive roleplay and dialogue.'
        : 'Capacitaciones grupales formando equipos del mismo interés y nivel para aprovechar al máximo las dinámicas y la interacción.',
      image:
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=643,fit=crop/YZ9joPGJwyT20D5J/blog3-mxBXeNVkXlSePGw1.jpg',
      features: isEn
        ? [
            'Active teamwork conversations and case debates',
            'Solving real-world workplace business scenarios',
            'Small cohorts sorted by placement diagnostics',
            'Preferential rates and highly participative sessions',
          ]
        : [
            'Conversación activa y debate en equipo',
            'Resolución de situaciones laborales reales',
            'Grupos reducidos por nivel evaluado',
            'Costos preferenciales y dinámica participativa',
          ],
      idealFor: isEn
        ? 'Company teams, colleagues, and students eager to practice active speaking'
        : 'Colaboradores de empresas y personas que buscan practicar conversación',
    },
  ];

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Big Core Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {coursesList.map((course) => (
            <div
              key={course.id}
              className="group bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                    {course.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="mb-6 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
                    <span className="font-semibold text-blue-300">
                      {isEn ? 'Ideal for: ' : 'Ideal para: '}
                    </span>
                    {course.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href="#datos"
                    className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 group-hover:bg-blue-600"
                  >
                    <span>{isEn ? 'Enroll or get details' : 'Inscribirme o pedir informes'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              {isEn ? 'Not sure about your current English level?' : '¿No estás seguro de cuál es tu nivel?'}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {isEn
                ? 'We conduct a free diagnostic interview to place you in the exact course and schedule that will best accelerate your goals.'
                : 'Realizamos una entrevista diagnóstica sin ningún costo para ubicarte exactamente en el grupo o plan individual que mejor impulsará tus metas.'}
            </p>
          </div>
          <a
            href="#datos"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md text-sm"
          >
            {isEn ? 'Book Free Diagnostic' : 'Agendar entrevista gratis'}
          </a>
        </div>
      </div>
    </section>
  );
};
