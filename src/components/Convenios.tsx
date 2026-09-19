import React from 'react';
import { Briefcase, Building2, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { AGREEMENTS, SITE_CONFIG } from '../data/siteData';

export const Convenios: React.FC = () => {
  return (
    <section id="convenios" className="py-20 lg:py-28 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Alianzas Estratégicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Convenios Empresariales
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Si eres colaborador de una de nuestras empresas aliadas, cuentas con beneficios y tarifas
            preferenciales para ti y tu equipo. Haz clic para activar tu beneficio directo.
          </p>
        </div>

        {/* 2 Convenio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {AGREEMENTS.map((agreement) => {
            const waLink = `https://api.whatsapp.com/send/?phone=${SITE_CONFIG.phoneNumberRaw}&text=Hola,+estoy+interesado+en+las+clases+de+link+English+me+puede+dar+m%C3%A1s+informaci%C3%B3n+${agreement.waParam}?&type=phone_number&app_absent=0`;

            return (
              <div
                key={agreement.id}
                className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col hover:border-blue-500/60 transition-all duration-300"
              >
                {/* Image Container with high quality presentation */}
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
                    <span>Convenio Activo: {agreement.companyName}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Beneficio para Colaboradores {agreement.companyName}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Aprovecha los descuentos vigentes en planes de inglés dinámicos para ti o tu
                      departamento con acceso prioritario a horarios especiales.
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

                  {/* WhatsApp Action Button with Exact Message Required */}
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
            <h4 className="text-lg font-bold text-white">¿Representas a otra empresa o departamento de RRHH?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Podemos estructurar un plan corporativo a la medida de tu organización con diagnóstico
              institucional sin costo.
            </p>
          </div>
          <a
            href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
              'Hola, me gustaría solicitar informes para establecer un convenio empresarial de Link English para mi empresa.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
          >
            Solicitar convenio para mi empresa
          </a>
        </div>
      </div>
    </section>
  );
};
