import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { LeadForm } from "../components/ui/LeadForm";

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Full name", type: "text", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "address", labelKo: "부동산 주소", labelEn: "Property address", type: "text", required: true },
  {
    name: "propertyType", labelKo: "매물 유형", labelEn: "Property type", type: "select", required: true,
    options: [
      { value: "house", labelKo: "주택", labelEn: "House" },
      { value: "apartment", labelKo: "아파트", labelEn: "Apartment" },
      { value: "townhouse", labelKo: "타운하우스", labelEn: "Townhouse" },
    ],
  },
  {
    name: "reason", labelKo: "감정평가 사유", labelEn: "Reason for appraisal", type: "select", required: true,
    options: [
      { value: "selling", labelKo: "매각 검토", labelEn: "Considering selling" },
      { value: "leasing", labelKo: "임대 검토", labelEn: "Considering leasing" },
      { value: "refinance", labelKo: "재융자", labelEn: "Refinancing" },
      { value: "curious", labelKo: "단순 궁금증", labelEn: "Just curious" },
    ],
  },
  { name: "message", labelKo: "추가 메시지", labelEn: "Anything else we should know?", type: "textarea", required: false },
];

const STEPS = [
  { n: "01", ko: "담당 어드바이저가 요청 내용을 검토합니다.", en: "Your dedicated advisor reviews your request." },
  { n: "02", ko: "영업일 기준 1일 이내에 연락드립니다.", en: "We contact you within 1 business day." },
  { n: "03", ko: "현장 또는 서면 감정평가를 진행합니다.", en: "We conduct an on-site or desktop appraisal." },
  { n: "04", ko: "감정 결과 리포트를 전달해드립니다.", en: "You receive a clear appraisal report." },
];

export function AppraisalPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("매물 · 무료 감정평가", "Properties · Property Appraisal")}
        titleKo="지금 소유한 부동산 얼마일까요?"
        titleEn="What is your property worth today?"
        descKo="현재 보유 부동산의 시장 가치를 전문가가 무료로 감정해드립니다. 매각, 임대, 재융자 계획에 앞서 정확한 정보를 먼저 파악하세요."
        descEn="Get a professional market appraisal at no cost. Know the numbers before you plan to sell, lease, or refinance."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 md:gap-20">
            <Reveal>
              <div className="mb-8">
                <SectionLabel font={body}>{t("진행 절차", "What happens next")}</SectionLabel>
              </div>
              <div className="flex flex-col">
                {STEPS.map((s, i) => (
                  <div
                    key={s.n}
                    className="flex gap-6 py-6"
                    style={{ borderTop: i > 0 ? `1px solid ${COLORS.stone}` : "none" }}
                  >
                    <span className="text-[26px] font-medium shrink-0" style={{ fontFamily: display, color: COLORS.green }}>{s.n}</span>
                    <p className="text-[14.5px] leading-relaxed pt-1.5" style={{ color: COLORS.ink, fontFamily: body }}>
                      {t(s.ko, s.en)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <LeadForm
                fields={FIELDS}
                submitLabelKo="무료 감정평가 신청하기"
                submitLabelEn="Request a Free Appraisal"
                successTitleKo="신청이 접수되었습니다"
                successTitleEn="Your appraisal request has been received"
                successBodyKo="담당 어드바이저가 영업일 기준 1일 이내에 연락드려 다음 단계를 안내해드립니다."
                successBodyEn="A dedicated advisor will reach out within 1 business day to walk you through the next steps."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
