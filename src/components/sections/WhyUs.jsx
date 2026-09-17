import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { DIFFERENTIATORS } from "../../data/differentiators";

export function WhyUs() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section id="why-us" style={{ backgroundColor: COLORS.blue }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="mb-5">
              <SectionLabel font={body} dark>{t("왜 시드니 복덕방인가요", "Why Sydney Bokdokbang")}</SectionLabel>
            </div>
            <h2
              className="font-medium leading-snug whitespace-pre-line"
              style={{ fontFamily: display, color: COLORS.warm, fontSize: "clamp(28px,3.4vw,46px)", lineHeight: 1.5 }}
            >
              {t("한국의 따뜻함으로\n시드니 부동산 전문성으로", "Korean Warmth\nSydney Property Expertise")}
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t" style={{ borderColor: "rgba(255,246,229,0.28)" }}>
          {DIFFERENTIATORS.map((item, i) => (
            <Reveal
              key={item.titleEn}
              delay={i * 70}
              className="border-r border-b p-8 lg:p-10"
              style={{ borderColor: "rgba(255,246,229,0.28)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-semibold"
                  style={{ fontFamily: display, color: COLORS.warm, fontSize: "13px", letterSpacing: "0.02em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-5 h-px" style={{ backgroundColor: COLORS.lime }} />
              </div>
              <h3 className="text-[17px] md:text-[19px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.warm }}>
                {t(item.titleKo, item.titleEn)}
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,246,229,0.78)", fontFamily: body }}>
                {t(item.descKo, item.descEn)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
