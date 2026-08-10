import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Process() {
  const { processSteps } = portfolioData;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Процесс работы</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
            как я работаю
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl">
            Понятный и прозрачный процесс разработки без задержек. От идеи до опубликованного сайта в интернете.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className="pro-card p-6 hover:border-indigo-500/30 transition-all space-y-4 relative group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-display font-black text-indigo-600 dark:text-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {stepItem.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
