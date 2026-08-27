import { ArrowRight, Scale, Percent, Search } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { Button } from "../../components/ui/Button";

const TIMELINE_STEPS = [
  {
    n: "01", ko: "계약", en: "Contract",
    descKo: "매매 계약서에 서명하고 조건을 확정합니다.",
    descEn: "Contracts are exchanged and terms are locked in.",
  },
  {
    n: "02", ko: "자금", en: "Finance",
    descKo: "대출 승인을 확정하고 자금 계획을 진행합니다.",
    descEn: "Loan approval is finalised and funding is arranged.",
  },
  {
    n: "03", ko: "점검", en: "Inspection",
    descKo: "건물 및 해충 점검으로 매물 상태를 확인합니다.",
    descEn: "Building and pest inspections confirm the property's condition.",
  },
  {
    n: "04", ko: "법무", en: "Conveyancing",
    descKo: "컨베이언서 또는 변호사가 소유권 이전 서류를 준비합니다.",
    descEn: "A conveyancer or solicitor prepares the title transfer.",
  },
  {
    n: "05", ko: "사전 점검", en: "Pre-Settlement",
    descKo: "잔금일 직전, 최종 점검과 서류를 정리합니다.",
    descEn: "A final walkthrough and paperwork ahead of settlement day.",
  },
  {
    n: "06", ko: "잔금", en: "Settlement",
    descKo: "잔금이 지급되고 소유권이 이전됩니다.",
    descEn: "Funds are paid and ownership officially transfers.",
  },
  {
    n: "07", ko: "열쇠", en: "Keys",
    descKo: "새로운 집의 열쇠를 받습니다.",
    descEn: "You receive the keys to your new home.",
  },
];

const NETWORK_ITEMS = [
  {
    icon: Scale,
    titleKo: "컨베이언서 / 변호사", titleEn: "Conveyancer / Solicitor",
    descKo: "계약 검토와 소유권 이전 서류를 담당하는 법무 전문가입니다.",
    descEn: "Licensed legal professionals who handle contract review and title transfer.",
  },
  {
    icon: Percent,
    titleKo: "모기지", titleEn: "Mortgage",
    descKo: "대출 상품 비교와 승인 절차를 안내하는 모기지 브로커입니다.",
    descEn: "Mortgage brokers who guide loan comparison and the approval process.",
  },
  {
    icon: Search,
    titleKo: "점검", titleEn: "Inspection",
    descKo: "건물 및 해충 점검을 수행하는 공인 점검 전문가입니다.",
    descEn: "Licensed specialists who carry out building and pest inspections.",
  },
];

function DesktopTimeline({ t, display, body }) {
  return (
    <div className="hidden lg:block relative pt-2">
      <div className="absolute top-[9px] left-[34px] right-[34px] h-px" style={{ backgroundColor: COLORS.stone }} />
      <div className="flex items-start relative">
        {TIMELINE_STEPS.map((step) => (
          <div key={step.en} className="flex-1 flex flex-col items-center text-center px-2">
            <div
              className="w-3.5 h-3.5 rounded-full mb-6 relative z-10"
              style={{ border: `2px solid ${COLORS.green}`, backgroundColor: COLORS.warm }}
            />
            <div className="text-[10.5px] mb-2" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green, letterSpacing: "0.05em" }}>
              {step.n}
            </div>
            <h3 className="text-[14.5px] font-medium mb-2" style={{ fontFamily: body, color: COLORS.ink }}>
              {t(step.ko, step.en)}
            </h3>
            <p className="text-[12px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "150px" }}>
              {t(step.descKo, step.descEn)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileTimeline({ t, body }) {
  return (
    <div className="lg:hidden relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ backgroundColor: COLORS.stone }} />
      <div className="flex flex-col gap-9">
        {TIMELINE_STEPS.map((step) => (
          <div key={step.en} className="grid grid-cols-[16px_1fr] gap-5">
            <div
              className="w-3.5 h-3.5 rounded-full mt-1 relative z-10"
              style={{ border: `2px solid ${COLORS.green}`, backgroundColor: COLORS.warm }}
            />
            <div>
              <div className="text-[10.5px] mb-1.5" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green, letterSpacing: "0.05em" }}>
                {step.n}
              </div>
              <h3 className="text-[15px] font-medium mb-1.5" style={{ fontFamily: body, color: COLORS.ink }}>
                {t(step.ko, step.en)}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(step.descKo, step.descEn)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SettlementCarePage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 정착 케어", "Services · Settlement Care")}
        titleKo="계약부터 열쇠까지, 놓치는 것 없이"
        titleEn="From contract to keys, without losing track of the details."
        descKo="계약 체결 후 잔금일까지, 챙겨야 할 일정과 서류가 한꺼번에 몰리는 시기입니다. 시드니 복덕방이 전체 일정을 정리하고, 관련 전문가들과의 소통을 조율해드립니다."
        descEn="Between exchanging contracts and settlement day, tasks and paperwork pile up fast. Sydney Bokdokbang keeps the timeline organised and coordinates communication with everyone involved."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-16 md:mb-20">
              <div className="mb-5">
                <SectionLabel font={body}>{t("정착 타임라인", "The Settlement Timeline")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("일곱 단계, 하나의 흐름으로", "Seven stages, tracked as one continuous flow.")}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <DesktopTimeline t={t} display={display} body={body} />
            <MobileTimeline t={t} body={body} />
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <div className="mb-5">
                <SectionLabel font={body}>{t("지원 네트워크", "Supporting Network")}</SectionLabel>
              </div>
              <h2
                className="font-medium mb-5 leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("필요한 전문가와, 필요한 순간에", "The right professional, at the right moment.")}
              </h2>
              <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "560px" }}>
                {t(
                  "법무, 대출, 점검과 같은 서비스는 관련 법률에 따라 등록된 독립적인 전문가가 직접 제공하는 규제 서비스입니다. 시드니 복덕방은 신뢰할 수 있는 파트너와의 연결과 일정 조율을 지원합니다.",
                  "Legal, finance, and inspection are regulated services provided directly by independent, licensed professionals. Sydney Bokdokbang helps connect you with trusted partners and coordinates the schedule around them."
                )}
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 border-l border-t" style={{ borderColor: COLORS.stone }}>
            {NETWORK_ITEMS.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
              <Reveal
                key={titleEn}
                delay={i * 70}
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

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("정착까지, 혼자 챙기지 마세요", "You don't have to track it all alone.")}
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
                "지금 단계가 어디쯤인지, 다음으로 무엇을 준비해야 하는지 시드니 복덕방과 함께 확인해보세요.",
                "Wherever you are in the process, let's map out what comes next together."
              )}
            </p>
            <Button variant="fill-green" href="/contact" font={body}>
              {t("시드니 복덕방과 정착 상담하기", "Talk to Sydney Bokdokbang About Settlement")} <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
