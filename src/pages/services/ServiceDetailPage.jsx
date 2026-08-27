import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

/** Generic template for the 4 non-hub services (property-advisory,
 * settlement-care, leasing-care, move-in-care). Property Management has its
 * own bespoke hub page since it fans out into 3 sub-features. */
export function ServiceDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const service = SERVICE_DETAILS.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("서비스를 찾을 수 없습니다.", "Service not found.")}
          </h1>
          <Link to="/services" style={{ color: COLORS.green, fontFamily: body }}>{t("서비스로 돌아가기", "Back to Services")}</Link>
        </div>
      </section>
    );
  }

  const whatsIncluded = lang === "ko" ? service.whatsIncludedKo : service.whatsIncludedEn;

  return (
    <>
      <PageHero
        label={t(service.labelKo, service.labelEn)}
        titleKo={service.titleKo}
        titleEn={service.titleEn}
        descKo={service.descKo}
        descEn={service.descEn}
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                <img src={service.img} alt={t(service.titleKo, service.titleEn)} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-[13px] tracking-wide uppercase mb-6" style={{ color: COLORS.dim, fontFamily: body }}>
                {t("포함 내용", "What's included")}
              </h2>
              <ul className="flex flex-col gap-4 mb-10">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="fill-green" href="/contact" font={body}>
                {t("이 서비스 문의하기", "Enquire About This Service")} <ArrowRight size={13} />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
