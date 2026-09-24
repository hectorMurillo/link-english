import React from 'react';
import { Building2, ShieldCheck, TrendingUp, Users, CheckCircle2, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { Convenios } from '../components/Convenios';
import { LeadForm } from '../components/LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const ConveniosView: React.FC = () => {
  const { isEn } = useLanguage();

  const businessPerks = [
    {
      icon: Users,
      title: isEn ? 'Preferential Employee Tuition' : 'Becas y Tarifas Preferenciales',
      desc: isEn
        ? 'Special corporate discounts for active workers, staff members, and their immediate families.'
        : 'Descuentos exclusivos y becas parciales para colaboradores en activo y sus familiares directos.',
    },
    {
      icon: FileSpreadsheet,
      title: isEn ? 'Bi-monthly HR Progress Reports' : 'Reportes Bimestrales para RH',
      desc: isEn
        ? 'Clear attendance logs, GSE milestone tracking, and speaking assessment analytics for your company.'
        : 'Métricas claras de asistencia, aprovechamiento y avance de nivel para el departamento de Recursos Humanos.',
    },
    {
      icon: TrendingUp,
      title: isEn ? 'Tailored Industry Vocabulary' : 'Vocabulario Especializado por Área',
      desc: isEn
        ? 'Simulate customer service, retail logistics, financial reporting, and IT software scenarios.'
        : 'Prácticas contextualizadas para áreas comerciales, logística, tecnología, atención al cliente y finanzas.',
    },
    {
      icon: ShieldCheck,
      title: isEn ? 'Zero Cost Agreement Setup' : 'Convenio sin Costo de Apertura',
      desc: isEn
        ? 'No onboarding fee or minimum employee quota required to sign an official educational agreement.'
        : 'Firmar convenio no requiere inversión inicial ni cuota mínima forzosa de colaboradores para iniciar.',
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Strategic Alliances' : 'Alianzas Estratégicas'}
        badgeIcon={<Building2 className="w-3.5 h-3.5" />}
        title={isEn ? 'Corporate & Institutional Agreements' : 'Convenios y Alianzas Empresariales'}
        subtitle={isEn
          ? 'Discover our official partnership benefits with leading companies like Coppel and learn how your organization can join.'
          : 'Descubre los beneficios de nuestros convenios activos con empresas como Coppel y cómo afiliar a tu equipo de trabajo.'}
      />

      {/* Main Convenios Component */}
      <Convenios />

      {/* Corporate Benefits Guide */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {isEn
                ? 'Empower your organizational workforce with bilingual skills'
                : 'Impulsa la competitividad de tu equipo de trabajo con inglés'}
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              {isEn
                ? 'More than just classes: we become your strategic language training partner.'
                : 'Mucho más que clases de inglés: un aliado educativo para capacitar a tus colaboradores de manera medible y eficaz.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {businessPerks.map((perk, index) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple Steps to Request a Convenio */}
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 border border-slate-800">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                {isEn ? 'Easy 3-Step Affiliation' : 'Afiliación en 3 Pasos'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {isEn
                  ? 'Want to establish an educational agreement for your company?'
                  : '¿Deseas tramitar un convenio para tu empresa o escuela?'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isEn
                  ? 'Complete the form below or chat with our partnerships coordinator via WhatsApp. We will prepare a customized proposal and launch exclusive perks for your team.'
                  : 'Llena el formulario a continuación indicando el nombre de tu empresa o contáctanos por WhatsApp. Elaboraremos la propuesta de convenio y los beneficios directos para tu personal.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form to request convenio info */}
      <LeadForm />
    </div>
  );
};
