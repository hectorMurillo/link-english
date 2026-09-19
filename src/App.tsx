/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { StickyBar } from './components/StickyBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PearsonBacking } from './components/PearsonBacking';
import { Courses } from './components/Courses';
import { Convenios } from './components/Convenios';
import { AwardsSection } from './components/AwardsSection';
import { Teachers } from './components/Teachers';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Poppins',sans-serif]">
        {/* Top Promotional Bar */}
        <StickyBar />

        {/* Main Sticky Navbar with Awards and subtle Language Toggle */}
        <Navbar />

        {/* Landing Page Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <PearsonBacking />
          <Courses />
          <Convenios />
          <AwardsSection />
          <Teachers />
          <BlogSection />
          <Testimonials />
          <FaqSection />
          <LeadForm />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action Bubble */}
        <WhatsAppBubble />
      </div>
    </LanguageProvider>
  );
}
