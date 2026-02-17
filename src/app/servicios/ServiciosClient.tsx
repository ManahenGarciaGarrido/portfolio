'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check, X, ShoppingBag, Building2, Image as ImageIcon,
  Monitor, FileText, Code2, ArrowRight
} from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import SiteFooter from '@/components/portfolio/SiteFooter';
import { fadeUp, staggerContainer } from '@/lib/animations';
import PriceCalculator from '@/components/portfolio/PriceCalculator';

const serviceTypes = [
  { icon: Monitor, title: 'Landing Pages', desc: 'Páginas de ventas o presentación con máximo impacto. Diseño orientado a conversión.' },
  { icon: Building2, title: 'Webs Corporativas', desc: 'Sitios de empresa o profesional con múltiples secciones y páginas.' },
  { icon: ShoppingBag, title: 'Tiendas Online', desc: 'E-commerce completo con catálogo de productos, carrito y pasarela de pago.' },
  { icon: ImageIcon, title: 'Portfolios', desc: 'Showcases visuales para fotógrafos, arquitectos, artistas o creativos.' },
  { icon: FileText, title: 'Blogs / Revistas', desc: 'Publicaciones digitales con gestión de contenido, categorías y SEO integrado.' },
  { icon: Code2, title: 'Aplicaciones Web', desc: 'Plataformas SaaS, paneles de administración o apps con lógica compleja.' },
];

const included = [
  'Diseño UI/UX personalizado',
  'Responsive en todos los dispositivos',
  'Animaciones y transiciones fluidas',
  'Código limpio y tipado (TypeScript)',
  'Optimización de rendimiento (Core Web Vitals)',
  'SEO técnico básico (metadatos, sitemap, schema)',
  'Accesibilidad básica',
  'Entrega del código fuente completo',
];

const notIncluded = [
  'Creación de logotipo o identidad corporativa',
  'Redacción de textos y copywriting',
  'Fotografía o creación de imágenes/vídeos',
  'Campañas de SEO/SEM activas',
  'Gestión de redes sociales',
  'Soporte técnico continuado (salvo plan de mantenimiento)',
  'Formación sobre el sistema',
  'Registro o renovación del dominio',
  'Contratación del hosting (sí te asesoro)',
];

const techStack = [
  { name: 'Next.js', note: 'Framework principal' },
  { name: 'React', note: 'UI Library' },
  { name: 'TypeScript', note: 'Tipado estático' },
  { name: 'Tailwind CSS', note: 'Estilos' },
  { name: 'Framer Motion', note: 'Animaciones' },
  { name: 'Node.js', note: 'Backend' },
  { name: 'PostgreSQL', note: 'Base de datos' },
  { name: 'MongoDB', note: 'BD NoSQL' },
  { name: 'Prisma', note: 'ORM' },
  { name: 'Stripe', note: 'Pagos' },
  { name: 'Resend', note: 'Email' },
  { name: 'Vercel', note: 'Despliegue' },
];

export default function ServiciosClient() {
  return (
    <div style={{ background: '#050010', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(180deg, #0d0030 0%, #050010 100%)' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-6xl font-black text-white mb-4"
        >
          Servicios & Precios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto"
        >
          Qué construyo, con qué tecnologías y cuánto cuesta — todo claro desde el principio.
        </motion.p>
      </section>

      {/* Types of sites */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#070012' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-8 sm:mb-12 text-center"
          >
            ¿Qué tipo de webs hago?
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {serviceTypes.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-5 sm:p-6 rounded-2xl border border-white/8 hover:border-purple-500/30 transition-colors"
                style={{ background: 'rgba(108,0,255,0.04)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6c00ff33, #00d4ff33)' }}
                >
                  <Icon size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Included / Not included */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#06000f' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-green-500/20"
            style={{ background: 'rgba(0,200,100,0.04)' }}
          >
            <h3 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={14} className="text-green-400" />
              </span>
              Qué incluye siempre
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-red-500/15"
            style={{ background: 'rgba(255,50,50,0.03)' }}
          >
            <h3 className="text-white font-black text-xl sm:text-2xl mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </span>
              Qué no está incluido
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#07001a' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-white mb-8 sm:mb-10 text-center"
          >
            Tecnologías que uso
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techStack.map(({ name, note }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="px-4 py-2.5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors text-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="text-white font-semibold text-sm">{name}</div>
                <div className="text-white/30 text-xs mt-0.5">{note}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Price calculator */}
      <PriceCalculator />

      {/* CTA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: '#050010' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(108,0,255,0.16), rgba(0,212,255,0.08))', border: '1px solid rgba(108,0,255,0.25)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">¿No sabes qué necesitas?</h2>
          <p className="text-white/50 text-sm sm:text-base mb-6">Cuéntame tu idea y te oriento sin compromiso.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg, #6c00ff, #00d4ff)' }}
          >
            Hablemos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
