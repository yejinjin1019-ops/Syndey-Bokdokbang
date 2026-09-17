import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GUIDE_CATEGORIES, GUIDES } from "../data/guides";

export function GuidesPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("가이드 & 리소스", "Guides & Resources")}
        titleKo="시드니 정착을 위한 실용 정보"
        titleEn="Practical guidance for settling in Sydney"
        descKo="지역 가이드, 정착 정보, 매매/임대 절차, 시장 리포트를 한곳에서 확인하세요."
        descEn="Area guides, settlement information, buying/renting process guides, and market reports — all in one place."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20 flex flex-col">
          {GUIDE_CATEGORIES.map((cat, ci) => {
            const items = GUIDES.filter((g) => g.category === cat.id);
            return (
              <div key={cat.id} className={ci > 0 ? "mt-16 md:mt-20 pt-16 md:pt-20" : ""} style={ci > 0 ? { borderTop: `1px solid ${COLORS.stone}` } : undefined}>
                <Reveal>
                  <div className="mb-4">
                    <SectionLabel font={body}>{t(cat.labelKo, cat.labelEn)}</SectionLabel>
                  </div>
                  <p className="text-[14.5px] mb-10" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "560px", lineHeight: 1.65 }}>
                    {t(cat.descKo, cat.descEn)}
                  </p>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {items.map((g, i) => (
                    <Reveal key={g.slug} delay={i * 70}>
                      <Link to={`/guides/${g.slug}`} className="group block" style={{ textDecoration: "none" }}>
                        <h3 className="text-[17px] mb-2.5 leading-snug" style={{ fontFamily: display, color: COLORS.ink, fontWeight: 600 }}>
                          {t(g.titleKo, g.titleEn)}
                        </h3>
                        <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: COLORS.dim, fontFamily: body }}>
                          {t(g.excerptKo, g.excerptEn)}
                        </p>
                        <div className="flex items-center gap-1.5 text-[12.5px] font-semibold" style={{ color: COLORS.green, fontFamily: body }}>
                          <span className="border-b border-transparent group-hover:border-current">{t("읽어보기", "Read more")}</span> <ArrowRight size={12} />
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
