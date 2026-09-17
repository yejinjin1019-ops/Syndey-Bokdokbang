import { useReveal } from "../../hooks/useReveal";

/** Reveals each line of a heading independently — a slow, confident upward
 * entrance (never letter-by-letter, never typewriter). Wrap the whole
 * heading in one overflow-hidden mask per line so the motion reads as the
 * text rising into place rather than simply fading. */
export function RevealLines({ lines, as: Tag = "div", delayStep = 100, baseDelay = 0, className = "", style = {} }) {
  const { ref, visible } = useReveal();
  return (
    <Tag ref={ref} className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden" }}>
          <span
            style={{
              display: "block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: `opacity 0.8s var(--ease-editorial) ${baseDelay + i * delayStep}ms, transform 0.8s var(--ease-editorial) ${baseDelay + i * delayStep}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
