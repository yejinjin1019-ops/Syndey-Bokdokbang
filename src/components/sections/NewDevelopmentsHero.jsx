import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "../ui/SectionLabel";

/** Full-bleed architectural-render hero — deliberately more atmospheric than
 * the flat PageHero used by BUY / RENT, so New Developments reads as
 * project-led rather than a resale listing page. */
export function NewDevelopmentsHero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.green }}>
      <div className="relative h-[70vh] min-h-[520px] max-h-[760px] overflow-hidden">
        <img
          src="/properties/iconica.jpg"
          alt="New Sydney development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(23,61,50,0.6) 0%, rgba(23,61,50,0.25) 42%, rgba(23,61,50,0.82) 100%)" }}
        />
        <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-end pt-32 pb-16 md:pb-24">
          <div className="mb-6">
            <SectionLabel font={body} dark>{t("매물 · 신규개발", "Properties · New Developments")}</SectionLabel>
          </div>
          <h1
            className="font-medium max-w-2xl mb-6"
            style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(30px,4.4vw,54px)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
          >
            {t("시드니 신규 개발 프로젝트", "New Sydney Developments")}
          </h1>
          <p
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: "rgba(245,241,232,0.82)",
              fontSize: "clamp(14.5px,1.3vw,18px)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            {t(
              "결정하기 전, 명확하게 설명해 드리는 엄선된 신규 개발 프로젝트입니다.",
              "Curated new developments, explained clearly before you decide."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
