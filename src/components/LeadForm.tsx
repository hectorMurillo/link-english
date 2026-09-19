import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageSquare, Phone, Building, User, HelpCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { ContactPreference, EnglishLevel, LeadFormData } from '../types';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    nombre: '',
    whatsapp: '',
    empresa: '',
    nivel: '',
    contacto: 'WhatsApp',
    linkEnglish: '', // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [waLinkGenerated, setWaLinkGenerated] = useState('');

  const normalizeTelMX = (input: string) => {
    return input.replace(/\D/g, '');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedNombre = formData.nombre.trim();
    const cleanPhone = normalizeTelMX(formData.whatsapp.trim());
    const trimmedEmpresa = formData.empresa.trim();
    const selectedNivel = formData.nivel;
    const selectedContacto = formData.contacto;

    // 1. Basic validation
    if (!trimmedNombre || !cleanPhone || !trimmedEmpresa || !selectedNivel) {
      setErrorMessage('Por favor completa todos los campos requeridos.');
      return;
    }

    if (cleanPhone.length < 10) {
      setErrorMessage('Verifica tu número de WhatsApp (mínimo 10 dígitos).');
      return;
    }

    // 2. Honeypot check (anti-bot)
    if (formData.linkEnglish && formData.linkEnglish.trim().length > 0) {
      console.warn('Bot submission blocked via honeypot.');
      setStatus('success');
      return;
    }

    setStatus('submitting');

    // 3. Prepare pre-filled WhatsApp message
    const waPhone = cleanPhone.startsWith('52') ? cleanPhone : `52${cleanPhone}`;
    const mensaje = `Hola, mi nombre es ${trimmedNombre}. Laboro en ${trimmedEmpresa}.\nMi nivel de inglés es: ${selectedNivel}.\nPrefiero ser contactado por: ${selectedContacto}.\nMi WhatsApp es: ${waPhone}.`;
    const targetWaNumber = SITE_CONFIG.phoneNumberRaw;
    const directWaUrl = `https://wa.me/${targetWaNumber}?text=${encodeURIComponent(mensaje)}`;
    setWaLinkGenerated(directWaUrl);

    // 4. Webhook Payload
    const payload = {
      nombre: trimmedNombre,
      whatsapp: waPhone,
      empresa: trimmedEmpresa,
      nivel: selectedNivel,
      contacto: selectedContacto,
      linkEnglish: '', // honeypot is empty
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
    };

    try {
      // Send to n8n webhook
      await fetch(SITE_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => {
        // Log webhook error without crashing UX
        console.warn('Webhook notification notice:', err);
      });

      setStatus('success');

      // Attempt to open WhatsApp directly
      try {
        window.open(directWaUrl, '_blank');
      } catch (openErr) {
        console.warn('Popup blocked, link shown in UI:', openErr);
      }
    } catch (err) {
      console.error('Error sending lead data:', err);
      setStatus('success'); // Still allow user to proceed to WhatsApp
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      whatsapp: '',
      empresa: '',
      nivel: '',
      contacto: 'WhatsApp',
      linkEnglish: '',
    });
    setStatus('idle');
  };

  return (
    <section
      id="datos"
      className="relative py-24 lg:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax effect / fixed photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ9joPGJwyT20D5J/28-mnl45KNklRu3kzzW.webp"
          alt="Oficina moderna Link English"
          className="w-full h-full object-cover filter brightness-[0.25]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-xl w-full mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-6 space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">¡Tus datos han sido recibidos!</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Gracias por tu interés en Link English. Hemos registrado tu solicitud para el
                  diagnóstico gratuito.
                </p>
              </div>

              {waLinkGenerated && (
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left space-y-3">
                  <div className="text-xs text-slate-400 font-medium">
                    ¿No se abrió WhatsApp automáticamente?
                  </div>
                  <a
                    href={waLinkGenerated}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Continuar a WhatsApp ahora</span>
                  </a>
                </div>
              )}

              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
              >
                Enviar otro registro
              </button>
            </div>
          ) : (
            <div>
              {/* Form Header */}
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Diagnóstico y Entrevista Gratuita
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Déjanos tus datos
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Y te contactamos lo más pronto posible para agendar tu sesión.
                </p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nombre completo <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ej. Juan Pérez"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-medium text-slate-300 mb-1.5">
                    WhatsApp (10 dígitos) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Ej. 6671234567"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Solo números. Te enviaremos información directamente.
                  </span>
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Empresa en la que laboras <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Ej. Coppel, SuKarne, Independiente..."
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Nivel de Inglés */}
                <div>
                  <label htmlFor="nivel" className="block text-xs font-medium text-slate-300 mb-1.5">
                    ¿En qué nivel te encuentras? <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <select
                      id="nivel"
                      name="nivel"
                      required
                      value={formData.nivel}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona tu nivel aproximado</option>
                      <option value="Básico">Básico (A1 - A2)</option>
                      <option value="Intermedio">Intermedio (B1 - B2)</option>
                      <option value="Avanzado">Avanzado (C1 - C2)</option>
                      <option value="No lo sé">No lo sé (requiero evaluación)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Preference */}
                <div className="pt-2">
                  <span className="block text-xs font-medium text-slate-300 mb-2">
                    ¿Cómo deseas ser contactado?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${formData.contacto === 'WhatsApp' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}>
                      <input
                        type="radio"
                        name="contacto"
                        value="WhatsApp"
                        checked={formData.contacto === 'WhatsApp'}
                        onChange={handleChange}
                        className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-slate-900 border-slate-700"
                      />
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold">WhatsApp</span>
                    </label>

                    <label className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${formData.contacto === 'Llamada' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}>
                      <input
                        type="radio"
                        name="contacto"
                        value="Llamada"
                        checked={formData.contacto === 'Llamada'}
                        onChange={handleChange}
                        className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-slate-900 border-slate-700"
                      />
                      <Phone className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold">Llamada</span>
                    </label>
                  </div>
                </div>

                {/* Honeypot field (hidden from users, traps automated bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="linkEnglish">linkEnglish</label>
                  <input
                    id="linkEnglish"
                    type="text"
                    name="linkEnglish"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.linkEnglish}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="btnEnviar"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-base"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando información...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar y Solicitar Diagnóstico</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Te contactaremos únicamente por el medio seleccionado. Cero spam garantizado.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
