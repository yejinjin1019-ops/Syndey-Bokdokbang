import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.sydneybokdokbang.com";

/** Every route is served from the same index.html, so this gives each page
 * its own canonical URL (React 19 hoists the <link> into <head>). Keeps
 * Google from treating sub-pages as duplicates of the home page. */
export function CanonicalLink() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";

  return <link rel="canonical" href={`${SITE_URL}${path}`} />;
}
