import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowRight, FileDown, Check, Copy, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileCutoutImage } from './ProfileCutoutImage';

interface HeroProps {
  onViewProjects: () => void;
  onOpenCvModal: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenCvModal, onConnect }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Technical Grid & Atmospheric Radial Lights */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: CLEAN CIRCULAR PROFILE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Circular Profile Avatar */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
              <ProfileCutoutImage className="w-full" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: BIO, HEADINGS, QUICK ACTIONS & STATS */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
          >
            {/* Availability Indicator & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Trincomalee, Sri Lanka</span>
              </div>
            </div>

            {/* Profile Heading & Brand Identity */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm tracking-widest uppercase text-cyan-400 font-bold">
                // WELCOME TO MY PORTFOLIO
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
                RINAS<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600">
                  ABOOTHALIB
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 pt-1">
                Aspiring AI Engineer <span className="text-cyan-400 font-bold mx-2">|</span> AI & ML Enthusiast
              </p>
            </div>

            {/* Executive Pitch */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Action Buttons & Quick Connect */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* View Projects CTA */}
              <button
                onClick={onViewProjects}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Download CV CTA */}
              <button
                onClick={onOpenCvModal}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider border border-cyan-500/40 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Curriculum Vitae</span>
              </button>

              {/* Copy Direct Email Button */}
              <button
                onClick={handleCopyEmail}
                className="relative px-4 py-3.5 text-xs font-bold border border-slate-700/80 rounded-xl bg-slate-900/90 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connectivity Row */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-400">Find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 cursor-pointer transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 cursor-pointer transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 cursor-pointer transition-all shadow-md"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.email}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 cursor-pointer transition-all shadow-md"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="pt-6 border-t border-slate-800/80 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
