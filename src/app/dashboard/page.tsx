'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Link2,
  Plus,
  Trash2,
  GripVertical,
  ExternalLink,
  Eye,
  EyeOff,
  Palette,
  BarChart3,
  Settings,
  LogOut,
  Crown,
  Copy,
  Check,
  Loader2,
  AlertCircle,
  User,
  Save,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { themes, freeThemes, canUseTheme } from '@/lib/themes';
import { ThemeId } from '@/types';

type Tab = 'links' | 'appearance' | 'analytics' | 'settings';

export default function DashboardPage() {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    logout,
    addLink,
    updateLink,
    deleteLink,
    toggleLink,
    setTheme,
    updateProfile,
  } = useUserStore();

  const [activeTab, setActiveTab] = useState<Tab>('links');
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [showAddLink, setShowAddLink] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  // Profile edit state
  const [editDisplayName, setEditDisplayName] = useState('');
  const [editBio, setEditBio] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (user) {
      setEditDisplayName(user.displayName);
      setEditBio(user.bio);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  const profileUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/profile/${user.username}`;
  const maxLinks = user.isPro ? Infinity : 5;
  const canAddMore = user.links.length < maxLinks;

  const handleAddLink = () => {
    if (!newLinkTitle || !newLinkUrl) {
      setError('Completa todos los campos');
      return;
    }

    const success = addLink(newLinkTitle, newLinkUrl);
    if (success) {
      setNewLinkTitle('');
      setNewLinkUrl('');
      setShowAddLink(false);
      setError('');
    } else {
      setError('Has alcanzado el límite de links. Actualiza a Pro para añadir más.');
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    updateProfile({
      displayName: editDisplayName,
      bio: editBio,
    });
    await new Promise((r) => setTimeout(r, 500));
    setSaving(false);
  };

  const handleThemeChange = (themeId: ThemeId) => {
    if (!canUseTheme(themeId, user.isPro)) {
      return;
    }
    setTheme(themeId);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const tabs = [
    { id: 'links' as Tab, label: 'Links', icon: Link2 },
    { id: 'appearance' as Tab, label: 'Apariencia', icon: Palette },
    { id: 'analytics' as Tab, label: 'Analytics', icon: BarChart3 },
    { id: 'settings' as Tab, label: 'Ajustes', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-800 border-r border-gray-700 hidden lg:block">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LinkForge</span>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === tab.id
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          {!user.isPro && (
            <Link
              href="/dashboard/upgrade"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-medium mb-4 hover:from-purple-600 hover:to-pink-600 transition"
            >
              <Crown className="w-5 h-5" />
              Actualizar a Pro
            </Link>
          )}

          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.displayName}
              className="w-10 h-10 rounded-full bg-gray-700"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{user.displayName}</p>
              <p className="text-gray-500 text-sm truncate">@{user.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-white transition"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 z-50">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">LinkForge</span>
          </Link>

          <button onClick={handleLogout} className="text-gray-400 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="flex overflow-x-auto no-scrollbar px-4 pb-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-32 lg:pt-0 min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          {/* Profile Link Banner */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-purple-500/30">
            <div>
              <p className="text-gray-300 text-sm mb-1">Tu página pública:</p>
              <p className="text-white font-medium">{profileUrl}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar
                  </>
                )}
              </button>
              <Link
                href={`/profile/${user.username}`}
                target="_blank"
                className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Ver
              </Link>
            </div>
          </div>

          {/* Links Tab */}
          {activeTab === 'links' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Mis Links</h1>
                <p className="text-gray-400">
                  {user.links.length}/{user.isPro ? '∞' : '5'} links
                </p>
              </div>

              {/* Add Link Form */}
              {showAddLink ? (
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Añadir nuevo link</h3>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <p className="text-red-300 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={newLinkTitle}
                      onChange={(e) => setNewLinkTitle(e.target.value)}
                      placeholder="Título del link (ej: Mi Canal de YouTube)"
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="url"
                      value={newLinkUrl}
                      onChange={(e) => setNewLinkUrl(e.target.value)}
                      placeholder="URL (ej: https://youtube.com/@tucanal)"
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={handleAddLink}
                        className="flex-1 bg-purple-500 text-white py-3 rounded-xl font-medium hover:bg-purple-600 transition"
                      >
                        Añadir Link
                      </button>
                      <button
                        onClick={() => {
                          setShowAddLink(false);
                          setError('');
                        }}
                        className="px-6 bg-gray-700 text-white py-3 rounded-xl hover:bg-gray-600 transition"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => canAddMore ? setShowAddLink(true) : null}
                  disabled={!canAddMore}
                  className={`w-full border-2 border-dashed rounded-2xl py-6 flex items-center justify-center gap-2 transition ${
                    canAddMore
                      ? 'border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400'
                      : 'border-gray-700 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  {canAddMore ? 'Añadir nuevo link' : 'Límite alcanzado - Actualiza a Pro'}
                </button>
              )}

              {/* Links List */}
              <div className="space-y-3">
                {user.links.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Link2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Aún no tienes links. ¡Añade el primero!</p>
                  </div>
                ) : (
                  user.links.map((link) => (
                    <div
                      key={link.id}
                      className={`bg-gray-800 rounded-xl p-4 border transition ${
                        link.enabled ? 'border-gray-700' : 'border-gray-700/50 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <GripVertical className="w-5 h-5 text-gray-600 cursor-grab" />

                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium truncate">{link.title}</h4>
                          <p className="text-gray-500 text-sm truncate">{link.url}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">{link.clicks} clicks</span>

                          <button
                            onClick={() => toggleLink(link.id)}
                            className={`p-2 rounded-lg transition ${
                              link.enabled
                                ? 'text-green-400 hover:bg-green-500/20'
                                : 'text-gray-500 hover:bg-gray-700'
                            }`}
                          >
                            {link.enabled ? (
                              <Eye className="w-5 h-5" />
                            ) : (
                              <EyeOff className="w-5 h-5" />
                            )}
                          </button>

                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>

                          <button
                            onClick={() => deleteLink(link.id)}
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-white">Apariencia</h1>

              {/* Theme Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Elige tu tema</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {Object.values(themes).map((theme) => {
                    const isLocked = !canUseTheme(theme.id, user.isPro);
                    const isSelected = user.theme === theme.id;

                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleThemeChange(theme.id)}
                        disabled={isLocked}
                        className={`relative rounded-xl p-4 h-32 flex flex-col items-center justify-center transition border-2 ${
                          isSelected
                            ? 'border-purple-500 ring-2 ring-purple-500/50'
                            : 'border-transparent'
                        } ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} ${
                          theme.background
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${theme.buttonBg} mb-2`}
                        />
                        <span className={`text-sm font-medium ${theme.textColor}`}>
                          {theme.name}
                        </span>
                        {isLocked && (
                          <div className="absolute top-2 right-2">
                            <Crown className="w-4 h-4 text-yellow-400" />
                          </div>
                        )}
                        {isSelected && (
                          <div className="absolute top-2 left-2">
                            <Check className="w-4 h-4 text-purple-400" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {!user.isPro && (
                  <p className="text-gray-400 text-sm mt-4">
                    <Crown className="w-4 h-4 inline text-yellow-400 mr-1" />
                    Los temas con corona requieren el plan Pro.{' '}
                    <Link href="/dashboard/upgrade" className="text-purple-400 hover:underline">
                      Actualizar ahora
                    </Link>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-white">Analytics</h1>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Visitas totales</p>
                  <p className="text-3xl font-bold text-white">
                    {user.analytics?.totalViews || 0}
                  </p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Clicks totales</p>
                  <p className="text-3xl font-bold text-white">
                    {user.analytics?.totalClicks || 0}
                  </p>
                </div>
              </div>

              {user.isPro ? (
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Rendimiento por link
                  </h3>
                  <div className="space-y-3">
                    {user.links.map((link) => (
                      <div
                        key={link.id}
                        className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0"
                      >
                        <span className="text-gray-300 truncate flex-1 mr-4">
                          {link.title}
                        </span>
                        <span className="text-purple-400 font-medium">
                          {link.clicks} clicks
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
                  <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Analytics Avanzados
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Desbloquea analytics detallados, gráficos de rendimiento y más con el
                    plan Pro.
                  </p>
                  <Link
                    href="/dashboard/upgrade"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
                  >
                    <Crown className="w-5 h-5" />
                    Actualizar a Pro
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-white">Ajustes</h1>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Perfil</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.avatar}
                      alt={user.displayName}
                      className="w-20 h-20 rounded-full bg-gray-700"
                    />
                    <div>
                      <p className="text-white font-medium">@{user.username}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre para mostrar
                    </label>
                    <input
                      type="text"
                      value={editDisplayName}
                      onChange={(e) => setEditDisplayName(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={editBio}
                      onChange={(e) => setEditBio(e.target.value)}
                      rows={3}
                      placeholder="Cuéntale al mundo quién eres..."
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-600 transition disabled:opacity-50"
                  >
                    {saving ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                </div>
              </div>

              {/* Subscription Status */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Suscripción</h3>

                {user.isPro ? (
                  <div className="flex items-center gap-3">
                    <Crown className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="text-white font-medium">Plan Pro</p>
                      <p className="text-gray-500 text-sm">
                        Disfruta de todas las funcionalidades premium
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <User className="w-8 h-8 text-gray-400" />
                      <div>
                        <p className="text-white font-medium">Plan Gratuito</p>
                        <p className="text-gray-500 text-sm">
                          5 links, 3 temas, analytics básicos
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/dashboard/upgrade"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
                    >
                      <Crown className="w-5 h-5" />
                      Actualizar a Pro - €4.99/mes
                    </Link>
                  </div>
                )}
              </div>

              {/* Danger Zone */}
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                <h3 className="text-lg font-semibold text-red-400 mb-4">Zona de Peligro</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten
                  cuidado.
                </p>
                <button className="bg-red-500/20 text-red-400 px-6 py-3 rounded-xl font-medium hover:bg-red-500/30 transition border border-red-500/50">
                  Eliminar Cuenta
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
