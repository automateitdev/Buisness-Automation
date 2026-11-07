'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { localize } from './localize';

const STORAGE_KEY = 'automate-lang';
const SUPPORTED = ['en', 'bn'];

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, toggleLang: () => {} });

export function LanguageProvider({ children }) {
  // Start with 'en' on both server and client so hydration matches,
  // then switch to the saved preference after mount.
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // Reading localStorage must happen after mount so server and client HTML match.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (SUPPORTED.includes(saved)) setLangState(saved);
    } catch {
      /* storage unavailable — stay on default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === 'en' ? 'bn' : 'en'), [lang, setLang]);

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/**
 * Returns `english` content overlaid with `bangla` when the site language is Bangla.
 * Usage:  const nav = useLocalized(NAV_ITEMS, NAV_ITEMS_BN);
 */
export function useLocalized(english, bangla) {
  const { lang } = useLang();
  return useMemo(() => (lang === 'bn' ? localize(english, bangla) : english), [lang, english, bangla]);
}
