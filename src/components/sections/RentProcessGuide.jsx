import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  {
    ko: "신청서", en: "Application",
    descKo: "관심 매물에 대해 신청서(개인정보, 재직/소득 증빙)를 제출합니다.",
    descEn: "Submit a rental application with your ID, income, and employment details.",
  },
  {
    ko: "서류 준비", en: "Documents",
    descKo: "여권, 비자, 급여명세서, 재직증명서 등 서류를 준비합니다.",
    descEn: "Prepare supporting documents — passport, visa, payslips, employment letter.",
  },
  {
    ko: "방문 확인", en: "Inspection",
    descKo: "오픈 하우스 또는 예약 방문으로 실제 매물을 확인합니다.",
    descEn: "View the property in person at an open inspection or private appointment.",
  },
  {
    ko: "승인", en: "Approval",
    descKo: "집주인 또는 관리 부동산이 신청서를 검토하고 승인합니다.",
    descEn: "The landlord or agent reviews the application and confirms approval.",
  },
  {
    ko: "보증금", en: "Bond",
    descKo: "임대료 4주치에 해당하는 보증금을 납부하고 등록합니다.",
    descEn: "Pay and lodge a bond, typically equal to four weeks' rent.",
  },
  {
    ko: "입주", en: "Move-in",
    descKo: "임대 계약서에 서명하고 열쇠를 받아 입주합니다.",
    descEn: "Sign the lease, collect the keys, and move in.",
  },
];

export function RentProcessGuide() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <div className="mb-6">
            <SectionLabel font={body}>{t("가이드", "Guide")}</SectionLabel>
          </div>
          <h2
            className="font-medium mb-5"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,2.6vw,34px)", lineHeight: 1.45 }}
          >
            {t("호주에서 처음 집을 구하시나요?", "Renting in Sydney for the first time?")}
          </h2>
          <p
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(14px,1.2vw,16px)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            {t(
              "호주의 임대 절차는 한국과 다릅니다. 시드니 복덕방이 한국어로 단계별 과정을 안내해 드립니다.",
              "The Australian rental process works differently from Korea's. Sydney Bokdokbang walks Korean-speaking newcomers through each step."
            )}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.en} delay={i * 60}>
              <div className="relative pl-0">
                <div
                  className="text-[11px] mb-3"
                  style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green, letterSpacing: "0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[14.5px] font-medium mb-2" style={{ fontFamily: body, color: COLORS.ink }}>
                  {t(step.ko, step.en)}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ fontFamily: body, color: COLORS.dim }}>
                  {t(step.descKo, step.descEn)}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1 -right-3 w-px h-8" style={{ backgroundColor: COLORS.stone }} />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
