import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type NavView =
  | 'inicio'
  | 'cursos'
  | 'convenios'
  | 'pearson'
  | 'awards'
  | 'maestros'
  | 'blog'
  | 'faq';

interface NavigationContextType {
  currentView: NavView;
  navigateTo: (view: NavView, scrollToTop?: boolean) => void;
  viewTitles: Record<NavView, { es: string; en: string }>;
}

const VIEW_TITLES: Record<NavView, { es: string; en: string }> = {
  inicio: { es: 'Inicio', en: 'Home' },
  cursos: { es: 'Cursos', en: 'Courses' },
  convenios: { es: 'Convenios', en: 'Partnerships' },
  pearson: { es: 'Certificación Pearson', en: 'Pearson Certification' },
  awards: { es: 'Reconocimientos y Premios', en: 'Awards & Recognition' },
  maestros: { es: 'Cuerpo Docente y Directivo', en: 'Teachers & Leadership' },
  blog: { es: 'Blog y Recursos', en: 'Blog & Resources' },
  faq: { es: 'Preguntas Frecuentes y Contacto', en: 'FAQ & Contact' },
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const normalizeHashToView = (hash: string): NavView => {
  const clean = hash.replace(/^#\/?/, '').toLowerCase().trim();
  switch (clean) {
    case 'cursos':
    case 'courses':
      return 'cursos';
    case 'convenios':
    case 'partnerships':
      return 'convenios';
    case 'pearson':
    case 'certificacion':
      return 'pearson';
    case 'awards':
    case 'premios':
    case 'reconocimientos':
      return 'awards';
    case 'maestros':
    case 'teachers':
    case 'docentes':
    case 'equipo':
      return 'maestros';
    case 'blog':
    case 'publicaciones':
    case 'articulos':
      return 'blog';
    case 'faq':
    case 'preguntas':
    case 'contacto':
    case 'datos':
      return 'faq';
    case 'inicio':
    case 'home':
    case '':
    default:
      return 'inicio';
  }
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<NavView>(() => {
    if (typeof window !== 'undefined') {
      return normalizeHashToView(window.location.hash);
    }
    return 'inicio';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const targetView = normalizeHashToView(window.location.hash);
      setCurrentView(targetView);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: NavView, scrollToTop = true) => {
    setCurrentView(view);
    const hashTarget = view === 'inicio' ? '#inicio' : `#${view}`;

    // Update browser URL hash without causing a page jump
    if (window.location.hash !== hashTarget) {
      window.history.pushState(null, '', hashTarget);
    }

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentView,
        navigateTo,
        viewTitles: VIEW_TITLES,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
