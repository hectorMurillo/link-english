import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  Share2,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Copy,
  Check,
  Brain,
  Timer,
  Play,
  RotateCcw,
  Quote,
  ChevronRight,
  Lightbulb,
  Award,
  CalendarCheck,
  Send,
} from 'lucide-react';
import { BLOG_POST } from '../data/blogData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const BlogSection: React.FC = () => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language].blog;
  const post = BLOG_POST;

  // Active view state
  const [activeTab, setActiveTab] = useState<'all' | 'reaction' | 'strategies' | 'challenge'>('all');

  // Interactive 7-Day Tracker (persisted in localStorage)
  const [tracker, setTracker] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem('link_english_7day_tracker');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [false, false, false, false, false, false, false];
  });

  useEffect(() => {
    try {
      localStorage.setItem('link_english_7day_tracker', JSON.stringify(tracker));
    } catch {
      // fallback
    }
  }, [tracker]);

  const toggleDay = (index: number) => {
    setTracker((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  // Practice Timer (30s speaking challenge)
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((sec) => sec - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const startTimer = () => setIsTimerRunning(true);
  const pauseTimer = () => setIsTimerRunning(false);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(30);
  };

  // Interactive reflection tag
  const [selectedReflection, setSelectedReflection] = useState<string | null>(null);

  // Interactive Poll
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [pollVoted, setPollVoted] = useState(false);

  // Copy phrase status
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedPhrase(text);
    setTimeout(() => setCopiedPhrase(null), 2000);
  };

  // Share article link
  const [sharedNotice, setSharedNotice] = useState(false);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: isEn ? post.titleEn : post.title,
          text: isEn ? post.subtitleEn : post.subtitle,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setSharedNotice(true);
      setTimeout(() => setSharedNotice(false), 2500);
    }
  };

  const completedDaysCount = tracker.filter(Boolean).length;

  return (
    <section id="blog" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative border-t border-slate-800/80">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Main Article Container */}
        <article className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Article Header & Cover */}
          <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-800/80">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-extrabold uppercase tracking-widest">
                {isEn ? post.tagEn : post.tag}
              </span>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {isEn ? post.readTimeEn : post.readTime}
                </span>
                <span>•</span>
                <span>{post.date}</span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title={t.shareBtn}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{sharedNotice ? t.linkCopied : t.shareBtn}</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {isEn ? post.titleEn : post.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mb-8">
              {isEn ? post.subtitleEn : post.subtitle}
            </p>

            {/* Feature Cover Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl aspect-video max-h-[420px]">
              <img
                src={post.coverImage}
                alt={isEn ? post.titleEn : post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="text-xs sm:text-sm font-semibold text-white/90 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700/60 backdrop-blur-md">
                  {isEn ? 'Speaking in front of others activates brain threat filters' : 'Hablar frente a otros activa filtros de alerta en el cerebro'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Anchor Bar */}
          <div className="bg-slate-950/90 border-b border-slate-800/80 p-3 sm:p-4 sticky top-16 z-20 backdrop-blur-md flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {isEn ? 'Full Article' : 'Artículo Completo'}
            </button>
            <button
              onClick={() => setActiveTab('reaction')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'reaction'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {isEn ? '1. Why Mind Goes Blank' : '1. Por qué nos bloqueamos'}
            </button>
            <button
              onClick={() => setActiveTab('strategies')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'strategies'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {isEn ? '2. 5 Strategies' : '2. 5 Estrategias'}
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'challenge'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {isEn ? '3. 5-Min Challenge' : '3. Reto de 5 Minutos'}
            </button>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-16">
            {/* Part 1: Introduction & The Core Truth */}
            {(activeTab === 'all' || activeTab === 'reaction') && (
              <section className="space-y-6">
                <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
                  {(isEn ? post.introParagraphsEn : post.introParagraphs).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Big Highlight Quote */}
                <div className="p-6 sm:p-8 rounded-2xl bg-blue-950/40 border-l-4 border-blue-500 text-white shadow-lg my-8 flex items-start gap-4">
                  <Quote className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
                  <p className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                    {isEn ? post.highlightQuoteEn : post.highlightQuote}
                  </p>
                </div>
              </section>
            )}

            {/* Part 2: Understanding the reaction */}
            {(activeTab === 'all' || activeTab === 'reaction') && (
              <section className="pt-8 border-t border-slate-800/80 space-y-8">
                <div className="flex items-center gap-2.5 text-blue-400 text-xs font-black tracking-widest uppercase">
                  <Brain className="w-4 h-4" />
                  <span>{isEn ? 'UNDERSTANDING THE REACTION' : 'ENTENDIENDO LA REACCIÓN'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {isEn ? post.reasonsSection.titleEn : post.reasonsSection.title}
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {isEn ? post.reasonsSection.descriptionEn : post.reasonsSection.description}
                </p>

                {/* Three Reasons Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {post.reasonsSection.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-lg"
                    >
                      <div>
                        <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-slate-800">
                          <img
                            src={item.image}
                            alt={isEn ? item.titleEn : item.title}
                            className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">
                          {isEn ? item.titleEn : item.title}
                        </h3>

                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {isEn ? item.descriptionEn : item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reflective Prompt Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/50 to-slate-900 border border-blue-500/30">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>{isEn ? 'Reflect' : 'Reflexiona'}</span>
                  </div>

                  <p className="text-white text-sm sm:text-base font-medium mb-4">
                    {isEn ? post.reasonsSection.reflectPromptEn : post.reasonsSection.reflectPrompt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'people', es: 'Personas desconocidas', en: 'Unfamiliar people' },
                      { id: 'vocab', es: 'Vocabulario difícil', en: 'Difficult vocabulary' },
                      { id: 'pronunciation', es: 'Pronunciación', en: 'Pronunciation' },
                      { id: 'correction', es: 'Que me corrijan', en: 'Being corrected' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedReflection(opt.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          selectedReflection === opt.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        {isEn ? opt.en : opt.es}
                      </button>
                    ))}
                  </div>

                  {selectedReflection && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-blue-500/30 text-xs text-blue-200 animate-fade-in">
                      💡 {isEn
                        ? 'Tip: Practice in small steps! In Link English classes, sessions are structured so you interact with zero pressure and zero judgment.'
                        : 'Consejo: ¡Practica en pequeños pasos! En Link English las sesiones están diseñadas para que hables sin juicios y con apoyo constante.'}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Part 3: Practical Strategies */}
            {(activeTab === 'all' || activeTab === 'strategies') && (
              <section className="pt-8 border-t border-slate-800/80 space-y-8">
                <div className="flex items-center gap-2.5 text-blue-400 text-xs font-black tracking-widest uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>{isEn ? 'PRACTICAL STRATEGIES' : 'ESTRATEGIAS PRÁCTICAS'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {isEn ? post.strategiesSection.titleEn : post.strategiesSection.title}
                </h2>

                <div className="space-y-6">
                  {post.strategiesSection.items.map((strat) => (
                    <div
                      key={strat.step}
                      className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col md:flex-row items-start gap-6 hover:border-blue-500/40 transition-all shadow-md"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 font-black text-xl flex items-center justify-center shrink-0">
                        {strat.step}
                      </div>

                      <div className="flex-1 space-y-3 w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {isEn ? strat.titleEn : strat.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {isEn ? strat.descriptionEn : strat.description}
                        </p>

                        {/* Useful Phrases Box with Copy capability */}
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="text-[11px] font-extrabold text-blue-400 uppercase tracking-wider block">
                            {isEn ? strat.phraseLabelEn : strat.phraseLabel}:
                          </span>

                          <div className="flex flex-wrap gap-2">
                            {strat.phrases.map((phrase, idx) => (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-200 text-xs sm:text-sm font-medium"
                              >
                                <span>{phrase}</span>
                                <button
                                  type="button"
                                  onClick={() => copyToClipboard(phrase)}
                                  className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                                  title={isEn ? 'Copy phrase' : 'Copiar frase'}
                                >
                                  {copiedPhrase === phrase ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Part 4: Daily Practice & 5-Minute Challenge */}
            {(activeTab === 'all' || activeTab === 'challenge') && (
              <section className="pt-8 border-t border-slate-800/80 space-y-8">
                <div className="flex items-center gap-2.5 text-blue-400 text-xs font-black tracking-widest uppercase">
                  <CalendarCheck className="w-4 h-4" />
                  <span>{isEn ? 'DAILY PRACTICE' : 'PRÁCTICA DIARIA'}</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {isEn ? post.challengeSection.titleEn : post.challengeSection.title}
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {isEn ? post.challengeSection.subtitleEn : post.challengeSection.subtitle}
                  </p>
                </div>

                {/* 4 Rules Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.challengeSection.rules.map((rule, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-slate-200 text-sm font-medium">
                        {isEn ? rule.en : rule.es}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interactive Practice Questions + 30s Timer */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 border border-blue-500/30 space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider block">
                        {isEn ? 'PRACTICE QUESTIONS' : 'PREGUNTAS DE PRÁCTICA'}
                      </span>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isEn ? 'Select a prompt and try answering in 30 seconds:' : 'Selecciona una pregunta y responde durante 30 segundos:'}
                      </p>
                    </div>

                    {/* 30-Second Speaking Timer Widget */}
                    <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 px-4 py-2 rounded-2xl shadow-md">
                      <Timer className="w-5 h-5 text-blue-400" />
                      <span className={`text-xl font-mono font-bold ${timerSeconds <= 5 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                        00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
                      </span>
                      {isTimerRunning ? (
                        <button
                          type="button"
                          onClick={pauseTimer}
                          className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold"
                        >
                          {isEn ? 'Pause' : 'Pausar'}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={startTimer}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                        >
                          <Play className="w-3 h-3 fill-white" />
                          <span>{isEn ? 'Start' : 'Iniciar'}</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={resetTimer}
                        className="text-slate-400 hover:text-white p-1"
                        title={isEn ? 'Reset' : 'Reiniciar'}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {post.challengeSection.questions.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveQuestion(idx);
                          resetTimer();
                        }}
                        className={`p-4 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 ${
                          activeQuestion === idx
                            ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>“{isEn ? q.en : q.es}”</span>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7-Day Tracker with interactive Checkboxes */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        <span>{isEn ? 'Seven-Day Tracker' : 'Registro de 7 Días'}</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        {isEn
                          ? 'Complete 1 prompt a day. Check each day as you finish:'
                          : 'Haz una pregunta por día. Marca tu avance:'}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 font-bold text-xs">
                      {completedDaysCount} / 7 {isEn ? 'Days' : 'Días'}
                    </span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 pt-2">
                    {tracker.map((done, dayIdx) => (
                      <button
                        key={dayIdx}
                        type="button"
                        onClick={() => toggleDay(dayIdx)}
                        className={`py-3 px-1 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                          done
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] sm:text-xs font-bold uppercase">
                          {isEn ? `Day ${dayIdx + 1}` : `Día ${dayIdx + 1}`}
                        </span>
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${done ? 'bg-white text-emerald-600 border-white' : 'border-slate-600'}`}>
                          {done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  {completedDaysCount === 7 && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm text-center font-bold animate-fade-in">
                      🎉 {isEn ? 'Congratulations! You completed the 7-day confidence challenge!' : '¡Felicidades! ¡Completaste el reto de 7 días de confianza!'}
                    </div>
                  )}
                </div>

                {/* Strategy Poll: Which strategy will you try first? */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h4 className="text-base font-bold text-white">
                    {t.pollTitle}
                  </h4>

                  <div className="space-y-2">
                    {post.strategiesSection.items.map((item) => (
                      <button
                        key={item.step}
                        type="button"
                        onClick={() => {
                          setSelectedStrategy(item.step);
                          setPollVoted(true);
                        }}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                          selectedStrategy === item.step
                            ? 'bg-blue-600/30 border-blue-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>
                          {item.step}. {isEn ? item.titleEn : item.title}
                        </span>
                        {selectedStrategy === item.step && (
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>

                  {pollVoted && (
                    <p className="text-xs text-emerald-400 font-semibold text-center animate-fade-in">
                      {t.pollVoted}
                    </p>
                  )}
                </div>

                {/* Callout: Practice With Link English */}
                <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-950 to-indigo-950 border border-blue-400/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                  <div className="space-y-2 max-w-xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                      Link English Club
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {t.practiceTitle}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {t.practiceDesc}
                    </p>
                  </div>

                  <a
                    href="#datos"
                    className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-xl transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>{t.practiceBtn}</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
