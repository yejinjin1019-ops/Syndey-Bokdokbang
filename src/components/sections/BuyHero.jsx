import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "../ui/SectionLabel";

export function BuyHero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <div className="mb-8">
            <SectionLabel font={body}>{t("매물 · 매매", "Properties · Buy")}</SectionLabel>
          </div>
          <h1
            className="font-semibold mb-6"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.16, letterSpacing: "-0.01em" }}
          >
            {t("한 번 더 눈이 가는", "Sydney homes worth")}<br />
            {t("시드니의 집들", "a closer look")}
          </h1>
          <p
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(14.5px,1.3vw,18px)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            {t(
              "시드니 복덕방이 엄선한 매매 매물입니다. 지역, 예산, 라이프스타일에 맞춰 편안하게 둘러보세요.",
              "A curated selection of resale properties across Sydney, hand-picked by Sydney Bokdokbang. Browse at your own pace, by suburb, budget, and lifestyle."
            )}
          </p>
        </div>
        <div className="mt-12 md:mt-16 h-px w-full" style={{ backgroundColor: COLORS.stone }} />
      </div>
    </section>
  );
}
