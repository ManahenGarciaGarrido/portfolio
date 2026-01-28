'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Sparkles, Zap, Bug, Shield, Palette, BarChart3,
  Globe, Code, Bell, ArrowRight, Calendar, Tag
} from 'lucide-react';

const categories = [
  { name: 'Todos', value: 'all' },
  { name: 'Nuevas funciones', value: 'feature' },
  { name: 'Mejoras', value: 'improvement' },
  { name: 'Correcciones', value: 'fix' },
];

const changelog = [
  {
    version: '2.4.0',
    date: '25 Enero 2026',
    type: 'feature',
    title: 'Nuevos temas de invierno',
    description: 'Hemos añadido 5 nuevos temas inspirados en la temporada de invierno. Incluyen efectos de nieve y paletas de colores frías.',
    icon: Palette,
    items: [
      'Tema Frozen Lake con degradados azul hielo',
      'Tema Northern Lights con animación aurora',
      'Tema Cozy Cabin con colores cálidos',
      'Tema Snowfall con efecto de partículas',
      'Tema Midnight Winter oscuro elegante',
    ],
  },
  {
    version: '2.3.2',
    date: '18 Enero 2026',
    type: 'fix',
    title: 'Correcciones de rendimiento',
    description: 'Mejoras significativas en la velocidad de carga de las páginas de perfil.',
    icon: Zap,
    items: [
      'Reducción del 40% en tiempo de carga inicial',
      'Optimización de imágenes automática',
      'Carga diferida de analytics',
      'Fix en el contador de clicks en tiempo real',
    ],
  },
  {
    version: '2.3.0',
    date: '10 Enero 2026',
    type: 'feature',
    title: 'API v2 disponible',
    description: 'Nueva versión de nuestra API con más endpoints y mejor documentación.',
    icon: Code,
    items: [
      'Nuevo endpoint para gestión de links en batch',
      'Webhooks para eventos de clicks',
      'Rate limits aumentados para planes Pro',
      'SDK oficial para Python y JavaScript',
      'Documentación interactiva con ejemplos',
    ],
  },
  {
    version: '2.2.5',
    date: '3 Enero 2026',
    type: 'improvement',
    title: 'Mejoras en Analytics',
    description: 'Dashboard de analytics renovado con nuevas métricas y visualizaciones.',
    icon: BarChart3,
    items: [
      'Gráficos interactivos con zoom temporal',
      'Mapa de calor de ubicaciones',
      'Exportación a CSV y PDF',
      'Comparativas de períodos',
      'Alertas personalizables',
    ],
  },
  {
    version: '2.2.0',
    date: '20 Diciembre 2025',
    type: 'feature',
    title: 'Dominios personalizados',
    description: 'Ahora puedes usar tu propio dominio para tu página de links.',
    icon: Globe,
    items: [
      'Configuración sencilla de DNS',
      'Certificado SSL automático',
      'Soporte para subdominios',
      'Redirecciones personalizadas',
    ],
  },
  {
    version: '2.1.3',
    date: '15 Diciembre 2025',
    type: 'fix',
    title: 'Correcciones de seguridad',
    description: 'Actualizaciones importantes de seguridad y estabilidad.',
    icon: Shield,
    items: [
      'Actualización de dependencias',
      'Mejoras en autenticación 2FA',
      'Fix en validación de URLs',
      'Protección contra XSS mejorada',
    ],
  },
  {
    version: '2.1.0',
    date: '5 Diciembre 2025',
    type: 'feature',
    title: 'Notificaciones en tiempo real',
    description: 'Recibe alertas instantáneas sobre la actividad de tu página.',
    icon: Bell,
    items: [
      'Notificaciones push en navegador',
      'Alertas por email configurables',
      'Resumen diario/semanal',
      'Integración con Slack',
    ],
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'feature': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'improvement': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'fix': return 'bg-green-500/20 text-green-400 border-green-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'feature': return 'Nueva función';
    case 'improvement': return 'Mejora';
    case 'fix': return 'Corrección';
    default: return type;
  }
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Changelog</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Novedades y actualizaciones
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Mantente al día con todas las mejoras, nuevas funciones y correcciones
            que lanzamos cada semana.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12">
              {changelog.map((entry, i) => (
                <div key={i} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <entry.icon className="w-7 h-7 text-purple-400" />
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(entry.type)}`}>
                        {getTypeLabel(entry.type)}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Tag className="w-3 h-3" />
                        v{entry.version}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-3 h-3" />
                        {entry.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{entry.title}</h3>
                    <p className="text-gray-400 mb-4">{entry.description}</p>

                    <ul className="space-y-2">
                      {entry.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-purple-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
              Cargar más actualizaciones
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <Bell className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            No te pierdas ninguna novedad
          </h2>
          <p className="text-gray-400 mb-6">
            Suscríbete para recibir un resumen semanal de las actualizaciones.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-all"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
