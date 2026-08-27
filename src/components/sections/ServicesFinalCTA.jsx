import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function ServicesFinalCTA() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="book-consultation" style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
        <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2
            className="font-medium mb-6"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
          >
            {t("첫 질문을 시작으로,", "Start with a question,")}<br />
            {t("여정을 함께해요.", "and let's walk the journey together.")}
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(14.5px,1.2vw,17px)",
              maxWidth: "460px",
            }}
          >
            {t(
              "지금 부동산 상담을 예약하고 시드니 복덕방과 함께 다음 단계를 계획해보세요.",
              "Book a property consultation and plan your next step with Sydney Bokdokbang."
            )}
          </p>
          <Button variant="fill-green" href="/contact" font={body}>
            {t("부동산 상담 예약하기", "Book a Property Consultation")} <ArrowRight size={14} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
