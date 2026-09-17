import { useReveal } from "../../hooks/useReveal";
import { COLORS } from "../../lib/theme";

/** A thin editorial rule that grows from 0 to full width once, when it
 * scrolls into view. Use selectively beneath section headings, property
 * information, or footer navigation — not on every divider. Animates via
 * `transform: scaleX()` (not `width`) to stay off the layout-triggering
 * property list. */
export function RevealRule({ color = COLORS.green, height = 1, delay = 0, className = "", style = {} }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={style}>
      <div
        style={{
          height,
          backgroundColor: color,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: `transform 0.6s var(--ease-editorial) ${delay}ms`,
        }}
      />
    </div>
  );
}
