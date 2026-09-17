import { COLORS } from "../../lib/theme";

/** Small editorial category label — thin rule + tracked uppercase caption,
 * styled like a magazine section marker. Use `dark` on deep-green backgrounds. */
export function SectionLabel({ children, font, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-px" style={{ backgroundColor: dark ? COLORS.yellow : COLORS.green }} />
      <span
        className="text-[11px] font-semibold uppercase"
        style={{ color: dark ? COLORS.warm : COLORS.green, fontFamily: font, letterSpacing: "0.06em" }}
      >
        {children}
      </span>
    </div>
  );
}
