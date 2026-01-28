'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Code, Book, Zap, Key, Webhook, Database,
  ArrowRight, Copy, Check, Terminal, FileJson,
  Globe, Shield, Clock, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Introducción', href: '#intro', icon: Book },
  { name: 'Autenticación', href: '#auth', icon: Key },
  { name: 'Endpoints', href: '#endpoints', icon: Database },
  { name: 'Webhooks', href: '#webhooks', icon: Webhook },
  { name: 'Rate Limits', href: '#limits', icon: Clock },
  { name: 'SDKs', href: '#sdks', icon: Code },
];

const endpoints = [
  { method: 'GET', path: '/api/v2/profile', description: 'Obtener perfil del usuario' },
  { method: 'PUT', path: '/api/v2/profile', description: 'Actualizar perfil' },
  { method: 'GET', path: '/api/v2/links', description: 'Listar todos los links' },
  { method: 'POST', path: '/api/v2/links', description: 'Crear un nuevo link' },
  { method: 'PUT', path: '/api/v2/links/:id', description: 'Actualizar un link' },
  { method: 'DELETE', path: '/api/v2/links/:id', description: 'Eliminar un link' },
  { method: 'GET', path: '/api/v2/analytics', description: 'Obtener analytics' },
  { method: 'GET', path: '/api/v2/analytics/clicks', description: 'Obtener clicks por período' },
];

const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET': return 'bg-green-500/20 text-green-400';
    case 'POST': return 'bg-blue-500/20 text-blue-400';
    case 'PUT': return 'bg-yellow-500/20 text-yellow-400';
    case 'DELETE': return 'bg-red-500/20 text-red-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

const codeExamples = {
  curl: `curl -X GET "https://api.linkforge.io/v2/links" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
  javascript: `import { LinkForge } from '@linkforge/sdk';

const client = new LinkForge('YOUR_API_KEY');

// Get all links
const links = await client.links.list();

// Create a new link
const newLink = await client.links.create({
  title: 'Mi nuevo link',
  url: 'https://example.com',
  enabled: true
});`,
  python: `from linkforge import LinkForge

client = LinkForge('YOUR_API_KEY')

# Get all links
links = client.links.list()

# Create a new link
new_link = client.links.create(
    title='Mi nuevo link',
    url='https://example.com',
    enabled=True
)`,
};

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<'curl' | 'javascript' | 'python'>('javascript');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Documentación</h3>
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/developers"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Portal de Desarrolladores
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="pb-20">
              {/* Intro */}
              <section id="intro" className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm">API v2</span>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">
                  Documentación de la API
                </h1>

                <p className="text-xl text-gray-400 mb-8">
                  Integra LinkForge en tus aplicaciones con nuestra API RESTful.
                  Gestiona perfiles, links y analytics programáticamente.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Zap, title: 'Fácil de usar', desc: 'API RESTful con respuestas JSON' },
                    { icon: Shield, title: 'Segura', desc: 'Autenticación con API Keys' },
                    { icon: Globe, title: 'Escalable', desc: 'Rate limits generosos' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Authentication */}
              <section id="auth" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Key className="w-6 h-6 text-purple-400" />
                  Autenticación
                </h2>

                <p className="text-gray-400 mb-6">
                  Todas las peticiones a la API deben incluir tu API Key en el header de autorización.
                  Puedes generar tu API Key desde el{' '}
                  <Link href="/dashboard/settings" className="text-purple-400 hover:underline">
                    panel de configuración
                  </Link>.
                </p>

                <div className="p-4 rounded-xl bg-gray-800/50 border border-white/10 font-mono text-sm">
                  <span className="text-gray-500">Authorization:</span>{' '}
                  <span className="text-green-400">Bearer YOUR_API_KEY</span>
                </div>
              </section>

              {/* Code Example */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4">Ejemplo rápido</h2>

                <div className="rounded-xl bg-gray-800/50 border border-white/10 overflow-hidden">
                  {/* Tabs */}
                  <div className="flex border-b border-white/10">
                    {(['javascript', 'python', 'curl'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          activeTab === tab
                            ? 'text-purple-400 border-b-2 border-purple-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab === 'javascript' ? 'JavaScript' : tab === 'python' ? 'Python' : 'cURL'}
                      </button>
                    ))}
                    <button
                      onClick={copyCode}
                      className="ml-auto px-4 py-2 text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>

                  {/* Code */}
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{codeExamples[activeTab]}</code>
                  </pre>
                </div>
              </section>

              {/* Endpoints */}
              <section id="endpoints" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-purple-400" />
                  Endpoints
                </h2>

                <p className="text-gray-400 mb-6">
                  Base URL: <code className="text-purple-400">https://api.linkforge.io/v2</code>
                </p>

                <div className="space-y-2">
                  {endpoints.map((endpoint, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer group"
                    >
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-white font-mono text-sm flex-1">{endpoint.path}</code>
                      <span className="text-gray-500 text-sm">{endpoint.description}</span>
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Webhooks */}
              <section id="webhooks" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Webhook className="w-6 h-6 text-purple-400" />
                  Webhooks
                </h2>

                <p className="text-gray-400 mb-6">
                  Recibe notificaciones en tiempo real cuando ocurren eventos en tu cuenta.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { event: 'link.created', desc: 'Se crea un nuevo link' },
                    { event: 'link.clicked', desc: 'Se hace click en un link' },
                    { event: 'profile.updated', desc: 'Se actualiza el perfil' },
                    { event: 'subscription.changed', desc: 'Cambia la suscripción' },
                  ].map((webhook, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <code className="text-purple-400 text-sm">{webhook.event}</code>
                      <p className="text-gray-500 text-sm mt-1">{webhook.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rate Limits */}
              <section id="limits" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-purple-400" />
                  Rate Limits
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm">
                        <th className="pb-4">Plan</th>
                        <th className="pb-4">Requests/minuto</th>
                        <th className="pb-4">Requests/día</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-white/10">
                        <td className="py-4">Free</td>
                        <td>60</td>
                        <td>1,000</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="py-4">Pro</td>
                        <td>120</td>
                        <td>10,000</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="py-4">Business</td>
                        <td>300</td>
                        <td>100,000</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="py-4">Enterprise</td>
                        <td>Ilimitado</td>
                        <td>Ilimitado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SDKs */}
              <section id="sdks">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-400" />
                  SDKs Oficiales
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'JavaScript/TypeScript', package: 'npm install @linkforge/sdk', icon: Terminal },
                    { name: 'Python', package: 'pip install linkforge', icon: Terminal },
                  ].map((sdk, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-white font-medium mb-2">{sdk.name}</h3>
                      <code className="text-sm text-purple-400 bg-gray-800/50 px-2 py-1 rounded">
                        {sdk.package}
                      </code>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
