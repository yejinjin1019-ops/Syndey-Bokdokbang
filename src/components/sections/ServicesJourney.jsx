import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { JOURNEY_STEPS } from "../../data/servicesPage";

export function ServicesJourney() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-xl mb-16">
            <div className="mb-5">
              <SectionLabel font={body}>{t("여정", "The Journey")}</SectionLabel>
            </div>
            <h2
              className="font-medium leading-snug"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3vw,44px)", lineHeight: 1.45 }}
            >
              {t("여섯 단계 하나의 동행", "Six stages — one continuous companion")}
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: COLORS.stone }}>
          {JOURNEY_STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 60}
              className="border-r border-b p-8 lg:p-10"
              style={{ borderColor: COLORS.stone }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  style={{ fontFamily: display, color: COLORS.green, fontSize: "clamp(30px,2.6vw,40px)", lineHeight: 1 }}
                >
                  {step.n}
                </span>
                <div className="w-5 h-px mt-1" style={{ backgroundColor: COLORS.yellow }} />
              </div>
              <h3 className="text-[17px] md:text-[19px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
                {t(step.titleKo, step.titleEn)}
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(step.descKo, step.descEn)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
