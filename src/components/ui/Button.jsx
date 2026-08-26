import { COLORS } from "../../lib/theme";

const VARIANT_STYLES = {
  "fill-ivory": { backgroundColor: COLORS.ivory, color: COLORS.green },
  "fill-green": { backgroundColor: COLORS.green, color: COLORS.ivory },
  outline: {
    border: "1px solid rgba(245,241,232,0.35)",
    color: COLORS.ivory,
    fontWeight: 400,
    backgroundColor: "transparent",
  },
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-6 py-3.5 text-[13.5px]",
};

/** Primary (filled) / outline button per PRD §6 Design System. */
export function Button({
  variant = "fill-ivory",
  size = "md",
  href,
  onClick,
  type = "button",
  font,
  className = "",
  children,
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 font-semibold transition-opacity hover:opacity-85 ${SIZE_CLASSES[size]} ${className}`;
  const style = {
    ...VARIANT_STYLES[variant],
    fontFamily: font,
    letterSpacing: "0.03em",
    ...(href ? { textDecoration: "none" } : {}),
  };

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}
