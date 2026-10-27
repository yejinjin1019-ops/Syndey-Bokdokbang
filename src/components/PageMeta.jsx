import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, getPageMeta } from "../lib/seo";

const OG_LOCALE = { ko: "ko_KR", en: "en_AU" };

function setHeadTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const createMeta = (key, name) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, name);
  return el;
};

const createLink = (rel, hreflang) => () => {
  const el = document.createElement("link");
  el.rel = rel;
  if (hreflang) el.hreflang = hreflang;
  return el;
};

/** Keeps <title>, the meta description, Open Graph tags, the canonical link
 * and the ko/en hreflang alternates in sync with the current route. The
 * prerendered HTML already ships these per page; this keeps them right
 * during client-side navigation. */
export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, lang, path, alternates, found } = getPageMeta(pathname);
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setHeadTag('meta[name="description"]', createMeta("name", "description"), "content", description);
    setHeadTag('meta[property="og:title"]', createMeta("property", "og:title"), "content", title);
    setHeadTag('meta[property="og:description"]', createMeta("property", "og:description"), "content", description);
    setHeadTag('meta[property="og:url"]', createMeta("property", "og:url"), "content", url);
    setHeadTag('meta[property="og:locale"]', createMeta("property", "og:locale"), "content", OG_LOCALE[lang]);

    const linked = document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]');
    if (!found) {
      linked.forEach((el) => el.remove());
      return;
    }
    setHeadTag('link[rel="canonical"]', createLink("canonical"), "href", url);
    for (const [hreflang, altPath] of [...Object.entries(alternates), ["x-default", alternates.ko]]) {
      setHeadTag(`link[rel="alternate"][hreflang="${hreflang}"]`, createLink("alternate", hreflang), "href", `${SITE_URL}${altPath}`);
    }
  }, [pathname]);

  return null;
}
