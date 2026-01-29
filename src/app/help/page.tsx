'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Search,
  ChevronDown,
  ChevronRight,
  Book,
  CreditCard,
  Settings,
  Link2,
  Palette,
  BarChart3,
  Code,
  Shield,
  Users,
  MessageSquare,
  Mail,
  Phone,
  HelpCircle,
  FileText,
  Video,
  Zap,
} from 'lucide-react';

const categories = [
  {
    id: 'getting-started',
    name: 'Primeros Pasos',
    icon: Book,
    description: 'Aprende lo básico',
    articles: [
      { title: 'Cómo crear tu cuenta', slug: 'crear-cuenta' },
      { title: 'Configurar tu primera página', slug: 'primera-pagina' },
      { title: 'Añadir y organizar links', slug: 'anadir-links' },
      { title: 'Personalizar tu perfil', slug: 'personalizar-perfil' },
      { title: 'Compartir tu página', slug: 'compartir-pagina' },
    ],
  },
  {
    id: 'billing',
    name: 'Facturación y Planes',
    icon: CreditCard,
    description: 'Pagos y suscripciones',
    articles: [
      { title: 'Planes disponibles', slug: 'planes' },
      { title: 'Cómo actualizar tu plan', slug: 'actualizar-plan' },
      { title: 'Métodos de pago', slug: 'metodos-pago' },
      { title: 'Facturas y recibos', slug: 'facturas' },
      { title: 'Cancelar suscripción', slug: 'cancelar' },
      { title: 'Reembolsos', slug: 'reembolsos' },
    ],
  },
  {
    id: 'customization',
    name: 'Personalización',
    icon: Palette,
    description: 'Temas y diseño',
    articles: [
      { title: 'Cambiar tema', slug: 'cambiar-tema' },
      { title: 'Personalizar colores', slug: 'colores' },
      { title: 'Subir foto de perfil', slug: 'foto-perfil' },
      { title: 'Añadir bio', slug: 'bio' },
      { title: 'Fondos personalizados', slug: 'fondos' },
    ],
  },
  {
    id: 'links',
    name: 'Gestión de Links',
    icon: Link2,
    description: 'Todo sobre links',
    articles: [
      { title: 'Tipos de links', slug: 'tipos-links' },
      { title: 'Programar links', slug: 'programar-links' },
      { title: 'Links con contraseña', slug: 'links-privados' },
      { title: 'Redirecciones', slug: 'redirecciones' },
      { title: 'Deep links', slug: 'deep-links' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    description: 'Métricas y datos',
    articles: [
      { title: 'Entender tus analytics', slug: 'entender-analytics' },
      { title: 'Métricas disponibles', slug: 'metricas' },
      { title: 'Exportar datos', slug: 'exportar' },
      { title: 'Integrar con Google Analytics', slug: 'google-analytics' },
      { title: 'Tracking de conversiones', slug: 'conversiones' },
    ],
  },
  {
    id: 'domains',
    name: 'Dominios',
    icon: Settings,
    description: 'Dominios personalizados',
    articles: [
      { title: 'Configurar dominio personalizado', slug: 'configurar-dominio' },
      { title: 'DNS y registros', slug: 'dns' },
      { title: 'SSL y HTTPS', slug: 'ssl' },
      { title: 'Subdominios', slug: 'subdominios' },
      { title: 'Solucionar problemas', slug: 'problemas-dominio' },
    ],
  },
  {
    id: 'integrations',
    name: 'Integraciones',
    icon: Zap,
    description: 'Conectar apps',
    articles: [
      { title: 'Integraciones disponibles', slug: 'integraciones-disponibles' },
      { title: 'Conectar Mailchimp', slug: 'mailchimp' },
      { title: 'Conectar Stripe', slug: 'stripe' },
      { title: 'Webhooks', slug: 'webhooks' },
      { title: 'Zapier', slug: 'zapier' },
    ],
  },
  {
    id: 'api',
    name: 'API y Developers',
    icon: Code,
    description: 'Para desarrolladores',
    articles: [
      { title: 'Introducción a la API', slug: 'api-intro' },
      { title: 'Autenticación', slug: 'api-auth' },
      { title: 'Endpoints disponibles', slug: 'api-endpoints' },
      { title: 'Rate limits', slug: 'api-limits' },
      { title: 'SDKs', slug: 'api-sdks' },
    ],
  },
  {
    id: 'security',
    name: 'Seguridad',
    icon: Shield,
    description: 'Protege tu cuenta',
    articles: [
      { title: 'Autenticación de dos factores', slug: '2fa' },
      { title: 'Cambiar contraseña', slug: 'cambiar-password' },
      { title: 'Sesiones activas', slug: 'sesiones' },
      { title: 'Privacidad de datos', slug: 'privacidad' },
      { title: 'Reportar un problema', slug: 'reportar' },
    ],
  },
  {
    id: 'teams',
    name: 'Equipos',
    icon: Users,
    description: 'Colaboración',
    articles: [
      { title: 'Crear un equipo', slug: 'crear-equipo' },
      { title: 'Invitar miembros', slug: 'invitar' },
      { title: 'Roles y permisos', slug: 'roles' },
      { title: 'Facturación de equipos', slug: 'facturacion-equipos' },
    ],
  },
];

const popularArticles = [
  { title: 'Cómo añadir mi primer link', category: 'Primeros Pasos', slug: 'anadir-links' },
  { title: 'Cambiar mi tema', category: 'Personalización', slug: 'cambiar-tema' },
  { title: 'Configurar dominio personalizado', category: 'Dominios', slug: 'configurar-dominio' },
  { title: 'Entender mis analytics', category: 'Analytics', slug: 'entender-analytics' },
  { title: 'Actualizar a Pro', category: 'Facturación', slug: 'actualizar-plan' },
];

const faqs = [
  {
    question: '¿LinkForge es gratis?',
    answer: 'Sí, tenemos un plan gratuito para siempre con 5 links y 3 temas básicos. Puedes actualizar a planes de pago para más funcionalidades.',
  },
  {
    question: '¿Puedo usar mi propio dominio?',
    answer: 'Sí, los planes Pro y superiores permiten configurar dominios personalizados. La configuración es sencilla y el SSL se activa automáticamente.',
  },
  {
    question: '¿Cómo cancelo mi suscripción?',
    answer: 'Puedes cancelar en cualquier momento desde Ajustes > Facturación. Mantendrás el acceso hasta el final del período de facturación.',
  },
  {
    question: '¿Pierdo mis links si bajo de plan?',
    answer: 'No, tus links nunca se eliminan. Solo se limitan las funcionalidades disponibles según el plan.',
  },
  {
    question: '¿Ofrecen descuentos?',
    answer: 'Sí, ofrecemos 17% de descuento en planes anuales y 50% para organizaciones sin fines de lucro y educativas.',
  },
  {
    question: '¿Tienen API?',
    answer: 'Sí, ofrecemos una API RESTful completa disponible en los planes Pro y superiores.',
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('getting-started');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Centro de
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Ayuda</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            ¿Cómo podemos ayudarte hoy?
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar en el centro de ayuda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Video, title: 'Video Tutoriales', href: '/help/videos', color: 'from-red-500 to-orange-500' },
              { icon: FileText, title: 'Documentación', href: '/developers/docs', color: 'from-blue-500 to-cyan-500' },
              { icon: MessageSquare, title: 'Chat en Vivo', href: '/contact', color: 'from-green-500 to-emerald-500' },
              { icon: Mail, title: 'Email Soporte', href: 'mailto:support@linkforge.app', color: 'from-purple-500 to-pink-500' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition group flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium group-hover:text-purple-400 transition">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Artículos Populares</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/help/article/${article.slug}`}
                className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition group"
              >
                <span className="text-purple-400 text-sm">{article.category}</span>
                <h3 className="text-white font-medium mt-1 group-hover:text-purple-400 transition">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Explorar por Categoría</h2>
          <div className="grid md:grid-cols-2 gap-4 items-start">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedCategory === category.id && (
                  <div className="border-t border-gray-700 p-4 space-y-1">
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/help/article/${article.slug}`}
                        className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                        {article.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-gray-300 mb-8">
              Nuestro equipo de soporte está listo para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                <MessageSquare className="w-5 h-5" />
                Contactar Soporte
              </Link>
              <a
                href="mailto:support@linkforge.app"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
              >
                <Mail className="w-5 h-5" />
                support@linkforge.app
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
