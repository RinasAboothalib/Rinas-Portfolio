import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/40 backdrop-blur-xl py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <a href="#home" className="text-xl font-extrabold text-white tracking-wider">
              {PERSONAL_INFO.name}<span className="text-cyan-400">.</span>
            </a>
            <div className="text-xs text-slate-400">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.subtitle}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:scale-110 transition-all cursor-pointer shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Rinas Aboothalib. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, TypeScript & AI/ML Vision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
