import React from 'react';
import { Trophy, Gift, Award, Sparkles, CheckCircle2, Coins, ArrowRight } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { AwardsSection } from '../components/AwardsSection';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const AwardsView: React.FC = () => {
  const { isEn } = useLanguage();

  const rewardSteps = [
    {
      step: '01',
      title: isEn ? 'Attend & Participate' : 'Asiste y Participa',
      desc: isEn
        ? 'Earn Link Dollars by answering questions in class, arriving on time, and leading conversation prompts.'
        : 'Acumula Link Dollars respondiendo dinámicas en clase, con puntualidad y liderando conversaciones.',
    },
    {
      step: '02',
      title: isEn ? 'Join Speaking Clubs' : 'Speaking Clubs y Retos',
      desc: isEn
        ? 'Get bonus points during weekly Friday Speaking Clubs and themed language challenges.'
        : 'Obtén bonificaciones especiales en los clubes de conversación de los viernes y retos temáticos.',
    },
    {
      step: '03',
      title: isEn ? 'Redeem for Real Prizes' : 'Canjea por Premios Reales',
      desc: isEn
        ? 'Exchange your points for stationery, electronics, board games, discounts, or Amazon gift cards.'
        : 'Canjea tu saldo acumulado por artículos de papelería, audífonos, juegos de mesa o tarjetas de regalo.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Rewards & Excellence' : 'Rewards y Excelencia'}
        badgeIcon={<Trophy className="w-3.5 h-3.5" />}
        title={isEn ? 'Link English Rewards & International Awards' : 'Link English Rewards y Reconocimientos'}
        subtitle={isEn
          ? 'Turn your class engagement into real rewards with Link Dollars, and discover our track record of educational excellence.'
          : 'Convierte tu participación y constancia en premios reales con Link Dollars y conoce nuestros galardones de calidad.'}
      />

      {/* Main Awards & Rewards Catalog Component */}
      <AwardsSection />

      {/* How It Works & Educational Gamification */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Coins className="w-3.5 h-3.5" />
              <span>{isEn ? 'Real Gamification' : 'Gamificación Educativa'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'How to earn and redeem your Link Dollars' : 'Cómo ganar y canjear tus Link Dollars'}
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              {isEn
                ? 'Learning English becomes exciting and engaging when every milestone brings tangible rewards.'
                : 'Aprender inglés es divertido y motivante cuando cada logro y participación se recompensa de forma real.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {rewardSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-amber-400/80 mb-4 block font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Quality Recognition Highlight */}
          <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 border border-amber-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  <Award className="w-4 h-4" />
                  <span>{isEn ? 'Institutional Quality' : 'Calidad Institucional'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {isEn
                    ? 'Recognized for Educational Excellence'
                    : 'Compromiso con la Excelencia Académica y Pedagógica'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {isEn
                    ? 'Link English adheres to strict educational standards, certified faculty development, and constant technological innovation in adult English instruction.'
                    : 'En Link English mantenemos un estándar docente certificado, capacitación continua para nuestros profesores y metodologías modernas para garantizar el éxito de cada alumno.'}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
                <Trophy className="w-12 h-12 text-amber-400 mb-3" />
                <span className="text-lg font-bold text-white">Link English Rewards</span>
                <span className="text-xs text-amber-300 mt-1">100% Canjeable en Cada Curso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <LeadForm />
    </div>
  );
};
