import { ArrowRight, Target, MapPin, Building2, LineChart, ClipboardCheck, Languages } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { Button } from "../../components/ui/Button";

const ADVISORY_SERVICES = [
  {
    icon: Target,
    titleKo: "목표 파악", titleEn: "Understanding Your Goals",
    descKo: "실거주인지, 투자인지, 예산과 타임라인은 어떤지 — 먼저 상황을 충분히 듣습니다.",
    descEn: "Owner-occupier or investor, budget, timeline — we start by listening closely to your situation.",
  },
  {
    icon: MapPin,
    titleKo: "지역·매물 비교", titleEn: "Area & Property Comparison",
    descKo: "관심 지역과 매물 유형을 나란히 비교해, 무엇이 왜 다른지 있는 그대로 설명해드립니다.",
    descEn: "We compare suburbs and property types side by side, and explain the differences plainly.",
  },
  {
    icon: Building2,
    titleKo: "프로젝트 검토", titleEn: "Project Review",
    descKo: "신축 개발이나 특정 프로젝트를 고려 중이시라면, 계획과 진행 상황을 함께 살펴봅니다.",
    descEn: "Considering a new development or specific project? We review its plans and progress with you.",
  },
  {
    icon: LineChart,
    titleKo: "가격·가치 맥락", titleEn: "Price & Value Context",
    descKo: "최근 거래 사례와 시장 흐름을 바탕으로, 가격이 놓인 맥락을 이해하기 쉽게 정리해드립니다.",
    descEn: "Recent sales and market movement, laid out clearly so the price makes sense in context.",
  },
  {
    icon: ClipboardCheck,
    titleKo: "구매 고려사항", titleEn: "Purchase Considerations",
    descKo: "계약 조건, 점검 사항, 예상되는 비용까지 — 결정에 앞서 챙겨야 할 부분을 짚어드립니다.",
    descEn: "Contract terms, inspections, and likely costs — the practical points worth weighing before you decide.",
  },
  {
    icon: Languages,
    titleKo: "한국어 설명", titleEn: "Korean-Language Explanation",
    descKo: "복잡한 용어와 절차도 한국어로 정확하게 풀어드려, 오해 없이 판단하실 수 있습니다.",
    descEn: "Complex terms and processes explained accurately in Korean, so nothing gets lost in translation.",
  },
];

const PROCESS_STEPS = [
  { n: "01", ko: "상담", en: "Consult" },
  { n: "02", ko: "이해", en: "Understand" },
  { n: "03", ko: "비교", en: "Compare" },
  { n: "04", ko: "검토", en: "Review" },
  { n: "05", ko: "결정", en: "Decide" },
  { n: "06", ko: "구매", en: "Purchase" },
];

export function PropertyAdvisoryPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 부동산 어드바이저리", "Services · Property Advisory")}
        titleKo="좋은 조언이 더 나은 결정을 만듭니다"
        titleEn="Better property decisions start with better advice."
        descKo="시드니 복덕방은 매물을 파는 곳이 아니라, 결정을 돕는 곳입니다. 구매를 결정하기 전, 필요한 정보와 관점을 차분히 함께 정리합니다."
        descEn="Sydney Bokdokbang isn't here to sell you a property — we're here to help you decide. Before you buy, we help you think it through, calmly and clearly."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("어드바이저리 서비스", "Advisory Services")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("결정을 내리기 전에 필요한 것들", "What you need before you decide.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: COLORS.stone }}>
            {ADVISORY_SERVICES.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
              <Reveal
                key={titleEn}
                delay={i * 60}
                className="border-r border-b p-8 lg:p-10"
                style={{ borderColor: COLORS.stone }}
              >
                <Icon size={20} style={{ color: COLORS.green }} className="mb-6" />
                <h3 className="text-[16px] md:text-[17px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
                  {t(titleKo, titleEn)}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t(descKo, descEn)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("진행 과정", "Our Process")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("서두르지 않고, 단계마다 함께", "No rush — a step at a time, together.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.en} delay={i * 60}>
                <div className="relative">
                  <div
                    className="text-[11px] mb-3"
                    style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green, letterSpacing: "0.05em" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="text-[14.5px] font-medium" style={{ fontFamily: body, color: COLORS.ink }}>
                    {t(step.ko, step.en)}
                  </h3>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1 -right-3 w-px h-8" style={{ backgroundColor: COLORS.stone }} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("결정하기 전, 먼저 상담을 받아보세요", "Before you decide, let's talk it through first.")}
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
                "현명한 판단을 내리실 수 있도록 필요한 정보와 다양한 관점을 솔직하고 성실하게 전달해드립니다.",
                "We don't promise outcomes. We simply offer the information and perspective you need to judge for yourself, honestly."
              )}
            </p>
            <Button variant="fill-green" href="/contact" font={body}>
              {t("부동산 상담 예약하기", "Book a Property Consultation")} <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
