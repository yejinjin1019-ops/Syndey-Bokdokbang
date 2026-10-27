import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { localizePath, splitLangPath } from "./paths";

const LanguageContext = createContext(null);

/**
 * Provides the current site language ("ko" | "en") and a `t(ko, en)` helper.
 * The language comes from the URL — the English site lives under /en — so
 * each language has its own crawlable pages; switching language navigates
 * to the same page in the other language. `basePath` is the current path
 * without the /en prefix, for comparing against nav links.
 * The two language versions are fully separate — a component must never
 * render both the ko and en strings at the same time.
 */
export function LanguageProvider({ children }) {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { lang, path: basePath } = splitLangPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    if (next !== lang) navigate(localizePath(basePath, next) + search + hash);
  };
  const toggleLang = () => setLang(lang === "ko" ? "en" : "ko");
  const t = (ko, en) => (lang === "ko" ? ko : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, basePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
