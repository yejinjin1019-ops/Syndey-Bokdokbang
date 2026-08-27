import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { LeadForm } from "../../components/ui/LeadForm";

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Full name", type: "text", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "property", labelKo: "지원하는 매물 주소", labelEn: "Property you're applying for", type: "text", required: true },
  { name: "moveInDate", labelKo: "희망 입주일", labelEn: "Preferred move-in date", type: "text", required: true },
  { name: "employment", labelKo: "직업/소득 정보", labelEn: "Employment / income details", type: "textarea", required: true },
  { name: "message", labelKo: "추가 메시지", labelEn: "Anything else we should know?", type: "textarea", required: false },
];

export function TenantApplicationPage() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("프로퍼티 매니지먼트 · 세입자 신청", "Property Management · Tenant Application")}
        titleKo="새로운 집, 신청은 간단하게."
        titleEn="Applying for your next home, made simple."
        descKo="관심 있는 임대 매물에 온라인으로 지원하세요. 접수 후 담당자가 빠르게 안내해드립니다."
        descEn="Apply online for a rental property you're interested in — we'll follow up promptly after you submit."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[720px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <Reveal>
            <LeadForm
              fields={FIELDS}
              submitLabelKo="신청서 제출하기"
              submitLabelEn="Submit Application"
              successTitleKo="신청서가 접수되었습니다."
              successTitleEn="Your application has been received."
              successBodyKo="프로퍼티 매니지먼트 담당자가 신청 내용을 검토한 후 연락드립니다."
              successBodyEn="Our property management team will review your application and be in touch."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
