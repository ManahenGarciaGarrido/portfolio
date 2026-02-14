'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface DemoNavBarProps {
  siteName: string;
  sector: string;
  lang?: 'es' | 'en';
}

export default function DemoNavBar({ siteName, sector, lang = 'es' }: DemoNavBarProps) {
  const backLabel = lang === 'en' ? '← Back to Portfolio' : '← Volver al Portfolio';
  const hireLabel = lang === 'en' ? 'Hire Me' : 'Contratar';
  const demoLabel = lang === 'en' ? 'Demo' : 'Demo';

  const whatsappMsg = encodeURIComponent(
    `Hola Manahen, vi el demo de ${sector} y me interesa algo similar para mi negocio.`
  );
  const whatsappUrl = `https://wa.me/34640038508?text=${whatsappMsg}`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 text-sm"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} />
        <span className="hidden sm:inline">{backLabel}</span>
        <span className="sm:hidden">Portfolio</span>
      </Link>

      <span className="text-white/60 font-medium truncate max-w-[140px] sm:max-w-none">
        {siteName}
      </span>

      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-white/40 text-xs px-2 py-0.5 rounded border border-white/20">
          {demoLabel}
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
        >
          {hireLabel}
        </a>
      </div>
    </nav>
  );
}
