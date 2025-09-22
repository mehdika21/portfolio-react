import React, { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react';
import { translations, type Lang, type TKey } from './translations';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
};

const I18nContext = createContext<Ctx>({ lang: 'fr', setLang: () => {}, t: (k) => k });

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('fr');

  // hydrate from localStorage once on mount
  useEffect(() => {
    const saved = (localStorage.getItem('lang') as Lang | null) || 'fr';
    setLang(saved);
  }, []);

  // persist on change
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key: TKey) => translations[lang][key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
