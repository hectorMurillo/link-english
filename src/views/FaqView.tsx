import React from 'react';
import { HelpCircle, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ViewHeader } from '../components/ViewHeader';
import { FaqSection } from '../components/FaqSection';
import { LeadForm } from '../components/LeadForm';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

export const FaqView: React.FC = () => {
  const { isEn } = useLanguage();

  const contactChannels = [
    {
      icon: Phone,
      title: isEn ? 'Phone & WhatsApp' : 'Teléfono y WhatsApp Directo',
      detail: SITE_CONFIG.phoneNumberFormatted,
      sub: isEn ? 'Direct assistance via WhatsApp' : 'Atención inmediata por WhatsApp',
      link: `https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
        SITE_CONFIG.defaultWhatsAppMessage
      )}`,
    },
    {
      icon: Mail,
      title: isEn ? 'Official Email' : 'Correo Electrónico',
      detail: SITE_CONFIG.email,
      sub: isEn ? 'Institutional & corporate inquiries' : 'Atención institucional y convenios',
      link: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: MapPin,
      title: isEn ? 'Campus & Location' : 'Campus y Ubicación',
      detail: SITE_CONFIG.city,
      sub: isEn ? 'Online and In-person classes' : 'Modalidades online en vivo y presencial',
      link: `https://maps.google.com/?q=${encodeURIComponent(
        'Link English ' + SITE_CONFIG.city
      )}`,
    },
    {
      icon: Clock,
      title: isEn ? 'Service Hours' : 'Horarios de Atención',
      detail: isEn ? 'Mon - Fri: 8:00 AM - 8:00 PM' : 'Lunes a Viernes: 8:00 AM - 8:00 PM',
      sub: isEn ? 'Sat: 9:00 AM - 2:00 PM' : 'Sábados: 9:00 AM - 2:00 PM',
      link: undefined,
    },
  ];

  return (
    <div className="space-y-0">
      <ViewHeader
        badge={isEn ? 'Support & Help' : 'Dudas y Asesoría'}
        badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
        title={isEn ? 'Frequently Asked Questions & Contact' : 'Preguntas Frecuentes y Contacto'}
        subtitle={isEn
          ? 'Find answers about our methodology, schedules, payment options, and Pearson certification, or contact our team directly.'
          : 'Resuelve tus dudas sobre metodología, horarios, modalidades, formas de pago y certificación Pearson, o contáctanos de inmediato.'}
      />

      {/* Main FAQ Accordion Component */}
      <FaqSection />

      {/* Direct Contact Channels Card */}
      <section className="py-16 bg-slate-900/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isEn ? 'Need personalized assistance?' : '¿Necesitas asesoría personalizada?'}
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              {isEn
                ? 'Our coordination team is available to guide you through your enrollment.'
                : 'Nuestro equipo de admisiones y coordinación escolar está listo para atenderte.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{c.title}</h3>
                    <p className="text-sm font-semibold text-blue-300 break-words mb-1">
                      {c.detail}
                    </p>
                    <p className="text-xs text-slate-400">{c.sub}</p>
                  </div>

                  {c.link && (
                    <div className="pt-4 mt-4 border-t border-slate-800/80">
                      <a
                        href={c.link}
                        target={c.link.startsWith('http') ? '_blank' : undefined}
                        rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        <span>{isEn ? 'Contact now' : 'Contactar ahora'}</span>
                        <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free diagnostic and message form */}
      <LeadForm />
    </div>
  );
};
