'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Palette, Check, Crown, Smartphone, Monitor,
  Sparkles, Eye, Lock
} from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';
import { themes, canUseTheme } from '@/lib/themes';
import { ThemeId } from '@/types';

export default function AppearancePage() {
  const { user, setTheme } = useUserStore();
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('mobile');

  if (!user) return null;

  const handleThemeChange = (themeId: ThemeId) => {
    if (!canUseTheme(themeId, user.isPro)) return;
    setTheme(themeId);
  };

  const currentTheme = themes[user.theme] || themes['minimal-dark'];

  const freeThemes = Object.values(themes).filter(t =>
    ['minimal-light', 'minimal-dark', 'gradient-sunset'].includes(t.id)
  );

  const proThemes = Object.values(themes).filter(t =>
    !['minimal-light', 'minimal-dark', 'gradient-sunset'].includes(t.id)
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Apariencia</h1>
          <p className="text-gray-400 mt-1">Personaliza el aspecto de tu página</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Themes Grid */}
          <div className="space-y-8">
            {/* Free Themes */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Temas Gratuitos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {freeThemes.map((theme) => {
                  const isSelected = user.theme === theme.id;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className={`relative rounded-2xl p-4 h-40 flex flex-col items-center justify-center transition-all border-2 ${
                        isSelected
                          ? 'border-purple-500 ring-4 ring-purple-500/20'
                          : 'border-transparent hover:border-white/20'
                      } ${theme.background}`}
                    >
                      <div className={`w-12 h-12 rounded-full ${theme.buttonBg} mb-3`} />
                      <span className={`text-sm font-medium ${theme.textColor}`}>
                        {theme.name}
                      </span>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pro Themes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold text-white">Temas Pro</h2>
                <Crown className="w-5 h-5 text-yellow-400" />
              </div>

              {!user.isPro && (
                <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <p className="text-gray-300 text-sm mb-2">
                    Desbloquea +15 temas premium con el plan Pro
                  </p>
                  <Link
                    href="/dashboard/upgrade"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Upgrade ahora →
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {proThemes.map((theme) => {
                  const isSelected = user.theme === theme.id;
                  const isLocked = !user.isPro;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      disabled={isLocked}
                      className={`relative rounded-2xl p-4 h-32 flex flex-col items-center justify-center transition-all border-2 ${
                        isSelected
                          ? 'border-purple-500 ring-4 ring-purple-500/20'
                          : 'border-transparent'
                      } ${isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:border-white/20'} ${
                        theme.background
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full ${theme.buttonBg} mb-2`} />
                      <span className={`text-xs font-medium ${theme.textColor}`}>
                        {theme.name}
                      </span>
                      {isLocked && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
                          <Lock className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {isSelected && !isLocked && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Theme Coming Soon */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Temas Personalizados</h3>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                  Próximamente
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Pronto podrás crear tus propios temas con colores personalizados,
                gradientes y más opciones de personalización.
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  Vista previa
                </h3>
                <div className="flex gap-1">
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-2 rounded-lg transition ${
                      previewDevice === 'mobile'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-2 rounded-lg transition ${
                      previewDevice === 'desktop'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                className={`mx-auto rounded-3xl overflow-hidden border border-white/20 ${
                  previewDevice === 'mobile' ? 'w-[280px]' : 'w-full'
                }`}
              >
                <div className={`p-6 min-h-[400px] ${currentTheme.background}`}>
                  {/* Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={user.avatar}
                      alt={user.displayName}
                      className="w-20 h-20 rounded-full mb-3"
                    />
                    <h4 className={`text-lg font-bold ${currentTheme.textColor}`}>
                      {user.displayName}
                    </h4>
                    <p className={`text-sm opacity-70 ${currentTheme.textColor}`}>
                      @{user.username}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    {user.links.slice(0, 3).map((link) => (
                      <div
                        key={link.id}
                        className={`py-3 px-4 rounded-xl text-center font-medium ${currentTheme.buttonBg} ${currentTheme.buttonText}`}
                      >
                        {link.title}
                      </div>
                    ))}
                    {user.links.length === 0 && (
                      <>
                        <div className={`py-3 px-4 rounded-xl text-center font-medium ${currentTheme.buttonBg} ${currentTheme.buttonText}`}>
                          Mi Canal de YouTube
                        </div>
                        <div className={`py-3 px-4 rounded-xl text-center font-medium ${currentTheme.buttonBg} ${currentTheme.buttonText}`}>
                          Instagram
                        </div>
                        <div className={`py-3 px-4 rounded-xl text-center font-medium ${currentTheme.buttonBg} ${currentTheme.buttonText}`}>
                          Twitter
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 text-xs mt-4">
                Tema: {currentTheme.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
