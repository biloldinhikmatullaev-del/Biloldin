import React from 'react';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { name } = portfolioData.developer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-200">{name} — Портфолио веб-разработчика</span>
        </div>

        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>Сделано с</span>
          <Heart className="w-4 h-4 text-indigo-500 fill-indigo-500/20" />
          <span>и чистым кодом на React.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all flex items-center gap-1.5 shadow-sm"
          title="Наверх"
        >
          <span>Наверх</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
