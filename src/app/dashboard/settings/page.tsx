'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Settings, User, Mail, Lock, Bell, Shield, Trash2,
  Save, Loader2, Crown, Check, Camera, Globe, Key
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

export default function SettingsPage() {
  const { user, updateProfile } = useUserStore();

  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    clicks: true,
    weekly: true,
    marketing: false,
  });

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setBio(user.bio);
    }
  }, [user]);

  if (!user) return null;

  const handleSave = async () => {
    setSaving(true);
    updateProfile({ displayName, bio });
    await new Promise((r) => setTimeout(r, 500));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Ajustes</h1>
          <p className="text-gray-400 mt-1">Gestiona tu cuenta y preferencias</p>
        </div>

        {/* Profile Section */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            Perfil
          </h2>

          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-24 h-24 rounded-full bg-gray-700"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <div>
                <p className="text-white font-medium">@{user.username}</p>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Miembro desde Enero 2026
                </p>
              </div>
            </div>

            {/* Display Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre para mostrar
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder="Cuéntale al mundo quién eres..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 resize-none"
              />
              <p className="text-gray-500 text-xs mt-1">{bio.length}/160 caracteres</p>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : saved ? (
                <Check className="w-5 h-5" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {saving ? 'Guardando...' : saved ? 'Guardado' : 'Guardar cambios'}
            </button>
          </div>
        </section>

        {/* Subscription */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            Suscripción
          </h2>

          {user.isPro ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Plan Pro</p>
                  <p className="text-gray-400 text-sm">€9.99/mes • Próxima factura: 1 Feb 2026</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
                Gestionar
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Plan Gratuito</p>
                  <p className="text-gray-400 text-sm">5 links • 3 temas • Analytics básicos</p>
                </div>
              </div>
              <Link
                href="/dashboard/upgrade"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
              >
                Upgrade a Pro
              </Link>
            </div>
          )}
        </section>

        {/* Notifications */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-400" />
            Notificaciones
          </h2>

          <div className="space-y-4">
            {[
              { key: 'email', label: 'Notificaciones por email', desc: 'Recibe actualizaciones importantes' },
              { key: 'clicks', label: 'Alertas de clicks', desc: 'Notificación cuando alcances hitos' },
              { key: 'weekly', label: 'Resumen semanal', desc: 'Estadísticas de la semana cada lunes' },
              { key: 'marketing', label: 'Novedades y ofertas', desc: 'Información sobre nuevas funciones' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({
                    ...prev,
                    [item.key]: !prev[item.key as keyof typeof notifications]
                  }))}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    notifications[item.key as keyof typeof notifications]
                      ? 'bg-purple-500'
                      : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      notifications[item.key as keyof typeof notifications]
                        ? 'translate-x-7'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Seguridad
          </h2>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <p className="text-white font-medium">Cambiar contraseña</p>
                  <p className="text-gray-500 text-sm">Última actualización hace 3 meses</p>
                </div>
              </div>
              <span className="text-purple-400">→</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <p className="text-white font-medium">Autenticación de dos factores</p>
                  <p className="text-gray-500 text-sm">No activado</p>
                </div>
              </div>
              <span className="text-purple-400">Activar</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <p className="text-white font-medium">Sesiones activas</p>
                  <p className="text-gray-500 text-sm">1 sesión activa</p>
                </div>
              </div>
              <span className="text-purple-400">Ver</span>
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
          <h2 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
            <Trash2 className="w-5 h-5" />
            Zona de Peligro
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Una vez que elimines tu cuenta, no hay vuelta atrás. Se eliminarán todos tus datos,
            links y analytics de forma permanente.
          </p>
          <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition">
            Eliminar cuenta
          </button>
        </section>
      </div>
    </DashboardLayout>
  );
}
