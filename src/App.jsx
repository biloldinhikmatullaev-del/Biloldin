import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare, Send } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

export function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative transition-colors duration-500">
      {/* Sticky Header */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="space-y-4">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Quick Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:hidden">
        <a
          href={portfolioData.contacts.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all"
          title="Написать в WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href={portfolioData.contacts.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all"
          title="Написать в Telegram"
        >
          <Send className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
