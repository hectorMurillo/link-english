import React from 'react';
import { Users, GraduationCap, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { Teachers } from '../components/Teachers';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const TeachersView: React.FC = () => {
  const { isEn } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: isEn ? 'Empathy & Zero Judgment' : 'Empatía y Cero Juicio',
      desc: isEn
        ? 'Our instructors understand speaking anxiety. They foster a welcoming, encouraging space where making mistakes is welcomed as learning.'
        : 'Nuestros docentes comprenden la inseguridad al hablar. Crean un ambiente cálido y positivo donde equivocarse es parte natural del aprendizaje.',
    },
    {
      icon: GraduationCap,
      title: isEn ? 'Certified Pedagogy' : 'Pedagogía Certificada',
      desc: isEn
        ? 'Trained in CEFR guidelines, Pearson communicative methodologies, and dynamic adult instruction.'
        : 'Docentes capacitados en el marco MCER, metodologías comunicativas activas de Pearson y dinámicas para adultos.',
    },
    {
      icon: Award,
      title: isEn ? 'Continuous Faculty Training' : 'Capacitación Continua',
      desc: isEn
        ? 'Our teaching staff attends bi-weekly workshops to stay updated on modern communicative techniques and language psychology.'
        : 'Sesiones de retroalimentación quincenal y actualización pedagógica constante para mantener la máxima calidad en clase.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Faculty & Leadership' : 'Cuerpo Docente y Directivo'}
        badgeIcon={<Users className="w-3.5 h-3.5" />}
        title={isEn ? 'Meet Our Great Educational Team' : 'Conoce a Nuestro Gran Equipo'}
        subtitle={isEn
          ? 'Dedicated, highly qualified professionals committed to dynamic, enjoyable, and effective English instruction.'
          : 'Profesionales apasionados dedicados a la enseñanza dinámica, divertida y efectiva del idioma inglés.'}
      />

      {/* Main Teachers Component */}
      <Teachers />

      {/* Teaching Philosophy */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Our Educational Spirit' : 'Filosofía Docente'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'Teachers who inspire confidence' : 'Profesores que inspiran confianza'}
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              {isEn
                ? 'The biggest obstacle to speaking English is not grammar — it is fear. Our teachers are trained to dismantle that fear.'
                : 'El mayor obstáculo para hablar inglés no es la gramática, sino el temor a equivocarse. Nuestro equipo te acompaña en cada paso.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagnosis form */}
      <LeadForm />
    </div>
  );
};
