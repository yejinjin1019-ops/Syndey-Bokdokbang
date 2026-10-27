import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, getPageMeta } from "../lib/seo";

function setHeadTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps <title>, the meta description, Open Graph tags and the canonical
 * link in sync with the current route. The prerendered HTML already ships
 * these per page; this keeps them right during client-side navigation. */
export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, path } = getPageMeta(pathname);
    const url = `${SITE_URL}${path}`;
    const meta = (key, name) => () => {
      const el = document.createElement("meta");
      el.setAttribute(key, name);
      return el;
    };

    document.title = title;
    setHeadTag('meta[name="description"]', meta("name", "description"), "content", description);
    setHeadTag('meta[property="og:title"]', meta("property", "og:title"), "content", title);
    setHeadTag('meta[property="og:description"]', meta("property", "og:description"), "content", description);
    setHeadTag('meta[property="og:url"]', meta("property", "og:url"), "content", url);
    setHeadTag(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement("link");
        el.rel = "canonical";
        return el;
      },
      "href",
      url
    );
  }, [pathname]);

  return null;
}
