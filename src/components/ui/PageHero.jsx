import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "./SectionLabel";

/**
 * Generic page hero — SectionLabel + H1 + subtitle, matching the pattern
 * used by BuyHero/ServicesHero/RentHero. Used by new simple pages so we
 * don't hand-roll a bespoke hero per route.
 */
export function PageHero({ label, titleKo, titleEn, descKo, descEn, dark = false, children }) {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: dark ? COLORS.green : COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="mb-8">
            <SectionLabel font={body} dark={dark}>{label}</SectionLabel>
          </div>
          <h1
            className="font-semibold mb-7 whitespace-pre-line"
            style={{
              fontFamily: display,
              color: dark ? COLORS.warm : COLORS.ink,
              fontSize: "clamp(34px,5vw,64px)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}
          >
            {t(titleKo, titleEn)}
          </h1>
          {(descKo || descEn) && (
            <p
              className="whitespace-pre-line"
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: dark ? "rgba(255,246,229,0.72)" : COLORS.dim,
                fontSize: "clamp(15px,1.3vw,19px)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              {t(descKo, descEn)}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
