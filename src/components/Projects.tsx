import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, Eye, Sparkles, Building2, Brain, Layout, Utensils, CalendarDays, ShoppingBag, Palette } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ['All', 'Web Applications', 'AI / ML', 'Personal'] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
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
            011 / PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto sm:mx-0" />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-cyan-300 border border-slate-800/80 hover:border-cyan-500/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative glass-panel rounded-3xl border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col justify-between overflow-hidden"
              >
                {/* Custom Interactive Mockup Preview Box */}
                <div className="relative h-48 sm:h-56 bg-slate-900/90 border-b border-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Grid Background inside Card Mockup */}
                  <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                  {/* Header Badge inside Mockup */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                  </div>

                  {/* Center Visual Mockup Accent */}
                  <div className="z-10 flex flex-col items-center justify-center text-center space-y-2 py-2">
                    {project.id === 'proj-csrp' && (
                      <Building2 className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-resume-ai' && (
                      <Brain className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-portfolio' && (
                      <Layout className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-vs-plus' && (
                      <Sparkles className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-bigman' && (
                      <Utensils className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-medium-events' && (
                      <CalendarDays className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-highrise' && (
                      <Building2 className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-neomed' && (
                      <ShoppingBag className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}
                    {project.id === 'proj-chibs' && (
                      <Palette className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                    )}

                    <div className="font-bold text-slate-100 text-sm tracking-tight">
                      {project.title}
                    </div>
                  </div>

                  {/* Footer status inside Mockup */}
                  <div className="flex items-center justify-between z-10 text-[10px] text-slate-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-cyan-400 font-semibold">VIEW MOCKUP →</span>
                  </div>
                </div>

                {/* Card Main Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-700/60 text-cyan-300 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 text-[11px]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-300 hover:text-cyan-200 text-xs font-bold hover:border-cyan-400 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal render */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
