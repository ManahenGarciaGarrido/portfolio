'use client';

import Link from 'next/link';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

const footerLinks = {
  es: [
    { href: '/', label: 'Inicio' },
    { href: '/portafolio', label: 'Portfolio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proceso', label: 'Proceso' },
    { href: '/sobre-mi', label: 'Sobre mí' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/privacidad', label: 'Privacidad' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/portafolio', label: 'Portfolio' },
    { href: '/servicios', label: 'Services' },
    { href: '/proceso', label: 'Process' },
    { href: '/sobre-mi', label: 'About' },
    { href: '/contacto', label: 'Contact' },
    { href: '/privacidad', label: 'Privacy' },
  ],
};

export default function SiteFooter() {
  const [lang] = useLang();
  const links = footerLinks[lang];

  return (
    <footer
      className="py-10 sm:py-14 px-4 sm:px-6 border-t border-white/8"
      style={{ background: '#040010' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8">
          {/* Brand */}
          <div>
            <p
              className="font-black text-lg mb-1"
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Manahen García Garrido
            </p>
            <p className="text-white/30 text-sm">
              {lang === 'es' ? 'Desarrollador Web Freelance' : 'Freelance Web Developer'}
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/ManahenGarciaGarrido', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/manahen-garcia-garrido-71524b1a0/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/manahengarcia10/', label: 'Instagram' },
              {
                icon: MessageCircle,
                href: 'https://wa.me/34640038508?text=Hola+Manahen%2C+vi+tu+portfolio+y+me+interesa+hablar',
                label: 'WhatsApp',
              },
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
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-white/20 text-xs">
          {lang === 'es'
            ? `© ${new Date().getFullYear()} Manahen García Garrido · Hecho con Next.js + Framer Motion`
            : `© ${new Date().getFullYear()} Manahen García Garrido · Built with Next.js + Framer Motion`}
        </p>
      </div>
    </footer>
  );
}
