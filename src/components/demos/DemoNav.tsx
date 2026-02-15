'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

interface DemoNavProps {
  brand: string;
  basePath: string;
  links: NavLink[];
  accentColor: string;
  bgColor: string;
  textColor: string;
  sector: string;
}

export default function DemoNav({
  brand,
  basePath,
  links,
  accentColor,
  bgColor,
  textColor,
  sector,
}: DemoNavProps) {
  const [open, setOpen] = useState(false);
  const whatsappMsg = encodeURIComponent(
    `Hola Manahen, vi el demo de ${sector} y me interesa algo similar para mi negocio.`
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: bgColor, borderBottom: `1px solid ${accentColor}22` }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href={basePath}
            className="font-black text-lg tracking-tight"
            style={{ color: textColor }}
          >
            {brand}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold transition-colors hover:opacity-70"
                style={{ color: textColor + 'cc' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/34640038508?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-xs font-bold px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{ background: accentColor, color: bgColor === '#fff' || bgColor === '#fdf5e6' || bgColor === '#fff9f0' ? '#000' : '#fff' }}
            >
              Contratar
            </a>
            <Link
              href="/"
              className="hidden lg:flex items-center gap-1 text-xs opacity-40 hover:opacity-70 transition-opacity"
              style={{ color: textColor }}
            >
              <ArrowLeft size={11} />
              Portfolio
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setOpen(!open)}
              style={{ color: textColor }}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden border-t px-4 py-4 flex flex-col gap-1"
            style={{ background: bgColor, borderColor: accentColor + '33' }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold py-3 border-b"
                style={{ color: textColor, borderColor: accentColor + '15' }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/34640038508?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm font-bold px-4 py-3 rounded-full"
              style={{ background: accentColor, color: '#000' }}
            >
              Contratar web similar
            </a>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-center text-xs opacity-40 py-1"
              style={{ color: textColor }}
            >
              ← Volver al Portfolio
            </Link>
          </div>
        )}
      </header>
      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
