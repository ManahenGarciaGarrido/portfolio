'use client';

import Link from 'next/link';
import {
  Link2, Eye, MousePointer, TrendingUp, Plus,
  ArrowUpRight, Clock, Zap, Crown, BarChart3,
  Palette, QrCode, Settings, ExternalLink
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

const quickActions = [
  { name: 'Añadir Link', href: '/dashboard/links', icon: Plus, color: 'from-purple-500 to-pink-500' },
  { name: 'Ver Analytics', href: '/dashboard/analytics', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cambiar Tema', href: '/dashboard/appearance', icon: Palette, color: 'from-orange-500 to-red-500' },
  { name: 'Generar QR', href: '/dashboard/qr', icon: QrCode, color: 'from-green-500 to-emerald-500' },
];

const recentActivity = [
  { type: 'view', message: 'Tu página recibió 12 visitas', time: 'Hace 5 min' },
  { type: 'click', message: 'Alguien hizo click en "YouTube"', time: 'Hace 15 min' },
  { type: 'view', message: 'Tu página recibió 8 visitas', time: 'Hace 1 hora' },
  { type: 'click', message: 'Alguien hizo click en "Instagram"', time: 'Hace 2 horas' },
];

export default function DashboardPage() {
  const { user } = useUserStore();

  if (!user) return null;

  const totalClicks = user.links.reduce((acc, link) => acc + link.clicks, 0);
  const totalViews = user.analytics?.totalViews || 0;
  const ctr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : '0';

  const topLinks = [...user.links]
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 3);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">
              ¡Hola, {user.displayName.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-400 mt-1">
              Aquí tienes un resumen de tu actividad
            </p>
          </div>

          <Link
            href={`/profile/${user.username}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Ver mi página
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <span className="flex items-center gap-1 text-green-400 text-xs">
                <TrendingUp className="w-3 h-3" />
                +12%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{totalViews.toLocaleString()}</p>
            <p className="text-gray-500 text-sm mt-1">Visitas totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <MousePointer className="w-5 h-5 text-pink-400" />
              </div>
              <span className="flex items-center gap-1 text-green-400 text-xs">
                <TrendingUp className="w-3 h-3" />
                +8%
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{totalClicks.toLocaleString()}</p>
            <p className="text-gray-500 text-sm mt-1">Clicks totales</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{ctr}%</p>
            <p className="text-gray-500 text-sm mt-1">CTR</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{user.links.length}</p>
            <p className="text-gray-500 text-sm mt-1">Links activos</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Acciones rápidas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Links */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Top Links</h2>
              <Link href="/dashboard/links" className="text-purple-400 text-sm hover:text-purple-300 transition">
                Ver todos
              </Link>
            </div>

            {topLinks.length === 0 ? (
              <div className="text-center py-8">
                <Link2 className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500">No tienes links todavía</p>
                <Link
                  href="/dashboard/links"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition"
                >
                  <Plus className="w-4 h-4" />
                  Añadir primer link
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {topLinks.map((link, i) => (
                  <div key={link.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{link.title}</p>
                      <p className="text-gray-500 text-xs truncate">{link.url}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{link.clicks}</p>
                      <p className="text-gray-500 text-xs">clicks</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Actividad reciente</h2>
              <Link href="/dashboard/analytics" className="text-purple-400 text-sm hover:text-purple-300 transition">
                Ver todo
              </Link>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activity.type === 'view' ? 'bg-blue-500/20' : 'bg-pink-500/20'
                  }`}>
                    {activity.type === 'view' ? (
                      <Eye className="w-4 h-4 text-blue-400" />
                    ) : (
                      <MousePointer className="w-4 h-4 text-pink-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">{activity.message}</p>
                    <p className="text-gray-600 text-xs flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upgrade CTA */}
        {!user.isPro && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Desbloquea todo el potencial</h3>
                  <p className="text-gray-400 text-sm">Links ilimitados, analytics avanzados, +20 temas y más</p>
                </div>
              </div>
              <Link
                href="/dashboard/upgrade"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition whitespace-nowrap"
              >
                <Crown className="w-5 h-5" />
                Upgrade a Pro
              </Link>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
