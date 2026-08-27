import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16"
        >
          <div className="text-xs tracking-widest text-cyan-400 font-bold uppercase">
            05 / EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            Academic Background
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-10">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Circle Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-xl bg-slate-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-cyan-400 mb-2">
                  {item.institution}
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                )}

                {item.details && (
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3">
                    {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
