import { useEffect } from "react";
import { useLanguage } from "../i18n/translations";

/** React Router doesn't reset scroll position on navigation by default —
 * this mounts inside BrowserRouter and jumps to the top of the page on every
 * route change so users always land at the top of a new page. Keyed on the
 * language-less path, so switching between /about and /en/about keeps the
 * visitor where they were. */
export function ScrollToTop() {
  const { basePath } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [basePath]);

  return null;
}
