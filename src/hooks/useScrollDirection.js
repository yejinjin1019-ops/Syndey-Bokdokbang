import { useEffect, useRef, useState } from "react";

/** Tracks whether the page is currently scrolling up or down, for the
 * header's subtle hide-on-scroll-down / reveal-on-scroll-up behaviour.
 * Ignores tiny jitters below `minDelta` so it doesn't flicker. */
export function useScrollDirection(minDelta = 6) {
  const [direction, setDirection] = useState("up");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;
      if (Math.abs(diff) >= minDelta) {
        setDirection(diff > 0 ? "down" : "up");
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minDelta]);

  return direction;
}
