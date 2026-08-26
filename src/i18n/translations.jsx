import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

/**
 * Provides the current site language ("ko" | "en") and a `t(ko, en)` helper.
 * The two language versions are fully separate — a component must never
 * render both the ko and en strings at the same time.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ko");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "ko" ? "en" : "ko"));
  const t = (ko, en) => (lang === "ko" ? ko : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
