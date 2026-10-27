import { Link as RouterLink } from "react-router-dom";
import { useLanguage } from "./translations";
import { localizePath } from "./paths";

/** Drop-in replacement for react-router's Link that keeps the visitor in
 * their language: on the English site, to="/about" points at /en/about. */
export function Link({ to, ...props }) {
  const { lang } = useLanguage();
  return <RouterLink to={typeof to === "string" ? localizePath(to, lang) : to} {...props} />;
}
