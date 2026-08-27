import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router doesn't reset scroll position on navigation by default —
 * this mounts inside BrowserRouter and jumps to the top of the page on every
 * route change so users always land at the top of a new page. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
