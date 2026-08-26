import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { FLAGSHIP_SERVICES } from "../../data/servicesPage";

export function FlagshipServices() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="flagship-services" style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-xl mb-16 md:mb-20">
            <div className="mb-5">
              <SectionLabel font={body}>{t("주요 서비스", "Flagship Services")}</SectionLabel>
            </div>
            <h2
              className="font-medium leading-snug"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
            >
              {t("여정의 각 단계마다, 전담 케어.", "A dedicated service for every stage of the journey.")}
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-20 md:gap-28">
          {FLAGSHIP_SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.key}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                <Reveal className={reversed ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                    <img
                      src={service.img}
                      alt={t(service.titleKo, service.titleEn)}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal delay={120} className={reversed ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-6 h-px" style={{ backgroundColor: COLORS.yellow }} />
                    <span className="text-[9.5px] tracking-[0.22em] uppercase" style={{ color: COLORS.dim, fontFamily: body }}>
                      {t(service.labelKo, service.labelEn)}
                    </span>
                  </div>
                  <h3
                    className="font-medium mb-4 leading-snug"
                    style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(19px,1.8vw,28px)", lineHeight: 1.5 }}
                  >
                    {t(service.titleKo, service.titleEn)}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "440px" }}>
                    {t(service.descKo, service.descEn)}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
