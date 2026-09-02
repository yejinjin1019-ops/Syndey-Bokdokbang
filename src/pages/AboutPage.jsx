import { ArrowRight, Languages, MessageCircle, FileCheck2, MapPin, LineChart, Building2 } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button } from "../components/ui/Button";

const HOW_WE_WORK = [
  { n: "01", ko: "경청", en: "Listen", descKo: "실거주인지 투자인지, 예산과 타임라인까지 — 먼저 상황을 충분히 듣습니다.", descEn: "Owner-occupier or investor, budget, timeline — we start by listening closely." },
  { n: "02", ko: "선별", en: "Select", descKo: "많은 매물이 아니라, 조건에 맞는 매물만 추려서 보여드립니다.", descEn: "Not more listings — only the ones that actually fit." },
  { n: "03", ko: "설명", en: "Explain", descKo: "가격, 계약, 절차의 맥락을 한국어로 명확하게 풀어드립니다.", descEn: "Price, contracts, and process explained clearly, in Korean." },
  { n: "04", ko: "동행", en: "Support", descKo: "계약부터 정착, 그 이후까지 — 한 팀이 계속 곁에 있습니다.", descEn: "From contract to settlement and beyond — one team, all the way." },
];

const KOREAN_GUIDANCE = [
  {
    icon: Languages,
    titleKo: "정확한 통역", titleEn: "Precise Interpretation",
    descKo: "부동산 용어와 계약 조건을 의역 없이 정확한 한국어로 전달합니다.",
    descEn: "Property terms and contract conditions translated into precise, unambiguous Korean.",
  },
  {
    icon: MessageCircle,
    titleKo: "편안한 소통", titleEn: "Comfortable Communication",
    descKo: "낯선 시스템 속에서도 질문하기 편안한 관계를 만듭니다.",
    descEn: "A relationship where asking questions in an unfamiliar system feels comfortable.",
  },
  {
    icon: FileCheck2,
    titleKo: "서류·절차 안내", titleEn: "Paperwork & Process",
    descKo: "계약서, 대출, 정착 관련 서류를 단계별로 함께 확인합니다.",
    descEn: "Contracts, finance, and settlement paperwork, checked through step by step together.",
  },
];

const SYDNEY_EXPERTISE = [
  {
    icon: MapPin,
    titleKo: "지역 이해", titleEn: "Suburb Knowledge",
    descKo: "노스쇼어부터 이너웨스트까지, 지역별 특성을 실제 경험으로 이해합니다.",
    descEn: "From the North Shore to the Inner West, suburb character understood first-hand.",
  },
  {
    icon: LineChart,
    titleKo: "시장 데이터", titleEn: "Market Data",
    descKo: "최근 거래 사례와 가격 흐름을 근거로 판단을 도와드립니다.",
    descEn: "Recent sales and price movement, used as evidence — not guesswork.",
  },
  {
    icon: Building2,
    titleKo: "신규 개발 검토", titleEn: "New Development Review",
    descKo: "분양 프로젝트의 계획, 시행사, 진행 상황까지 함께 검토합니다.",
    descEn: "Off-the-plan projects reviewed for their plans, developer, and progress.",
  },
];

