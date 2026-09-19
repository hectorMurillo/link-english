import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
            <span>Casos de Éxito</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Opiniones de Clientes
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Nuestros estudiantes comparten sus experiencias positivas con Link English y cómo el
            método dinámico les ha ayudado en su entorno laboral.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 shadow-xl flex flex-col justify-between relative hover:border-blue-500/40 transition-colors"
            >
              <MessageSquareQuote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-amber-300 font-semibold ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50 shadow-md"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-base">{t.name}</span>
                    <span title="Alumno Verificado" className="inline-flex">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
