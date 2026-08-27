import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { LeadForm } from "../../components/ui/LeadForm";

const FIELDS = [
  { name: "name", labelKo: "세입자 이름", labelEn: "Tenant name", type: "text", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "property", labelKo: "부동산 주소", labelEn: "Property address", type: "text", required: true },
  {
    name: "category", labelKo: "문제 유형", labelEn: "Issue category", type: "select", required: true,
    options: [
      { value: "plumbing", labelKo: "배관/누수", labelEn: "Plumbing" },
      { value: "electrical", labelKo: "전기", labelEn: "Electrical" },
      { value: "appliance", labelKo: "가전제품", labelEn: "Appliance" },
      { value: "other", labelKo: "기타", labelEn: "Other" },
    ],
  },
  {
    name: "urgency", labelKo: "긴급도", labelEn: "Urgency", type: "select", required: true,
    options: [
      { value: "urgent", labelKo: "긴급 (누수, 안전 문제 등)", labelEn: "Urgent (leaks, safety issues)" },
      { value: "standard", labelKo: "일반", labelEn: "Standard" },
      { value: "low", labelKo: "낮음", labelEn: "Low priority" },
    ],
  },
  { name: "description", labelKo: "문제 상세 설명", labelEn: "Describe the issue", type: "textarea", required: true },
  { name: "accessTimes", labelKo: "방문 가능 시간대", labelEn: "Preferred access times", type: "text", required: false },
];

export function MaintenanceRequestPage() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("부동산 임대관리 · 유지보수 요청", "Property Management · Maintenance Request")}
        titleKo="문제가 생기면, 바로 알려주세요."
        titleEn="Something's not right? Let us know."
        descKo="임대 중인 주택의 유지보수 문제를 신고하세요. 긴급도에 따라 우선순위를 두고 처리합니다."
        descEn="Log a maintenance issue at your rental — we prioritise by urgency and follow up quickly."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[720px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <Reveal>
            <LeadForm
              fields={FIELDS}
              submitLabelKo="유지보수 요청하기"
              submitLabelEn="Submit Maintenance Request"
              successTitleKo="요청이 접수되었습니다."
              successTitleEn="Your maintenance request has been received."
              successBodyKo="긴급도에 따라 우선순위를 정해 담당자가 빠르게 연락드립니다."
              successBodyEn="We prioritise by urgency, and our team will be in touch shortly."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
