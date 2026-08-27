import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Brain, Award, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-10 text-center sm:text-left"
        >
          <div className="text-xs tracking-widest text-cyan-400 font-bold uppercase">
            06 / CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto sm:mx-0" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-cyan-400 shrink-0">
                {cert.icon === 'Brain' ? <Brain className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                  {cert.issuer}
                </span>
                <h3 className="text-lg font-bold text-slate-100">
                  {cert.title}
                </h3>
                {cert.duration && (
                  <div className="text-xs text-slate-400 pt-1">
                    Duration / Track: {cert.duration}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
