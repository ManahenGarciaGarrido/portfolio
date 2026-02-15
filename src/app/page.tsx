'use client';

import { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Hero from '@/components/portfolio/Hero';
import DemoGrid from '@/components/portfolio/DemoGrid';
import Skills from '@/components/portfolio/Skills';
import Contact from '@/components/portfolio/Contact';

export default function PortfolioPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="relative" style={{ background: '#050010' }}>
      {/* Language toggle */}
      <div className="fixed top-4 right-4 z-[60] flex rounded-full overflow-hidden border border-white/20 text-xs font-semibold">
        <button
          onClick={() => setLang('es')}
          className={`px-3 py-1.5 transition-colors ${lang === 'es' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}
        >
          ES
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}
        >
          EN
        </button>
      </div>

      <Hero lang={lang} />
      <DemoGrid lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />

      {/* Footer */}
      <footer
        className="py-8 sm:py-10 px-4 sm:px-6 border-t border-white/10 text-center"
        style={{ background: '#040010' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/70 font-semibold mb-1">Manahen García Garrido</p>
          <p className="text-white/30 text-sm mb-4">
            {lang === 'es' ? 'Desarrollador Web Freelance' : 'Freelance Web Developer'}
          </p>
          <div className="flex items-center justify-center gap-5 mb-6">
            {[
              { icon: Github, href: 'https://github.com/ManahenGarciaGarrido', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/manahengarcia10/', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs">
            {lang === 'es'
              ? `© ${new Date().getFullYear()} Hecho con Next.js + Framer Motion`
              : `© ${new Date().getFullYear()} Built with Next.js + Framer Motion`}
          </p>
        </div>
      </footer>
    </div>
  );
}
