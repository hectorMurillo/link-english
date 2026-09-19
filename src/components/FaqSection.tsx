import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].faq;

  const faqs = isEn
    ? [
        {
          question: 'How can I learn English while working a full-time job?',
          answer:
            'At Link English we design flexible morning, evening, and Saturday hours created specifically for working professionals. With our dynamic approach, no time is wasted on repetitive homework; sessions focus 100% on live conversation, simulated meetings, and real business cases.',
          category: 'Schedules & Modality',
        },
        {
          question: 'What benefits are offered under the Coppel partnership?',
          answer:
            'Coppel team members (stores, BanCoppel, distribution centers, and corporate across Culiacán and Mexico) receive preferential rates with exclusive discounts, complimentary level diagnostics, priority WhatsApp support, and shifts aligned to their workday.',
          category: 'Coppel Agreement',
        },
        {
          question: 'What does the Pearson academic backing (pearson.com) mean?',
          answer:
            'Our curricula and assessments adhere to Pearson pedagogical standards, the global leader in education and language benchmarks. We utilize the Global Scale of English (GSE) so that every milestone achieved has standardized, internationally recognized career value.',
          category: 'Pearson Backing',
        },
        {
          question: 'How quickly will I notice progress in my workplace English?',
          answer:
            'From the first month you will experience elevated confidence when speaking in meetings, writing business emails, and understanding industry terminology.',
          category: 'Outcomes',
        },
        {
          question: 'Is the initial assessment and interview truly free?',
          answer:
            'Yes, it is 100% free with no commitment. One of our teachers evaluates your fluency, comprehension, and career goals to suggest the optimal individual or group path.',
          category: 'Admissions',
        },
      ]
    : [
        {
          question: '¿Cómo puedo aprender inglés mientras trabajo a tiempo completo?',
          answer:
            'En Link English diseñamos horarios flexibles matutinos, vespertinos y sabatinos creados especialmente para personas con jornadas laborales completas. Con nuestro método dinámico no pierdes tiempo en tareas repetitivas; las sesiones se centran 100% en conversación práctica, simulación de reuniones laborales y casos de negocio reales.',
          category: 'Horarios y Modalidad',
        },
        {
          question: '¿Qué beneficios ofrece el convenio para empleados y colaboradores de Coppel?',
          answer:
            'Los colaboradores de Grupo Coppel (tiendas, BanCoppel, centros de distribución y corporativo en Culiacán o nacional) cuentan con tarifas preferenciales con descuento exclusivo, diagnóstico de nivel sin costo, atención prioritaria por WhatsApp y horarios adaptados a sus turnos de trabajo.',
          category: 'Convenio Coppel',
        },
        {
          question: '¿En qué consiste el respaldo académico de Pearson (pearson.com)?',
          answer:
            'Nuestros planes de estudio y evaluaciones se apoyan en los estándares pedagógicos de Pearson (pearson.com), la empresa líder mundial en educación y certificación de idiomas. Utilizamos la Escala Global de Inglés (Global Scale of English - GSE) para que cada habilidad aprendida tenga valor y reconocimiento profesional estandarizado.',
          category: 'Respaldo Pearson',
        },
        {
          question: '¿En cuánto tiempo comenzaré a notar avances en mi inglés de trabajo?',
          answer:
            'Desde el primer mes notarás mayor confianza al hablar, redactar correos en inglés y comprender vocabulario técnico. Nuestro objetivo es que apliques de inmediato lo aprendido en tus juntas, correos electrónicos y entrevistas de trabajo.',
          category: 'Resultados',
        },
        {
          question: '¿El diagnóstico y la entrevista inicial son realmente gratuitos?',
          answer:
            'Sí, es 100% gratuito y sin compromiso. Uno de nuestros docentes evaluará tu fluidez, comprensión y metas laborales para recomendarte el plan individual o grupal óptimo.',
          category: 'Admisiones',
        },
      ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <div className="flex items-center gap-3 pr-4">
                    {faq.category && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 text-[11px] font-semibold border border-blue-800/60 shrink-0">
                        {faq.category}
                      </span>
                    )}
                    <span className="font-semibold text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-white">
              {t.promptTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.promptDesc}
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
              isEn
                ? 'Hello, I have a question about English courses for employees and the Coppel partnership.'
                : 'Hola, tengo una duda sobre los cursos de inglés para trabajadores y el convenio Coppel.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.promptBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
