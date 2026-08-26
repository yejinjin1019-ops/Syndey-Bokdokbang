import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function BrandPromise() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="brand-promise" style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-center">

          <Reveal>
            <div className="mb-8">
              <SectionLabel font={body}>{t("시드니 복덕방이 드리는 약속", "Our Promise")}</SectionLabel>
            </div>
            <blockquote
              className="font-medium mb-5 leading-relaxed"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,2.4vw,34px)", lineHeight: 1.72 }}
            >
              {t("매물의 수보다,", "We don't believe in showing you more.")}<br />
              {t("더 나은 선택을 하실 수 있도록.", "We believe in helping you choose better.")}
            </blockquote>
            <p
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: COLORS.dim,
                fontSize: "17px",
                letterSpacing: "0.01em",
              }}
            >
              {t("시드니 부동산을 바라보는 저희만의 기준입니다.", "A more considered way to look at Sydney property.")}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1748052132071-f60d147207f7?w=960&h=720&fit=crop&auto=format"
                  alt={t("따뜻한 자연광과 목재 계단이 있는 인테리어", "Warm interior with natural light and timber staircase")}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-1" style={{ backgroundColor: COLORS.yellow }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
