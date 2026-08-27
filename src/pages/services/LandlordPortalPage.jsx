import { FileText, ClipboardCheck, Wrench, ScrollText, Bell } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { LeadForm } from "../../components/ui/LeadForm";

const BENEFITS = [
  { icon: FileText, ko: "임대료 정산 내역", en: "Rental statements" },
  { icon: ClipboardCheck, ko: "점검 리포트", en: "Inspection reports" },
  { icon: Wrench, ko: "유지보수 현황 추적", en: "Maintenance tracking" },
  { icon: ScrollText, ko: "임대차 계약 서류", en: "Lease documents" },
  { icon: Bell, ko: "부동산 관련 업데이트", en: "Property updates" },
];

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Name", type: "text", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: true },
  { name: "property", labelKo: "부동산 주소", labelEn: "Property Address", type: "text", required: true },
  { name: "message", labelKo: "메시지", labelEn: "Message", type: "textarea", required: false },
];

function DashboardPreview({ t, body }) {
  return (
    <div className="relative p-6 md:p-8" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
      <div className="absolute top-4 right-4">
        <span
          className="text-[9px] tracking-[0.16em] uppercase px-2.5 py-1"
          style={{ backgroundColor: COLORS.stone, color: COLORS.dim, fontFamily: body }}
        >
          {t("미리보기 · 실제 기능 아님", "Preview only — illustrative")}
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { labelKo: "이번 달 임대료", labelEn: "This month's rent", value: "$—" },
          { labelKo: "다음 정기 점검", labelEn: "Next inspection", value: "—" },
          { labelKo: "진행 중인 유지보수", labelEn: "Open maintenance items", value: "—" },
        ].map((card) => (
          <div key={card.labelEn} className="p-4" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
            <div className="text-[9.5px] tracking-[0.14em] uppercase mb-2" style={{ color: COLORS.dim, fontFamily: body }}>
              {t(card.labelKo, card.labelEn)}
            </div>
            <div className="text-[18px] font-medium" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.dim }}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className="p-4" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
        <div className="text-[9.5px] tracking-[0.14em] uppercase mb-3" style={{ color: COLORS.dim, fontFamily: body }}>
          {t("최근 문서", "Recent documents")}
        </div>
        <div className="flex flex-col gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: i < 2 ? `1px solid ${COLORS.stone}` : "none" }}>
              <div className="h-2.5 rounded-sm" style={{ backgroundColor: COLORS.stone, width: `${55 - i * 10}%` }} />
              <div className="h-2.5 w-14 rounded-sm" style={{ backgroundColor: COLORS.stone }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LandlordPortalPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("프로퍼티 매니지먼트 · 임대인 포털", "Property Management · Landlord Portal")}
        titleKo="더 선명해지는 프로퍼티 매니지먼트."
        titleEn="Property management, with clearer visibility."
        descKo="임대료 정산부터 유지보수 현황까지, 소유하신 부동산에 대한 중요한 정보에 체계적으로 접근할 수 있도록 지원해드립니다."
        descEn="From rental statements to maintenance tracking, we help you get organised access to the information that matters for your property."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-14 md:gap-16 items-start mb-20 md:mb-28">
            <Reveal>
              <h2 className="text-[13px] tracking-wide uppercase mb-7" style={{ color: COLORS.dim, fontFamily: body }}>
                {t("임대인을 위한 지원 항목", "What owners get support with")}
              </h2>
              <div className="flex flex-col gap-5">
                {BENEFITS.map(({ icon: Icon, ko, en }) => (
                  <div key={en} className="flex items-center gap-4">
                    <Icon size={18} style={{ color: COLORS.green }} className="shrink-0" />
                    <span className="text-[14.5px]" style={{ color: COLORS.ink, fontFamily: body }}>{t(ko, en)}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] leading-relaxed mt-8" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "440px" }}>
                {t(
                  "아래는 향후 임대인 포털 경험이 어떤 모습일지 보여주는 미리보기이며, 현재는 실제로 작동하지 않습니다. 접근이 필요하시면 담당 어드바이저가 직접 안내해드립니다.",
                  "The panel below is a non-functional preview of what a future landlord portal experience could look like. To get access today, our advisors set things up for you directly."
                )}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <DashboardPreview t={t} body={body} />
            </Reveal>
          </div>

          <div className="max-w-[640px] mx-auto">
            <Reveal>
              <h2 className="text-[22px] md:text-[26px] font-medium mb-3 text-center" style={{ fontFamily: display, color: COLORS.ink }}>
                {t("포털 접근 요청하기", "Request Portal Access")}
              </h2>
              <p className="text-[13.5px] text-center mb-10" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(
                  "담당 어드바이저가 직접 연락드려 접근 및 지원 방법을 안내해드립니다.",
                  "An advisor will contact you and arrange access and support manually."
                )}
              </p>
              <LeadForm
                fields={FIELDS}
                submitLabelKo="포털 접근 요청하기"
                submitLabelEn="Request Portal Access"
                successTitleKo="요청이 접수되었습니다."
                successTitleEn="Your request has been received."
                successBodyKo="담당 어드바이저가 곧 연락드려 접근 및 지원 방법을 안내해드립니다."
                successBodyEn="An advisor will be in touch shortly to arrange access and support."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
