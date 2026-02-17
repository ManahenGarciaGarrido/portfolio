'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLang, type Lang } from '@/hooks/useLang';

const navLinks = {
  es: [
    { href: '/', label: 'Inicio' },
    { href: '/portafolio', label: 'Portfolio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proceso', label: 'Proceso' },
    { href: '/sobre-mi', label: 'Sobre mí' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/portafolio', label: 'Portfolio' },
    { href: '/servicios', label: 'Services' },
    { href: '/proceso', label: 'Process' },
    { href: '/sobre-mi', label: 'About' },
  ],
};

export default function Navbar() {
  const [lang, setLang] = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = navLinks[lang];
  const ctaLabel = lang === 'es' ? 'Contactar' : 'Contact';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5,0,16,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-lg tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Manahen<span className="text-white/30">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
                  background: active ? 'rgba(108,0,255,0.15)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <div className="hidden sm:flex rounded-full overflow-hidden border border-white/15 text-xs font-semibold">
            {(['es', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1.5 transition-colors"
                style={{
                  background: lang === l ? 'rgba(255,255,255,0.15)' : 'transparent',
                  color: lang === l ? '#fff' : 'rgba(255,255,255,0.35)',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contacto"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
          >
            <MessageCircle size={13} />
            {ctaLabel}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/8 px-4 py-4 space-y-1"
          style={{ background: 'rgba(5,0,16,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                  background: active ? 'rgba(108,0,255,0.15)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/8 flex items-center justify-between">
            {/* Mobile lang toggle */}
            <div className="flex rounded-full overflow-hidden border border-white/15 text-xs font-semibold">
              {(['es', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1.5 transition-colors"
                  style={{
                    background: lang === l ? 'rgba(255,255,255,0.15)' : 'transparent',
                    color: lang === l ? '#fff' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href="/contacto"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
            >
              <MessageCircle size={13} />
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
