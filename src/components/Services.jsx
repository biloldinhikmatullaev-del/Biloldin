import React from 'react';
import { Briefcase, Check, Clock, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Услуги и стоимость</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-900 dark:text-white tracking-tighter lowercase">
            услуги и тарифы
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm sm:text-base">
            Фиксированная стоимость и чёткие сроки. Без скрытых платежей.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="pro-card p-1 transition-all group shadow-sm flex flex-col"
            >
              {/* Inner content wrapper for premium feel */}
              <div className="bg-white/50 dark:bg-[#1e293b]/50 h-full rounded-[1.25rem] p-6 flex flex-col justify-between border border-transparent group-hover:border-indigo-500/20 transition-colors">
                
                <div>
                  {/* Top Bar: Icon & Price */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="block text-lg font-bold font-display text-gray-900 dark:text-white">
                        {service.price}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-end gap-1 font-medium mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {service.time}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features List with custom bullets */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                          <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <a
                  href={portfolioData.contacts.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-800 font-display text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
                >
                  <span>Заказать проект</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
