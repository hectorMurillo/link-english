import React from 'react';
import {
  BookOpen,
  Building2,
  Award,
  Trophy,
  Users,
  FileText,
  HelpCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { LeadForm } from '../components/LeadForm';
import { useNavigation, NavView } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

export const HomeView: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { isEn } = useLanguage();

  const exploreCards: Array<{
    id: NavView;
    title: string;
    badge: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }> = [
    {
      id: 'cursos',
      title: isEn ? 'English Courses' : 'Cursos de Inglés',
      badge: isEn ? 'Active Methodology' : 'Metodología Activa',
      description: isEn
        ? 'Personalized 1-on-1 and dynamic group classes designed for workplace communication.'
        : 'Programas individuales 1 a 1 y grupales dinámicos adaptados a tu ritmo y objetivos laborales.',
      icon: BookOpen,
      accentColor: 'from-blue-500/20 to-sky-500/20 border-blue-500/30 text-blue-400',
    },
    {
      id: 'convenios',
      title: isEn ? 'Corporate Agreements' : 'Convenios y Alianzas',
      badge: isEn ? 'Coppel Partner' : 'Convenio Coppel',
      description: isEn
        ? 'Special preferential rates and scholarship plans for company employees and partner institutions.'
        : 'Beneficios y tarifas preferenciales exclusivas para colaboradores Coppel y empresas aliadas.',
      icon: Building2,
      accentColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'pearson',
      title: isEn ? 'Pearson Backing' : 'Respaldo Pearson',
      badge: isEn ? 'Global Certification' : 'Validez Internacional',
      description: isEn
        ? 'Official certifications backed by the Global Scale of English (GSE) and international frameworks.'
        : 'Acreditación y exámenes de nivel con el respaldo pedagógico de Pearson internacional.',
      icon: Award,
      accentColor: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400',
    },
    {
      id: 'awards',
      title: isEn ? 'Awards & Rewards' : 'Premios y Rewards',
      badge: isEn ? 'Link Dollars' : 'Gamificación Real',
      description: isEn
        ? 'Earn Link Dollars in every class and redeem them for technology, books, games, and gift cards.'
        : 'Participa en clase y Speaking Clubs, acumula Link Dollars y canjéalos por premios reales.',
      icon: Trophy,
      accentColor: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400',
    },
    {
      id: 'maestros',
      title: isEn ? 'Faculty & Leadership' : 'Cuerpo Docente',
      badge: isEn ? '14 Certified Teachers' : '14 Profesores Certificados',
      description: isEn
        ? 'Passionate, highly certified educators committed to positive and dynamic English teaching.'
        : 'Conoce a Víctor Manuel, Lidia, Karen, Mafer, Miguel y a todo nuestro gran equipo docente.',
      icon: Users,
      accentColor: 'from-purple-500/20 to-fuchsia-500/20 border-purple-500/30 text-purple-400',
    },
    {
      id: 'blog',
      title: isEn ? 'Educational Blog' : 'Blog y Recursos',
      badge: isEn ? 'Fluency & Mindset' : 'Fluidez y Confianza',
      description: isEn
        ? 'Practical articles, 7-day confidence challenge, and real strategies to beat speaking anxiety.'
        : 'Guía interactiva para superar el bloqueo al hablar en el trabajo y reto de práctica diaria.',
      icon: FileText,
      accentColor: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-400',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Main Hero Banner */}
      <Hero />

      {/* 2. Interactive Section Navigator Grid */}
      <section className="py-16 lg:py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Explore Link English' : 'Explora Nuestras Opciones'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {isEn
                ? 'Everything you need to master workplace English'
                : 'Todo lo que necesitas para dominar el inglés laboral'}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {isEn
                ? 'Select any section from the menu or explore our dedicated views below:'
                : 'Elige cualquier opción del menú para acceder a su vista dedicada y detallada:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => navigateTo(card.id)}
                  className="group relative bg-slate-900/90 hover:bg-slate-800/90 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accentColor} border flex items-center justify-center`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                    <span>{isEn ? 'Open section' : 'Ver sección completa'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick FAQ shortcut */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => navigateTo('faq')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span>
                {isEn
                  ? 'Have questions about prices, methodology or hours? Visit our FAQ section'
                  : '¿Tienes dudas sobre costos, metodología u horarios? Visita la sección de Preguntas Frecuentes'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Institutional About */}
      <About />

      {/* 4. Testimonials */}
      <Testimonials />

      {/* 5. Diagnostic & Assessment Form */}
      <LeadForm />
    </div>
  );
};
