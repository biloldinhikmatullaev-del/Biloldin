import React from 'react';
import { Globe, ExternalLink, ShoppingCart, CheckSquare, Layers, Cpu, Code2 } from 'lucide-react';

export function ProjectMockup({ project }) {
  const { id, title, liveUrl, previewTheme } = project;

  if (id === 'project-1') {
    // E-Commerce TechGear Mockup
    return (
      <div className="w-full h-full bg-slate-950 flex flex-col font-sans select-none overflow-hidden relative group">
        {/* Browser Top Bar */}
        <div className="h-8 bg-slate-900 border-b border-white/10 px-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <div className="flex-1 max-w-xs mx-auto bg-slate-950/80 border border-white/5 rounded-md px-2 py-0.5 text-[10px] text-slate-400 truncate flex items-center justify-center gap-1">
            <Globe className="w-3 h-3 text-emerald-400" />
            <span>techgear-shop-demo.netlify.app</span>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
        </div>

        {/* E-Commerce App UI Preview */}
        <div className="flex-1 p-4 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 flex flex-col justify-between">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-slate-950 font-bold text-xs">TG</div>
              <span className="text-xs font-bold text-white tracking-tight">TechGear Store</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">Каталог</span>
              <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-300 relative">
                <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 text-slate-950 rounded-full text-[8px] font-bold flex items-center justify-center">3</span>
              </div>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-slate-900/80 p-2 rounded-lg border border-white/10 space-y-1">
              <div className="w-full h-12 rounded bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-[10px] font-semibold text-slate-200 truncate">MacBook Pro 16"</div>
              <div className="text-[9px] font-bold text-emerald-400">$1,999</div>
            </div>

            <div className="bg-slate-900/80 p-2 rounded-lg border border-white/10 space-y-1">
              <div className="w-full h-12 rounded bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center">
                <Layers className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-[10px] font-semibold text-slate-200 truncate">AirPods Max</div>
              <div className="text-[9px] font-bold text-emerald-400">$549</div>
            </div>

            <div className="bg-slate-900/80 p-2 rounded-lg border border-white/10 space-y-1">
              <div className="w-full h-12 rounded bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-[10px] font-semibold text-slate-200 truncate">Smart Watch</div>
              <div className="text-[9px] font-bold text-emerald-400">$299</div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="bg-slate-900/90 p-2 rounded-lg border border-emerald-500/30 flex items-center justify-between text-[10px]">
            <span className="text-slate-300 font-medium">⚡ Firebase Cart & Checkout</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Живой сайт</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'project-2') {
    // Kanban Task App Mockup
    return (
      <div className="w-full h-full bg-slate-950 flex flex-col font-sans select-none overflow-hidden relative group">
        {/* Browser Top Bar */}
        <div className="h-8 bg-slate-900 border-b border-white/10 px-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <div className="flex-1 max-w-xs mx-auto bg-slate-950/80 border border-white/5 rounded-md px-2 py-0.5 text-[10px] text-slate-400 truncate flex items-center justify-center gap-1">
            <Globe className="w-3 h-3 text-emerald-400" />
            <span>taskpulse-app-demo.netlify.app</span>
          </div>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
        </div>

        {/* Kanban Board App UI Preview */}
        <div className="flex-1 p-4 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-950 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white">TaskPulse Kanban</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">React SPA</span>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-slate-900/90 p-2 rounded-lg border border-white/10 space-y-1.5">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>В работе</span>
                <span className="bg-slate-800 text-slate-300 px-1 rounded">2</span>
              </div>
              <div className="bg-slate-850 p-1.5 rounded border border-emerald-500/30 text-[9px] text-slate-200 font-medium">
                Рефакторинг API
              </div>
              <div className="bg-slate-850 p-1.5 rounded border border-white/5 text-[9px] text-slate-300">
                Верстка модалок
              </div>
            </div>

            <div className="bg-slate-900/90 p-2 rounded-lg border border-white/10 space-y-1.5">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-between">
                <span>Готово</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-1 rounded">3</span>
              </div>
              <div className="bg-slate-850 p-1.5 rounded border border-emerald-500/40 text-[9px] text-emerald-300 flex items-center justify-between">
                <span>Авторизация</span>
                <span>✓</span>
              </div>
              <div className="bg-slate-850 p-1.5 rounded border border-emerald-500/40 text-[9px] text-emerald-300 flex items-center justify-between">
                <span>Темная тема</span>
                <span>✓</span>
              </div>
            </div>

            <div className="bg-slate-900/90 p-2 rounded-lg border border-white/10 space-y-1.5">
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                <span>Тесты</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-1 rounded">1</span>
              </div>
              <div className="bg-slate-850 p-1.5 rounded border border-cyan-500/30 text-[9px] text-slate-200">
                Drag-and-Drop
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 p-2 rounded-lg border border-emerald-500/30 flex items-center justify-between text-[10px]">
            <span className="text-slate-300 font-medium">⚡ REST API + Drag & Drop</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Живой сайт</span>
          </div>
        </div>
      </div>
    );
  }

  // Portfolio Site Mockup (Project 3)
  return (
    <div className="w-full h-full bg-slate-950 flex flex-col font-sans select-none overflow-hidden relative group">
      {/* Browser Top Bar */}
      <div className="h-8 bg-slate-900 border-b border-white/10 px-3 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <div className="flex-1 max-w-xs mx-auto bg-slate-950/80 border border-white/5 rounded-md px-2 py-0.5 text-[10px] text-slate-400 truncate flex items-center justify-center gap-1">
          <Globe className="w-3 h-3 text-cyan-400" />
          <span>biloldin-portfolio.netlify.app</span>
        </div>
        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
      </div>

      {/* Portfolio UI Preview */}
      <div className="flex-1 p-4 bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-950 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-cyan-400">&lt;/&gt;</span>
            <span className="text-xs font-bold text-white">Билолдин Portfolio</span>
          </div>
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">Vite + React</span>
        </div>

        <div className="my-2 space-y-2">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-cyan-500/30 space-y-1">
            <div className="text-xs font-bold text-slate-100">Веб-разработчик Билолдин</div>
            <div className="text-[10px] text-slate-400">Создаю быстрыe и продающие веб-сайты</div>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">WhatsApp</span>
              <span className="text-[9px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded font-bold">Telegram</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/90 p-2 rounded-lg border border-cyan-500/30 flex items-center justify-between text-[10px]">
          <span className="text-slate-300 font-medium">⚡ Glassmorphism + Responsive</span>
          <span className="text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded">Текущий сайт</span>
        </div>
      </div>
    </div>
  );
}
