'use client';

import Link from 'next/link';
import { Link2, Twitter, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  producto: [
    { name: 'Características', href: '/features' },
    { name: 'Integraciones', href: '/integrations' },
    { name: 'Templates', href: '/templates' },
    { name: 'Precios', href: '/pricing' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
  soluciones: [
    { name: 'Para Creadores', href: '/solutions/creators' },
    { name: 'Para Empresas', href: '/solutions/business' },
    { name: 'Para Desarrolladores', href: '/developers' },
    { name: 'Para E-commerce', href: '/solutions/ecommerce' },
    { name: 'Para Agencias', href: '/solutions/agencies' },
  ],
  recursos: [
    { name: 'Blog', href: '/blog' },
    { name: 'Centro de Ayuda', href: '/help' },
    { name: 'Guías', href: '/guides' },
    { name: 'API Docs', href: '/developers/docs' },
    { name: 'Estado del Sistema', href: '/status' },
    { name: 'Comparativa', href: '/compare' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Carreras', href: '/careers' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Prensa', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacidad', href: '/legal/privacy' },
    { name: 'Términos', href: '/legal/terms' },
    { name: 'Cookies', href: '/legal/cookies' },
    { name: 'GDPR', href: '/legal/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LinkForge</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              La plataforma líder para crear páginas de links profesionales.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-2">
              {footerLinks.soluciones.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-1">Suscríbete a nuestra newsletter</h4>
              <p className="text-gray-400 text-sm">Recibe tips, actualizaciones y recursos exclusivos.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 md:w-64 bg-white/10 border border-white/20 rounded-xl py-2 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LinkForge. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Todos los sistemas operativos
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Hecho con ❤️ en España</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
