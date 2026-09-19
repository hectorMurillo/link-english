import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Testimonials: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].testimonials;

  const testimonialsList = [
    {
      id: '1',
      name: 'Silvia Burboa',
      city: 'Culiacán, Sin.',
      quote: isEn
        ? 'Excellent English school 👌🏻 I completely recommend it for anyone working.'
        : 'Excelente escuela de inglés 👌🏻 recomiendo completamente.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    },
    {
      id: '2',
      name: 'Noelia Cortes',
      city: 'Culiacán, Sin.',
      quote: isEn
        ? 'Great school! They use very dynamic, easy-to-understand learning methods and are always ready to solve questions.'
        : 'Muy buena escuela, usan métodos de aprendizaje muy dinámicos y fácil de entender y siempre dispuestos a responder dudas.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    },
  ];

  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 shadow-xl flex flex-col justify-between relative hover:border-blue-500/40 transition-colors"
            >
              <MessageSquareQuote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-amber-300 font-semibold ml-2">5.0 / 5.0</span>
                </div>

                <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50 shadow-md"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-base">{item.name}</span>
                    <span title={isEn ? 'Verified Student' : 'Alumno Verificado'} className="inline-flex">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
