import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

export function ServicesHero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.green }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <div className="mb-7">
            <SectionLabel font={body} dark>{t("서비스", "Services")}</SectionLabel>
          </div>
          <h1
            className="font-medium mb-6"
            style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.42, letterSpacing: "-0.01em" }}
          >
            {t("첫 질문부터,", "From your first question")}<br />
            {t("첫 열쇠까지.", "to your first key.")}
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: "rgba(245,241,232,0.68)",
              fontSize: "clamp(14.5px,1.3vw,18px)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            {t(
              "시드니 복덕방은 매물을 찾아드리는 것에서 멈추지 않습니다. 상담부터 이사 후 정착까지, 여정의 모든 단계를 함께 걷습니다.",
              "Sydney Bokdokbang's role doesn't end at finding a listing. We support the full property journey — from first consult to settling into your new home."
            )}
          </p>
          <Button variant="fill-ivory" href="#book-consultation" font={body}>
            {t("상담 예약하기", "Book a Consultation")} <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
