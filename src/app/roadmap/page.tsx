'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Rocket, CheckCircle2, Clock, Sparkles, ArrowRight,
  MessageSquare, ThumbsUp, Calendar, Zap, Globe, Shield,
  Palette, BarChart3, Code, Users, Smartphone, Mail
} from 'lucide-react';

const roadmapItems = [
  {
    quarter: 'Q1 2026',
    status: 'in-progress',
    items: [
      { title: 'App móvil nativa', desc: 'Gestiona tu LinkForge desde iOS y Android', icon: Smartphone, votes: 1247, status: 'in-progress' },
      { title: 'Temas con IA', desc: 'Genera temas personalizados con inteligencia artificial', icon: Sparkles, votes: 892, status: 'planned' },
      { title: 'Integración con Notion', desc: 'Sincroniza tus links con tu workspace de Notion', icon: Zap, votes: 654, status: 'planned' },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'planned',
    items: [
      { title: 'Colaboración en tiempo real', desc: 'Edita tu página junto a tu equipo simultáneamente', icon: Users, votes: 1089, status: 'planned' },
      { title: 'A/B Testing de links', desc: 'Prueba diferentes versiones y optimiza conversiones', icon: BarChart3, votes: 876, status: 'planned' },
      { title: 'Programación avanzada', desc: 'Programa links para fechas y horas específicas', icon: Calendar, votes: 723, status: 'planned' },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    items: [
      { title: 'Marketplace de plugins', desc: 'Extiende LinkForge con plugins de la comunidad', icon: Code, votes: 945, status: 'planned' },
      { title: 'Modo offline', desc: 'Accede a tu dashboard sin conexión a internet', icon: Globe, votes: 534, status: 'planned' },
      { title: 'Encuestas y formularios', desc: 'Añade formularios directamente en tu página', icon: MessageSquare, votes: 678, status: 'planned' },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    items: [
      { title: 'LinkForge para equipos', desc: 'Gestión avanzada para grandes organizaciones', icon: Users, votes: 789, status: 'planned' },
      { title: 'Cumplimiento SOC 2', desc: 'Certificación de seguridad enterprise', icon: Shield, votes: 456, status: 'planned' },
      { title: 'White-label avanzado', desc: 'Personalización completa para agencias', icon: Palette, votes: 623, status: 'planned' },
    ],
  },
];

const completedItems = [
  { title: 'API v2', desc: 'Nueva versión de la API con más endpoints', date: 'Enero 2026' },
  { title: 'Dominios personalizados', desc: 'Usa tu propio dominio para tu página', date: 'Diciembre 2025' },
  { title: '20 nuevos temas', desc: 'Colección de temas premium', date: 'Noviembre 2025' },
  { title: 'Analytics avanzado', desc: 'Dashboard renovado con nuevas métricas', date: 'Octubre 2025' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500/20 text-green-400';
    case 'in-progress': return 'bg-yellow-500/20 text-yellow-400';
    case 'planned': return 'bg-blue-500/20 text-blue-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Completado';
    case 'in-progress': return 'En progreso';
    case 'planned': return 'Planificado';
    default: return status;
  }
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Roadmap</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El futuro de LinkForge
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Descubre en qué estamos trabajando y qué viene próximamente.
            Vota por las funciones que más te interesan.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#suggest"
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Sugerir función
            </Link>
            <Link
              href="/changelog"
              className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
            >
              Ver changelog
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {roadmapItems.map((quarter, i) => (
            <div key={i} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white">{quarter.quarter}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quarter.status)}`}>
                  {getStatusLabel(quarter.status)}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {quarter.items.map((item, j) => (
                  <div
                    key={j}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{item.votes} votos</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Completado recientemente</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {completedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                  <span className="text-gray-600 text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/changelog" className="text-purple-400 hover:text-purple-300 transition-colors">
              Ver todo el historial →
            </Link>
          </div>
        </div>
      </section>

      {/* Suggest Feature */}
      <section id="suggest" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20">
            <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              ¿Tienes una idea?
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Queremos escucharte. Envíanos tu sugerencia y podría aparecer en nuestro roadmap.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Título de la función"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              />
              <textarea
                placeholder="Describe tu idea en detalle..."
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 resize-none"
              />
              <input
                type="email"
                placeholder="Tu email (opcional)"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-all"
              >
                Enviar sugerencia
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
