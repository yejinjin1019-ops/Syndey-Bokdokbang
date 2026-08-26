import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function BuyFinalCTA() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
        <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2
            className="font-medium mb-6"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
          >
            {t("어디서부터 시작해야 할지", "Not sure where")}<br />
            {t("막막하신가요?", "to start?")}
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
              "매물 상담을 예약하고 시드니 복덕방과 함께 나에게 맞는 집을 찾아보세요.",
              "Book a property consultation and let Sydney Bokdokbang help you find the right home."
            )}
          </p>
          <Button variant="fill-green" href="#" font={body}>
            {t("부동산 상담 예약하기", "Book a Property Consultation")} <ArrowRight size={14} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
