'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3, TrendingUp, TrendingDown, Eye, MousePointer,
  Globe, Smartphone, Monitor, Clock, Calendar, Crown,
  ArrowUpRight, Users, MapPin, Link2
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

const periods = [
  { label: '7 días', value: '7d' },
  { label: '30 días', value: '30d' },
  { label: '90 días', value: '90d' },
  { label: 'Este año', value: '1y' },
];

const mockChartData = [
  { day: 'Lun', views: 45, clicks: 12 },
  { day: 'Mar', views: 52, clicks: 18 },
  { day: 'Mié', views: 38, clicks: 8 },
  { day: 'Jue', views: 65, clicks: 24 },
  { day: 'Vie', views: 78, clicks: 32 },
  { day: 'Sáb', views: 92, clicks: 41 },
  { day: 'Dom', views: 85, clicks: 38 },
];

const mockCountries = [
  { name: 'España', percentage: 45, flag: '🇪🇸' },
  { name: 'México', percentage: 22, flag: '🇲🇽' },
  { name: 'Argentina', percentage: 15, flag: '🇦🇷' },
  { name: 'Colombia', percentage: 10, flag: '🇨🇴' },
  { name: 'Otros', percentage: 8, flag: '🌍' },
];

const mockDevices = [
  { name: 'Móvil', percentage: 68, icon: Smartphone },
  { name: 'Desktop', percentage: 28, icon: Monitor },
  { name: 'Tablet', percentage: 4, icon: Monitor },
];

const mockReferrers = [
  { source: 'Instagram', visits: 234, percentage: 45 },
  { source: 'Twitter', visits: 156, percentage: 30 },
  { source: 'Directo', visits: 89, percentage: 17 },
  { source: 'Otros', visits: 42, percentage: 8 },
];

export default function AnalyticsPage() {
  const { user } = useUserStore();
  const [period, setPeriod] = useState('7d');

  if (!user) return null;

  const totalClicks = user.links.reduce((acc, link) => acc + link.clicks, 0);
  const totalViews = user.analytics?.totalViews || 0;
  const ctr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : '0';

  const maxChartValue = Math.max(...mockChartData.map(d => d.views));

  const topLinks = [...user.links]
    .sort((a, b) => b.clicks - a.clicks)
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
              <span className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                +18%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{totalViews.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Visitas totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <MousePointer className="w-8 h-8 text-pink-400" />
              <span className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                +12%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{totalClicks.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Clicks totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <span className="flex items-center gap-1 text-red-400 text-sm">
                <TrendingDown className="w-4 h-4" />
                -2%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{ctr}%</p>
            <p className="text-gray-400 text-sm">Click-through rate</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-400" />
              <span className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                +25%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">847</p>
            <p className="text-gray-400 text-sm">Visitantes únicos</p>
          </div>
        </div>

        {/* Chart */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6">Visitas y Clicks</h2>

          <div className="h-64 flex items-end gap-2">
            {mockChartData.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 h-48 items-end">
                  <div
                    className="flex-1 bg-blue-500/50 rounded-t-lg transition-all"
                    style={{ height: `${(day.views / maxChartValue) * 100}%` }}
                    title={`${day.views} visitas`}
                  />
                  <div
                    className="flex-1 bg-pink-500/50 rounded-t-lg transition-all"
                    style={{ height: `${(day.clicks / maxChartValue) * 100}%` }}
                    title={`${day.clicks} clicks`}
                  />
                </div>
                <span className="text-gray-500 text-xs">{day.day}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-500" />
              <span className="text-gray-400 text-sm">Visitas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-pink-500" />
              <span className="text-gray-400 text-sm">Clicks</span>
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
                <p className="text-gray-400 text-center py-4">No hay links todavía</p>
              ) : (
                topLinks.map((link, i) => (
                  <div key={link.id} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate">{link.title}</p>
                    </div>
                    <span className="text-gray-400">{link.clicks} clicks</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Countries */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              Ubicación
            </h2>
            <div className="space-y-3">
              {mockCountries.map((country, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{country.name}</span>
                      <span className="text-gray-400">{country.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Devices */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">Dispositivos</h2>
            <div className="space-y-4">
              {mockDevices.map((device, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <device.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{device.name}</span>
                      <span className="text-gray-400">{device.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referrers */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">Fuentes de Tráfico</h2>
            <div className="space-y-3">
              {mockReferrers.map((ref, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white">{ref.source}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{ref.visits} visitas</span>
                    <span className="text-purple-400 font-medium">{ref.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
