import React from 'react';
import { Briefcase, Building2, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Convenios: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].convenios;

  const agreementsList = [
    {
      id: 'coppel',
      companyName: 'Coppel',
      buttonText: isEn ? "I'm a Coppel Employee" : 'Soy colaborador Coppel',
      image:
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=841,fit=crop/YZ9joPGJwyT20D5J/whatsapp-image-2025-09-28-at-5.28.53-pm-Y4LPVjr17MFErbOB.jpeg',
      waParam: 'SOY+COLABORADOR+COPPEL+',
      desc: isEn
        ? 'Benefit from active corporate discounts in dynamic English classes with priority schedule options.'
        : 'Aprovecha los descuentos vigentes en planes de inglés dinámicos para ti o tu departamento con acceso prioritario a horarios especiales.',
      benefits: isEn
        ? [
            'Exclusive partnership tuition discount',
            'Schedules built around retail & corporate shifts',
            '100% free placement diagnostic for employees',
          ]
        : [
            'Descuento preferencial exclusivo por convenio',
            'Facilidad de horarios compatibles con jornadas laborales',
            'Diagnóstico de nivel sin costo para colaboradores',
          ],
    },
    {
      id: 'sukarne',
      companyName: 'SuKarne',
      buttonText: isEn ? "I'm a SuKarne Employee" : 'Soy colaborador SuKarne',
      image:
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=890,fit=crop/YZ9joPGJwyT20D5J/whatsapp-image-2025-09-28-at-5.29.14-pm-Yan0ylrZeLHl9XO4.jpeg',
      waParam: 'SOY+COLABORADOR+SUKARNE+',
      desc: isEn
        ? 'Preferential pricing on business fluency training and export communication competencies.'
        : 'Tarifa corporativa preferencial con enfoque en comunicación efectiva y proyectos de exportación.',
      benefits: isEn
        ? [
            'Corporate preferential rates for staff',
            'Focus on business English & global communication',
            'Personalized coaching & direct WhatsApp tracking',
          ]
        : [
            'Tarifa corporativa especial para colaboradores',
            'Enfoque en comunicación efectiva y proyectos de exportación',
            'Atención y seguimiento personalizado por WhatsApp',
          ],
    },
  ];

  return (
    <section id="convenios" className="py-20 lg:py-28 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Special Coppel Highlight Banner for Employees */}
        <div className="max-w-5xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900 border-2 border-blue-500/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-yellow-400/30">
                <span>{t.coppelBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.coppelTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.coppelDesc}
              </p>
            </div>

            <a
              href={`https://api.whatsapp.com/send/?phone=${SITE_CONFIG.phoneNumberRaw}&text=${encodeURIComponent(
                isEn
                  ? 'Hello, I am interested in Link English classes with Pearson backing. I AM A COPPEL EMPLOYEE.'
                  : 'Hola, estoy interesado en las clases de link English me puede dar más información SOY COLABORADOR COPPEL'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.coppelCta}</span>
            </a>
          </div>
        </div>

        {/* 2 Convenio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {agreementsList.map((agreement) => {
            const waLink = `https://api.whatsapp.com/send/?phone=${SITE_CONFIG.phoneNumberRaw}&text=Hola,+estoy+interesado+en+las+clases+de+link+English+me+puede+dar+m%C3%A1s+informaci%C3%B3n+${agreement.waParam}?&type=phone_number&app_absent=0`;

            return (
              <div
                key={agreement.id}
                className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col hover:border-blue-500/60 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden group">
                  <img
                    src={agreement.image}
                    alt={`Convenio Link English con ${agreement.companyName}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                    <span>
                      {isEn ? 'Active Agreement: ' : 'Convenio Activo: '}
                      {agreement.companyName}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {isEn ? `Benefits for ${agreement.companyName} Team` : `Beneficio para Colaboradores ${agreement.companyName}`}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {agreement.desc}
                    </p>

                    <div className="space-y-2">
                      {agreement.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-sm sm:text-base"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{agreement.buttonText}</span>
                    <ExternalLink className="w-4 h-4 ml-auto text-emerald-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Partnership Proposal Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">
              {isEn
                ? 'Represent another company or HR Department?'
                : '¿Representas a otra empresa o departamento de RRHH?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {isEn
                ? 'We can establish custom corporate agreements with complimentary placement testing for your staff.'
                : 'Podemos estructurar un plan corporativo a la medida de tu organización con diagnóstico institucional sin costo.'}
            </p>
          </div>
          <a
            href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
              isEn
                ? 'Hello, I would like to request information about establishing a corporate partnership with Link English.'
                : 'Hola, me gustaría solicitar informes para establecer un convenio empresarial de Link English para mi empresa.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
          >
            {isEn ? 'Request corporate agreement' : 'Solicitar convenio para mi empresa'}
          </a>
        </div>
      </div>
    </section>
  );
};
