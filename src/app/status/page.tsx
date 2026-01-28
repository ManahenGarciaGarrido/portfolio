'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  CheckCircle2, AlertCircle, XCircle, Clock,
  Server, Database, Globe, Zap, Shield, Bell,
  ArrowRight, RefreshCw
} from 'lucide-react';

const services = [
  { name: 'Web App', status: 'operational', uptime: '99.99%', icon: Globe },
  { name: 'API', status: 'operational', uptime: '99.98%', icon: Server },
  { name: 'Base de datos', status: 'operational', uptime: '99.99%', icon: Database },
  { name: 'CDN', status: 'operational', uptime: '100%', icon: Zap },
  { name: 'Autenticación', status: 'operational', uptime: '99.99%', icon: Shield },
  { name: 'Analytics', status: 'operational', uptime: '99.95%', icon: Clock },
];

const incidents = [
  {
    date: '20 Enero 2026',
    title: 'Mantenimiento programado completado',
    status: 'resolved',
    description: 'Actualización de infraestructura completada exitosamente. No hubo tiempo de inactividad.',
    updates: [
      { time: '04:00', message: 'Inicio del mantenimiento programado' },
      { time: '04:45', message: 'Actualización de base de datos completada' },
      { time: '05:00', message: 'Mantenimiento finalizado, todos los sistemas operativos' },
    ],
  },
  {
    date: '15 Enero 2026',
    title: 'Latencia elevada en API',
    status: 'resolved',
    description: 'Detectamos latencia elevada en algunos endpoints de la API. El problema fue identificado y resuelto.',
    updates: [
      { time: '14:23', message: 'Detectada latencia elevada en API' },
      { time: '14:35', message: 'Equipo investigando el problema' },
      { time: '14:52', message: 'Problema identificado: sobrecarga en cache' },
      { time: '15:10', message: 'Solución implementada, latencia normalizada' },
    ],
  },
  {
    date: '8 Enero 2026',
    title: 'Problema con notificaciones email',
    status: 'resolved',
    description: 'Algunos usuarios no recibieron notificaciones por email durante un período de 2 horas.',
    updates: [
      { time: '10:00', message: 'Reportes de emails no recibidos' },
      { time: '10:15', message: 'Confirmado problema con proveedor de email' },
      { time: '11:45', message: 'Proveedor resuelve el problema' },
      { time: '12:00', message: 'Servicio de email restaurado completamente' },
    ],
  },
];

const uptimeHistory = [
  { date: 'Ene 28', status: 'operational' },
  { date: 'Ene 27', status: 'operational' },
  { date: 'Ene 26', status: 'operational' },
  { date: 'Ene 25', status: 'operational' },
  { date: 'Ene 24', status: 'operational' },
  { date: 'Ene 23', status: 'operational' },
  { date: 'Ene 22', status: 'operational' },
  { date: 'Ene 21', status: 'operational' },
  { date: 'Ene 20', status: 'maintenance' },
  { date: 'Ene 19', status: 'operational' },
  { date: 'Ene 18', status: 'operational' },
  { date: 'Ene 17', status: 'operational' },
  { date: 'Ene 16', status: 'operational' },
  { date: 'Ene 15', status: 'degraded' },
  { date: 'Ene 14', status: 'operational' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational': return <CheckCircle2 className="w-5 h-5 text-green-400" />;
    case 'degraded': return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    case 'outage': return <XCircle className="w-5 h-5 text-red-400" />;
    case 'maintenance': return <Clock className="w-5 h-5 text-blue-400" />;
    default: return <CheckCircle2 className="w-5 h-5 text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational': return 'bg-green-500';
    case 'degraded': return 'bg-yellow-500';
    case 'outage': return 'bg-red-500';
    case 'maintenance': return 'bg-blue-500';
    case 'resolved': return 'bg-green-500/20 text-green-400';
    default: return 'bg-gray-500';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'operational': return 'Operativo';
    case 'degraded': return 'Degradado';
    case 'outage': return 'Caído';
    case 'maintenance': return 'Mantenimiento';
    case 'resolved': return 'Resuelto';
    default: return status;
  }
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">Todos los sistemas operativos</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Estado del Sistema
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Monitoreo en tiempo real de todos los servicios de LinkForge.
            Última actualización: hace 2 minutos.
          </p>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all">
            <RefreshCw className="w-4 h-4" />
            Actualizar
          </button>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Estado actual</h2>

          <div className="space-y-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <service.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-medium">{service.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm">Uptime: {service.uptime}</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(service.status)}
                    <span className="text-green-400 text-sm">{getStatusLabel(service.status)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Historial de uptime (últimos 15 días)</h2>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex gap-1">
              {uptimeHistory.map((day, i) => (
                <div key={i} className="flex-1 group relative">
                  <div
                    className={`h-8 rounded ${getStatusColor(day.status)} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                  />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                    <div className="px-2 py-1 bg-gray-800 rounded text-xs text-white whitespace-nowrap">
                      {day.date}: {getStatusLabel(day.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>15 días atrás</span>
              <span>Hoy</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-500" />
              <span className="text-gray-400">Operativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-yellow-500" />
              <span className="text-gray-400">Degradado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-500" />
              <span className="text-gray-400">Mantenimiento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-500" />
              <span className="text-gray-400">Caída</span>
            </div>
          </div>
        </div>
      </section>

      {/* Past Incidents */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Incidentes recientes</h2>

          <div className="space-y-6">
            {incidents.map((incident, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-gray-500 text-sm">{incident.date}</span>
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                    {getStatusLabel(incident.status)}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{incident.description}</p>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  {incident.updates.map((update, j) => (
                    <div key={j} className="flex gap-4 text-sm">
                      <span className="text-gray-500 w-12">{update.time}</span>
                      <span className="text-gray-300">{update.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <Bell className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Recibe alertas de estado
          </h2>
          <p className="text-gray-400 mb-6">
            Suscríbete para recibir notificaciones cuando haya incidentes o mantenimiento programado.
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
