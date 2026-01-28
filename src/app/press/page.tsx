'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Newspaper, Download, ArrowRight, Mail, Calendar,
  ExternalLink, FileText, Image, Quote, Users
} from 'lucide-react';

const pressReleases = [
  {
    date: '15 Enero 2026',
    title: 'LinkForge alcanza 1 millón de usuarios activos',
    summary: 'La plataforma de links celebra un hito importante en su crecimiento.',
    link: '#',
  },
  {
    date: '10 Diciembre 2025',
    title: 'LinkForge cierra ronda Serie A de €10M',
    summary: 'Liderada por Accel, la ronda financiará la expansión internacional.',
    link: '#',
  },
  {
    date: '25 Octubre 2025',
    title: 'Lanzamiento de LinkForge para Enterprise',
    summary: 'Nueva solución para empresas con funciones avanzadas de seguridad.',
    link: '#',
  },
  {
    date: '5 Septiembre 2025',
    title: 'LinkForge presenta su nueva API v2',
    summary: 'La nueva API ofrece más endpoints y mejor rendimiento.',
    link: '#',
  },
];

const mediaKit = [
  { name: 'Logo (SVG)', size: '24 KB', icon: Image },
  { name: 'Logo (PNG)', size: '156 KB', icon: Image },
  { name: 'Brand Guidelines', size: '2.4 MB', icon: FileText },
  { name: 'Product Screenshots', size: '8.5 MB', icon: Image },
  { name: 'Founder Photos', size: '4.2 MB', icon: Image },
  { name: 'Company Fact Sheet', size: '320 KB', icon: FileText },
];

const coverage = [
  { outlet: 'TechCrunch', title: 'LinkForge is the Linktree killer you\'ve been waiting for', date: 'Enero 2026' },
  { outlet: 'The Verge', title: 'How LinkForge is changing the creator economy', date: 'Diciembre 2025' },
  { outlet: 'Forbes', title: 'The startup making link-in-bio beautiful again', date: 'Noviembre 2025' },
  { outlet: 'Wired', title: 'LinkForge raises €10M to take on Linktree', date: 'Diciembre 2025' },
];

const stats = [
  { value: '1M+', label: 'Usuarios activos' },
  { value: '50M+', label: 'Clicks mensuales' },
  { value: '€10M', label: 'Financiación total' },
  { value: '100+', label: 'Países' },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Newspaper className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Sala de Prensa</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Noticias y recursos para medios
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Todo lo que necesitas saber sobre LinkForge. Descarga recursos,
            consulta notas de prensa y contacta con nuestro equipo de comunicación.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#media-kit"
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Descargar Media Kit
            </Link>
            <Link
              href="mailto:press@linkforge.io"
              className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contacto de prensa
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Notas de prensa</h2>

          <div className="space-y-4">
            {pressReleases.map((release, i) => (
              <a
                key={i}
                href={release.link}
                className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {release.date}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{release.summary}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">En los medios</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {coverage.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-purple-400 font-medium">{item.outlet}</span>
                <h3 className="text-white font-medium mt-1">"{item.title}"</h3>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Media Kit</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaKit.map((item, i) => (
              <button
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-gray-500 text-sm">{item.size}</span>
                </div>
                <Download className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
            <div className="flex items-center gap-4">
              <Download className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-white font-semibold">Descargar todo el Media Kit</h3>
                <p className="text-gray-400 text-sm">Todos los recursos en un archivo ZIP (15.6 MB)</p>
              </div>
              <button className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
                Descargar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Sobre LinkForge</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-4">
              LinkForge es la plataforma líder para crear páginas de enlaces personalizadas.
              Fundada en 2024 en Barcelona, la empresa ha crecido hasta servir a más de
              1 millón de usuarios activos en más de 100 países.
            </p>
            <p className="text-gray-400 mb-4">
              Nuestra misión es ayudar a creadores, marcas y empresas a maximizar su
              presencia online con herramientas simples pero potentes para gestionar
              todos sus enlaces en un solo lugar.
            </p>
            <p className="text-gray-400">
              LinkForge ha recaudado €10M en financiación de inversores como Accel,
              Point Nine y business angels del ecosistema tech europeo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Contacto de prensa
          </h2>
          <p className="text-gray-400 mb-6">
            Para consultas de medios, entrevistas o información adicional.
          </p>
          <a
            href="mailto:press@linkforge.io"
            className="text-purple-400 hover:text-purple-300 text-lg font-medium"
          >
            press@linkforge.io
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
