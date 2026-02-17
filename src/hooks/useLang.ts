'use client';

import { useState, useEffect } from 'react';

export type Lang = 'es' | 'en';

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'es' || stored === 'en') setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    localStorage.setItem('lang', l);
    setLangState(l);
  }

  return [lang, setLang];
}
