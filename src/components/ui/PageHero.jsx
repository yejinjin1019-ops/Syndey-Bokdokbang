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
    <section style={{ backgroundColor: dark ? COLORS.green : COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-2xl">
          <div className="mb-7">
            <SectionLabel font={body} dark={dark}>{label}</SectionLabel>
          </div>
          <h1
            className="font-medium mb-6"
            style={{
              fontFamily: display,
              color: dark ? COLORS.ivory : COLORS.ink,
              fontSize: "clamp(28px,4vw,48px)",
              lineHeight: 1.35,
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
                color: dark ? "rgba(245,241,232,0.7)" : COLORS.dim,
                fontSize: "clamp(14.5px,1.3vw,18px)",
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
