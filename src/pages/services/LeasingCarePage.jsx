import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { Button } from "../../components/ui/Button";
import { LeadForm } from "../../components/ui/LeadForm";

const SUPPORT_ITEMS = [
  {
    titleKo: "매물 임대 준비", titleEn: "Preparing the Property for Lease",
    descKo: "촬영, 정리, 필요한 보수 여부까지 임대 전 준비를 함께 점검합니다.",
    descEn: "We help assess presentation, styling, and any repairs worth making before listing.",
  },
  {
    titleKo: "임대 포지셔닝", titleEn: "Rental Positioning",
    descKo: "시장 데이터를 바탕으로 적정 임대료와 타겟 세입자층을 안내합니다.",
    descEn: "Guidance on rent pricing and target tenant profile, based on current market data.",
  },
  {
    titleKo: "세입자 탐색 조율", titleEn: "Tenant Search Coordination",
    descKo: "매물 홍보와 문의 응대를 조율하며 적합한 세입자를 찾아나갑니다.",
    descEn: "Coordinating listing exposure and enquiries to help find the right tenant.",
  },
  {
    titleKo: "임대차 절차 진행", titleEn: "The Leasing Process",
    descKo: "신청서 검토부터 계약 체결까지, 절차를 단계별로 안내합니다.",
    descEn: "Guidance through application review, all the way to signing the lease.",
  },
  {
    titleKo: "지속 관리 연계", titleEn: "Ongoing Management Referrals",
    descKo: "계약 체결 이후에는 부동산 임대관리 서비스로 자연스럽게 연결해드립니다.",
    descEn: "Once a tenancy is secured, we connect you smoothly into our ongoing property management service.",
  },
  {
    titleKo: "임대인 소통", titleEn: "Owner Communication",
    descKo: "진행 상황과 다음 단계를 임대인께 명확하게 공유합니다.",
    descEn: "Clear, regular updates to owners on progress and next steps.",
  },
];

const AUDIENCE_ITEMS = [
  {
    labelKo: "신규 투자자를 위해", labelEn: "For New Investors",
    items: [
      { ko: "첫 투자용 부동산의 임대 절차 안내", en: "Guidance through leasing a first investment property" },
      { ko: "적정 임대료 책정 지원", en: "Support setting a realistic rent price" },
      { ko: "임대 시장 기본 정보 제공", en: "An introduction to how the rental market works" },
    ],
  },
  {
    labelKo: "기존 소유주를 위해", labelEn: "For Existing Owners",
    items: [
      { ko: "공실 기간을 줄이기 위한 재임대 지원", en: "Support re-leasing to reduce vacancy periods" },
      { ko: "기존 임대차 계약 조건 검토", en: "Review of existing lease terms" },
      { ko: "임대관리 서비스로의 자연스러운 전환", en: "A smooth handover into ongoing property management" },
    ],
  },
  {
    labelKo: "해외 거주 소유주를 위해", labelEn: "For Overseas Owners",
    items: [
      { ko: "원격으로 확인 가능한 진행 상황 공유", en: "Progress updates you can follow remotely" },
      { ko: "시차를 고려한 유연한 소통", en: "Flexible communication that works around time zones" },
      { ko: "전 과정 한국어 안내", en: "The full process explained in Korean" },
    ],
  },
];

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Full name", type: "text", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "property", labelKo: "부동산 주소", labelEn: "Property address", type: "text", required: true },
  {
    name: "ownerType", labelKo: "소유주 구분", labelEn: "I am a...", type: "select", required: true,
    options: [
      { value: "new-investor", labelKo: "신규 투자자", labelEn: "New investor" },
      { value: "existing-owner", labelKo: "기존 소유주", labelEn: "Existing owner" },
      { value: "overseas-owner", labelKo: "해외 거주 소유주", labelEn: "Overseas owner" },
      { value: "other", labelKo: "기타", labelEn: "Other" },
    ],
  },
  { name: "message", labelKo: "문의 내용", labelEn: "Message", type: "textarea", required: false },
];

export function LeasingCarePage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 임대 케어", "Services · Leasing Care")}
        titleKo="투자 부동산 임대, 준비부터 함께"
        titleEn="Getting your investment property leased, the right way."
        descKo="임대를 앞둔 소유주와 투자자를 위한 서비스입니다. 매물 준비부터 세입자 매칭, 계약 체결까지 — 임대 시작의 전 과정을 함께 준비합니다."
        descEn="Built for property owners and investors preparing to lease. From getting the property ready to matching tenants and signing the lease, we help prepare every step of getting a tenancy started."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&h=1000&fit=crop&auto=format"
                  alt={t("임대 준비가 된 조용한 거실", "A calm, lease-ready living space")}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mb-6">
                <SectionLabel font={body}>{t("지원 항목", "What We Help With")}</SectionLabel>
              </div>
              <h2
                className="font-medium mb-7 leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,2.4vw,32px)", lineHeight: 1.5 }}
              >
                {t("임대의 시작부터, 그 다음까지", "From the start of leasing, to what comes after")}
              </h2>
              <ul className="flex flex-col gap-5">
                {SUPPORT_ITEMS.map((item) => (
                  <li key={item.titleEn} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 shrink-0" style={{ color: COLORS.green }} />
                    <div>
                      <div className="text-[14.5px] font-medium mb-1" style={{ color: COLORS.ink, fontFamily: body }}>
                        {t(item.titleKo, item.titleEn)}
                      </div>
                      <p className="text-[13px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                        {t(item.descKo, item.descEn)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <div className="mb-5">
                <SectionLabel font={body}>{t("안내 사항", "Who This Is For")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("상황에 따라, 필요한 지원도 다릅니다", "Different situations call for different support.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCE_ITEMS.map((group, i) => (
              <Reveal key={group.labelEn} delay={i * 80}>
                <div className="p-8 lg:p-10 h-full" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
                  <h3 className="text-[16px] md:text-[17px] font-medium mb-6" style={{ fontFamily: display, color: COLORS.ink }}>
                    {t(group.labelKo, group.labelEn)}
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    {group.items.map((item) => (
                      <li key={item.en} className="flex items-start gap-3 text-[13.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
                        <Check size={15} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} />
                        {t(item.ko, item.en)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="mb-5">
              <SectionLabel font={body}>{t("문의하기", "Enquire")}</SectionLabel>
            </div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
              {t("임대 케어 문의", "Leasing Care Enquiry")}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: COLORS.dim,
                fontSize: "clamp(13.5px,1.1vw,15.5px)",
                maxWidth: "460px",
              }}
            >
              {t(
                "보유하신 부동산의 임대를 준비 중이시라면, 상황을 간단히 남겨주세요.",
                "If you're preparing to lease a property, leave us a few details about your situation."
              )}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <LeadForm
              fields={FIELDS}
              submitLabelKo="문의 보내기"
              submitLabelEn="Send Enquiry"
              successTitleKo="문의가 접수되었습니다."
              successTitleEn="Your enquiry has been received."
              successBodyKo="담당자가 문의 내용을 확인한 후 빠른 시일 내에 연락드립니다."
              successBodyEn="A member of our team will review your enquiry and be in touch soon."
            />
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("임대, 어디서부터 시작할지 고민이신가요", "Not sure where to start with leasing your property?")}
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
                "보유하신 부동산의 상황을 함께 살펴보고, 다음 단계를 차분히 정리해드립니다.",
                "We'll look at your property's situation together and lay out the next steps, calmly."
              )}
            </p>
            <Button variant="fill-green" href="/contact" font={body}>
              {t("내 부동산 상담하기", "Discuss Your Property")} <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
