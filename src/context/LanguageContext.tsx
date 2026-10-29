'use client';
import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react';
import { Language, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LANG_KEY = 'portfolio_lang';
const LANG_EVENT = 'portfolio-lang-change';

function subscribeLang(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = () => onStoreChange();
  window.addEventListener('storage', handler);
  window.addEventListener(LANG_EVENT, handler);
  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(LANG_EVENT, handler);
  };
}

function getLangSnapshot(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(LANG_KEY);
  return saved === 'id' ? 'id' : 'en';
}

function getLangServerSnapshot(): Language {
  return 'en';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    localStorage.setItem(LANG_KEY, newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new Event(LANG_EVENT));
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'en' as Language,
      setLang: () => {},
      toggleLang: () => {},
      t: translations.en,
    };
  }
  return context;
}
