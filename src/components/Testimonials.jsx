import React from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Отзывы</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
            отзывы клиентов
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm sm:text-base">
            Что говорят заказчики о совместной работе и результатах.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="pro-card p-6 shadow-sm space-y-4 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold font-display text-gray-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-bold font-display shadow-sm">
                  {item.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
