import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

/** Secondary section — property appraisal, for owners considering selling. */
export function PropertyAppraisalCTA() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=1050&fit=crop&auto=format"
                alt="Sydney home considered for sale"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-5">
              <SectionLabel font={body}>{t("매물 감정평가", "Property Appraisal")}</SectionLabel>
            </div>
            <h2 className="font-medium mb-5" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,38px)", lineHeight: 1.4 }}>
              {t("매각을 고민 중인 소유주를 위한 안내입니다.", "For owners considering selling their property.")}
            </h2>
            <p className="text-[14.5px] leading-relaxed mb-8" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "460px" }}>
              {t(
                "현재 보유한 부동산의 시장 가치를 무료로 감정해드립니다. 매각을 계획 중이시라면, 정확한 숫자부터 함께 확인해보세요.",
                "Get a clear, no-cost read on what your property is worth today. If you're weighing a sale, start with the numbers."
              )}
            </p>
            <Button variant="fill-green" href="/appraisal" font={body}>
              {t("무료 감정평가 신청", "Request a Free Appraisal")} <ArrowRight size={13} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
