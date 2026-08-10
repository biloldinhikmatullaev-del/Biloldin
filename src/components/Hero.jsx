import React, { useState } from 'react';
import { Send, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ParticleWave } from './ui/particle-wave';
export function Hero() {
  const { name, status } = portfolioData.developer;
  const { whatsapp, telegram } = portfolioData.contacts;
  const [contactInput, setContactInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickConnect = (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    
    const text = encodeURIComponent(`Привет, Билолдин! Мои контакты: ${contactInput}. Хочу обсудить разработку сайта.`);
    window.open(`https://wa.me/996555123456?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <div className="pro-card relative p-8 sm:p-12 lg:p-16 group/hero overflow-hidden">
        <ParticleWave className="opacity-30 dark:opacity-40 transition-opacity duration-700 pointer-events-none" />
        
        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>{status}</span>
            </div>

            {/* BOLD HEADLINE */}
            <h1 
              className="font-display font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
            >
              СОЗДАЮ ЦИФРОВЫЕ ПРОДУКТЫ, САЙТЫ И ОПЫТ.
            </h1>

            {/* SUBTITLE */}
            <div className="space-y-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl font-normal leading-relaxed">
              <p>
                Я <strong className="text-gray-900 dark:text-white font-semibold">{name}</strong> — Веб-разработчик и Фронтенд-специалист.
              </p>
              <p>
                Специализируюсь на UI/UX, чистой архитектуре на React и создании корпоративных сайтов под ключ.
              </p>
            </div>

            {/* INPUT + CONNECT BUTTON ROW */}
            <form onSubmit={handleQuickConnect} className="pt-2 max-w-lg">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 p-1.5 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-800 focus-within:border-indigo-500 dark:focus-within:border-indigo-500 transition-all shadow-sm">
                <input
                  type="text"
                  placeholder="Ваша почта или WhatsApp..."
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-display text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Отправлено!</span>
                    </>
                  ) : (
                    <>
                      <span>Связаться со мной</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* DIRECT MESSENGER BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm font-medium">
              <span className="text-gray-500 dark:text-gray-400">Быстрый отклик:</span>
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <a
                href={telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram (@biloldin_dev)</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE PORTRAIT IMAGE CARD */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            <div className="w-full max-w-sm sm:max-w-md rounded-3xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-6 shadow-xl space-y-6">
              
              <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-gray-50 dark:bg-gray-900 overflow-hidden flex flex-col items-center justify-center p-6 text-center group border border-gray-100 dark:border-gray-800">
                
                <div className="relative z-10 space-y-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-indigo-50 dark:bg-indigo-900/30 p-2 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-display font-extrabold text-white shadow-inner">
                      Б
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">{name}</h3>
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full inline-block border border-indigo-100 dark:border-indigo-500/20">
                      Веб-разработчик • React
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 px-5 text-xs flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                  <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    Доступен к заказу
                  </span>
                  <span className="font-mono text-gray-500 dark:text-gray-400 font-medium">Бишкек / Удаленно</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] uppercase font-bold tracking-wider">Специализация</span>
                  <div className="font-bold text-gray-900 dark:text-white">React & Web App</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 space-y-1">
                  <span className="text-gray-500 dark:text-gray-400 text-[10px] uppercase font-bold tracking-wider">Качество</span>
                  <div className="font-bold text-gray-900 dark:text-white">100% Адаптив</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

