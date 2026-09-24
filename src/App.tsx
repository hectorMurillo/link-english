/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { StickyBar } from './components/StickyBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';

// Dedicated Views per Menu Option
import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { ConveniosView } from './views/ConveniosView';
import { PearsonView } from './views/PearsonView';
import { AwardsView } from './views/AwardsView';
import { TeachersView } from './views/TeachersView';
import { BlogView } from './views/BlogView';
import { FaqView } from './views/FaqView';

const MainContent: React.FC = () => {
  const { currentView } = useNavigation();

  switch (currentView) {
    case 'cursos':
      return <CoursesView />;
    case 'convenios':
      return <ConveniosView />;
    case 'pearson':
      return <PearsonView />;
    case 'awards':
      return <AwardsView />;
    case 'maestros':
      return <TeachersView />;
    case 'blog':
      return <BlogView />;
    case 'faq':
      return <FaqView />;
    case 'inicio':
    default:
      return <HomeView />;
  }
};

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Poppins',sans-serif]">
          {/* Top Promotional Bar */}
          <StickyBar />

          {/* Main Sticky Navbar with Active View Indicator & Language Toggle */}
          <Navbar />

          {/* Render Active View Selected in the Menu */}
          <main className="flex-1">
            <MainContent />
          </main>

          {/* Comprehensive Footer with View Links */}
          <Footer />

          {/* Floating WhatsApp Action Bubble */}
          <WhatsAppBubble />
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}