export function AboutPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("소개", "About")}
        titleKo="시드니의 동네 사랑방, 새롭게 다시 짓다"
        titleEn="A neighbourhood role, redefined for Sydney"
        descKo={"복덕방은 원래 집과 사람을 모두 이해했기에 신뢰받던 자리였습니다.\n시드니 복덕방은 그 역할을 지금 이곳에 맞게 다시 만듭니다."}
        descEn={"“Bokdokbang” once meant a place trusted because it understood both homes and people.\nSydney Bokdokbang rebuilds that role for the city we live in now."}
      />

      {/* Our Story — editorial split: photography + Rice Ivory content panel */}
      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="grid lg:grid-cols-[55fr_45fr]">

          <Reveal className="relative overflow-hidden bg-stone-300" style={{ minHeight: "clamp(320px, 46vw, 640px)" }}>
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&h=1600&fit=crop&auto=format&q=85"
              alt={t("시드니 주택가의 조용한 골목 풍경", "A quiet residential street in a Sydney neighbourhood")}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>

          <div className="flex items-center" style={{ backgroundColor: COLORS.ivory }}>
            <div className="px-8 md:px-14 lg:px-16 py-16 md:py-24 max-w-[560px]">
              <Reveal>
                <div className="mb-7">
                  <SectionLabel font={body}>{t("시드니 복덕방 소개", "About Sydney Bokdokbang")}</SectionLabel>
                </div>

                <h2
                  className="font-medium mb-7 leading-snug whitespace-pre-line"
                  style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.6vw,38px)", lineHeight: 1.5 }}
                >
                  {t("시드니에서 다시 시작하는,\n복덕방의 역할", "A neighbourhood role,\nredefined for Sydney")}
                </h2>

                <div className="flex flex-col gap-4 mb-9">
                  <p className="text-[14.5px] leading-relaxed whitespace-pre-line" style={{ color: COLORS.ink, fontFamily: body }}>
                    {t(
                      "복덕방은 원래 동네에서 집과 사람을 가장 잘 아는 곳이었습니다.\n시드니 복덕방은 그 역할을 지금의 시드니에서 이어갑니다.",
                      "Sydney Bokdokbang brings the trusted neighbourhood role of 복덕방 into today's Sydney — combining Korean-speaking guidance with local property expertise."
                    )}
                  </p>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(
                      "저희는 매물을 많이 보여드리는 것보다, 고객에게 어떤 집과 지역이 실제로 맞는지를 함께 보는 데 더 집중합니다. 첫 상담부터 구매, 정산, 임대, 이사와 정착까지 — 중요한 순간마다 필요한 정보를 명확하게 설명하고 함께 판단합니다.",
                      "We focus less on showing you more properties, and more on helping you understand which property, area and decision genuinely make sense for you. From the first conversation through purchase, settlement, leasing and moving in, we stay part of the journey."
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-9">
                  <div className="w-6 h-px" style={{ backgroundColor: COLORS.yellow }} />
                  <p
                    style={{
                      fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                      fontStyle: lang === "ko" ? "normal" : "italic",
                      color: COLORS.dim,
                      fontSize: "13.5px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {t("집을 찾는 순간부터, 정착하는 순간까지.", "Your Sydney property journey, thoughtfully guided.")}
                  </p>
                </div>

                <Button variant="fill-green" href="/contact" font={body}>
                  {t("상담 예약하기", "Book a Consultation")} <ArrowRight size={13} />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-center">
            <Reveal>
              <div className="mb-8">
                <SectionLabel font={body}>{t("우리가 믿는 것", "What We Believe")}</SectionLabel>
              </div>
              <blockquote
                className="font-medium mb-5 leading-relaxed"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,2.4vw,34px)", lineHeight: 1.72 }}
              >
                {t("매물의 수보다,", "We are not here to show you more properties")}<br />
                {t("더 나은 선택을 할 수 있도록", "We are here to help you choose more carefully")}
              </blockquote>
              <p
                style={{
                  fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                  fontStyle: lang === "ko" ? "normal" : "italic",
                  color: COLORS.dim,
                  fontSize: "17px",
                  letterSpacing: "0.01em",
                }}
              >
                {t(
                  "빠른 거래보다 옳은 결정이 먼저입니다.",
                  "A good decision matters more to us than a fast one."
                )}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=960&h=720&fit=crop&auto=format&q=85"
                    alt={t("시드니 시내와 항구가 보이는 현대적인 건물 전경", "Modern Sydney skyline overlooking the harbour")}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 w-20 h-1" style={{ backgroundColor: COLORS.yellow }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("일하는 방식", "How We Work")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("서두르지 않고, 단계마다 함께", "No rush — a step at a time, together")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {HOW_WE_WORK.map((step, i) => (
              <Reveal key={step.en} delay={i * 70}>
                <div
                  className="text-[11px] mb-4"
                  style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green, letterSpacing: "0.05em" }}
                >
                  {step.n}
                </div>
                <h3 className="text-[16px] font-medium mb-2.5" style={{ fontFamily: display, color: COLORS.ink }}>
                  {t(step.ko, step.en)}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t(step.descKo, step.descEn)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Korean-Speaking Guidance */}
      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 md:gap-20 items-start">
            <Reveal>
              <div className="mb-5">
                <SectionLabel font={body}>{t("한국어 서비스", "Korean-Speaking Guidance")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(18px,2.4vw,38px)", lineHeight: 1.5 }}
              >
                {t("모국어로 이해하는 시드니 부동산", "Sydney property, understood in your own language")}
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-8">
              {KOREAN_GUIDANCE.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
                <Reveal key={titleEn} delay={i * 80}>
                  <Icon size={20} style={{ color: COLORS.green }} className="mb-5" />
                  <h3 className="text-[15px] font-medium mb-2.5" style={{ fontFamily: display, color: COLORS.ink }}>
                    {t(titleKo, titleEn)}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(descKo, descEn)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sydney Property Expertise */}
      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 md:gap-20 items-center">
            <Reveal>
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=960&h=720&fit=crop&auto=format&q=85"
                    alt={t("시드니 주택가의 현대적인 건축물", "Contemporary residential architecture in a Sydney suburb")}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-1" style={{ backgroundColor: COLORS.yellow }} />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="mb-5">
                  <SectionLabel font={body}>{t("시드니 부동산 전문성", "Sydney Property Expertise")}</SectionLabel>
                </div>
                <h2
                  className="font-medium leading-snug mb-10 max-w-md"
                  style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,38px)", lineHeight: 1.5 }}
                >
                  {t("15년, 시드니를 실제로 겪은 시간", "15 years actually living Sydney's market")}
                </h2>
              </Reveal>

              <div className="flex flex-col gap-8">
                {SYDNEY_EXPERTISE.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
                  <Reveal key={titleEn} delay={i * 80}>
                    <div className="flex gap-4">
                      <Icon size={19} style={{ color: COLORS.green, flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <h3 className="text-[15px] font-medium mb-1.5" style={{ fontFamily: display, color: COLORS.ink }}>
                          {t(titleKo, titleEn)}
                        </h3>
                        <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                          {t(descKo, descEn)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: COLORS.green, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("더 나은 선택은, 좋은 대화에서 시작됩니다", "A better choice starts with a good conversation")}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: "rgba(245,241,232,0.7)",
                fontSize: "clamp(14.5px,1.2vw,17px)",
                maxWidth: "460px",
              }}
            >
              {t(
                "편하신 시간에 상담을 예약해 보세요.",
                "Book a consultation at a time that suits you."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" href="/contact" font={body}>
                {t("상담 예약하기", "Book a Consultation")} <ArrowRight size={14} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
