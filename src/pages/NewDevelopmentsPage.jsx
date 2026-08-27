import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { DEVELOPMENTS } from "../data/developments";

export function NewDevelopmentsPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("매물 · 신규개발", "Properties · New Developments")}
        titleKo="시드니의 다음 랜드마크들."
        titleEn="Sydney's next landmarks."
        descKo="시드니 복덕방이 파트너 디벨로퍼를 통해 선별한 신규 분양 프로젝트입니다."
        descEn="New-development projects curated by Sydney Bokdokbang through our developer partners."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {DEVELOPMENTS.map((dev, i) => (
              <Reveal key={dev.id} delay={(i % 3) * 70}>
                <Link to={`/new-developments/${dev.id}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                    <img
                      src={dev.img}
                      alt={dev.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
                        style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: body }}
                      >
                        {t(dev.statusKo, dev.statusEn)}
                      </span>
                    </div>
                  </div>
                  <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(dev.subKo, dev.suburb)}
                  </div>
                  <h3 className="text-[19px] mb-2 italic" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.ink }}>
                    {dev.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(dev.descKo, dev.descEn)}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[12.5px] font-medium pt-3.5"
                    style={{ color: COLORS.green, fontFamily: body, borderTop: `1px solid ${COLORS.stone}` }}
                  >
                    {t("프로젝트 보기", "View Project")} <ArrowRight size={13} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
