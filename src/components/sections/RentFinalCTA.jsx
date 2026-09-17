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
        <Reveal className="max-w-[820px] mx-auto text-center flex flex-col items-center">
          <div className="w-10 h-[2px] mb-7" style={{ backgroundColor: COLORS.green }} />
          <h2
            className="font-semibold mb-7"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(32px,4.5vw,56px)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
          >
            {t("임대가", "New to")}<br />
            {t("처음이신가요?", "renting?")}
          </h2>
          <p
            className="mb-11"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(15px,1.3vw,19px)",
              maxWidth: "460px",
            }}
          >
            {t(
              "마음에 드는 매물을 찾으셨다면 신청서를 접수하시거나, 시드니 복덕방에 직접 문의해 보세요.",
              "Ready to move forward on a listing? Submit your application, or reach out to SBB directly."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <Button variant="outline-dark" href="/services/property-management/tenant-application" font={body}>
              {t("매물 신청하기", "Apply for Property")} <ArrowRight size={14} />
            </Button>
            <Button variant="fill-green" href="/contact" font={body}>
              <MessageCircle size={14} /> {t("시드니 복덕방에 문의하기", "Ask SBB")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
