// Brand colour tokens — Sydney Bokdokbang visual identity v3.0
// "1970s Korean neighbourhood real estate x Sydney architecture magazine"
export const COLORS = {
  green: "#236C1B",   // Primary Green — nav, headings, buttons, outlines
  yellow: "#FBE148",  // Sun Yellow — CTA accents, badges, hover states (use sparingly)
  pink: "#F2A0B8",    // Bokdok Pink — editorial accent (Hero: dividers, arrows, hover states)
  pinkLight: "#FBDCE5", // Light Bokdok Pink — soft accent (Hero divider strip)
  warm: "#FFF6E5",    // Warm Cream — primary background
  ivory: "#FBF0D6",   // secondary cream — card / section contrast against warm
  ink: "#191A17",     // Ink — body copy, dark type, borders
  dim: "rgba(25,26,23,0.68)",  // muted ink — metadata, secondary copy
  stone: "rgba(25,26,23,0.16)", // hairline borders / neutral washes

  // Secondary editorial accents — occasional use only, never all at once.
  tangerine: "#FF6B35",
  blue: "#3984FF",
  lime: "#C8F135",

  // Legacy aliases kept so any untouched call site still resolves to an
  // on-brand colour (vivid/clay predate this palette).
  vivid: "#FBE148",
  clay: "#FF6B35",
};

// Korean fonts are kept fixed regardless of language.
export const FONT_KO_DISPLAY = '"Noto Serif KR", "Malgun Gothic", serif';
export const FONT_KO_BODY = 'Pretendard, "Helvetica Neue", Helvetica, Arial, sans-serif';

// English display: Fraunces (editorial, slightly vintage/architectural).
// Body/UI: Pretendard for both languages — never mix font systems on one screen.
export const FONT_EN_DISPLAY = '"Fraunces", Georgia, serif';
export const FONT_EN_BODY = 'Pretendard, "Helvetica Neue", Helvetica, Arial, sans-serif';

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
