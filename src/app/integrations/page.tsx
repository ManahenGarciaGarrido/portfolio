'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search,
  ArrowRight,
  Check,
  ExternalLink,
  Layers,
  BarChart3,
  Mail,
  ShoppingBag,
  Music,
  Video,
  MessageSquare,
  Calendar,
  CreditCard,
  Workflow,
  Database,
  Globe,
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todas', icon: Layers },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  { id: 'email', name: 'Email Marketing', icon: Mail },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag },
  { id: 'social', name: 'Redes Sociales', icon: Globe },
  { id: 'media', name: 'Media', icon: Video },
  { id: 'productivity', name: 'Productividad', icon: Calendar },
  { id: 'payments', name: 'Pagos', icon: CreditCard },
  { id: 'automation', name: 'Automatización', icon: Workflow },
];

const integrations = [
  {
    name: 'Google Analytics',
    description: 'Conecta con GA4 para tracking avanzado',
    category: 'analytics',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '📊',
    url: 'https://analytics.google.com',
  },
  {
    name: 'Meta Pixel',
    description: 'Rastrea conversiones de Facebook e Instagram',
    category: 'analytics',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '📱',
    url: 'https://business.facebook.com',
  },
  {
    name: 'TikTok Pixel',
    description: 'Mide el rendimiento de tus campañas TikTok',
    category: 'analytics',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🎵',
    url: 'https://ads.tiktok.com',
  },
  {
    name: 'Mailchimp',
    description: 'Captura emails directamente en tu página',
    category: 'email',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '📧',
    url: 'https://mailchimp.com',
  },
  {
    name: 'ConvertKit',
    description: 'Integración con tu lista de ConvertKit',
    category: 'email',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '✉️',
    url: 'https://convertkit.com',
  },
  {
    name: 'Klaviyo',
    description: 'Email marketing para e-commerce',
    category: 'email',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '📨',
    url: 'https://klaviyo.com',
  },
  {
    name: 'Beehiiv',
    description: 'Newsletter moderno y potente',
    category: 'email',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🐝',
    url: 'https://beehiiv.com',
  },
  {
    name: 'Shopify',
    description: 'Muestra productos de tu tienda Shopify',
    category: 'ecommerce',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🛍️',
    url: 'https://shopify.com',
  },
  {
    name: 'Gumroad',
    description: 'Vende productos digitales fácilmente',
    category: 'ecommerce',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '💎',
    url: 'https://gumroad.com',
  },
  {
    name: 'WooCommerce',
    description: 'Integración con tu tienda WordPress',
    category: 'ecommerce',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🏪',
    url: 'https://woocommerce.com',
  },
  {
    name: 'Etsy',
    description: 'Conecta tu tienda de Etsy',
    category: 'ecommerce',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🧶',
    url: 'https://etsy.com',
  },
  {
    name: 'Spotify',
    description: 'Muestra tu música y playlists',
    category: 'media',
    popular: true,
    plans: ['free', 'starter', 'pro', 'business', 'enterprise'],
    logo: '🎧',
    url: 'https://spotify.com',
  },
  {
    name: 'YouTube',
    description: 'Embeds de vídeos y canal',
    category: 'media',
    popular: true,
    plans: ['free', 'starter', 'pro', 'business', 'enterprise'],
    logo: '▶️',
    url: 'https://youtube.com',
  },
  {
    name: 'Twitch',
    description: 'Muestra si estás en directo',
    category: 'media',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🎮',
    url: 'https://twitch.tv',
  },
  {
    name: 'SoundCloud',
    description: 'Comparte tu música y podcasts',
    category: 'media',
    popular: false,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🔊',
    url: 'https://soundcloud.com',
  },
  {
    name: 'Apple Music',
    description: 'Links inteligentes de Apple Music',
    category: 'media',
    popular: false,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🍎',
    url: 'https://music.apple.com',
  },
  {
    name: 'Instagram',
    description: 'Feed y stories en tu página',
    category: 'social',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '📸',
    url: 'https://instagram.com',
  },
  {
    name: 'TikTok',
    description: 'Muestra tus vídeos de TikTok',
    category: 'social',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🎬',
    url: 'https://tiktok.com',
  },
  {
    name: 'Twitter/X',
    description: 'Tweets recientes y perfil',
    category: 'social',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🐦',
    url: 'https://x.com',
  },
  {
    name: 'Discord',
    description: 'Widget de tu servidor Discord',
    category: 'social',
    popular: true,
    plans: ['free', 'starter', 'pro', 'business', 'enterprise'],
    logo: '💬',
    url: 'https://discord.com',
  },
  {
    name: 'Calendly',
    description: 'Permite reservar citas contigo',
    category: 'productivity',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '📅',
    url: 'https://calendly.com',
  },
  {
    name: 'Cal.com',
    description: 'Alternativa open source a Calendly',
    category: 'productivity',
    popular: false,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '🗓️',
    url: 'https://cal.com',
  },
  {
    name: 'Notion',
    description: 'Embeds de páginas de Notion',
    category: 'productivity',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '📝',
    url: 'https://notion.so',
  },
  {
    name: 'Stripe',
    description: 'Acepta pagos directamente',
    category: 'payments',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '💳',
    url: 'https://stripe.com',
  },
  {
    name: 'PayPal',
    description: 'Botones de pago y donaciones',
    category: 'payments',
    popular: true,
    plans: ['starter', 'pro', 'business', 'enterprise'],
    logo: '💰',
    url: 'https://paypal.com',
  },
  {
    name: 'Ko-fi',
    description: 'Recibe donaciones de tus fans',
    category: 'payments',
    popular: true,
    plans: ['free', 'starter', 'pro', 'business', 'enterprise'],
    logo: '☕',
    url: 'https://ko-fi.com',
  },
  {
    name: 'Buy Me a Coffee',
    description: 'Apoyo de tus seguidores',
    category: 'payments',
    popular: false,
    plans: ['free', 'starter', 'pro', 'business', 'enterprise'],
    logo: '🧋',
    url: 'https://buymeacoffee.com',
  },
  {
    name: 'Zapier',
    description: 'Conecta con +5000 apps',
    category: 'automation',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '⚡',
    url: 'https://zapier.com',
  },
  {
    name: 'Make (Integromat)',
    description: 'Automatizaciones avanzadas',
    category: 'automation',
    popular: false,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🔧',
    url: 'https://make.com',
  },
  {
    name: 'Webhooks',
    description: 'Envía eventos a tu servidor',
    category: 'automation',
    popular: false,
    plans: ['business', 'enterprise'],
    logo: '🪝',
    url: '/developers/docs/webhooks',
  },
  {
    name: 'API',
    description: 'Acceso completo a nuestra API',
    category: 'automation',
    popular: true,
    plans: ['pro', 'business', 'enterprise'],
    logo: '🔌',
    url: '/developers/docs/api',
  },
];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Integraciones
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> potentes</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Conecta LinkForge con tus herramientas favoritas y automatiza tu flujo de trabajo.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar integraciones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{integration.logo}</span>
                  {integration.popular && (
                    <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{integration.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {integration.plans.includes('free') && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Free</span>
                    )}
                    {!integration.plans.includes('free') && integration.plans.includes('starter') && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Starter+</span>
                    )}
                    {!integration.plans.includes('free') && !integration.plans.includes('starter') && (
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">Pro+</span>
                    )}
                  </div>
                  {integration.url.startsWith('/') ? (
                    <Link href={integration.url} className="text-gray-400 hover:text-purple-400 transition">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={integration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No se encontraron integraciones.</p>
            </div>
          )}
        </div>
      </section>

      {/* Request Integration */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-400 mb-8">
            Solicita una nueva integración y la añadiremos a nuestra lista de prioridades.
          </p>
          <Link
            href="/contact?type=integration"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
          >
            Solicitar Integración
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  API para desarrolladores
                </h2>
                <p className="text-gray-300 mb-6">
                  Construye integraciones personalizadas con nuestra API RESTful completa. Documentación detallada y SDKs disponibles.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'API RESTful completa',
                    'Webhooks en tiempo real',
                    'SDKs para JavaScript, Python, Ruby',
                    'Rate limits generosos',
                    'Documentación interactiva',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
                >
                  Ver Documentación
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                <div className="text-gray-500 mb-2">// Ejemplo de API</div>
                <div className="text-purple-400">const</div>
                <div className="text-white pl-4">response = <span className="text-green-400">await</span> fetch(</div>
                <div className="text-yellow-400 pl-6">&apos;https://api.linkforge.app/v1/links&apos;</div>
                <div className="text-white pl-4">);</div>
                <div className="text-purple-400 mt-4">const</div>
                <div className="text-white pl-4">links = <span className="text-green-400">await</span> response.json();</div>
                <div className="text-gray-500 mt-4">// {`{ links: [...], total: 42 }`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
