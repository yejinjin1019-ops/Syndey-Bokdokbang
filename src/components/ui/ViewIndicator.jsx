import { COLORS } from "../../lib/theme";

/** Small circular "VIEW" indicator that appears over large property
 * photography on hover (desktop only — hidden on touch via .view-indicator
 * in motion.css). Parent must be `relative` and carry the `group` class. */
export function ViewIndicator({ label = "VIEW", font }) {
  return (
    <div className="view-indicator absolute inset-0 flex items-center justify-center pointer-events-none">
      <span
        className="flex items-center justify-center rounded-full font-semibold uppercase"
        style={{
          width: 58,
          height: 58,
          backgroundColor: COLORS.green,
          color: COLORS.warm,
          fontSize: "10.5px",
          letterSpacing: "0.08em",
          fontFamily: font,
        }}
      >
        {label}
      </span>
    </div>
  );
}
