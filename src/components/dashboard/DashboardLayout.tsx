'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Link2, LayoutDashboard, BarChart3, Palette, Settings,
  QrCode, Crown, LogOut, Menu, X, Bell, Search,
  ChevronRight, ExternalLink, Copy, Check
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const navigation = [
  { name: 'Resumen', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Mis Links', href: '/dashboard/links', icon: Link2 },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Apariencia', href: '/dashboard/appearance', icon: Palette },
  { name: 'Códigos QR', href: '/dashboard/qr', icon: QrCode },
  { name: 'Ajustes', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, logout, checkAuth } = useUserStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const profileUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/profile/${user.username}`;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-800/50 backdrop-blur-xl border-r border-white/10 hidden lg:flex flex-col z-40">
        {/* Logo */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LinkForge</span>
          </Link>
        </div>

        {/* Profile Link Quick Action */}
        <div className="px-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs">Tu página</span>
              <div className="flex gap-1">
                <button
                  onClick={handleCopyLink}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <Link
                  href={`/profile/${user.username}`}
                  target="_blank"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <p className="text-white text-sm font-medium truncate">linkforge.io/{user.username}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Upgrade CTA */}
        {!user.isPro && (
          <div className="px-4 mb-4">
            <Link
              href="/dashboard/upgrade"
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all group"
            >
              <Crown className="w-5 h-5" />
              <div className="flex-1">
                <p className="font-semibold">Upgrade a Pro</p>
                <p className="text-xs text-purple-200">Desbloquea todo</p>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* User */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.displayName}
                className="w-10 h-10 rounded-full bg-gray-700 ring-2 ring-white/10"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-white/10 flex items-center justify-center text-white font-bold">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{user.displayName}</p>
              <p className="text-gray-500 text-sm truncate">@{user.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-gray-800/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Link2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">LinkForge</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.displayName}
                className="w-8 h-8 rounded-full bg-gray-700"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                {user.displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-gray-800 border-r border-white/10 p-4">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Link2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">LinkForge</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {!user.isPro && (
              <Link
                href="/dashboard/upgrade"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              >
                <Crown className="w-5 h-5" />
                Upgrade a Pro
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full mt-6 px-4 py-3 text-gray-400 hover:text-white transition"
            >
              <LogOut className="w-5 h-5" />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
