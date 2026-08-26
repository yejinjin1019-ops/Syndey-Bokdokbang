import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { SERVICES } from "../../data/services";

export function Services() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="services" style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">

        <Reveal>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="mb-5">
                <SectionLabel font={body}>{t("서비스", "Services")}</SectionLabel>
              </div>
              <h2
                className="font-medium max-w-lg"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.6vw,38px)", lineHeight: 1.5 }}
              >
                {t("매매 이후에도 계속되는 케어.", "Support that continues after the sale.")}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium shrink-0"
              style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
            >
              {t("서비스 더보기", "View all services")} <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 border" style={{ borderColor: COLORS.stone }}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.labelEn} delay={i * 100}>
              <div className="flex flex-col sm:flex-row h-full" style={{ borderRight: i === 0 ? `1px solid ${COLORS.stone}` : "none" }}>
                <div className="sm:w-5/12 overflow-hidden bg-stone-200" style={{ minHeight: "200px" }}>
                  <img
                    src={service.img}
                    alt={t(service.labelKo, service.labelEn)}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "200px" }}
                  />
                </div>
                <div className="p-7 lg:p-9 flex flex-col justify-center sm:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-px" style={{ backgroundColor: COLORS.yellow }} />
                    <span className="text-[9.5px] tracking-[0.2em] uppercase" style={{ color: COLORS.dim, fontFamily: body }}>
                      {t(service.labelKo, service.labelEn)}
                    </span>
                  </div>
                  <h3
                    className="font-medium mb-3 leading-snug"
                    style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(16px,1.3vw,20px)", lineHeight: 1.62 }}
                  >
                    {t(service.titleKo, service.titleEn)}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(service.descKo, service.descEn)}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium"
                    style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
                  >
                    {t("더 알아보기", "Learn more")} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
