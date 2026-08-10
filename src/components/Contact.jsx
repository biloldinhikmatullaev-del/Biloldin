import React from 'react';
import { MessageSquare, Send, Mail, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

export function Contact() {
  const { whatsapp, telegram, email, github } = portfolioData.contacts;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="pro-card p-8 sm:p-12 relative max-w-4xl mx-auto shadow-md">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Финальный шаг</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
              контакты
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Напишите мне прямо сейчас в мессенджер. Я быстро проанализирую вашу задачу, предложу лучшее решение и рассчитаю стоимость и сроки.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Ответ в течение 10 минут
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Без скрытых доплат
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
            
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-indigo-600 text-white font-bold flex flex-col justify-between space-y-4 shadow-lg shadow-indigo-600/20 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white/80 block uppercase tracking-wider font-display">Главный канал</span>
                <span className="text-lg font-bold font-display">WhatsApp</span>
                <span className="text-xs text-white/90 block pt-1 font-mono">{whatsapp.display}</span>
              </div>
            </a>

            <a
              href={telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 text-gray-900 dark:text-white flex flex-col justify-between space-y-4 hover:bg-white dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98] transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider font-display">Чат / Личка</span>
                <span className="text-lg font-bold font-display text-gray-900 dark:text-white">Telegram</span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 block pt-1 font-mono">{telegram.display}</span>
              </div>
            </a>

            <a
              href={email.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 text-gray-900 dark:text-white flex flex-col justify-between space-y-4 hover:bg-white dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98] transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider font-display">Почта</span>
                <span className="text-lg font-bold font-display text-gray-900 dark:text-white">Email</span>
                <span className="text-xs text-gray-500 block pt-1 font-mono truncate">{email.display}</span>
              </div>
            </a>

            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 text-gray-900 dark:text-white flex flex-col justify-between space-y-4 hover:bg-white dark:hover:bg-gray-700 hover:scale-[1.03] active:scale-[0.98] transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block uppercase tracking-wider font-display">Исходный код</span>
                <span className="text-lg font-bold font-display text-gray-900 dark:text-white">GitHub</span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 block pt-1 font-mono">{github.display}</span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
