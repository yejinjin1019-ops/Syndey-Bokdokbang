import { Link } from "react-router-dom";
import { ArrowRight, Check, Home, MessagesSquare, CalendarCheck, Wrench, Users, FileText, LayoutDashboard } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { LeadForm } from "../../components/ui/LeadForm";

const MANAGEMENT_AREAS = [
  {
    icon: Home,
    titleKo: "임대차 진행", titleEn: "Leasing",
    descKo: "매물 홍보와 세입자 매칭부터 임대차 계약 체결까지 진행을 지원합니다.",
    descEn: "From listing and tenant matching through to signing the lease agreement.",
  },
  {
    icon: MessagesSquare,
    titleKo: "세입자 응대", titleEn: "Tenant Coordination",
    descKo: "세입자의 문의와 요청 사항에 정중하고 신속하게 응대합니다.",
    descEn: "Prompt, courteous responses to tenant enquiries and requests.",
  },
  {
    icon: CalendarCheck,
    titleKo: "정기 관리", titleEn: "Routine Management",
    descKo: "정기 점검과 임대료 정산을 일정에 따라 체계적으로 진행합니다.",
    descEn: "Routine inspections and rent reconciliation, kept on a consistent schedule.",
  },
  {
    icon: Wrench,
    titleKo: "유지보수 조율", titleEn: "Maintenance Coordination",
    descKo: "필요한 수리는 신뢰할 수 있는 협력 업체와 연결해 조율해드립니다.",
    descEn: "We coordinate necessary repairs through trusted partner tradespeople.",
  },
  {
    icon: Users,
    titleKo: "임대인 소통", titleEn: "Owner Communication",
    descKo: "부동산 현황과 진행 사항을 임대인께 정기적으로 공유합니다.",
    descEn: "Regular updates to owners on your property's status and progress.",
  },
];

const ENTRY_POINTS = [
  {
    to: "/services/property-management/tenant-application",
    icon: FileText,
    titleKo: "세입자 신청", titleEn: "Tenant Application",
    descKo: "관심 있는 임대 매물에 지원하시려면 온라인 신청서를 작성해주세요.",
    descEn: "Apply for a rental property you're interested in by completing the online form.",
  },
  {
    to: "/services/property-management/maintenance-request",
    icon: Wrench,
    titleKo: "유지보수 요청", titleEn: "Maintenance Request",
    descKo: "임대 중인 주택에 수리가 필요하다면 이곳에서 요청을 등록해주세요.",
    descEn: "Log a repair or maintenance issue at your rental property here.",
  },
  {
    to: "/services/property-management/landlord-portal",
    icon: LayoutDashboard,
    titleKo: "임대인 포털", titleEn: "Landlord Portal",
    descKo: "임대료 정산과 점검 리포트를 확인하시려면 포털 접근을 요청해주세요.",
    descEn: "Request access to view rental statements and inspection reports.",
  },
];

const LANDLORD_ITEMS = [
  { ko: "세입자 심사 및 매칭", en: "Tenant screening & matching" },
  { ko: "임대료 정산 및 보고", en: "Rent reconciliation & reporting" },
  { ko: "정기 점검 및 점검 리포트", en: "Routine inspections & reports" },
  { ko: "임대차 계약 갱신 지원", en: "Lease renewal support" },
];

const TENANT_ITEMS = [
  { ko: "온라인 임대 신청 접수", en: "Online rental applications" },
  { ko: "문의 및 요청 사항 응대", en: "Support for enquiries & requests" },
  { ko: "유지보수 요청 접수", en: "Maintenance request logging" },
  { ko: "임대차 계약 관련 안내", en: "Guidance on lease terms" },
];

const MAINTENANCE_ITEMS = [
  { ko: "요청 접수 및 긴급도에 따른 우선순위 배정", en: "Requests logged and prioritised by urgency" },
  { ko: "신뢰할 수 있는 협력 업체와 연결", en: "Connected with trusted partner tradespeople" },
  { ko: "진행 상황 안내 및 완료 확인", en: "Progress updates through to completion" },
];

