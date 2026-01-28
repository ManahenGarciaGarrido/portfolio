'use client';

import { useState } from 'react';
import {
  QrCode, Download, Copy, Check, Share2, Palette,
  Smartphone, Crown, Link2, Settings
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

const colorPresets = [
  { name: 'Púrpura', fg: '#a855f7', bg: '#1f1f1f' },
  { name: 'Rosa', fg: '#ec4899', bg: '#1f1f1f' },
  { name: 'Azul', fg: '#3b82f6', bg: '#1f1f1f' },
  { name: 'Verde', fg: '#22c55e', bg: '#1f1f1f' },
  { name: 'Naranja', fg: '#f97316', bg: '#1f1f1f' },
  { name: 'Clásico', fg: '#000000', bg: '#ffffff' },
];

export default function QRPage() {
  const { user } = useUserStore();
  const [selectedColor, setSelectedColor] = useState(0);
  const [copied, setCopied] = useState(false);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

  if (!user) return null;

  const profileUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/profile/${user.username}`;
  const color = colorPresets[selectedColor];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'w-48 h-48';
      case 'medium': return 'w-64 h-64';
      case 'large': return 'w-80 h-80';
    }
  };

  const getSizeLabel = () => {
    switch (size) {
      case 'small': return '200x200px';
      case 'medium': return '400x400px';
      case 'large': return '800x800px';
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Código QR</h1>
          <p className="text-gray-400 mt-1">
            Genera y personaliza tu código QR para compartir tu página
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Preview */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex flex-col items-center">
              {/* QR Code Placeholder */}
              <div
                className={`${getSizeClass()} rounded-2xl flex items-center justify-center mb-6`}
                style={{ backgroundColor: color.bg }}
              >
                <div className="text-center">
                  <QrCode
                    className="mx-auto mb-2"
                    style={{ color: color.fg }}
                    size={size === 'small' ? 120 : size === 'medium' ? 160 : 200}
                  />
                  <p className="text-xs" style={{ color: color.fg }}>
                    @{user.username}
                  </p>
                </div>
              </div>

              {/* URL */}
              <div className="w-full p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 mb-6">
                <Link2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm truncate flex-1">{profileUrl}</span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition">
                  <Download className="w-5 h-5" />
                  Descargar PNG
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-6">
            {/* Colors */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                Color
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {colorPresets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`p-4 rounded-xl border-2 transition ${
                      selectedColor === i
                        ? 'border-purple-500'
                        : 'border-transparent hover:border-white/20'
                    }`}
                    style={{ backgroundColor: preset.bg }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg mx-auto mb-2"
                      style={{ backgroundColor: preset.fg }}
                    />
                    <p className="text-xs text-center" style={{ color: preset.fg }}>
                      {preset.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-400" />
                Tamaño
              </h3>
              <div className="flex gap-3">
                {(['small', 'medium', 'large'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 py-3 rounded-xl font-medium transition ${
                      size === s
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {s === 'small' ? 'Pequeño' : s === 'medium' ? 'Mediano' : 'Grande'}
                  </button>
                ))}
              </div>
              <p className="text-gray-500 text-sm text-center mt-3">
                {getSizeLabel()}
              </p>
            </div>

            {/* Pro Features */}
            {!user.isPro && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-white font-semibold">Funciones Pro</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Logo personalizado en el QR
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Colores personalizados
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Descarga en SVG y PDF
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400" />
                    Tracking de escaneos
                  </li>
                </ul>
                <Link
                  href="/dashboard/upgrade"
                  className="block w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium text-center hover:opacity-90 transition"
                >
                  Upgrade a Pro
                </Link>
              </div>
            )}

            {/* Usage Tips */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-purple-400" />
                Dónde usar tu QR
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Tarjetas de visita</li>
                <li>• Flyers y posters</li>
                <li>• Packaging de productos</li>
                <li>• Presentaciones</li>
                <li>• Stands y eventos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
