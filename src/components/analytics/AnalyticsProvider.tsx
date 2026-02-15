'use client';

import { useState, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from './GoogleAnalytics';
import MicrosoftClarity from './MicrosoftClarity';
import CookieConsent from './CookieConsent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? '';

export default function AnalyticsProvider() {
  const [consentGranted, setConsentGranted] = useState(false);

  const handleConsent = useCallback((status: 'granted' | 'denied') => {
    setConsentGranted(status === 'granted');
  }, []);

  return (
    <>
      {/* Vercel Analytics: sin cookies, sin datos personales, siempre activo */}
      <Analytics />

      {/* GA4 y Clarity: solo tras consentimiento explícito (GDPR) */}
      <GoogleAnalytics measurementId={GA_ID} enabled={consentGranted} />
      <MicrosoftClarity projectId={CLARITY_ID} enabled={consentGranted} />

      {/* Banner de cookies GDPR */}
      <CookieConsent onConsent={handleConsent} />
    </>
  );
}
