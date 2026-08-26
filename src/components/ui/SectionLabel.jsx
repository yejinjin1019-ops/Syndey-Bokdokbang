import { COLORS } from "../../lib/theme";

/** Small yellow accent line + uppercase eyebrow label (PRD §6 Visual craft).
 * Use `dark` on deep-green backgrounds (New Developments, Final CTA, ...). */
export function SectionLabel({ children, font, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-px" style={{ backgroundColor: COLORS.yellow }} />
      <span
        className="text-[9.5px] tracking-[0.24em] uppercase"
        style={{ color: dark ? "rgba(245,241,232,0.5)" : COLORS.dim, fontFamily: font }}
      >
        {children}
      </span>
    </div>
  );
}
