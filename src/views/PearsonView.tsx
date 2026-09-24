import React from 'react';
import { Award, Globe, CheckCircle2, FileCheck, Shield, ExternalLink, Sparkles } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { PearsonBacking } from '../components/PearsonBacking';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const PearsonView: React.FC = () => {
  const { isEn } = useLanguage();

  const pearsonPillars = [
    {
      scale: 'GSE 10 - 90',
      title: isEn ? 'Global Scale of English' : 'Escala Global de Inglés (GSE)',
      desc: isEn
        ? 'A granular, standardized scale extending the CEFR framework so you can measure your exact incremental progress across speaking, listening, reading, and writing.'
        : 'Una escala granular estandarizada que amplía el MCER para medir tu progreso exacto en comprensión auditiva, expresión oral, lectura y escritura.',
    },
    {
      scale: 'PTE & Benchmark',
      title: isEn ? 'Official Benchmark Assessments' : 'Exámenes Benchmark Oficiales',
      desc: isEn
        ? 'Fast, accurate, and scientifically validated diagnostic testing that provides verifiable score reports recognized worldwide.'
        : 'Pruebas diagnósticas rápidas, precisas y científicamente validadas que emiten reportes oficiales reconocidos internacionalmente.',
    },
    {
      scale: 'CEFR A1 - C2',
      title: isEn ? 'International Framework Alignment' : 'Alineación al Marco Común Europeo',
      desc: isEn
        ? 'Every learning objective and class curriculum maps directly to international standards for work visa requirements, universities, and multinational corporations.'
        : 'Cada objetivo de aprendizaje está mapeado a los estándares internacionales exigidos por empresas multinacionales, visas y universidades.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Global Accreditation' : 'Acreditación Internacional'}
        badgeIcon={<Award className="w-3.5 h-3.5" />}
        title={isEn ? 'Pearson International Backing & Certification' : 'Respaldo y Certificación Internacional Pearson'}
        subtitle={isEn
          ? 'Learn English with the pedagogical frameworks and global assessments of Pearson, the world’s leading learning company.'
          : 'Aprende inglés con el respaldo de Pearson, la empresa líder a nivel mundial en educación y evaluación de idiomas.'}
      />

      {/* Main Pearson Backing Component */}
      <PearsonBacking />

      {/* Extended Pearson Details */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Standards & Rigor' : 'Estándares de Excelencia'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isEn ? 'Why Pearson makes the difference' : 'Por qué el respaldo Pearson marca la diferencia'}
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              {isEn
                ? 'Your learning is not based on guesswork; it is validated by world-class metrics and educational standards.'
                : 'Tu aprendizaje no se basa en suposiciones; cuenta con la rigurosidad y validación de estándares de clase mundial.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pearsonPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 mb-4 inline-block">
                    {pillar.scale}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Callout */}
          <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 rounded-3xl p-8 sm:p-10 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isEn ? 'Verified Learning Partner' : 'Socio Educativo Verificado'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isEn ? 'Official Pearson Learning Materials' : 'Materiales y Plataformas Oficiales Pearson'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {isEn
                  ? 'All students access contemporary digital coursework and exercises designed directly by Pearson pedagogists.'
                  : 'Nuestros alumnos utilizan libros digitales, audios interactivos y plataformas diseñadas por pedagogos de Pearson.'}
              </p>
            </div>

            <a
              href="https://www.pearson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-slate-700 transition-all shrink-0"
            >
              <span>{isEn ? 'Learn about Pearson' : 'Conocer Pearson Oficial'}</span>
              <ExternalLink className="w-4 h-4 text-blue-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Free placement diagnosis */}
      <LeadForm />
    </div>
  );
};
