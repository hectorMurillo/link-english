import React, { useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Play, Pause, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={SITE_CONFIG.heroVideoPoster}
          className="w-full h-full object-cover scale-105 filter brightness-75"
        >
          <source src={SITE_CONFIG.heroVideoUrl} type="video/mp4" />
        </video>

        {/* Multi-layered Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Video Control Play/Pause Button in Corner */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
        className="absolute bottom-4 left-4 z-20 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white p-2.5 rounded-full border border-slate-700/60 backdrop-blur-sm transition-all text-xs flex items-center gap-1.5"
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Pausar fondo</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Reproducir fondo</span>
          </>
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Método dinámico para el ámbito profesional</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Conectándote <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
            al mundo laboral...
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance">
          Aprende inglés de manera dinámica, práctica y divertida. Diseñado específicamente para
          potenciar tu desempeño en entrevistas, reuniones de trabajo, presentaciones y expansión
          profesional.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#datos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Solicitar diagnóstico gratis</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
              SITE_CONFIG.defaultWhatsAppMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base px-6 py-4 rounded-xl border border-slate-700 backdrop-blur-md transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left w-full max-w-4xl">
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Diagnóstico sin costo</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Enfoque 100% laboral</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Clases dinámicas en vivo</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Convenios corporativos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
