import React from 'react';
import { BookOpen, CheckCircle2, Clock, Users, Target, Laptop, Sparkles, ArrowRight } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { Courses } from '../components/Courses';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const CoursesView: React.FC = () => {
  const { isEn } = useLanguage();

  const levels = [
    {
      code: 'A1 - A2',
      name: isEn ? 'Foundations & Basic Fluency' : 'Bases y Fluidez Básica',
      desc: isEn
        ? 'Overcome the fear of speaking, master greetings, everyday work interactions, and direct questions.'
        : 'Supera el miedo inicial a hablar, domina presentaciones personales, interacción cotidiana y preguntas directas.',
      badge: isEn ? 'Beginner' : 'Inicial',
    },
    {
      code: 'B1 - B2',
      name: isEn ? 'Intermediate Workplace English' : 'Inglés Laboral Intermedio',
      desc: isEn
        ? 'Lead meetings, craft executive emails, deliver presentations, and debate ideas with natural confidence.'
        : 'Dirige reuniones, redacta correos ejecutivos, realiza presentaciones efectivas y participa activamente en debates.',
      badge: isEn ? 'Most Popular' : 'Más Solicitado',
    },
    {
      code: 'C1',
      name: isEn ? 'Advanced Professional Fluency' : 'Dominio Profesional Avanzado',
      desc: isEn
        ? 'Master executive negotiation, cross-cultural nuance, specialized industry terminology, and high-stakes interviews.'
        : 'Negociación ejecutiva de alto impacto, modismos y lenguaje corporativo avanzado para puestos de liderazgo.',
      badge: isEn ? 'Advanced' : 'Avanzado',
    },
  ];

  const methodologyPoints = [
    {
      icon: Users,
      title: isEn ? '80% Conversational Practice' : '80% Práctica Conversacional',
      desc: isEn
        ? 'From day one, you speak English. Zero passive lectures; you simulate real work meetings and dialogues.'
        : 'Desde el primer día hablas en inglés. Simulaciones de llamadas, juntas y situaciones reales de trabajo.',
    },
    {
      icon: Clock,
      title: isEn ? 'Work-Adapted Schedules' : 'Horarios Adaptados a tu Jornada',
      desc: isEn
        ? 'Classes scheduled before, during lunch breaks, or after work hours to protect your professional routines.'
        : 'Turnos matutinos, vespertinos y sabatinos pensados especialmente para profesionales y trabajadores en activo.',
    },
    {
      icon: Laptop,
      title: isEn ? 'Live Instructors & Interactive Tools' : 'Docentes en Vivo y Material Pearson',
      desc: isEn
        ? 'Learn with certified live instructors using modern digital textbooks, audio resources, and instant feedback.'
        : 'Clases dinámicas en tiempo real con retroalimentación inmediata y recursos didácticos de vanguardia.',
    },
    {
      icon: Target,
      title: isEn ? 'Measurable Progress & Certification' : 'Avance Medible y Certificación',
      desc: isEn
        ? 'Periodic progress checkpoints backed by the Global Scale of English to ensure visible milestones.'
        : 'Evaluaciones bimestrales basadas en la Escala Global de Inglés para certificar tu avance continuo.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Academic Offer' : 'Oferta Académica'}
        badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
        title={isEn ? 'English Courses Tailored for Your Career' : 'Cursos de Inglés Adaptados a tu Carrera'}
        subtitle={isEn
          ? 'Explore our 1-on-1 professional coaching and dynamic group team programs designed to build confidence in the workplace.'
          : 'Descubre nuestros programas 1 a 1 y grupales dinámicos diseñados para desbloquear tu comunicación en el trabajo.'}
      />

      {/* Main Courses Component */}
      <Courses />

      {/* Extended Section: Methodology & Framework */}
      <section className="py-20 bg-slate-900/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Why It Works' : 'Nuestra Metodología'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'Learn English without traditional boredom' : 'Aprende inglés sin la pesadez de los métodos tradicionales'}
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              {isEn
                ? 'Our courses focus on practical communication rather than endless grammatical memorization.'
                : 'Enfoque 100% práctico y conversacional que te da seguridad para hablar en tu entorno profesional diario.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {methodologyPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Level Roadmap */}
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-extrabold text-white mb-2 text-center">
              {isEn ? 'Common European Framework (CEFR) Roadmap' : 'Ruta de Niveles MCER'}
            </h3>
            <p className="text-slate-400 text-center text-sm max-w-2xl mx-auto mb-10">
              {isEn
                ? 'We place you in the exact level you need through our diagnostic assessment.'
                : 'Te ubicamos en el nivel preciso a través de nuestra entrevista diagnóstica sin costo.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levels.map((lvl, index) => (
                <div
                  key={index}
                  className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-blue-400">{lvl.code}</span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {lvl.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{lvl.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{lvl.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form for Courses */}
      <LeadForm />
    </div>
  );
};
