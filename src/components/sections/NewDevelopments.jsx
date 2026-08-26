import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { FEATURED_DEVELOPMENT as dev } from "../../data/developments";

export function NewDevelopments() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="projects" style={{ backgroundColor: COLORS.green }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="mb-14">
            <SectionLabel font={body} dark>{t("신규 개발", "New Developments")}</SectionLabel>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden bg-stone-700 aspect-[4/3]">
              <img
                src={dev.img}
                alt={`${dev.name} — new development ${dev.suburb}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <div className="text-[9.5px] tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(245,241,232,0.45)", fontFamily: body }}>
                {t("주목 프로젝트", "Featured Project")} · {dev.suburb}
              </div>
              <h2
                className="font-medium mb-4 leading-tight italic"
                style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.ivory, fontSize: "clamp(32px,3.5vw,52px)" }}
              >
                {dev.name}
              </h2>
              <p className="text-[14.5px] mb-8 leading-relaxed" style={{ color: "rgba(245,241,232,0.7)", fontFamily: body, maxWidth: "460px" }}>
                {t(dev.descKo, dev.descEn)}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10 pb-10" style={{ borderBottom: "1px solid rgba(245,241,232,0.12)" }}>
                {dev.stats.map((stat) => (
                  <div key={stat.labelEn}>
                    <div className="text-[9px] tracking-[0.18em] uppercase mb-2" style={{ color: "rgba(245,241,232,0.4)", fontFamily: body }}>
                      {t(stat.labelKo, stat.labelEn)}
                    </div>
                    <div className="text-[15px] font-medium" style={{ fontFamily: display, color: COLORS.ivory }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="fill-ivory" href="#" font={body}>
                  {t("브로셔 받기", "Get Brochure")} <ArrowRight size={13} />
                </Button>
                <Button variant="outline" href="#" font={body}>
                  {t("더 보기", "Learn More")}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
