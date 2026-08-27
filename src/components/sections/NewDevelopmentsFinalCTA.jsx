import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function NewDevelopmentsFinalCTA() {
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
            {t("어떤 프로젝트가", "Not sure which")}<br />
            {t("맞는지 궁금하신가요?", "project is right for you?")}
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
              "분양가, 완공 시점, 계약 절차까지 — 결정하기 전에 시드니 복덕방과 먼저 상담하세요.",
              "Pricing, timelines, and the contract process — talk it through with Sydney Bokdokbang before you decide."
            )}
          </p>
          <Button variant="fill-green" href="/contact" font={body}>
            {t("프로젝트 상담 예약하기", "Book a Project Consultation")} <ArrowRight size={14} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
