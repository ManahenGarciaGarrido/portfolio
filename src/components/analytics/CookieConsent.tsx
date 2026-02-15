'use client';

import { useState, useEffect } from 'react';

export type ConsentStatus = 'granted' | 'denied' | 'pending';

interface CookieConsentProps {
  onConsent: (status: 'granted' | 'denied') => void;
}

const STORAGE_KEY = 'analytics_consent';

export function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'granted' || stored === 'denied') return stored;
  return 'pending';
}

export default function CookieConsent({ onConsent }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === 'pending') {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    } else {
      onConsent(stored);
    }
  }, [onConsent]);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'granted');
    setVisible(false);
    onConsent('granted');
  }

  function handleDeny() {
    localStorage.setItem(STORAGE_KEY, 'denied');
    setVisible(false);
    onConsent('denied');
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-white/70 leading-relaxed">
          <span className="font-semibold text-white">Cookies de analítica</span>
          {' '}— Usamos Google Analytics y Microsoft Clarity para entender cómo se usa
          esta web (páginas visitadas, dispositivos, ubicación). No vendemos tus datos.
          Puedes rechazar y seguir navegando sin problemas.{' '}
          <a
            href="/privacidad"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            Política de privacidad
          </a>
          .
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDeny}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-neutral-900 hover:bg-white/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
