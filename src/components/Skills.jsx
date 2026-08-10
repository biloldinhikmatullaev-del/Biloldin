import React from 'react';
import { 
  Code2, 
  FileJson, 
  Layout, 
  Palette, 
  Flame, 
  GitBranch, 
  Globe, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileJson,
  Layout,
  Palette,
  Flame,
  GitBranch,
  Globe,
  Cpu
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text and Skills */}
          <div className="flex flex-col items-start text-left space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Навыки и стек</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
                навыки
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Современный набор технологий, используемый при создании проектов. Без морально устаревшего кода.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {skills.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon] || Code2;

                return (
                  <div
                    key={idx}
                    className="pro-card p-4 hover:border-indigo-500/30 hover:-translate-y-1 transition-all flex items-center gap-4 group shadow-sm bg-white/50 dark:bg-slate-900/50"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 shadow-sm transition-all">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className="text-sm font-bold font-display text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                        {skill.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate mt-0.5">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-white/10 transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1">
              <img 
                src="/skills-preview.jpg" 
                alt="Modern Tech Dashboard Preview" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
