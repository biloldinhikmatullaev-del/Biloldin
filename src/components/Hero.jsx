import React, { useState } from 'react';
import { Send, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const { name, status, location } = portfolioData.developer;
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
      
      {/* Hero Rounded Container */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-white/15 shadow-2xl overflow-hidden">
        
        {/* Giant Watermark Background Text */}
        <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none select-none overflow-hidden opacity-10 z-0">
          <span className="font-display font-black text-[15vw] sm:text-[13vw] leading-none tracking-tighter uppercase text-slate-100 whitespace-nowrap">
            BILOLDIN
          </span>
          <span className="font-display font-black text-[15vw] sm:text-[13vw] leading-none tracking-tighter uppercase text-emerald-400 whitespace-nowrap">
            DEVELOPER
          </span>
          <span className="font-display font-black text-[15vw] sm:text-[13vw] leading-none tracking-tighter uppercase text-slate-100 whitespace-nowrap">
            REACT DEV
          </span>
        </div>

        {/* Glow Orbs */}
        <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{status}</span>
            </div>

            {/* BOLD HEADLINE */}
            <h1 
              className="font-display font-black text-white tracking-tight leading-[1.08]"
              style={{ fontSize: 'clamp(1.85rem, 5.2vw, 3.85rem)' }}
            >
              СОЗДАЮ ЦИФРОВЫЕ ПРОДУКТЫ, САЙТЫ И ОПЫТ.
            </h1>

            {/* SUBTITLE */}
            <div className="space-y-2 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
              <p>
                Я <strong className="text-white font-semibold">{name}</strong> — Веб-разработчик и Фронтенд-специалист.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Специализируюсь на UI/UX верстке, быстрой разработке на React и создании сайтов под ключ.
              </p>
            </div>

            {/* INPUT + CONNECT BUTTON ROW */}
            <form onSubmit={handleQuickConnect} className="pt-2 max-w-lg">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 p-1.5 rounded-2xl bg-slate-950/90 border border-white/20 focus-within:border-emerald-500 transition-all shadow-2xl backdrop-blur-md">
                <input
                  type="text"
                  placeholder="Ваша почта или номер WhatsApp..."
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
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
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <span className="text-slate-500">Быстрый отклик:</span>
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram (@biloldin_dev)</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE PORTRAIT IMAGE CARD */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-slate-950/90 border border-white/20 p-6 shadow-2xl space-y-6 overflow-hidden backdrop-blur-md">
              <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/50 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                
                <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-emerald-400"></div>

                <div className="relative z-10 space-y-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-1 shadow-xl">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-3xl font-display font-extrabold text-white">
                      Б
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white">{name}</h3>
                    <p className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full inline-block border border-emerald-500/20">
                      Веб-разработчик • React
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-xs py-2 px-4 text-[11px] text-slate-400 flex items-center justify-between border-t border-white/10">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Доступен к заказу
                  </span>
                  <span className="font-mono text-emerald-300">{location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 space-y-0.5">
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Специализация</span>
                  <div className="font-bold text-emerald-300">React & Web App</div>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 space-y-0.5">
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Качество</span>
                  <div className="font-bold text-emerald-400">100% Адаптив</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
