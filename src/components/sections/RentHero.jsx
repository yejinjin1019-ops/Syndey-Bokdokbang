import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "../ui/SectionLabel";

export function RentHero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-14 md:pb-18">
        <div className="max-w-2xl">
          <div className="mb-7">
            <SectionLabel font={body}>{t("매물 · 임대", "Properties · Rent")}</SectionLabel>
          </div>
          <h1
            className="font-medium mb-6"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.35, letterSpacing: "-0.01em" }}
          >
            {t("좋은 집은,", "Find a place that fits")}<br />
            {t("생활까지 편리해야 하니까.", "the way you live.")}
          </h1>
          <p
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(14.5px,1.3vw,18px)",
              lineHeight: 1.7,
              maxWidth: lang === "ko" ? "620px" : "480px",
            }}
          >
            {t(
              "출퇴근과 학교, 주변 생활권까지 고려해 지역과 예산에 맞는 임대 매물을 찾아보세요.",
              "Rental listings selected with your commute, schools, and daily life in mind. Browse quickly by suburb and budget."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
