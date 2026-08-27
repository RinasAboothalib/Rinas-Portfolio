import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Code2, Globe2, Layers2, Wrench } from 'lucide-react';
import { Skill } from '../types';

interface SectionConfig {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}

const SECTIONS: SectionConfig[] = [
  {
    id: "Programming Languages",
    title: "Programming Languages",
    icon: Code2,
    description: "Core algorithms, data structures, relational logic, and backend programming fundamentals"
  },
  {
    id: "Web Technologies",
    title: "Web Technologies",
    icon: Globe2,
    description: "Modern markup standards, responsive layout engines, and accessible styling systems"
  },
  {
    id: "Frameworks & Libraries",
    title: "Frameworks & Libraries",
    icon: Layers2,
    description: "Component-driven user interfaces, MVC architectures, and full-stack application frameworks"
  },
  {
    id: "Tools & Design",
    title: "Tools & Design",
    icon: Wrench,
    description: "Developer IDEs, version control systems, local servers, and visual design platforms"
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-14 text-center sm:text-left"
        >
          <div className="text-xs tracking-widest text-cyan-400 font-bold uppercase">
            02 / SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical proficiency across core programming languages, modern web standards, full-stack frameworks, and design tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto sm:mx-0" />
        </motion.div>

        {/* Categorized Skills Sections (No selection bar) */}
        <div className="space-y-12 sm:space-y-16">
          {SECTIONS.map((section, secIdx) => {
            const sectionSkills = SKILLS_DATA.filter((s) => s.category === section.id);
            if (sectionSkills.length === 0) return null;

            const SectionIcon = section.icon;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: secIdx * 0.1 }}
                className="space-y-5"
              >
                {/* Category Sub-header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800/80 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <SectionIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                        {section.title}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400/90 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                    {sectionSkills.length} {sectionSkills.length === 1 ? 'Skill' : 'Skills'}
                  </span>
                </div>

                {/* Skill Cards Grid with Percentage Progress Bars & Original Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {sectionSkills.map((skill: Skill, index: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-0.5"
                    >
                      {/* Top Header: Original Tech Icon + Name + Percentage Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          {/* Original Brand Tech Icon Box */}
                          <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center p-2 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all shadow-inner shrink-0">
                            <TechIcon name={skill.icon || skill.name} className="w-7 h-7" size={30} />
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-100 text-base group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            {skill.level && (
                              <span className="text-[11px] font-medium text-slate-400">
                                {skill.level}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Percentage Pill */}
                        <div className="flex flex-col items-end">
                          <span className="text-sm sm:text-base font-bold text-cyan-300 px-2.5 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 shadow-sm">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed min-h-[32px]">
                        {skill.description}
                      </p>

                      {/* Progress Bar with Animated Fill */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                          <span>Proficiency</span>
                          <span>{skill.percentage}% / 100%</span>
                        </div>

                        {/* Outer Track */}
                        <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/90 p-[1px] shadow-inner relative">
                          {/* Animated Fill Bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 + (index * 0.08), ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500"
                            style={{
                              backgroundColor: skill.color ? undefined : '#06b6d4'
                            }}
                          >
                            {/* Glowing animated shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-full animate-shimmer" />
                            {/* Leading Edge Point */}
                            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/90 rounded-full shadow-[0_0_6px_#ffffff]" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
