import React, { useRef, useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].hero;

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Video with Optimization */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={SITE_CONFIG.heroVideoPoster}
          className="w-full h-full object-cover opacity-25 scale-105 transition-all duration-700"
        >
          <source src={SITE_CONFIG.heroVideoUrl} type="video/mp4" />
        </video>

        {/* Multi-layered Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      {/* Video Controls (Floating bottom corner) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? (isEn ? 'Unmute video' : 'Activar sonido') : (isEn ? 'Mute video' : 'Silenciar')}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
        </button>

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? (isEn ? 'Pause background' : 'Pausar fondo') : (isEn ? 'Play background' : 'Reproducir')}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-blue-400" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{t.eyebrow}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 max-w-4xl">
          {t.headlineStart} <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            {t.headlineHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 text-balance">
          {t.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#datos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg shadow-blue-600/25 transition-all"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/${SITE_CONFIG.phoneNumberRaw}?text=${encodeURIComponent(
              SITE_CONFIG.defaultWhatsAppMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full border border-slate-700/80 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{t.ctaSecondary}</span>
          </a>
        </div>

        {/* Clean, airy Trust Points */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.trust1}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.trust2}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.trust3}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