function InfoColumn({ labelKo, labelEn, items, note, t, display, body }) {
  return (
    <div className="p-8 lg:p-10 h-full flex flex-col" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
      <h3 className="text-[16px] md:text-[17px] font-medium mb-6" style={{ fontFamily: display, color: COLORS.ink }}>
        {t(labelKo, labelEn)}
      </h3>
      <ul className="flex flex-col gap-3.5 mb-6">
        {items.map((item) => (
          <li key={item.en} className="flex items-start gap-3 text-[13.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
            <Check size={15} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} />
            {t(item.ko, item.en)}
          </li>
        ))}
      </ul>
      {note && (
        <p className="text-[12px] leading-relaxed mt-auto pt-4" style={{ color: COLORS.dim, fontFamily: body, borderTop: `1px solid ${COLORS.stone}` }}>
          {t(note.ko, note.en)}
        </p>
      )}
    </div>
  );
}

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Full name", type: "text", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "property", labelKo: "부동산 주소", labelEn: "Property address", type: "text", required: true },
  {
    name: "role", labelKo: "문의자 구분", labelEn: "I am a...", type: "select", required: true,
    options: [
      { value: "current-owner", labelKo: "현재 임대인", labelEn: "Current landlord" },
      { value: "prospective-owner", labelKo: "임대 관리를 고려 중인 소유주", labelEn: "Owner considering property management" },
      { value: "tenant", labelKo: "세입자", labelEn: "Tenant" },
      { value: "other", labelKo: "기타", labelEn: "Other" },
    ],
  },
  { name: "message", labelKo: "문의 내용", labelEn: "Message", type: "textarea", required: false },
];

export function PropertyManagementPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 부동산 임대관리", "Services · Property Management")}
        titleKo="명확한 소통의 부동산 임대관리"
        titleEn="Property management, with clearer communication."
        descKo="임대인과 세입자 사이의 소통을 중심에 둡니다. 임대차 진행부터 정기 점검, 유지보수 조율까지, 각 단계를 명확하게 안내해드립니다."
        descEn="Built around clear communication between owners and tenants — from leasing through to routine inspections and maintenance coordination, every step explained clearly."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("관리 항목", "What We Manage")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("임대차의 시작부터 끝까지", "From the start of a tenancy to the everyday of it.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: COLORS.stone }}>
            {MANAGEMENT_AREAS.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
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
            <div className="max-w-2xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("바로 이용하기", "Get Started")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("필요한 절차로 바로 이동하세요", "Go straight to the step you need.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {ENTRY_POINTS.map(({ to, icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
              <Reveal key={to} delay={i * 90}>
                <Link
                  to={to}
                  className="group flex flex-col h-full p-7 md:p-8"
                  style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}`, textDecoration: "none" }}
                >
                  <Icon size={22} style={{ color: COLORS.green }} className="mb-6" />
                  <h3 className="text-[17px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
                    {t(titleKo, titleEn)}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6 flex-1" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(descKo, descEn)}
                  </p>
                  <div className="flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: COLORS.green, fontFamily: body }}>
                    {t("바로가기", "Go there")} <ArrowRight size={13} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("안내 사항", "Who This Is For")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("임대인, 세입자, 그리고 유지보수까지", "For owners, for tenants, and for maintenance.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <InfoColumn labelKo="임대인을 위해" labelEn="For Landlords" items={LANDLORD_ITEMS} t={t} display={display} body={body} />
            </Reveal>
            <Reveal delay={80}>
              <InfoColumn labelKo="세입자를 위해" labelEn="For Tenants" items={TENANT_ITEMS} t={t} display={display} body={body} />
            </Reveal>
            <Reveal delay={160}>
              <InfoColumn
                labelKo="유지보수 지원" labelEn="Maintenance Support"
                items={MAINTENANCE_ITEMS}
                note={{
                  ko: "실제 수리는 공인된 협력 업체가 진행하며, 시드니 복덕방은 접수와 조율, 진행 상황 공유를 담당합니다.",
                  en: "Repairs themselves are carried out by licensed partner tradespeople — Sydney Bokdokbang handles the logging, coordination, and progress updates.",
                }}
                t={t} display={display} body={body}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="mb-5">
              <SectionLabel font={body}>{t("문의하기", "Enquire")}</SectionLabel>
            </div>
            <h2 className="text-[22px] md:text-[26px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
              {t("부동산 임대관리 문의", "Property Management Enquiry")}
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
                "소유하신 부동산의 임대관리를 맡기고 싶으시거나, 세입자로서 궁금한 점이 있으시면 남겨주세요.",
                "Whether you're considering property management for your property, or a tenant with a question, leave us a message."
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
    </>
  );
}
