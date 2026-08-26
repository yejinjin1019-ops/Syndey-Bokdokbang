import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function RentFinalCTA() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
        <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2
            className="font-medium mb-6"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
          >
            {t("임대가", "New to")}<br />
            {t("처음이신가요?", "renting?")}
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
              "한국어 임대 가이드를 읽어보시거나, 시드니 복덕방에 직접 문의해 보세요.",
              "Read our Korean rental guide, or reach out to Sydney Bokdokbang directly."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <Button variant="outline-dark" href="#" font={body}>
              {t("한국어 임대 가이드 읽기", "Read the Korean Rental Guide")} <ArrowRight size={14} />
            </Button>
            <Button variant="fill-green" href="#" font={body}>
              <MessageCircle size={14} /> {t("복덕방에 문의하기", "Ask Bokdokbang")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
