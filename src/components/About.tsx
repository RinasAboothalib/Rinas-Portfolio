import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Cpu, Code2, Sparkles, Rocket, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const EXPLORING_CARDS = [
  { title: "Artificial Intelligence", desc: "Neural network architectures, prompt engineering, and intelligent agent workflows", icon: BrainCircuit, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  { title: "Machine Learning", desc: "Supervised algorithms, predictive analytics, and Python model pipelines", icon: Cpu, color: "text-sky-400 border-sky-500/30 bg-sky-500/5" },
  { title: "Modern Web Engineering", desc: "Scalable full-stack systems with React, TypeScript, Python, and modern web architectures", icon: Code2, color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { title: "Intelligent Applications", desc: "Integrating smart AI insights into accessible user-friendly digital tools", icon: Sparkles, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
  { title: "Emerging Technologies", desc: "Cloud deployment architectures, developer platforms, and automation tools", icon: Rocket, color: "text-purple-400 border-purple-500/30 bg-purple-500/5" }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <div className="text-xs tracking-widest text-cyan-400 font-bold uppercase">
            01 / ABOUT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Two-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Professional Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                <span>Passionate Developer & AI Explorer</span>
              </h3>
              
              <p>
                {PERSONAL_INFO.aboutText}
              </p>

              <p>
                My journey combines core software engineering principles with cutting-edge Artificial Intelligence. From building full-stack civic web platforms like <strong className="text-cyan-300 font-semibold">CSRP</strong> to engineering smart tools like the <strong className="text-cyan-300 font-semibold">Resume AI Analyzer</strong>, I focus on solving practical problems with clean code and intuitive design.
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
                  Core Philosophy
                </h4>
                <ul className="space-y-2 text-sm">
                  {PERSONAL_INFO.aboutHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Currently Exploring Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Currently Exploring</span>
            </h3>

            <div className="space-y-3">
              {EXPLORING_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className={`p-4 rounded-xl border backdrop-blur-md transition-all hover:scale-[1.02] cursor-default ${card.color}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-900/80 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{card.title}</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-normal">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
