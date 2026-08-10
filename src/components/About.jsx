import React from 'react';
import { UserCheck, Code, Layers, Zap, Smartphone, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { bio } = portfolioData.developer;

  const keyPoints = [
    {
      title: "Чистый и понятный код",
      desc: "Пишу поддерживаемый код на React и JavaScript без хаоса и устаревших библиотек.",
      icon: Code
    },
    {
      title: "100% Мобильный адаптив",
      desc: "Каждый сайт безупречно открывается и работает на смартфонах, планшетах и компьютерах.",
      icon: Smartphone
    },
    {
      title: "Высокая скорость загрузки",
      desc: "Оптимизирую сборку сайтов на Vite для мгновенного отклика и хорошего SEO.",
      icon: Zap
    },
    {
      title: "Готовность к продакшену",
      desc: "Сразу деплою проекты на бесплатный надежный хостинг (Netlify / Vercel) с живым доступом.",
      icon: Layers
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Обо мне</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
            обо мне
          </h2>
        </div>

        {/* Core Bio Card */}
        <div className="max-w-4xl mx-auto pro-card p-6 sm:p-8 mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] tracking-wider uppercase shadow-sm">
            Коротко и по делу
          </div>
          
          <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
            {bio}
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-400">Главная цель — работающий бизнес-инструмент заказчика</span>
            </div>
            <div className="text-gray-500 dark:text-gray-500">
              Стек: <span className="text-gray-900 dark:text-gray-300 font-mono font-semibold">React • Firebase • JavaScript • Netlify • Git</span>
            </div>
          </div>
        </div>

        {/* 4 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="pro-card p-6 hover:border-indigo-500/30 transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold font-display text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
