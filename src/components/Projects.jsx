import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('Все');

  const categories = ['Все', 'React', 'Firebase', 'E-Commerce', 'Web App'];

  const filteredProjects = filter === 'Все'
    ? projects
    : projects.filter(p => p.type === filter || p.techStack.includes(filter));

  const handleLinkClick = (e, url) => {
    if (url.includes('demo.netlify.app') || url.includes('biloldin-portfolio') || url.includes('github.com/biloldin/')) {
      e.preventDefault();
      alert('Это демонстрационная ссылка-заглушка! Чтобы она работала, замените ее на свою настоящую ссылку в файле src/data/portfolioData.js');
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>Каталог работ</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
            проекты
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Каждая карточка содержит ссылку на работающий сайт и открытый код на GitHub. Нажмите на скриншот или кнопку, чтобы протестировать проекты в реальном времени.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-display shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                {cat === 'Все' ? 'Все проекты (3)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="pro-card flex flex-col group shadow-sm"
            >
              
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(e, project.liveUrl)}
                className="relative w-full h-56 block overflow-hidden rounded-t-[inherit] bg-gray-100 dark:bg-gray-900 cursor-pointer transition-opacity"
                title={`Открыть живой сайт: ${project.title}`}
              >
                <img 
                  src={`/screenshots/${project.id}.jpg`} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-indigo-700 dark:text-white font-bold text-sm z-10">
                  <ExternalLink className="w-5 h-5" />
                  <span>Открыть живой сайт ↗</span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/40 flex items-center gap-1.5 shadow-sm font-display">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    {project.badge}
                  </span>
                </div>
              </a>

              <div className="p-3 flex-1 flex flex-col justify-between space-y-4 bg-transparent">
                <div className="bg-white/50 dark:bg-[#1e293b]/50 h-full rounded-[1.25rem] p-6 flex flex-col justify-between border border-transparent group-hover:border-indigo-500/20 transition-colors">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => handleLinkClick(e, project.liveUrl)}>
                        {project.title}
                      </a>
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                      {project.shortDesc}
                    </p>

                    <div className="text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start gap-2.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{project.roleDesc}</span>
                    </div>
                  </div>

                  <div className="space-y-5 pt-5 mt-5 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLinkClick(e, project.liveUrl)}
                        className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Живой сайт</span>
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLinkClick(e, project.liveUrl)}
                        className="w-full py-3 px-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-display font-bold text-xs flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-sm"
                      >
                        <GithubIcon className="w-4 h-4 text-gray-900 dark:text-gray-300" />
                        <span>Код на GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-gray-600 dark:text-gray-300 shadow-sm">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span>Все проекты выложены на хостинг и готовы к мгновенному тестированию со смартфона или ПК.</span>
        </div>

      </div>
    </section>
  );
}
