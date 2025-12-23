
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DATA_BY_LANG } from './data';
import { UI_TRANSLATIONS, Language, TranslationKey } from './utils/locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  data: typeof DATA_BY_LANG['en'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language]);

  const t = (key: TranslationKey): string => {
    return UI_TRANSLATIONS[language][key] || UI_TRANSLATIONS['en'][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    data: DATA_BY_LANG[language],
    dir: language === 'ar' ? 'rtl' : 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
