import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { GUIDE_CATEGORIES } from "../../data/guides";

/** Homepage teaser for the secondary "Guides & Resources" content (Area
 * Guides, Korean Settlement Guides, Buying/Renting Guides, Market Reports).
 * Kept out of the main header nav per the site's simple-nav IA. */
export function GuidesPreview() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="mb-5">
            <SectionLabel font={body}>{t("가이드 & 리소스", "Guides & Resources")}</SectionLabel>
          </div>
          <h2 className="font-medium mb-12 md:mb-16" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)" }}>
            {t("정착을 위한 실용 정보를 모았습니다.", "Practical guidance, gathered in one place.")}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUIDE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <Link to="/guides" className="group block" style={{ textDecoration: "none" }}>
                <h3 className="text-[15.5px] mb-2.5 leading-snug" style={{ fontFamily: display, color: COLORS.ink, fontWeight: 500 }}>
                  {t(cat.labelKo, cat.labelEn)}
                </h3>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t(cat.descKo, cat.descEn)}
                </p>
                <div className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: COLORS.green, fontFamily: body }}>
                  {t("보기", "Explore")} <ArrowRight size={11} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
