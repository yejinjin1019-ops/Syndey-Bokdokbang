import { useEffect, useState } from "react";

/** True once the page has been scrolled past `threshold` px. Used by the
 * header to switch from a transparent to a frosted background. */
export function useScrollState(threshold = 56) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
