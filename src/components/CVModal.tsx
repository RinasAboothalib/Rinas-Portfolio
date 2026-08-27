import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle2, Award, BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl text-slate-100 space-y-8"
        >
          {/* Action Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">
                Curriculum Vitae
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                {PERSONAL_INFO.name} — Resume
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintCV}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-400 transition-colors shadow-lg cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Printable Document Paper */}
          <div id="printable-cv" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 text-slate-200">
            
            {/* Header / Info */}
            <div className="space-y-3 pb-6 border-b border-slate-800">
              <h1 className="text-3xl font-extrabold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm font-semibold text-cyan-400">
                {PERSONAL_INFO.primaryTitle}
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Professional Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bioShort}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
                Education
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="text-xs sm:text-sm space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>{edu.degree}</span>
                      <span className="text-cyan-400 font-semibold">{edu.period}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
                Experience & Roles
              </h3>
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>{exp.role} — <span className="text-cyan-400">{exp.organization}</span></span>
                      <span className="text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
                Core Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {SKILLS_DATA.map((s) => (
                  <span key={s.name} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    {s.name} <span className="text-cyan-400 font-bold">({s.percentage}%)</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <div className="font-bold text-white">{cert.title}</div>
                    <div className="text-[11px] text-cyan-400 font-medium">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
