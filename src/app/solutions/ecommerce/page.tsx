'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight, ShoppingBag, ShoppingCart, CreditCard, Package,
  BarChart3, Tag, Store, Truck, Check
} from 'lucide-react';

const features = [
  { icon: ShoppingCart, title: 'Links de producto', desc: 'Enlaza directamente a productos específicos de tu tienda' },
  { icon: CreditCard, title: 'Checkout integrado', desc: 'Vende directamente desde tu página de links' },
  { icon: Tag, title: 'Códigos de descuento', desc: 'Muestra ofertas y cupones destacados' },
  { icon: BarChart3, title: 'Analytics de ventas', desc: 'Trackea conversiones y ROI de cada link' },
  { icon: Package, title: 'Catálogo dinámico', desc: 'Sincroniza productos automáticamente' },
  { icon: Truck, title: 'Estado de pedidos', desc: 'Permite seguimiento desde tu página' },
];

const integrations = [
  { name: 'Shopify', desc: 'Sincronización completa de productos' },
  { name: 'WooCommerce', desc: 'Integración nativa con WordPress' },
  { name: 'Stripe', desc: 'Pagos directos sin salir de la página' },
  { name: 'PayPal', desc: 'Checkout rápido para tus clientes' },
  { name: 'Amazon', desc: 'Links de afiliados optimizados' },
  { name: 'Etsy', desc: 'Conecta tu tienda de artesanías' },
];

const useCases = [
  { title: 'Dropshipping', desc: 'Centraliza todos tus productos de diferentes proveedores' },
  { title: 'Marca propia', desc: 'Presenta tu catálogo con tu identidad visual' },
  { title: 'Afiliados', desc: 'Organiza tus links de afiliados por categoría' },
  { title: 'Digital products', desc: 'Vende cursos, ebooks y descargas digitales' },
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <ShoppingBag className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">Para E-commerce</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Convierte seguidores en
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              clientes
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Tu escaparate digital perfecto. Conecta tus redes sociales con tu tienda
            y maximiza las ventas desde un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Empezar a vender
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/integrations" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10">
              Ver integraciones
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo para vender más
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Herramientas diseñadas específicamente para tiendas online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all">
                <feature.icon className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conecta con tu plataforma favorita
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Store className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{int.name}</h3>
                  <p className="text-gray-500 text-sm">{int.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/integrations" className="text-green-400 hover:text-green-300 transition-colors">
              Ver todas las integraciones →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Para todo tipo de tiendas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-green-900/20 to-transparent border border-green-500/20 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-gray-400 text-sm">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Tu tienda siempre abierta
              </h2>
              <ul className="space-y-4">
                {[
                  'Acceso desde bio de Instagram, TikTok, Twitter...',
                  'Múltiples productos en un solo link',
                  'Actualiza ofertas en tiempo real',
                  'Mide qué productos generan más interés',
                  'Reduce fricción en el proceso de compra',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20">
              <div className="space-y-4">
                {['Nuevo producto', 'Oferta -30%', 'Bestseller', 'Envío gratis'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <div className="w-10 h-10 rounded bg-green-500/30 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/20">
            <ShoppingCart className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Empieza a vender hoy
            </h2>
            <p className="text-gray-400 mb-8">
              Crea tu página de links optimizada para ventas en menos de 5 minutos.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Crear cuenta gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
