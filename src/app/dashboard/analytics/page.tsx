'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3, TrendingUp, Eye, MousePointer,
  Globe, Smartphone, Monitor, Crown,
  Users, MapPin, Link2, Clock
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

const periods = [
  { label: '7 días', value: '7d' },
  { label: '30 días', value: '30d' },
  { label: '90 días', value: '90d' },
  { label: 'Este año', value: '1y' },
];

export default function AnalyticsPage() {
  const { user, checkAuth } = useUserStore();
  const [period, setPeriod] = useState('7d');

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!user) return null;

  const totalClicks = user.links.reduce((acc, link) => acc + (link.clicks || 0), 0);
  const totalViews = user.analytics?.totalViews || 0;
  const ctr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : '0';

  const topLinks = [...user.links]
    .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
    .slice(0, 5);

  if (!user.isPro) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Analytics Avanzados
            </h1>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Desbloquea insights detallados sobre tu audiencia, ubicación geográfica,
              dispositivos, fuentes de tráfico y mucho más.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { icon: Globe, title: 'Ubicación', desc: 'De dónde vienen tus visitas' },
                { icon: Smartphone, title: 'Dispositivos', desc: 'Móvil, desktop y más' },
                { icon: TrendingUp, title: 'Tendencias', desc: 'Gráficos históricos' },
              ].map((feature, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <feature.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-medium">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/dashboard/upgrade"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
            >
              <Crown className="w-5 h-5" />
              Upgrade a Pro - €9.99/mes
            </Link>

            {/* Basic Stats */}
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-white mb-6">Estadísticas básicas</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Eye className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-3xl font-bold text-white">{totalViews}</p>
                  <p className="text-gray-400 text-sm">Visitas</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <MousePointer className="w-8 h-8 text-pink-400 mb-2" />
                  <p className="text-3xl font-bold text-white">{totalClicks}</p>
                  <p className="text-gray-400 text-sm">Clicks</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-3xl font-bold text-white">{ctr}%</p>
                  <p className="text-gray-400 text-sm">CTR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="text-gray-400 mt-1">Métricas detalladas de tu página</p>
          </div>

          <div className="flex gap-2">
            {periods.map((p) => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  period === p.value
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white">{totalViews.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Visitas totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <MousePointer className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-3xl font-bold text-white">{totalClicks.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Clicks totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white">{ctr}%</p>
            <p className="text-gray-400 text-sm">Click-through rate</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">{user.links.length}</p>
            <p className="text-gray-400 text-sm">Links activos</p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6">Visitas y Clicks</h2>

          <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
            <div className="text-center">
              <Clock className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 mb-2">Gráfico de tendencias</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Aquí aparecerá un gráfico con la evolución de visitas y clicks a lo largo del tiempo cuando tengas más datos.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Links */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">Top Links</h2>
            <div className="space-y-3">
              {topLinks.length === 0 ? (
                <div className="text-center py-8">
                  <Link2 className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No hay links todavía</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Añade links para ver cuáles tienen más clicks
                  </p>
                </div>
              ) : (
                topLinks.map((link, i) => (
                  <div key={link.id} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate">{link.title}</p>
                    </div>
                    <span className="text-gray-400">{link.clicks || 0} clicks</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Countries Placeholder */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              Ubicación
            </h2>
            <div className="h-48 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <div className="text-center">
                <Globe className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 mb-1">Datos de ubicación</p>
                <p className="text-gray-600 text-sm max-w-xs">
                  Aquí verás de qué países provienen tus visitas.
                </p>
              </div>
            </div>
          </div>

          {/* Devices Placeholder */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">Dispositivos</h2>
            <div className="h-48 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-3">
                  <Smartphone className="w-8 h-8 text-gray-600" />
                  <Monitor className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-gray-400 mb-1">Desglose por dispositivo</p>
                <p className="text-gray-600 text-sm max-w-xs">
                  Aquí verás si tus visitantes usan móvil, desktop o tablet.
                </p>
              </div>
            </div>
          </div>

          {/* Referrers Placeholder */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">Fuentes de Tráfico</h2>
            <div className="h-48 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <div className="text-center">
                <TrendingUp className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 mb-1">Origen del tráfico</p>
                <p className="text-gray-600 text-sm max-w-xs">
                  Aquí verás desde qué redes sociales o sitios llegan tus visitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
