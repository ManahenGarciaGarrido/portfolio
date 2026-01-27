'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Link2, Mail, Lock, User, Loader2, AlertCircle, Check } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading } = useUserStore();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    if (username.length < 3) {
      setError('El nombre de usuario debe tener al menos 3 caracteres');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    const success = await register(email, password, username);
    if (success) {
      router.push('/dashboard');
    } else {
      setError('Este email o nombre de usuario ya está registrado');
    }
  };

  const normalizedUsername = username.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">LinkForge</span>
        </Link>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Crea tu cuenta gratis
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Empieza a compartir tus links en segundos
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre de usuario
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="tunombre"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              {username && (
                <p className="text-sm text-gray-400 mt-2">
                  Tu página será:{' '}
                  <span className="text-purple-400">linkforge.app/{normalizedUsername}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                'Crear Mi Cuenta Gratis'
              )}
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-3">Incluido en tu cuenta gratis:</p>
            <ul className="space-y-2">
              {['5 links personalizados', '3 temas profesionales', 'Analytics básicos'].map(
                (benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400" />
                    {benefit}
                  </li>
                )
              )}
            </ul>
          </div>

          <p className="text-gray-400 text-center mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-medium">
              Inicia sesión
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <p className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
