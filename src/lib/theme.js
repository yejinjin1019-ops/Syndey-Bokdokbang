// Brand colour tokens (see PRD §8 Colour Direction).
export const COLORS = {
  green: "#173D32",
  ivory: "#F5F1E8",
  warm: "#FAF9F5",
  ink: "#232522",
  stone: "#DDD8CE",
  yellow: "#E4B834",
  dim: "#706D65",
};

// Korean fonts are kept fixed regardless of language (PRD §7).
export const FONT_KO_DISPLAY = '"Noto Serif KR", "Malgun Gothic", serif';
export const FONT_KO_BODY = 'Pretendard, "Helvetica Neue", Helvetica, Arial, sans-serif';

// English fonts per brand refresh: Playfair Display (display) + Neue Haas
// Grotesk Text (body/nav/UI, commercial font — falls back to Helvetica Neue).
export const FONT_EN_DISPLAY = '"Playfair Display", Georgia, serif';
export const FONT_EN_BODY = '"Neue Haas Grotesk Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

/**
 * Resolves the display/body font stacks for the given language.
 * Never mix KO and EN font sets on the same screen.
 */
export function getThemeFonts(lang) {
  return {
    display: lang === "ko" ? FONT_KO_DISPLAY : FONT_EN_DISPLAY,
    body: lang === "ko" ? FONT_KO_BODY : FONT_EN_BODY,
  };
}
