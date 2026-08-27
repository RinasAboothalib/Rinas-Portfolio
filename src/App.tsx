import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { TechContent } from './components/TechContent';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CVModal } from './components/CVModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('rinas_portfolio_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('rinas_portfolio_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#020617] bg-immersive text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Portfolio Content */}
      <main className="relative z-10 overflow-hidden">
        {/* Hero Section */}
        <Hero
          onViewProjects={() => scrollToSection('projects')}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onConnect={() => scrollToSection('contact')}
        />

        {/* 01 / About Section */}
        <About />

        {/* 02 / Skills Section */}
        <Skills />

        {/* 03 / Experience Section */}
        <Experience />

        {/* 04 / Projects Section */}
        <Projects />

        {/* 05 / Education Section */}
        <Education />

        {/* 06 / Certifications & Languages */}
        <Certifications />
        <Languages />

        {/* 07 / Tech Content & Community */}
        <TechContent />

        {/* 08 / Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Interactive CV Modal */}
      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
