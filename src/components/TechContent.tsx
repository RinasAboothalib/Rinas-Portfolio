import React from 'react';
import { motion } from 'motion/react';
import { TECH_CONTENT_DATA } from '../data/portfolioData';
import { BrainCircuit, Cpu, Code, Sparkles, ArrowRight, Share2 } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  BrainCircuit,
  Cpu,
  Code,
  Sparkles
};

export const TechContent: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12 text-center sm:text-left"
        >
          <div className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">
            07 / CONTENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            Tech Content & Community
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Create and publish professional content focused on Artificial Intelligence, Machine Learning, programming, and emerging technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto sm:mx-0 pt-1" />
        </motion.div>

        {/* Content Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TECH_CONTENT_DATA.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1 text-xs font-mono text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Explore Insights</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 rounded-3xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-cyan-950/30"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Share2 className="w-5 h-5 text-cyan-400" />
              <span>Follow My Developer & AI Insights</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Join the conversation on AI trends, software engineering tips, and emerging tools.
            </p>
          </div>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            <span>Explore My Content</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
