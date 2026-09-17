import { Link } from "react-router-dom";
import { COLORS } from "../../lib/theme";

// Bold, simple editorial-label buttons — vintage print energy, modern web UI.
// fill-green / outline-dark = light (cream) backgrounds.
// fill-ivory / outline = dark (green) backgrounds.
const VARIANT_STYLES = {
  "fill-green": {
    backgroundColor: COLORS.green,
    color: COLORS.warm,
    border: `1.5px solid ${COLORS.green}`,
  },
  "fill-ivory": {
    backgroundColor: COLORS.warm,
    color: COLORS.green,
    border: `1.5px solid ${COLORS.warm}`,
  },
  "outline-dark": {
    backgroundColor: "transparent",
    color: COLORS.green,
    border: `1.5px solid ${COLORS.green}`,
  },
  outline: {
    backgroundColor: "transparent",
    color: COLORS.warm,
    border: "1.5px solid rgba(255,246,229,0.45)",
  },
};

const HOVER_STYLES = {
  "fill-green": { backgroundColor: COLORS.yellow, color: COLORS.green, borderColor: COLORS.yellow },
  "fill-ivory": { backgroundColor: COLORS.yellow, color: COLORS.green, borderColor: COLORS.yellow },
  "outline-dark": { backgroundColor: COLORS.green, color: COLORS.warm, borderColor: COLORS.green },
  outline: { backgroundColor: COLORS.yellow, color: COLORS.green, borderColor: COLORS.yellow },
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-6 py-3.5 text-[13.5px]",
};

/** Primary (filled) / secondary (outline) editorial button. */
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
  const classes = `group/btn relative inline-flex items-center justify-center gap-2.5 font-semibold whitespace-nowrap ${SIZE_CLASSES[size]} ${className}`;
  const base = VARIANT_STYLES[variant];
  const hover = HOVER_STYLES[variant];
  const style = {
    ...base,
    fontFamily: font,
    letterSpacing: "0.03em",
    borderRadius: "10px",
    ...(href ? { textDecoration: "none" } : {}),
  };

  const handlers = {
    onMouseEnter: (e) => Object.assign(e.currentTarget.style, hover),
    onMouseLeave: (e) => Object.assign(e.currentTarget.style, base),
  };

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal && href.startsWith("/")) {
      return (
        <Link to={href} className={classes} style={style} onClick={onClick} {...handlers}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        style={style}
        onClick={onClick}
        {...handlers}
        {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} style={style} {...handlers}>
      {children}
    </button>
  );
}
