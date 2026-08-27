import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "../ui/SectionLabel";

/** Full-bleed architectural-photography hero for the /properties landing page. */
export function PropertiesHero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.green }}>
      <div className="relative h-[78vh] min-h-[560px] max-h-[820px] overflow-hidden">
        <img
          src="/properties/mulberry.jpg"
          alt="Sydney architectural property"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(23,61,50,0.55) 0%, rgba(23,61,50,0.2) 42%, rgba(23,61,50,0.8) 100%)" }}
        />
        <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-end pt-32 pb-16 md:pb-24">
          <div className="mb-6">
            <SectionLabel font={body} dark>{t("매물", "Properties")}</SectionLabel>
          </div>
          <h1
            className="font-medium max-w-2xl mb-6"
            style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(30px,4.4vw,54px)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
          >
            {t("당신의 다음 시드니 주소를 찾아드립니다.", "Finding your next Sydney address.")}
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
              "매매, 임대, 신규 분양까지 — 시드니 복덕방이 모든 여정을 함께합니다.",
              "Buy, rent, or explore new developments — Sydney Bokdokbang guides every step of the way."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
