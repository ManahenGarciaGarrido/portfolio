'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Link2,
  Menu,
  X,
  ChevronDown,
  Zap,
  Palette,
  BarChart3,
  Globe,
  Code,
  ShoppingBag,
  BookOpen,
  HelpCircle,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  Layers,
  Shield,
  Rocket,
  Target,
  PieChart,
  Mail,
  Calendar,
  QrCode,
  Share2,
} from 'lucide-react';

const navigation = {
  product: {
    title: 'Producto',
    items: [
      { name: 'Características', href: '/features', icon: Zap, description: 'Todo lo que puedes hacer' },
      { name: 'Integraciones', href: '/integrations', icon: Layers, description: 'Conecta con tus apps favoritas' },
      { name: 'Templates', href: '/templates', icon: Palette, description: 'Diseños listos para usar' },
      { name: 'Changelog', href: '/changelog', icon: FileText, description: 'Últimas actualizaciones' },
    ],
  },
  solutions: {
    title: 'Soluciones',
    items: [
      { name: 'Para Creadores', href: '/solutions/creators', icon: Users, description: 'Influencers y artistas' },
      { name: 'Para Empresas', href: '/solutions/business', icon: Briefcase, description: 'Equipos y agencias' },
      { name: 'Para Desarrolladores', href: '/developers', icon: Code, description: 'API y webhooks' },
      { name: 'Para E-commerce', href: '/solutions/ecommerce', icon: ShoppingBag, description: 'Tiendas online' },
    ],
  },
  resources: {
    title: 'Recursos',
    items: [
      { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Artículos y guías' },
      { name: 'Centro de Ayuda', href: '/help', icon: HelpCircle, description: 'FAQs y tutoriales' },
      { name: 'Comparativa', href: '/compare', icon: Target, description: 'LinkForge vs otros' },
      { name: 'Casos de Éxito', href: '/cases', icon: Rocket, description: 'Historias de clientes' },
    ],
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LinkForge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                  {section.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === key && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-gray-800 rounded-xl border border-gray-700 shadow-xl p-2 animate-fade-in">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition">
                          <item.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/pricing" className="px-4 py-2 text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
              Precios
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition">
              Iniciar Sesión
            </Link>
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition"
            >
              Empezar Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {Object.entries(navigation).map(([key, section]) => (
              <div key={key}>
                <p className="text-gray-500 text-sm font-medium mb-2 px-3">{section.title}</p>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-purple-400" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-white/10 pt-4 space-y-2">
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/auth/register"
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Empezar Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
