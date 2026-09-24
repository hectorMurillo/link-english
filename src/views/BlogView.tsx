import React from 'react';
import { FileText, Sparkles, BookOpen, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { BlogSection } from '../components/BlogSection';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const BlogView: React.FC = () => {
  const { isEn } = useLanguage();

  const studyTips = [
    {
      icon: MessageSquare,
      title: isEn ? 'Speak Out Loud Daily' : 'Habla en Voz Alta a Diario',
      desc: isEn
        ? 'Dedicate just 5 minutes describing your routine or what is in front of you. It activates speech motor memory.'
        : 'Dedica sólo 5 minutos al día a describir lo que haces o ves a tu alrededor. Activa la memoria motriz del habla.',
    },
    {
      icon: Lightbulb,
      title: isEn ? 'Prioritize Flow Over Perfection' : 'Prioriza Fluidez sobre Perfección',
      desc: isEn
        ? 'Native speakers understand you even if you miss a preposition. Communication wins every single time.'
        : 'Los hablantes nativos te entienden incluso con pequeños errores gramaticales. Lo importante es transmitir el mensaje.',
    },
    {
      icon: BookOpen,
      title: isEn ? 'Use Strategic Fillers' : 'Usa Conectores Estratégicos',
      desc: isEn
        ? 'Phrases like "Let me see..." or "What I mean is..." buy you crucial thinking seconds without freezing.'
        : 'Frases puente como "Let me think for a second..." o "Basically..." te dan segundos valiosos para pensar sin congelarte.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Blog & Knowledge' : 'Blog y Recursos'}
        badgeIcon={<FileText className="w-3.5 h-3.5" />}
        title={isEn ? 'Link English Educational Blog' : 'Blog Educativo Link English'}
        subtitle={isEn
          ? 'Mindset techniques, cognitive psychology of language acquisition, and actionable tools to speak English with confidence at work.'
          : 'Técnicas prácticas, psicología del aprendizaje y herramientas reales para hablar inglés con seguridad y fluidez en el trabajo.'}
      />

      {/* Main Blog Component with interactive 4-page publication */}
      <BlogSection />

      {/* Actionable speaking tips */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Practical Habits' : 'Hábitos Clave'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'Three daily habits to speak faster' : 'Tres hábitos diarios para soltar tu inglés'}
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              {isEn
                ? 'Complement your reading with these immediate exercises you can do right now.'
                : 'Aplica estos ejercicios rápidos durante tu semana para acelerar tu confianza al hablar.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyTips.map((tip, i) => {
              const IconComp = tip.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <LeadForm />
    </div>
  );
};
