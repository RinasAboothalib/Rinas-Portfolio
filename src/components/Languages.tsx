import React from 'react';
import { motion } from 'motion/react';
import { LANGUAGES_DATA } from '../data/portfolioData';
import { Globe2, MessageSquareCode } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-slate-700/80">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Languages & Communication</h3>
              <p className="text-xs text-slate-400">Multilingual communication for global tech teams and developer engagement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LANGUAGES_DATA.map((lang) => (
              <div
                key={lang.language}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
              >
                <div className="font-bold text-slate-100 text-base">{lang.language}</div>
                <div className="text-xs text-cyan-400 font-semibold mt-1">
                  {lang.proficiency}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
