'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  HelpCircle,
  Building2,
  Users,
  Briefcase,
  Loader2,
} from 'lucide-react';

const contactReasons = [
  { id: 'general', label: 'Consulta General', icon: MessageSquare },
  { id: 'sales', label: 'Ventas / Enterprise', icon: Building2 },
  { id: 'support', label: 'Soporte Técnico', icon: HelpCircle },
  { id: 'partnership', label: 'Partnerships', icon: Users },
  { id: 'press', label: 'Prensa', icon: Briefcase },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@linkforge.app',
    description: 'Respuesta en 24h',
  },
  {
    icon: MessageSquare,
    title: 'Chat en Vivo',
    value: 'Disponible para Pro',
    description: 'Lun-Vie 9:00-18:00',
  },
  {
    icon: MapPin,
    title: 'Oficina',
    value: 'Madrid, España',
    description: 'Solo con cita previa',
  },
];

const faqs = [
  {
    question: '¿Cuál es el tiempo de respuesta?',
    answer: 'Para consultas generales, respondemos en menos de 24 horas laborables. Los usuarios Pro tienen soporte prioritario con respuesta en menos de 4 horas.',
  },
  {
    question: '¿Tienen soporte en español?',
    answer: 'Sí, nuestro equipo de soporte habla español, inglés y portugués.',
  },
  {
    question: '¿Puedo agendar una demo?',
    answer: 'Por supuesto. Para planes Business y Enterprise ofrecemos demos personalizadas. Selecciona "Ventas / Enterprise" y cuéntanos sobre tu proyecto.',
  },
];

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿En qué podemos
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> ayudarte?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para resolver tus dudas. Elige cómo quieres contactarnos.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-purple-400 mb-1">{info.value}</p>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">¡Mensaje enviado!</h2>
                <p className="text-gray-400 mb-8">
                  Hemos recibido tu mensaje. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>

                {/* Reason Selector */}
                <div className="mb-6">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    ¿Sobre qué quieres hablar?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contactReasons.map((reason) => (
                      <button
                        key={reason.id}
                        type="button"
                        onClick={() => setSelectedReason(reason.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                          selectedReason === reason.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600'
                        }`}
                      >
                        <reason.icon className="w-4 h-4" />
                        {reason.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {(selectedReason === 'sales' || selectedReason === 'partnership') && (
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-12 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/help" className="text-purple-400 hover:text-purple-300">
              Ver todas las FAQs →
            </Link>
          </p>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <Building2 className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Buscas una solución Enterprise?
            </h2>
            <p className="text-gray-300 mb-8">
              Contacta con nuestro equipo de ventas para una demo personalizada y un plan adaptado a tu organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:enterprise@linkforge.app"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
              >
                <Mail className="w-5 h-5" />
                enterprise@linkforge.app
              </a>
              <a
                href="tel:+34900000000"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
              >
                <Phone className="w-5 h-5" />
                +34 900 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
