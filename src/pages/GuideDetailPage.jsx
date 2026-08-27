import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GUIDES, GUIDE_CATEGORIES } from "../data/guides";

export function GuideDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("가이드를 찾을 수 없습니다.", "Guide not found.")}
          </h1>
          <Link to="/guides" style={{ color: COLORS.green, fontFamily: body }}>{t("가이드로 돌아가기", "Back to Guides")}</Link>
        </div>
      </section>
    );
  }

  const category = GUIDE_CATEGORIES.find((c) => c.id === guide.category);

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <Reveal>
          <Link to="/guides" className="inline-flex items-center gap-1.5 text-[12.5px] mb-8" style={{ color: COLORS.dim, fontFamily: body, textDecoration: "none" }}>
            <ArrowLeft size={13} /> {t("가이드로 돌아가기", "Back to Guides")}
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <div className="max-w-2xl">
            {category && (
              <div className="mb-6">
                <SectionLabel font={body}>{t(category.labelKo, category.labelEn)}</SectionLabel>
              </div>
            )}
            <h1 className="font-medium mb-8" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.4vw,42px)", lineHeight: 1.4 }}>
              {t(guide.titleKo, guide.titleEn)}
            </h1>
            <p className="text-[15px] leading-relaxed" style={{ color: COLORS.ink, fontFamily: body }}>
              {t(guide.bodyKo, guide.bodyEn)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
