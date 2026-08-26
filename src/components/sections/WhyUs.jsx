import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { DIFFERENTIATORS } from "../../data/differentiators";

export function WhyUs() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="why-us" style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="mb-5">
              <SectionLabel font={body}>{t("왜 시드니 복덕방인가요", "Why Sydney Bokdokbang")}</SectionLabel>
            </div>
            <h2
              className="font-medium leading-snug whitespace-pre-line"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.55 }}
            >
              {t("한국의 따뜻함으로,\n시드니 부동산 전문성으로.", "Korean Warmth.\nSydney Property Expertise.")}
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t" style={{ borderColor: COLORS.stone }}>
          {DIFFERENTIATORS.map((item, i) => (
            <Reveal
              key={item.titleEn}
              delay={i * 70}
              className="border-r border-b p-8 lg:p-10"
              style={{ borderColor: COLORS.stone }}
            >
              <div className="w-5 h-px mb-6" style={{ backgroundColor: COLORS.yellow }} />
              <h3 className="text-[17px] md:text-[19px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ink }}>
                {t(item.titleKo, item.titleEn)}
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(item.descKo, item.descEn)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
