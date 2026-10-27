import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export { PRERENDER_PATHS, SITE_URL, getPageMeta } from "./lib/seo.js";

/** Renders one route to HTML for scripts/prerender.mjs. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
