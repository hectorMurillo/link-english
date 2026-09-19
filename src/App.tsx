/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StickyBar } from './components/StickyBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Convenios } from './components/Convenios';
import { Testimonials } from './components/Testimonials';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Poppins',sans-serif]">
      {/* Top Promotional Bar */}
      <StickyBar />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Landing Page Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Courses />
        <Convenios />
        <Testimonials />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Bubble */}
      <WhatsAppBubble />
    </div>
  );
}
