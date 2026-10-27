// The Korean site lives at the root (/about) and the English site under /en
// (/en/about). Plain JS so the build scripts can use it too.

export const LANGS = ["ko", "en"];

/** "/en/about" -> { lang: "en", path: "/about" }; "/about" -> { lang: "ko", path: "/about" } */
export function splitLangPath(pathname) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return { lang: "en", path: pathname.slice(3) || "/" };
  }
  return { lang: "ko", path: pathname };
}

/** Prefixes an internal path for the given language: ("/about", "en") -> "/en/about". */
export function localizePath(path, lang) {
  if (lang !== "en" || !path.startsWith("/") || splitLangPath(path).lang === "en") return path;
  return path === "/" ? "/en" : `/en${path}`;
}
