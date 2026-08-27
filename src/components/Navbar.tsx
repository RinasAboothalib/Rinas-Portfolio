import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCvModal: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Subtle Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-slate-800 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-[2px] left-0 right-0 z-[90] transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-slate-950/30 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-black/20 py-3'
              : 'bg-white/85 backdrop-blur-md border-b border-sky-200/60 shadow-md py-3'
            : 'bg-slate-950/20 backdrop-blur-md border-b border-slate-800/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-base shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="text-lg sm:text-xl font-bold tracking-widest text-cyan-400 font-sans">
              RINAS<span className="text-white"> ABOOTHALIB</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors cursor-pointer rounded-lg ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : theme === 'dark'
                      ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:border-cyan-500/50 hover:bg-slate-200'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider border border-cyan-500/30 rounded-full bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 backdrop-blur-sm transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === 'dark' ? 'bg-slate-900 text-cyan-400' : 'bg-slate-100 text-slate-800'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                theme === 'dark' ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'
              }`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 p-4 border-b shadow-2xl transition-all ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-cyan-900/40 backdrop-blur-xl text-slate-100'
                : 'bg-white/95 border-slate-200 backdrop-blur-xl text-slate-900'
            }`}
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-4 border-cyan-400'
                        : theme === 'dark'
                        ? 'hover:bg-slate-900 text-slate-300'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-800/60 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV / Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
