import { useReveal } from "../../hooks/useReveal";

/** Wraps children in a fade-up-on-scroll transition (PRD §6 Visual craft). */
export function Reveal({ children, delay = 0, className = "", style = {} }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.7s var(--ease-editorial) ${delay}ms, transform 0.7s var(--ease-editorial) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
