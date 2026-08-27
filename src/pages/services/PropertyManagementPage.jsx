import { Link } from "react-router-dom";
import { ArrowRight, FileText, Wrench, LayoutDashboard } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";

const SUB_FEATURES = [
  {
    to: "/services/property-management/tenant-application",
    icon: FileText,
    titleKo: "세입자 신청", titleEn: "Tenant Application",
    descKo: "새로운 임대 매물에 지원하고 싶으신가요? 온라인으로 간편하게 신청하세요.",
    descEn: "Applying for a rental property? Submit your application online in a few minutes.",
  },
  {
    to: "/services/property-management/maintenance-request",
    icon: Wrench,
    titleKo: "유지보수 요청", titleEn: "Maintenance Request",
    descKo: "임대 중인 주택에 문제가 있으신가요? 유지보수를 요청하세요.",
    descEn: "Something needs fixing at your rental? Log a maintenance request.",
  },
  {
    to: "/services/property-management/landlord-portal",
    icon: LayoutDashboard,
    titleKo: "임대인 포털", titleEn: "Landlord Portal",
    descKo: "임대료 정산, 점검 리포트, 유지보수 현황을 한눈에 확인하세요.",
    descEn: "Rent statements, inspection reports, and maintenance tracking, in one place.",
  },
];

export function PropertyManagementPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 프로퍼티 매니지먼트", "Services · Property Management")}
        titleKo="임차부터 유지보수까지, 한눈에."
        titleEn="Tenancy to maintenance, all in clear view."
        descKo="세입자 신청, 유지보수 요청, 임대인 리포트까지 — 프로퍼티 매니지먼트의 모든 절차를 체계적으로 지원합니다."
        descEn="Tenant applications, maintenance requests, landlord reporting — the full property management workflow, organised and supported."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {SUB_FEATURES.map(({ to, icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
              <Reveal key={to} delay={i * 90}>
                <Link
                  to={to}
                  className="group flex flex-col h-full p-7 md:p-8"
                  style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, textDecoration: "none" }}
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
    </>
  );
}
